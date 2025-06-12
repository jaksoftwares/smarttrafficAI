'use client';

import { createContext, ReactNode, useState } from "react";

type DashboardContextType = {
  selectedComponent: ReactNode | null;
  setSelectedComponent: (comp: ReactNode | null) => void;
};

export const DashboardContext = createContext<DashboardContextType>({
  selectedComponent: null,
  setSelectedComponent: () => {},
});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(null);

  return (
    <DashboardContext.Provider value={{ selectedComponent, setSelectedComponent }}>
      {children}
    </DashboardContext.Provider>
  );
};
