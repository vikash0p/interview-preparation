import React from 'react';
import { ContactMetaData } from '@/main/meta/ContactMetaData';
import ContactPageWrapper from './_ContactPageWrapper';

export const metadata = ContactMetaData;
const Page = () => {
	return (
		<>
			<ContactPageWrapper />
		</>
	);
};

export default Page;
