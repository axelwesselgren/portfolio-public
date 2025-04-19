import React, { useContext } from "react";
import { createContext } from "react";

const DrawerContext = createContext<{
  open: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}>({
  open: false,
  toggleDrawer: () => {},
  closeDrawer: () => {},
});

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  return (
    <DrawerContext.Provider value={{ open, toggleDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
