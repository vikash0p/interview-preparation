'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { IPFilterKey } from '@/main/types/mock-interview.types';


export function useInterviewFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const category = searchParams.get('category') ?? '';
  const difficulty = searchParams.get('difficulty') ?? '';

  const updateSearchParams = useCallback(
    (key: IPFilterKey, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  return { category, difficulty, updateSearchParams };
}
