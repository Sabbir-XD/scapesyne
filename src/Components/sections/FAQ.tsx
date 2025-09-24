"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer:
      "Absolutely! You can assign multiple team members to a single job, making team management efficient and seamless.",
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes! Our app is fully responsive and works smoothly on both mobile devices and desktop computers.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#212B36]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#637381] mt-4">
          Quick answers to help you get the most out of our app.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="collapse collapse-plus bg-white border border-gray-200 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
            <div className="collapse-title font-semibold text-[#212B36] text-lg">
              {faq.question}
            </div>
            <div className="collapse-content text-sm text-[#637381]">
              {faq.answer}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
