"use client";

import { Link as NavLink} from "@/types/link";
import { NavLogo } from "@/components/navbar/nav-logo";
import { MainNavMenu } from "@/components/navbar/main-nav-menu";
import { DropdownNav } from "@/components/navbar/dropdown-nav";
import { DrawerButton } from "@/components/navbar/drawer-button";
import { GlassDrawer } from "@/components/navbar/glass-drawer";
import { DrawerLinks } from "@/components/navbar/drawer-links";
import { DrawerProvider } from "@/context/drawer-provider";

export function Navbar({ links }: { links: NavLink[] }) {
  return (
    <DrawerProvider>
      <DropdownNav>
        <NavLogo />
        <MainNavMenu links={links}/>
        <DrawerButton />
      </DropdownNav>
      <GlassDrawer>
        <DrawerLinks links={links} />
      </GlassDrawer>
    </DrawerProvider>
  );
}