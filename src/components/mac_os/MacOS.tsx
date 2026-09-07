import MenuBar from '@/components/mac_os/MenuBar';
import Contact from '@/components/mac_os/programs/contact/Contact';
import Finder from '@/components/mac_os/programs/finder/Finder';
import UsableScreenRect from '@/components/mac_os/UsableScreenRect';
import Dock from './dock/Dock';
import Safari from './programs/safari/Safari';

export default function MacOS() {
  return (
    <div
      className={
        'flex flex-col w-full h-full bg-blue-950 rounded-2xl overflow-hidden '
      }
    >
      <MenuBar />
      <UsableScreenRect>
        <Dock className={'absolute bottom-1 left-1/2 -translate-x-1/2'}>
          <Finder />
          <Contact />
          <Safari />
        </Dock>
      </UsableScreenRect>
    </div>
  );
}
