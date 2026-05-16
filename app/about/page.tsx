import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrustBadgeList } from "@/components/ui/TrustBadge";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About PawNest",
  description:
    "Learn how PawNest helps pet parents create cleaner, cozier, and more practical homes with thoughtfully selected pet accessories.",
  path: "/about",
});

const audienceItems = [
  "Dog and cat owners building calmer home routines",
  "Apartment pet parents who need tidy, compact solutions",
  "Busy professionals who want practical pet-care helpers",
  "First-time pet parents looking for beginner-friendly essentials",
];

const sellsItems = [
  "Cozy pet beds and blankets",
  "Grooming tools, pet hair removers, and lint rollers",
  "Leashes, harnesses, collars, carriers, and travel accessories",
  "Toys, scratching pieces, pet mats, and organization products",
  "Pet safety accessories and clean-home helpers",
];

const doesNotSellItems = [
  "Pet food",
  "Treats",
  "Supplements",
  "Medicine",
  "Prescription products",
  "Medical devices",
  "Products that require risky health claims",
];

const valueItems = [
  {
    title: "Practical first",
    copy: "Every PawNest category starts with a real pet-home routine: cleaning, walking, travel, comfort, organization, or play.",
  },
  {
    title: "Warm, not childish",
    copy: "The brand is cozy and pet-friendly while staying clean, modern, and easy for adults to shop.",
  },
  {
    title: "Clear limits",
    copy: "PawNest avoids risky product categories and does not use medical promises to sell everyday accessories.",
  },
  {
    title: "Beginner-friendly",
    copy: "Product copy is written to help newer pet parents understand what each item is for without pressure or confusion.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About PawNest"
        title="Cleaner, cozier pet homes start with practical everyday essentials."
        description="PawNest helps pet parents create cleaner, cozier, and more practical homes through thoughtfully selected pet accessories for dogs, cats, and everyday routines."
      />

      <Section tone="white">
        <div className="about-story">
          <SectionHeader
            eyebrow="Brand story"
            title="Built for the real rhythm of living with pets."
            description="Pets bring warmth, movement, hair, muddy paws, scattered toys, travel bags, feeding corners, and favorite nap spots. PawNest exists for those small daily moments."
          />
          <div className="about-story__copy">
            <p>
              PawNest is focused on accessories that make pet life feel easier
              at home: soft places to rest, tools for cleaner shared spaces,
              simple walking gear, travel helpers, and storage that keeps pet
              supplies easy to find.
            </p>
            <p>
              The goal is a store that feels warm and trustworthy from the
              first visit, with practical products and clear language instead
              of clutter, pressure, or risky promises.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="beige">
        <div className="about-mission">
          <p className="eyebrow">Mission</p>
          <h2>
            Help pet parents build cleaner, cozier routines without making pet
            care feel complicated.
          </h2>
          <p>
            PawNest selects practical accessories for cozy pet spaces, cleaner
            homes, easier walks and travel, better organization, and simple
            everyday care.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Who PawNest is for"
          title="Made for everyday pet parents."
          description="PawNest is shaped around people who want their home to feel welcoming for pets and still easy to maintain."
        />
        <div className="about-card-grid">
          {audienceItems.map((item) => (
            <article className="about-card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="about-columns">
          <div>
            <SectionHeader
              eyebrow="What PawNest sells"
              title="Safe, practical pet accessories and home-care helpers."
              description="The catalog is built around comfort, clean-home routines, walking, travel, play, organization, and pet safety accessories."
            />
            <ul className="about-check-list">
              {sellsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow="What PawNest does not sell"
              title="Clear boundaries build trust."
              description="PawNest avoids categories that require health claims, prescriptions, medical endorsements, or risky promises."
            />
            <ul className="about-exclusion-list">
              {doesNotSellItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="beige">
        <SectionHeader
          eyebrow="Brand values"
          title="Warm, practical, clear, and honest."
          description="PawNest is designed to feel premium but affordable, cute but not childish, and helpful without overpromising."
        />
        <div className="about-card-grid">
          {valueItems.map((item) => (
            <article className="about-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Why pet parents can trust PawNest"
          title="Clear product roles, clear limits, and no risky claims."
          description="PawNest keeps trust simple: explain what each product is for, avoid unsafe promises, and stay honest about what the store is ready to do."
        />
        <TrustBadgeList
          badges={[
            "Thoughtfully selected for everyday pet parents",
            "No food, supplements, medicine, or risky claims",
            "Designed for comfort, convenience, and cleaner homes",
          ]}
        />
      </Section>

      <CtaSection
        eyebrow="Explore PawNest"
        title="Shop practical essentials for a cleaner, cozier pet home."
        description="Browse accessories for comfort, clean-home routines, walks, travel, play, organization, and everyday pet care."
        actions={
          <>
            <ButtonLink href="/shop">Shop PawNest Essentials</ButtonLink>
            <ButtonLink href="/categories/cozy-comfort" variant="secondary">
              Start With Cozy Comfort
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
