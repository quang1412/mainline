"use client";

import { useState, useRef, useEffect, type JSX } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";

// import { useLocation, useNavigate, Link } from '@tanstack/react-router'
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type SidebarNavProps = React.HTMLAttributes<HTMLElement> & {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
};

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const targetElementRef = useRef<null | HTMLAnchorElement>(null);

  useEffect(() => {
    // Check if the current pathname is the target page (e.g., '/about')
    if (targetElementRef.current) {
      targetElementRef.current.scrollIntoView({
        behavior: "smooth", // for a smooth scrolling effect
        block: "start", // scrolls to the start of the element
      });
    } else if (pathname === "/") {
      // Optional: scroll to the top for the home page
      window.scrollTo(0, 0);
    }
  }, [pathname]); // Rerun effect when pathname changes

  return (
    <div className="w-full">
      <ScrollArea className="bg-muted lg:bg-background h-auto rounded-xl px-1 lg:h-auto lg:max-h-100 lg:min-h-20">
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
              ref={targetElementRef}
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
