export default function page({ params }: { params: { category: string } }) {
  return <div>Category : {params.category}</div>;
}
