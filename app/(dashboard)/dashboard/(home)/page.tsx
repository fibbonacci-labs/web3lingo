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
