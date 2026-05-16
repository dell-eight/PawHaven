type ReviewCardProps = {
  attribution: string;
  quote: string;
  title?: string;
};

export function ReviewCard({ attribution, quote, title }: ReviewCardProps) {
  return (
    <article className="review-card">
      {title ? <h3 className="review-card__title">{title}</h3> : null}
      <p className="review-card__quote">{quote}</p>
      <p className="review-card__meta">{attribution}</p>
    </article>
  );
}
