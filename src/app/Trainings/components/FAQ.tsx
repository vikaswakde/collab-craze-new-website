import React from "react";

const accordionData = [
  {
    id: 1,
    question: "How much time do I have to spend every week?",
    answer: "We recommend you to spend at least 5-8 hours per week to study.",
  },
  {
    id: 2,
    question: "Is this in-person or online course?",
    answer:
      "This is an offline course where you can take part in it actively in our class.",
  },
  {
    id: 3,
    question: "Do I need prior coding experience?",
    answer:
      "No, you don't need any prior coding experience at all. Really. Trust us!",
  },
  {
    id: 4,
    question: "What technical requirements do I need for the course?",
    answer: "A Laptop is required to take part in course.",
  },
  {
    id: 5,
    question: "How does the placement support work?",
    answer:
      "We are dedicated to helping and supporting you as you begin your journey as a software engineer in the field. Upon completion of the course, you will undergo an assessment that will grant you access to our CollabCraze developer pool. This pool provides exclusive openings for international industry-level development projects.Please note that we do not guarantee employment at the end of the course.However, CollabCraze will provide you with the best expertise to launch your career in tech, boasting an impressive employment rate of 92% in courses offered in Pimpri Chinchwad",
  },
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="lg:w-[50rem]  mx-auto">
      <div className="flex  my-10 flex-col mx-2 gap-y-10">
        <h2 className="text-3xl font-semibold text-center mb-10">
          {" "}
          Frequently Asked Questions{" "}
        </h2>
        {accordionData.map((data) => (
          <div key={data.id} className="">
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                {/* <p className="text-lg font-bold text-gray-600 bg px-1 rounded-full bg-[#999193]">
                    Q{data.id}
                  </p> */}
                <AccordionTrigger className="font-semibold px-1 pt-0 pb-2 text-start ">
                  {data.question}
                </AccordionTrigger>
                <div className="px-5 py-4 text-[#dbcace]  text-lg font-medium">
                  <AccordionContent>{data.answer}</AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
