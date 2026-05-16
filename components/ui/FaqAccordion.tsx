type FaqItem = {
  answer: string;
  question: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary className="faq-item__summary">{item.question}</summary>
          <div className="faq-item__content">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
