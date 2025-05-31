import { SiteHeader } from "@/Components/dashboard/site-header"
import { AppSidebar } from "@/Components/dashboard/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar"
import { Link } from "@inertiajs/react";
import MasterTable, { TableBody, TableTd } from "@/Components/dashboard/master-table";
import { PencilIcon } from "lucide-react";


export default function Page(
    {
        users,
        filters,
    }: {
        users: any;
        filters: any;
    }) {
    const bRoutes = [
        {
            name: "Dashboard",
            hasArrow: true,
            link: route("admin.dashboard"),
        },
        {
            name: "Users",
            hasArrow: false,
            link: route("admin.users.index"),
        },
    ];

    const tableColumns = [
        { label: "Full Name", sortField: "first_name", sortable: true },
        { label: "Email", sortField: "email", sortable: true },
        { label: "Type", sortField: "type", sortable: true },
        { label: "Created At", sortField: "created_at", sortable: true },
        { label: "", sortField: "", sortable: false },
    ];

    const search = {
        placeholder: "Search Here",
    };

    console.log("users", users);
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
                                url={route("admin.users.index")}
                                search={search}
                                links={users?.meta?.links}
                            >
                                {users?.data?.map((user: any) => (
                                    <TableBody
                                        buttons={
                                            <>
                                                <Link
                                                    className="!py-1 px-2 text-sm flex items-center hover:bg-gray-50 text-gray-600 hover:text-blue-800"
                                                    href={route("admin.users.show", {
                                                        id: user.id,
                                                    })}
                                                >
                                                    <PencilIcon className="w-3 h-3 mr-2" />{" "}
                                                    {"View"}
                                                </Link>
                                                 <Link
                                                    className="!py-1  px-2  flex text-sm items-center hover:bg-gray-50 text-gray-600 hover:text-blue-800"
                                                    href={route("admin.users.edit", {
                                                        id: user.id,
                                                    })}
                                                >
                                                    <PencilIcon className="w-3 h-3 mr-2" />{" "}
                                                    {"Edit"}
                                                </Link>
                                                 <Link
                                                    className="!py-1 px-2 flex text-sm items-center hover:bg-gray-50 text-gray-600 hover:text-blue-800"
                                                    href={route("admin.users.destroy", {
                                                        id: user.id,
                                                    })}
                                                >
                                                    <PencilIcon className="w-3 h-3 mr-2" />{" "}
                                                    {"Delete"}
                                                </Link>
                                            </>
                                        }
                                        key={user?.id}
                                    >
                                        <TableTd>
                                            <div className="flex space-x-2">
                                                <div className="rounded-full  h-[30px] w-[40px] md:w-[30px] self-center  flex">
                                                    {user?.avatar_url && (
                                                        <img
                                                            src={user?.avatar_url ?? ""}
                                                            alt={user?.full_name ?? ""}
                                                            className="object-cover w-full h-full rounded-full"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </div>
                                                <Link
                                                    href={route("admin.users.show", {
                                                        id: user.id,
                                                    })}
                                                    className="self-center text-blue-700 hover:underline"
                                                >
                                                    {user?.full_name}
                                                </Link>
                                            </div>
                                        </TableTd>
                                        <TableTd>
                                            <span className="capitalize">
                                                {user?.email ?? "-"}
                                            </span>
                                        </TableTd>
                                         <TableTd>
                                            <span className="capitalize">
                                                {user?.type ?? "-"}
                                            </span>
                                        </TableTd>
                                        <TableTd width={120}>
                                            <small className="text-nowrap">
                                                {user?.created_at_human ?? "-"}
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
