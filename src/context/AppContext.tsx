import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Features } from "../types/type";

type AppContextType = {
  results: any[]; // replace with your result type
  setResults: (data: any[]) => void;
  loadingResult: boolean;
  setLoadingResult: (vaule: boolean) => void;
  selectedOA: any;
  setSelectedOA: (oa: any) => void;
  week: number;
  setWeek: (week: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// 3. Provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [loadingResult, setLoadingResult] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  const [selectedOA, setSelectedOA] = useState<any>();
  const [week, setWeek] = useState<number>(1);
  const contextValue = useMemo(
    () => ({
      results,
      setResults,
      loadingResult,
      setLoadingResult,
      selectedOA,
      setSelectedOA,
      week,
      setWeek,
    }),
    [results, loadingResult, selectedOA, week]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// 4. Hook for easy access
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useOptimizer must be used within OptimizerProvider");
  return context;
};
