


import data from "./data.json"
import { SiteHeader } from "@/Components/site-header"
import { DataTable } from "@/Components/data-table"
import { AppSidebar } from "@/Components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-col flex-1">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
