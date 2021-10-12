import React, { createContext, Dispatch, useContext, useState } from 'react';
// import { useRouter } from 'next/router';

export type FilterContextType = {
  filters: Record<string, any>;
  setFilters: Dispatch<any>;
  removeFilters(): void;
};

export const filterContextDefaultValues: FilterContextType = {
  filters: {},
  setFilters: () => {},
  removeFilters: () => {},
};

export const FiltersContext = createContext<FilterContextType>(
  filterContextDefaultValues
);

export type Filters = Record<string, any>;

export const FilterProvider: React.FC = ({ children }) => {
  // const router = useRouter();
  // const { query } = router;

  const [filters, setFilters] = useState<Filters>({});

  // const setFilters = () => {};
  const removeFilters = () => {};

  return (
    <>
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
          removeFilters,
        }}
      >
        {children}
      </FiltersContext.Provider>
    </>
  );
};

export function useFilter() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }

  return context;
}
