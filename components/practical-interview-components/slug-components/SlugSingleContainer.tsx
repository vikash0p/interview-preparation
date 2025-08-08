'use client';
import { useParams } from 'next/navigation';
import { useGetInterviewBySlugQuery } from '@/main/redux-toolkit/services/practical-interviews/practicalInterviewApi';
import { SlugLoading } from '@/components/utilsComponent/loading-components/SlugLoading';
import { SlugError } from '@/components/utilsComponent/error-components/SlugError';
import { SlugHeader } from './SlugHeader';
import {SlugSideBar} from './SlugSideBar';
import {SlugMainContent} from './SlugMainContent';
import { SlugMainCode } from "./SlugMainCode";

const SlugSingleContainer = () => {
  const { slug, technology } = useParams() as { slug: string; technology: string };
  const { data, isLoading, isError } = useGetInterviewBySlugQuery({ technology, slug });

  if (isLoading) return <SlugLoading />;
  if (isError || !data || !data.data) return <SlugError />;

  const interviewData = data.data;

  return (
    <main className="min-h-screen bg-gray-900 text-gray-300">
      {/* Header */}
      <SlugHeader data={interviewData} />

      {/* Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12  ">
        <SlugMainContent data={interviewData} />
        <SlugSideBar data={interviewData} />
      </section>

      <section>
        <SlugMainCode />
      </section>
    </main>
  );
};

export default SlugSingleContainer;
