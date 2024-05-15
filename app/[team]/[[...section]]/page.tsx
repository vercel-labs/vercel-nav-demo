export default function Page({
  params,
}: {
  params: {
    team: string;
    section?: string[]
  };
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mt-8">This is the {params.section?.[0] || "home"} dashboard page content.</p>
    </section>
  );
}
