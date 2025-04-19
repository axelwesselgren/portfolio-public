import { useDrawer } from "@/context/drawer-provider";
import { AnimatePresence, motion } from "framer-motion";

export function GlassDrawer({ children }: { children: React.ReactNode }) {
  const { open } = useDrawer();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden mt-14 bg-background/80 backdrop-blur-xs"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className=" mx-auto flex flex-col p-4 space-y-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
