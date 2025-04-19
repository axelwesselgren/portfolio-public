import React from "react";
import { createContext } from "react";

const tagContext = createContext<{
  selectedTag: string | null;
  setTag: (tag: string | null) => void;
  clearTag: () => void;
}>({
  selectedTag: null,
  setTag: () => {},
  clearTag: () => {},
});

export const TagProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const setTag = (tag: string | null) => setSelectedTag(tag);
  const clearTag = () => setSelectedTag(null);

  return (
    <tagContext.Provider value={{ selectedTag, setTag, clearTag }}>
      {children}
    </tagContext.Provider>
  );
};

export const useTag = () => React.useContext(tagContext);