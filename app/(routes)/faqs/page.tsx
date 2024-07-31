import { AccordionFaqs } from "./components/AccordionFaqs";

export default function FaqsPage() {
  return (
    <div className="max-w-4xl mx-auto bg-background shadow-md rounded-lg p-6">
      <h2 className="mb-8 text-3xl">FAQS</h2>
      <div className="mb-5">
        <p>Welcome to our FAQs page!</p>
        <p>This page is aimed at answering your most common questions.</p>
        <p>
          If you have any more questions, please feel free to reach out to us
          via email.
        </p>
      </div>
      <AccordionFaqs />
    </div>
  );
}
