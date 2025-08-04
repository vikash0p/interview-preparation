'use client';
import React, { useRef } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useGetAllSlugsByTechnologyQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { SideBarHeader } from './SideBarHeader';
import { SideBarCard } from './SideBarCard';
import { SideBarCardLoading } from '../utilsComponent/loading-components/SideBarCardLoading';
import { SideBarCardError } from '../utilsComponent/error-components/SideBarCardError';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';

const SideBarContainer = () => {
  const pathname = usePathname();
  const params = useParams();
  const technology = params?.technology as string;
  const router = useRouter();
  const { data, isLoading, refetch, isError } = useGetAllSlugsByTechnologyQuery(technology);

  const slugs: string[] = React.useMemo(() => data?.data ?? [], [data]);

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll active item into view
  React.useEffect(() => {
    if (!slugs.length) return;
    const parts = pathname.split('/');
    const current = parts[parts.length - 1];
    const el = itemRefs.current[current];
    const container = containerRef.current;
    if (el && container) {
      const top = el.offsetTop;
      const mid = container.clientHeight / 2 - el.offsetHeight / 2;
      container.scrollTo({ top: top - mid, behavior: 'smooth' });
    }
  }, [pathname, slugs]);

  const handleNav = (slug: string) => {
    router.push(`/practical-interviews/${technology}/${slug}`);
  };

  const { isSidebarOpen } = useSidebarStore();

  return (
    <section
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden bg-gray-800/60  sticky top-0 "
      aria-label={`${technology} interview questions`}
    >
      <div className={`flex flex-col gap-3   ${isSidebarOpen ? 'items-start' : 'items-center py-2'}`}>
        <SideBarHeader />
        <motion.ul className={`space-y-3 mb-28 lg:mb-10  ${isSidebarOpen ? 'w-full' : ''} `}>
          <AnimatePresence mode="wait">
            {isError ? (
              <SideBarCardError
                message="Failed to load sidebar"
                description="We couldn’t load the interview list. Please try again."
                onRetry={refetch}
              />
            ) : isLoading && !slugs.length ? (
              <SideBarCardLoading />
            ) : (
              <AnimatePresence>
                {slugs.map((slug, idx) => (
                  <SideBarCard
                    key={slug}
                    slug={slug}
                    index={idx}
                    isActive={pathname.endsWith(`/${slug}`)}
                    onClick={handleNav}
                    setRef={(el: HTMLLIElement | null) => (itemRefs.current[slug] = el)}
                  />
                ))}
              </AnimatePresence>
            )}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
};

export default SideBarContainer;
