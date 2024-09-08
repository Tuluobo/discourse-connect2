import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in");

  return <div className="min-h-screen">{children}</div>;
}