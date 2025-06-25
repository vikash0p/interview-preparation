import JavaScriptMockSingleClient from '@/components/mockInterviewComponents/javascript-mock-components/JavaScriptMockSingleClient';
import JavaScriptMockData from '@/main/data/javascriptData/JavaScriptMockData';

export function generateStaticParams() {
	return JavaScriptMockData.map((post) => ({
		id: post.link,
	}));
}

export default function JavaScriptMockSinglePage({
	params,
}: {
	params: { id: string };
}) {
	return <JavaScriptMockSingleClient id={params.id} />;
}
