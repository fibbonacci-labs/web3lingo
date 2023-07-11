import { redirect } from "next/navigation";
import { DollarSign } from "lucide-react";

import { routes } from "@/config/routes";
import { getSession } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UpgradeButton } from "@/components/upgrade-button";

export default async function SettingsProfilePage() {
  const session = await getSession();

  if (!session) {
    return redirect(routes.main.signin);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Get access to premium features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">Only $9</div>
        </CardContent>
        <CardFooter>
          <UpgradeButton />
        </CardFooter>
      </Card>
    </div>
  );
}
