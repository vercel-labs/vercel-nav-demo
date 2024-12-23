import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Page({
  params,
}: {
  params: {
    team: string;
    section?: string[];
  };
}) {
  return (
    <div className="flex justify-between h-12">
      <ScrollArea>
        <div className="h-12 ml-0 flex space-x-8">
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  !params.section?.length,
              },
            )}
            href={`/${params.team}`}
            prefetch={true}
          >
            Overview
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'integrations',
              },
            )}
            href={`/${params.team}/integrations`}
            prefetch={true}
          >
            Integrations
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'activity',
              },
            )}
            href={`/${params.team}/activity`}
            prefetch={true}
          >
            Activity
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'domains',
              },
            )}
            href={`/${params.team}/domains`}
            prefetch={true}
          >
            Domains
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'usage',
              },
            )}
            href={`/${params.team}/usage`}
            prefetch={true}
          >
            Usage
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'observability',
              },
            )}
            href={`/${params.team}/observability`}
            prefetch={true}
          >
            Observability
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'storage',
              },
            )}
            href={`/${params.team}/storage`}
            prefetch={true}
          >
            Storage
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'support',
              },
            )}
            href={`/${params.team}/support`}
            prefetch={true}
          >
            Support
          </Link>
          <Link
            className={cn(
              'text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out',
              {
                'border-b-2 border-black text-slate-900 focus:border-indigo-700':
                  params.section?.[0] === 'settings',
              },
            )}
            href={`/${params.team}/settings`}
            prefetch={true}
          >
            Settings
          </Link>
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
    </div>
  );
}
