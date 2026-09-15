"""Convert a standard MIDI file into timed piano notes (no dependencies).

Usage: python3 scripts/convert_keyboard_midi.py input.mid output.json
"""
import json
import struct
import sys
from collections import defaultdict, deque
from pathlib import Path


def convert(data):
    assert data[:4] == b'MThd', 'Not a MIDI file'
    header_length = struct.unpack_from('>I', data, 4)[0]
    fmt, tracks, division = struct.unpack_from('>HHH', data, 8)
    assert fmt in (0, 1) and not division & 0x8000, 'Requires format 0/1 with PPQ timing'
    offset = 8 + header_length
    events = []
    last_tick = 0
    for track in range(tracks):
        assert data[offset:offset + 4] == b'MTrk'
        length = struct.unpack_from('>I', data, offset + 4)[0]
        cursor, end = offset + 8, offset + 8 + length
        tick, running = 0, None

        def vlq():
            nonlocal cursor
            value = 0
            while True:
                byte = data[cursor]
                cursor += 1
                value = (value << 7) | (byte & 127)
                if byte < 128:
                    return value

        while cursor < end:
            tick += vlq()
            status = data[cursor]
            if status >= 128:
                cursor += 1
                if status < 0xF0:
                    running = status
            else:
                assert running is not None, 'Missing running status'
                status = running
            if status == 0xFF:
                kind = data[cursor]
                cursor += 1
                size = vlq()
                if kind == 0x51:
                    events.append((tick, 'tempo', int.from_bytes(data[cursor:cursor + size], 'big')))
                cursor += size
            elif status in (0xF0, 0xF7):
                size = vlq()
                cursor += size
                running = None
            else:
                kind, channel = status >> 4, status & 15
                size = 1 if kind in (0xC, 0xD) else 2
                payload = data[cursor:cursor + size]
                cursor += size
                if kind in (8, 9) and channel != 9:
                    pitch, velocity = payload
                    events.append((tick, 'on' if kind == 9 and velocity else 'off', track, channel, pitch, velocity))
        last_tick = max(last_tick, tick)
        offset = end

    active = defaultdict(deque)
    notes = []
    tempo, previous, seconds = 500000, 0, 0.0
    for event in sorted(events, key=lambda event: event[0]):
        tick, kind, *args = event
        seconds += (tick - previous) * tempo / division / 1_000_000
        previous = tick
        if kind == 'tempo':
            tempo = args[0]
            continue
        track, channel, pitch, velocity = args
        key = (track, channel, pitch)
        if kind == 'on':
            active[key].append((seconds, velocity))
        elif active[key]:
            start, strength = active[key].popleft()
            notes.append(dict(midi=pitch, time=round(start, 6), duration=round(seconds - start, 6), velocity=round(strength / 127, 4)))
    assert not any(active.values()), 'MIDI contains notes without note-off events'
    assert notes and all(21 <= n['midi'] <= 108 for n in notes), 'Notes outside the 88-key piano range'
    duration = seconds + (last_tick - previous) * tempo / division / 1_000_000
    return dict(duration=round(duration, 6), notes=sorted(notes, key=lambda n: n['time']))


if __name__ == '__main__':
    result = convert(Path(sys.argv[1]).read_bytes())
    Path(sys.argv[2]).write_text(json.dumps(result, separators=(',', ':')) + '\n')
    print(f"Converted {len(result['notes'])} notes, {result['duration']:.2f} seconds")
