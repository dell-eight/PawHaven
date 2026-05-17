import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrustBadgeList } from "@/components/ui/TrustBadge";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About PawHaven",
  description:
    "Learn how PawHaven curates pet comfort, pet cleaning, cat essentials, and dog accessories for cleaner, cozier pet homes in the Philippines.",
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
  "Pet hair removers, grooming gloves, and paw cleanup tools",
  "Cat scratching lounges, window perches, and cozy cat corners",
  "Feeding mats and small-space cleaner-home helpers",
  "Carriers, car seat covers, water bottles, and travel organization",
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
    copy: "Every PawHaven category starts with a real pet-home routine: comfort, cat lounging, pet hair, muddy paws, feeding mess, or short outings.",
  },
  {
    title: "Warm, not childish",
    copy: "The brand is cozy and pet-friendly while staying clean, modern, and easy for adults to shop.",
  },
  {
    title: "Clear limits",
    copy: "PawHaven avoids risky product categories and does not use medical promises to sell everyday accessories.",
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
        eyebrow="About PawHaven"
        title="Cleaner, cozier pet homes start with practical everyday essentials."
        description="PawHaven helps pet parents create cleaner, cozier, and more practical homes through thoughtfully selected pet accessories for dogs, cats, and everyday routines."
      />

      <Section tone="white">
        <div className="about-story">
          <SectionHeader
            eyebrow="Brand story"
            title="Built for the real rhythm of living with pets."
            description="Pets bring warmth, movement, hair, muddy paws, travel bags, feeding corners, favorite nap spots, and cat windowsills. PawHaven exists for those small daily moments."
          />
          <div className="about-story__copy">
            <p>
              PawHaven is focused on accessories that make pet life feel easier
              at home: soft places to rest, tools for cleaner shared spaces,
              cat-friendly corners, travel helpers, and small products that
              reduce everyday pet-home friction.
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
            PawHaven selects practical accessories for cozy pet spaces, cleaner
            homes, cat-friendly routines, easier walks and travel, and simple
            everyday care.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Who PawHaven is for"
          title="Made for everyday pet parents."
          description="PawHaven is shaped around people who want their home to feel welcoming for pets and still easy to maintain."
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
              eyebrow="What PawHaven sells"
              title="Safe, practical pet accessories and home-care helpers."
              description="The catalog is built around cat essentials, cozy rest, cleaner-home routines, and walk or travel convenience."
            />
            <ul className="about-check-list">
              {sellsItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow="What PawHaven does not sell"
              title="Clear boundaries build trust."
              description="PawHaven avoids categories that require health claims, prescriptions, medical endorsements, or risky promises."
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
          description="PawHaven is designed to feel premium but affordable, cute but not childish, and helpful without overpromising."
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
          eyebrow="Why pet parents can trust PawHaven"
          title="Clear product roles, clear limits, and no risky claims."
          description="PawHaven keeps trust simple: explain what each product is for, avoid unsafe promises, and stay honest about what the store is ready to do."
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
        eyebrow="Explore PawHaven"
        title="Shop practical essentials for a cleaner, cozier pet home."
        description="Browse accessories for cat comfort, cozy rest, cleaner-home routines, walks, travel, and everyday pet care."
        actions={
          <>
            <ButtonLink href="/shop">Shop PawHaven Essentials</ButtonLink>
            <ButtonLink href="/categories/cozy-comfort" variant="secondary">
              Start With Cozy Rest
            </ButtonLink>
          </>
        }
      />
    </main>
  );
}
