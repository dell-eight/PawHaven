"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "soft";
};

type HeroSectionProps = {
  actions: HeroAction[];
  eyebrow: string;
  image: {
    alt: string;
    src: string;
  };
  note: {
    body: string;
    title: string;
  };
  promises: string[];
  subtitle: string;
  title: ReactNode;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
} satisfies Variants;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  },
} satisfies Variants;

export function HeroSection({
  actions,
  eyebrow,
  image,
  note,
  promises,
  subtitle,
  title,
}: HeroSectionProps) {
  return (
    <motion.section
      animate="visible"
      aria-labelledby="home-hero-title"
      className="home-hero"
      initial="hidden"
      variants={containerVariants}
    >
      <div className="container home-hero__inner">
        <div className="home-hero__copy">
          <motion.div className="home-hero__content" variants={containerVariants}>
            <motion.p className="eyebrow" variants={itemVariants}>
              {eyebrow}
            </motion.p>
            <motion.h1 id="home-hero-title" variants={itemVariants}>
              {title}
            </motion.h1>
            <motion.div
              aria-hidden="true"
              className="home-hero__rule"
              variants={itemVariants}
            />
            <motion.p variants={itemVariants}>{subtitle}</motion.p>
            <motion.div className="home-hero__actions" variants={itemVariants}>
              {actions.map((action) => (
                <ButtonLink
                  href={action.href}
                  key={action.href}
                  variant={action.variant}
                >
                  {action.label}
                </ButtonLink>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            aria-label="PawHaven promises"
            className="home-hero__promises"
            variants={itemVariants}
          >
            {promises.map((promise) => (
              <span key={promise}>{promise}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          aria-label="PawHaven home scene"
          className="home-hero__visual"
          initial={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <div className="home-hero__scene">
            <Image
              alt={image.alt}
              className="home-hero__image"
              fill
              priority
              sizes="(min-width: 56rem) 40vw, 100vw"
              src={image.src}
            />
            <motion.div className="home-hero__note" variants={itemVariants}>
              <strong>{note.title}</strong>
              <span>{note.body}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
