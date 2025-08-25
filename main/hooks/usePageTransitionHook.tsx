'use client';
import { useTransition } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '@/main/animation/practical-interview.animation';

export function usePageTransition() {
  const router = useTransitionRouter();
  const [isPending, startTransition] = useTransition();

  const navigate = (link: string) => {
    startTransition(() => {
      router.push(link, {
        onTransitionReady: () => {
          slideInOut();
          window.scrollTo({ top: 0, behavior: 'smooth' }); 
        },
      });
    });
  };

  return { isPending, navigate };
}
