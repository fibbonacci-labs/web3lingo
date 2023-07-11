import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoader() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-heading text-2xl">Dashboard</h1>
        <p className="text-muted-foreground">Important metrics at glance.</p>
      </div>
      <div className="flex flex-row gap-8">
        <Skeleton className="h-24 w-1/2" />
        <Skeleton className="h-24 w-1/2" />
      </div>
      <Skeleton className="h-48 w-full" />
    </div>
  );
}
