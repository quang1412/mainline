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

function scrollParentToCenterChildHorizontal(
  parentElement: HTMLElement,
  childElement: HTMLElement,
) {
  const parentWidth = parentElement.clientWidth; // Visible width of the parent
  const childWidth = childElement.offsetWidth; // Total width of the child
  const childOffsetLeft = childElement.offsetLeft; // Child's distance from the parent's left

  // Calculate
  //  target scroll position
  const newScrollLeft = childOffsetLeft - parentWidth / 2 + childWidth / 2;

  if (typeof window != undefined) {
    window.setTimeout(() => {
      // Set the scroll position (smooth behavior needs CSS scroll-behavior: smooth)
      parentElement.scrollTo({
        left: newScrollLeft,
        behavior: "smooth", // smooth | auto
      });
    }, 100);
  }
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const scrollElmRef = useRef<HTMLDivElement>(null);
  const scrollItemRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const fn = () => {
      try {
        const parent = scrollElmRef.current?.querySelector(
          "div",
        ) as HTMLElement;
        const item = scrollItemRefs.current.find(
          (link) => pathname == link.getAttribute("href"),
        );
        return (
          parent && item && scrollParentToCenterChildHorizontal(parent, item)
        );
      } catch (error) {}
    };
    return fn();
  }, [pathname]); // Rerun effect when pathname changes

  return (
    <div className="w-full">
      <ScrollArea
        className={cn(
          // "px-1 py-1",
          "border-muted border-2",
          "bg-muted lg:bg-background h-auto rounded-lg lg:h-auto lg:max-h-100 lg:min-h-20",
        )}
        // className="bg-muted lg:bg-background h-auto rounded-xl px-1 lg:h-auto lg:max-h-100 lg:min-h-20"
        ref={scrollElmRef}
      >
        <ScrollBar orientation="horizontal" className="hidden" />
        <ScrollBar orientation="vertical" className="hidden" />
        <nav
          className={cn(
            "flex space-x-2 lg:flex-col lg:space-y-1 lg:space-x-0",
            className,
          )}
          {...props}
        >
          {items.map((item, index) => (
            <Link
              ref={(el) => {
                el && scrollItemRefs.current.push(el);
              }}
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                  className: "cursor-pointer rounded-lg",
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
