import Dock from "@/components/mac_os/Dock";
import MenuBar from "@/components/mac_os/MenuBar";
import ContactsIcon from "@/components/mac_os/programs/icons/ContactsIcon";
import SafariIcon from "@/components/mac_os/programs/icons/SafariIcon";
import Finder from "@/components/mac_os/programs/finder/Finder";
import UsableScreenRect from "@/components/mac_os/UsableScreenRect";

export default function MacOS() {
  return (
    <div className={"flex flex-col w-full h-full bg-blue-950 rounded-2xl overflow-hidden"}>
      <MenuBar />
      <UsableScreenRect>
        <Dock className={"absolute bottom-1 left-1/2 -translate-x-1/2"}>
          <Finder />
          <ContactsIcon programName={"Contact"} />
          <SafariIcon programName={"Safari"} />

          {/*[ Finder ] → About*/}
          {/*[ Terminal ] → Experiments / Tech*/}
          {/*[ Contact ] → Contact*/}
          {/*[ Safari ] → Projects*/}
        </Dock>
      </UsableScreenRect>
    </div>
  );
}