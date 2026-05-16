import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  blogArticles,
  getBlogArticleBySlug,
  getRelatedArticles,
} from "@/data/blog";
import { getCategoryName } from "@/data/categories";
import { categorySeoCtas, universalTrustCtas } from "@/data/ctas";
import { createSeoMetadata } from "@/lib/seo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return createSeoMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const relatedCategoryName = getCategoryName(article.relatedProductCategory);
  const relatedCta = categorySeoCtas[article.relatedProductCategory];

  return (
    <main>
      <article className="blog-article">
        <header className="blog-article__header">
          <div className="container blog-article__header-inner">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="blog-article__meta">
              <span>{article.readingTime}</span>
              <span>Related: {relatedCategoryName}</span>
            </div>
          </div>
        </header>

        <Section tone="white">
          <div className="blog-article__content">
            {article.contentSections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <aside className="blog-product-cta" aria-label="Related shopping links">
              <div>
                <p className="eyebrow">Related products</p>
                <h2>{relatedCta.blogTitle}</h2>
                <p>{relatedCta.blogDescription}</p>
              </div>
              <div className="blog-product-cta__actions">
                <ButtonLink href={relatedCta.primary.href}>
                  {relatedCta.primary.label}
                </ButtonLink>
                <ButtonLink href="/shipping-returns" variant="secondary">
                  Check shipping details
                </ButtonLink>
              </div>
            </aside>
          </div>
        </Section>
      </article>

      {relatedArticles.length > 0 ? (
        <Section tone="beige">
          <SectionHeader
            eyebrow="Related articles"
            title="Keep learning with PawNest."
            description="Explore more beginner-friendly guidance for cleaner spaces, cozy routines, and practical pet accessories."
          />
          <div className="blog-grid blog-grid--compact">
            {relatedArticles.map((relatedArticle) => (
              <ArticleCard article={relatedArticle} key={relatedArticle.slug} />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaSection
        eyebrow="Shop related essentials"
        title={relatedCta.blogTitle}
        description={relatedCta.blogDescription}
        actions={
          <>
            <ButtonLink href={`/categories/${article.relatedProductCategory}`}>
              {relatedCta.primary.label}
            </ButtonLink>
            <ButtonLink href={universalTrustCtas[1].href} variant="secondary">
              {universalTrustCtas[1].label}
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
