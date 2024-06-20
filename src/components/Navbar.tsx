import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navMenu } from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center p-2 px-8">
      <Link href={"/"}>
        <Image width={179} height={30} src={"/logo.svg"} alt="Aidwise" />
      </Link>
      <Menubar className="mx-auto border-none z-10">
        {navMenu.map((item, idx) => (
          <MenubarMenu key={idx}>
            <MenubarTrigger className="">{item.label}</MenubarTrigger>
            <MenubarContent>
              {item.inMenu.map((item, idx) => (
                <MenubarItem key={idx}>
                  <Link href={item.url}>{item.name}</Link>
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};

export default Navbar;
