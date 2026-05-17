import Image from "next/image";

const logoIcon = "/images/brand/pawhaven-brand-logo-only-transparent.png";
const logoWordmark = "/images/brand/pawhaven-brand-text-only-transparent.png";

type BrandLogoProps = {
  className?: string;
  footer?: boolean;
};

export function BrandLogo({ className, footer = false }: BrandLogoProps) {
  const rootClassName = ["brand-logo", footer ? "brand-logo--footer" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={rootClassName}>
      <Image
        alt="PawHaven logo"
        className="brand-logo__icon"
        height={671}
        priority={!footer}
        src={logoIcon}
        width={616}
      />
      <Image
        alt=""
        className="brand-logo__wordmark"
        height={340}
        priority={!footer}
        src={logoWordmark}
        width={1185}
      />
    </span>
  );
}
