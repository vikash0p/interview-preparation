import React from 'react'

const SlugPage = async ({params}:{params:{slug:string, technology:string}}) => {
  const {technology, slug } = params;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/practical-interviews/technology/${technology}/slug/${slug} `	);

      const singleInterview = await res.json();
      console.log("🚀 ~ page.tsx:9 ~ singleInterview:", singleInterview);

  return (
    <div>
      <pre>
        {
          JSON.stringify(singleInterview, null, 2)
        }
      </pre>
    </div>
  )
}

export default SlugPage