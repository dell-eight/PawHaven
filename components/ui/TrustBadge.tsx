type TrustBadgeProps = {
  label: string;
};

export function TrustBadge({ label }: TrustBadgeProps) {
  return (
    <span className="trust-badge">
      <span className="trust-badge__mark" aria-hidden="true" />
      {label}
    </span>
  );
}

type TrustBadgeListProps = {
  badges: string[];
};

export function TrustBadgeList({ badges }: TrustBadgeListProps) {
  return (
    <div className="trust-badges" aria-label="Trust highlights">
      {badges.map((badge) => (
        <TrustBadge key={badge} label={badge} />
      ))}
    </div>
  );
}
