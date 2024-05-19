export default function SectionLayout({
  children,
  nav,
}: {
  children: React.ReactNode;
  nav: React.ReactNode;
}) {
  return (
    <>
      {nav}
      {children}
    </>
  );
}
