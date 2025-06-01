
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"


export function SiteHeader(
    {
        bRoutes,
    }: {
        bRoutes?: { name: string; hasArrow?: boolean; link: string }[];
    }) {
    return (
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
            <div className="flex items-center w-full gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb className="flex-1">
                    <BreadcrumbList>
                        {bRoutes?.map((route, index) => (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbLink href={route.link}>
                                    {route.name}
                                </BreadcrumbLink>
                                {route.hasArrow && (
                                    <BreadcrumbSeparator className="mx-2" />
                                )}
                            </BreadcrumbItem>
                        ))}
                    </BreadcrumbList>
                    </Breadcrumb>
            </div>
        </header>
    )
}
