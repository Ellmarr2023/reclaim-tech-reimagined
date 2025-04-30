
import { createContext, useContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "light";
  storageKey?: string;
};

type ThemeProviderState = {
  theme: "light";
  setTheme: () => null;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "reclaim-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Always using light theme
  const [theme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove dark class if present
    root.classList.remove("dark");
    // Add light class
    root.classList.add("light");
  }, []);

  const value = {
    theme: "light" as const,
    setTheme: () => null,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
