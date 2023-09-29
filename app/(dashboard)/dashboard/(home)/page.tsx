import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Journey } from "@/components/Journey";
import { RightBar } from "@/components/RightBar";

export default async function DashboardPage() {
  return (
    <div className="flex w-full gap-2">
      <Journey />
      <RightBar />
    </div>
  );
}
