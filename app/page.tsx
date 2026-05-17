import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { CtaSection } from "@/components/ui/CtaSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { ProductCard } from "@/components/ui/ProductCard";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrustBadgeList } from "@/components/ui/TrustBadge";
import { categories } from "@/data/categories";
import { categorySeoCtas, universalTrustCtas } from "@/data/ctas";
import { getPublicProducts } from "@/data/products";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "PawHaven | Cozy Essentials for Happier Pets and Cleaner Homes",
  description:
    "Shop cozy essentials for happier pets and cleaner homes, including cat essentials, pet comfort, cleaner-home tools, and walk and travel convenience products.",
  path: "/",
});

const featuredCategoryIds = [
  "cat-essentials",
  "cozy-comfort",
  "grooming-clean-home",
  "walk-travel",
] as const;

type FeaturedCategoryId = (typeof featuredCategoryIds)[number];

function isFeaturedCategoryId(categoryId: string): categoryId is FeaturedCategoryId {
  return featuredCategoryIds.includes(categoryId as FeaturedCategoryId);
}

const featuredCategories = categories.filter((category) =>
  isFeaturedCategoryId(category.id),
);

const featuredCategoryImages = {
  "cat-essentials": {
    alt: "Tabby cat sitting on an indoor scratching post near soft natural light",
    src: "/images/categories/cat-essentials.jpg",
  },
  "cozy-comfort": {
    alt: "Dog sleeping on a soft pet bed beside a cozy sofa",
    src: "/images/categories/cozy-comfort.jpg",
  },
  "grooming-clean-home": {
    alt: "Person gently brushing a dog at home",
    src: "/images/categories/grooming-clean-home.jpg",
  },
  "walk-travel": {
    alt: "Small dog walking outdoors on a leash",
    src: "/images/categories/walk-travel.jpg",
  },
} satisfies Record<FeaturedCategoryId, { alt: string; src: string }>;

const bestSellers = getPublicProducts()
  .filter((product) => product.isFeatured)
  .slice(0, 5);

const problemSolutions = [
  {
    category: "Cleaner Home",
    href: "/categories/grooming-clean-home",
    problem: "Fur on sofas, beds, and blankets",
    solution:
      "Reusable hair removers, grooming gloves, and washable layers help make shared spaces easier to refresh.",
  },
  {
    category: "Cleaner Home",
    href: "/categories/grooming-clean-home",
    problem: "Muddy paws after walks",
    solution:
      "Paw cleaners and wipeable mats support calmer entryway routines after rain, park trips, and quick outdoor breaks.",
  },
  {
    category: "Cat Essentials",
    href: "/categories/cat-essentials",
    problem: "Cats scratching furniture",
    solution:
      "Scratch-friendly lounges and cat corners give cats a dedicated place to stretch, scratch, perch, and relax.",
  },
  {
    category: "Cozy Rest",
    href: "/categories/cozy-comfort",
    problem: "Pets needing cozy rest spots",
    solution:
      "Soft beds and blankets help create a clear comfort zone beside sofas, crates, carriers, and small pet corners.",
  },
  {
    category: "Walk & Travel",
    href: "/categories/walk-travel",
    problem: "Walks and travel feel messy",
    solution:
      "Walk-ready bottles, carriers, car covers, and organizer bags help keep quick outings less scattered.",
  },
];

const whyPawHavenItems = [
  {
    copy:
      "We group products by everyday routines: fur cleanup, muddy paws, cozy rest, cat corners, and easier outings.",
    title: "Curated around real pet-home problems",
  },
  {
    copy:
      "Every product should be easy to understand, easy to use, and connected to a specific pet-parent problem.",
    title: "Clear product roles",
  },
  {
    copy:
      "PawHaven is being prepared with local delivery expectations, clear support, and familiar payment options in mind.",
    title: "Philippines-friendly shopping experience",
  },
  {
    copy:
      "We avoid food, medicine, supplements, and medical-style promises. PawHaven focuses on practical accessories only.",
    title: "No risky pet claims",
  },
];

