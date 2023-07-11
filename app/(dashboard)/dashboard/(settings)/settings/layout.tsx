import { appNavigation } from "@/config/routes";
import { SettingsNav } from "@/components/settings-nav";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className=" flex min-h-screen flex-col space-y-8">
      <h1 className="font-heading text-2xl">Settings</h1>
      <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <SettingsNav items={appNavigation.settings} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
