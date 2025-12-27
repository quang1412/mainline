// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function SettingsPage() {
//   return (
//     <div className="bg-muted/50 h-full w-full rounded-xl p-2">profile</div>
//   );
// }

import { ContentSection } from "../components/content-section";
import { ProfileForm } from "./profile-form";

export default function SettingsProfile() {
  return (
    <ContentSection
      title="Profile"
      desc="This is how others will see you on the site."
    >
      <>
        <ProfileForm />
      </>
    </ContentSection>
  );
}
