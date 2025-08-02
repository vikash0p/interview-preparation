import React from 'react'

const SingleId = async ({params}:{params:{slug:string,technology:string}}) => {
	const { slug,technology } = params

	const res= await fetch(`http://localhost:5000/api/practical-interviews/technology/${technology}/slug/${slug}`)
	const result = await res.json();


	return (
		<div>
		technology	-{slug}
			<pre className='text-wrap'>
				{JSON.stringify(result, null, 2)}
			</pre>
			</div>
	)
}

export default SingleId