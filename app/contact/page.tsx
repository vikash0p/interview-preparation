import React from 'react';
import Contact from './_ContactContainer';
import { ContactMetaData } from "@/main/meta/ContactMetaData";

export const metadata=ContactMetaData
const Page = () => {
	return (
		<>
			<Contact />
		</>
	);
};

export default Page;
