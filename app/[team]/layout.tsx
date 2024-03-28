export default function DashboardLayout({
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
