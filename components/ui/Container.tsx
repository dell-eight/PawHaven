import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const classNames = ["container", className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}
