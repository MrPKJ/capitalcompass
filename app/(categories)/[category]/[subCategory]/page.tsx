export default function page({
  params,
}: {
  params: { subCategory: string; category: string };
}) {
  return (
    <>
      <div>Category : {params.category}</div>
      <div>SubCategory : {params.subCategory}</div>
    </>
  );
}
