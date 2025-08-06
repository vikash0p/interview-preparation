'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { IPFilterKey } from '@/main/types/mock-interview.types';

type FilterParams = {
  category: string;
  difficulty: string;
};

export function useInterviewFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get all current filter values
  const currentFilters = useMemo(
    () => ({
      category: searchParams.get('category') ?? '',
      difficulty: searchParams.get('difficulty') ?? '',
    }),
    [searchParams]
  );

  // Count of active filters
  const activeFilterCount = useMemo(() => Object.values(currentFilters).filter(Boolean).length, [currentFilters]);

  // Update single filter
  const updateSearchParams = useCallback( (updates: Partial<FilterParams>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        const filterKey = key as IPFilterKey;
        if (value) {
          params.set(filterKey, value);
        } else {
          params.delete(filterKey);
        }
      });

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  // Reset all filters
  const resetFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    ['category', 'difficulty'].forEach(key => params.delete(key));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, router, pathname]);

  // Check if a specific filter is active
  const isFilterActive = useCallback((key: IPFilterKey, value: string) => currentFilters[key] === value, [currentFilters]);

  return {
    category: currentFilters.category,
    difficulty: currentFilters.difficulty,
    updateSearchParams,
    resetFilters,
    activeFilterCount,
    isFilterActive,
    hasFilters: activeFilterCount > 0,
  };
}
