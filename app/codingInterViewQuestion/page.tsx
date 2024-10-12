import Grid from '@/components/animata/background/grid';
import { LinkData } from '@/data/LinkData';
import Link from 'next/link';
import React from 'react'

const codingInterViewQuestion = () => {
  return (
    <Grid>
      <div className="container m-auto  py-20  flex gap-10 flex-wrap ">
        {LinkData.map((value) => {
          return (
            <Link
              className="bg-gray-950 text-white px-8 py-3 text-xl hover:bg-gray-800"
              href={value.url}
              key={value.id}
            >
              {value.name}
            </Link>
          );
        })}
      </div>{" "}
    </Grid>
  );
}

export default codingInterViewQuestion
