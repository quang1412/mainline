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
    <ScrollArea
      className="bg-muted/50 w-130 max-w-full rounded-xl px-1 whitespace-nowrap"
      // orientation='horizontal'
      type="always"
      // className='w-full min-w-40 bg-background px-1 py-2 '
    >
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
                ? "bg-white hover:bg-white dark:text-black dark:hover:bg-white"
                : "hover:bg-white hover:underline dark:hover:bg-white dark:hover:text-black",
              "justify-start",
            )}
          >
            <span className="me-2">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
