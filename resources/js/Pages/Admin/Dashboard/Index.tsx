import { SiteHeader } from "@/Components/dashboard/site-header"
import { AppSidebar } from "@/Components/dashboard/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar"

export default function Page() {
    const bRoutes = [
        {
            name: "Dashboard",
            hasArrow: false,
            link: route("admin.dashboard"),
        },
    ];
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader bRoutes={bRoutes} />
        <div className="flex flex-col flex-1">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
             {/* masterTable component here */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