const benefits = [
  "Cleaner pet zones",
  "Cozy rest spots",
  "Easier walks",
  "Cat-friendly corners",
  "Small-space friendly picks",
  "No food, medicine, supplements, or risky claims",
];

const heroPromises = [
  "Philippines-focused store",
  "Comfort, cleanup, cat & walk essentials",
  "No food, medicine, or risky claims",
];

const faqItems = [
  {
    question: "What kinds of products does PawHaven carry?",
    answer:
      "PawHaven focuses on pet comfort, cat essentials, cleaner-home tools, and practical outing products such as beds, blankets, hair removers, grooming gloves, paw cleaners, feeding mats, scratching lounges, window perches, carriers, car covers, and portable water bottles.",
  },
  {
    question: "Does PawHaven sell food, treats, supplements, or medicine?",
    answer:
      "No. PawHaven avoids food, treats, supplements, medicine, prescription products, medical devices, and risky health claims.",
  },
  {
    question: "Are checkout and payments active yet?",
    answer:
      "Not yet. PawHaven is in pre-launch storefront mode before real checkout and payment integrations are configured.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="eyebrow">Cozy essentials for happier pets and cleaner homes</p>
            <h1 id="home-hero-title">
              Practical pet essentials for cleaner homes and happier pets.
            </h1>
            <p>
              PawHaven curates comfort, cleanup, cat essentials, and walk-ready
              accessories for everyday pet life in the Philippines.
            </p>
            <div className="home-hero__actions">
              <ButtonLink href="/shop">Shop Best Picks</ButtonLink>
              <ButtonLink href="/categories" variant="secondary">
                Explore Pet Routines
              </ButtonLink>
            </div>
            <div className="home-hero__promises" aria-label="PawHaven promises">
              {heroPromises.map((promise) => (
                <span key={promise}>{promise}</span>
              ))}
            </div>
          </div>

          <div className="home-hero__visual" aria-label="PawHaven home scene">
            <div className="home-hero__scene">
              <Image
                alt="Cozy living room with a cat and dog relaxing at home"
                className="home-hero__image"
                fill
                priority
                sizes="(min-width: 56rem) 44vw, 100vw"
                src="/images/landing/cozy-pet-home-hero.jpg"
              />
              <div className="home-hero__note">
                <strong>Thoughtful pet-home picks</strong>
                <span>No food, medicine, or risky claims.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section tone="beige" className="home-trust">
        <TrustBadgeList
          badges={[
            "Pet-parent friendly picks",
            "Cozy home essentials",
            "Practical everyday products",
            "No food, medicine, or risky claims",
          ]}
        />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Featured categories"
          title="Shop by the routines PawHaven is built around."
          description="A tighter set of collections for cat comfort, cozy rest, cleaner homes, and easier outings."
        />
        <div className="card-grid card-grid--4">
          {featuredCategories.map((category) => (
            <CategoryCard
              category={category}
              ctaLabel={categorySeoCtas[category.id].cardLabel}
              href={`/categories/${category.id}`}
              image={
                isFeaturedCategoryId(category.id)
                  ? featuredCategoryImages[category.id]
                  : undefined
              }
              key={category.id}
            />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeader
          eyebrow="Best PawHaven Picks"
          title="Start with practical essentials for cleaner homes, cozy rest, and easier pet routines."
          description="These essentials solve common pet-parent problems like fur on sofas, muddy paws, scratching needs, and travel water breaks."
        />
        <div className="card-grid card-grid--4">
          {bestSellers.map((product) => (
            <ProductCard
              ctaLabel="See Details"
              key={product.id}
              product={product}
              showAddToCart={false}
            />
          ))}
        </div>
      </Section>

      <Section tone="beige">
        <div className="home-split">
          <SectionHeader
            eyebrow="Shop by problem"
            title="Shop by everyday pet-parent problems."
            description="Start from the routine you want to make easier, then move into the PawHaven collection built around it."
          />
          <div className="home-solution-list home-solution-list--problems">
            {problemSolutions.map((item) => (
              <article
                className="home-solution-card home-problem-card"
                key={item.problem}
              >
                <p className="home-problem-card__category">{item.category}</p>
                <h3>{item.problem}</h3>
                <p>{item.solution}</p>
                <ButtonLink href={item.href} variant="secondary">
                  View picks
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="home-split">
          <SectionHeader
            eyebrow="Why PawHaven"
            title="Why choose PawHaven instead of random marketplace finds?"
            description="PawHaven is shaped around practical pet-home routines, clear product roles, and honest expectations for shoppers in the Philippines."
          />
          <div className="home-check-list home-check-list--cards">
            {whyPawHavenItems.map((item) => (
              <article className="home-choice-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="home-bundle">
          <div className="home-bundle__copy">
            <p className="eyebrow">Starter bundle idea</p>
            <h2>Build a cleaner-home routine with a few simple essentials.</h2>
            <p>
              Pair a washable blanket, pet hair remover, feeding mat, and muddy
              paw cleaner to give your pet a softer space while keeping daily
              cleanup easier to manage.
            </p>
            <ButtonLink href="/shop" variant="secondary">
              Browse Bundle Picks
            </ButtonLink>
          </div>
          <div className="home-bundle__items" aria-label="Bundle items">
            <span>Washable blanket</span>
            <span>Hair remover</span>
            <span>Feeding mat</span>
            <span>Paw cleaner</span>
          </div>
        </div>
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="Pet parent benefits"
          title="Designed around the small routines that happen every day."
          description="The goal is not to promise miracles. It is to make normal pet life feel more organized, comfortable, and easy to care for."
        />
        <div className="home-benefits">
          {benefits.map((benefit) => (
            <span key={benefit}>{benefit}</span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Trust priorities"
          title="A calm store experience for new and busy pet parents."
          description="PawHaven avoids unverified review claims and focuses on clear product roles, safe categories, and honest shopping expectations."
        />
        <div className="card-grid card-grid--3">
          <ReviewCard
            title="Easy to understand"
            quote="Every product should have a clear everyday role, from softer rest spots to cleaner shared spaces and simpler outings."
            attribution="PawHaven standard"
          />
          <ReviewCard
            title="Honest by default"
            quote="No fake urgency, fake checkout, medical promises, or risky product categories. PawHaven keeps limits visible."
            attribution="Trust principle"
          />
          <ReviewCard
            title="Cozy but useful"
            quote="The brand should feel warm and pet-friendly while staying practical for apartments, busy homes, walks, and travel."
            attribution="Brand promise"
          />
        </div>
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="Shop with confidence"
          title="Check the practical details before you choose."
          description="Use these trust links to understand shipping expectations, sizing guidance, and how to reach PawHaven support before real checkout launches."
        />
        <div className="cta-link-grid">
          {universalTrustCtas.map((cta) => (
            <ButtonLink href={cta.href} key={cta.href} variant="secondary">
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </Section>

      <Section tone="white" className="home-newsletter-section">
        <NewsletterSignup
          title="Get cozy pet-parent tips and product picks."
          description="Join PawHaven for helpful pet home-care tips, new product updates, and cozy essentials for dogs and cats."
        />
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="FAQ preview"
          title="A few honest answers before you shop."
          description="PawHaven is being built as a trustworthy pet accessories store with clear limits and practical product language."
        />
        <FaqAccordion items={faqItems} />
      </Section>

      <CtaSection
        eyebrow="Ready to make pet life feel easier?"
        title="Find cozy essentials for cleaner, calmer everyday routines."
        description="Explore warm, practical accessories for comfort, cleanup, walks, travel, and organized pet spaces."
        actions={
          <>
            <ButtonLink href="/shop">Shop Best Picks</ButtonLink>
            <ButtonLink href="/categories" variant="secondary">
              Explore Pet Routines
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
