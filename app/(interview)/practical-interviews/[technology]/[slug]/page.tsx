export const dynamic = 'force-dynamic';
import React from 'react'

const SingleId = async ({params}:{params:{slug:string,technology:string}}) => {




	return (
		<div>
				{params.slug} - {params.technology}
			</div>
	)
}

export default SingleId