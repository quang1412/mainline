// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function SettingsPage() {
//   return (
//     <div className="bg-muted/50 h-full w-full rounded-xl p-2">profile</div>
//   );
// }

import { ContentSection } from ".././components/content-section";
import { AccountForm } from "./account-form";

export default function SettingsAccount() {
  return (
    <ContentSection
      title="Account"
      desc="Update your account settings. Set your preferred language and timezone."
    >
      <>
        <AccountForm />
      </>
    </ContentSection>
  );
}
