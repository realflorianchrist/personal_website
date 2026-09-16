import score from './interstellar.json';

export const playbackDuration = score.duration;

const notesByKey = Array.from({ length: 88 }, (_, index) =>
  score.notes.filter((note) => note.midi === index + 21),
);

/** Mechanical key motion follows note-off, independently of the sustain pedal. */
export function getKeyRotation(index: number, time: number): number {
  let rotation = 0;
  for (const note of notesByKey[index] ?? []) {
    if (note.time > time) break;
    const end = note.time + note.duration;
    const release = 0.09;
    if (time >= end + release) continue;
    const attack = Math.min(0.035, note.duration / 2);
    const amount =
      time < end
        ? Math.min(1, (time - note.time) / Math.max(attack, 0.001))
        : Math.max(0, 1 - (time - end) / release);
    const eased = amount * amount * (3 - 2 * amount);
    rotation = Math.max(rotation, eased * (0.025 + note.velocity * 0.015));
  }
  return rotation;
}
