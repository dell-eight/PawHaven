import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="site-shell">
      <Header />
      <div className="site-shell__content">{children}</div>
      <Footer />
    </div>
  );
}
