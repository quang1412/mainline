import { Main } from "@/components/layout/main";
import { Separator } from "@/components/ui/separator";
import { Monitor, Bell, Palette, Wrench, UserCog } from "lucide-react";
import { SidebarNav } from "./settings/components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard/settings",
    icon: <UserCog size={18} />,
  },
  {
    title: "Account",
    href: "/dashboard/settings/account",
    icon: <Wrench size={18} />,
  },
  {
    title: "Appearance",
    href: "/dashboard/settings/appearance",
    icon: <Palette size={18} />,
  },
  {
    title: "Notifications",
    href: "/dashboard/settings/notifications",
    icon: <Bell size={18} />,
  },
  {
    title: "Display",
    href: "/dashboard/settings/display",
    icon: <Monitor size={18} />,
  },
];

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Main>
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-2 lg:my-2" />
        <div className="flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
          <aside className="top-0 flex lg:sticky lg:w-1/3 xl:w-1/4 2xl:w-1/4">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          {/* h-full */}
          <div className="flex h-full w-full p-1">
            <>{children}</>
          </div>
        </div>
      </Main>
    </>
  );
}
