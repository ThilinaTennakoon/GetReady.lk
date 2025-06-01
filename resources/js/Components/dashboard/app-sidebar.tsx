import * as React from "react"
import {ArrowUpCircleIcon} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import { usePage } from "@inertiajs/react"
import { navigationLinks } from "@/lib/SideNavLinks"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pageProps = usePage().props;
    const { user }: any = pageProps.auth;
    console.log('user',user);


    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="/">
                                <ArrowUpCircleIcon className="w-5 h-5" />
                                <span className="text-base font-semibold">Getready.lk</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navigationLinks.navMain} />
                <NavSecondary items={navigationLinks.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    )
}
