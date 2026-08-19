import React from 'react';
import HomeContainer from '@/components/container/HomeContainer';
import { HomeMetaData } from '@/main/meta/HomeMetaData';

export const metadata = HomeMetaData;

const page = () => {
  return <HomeContainer />;
};

export default page;
