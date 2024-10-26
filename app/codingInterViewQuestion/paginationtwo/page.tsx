import HomeContainer from "@/components/core/HomeContainer";
import React from "react"
interface postsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const PaginationTow = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: postsData[] = await posts.json();
  console.log("🚀 ~ file: page.tsx:6 ~ data:", data);
  return (
    <>
      <HomeContainer data={data} />
      
    </>
  );
};

export default PaginationTow;
