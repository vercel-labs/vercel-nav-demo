import { Search, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

interface Deployment {
  id: string;
  message: string;
  timestamp: string;
  branch: string;
  status: 'loading' | 'ready' | 'error';
}

const deployments: Deployment[] = [
  {
    id: 'any1bkys8',
    message: 'Track error events on vercel site to Web Analytics (#22048)',
    timestamp: '14m ago',
    branch: 'main',
    status: 'loading',
  },
  {
    id: 'sa6tcgt2',
    message: 'check in additional load only on slow response',
    timestamp: '14m ago',
    branch: 'DOC-2693-cmdk-item-rendering-crash',
    status: 'ready',
  },
  {
    id: '6gopakoj3',
    message: 'Changes Edge Config store',
    timestamp: '14m ago',
    branch: 'fix-startup-credit-form-errors-and-address-feedback',
    status: 'ready',
  },
  {
    id: 'dq8vgz488',
    message: 'Unused eslint directive',
    timestamp: '14m ago',
    branch: 'surf-3177_proj-env-vars-page-performance_a_virtuoso',
    status: 'ready',
  },
  {
    id: 'k4km2wqv6',
    message: 'fix sha resource use',
    timestamp: '14m ago',
    branch: 'kevvy/CORE-1483',
    status: 'ready',
  },
  {
    id: 'ccufnu119',
    message: 'remove reduce motion bc plays before in view',
    timestamp: '14m ago',
    branch: 'kevvy/site-262-observability-page-hero-animation',
    status: 'ready',
  },
];

export default function DeploymentsTable() {
  return (
    <div className="w-full max-w-[1200px] pt-6">
      <h1 className="text-xl font-semibold mb-4">Your Deployments</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <input
            type="text"
            placeholder="Search your deployments..."
            className="w-full h-12 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px] border-gray-200 h-12">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ready">Ready</SelectItem>
            <SelectItem value="error">Error</SelectItem>
            <SelectItem value="loading">Loading</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableBody>
            {deployments.map((deployment) => (
              <TableRow
                key={deployment.id}
                className="flex flex-col sm:table-row sm:h-12"
              >
                <TableCell className="py-4 sm:py-0 sm:w-[45%] sm:pr-2">
                  <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row sm:h-full sm:overflow-hidden">
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="relative h-4 w-4 flex-shrink-0">
                        <div
                          className={`absolute inset-0 rounded-full ${
                            deployment.status === 'loading'
                              ? 'bg-orange-100'
                              : deployment.status === 'ready'
                                ? 'bg-green-100'
                                : 'bg-red-100'
                          }`}
                        />
                        <div
                          className={`absolute inset-[4px] rounded-full ${
                            deployment.status === 'loading'
                              ? 'bg-orange-400'
                              : deployment.status === 'ready'
                                ? 'bg-green-400'
                                : 'bg-red-400'
                          }`}
                        />
                      </div>
                      <span className="font-mono text-sm text-gray-600">
                        {deployment.id}
                      </span>
                    </div>
                    <span className="text-sm mt-2 sm:mt-0 sm:truncate">
                      {deployment.message}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 sm:py-0 sm:w-[45%] sm:px-2 sm:text-right">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end gap-1 text-sm text-gray-500 sm:h-full sm:overflow-hidden">
                    <span className="whitespace-nowrap sm:flex-shrink-0">
                      {deployment.timestamp}
                    </span>
                    <span className="hidden sm:inline sm:flex-shrink-0">
                      on
                    </span>
                    <span className="font-mono sm:truncate">
                      {deployment.branch}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-4 sm:py-0 sm:w-[2%] sm:pl-2 sm:pr-4 text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 ml-auto sm:ml-0"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          variant="ghost"
          className="w-full h-12 rounded-none hover:bg-gray-50 transition-colors duration-200 text-sm font-medium text-black border-t border-gray-200"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
