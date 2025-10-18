export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:w-8/12 mx-auto py-16">{children}</div>;
}
