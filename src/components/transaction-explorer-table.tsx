"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { truncateAddress } from "@/lib/utils";
import moment from "moment";
import { FileText } from "lucide-react";
import { Transaction } from "@/lib/types";

const data: Transaction[] = [
  {
    hash: "0x29d3f03bcd2d6099f962df834640c8a91fbba3900c3a9c9dc5896d55c26d486a",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832059",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
  {
    hash: "0x0d0cd264464ce1ce83b3ba547ff15ffbdbaf1fb1d8c1570cb57b78dee76cd5bf",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832359",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
  {
    hash: "0x04537902ea05e1ba046a056e5d4ac13444fc2e6d1f2f99d39978163ef69702a2",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832359",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
  {
    hash: "0xa1efc87b91aafed2293bdf40e2203ebd6f1602f187ad7aaf5a7946f9ad730c7e",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832335",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
  {
    hash: "0x29d3f03bcd2d6099f962df834640c8a91fbba3900c3a9c9dc5896d55c26d486a",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832335",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
  {
    hash: "0x29d3f03bcd2d6099f962df834640c8a91fbba3900c3a9c9dc5896d55c26d486a",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832335",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
  {
    hash: "0x29d3f03bcd2d6099f962df834640c8a91fbba3900c3a9c9dc5896d55c26d486a",
    to: "0x9ef1c9627e6a730a988c56a4a71edb3d280a07dc",
    value: "1995000000",
    timeStamp: "1715832335",
    from: "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
  },
];

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "hash",
    header: "Hash",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 text-primary rounded-md">
          <FileText />
        </div>
        <div className="space-y-1">
          <p className="text-primary">
            {truncateAddress(row.getValue("hash"))}
          </p>
          <p>{moment(Number(row.original.timeStamp)).fromNow()}</p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "wallets",
    header: "Wallets",
    cell: ({ row }) => (
      <div className="space-y-1">
        <p>
          From:{" "}
          <span className="text-primary">
            {truncateAddress(row.original.from)}
          </span>
        </p>
        <p>
          To:{" "}
          <span className="text-primary">
            {truncateAddress(row.original.to)}
          </span>
        </p>
      </div>
    ),
  },
  {
    accessorKey: "value",
    header: "Amount",
    cell: ({ row }) => <div>{row.getValue("value")}</div>,
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

export function TransactionExplorerTable(props: { data: Transaction[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: props.data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
