import React from 'react';
import { Link } from 'next-view-transitions';

const SlugPage = async ({ params }: { params: { category: string; technology: string; slug: string } }) => {
	console.log("🚀 ~ SlugPage ~ params:", params);

	const { category, technology, slug } = params;

	// Run both fetch calls concurrently
	const [resData, resTechData] = await Promise.all([
		fetch(`https://backend-interview-prap-api.vercel.app/api/mock-interviews/category/${category}/technology/${technology}/slug/${slug}`).then((res) => res.json()),
		fetch(`https://backend-interview-prap-api.vercel.app/api/mock-interviews/slugs/category/${category}/technology/${technology}`).then((res) => res.json())
	]);

	console.log("🚀 ~ Page ~ resData:", resData);
	console.log("🚀 ~ Page ~ resTechData:", resTechData);

	return (
		<section className='py-10 flex flex-col lg:flex-row gap-2 w-full min-h-screen'>
			<section className='basis-1/4 h-screen border border-red-500 overflow-y-auto'>
				{resTechData?.data?.map((item: { slug: string; _id: string }) => (
					<Link
						href={`/mock-interviews/${category}/${technology}/${item.slug}`}
						key={item._id}
						className='block p-2 hover:bg-gray-700 transition-all'
					>
						{item.slug}
					</Link>
				))}
			</section>

			<section className='basis-3/4 h-full border border-green-500'>
				<h1 className='text-lg font-bold mb-4'>
					{category} - {technology} - {slug}
				</h1>
				<pre className='text-sm whitespace-pre-wrap'>{JSON.stringify(resData, null, 2)}</pre>
			</section>
		</section>
	);
};

export default SlugPage;
