import Link from "next/link";
import type { BlogArticle } from "@/data/blog";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="article-card">
      <div className="article-card__meta">
        <span>{article.category}</span>
        <span>{article.readingTime}</span>
      </div>
      <h2>
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h2>
      <p>{article.excerpt}</p>
      <Link className="article-card__link" href={`/blog/${article.slug}`}>
        Read article
      </Link>
    </article>
  );
}
