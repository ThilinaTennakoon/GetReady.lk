import { type LucideIcon } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuLink } from "../ui/sidebar"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
    }[]
}) {
    const pathname = window.location.pathname
    const url = pathname.split("/").slice(2).join("/");
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuLink tooltip={item.title}
                             href={item.url}
                            isActive={url === item.url}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </SidebarMenuLink>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
