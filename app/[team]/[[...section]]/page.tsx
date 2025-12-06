import DeploymentsTable from '@/components/deployments';

export default async function Page({
  params,
}: {
  params: Promise<{
    team: string;
    section?: string[];
  }>;
}) {
  const { section: sectionParam } = await params;
  let section = sectionParam?.[0] || 'home';
  if (section === 'home') {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DeploymentsTable />
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mt-8">This is the {section} dashboard page content.</p>
    </section>
  );
}
