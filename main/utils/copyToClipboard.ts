import { toast } from 'react-toastify';

export const copyToClipboard = (text: string) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			toast.success('Copied to clipboard!', {
				position: 'bottom-right',
				autoClose: 2000,
			});
		})
		.catch((error) => {
			toast.error('Failed to copy text.', {
				position: 'bottom-right',
				autoClose: 2000,
			});
			console.error('Clipboard copy failed:', error);
		});
};
