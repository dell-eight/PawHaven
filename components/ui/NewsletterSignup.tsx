"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type NewsletterSignupProps = {
  buttonLabel?: string;
  description: string;
  incentive?: string;
  note?: string;
  placeholder?: string;
  title: string;
};

export function NewsletterSignup({
  buttonLabel = "Join the PawHaven List",
  description,
  incentive = "Get early access to new arrivals and bundle offers.",
  note = "No spam. Just practical pet-parent tips and PawHaven updates.",
  placeholder = "Email address",
  title,
}: NewsletterSignupProps) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSubmitted(true);
  }

  return (
    <div className="newsletter-signup">
      <div>
        <h2 className="newsletter-signup__title">{title}</h2>
        <p className="newsletter-signup__copy">{description}</p>
        {incentive ? (
          <p className="newsletter-signup__incentive">{incentive}</p>
        ) : null}
      </div>
      <form className="newsletter-signup__form" onSubmit={handleSubmit}>
        <div className="newsletter-signup__controls">
          <input
            className="newsletter-signup__input"
            name="email"
            placeholder={placeholder}
            required
            type="email"
          />
          <Button type="submit">{buttonLabel}</Button>
        </div>
        <p className="newsletter-signup__note">{note}</p>
        {hasSubmitted ? (
          <p className="newsletter-signup__success" role="status">
            Thanks for joining the PawHaven list preview. Connect an email
            provider before saving real subscribers.
          </p>
        ) : null}
      </form>
    </div>
  );
}
