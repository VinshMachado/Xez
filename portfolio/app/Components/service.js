import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const service = () => {
  return (
    <div className="p-4">
      <div>
        <span className="text-3xl font-bold  ">Services</span>
        <p className="text-lg text-[#727272] leading-5 py-5">
          We team up with founders and startups to bring their ideas to
          life—whether it s a simple landing page, a complete website, or mobile
          and web apps.
        </p>
        <ul className="list-disc text-[#727272] pl-5 ">
          <li>No template work</li>
          <li>Deep-dive into your product and ideas</li>
        </ul>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full pt-8">
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default service;
