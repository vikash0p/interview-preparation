import React from 'react'

const SlugError = () => {
  return (
		<div className='text-center py-20 bg-gray-900 min-h-screen'>
			<div className='inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4'>
				<div className='text-red-500 text-4xl'>⚠️</div>
			</div>
			<h2 className='text-2xl font-bold text-gray-300 mb-2'>
				Problem Loading Failed
			</h2>
			<p className='text-gray-400 mb-6'>
				Please try again later or contact support
			</p>
			<button
				onClick={() => window.location.reload()}
				className='px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all'
			>
				Retry
			</button>
		</div>
	);
}

export default SlugError