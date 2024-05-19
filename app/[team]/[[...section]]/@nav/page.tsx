/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5tpUeamjMf6
 */
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default async function Page({
  params,
}: {
  params: {
    team: string;
    section?: string[]
  };
}) {
  return (
    <div className="flex justify-between h-12">
      <div className="hidden sm:ml-0 sm:flex sm:space-x-8">
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": !params.section?.length },
          )}
          href={`/${params.team}`}
        >
          Overview
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'integrations' },
          )}
          href={`/${params.team}/integrations`}
        >
          Integrations
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'activity' },
          )}
          href={`/${params.team}/activity`}
        >
          Activity
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'domains' },
          )}
          href={`/${params.team}/domains`}
        >
          Domains
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'usage' },
          )}
          href={`/${params.team}/usage`}
        >
          Usage
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'monitoring' },
          )}
          href={`/${params.team}/monitoring`}
        >
          Monitoring
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'storage' },
          )}
          href={`/${params.team}/storage`}
        >
          Storage
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'ai' },
          )}
          href={`/${params.team}/ai`}
        >
          AI
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'support' },
          )}
          href={`/${params.team}/support`}
        >
          Support
        </Link>
        <Link
          className={cn(
            "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
            { "border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'settings' },
          )}
          href={`/${params.team}/settings`}
        >
          Settings
        </Link>
      </div>
    </div>
  );
}