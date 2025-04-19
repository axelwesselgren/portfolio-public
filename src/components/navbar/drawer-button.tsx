import { Button } from "@/components/ui/button";
import { useDrawer } from "@/context/drawer-provider";
import { MenuIcon, X } from "lucide-react";

export function DrawerButton() {
  const { open, toggleDrawer } = useDrawer();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDrawer}
      className="md:hidden"
    >
      {open ? (
        <X className="w-6 h-6 animate" />
      ) : (
        <MenuIcon className="w-6 h-6" />
      )}
    </Button>
  );
}