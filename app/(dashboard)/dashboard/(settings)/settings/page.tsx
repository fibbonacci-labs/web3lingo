import { redirect } from "next/navigation";

import { routes } from "@/config/routes";
import { getSession } from "@/lib/auth";
import { ProfileSettingsForm } from "@/components/forms/profile-settings-form";

export default async function SettingsProfilePage() {
  const session = await getSession();

  if (!session) {
    return redirect(routes.main.signin);
  }

  return (
    <div className="space-y-6">
      <ProfileSettingsForm name={session.user.name} />
    </div>
  );
}
