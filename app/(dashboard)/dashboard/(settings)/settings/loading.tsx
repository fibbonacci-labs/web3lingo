import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsLoader() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-8">
        <Skeleton className="h-36 w-full" />
      </div>
    </div>
  );
}
