import Dock from "@/components/mac_os/Dock";
import MenuBar from "@/components/mac_os/MenuBar";
import FinderIcon from "@/components/mac_os/icons/FinderIcon";
import ContactsIcon from "@/components/mac_os/icons/ContactsIcon";
import SafariIcon from "@/components/mac_os/icons/SafariIcon";

export default function MacOS() {
  return (
    <div className={"flex flex-col w-full h-full bg-blue-950 rounded-2xl"}>
      <MenuBar></MenuBar>

      <Dock className={"self-center absolute bottom-1"}>
        <FinderIcon active={true} />
        <ContactsIcon active={true} />
        <SafariIcon />
      </Dock>
    </div>
  );
}