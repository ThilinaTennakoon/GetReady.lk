
import { router } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon, ChevronsDownIcon, ChevronsUpIcon, EllipsisVerticalIcon } from "lucide-react";
import Pagination from "../Shared/Pagination";
import SearchInput from "../elements/inputs/SearchInput";

export function TableBody({
    children,
    buttons,
}: {
    children: any;
    buttons: any;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <tr className="transition bg-white border ">
            {children}
            <td className="relative text-right border-b">
                <div className="relative inline-block mr-4 text-center " ref={ref}>
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="rounded-full focus:outline-none"
                    >
                        <EllipsisVerticalIcon className="w-5 h-5 text-gray-500 hover:text-blue-500" />
                    </button>

                    {open && (
                        <div className="absolute z-10 mt-2 origin-top-right bg-white divide-y divide-gray-400 rounded-md shadow-md top-2 right-4 w-28">
                            <div className="space-y-1 ">{buttons}</div>
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}

export function TableTd({
    children,
    width,
}: {
    children: any;
    width?: number;
}) {
    return (
        <td
            width={width}
            className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 border-y whitespace-wrap sm:pl-6"
        >
            {children}
        </td>
    );
}

export default function MasterTable({
    tableColumns,
    filters,
    url,
    createLink,
    importLink,
    exportLink,
    filterBar = true,
    search,
    links,
    children,
}: {
    tableColumns: any;
    filters: any;
    url: string;
    createLink?: {
        label: string;
        url: string;
    };
    importLink?: {
        label: string;
        url: string;
    };
    exportLink?: {
        label: string;
        url: string;
    };
    search?: {
        placeholder: string;
    };
    filterBar?: boolean;
    links: any;
    children: any;
}) {
    const [searchParam, setSearchParam] = useState(filters.searchParam ?? "");
    const [page, setPage] = useState(filters.page ?? 1);
    const [rowPerPage, setRowPerPage] = useState(filters.perPage ?? 10);
    const [sortBy, setSortBy] = useState(filters.sortBy ?? "name");
    const [sortDirection, setSortDirection] = useState(
        filters.sortDirection ?? "desc"
    );

    const [isSearchLoading, setIsSearchLoading] = useState(false);

    function revisitPage() {
        router.get(
            url,
            {
                page: page,
                rowPerPage: rowPerPage,
                sortBy: sortBy,
                sortDirection: sortDirection,
                searchParam: searchParam,
            },
            {
                replace: true,
                preserveState: true,
                preserveScroll: true,
                onSuccess: (page) => {
                    setIsSearchLoading(false);
                }
            }
        );
    }

    const handleOnSort = (column: any, direction: any) => {
        if (column && direction) {
            setSortBy(column);
            setSortDirection(direction);
            revisitPage();
        }
    };

    const debouncedHandleSearch = useDebouncedCallback(
        (value: any) => {
            setIsSearchLoading(true);
            setSearchParam(value);
            setPage(1);
            revisitPage();
        },
        1000
    );

    const resetSearch = () => {
        setIsSearchLoading(true);
        setSearchParam("");
        setPage(1);
        revisitPage();
    };

    function tableTh({
        label,
        sortField,
        sortable,
    }: {
        label: string;
        sortField: string;
        sortable: boolean;
    }) {
        return (
            <th
                key={sortField}
                onClick={() =>
                    sortable &&
                    handleOnSort(
                        sortField,
                        sortDirection == "asc" ? "desc" : "asc"
                    )
                }
                scope="col"
                className={
                    (sortable ? " cursor-pointer " : " cursor-default ") +
                    " py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-6"
                }
            >
                <div className="flex">
                    {label}
                    {sortBy == sortField && sortDirection == "asc" && (
                        <ChevronsUpIcon className="w-4 h-4" aria-hidden="true" />
                    )}
                    {sortBy == sortField && sortDirection == "desc" && (
                        <ChevronsDownIcon
                            className="w-4 h-4"
                            aria-hidden="true"
                        />
                    )}
                </div>
            </th>
        );
    }

    return (
        <>
            <div className="mt-8 md:flex md:items-center md:justify-between">
                <div className="flex self-center w-2/8">
                    {search && (
                        <SearchInput
                            id="search"
                            className="self-center block w-full"
                            isFocused
                            defaultValue={searchParam}
                            placeholder={search.placeholder}
                            resetSearch={resetSearch}
                            autoComplete="search"
                            loading={isSearchLoading}
                            onChange={(e: any) =>
                                debouncedHandleSearch(e.target.value)
                            }
                        />
                    )}
                </div>
                {createLink &&
                    <div className="flex justify-end mt-4 md:mt-0">
                        <a
                            href={createLink.url}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {createLink.label}
                        </a>
                    </div>
                }

            </div>
            <div className="flow-root mt-2 bg-white rounded-lg shadow">
                <div className="min-h-screen -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className=" sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-100">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {tableColumns.map((column: any, index: number) => {
                                            // If no children, skip the last column
                                            const isLast = index === tableColumns.length - 1;
                                            if (children?.length < 1 && isLast) return null;

                                            return tableTh({
                                                label: column.label,
                                                sortField: column.sortField,
                                                sortable: column.sortable,
                                            });
                                        })}
                                    </tr>
                                </thead>
                                {children}
                            </table>
                            {children?.length < 1 && (
                                <div className="py-4 text-xs font-medium text-center text-gray-600">
                                    - No data found -
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination links={links} />
        </>
    );
}
