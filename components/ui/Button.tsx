import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "soft";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  variant?: ButtonVariant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  href: string;
  variant?: ButtonVariant;
};

function getButtonClassName(
  variant: ButtonVariant = "primary",
  fullWidth = false,
  className?: string,
) {
  return [
    "button",
    `button--${variant}`,
    fullWidth ? "button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  className,
  fullWidth,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName(variant, fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  fullWidth,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClassName(variant, fullWidth, className)} {...props}>
      {children}
    </a>
  );
}
