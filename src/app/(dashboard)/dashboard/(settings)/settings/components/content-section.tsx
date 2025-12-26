import { Separator } from "@/components/ui/separator";

type ContentSectionProps = {
  title: string;
  desc: string;
  children: React.JSX.Element;
};

export function ContentSection({ title, desc, children }: ContentSectionProps) {
  return (
    <div className="flex grow flex-col">
      <div className="h-1 grow overflow-y-scroll">
        <div className="flex-none">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-muted-foreground text-sm">{desc}</p>
        </div>
        <Separator className="my-4 flex-none" />
        <div className=" ">
          <div className="faded-bottom w-full scroll-smooth pe-4">
            {/* <div className="lg:max-w-xl"> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
