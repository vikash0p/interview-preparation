export default function Ids({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return <div>Slug: {slug}</div>;
}
