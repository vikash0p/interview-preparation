'use client'; // Error boundaries must be Client Components

export default function GlobalError({
	error,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const errorCode = error.digest || 'ERR_GLOBAL_500';

	return (
		<html lang='en'>
			<head>
				<title>Error</title>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content='An error occurred while loading the application.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				<style>{`
          body {
            background-color: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
          }
          h1 {
            font-size: 2rem;
            font-weight: bold;
            color: #f87171;
            margin-bottom: 0.5rem;
          }
          p {
            margin: 0.25rem 0;
            color: #d1d5db;
          }
          .error-code {
            color: #f87171;
            font-family: monospace;
          }
          button {
            margin-top: 1rem;
            padding: 0.5rem 1.5rem;
            background-color: #5047e5;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #5047e5;
          }
        `}</style>
			</head>
			<body>
				<div>
					<h1>Something went wrong</h1>
					<p>A global error occurred while loading the application.</p>
					<p>
						Error Code: <span className='error-code'>{errorCode}</span>
					</p>
					<button
						type='button'
						onClick={() => window.location.reload()}
						aria-label='Retry loading the application'
					>
						Try Again
					</button>
				</div>
			</body>
		</html>
	);
}
