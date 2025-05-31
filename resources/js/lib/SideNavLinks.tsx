import { BarChartIcon, FolderIcon, HelpCircleIcon, LayoutDashboardIcon, ListIcon, SettingsIcon, UsersIcon } from "lucide-react";

export const navigationLinks = {
    navMain: [
        {
            title: "Dashboard",
            url: "dashboard",
            icon: LayoutDashboardIcon,
        },
        {
            title: "Users",
            url: "users",
            icon: UsersIcon,
        },
        {
            title: "Collections",
            url: "collections",
            icon: BarChartIcon,
        },
        {
            title: "Projects",
            url: "#",
            icon: FolderIcon,
        },
        {
            title: "Team",
            url: "#",
            icon: ListIcon,
        },
    ],

    navSecondary: [
        {
            title: "Settings",
            url: 'dashboard',
            icon: SettingsIcon,
        },
        {
            title: "Get Help",
            url: "#",
            icon: HelpCircleIcon,
        },
        // {
        //     title: "Search",
        //     url: "#",
        //     icon: SearchIcon,
        // },
    ],

}
