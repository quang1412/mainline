"use client";

import { useState, type JSX } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

// import { useLocation, useNavigate, Link } from '@tanstack/react-router'
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
};

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  // const navigate = useNavigate()
  const [val, setVal] = useState(pathname ?? "/settings");

  const handleSelect = (e: string) => {
    setVal(e);
    router.push(e);
  };

  return (
    <div className="w-full">
      <ScrollArea
        className="bg-muted lg:bg-background h-auto rounded-xl px-1 lg:h-auto lg:max-h-100 lg:min-h-20"
        // orientation='horizontal'
        // type="always"
        // className='w-full min-w-40 bg-background px-1 py-2 '
      >
        <ScrollBar orientation="horizontal" className="hidden" />
        <ScrollBar orientation="vertical" className="hidden" />
        <nav
          className={cn(
            "flex space-x-2 py-1 lg:flex-col lg:space-y-1 lg:space-x-0",
            className,
          )}
          {...props}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "rounded-lg",
                }),
                pathname === item.href
                  ? "lg:bg-muted lg:dark:bg-muted bg-white dark:bg-black/90"
                  : "hover:underline",
                "justify-start",
                "hover:bg-white dark:hover:bg-black/90",
                "lg:hover:bg-muted lg:dark:hover:bg-muted",
              )}
            >
              <span className="me-2">{item.icon}</span>
              {item.title}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
