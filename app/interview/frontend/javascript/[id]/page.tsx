import JavaScriptMockSingleClient from "@/components/javascript-components/JavaScriptHelperComponents/JavaScriptMockSingleClient";
import JavaScriptMockData from "@/main/data/javascriptData/JavaScriptMockData";


export function generateStaticParams() {
  return JavaScriptMockData.map((post) => ({
    id: post.link,
  }));
}

export default function JavaScriptMockSingle({ params,}: { params: { id: string }}) {
  return <JavaScriptMockSingleClient id={params.id} />;
}
