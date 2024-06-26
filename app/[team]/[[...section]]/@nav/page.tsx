/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5tpUeamjMf6
 */
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

function Team({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-full border border-slate-200">
        <img
          alt="ACME Logo"
          className="h-4 w-4 aspect-square object-cover"
          height="16"
          src="/acme.svg"
          width="16"
        />
      </div>
      <span className="ml-1 text-lg font-medium">{name}</span>
      <Badge className="text-sm font-medium" variant="secondary">
        Pro
      </Badge>
      <ChevronDownIcon className="ml-1 h-4 w-4" />
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: {
    team: string;
    section?: string[]
  };
}) {
  let res = await fetch(`https://api.github.com/users/${params.team}`);
  let { login, avatar_url } = await res.json();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Team name={login} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select Team</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <Link href="/rauchg">
                      <DropdownMenuItem className={cn({"bg-slate-50": params.team === 'rauchg'}, "cursor-pointer")}>
                        rauchg
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/shadcn">
                      <DropdownMenuItem className={cn({"bg-slate-50": params.team === 'shadcn'}, "cursor-pointer")}>
                        shadcn
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/leerob">
                      <DropdownMenuItem className={cn({"bg-slate-50": params.team === 'leerob'}, "cursor-pointer")}>
                        leerob
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center">
            <Button className="justify-start gap-2" size="sm" variant="outline">
              Feedback
            </Button>
            <BellIcon className="mx-4 h-5 w-5 text-slate-400" />
            <Image
              alt="Avatar"
              className="h-8 w-8 rounded-full"
              height={32}
              src={avatar_url}
              width={32}
            />
          </div>
        </div>
        <div className="flex justify-between h-12">
          <div className="hidden sm:ml-0 sm:flex sm:space-x-8">
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": !params.section?.length},
              )}
              href={`/${params.team}`}
            >
              Overview
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'integrations'},
              )}
              href={`/${params.team}/integrations`}
            >
              Integrations
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'activity'},
              )}
              href={`/${params.team}/activity`}
            >
              Activity
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'domains'},
              )}
              href={`/${params.team}/domains`}
            >
              Domains
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'usage'},
              )}
              href={`/${params.team}/usage`}
            >
              Usage
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'monitoring'},
              )}
              href={`/${params.team}/monitoring`}
            >
              Monitoring
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'storage'},
              )}
              href={`/${params.team}/storage`}
            >
              Storage
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'ai'},
              )}
              href={`/${params.team}/ai`}
            >
              AI
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'support'},
              )}
              href={`/${params.team}/support`}
            >
              Support
            </Link>
            <Link
              className={cn(
                "text-slate-500 hover:text-slate-700 inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition duration-150 ease-in-out",
                {"border-b-2 border-black text-slate-900 focus:border-indigo-700": params.section?.[0] === 'settings'},
              )}
              href={`/${params.team}/settings`}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}
