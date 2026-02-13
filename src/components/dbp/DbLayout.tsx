import { Outlet } from "react-router-dom";
import { DbHeader } from "@/components/dbp/DbHeader";
import { DbFooter } from "@/components/dbp/DbFooter";

export function DbLayout() {
  return (
    <div className="min-h-screen bg-background">
      <DbHeader />
      <Outlet />
      <DbFooter />
    </div>
  );
}
