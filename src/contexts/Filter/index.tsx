import React, { createContext, Dispatch, useContext, useState } from 'react';
// import { useRouter } from 'next/router';

export type FilterContextType = {
  filters: Record<string, any>;
  setFilters: Dispatch<any>;
  removeFilter(filter: string): void;
  clearFilters(): void;
};

export const filterContextDefaultValues: FilterContextType = {
  filters: {},
  setFilters: () => {},
  removeFilter: () => {},
  clearFilters: () => {},
};

export const FiltersContext = createContext<FilterContextType>(
  filterContextDefaultValues
);

export type Filters = Record<string, any>;

export const FilterProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({});

  const removeFilter = (filterToRemove: string) => {
    delete filters[filterToRemove];
    setFilters({ ...filters });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <>
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
          removeFilter,
          clearFilters,
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
