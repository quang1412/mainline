import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type ContentSectionProps = {
  title: string;
  desc: string;
  children: React.JSX.Element;
};

export function ContentSection({ title, desc, children }: ContentSectionProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-b-3xl">
      <ScrollArea className="faded-bottom h-30 flex-none grow scroll-smooth">
        <div className="pe-4">
          <div className="">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
          <Separator className="my-4" />
          <div className="w-full">
            <div className="-mx-1 px-1.5 pb-24 lg:max-w-xl">{children}</div>
          </div>
          <ScrollBar orientation="vertical" />
        </div>
      </ScrollArea>
    </div>
  );
}
