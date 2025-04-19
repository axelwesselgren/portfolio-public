import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export function DropdownNav({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn("fixed w-full z-50 bg-background/80 backdrop-blur-xs", {
        "border-b border-neutral-300 dark:border-neutral-900": scrolled,
      })}
    >
      <div className="w-full max-w-[1300px] px-4 mx-auto items-center justify-between flex h-14">
        {children}
      </div>
    </motion.nav>
  );
}
