import { SiteHeader } from "@/Components/dashboard/site-header"
import { AppSidebar } from "@/Components/dashboard/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar"
import { Link } from "@inertiajs/react";
import MasterTable, { TableBody, TableTd } from "@/Components/dashboard/master-table";
import { PencilIcon } from "lucide-react";


export default function Page(
    {
        collections,
        filters,
    }: {
        collections: any;
        filters: any;
    }) {
    const bRoutes = [
        {
            name: "Dashboard",
            hasArrow: true,
            link: route("admin.dashboard"),
        },
        {
            name: "Collections",
            hasArrow: false,
            link: route("admin.collections.index"),
        },
    ];

    const tableColumns = [
        { label: "Name", sortField: "name", sortable: true },
        { label: "Status", sortField: "status", sortable: true },
        { label: "Created At", sortField: "created_at", sortable: true },
        { label: "", sortField: "", sortable: false },
    ];

    const search = {
        placeholder: "Search Here",
    };

    const createLink =
    {
        label: 'Create',
        url: route("admin.collections.create")
    }

    console.log("collections", collections);
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader bRoutes={bRoutes} />
                <div className="flex flex-col flex-1">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 px-4 md:gap-6 ">
                            <MasterTable
                                tableColumns={tableColumns}
                                filters={filters}
                                url={route("admin.collections.index")}
                                createLink={createLink}
                                search={search}
                                links={collections?.meta?.links}
                            >
                                {collections?.data?.map((collection: any) => (
                                    <TableBody
                                        buttons={
                                            <>
                                                <Link
                                                    className="!py-2 flex items-center text-blue-600 hover:text-blue-800"
                                                    href={route("admin.collections.show", {
                                                        id: collection.id,
                                                    })}
                                                >
                                                    <PencilIcon className="w-3 h-3 mr-2" />{" "}
                                                    {"View"}
                                                </Link>
                                                <Link
                                                    className="!py-2 flex items-center text-blue-600 hover:text-blue-800"
                                                    href={route("admin.collections.edit", {
                                                        id: collection.id,
                                                    })}
                                                >
                                                    <PencilIcon className="w-3 h-3 mr-2" />{" "}
                                                    {"Edit"}
                                                </Link>
                                                <Link
                                                    className="!py-2 flex items-center text-blue-600 hover:text-blue-800"
                                                    href={route("admin.collections.destroy", {
                                                        id: collection.id,
                                                    })}
                                                >
                                                    <PencilIcon className="w-3 h-3 mr-2" />{" "}
                                                    {"Delete"}
                                                </Link>


                                                {/* <ConfirmButton
                                                        className="!py-2 text-red-600"
                                                        url={route("users.destroy", {
                                                            id: user.id,
                                                        })}
                                                        // method="delete"
                                                        label="Delete"
                                                    /> */}

                                            </>
                                        }
                                        key={collection?.id}
                                    >
                                        <TableTd>
                                            <div className="flex space-x-2">
                                                <Link
                                                    href={route("admin.collections.show", {
                                                        id: collection.id,
                                                    })}
                                                    className="self-center text-blue-700 hover:underline"
                                                >
                                                    {collection?.name}
                                                </Link>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <span className="capitalize">
                                                {collection?.status ?? "-"}
                                            </span>
                                        </TableTd>
                                        <TableTd width={120}>
                                            <small className="text-nowrap">
                                                {collection?.created_at_human ?? "-"}
                                            </small>
                                        </TableTd>
                                    </TableBody>
                                ))}
                            </MasterTable>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
