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
    problem: "Pet hair on sofas and blankets",
    solution:
      "Reusable hair tools, grooming gloves, and washable layers help make cleanup feel less scattered.",
  },
  {
    problem: "Messy feeding and entryway routines",
    solution:
      "Wipeable mats and paw cleanup accessories support calmer home-care habits after meals and walks.",
  },
  {
    problem: "Cats scratching furniture or stealing window space",
    solution:
      "Cat-first lounge and perch products give cats dedicated spots to stretch, scratch, watch, and rest.",
  },
  {
    problem: "Outings that feel hard to pack for",
    solution:
      "Walking and travel accessories keep small essentials ready for quick breaks, car trips, and errands.",
  },
];

const whyPawHavenItems = [
  "Practical products selected for comfort, cleaner homes, cats, and small-space routines.",
  "A cozy home-first approach for pets and the people who care for them.",
  "Beginner-friendly essentials that are easy to understand and use.",
  "A focused catalog without food, medicine, random toys, or risky product claims.",
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
  "Safe accessory categories",
  "Clear product roles",
  "Checkout stays honest",
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
              Build a calmer, cleaner, cozier pet home.
            </h1>
            <p>
              PawHaven curates focused pet comfort, cat essentials, cleaner-home
              helpers, and useful outing products for daily life with your pet.
            </p>
            <div className="home-hero__actions">
              <ButtonLink href="/shop">Shop Featured Picks</ButtonLink>
              <ButtonLink href="/categories" variant="secondary">
                Explore Categories
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
          eyebrow="Featured test products"
          title="The strongest products to validate first."
          description="These picks have the clearest customer pain points, easiest ad hooks, and best fit with PawHaven's comfort-first positioning."
        />
        <div className="card-grid card-grid--4">
          {bestSellers.map((product) => (
            <ProductCard
              ctaLabel="Check details"
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
            eyebrow="Common pet-home problems"
            title="Less mess, less clutter, more room for cozy routines."
          description="PawHaven focuses on everyday friction: pet hair, muddy paws, feeding zones, cat furniture needs, travel packing, and pets needing their own soft spaces."
          />
          <div className="home-solution-list">
            {problemSolutions.map((item) => (
              <article className="home-solution-card" key={item.problem}>
                <h3>{item.problem}</h3>
                <p>{item.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="home-split home-split--center">
          <div>
            <p className="eyebrow">Why PawHaven</p>
            <h2 className="home-section-title">
              A cleaner, cozier pet home without overcomplicating the cart.
            </h2>
          </div>
          <ul className="home-check-list">
            {whyPawHavenItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
            <ButtonLink href="/shop">Shop Featured Picks</ButtonLink>
            <ButtonLink href="/categories" variant="secondary">
              Explore Categories
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
