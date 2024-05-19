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
import { Suspense } from 'react';
import { BellIcon, ChevronDownIcon } from 'lucide-react';

async function getTeam(team: string) {
  let res = await fetch(`https://api.github.com/users/${team}`, {
    headers: {
      'Authorization': `Basic ${btoa(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`)}`,
    }
  });
  let { login, avatar_url } = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { login, avatar_url }
}

async function Team({ id }: { id: string }) {
  const { login: name } = await getTeam(id);

  return (
    <div className="flex items-center gap-2 h-8">
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

async function Avatar({ id }: { id: string }) {
  const { avatar_url } = await getTeam(id);

  return (
    <Image
      alt="Avatar"
      className="h-8 w-8 rounded-full"
      height={32}
      src={avatar_url}
      width={32}
    />
  )
}

export default function SectionLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    team: string;
  };
}) {
  return (
    <>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Suspense fallback={<div className="h-8 w-48 bg-slate-200 animate-pulse" />}>
                      <Team id={params.team} />
                    </Suspense>
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
              <Suspense fallback={<div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse" />}>
                <Avatar id={params.team} />
              </Suspense>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
