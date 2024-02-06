export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-xl mx-auto p-5 bg-white">{children}</main>;
}
