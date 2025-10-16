'use client';

import React, { useState } from 'react'

const Faq = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => {
      // If the clicked item is already open, close it
      if (prev[index]) {
        return {};
      }
      // Otherwise, close all items and open only the clicked one
      return { [index]: true };
    });
  };

  const faqData = [
    {
      question: "When is the team accepted in the ICPC portal?",
      answer: "On the same day of payment received it will be accepted in the ICPC Registration portal."
    },
    {
      question: "How can we know whether our payment is received?",
      answer: "You will receive an email intimation from our end and also, your team will be accepted in the ICPC Registration portal."
    },
    {
      question: "Last date for payment?",
      answer: "October 31, 2025."
    },
    {
      question: "How to cancel a team in ICPC Registration Site?",
      answer: "Coach has to login with the credentials and \"CANCEL\""
    },
    {
      question: "Last date of cancellation?",
      answer: "Teams interested in participating in the contest hosted by other sites in India shall cancel their team registration in the ICPC Registration portal on or before October 8, 2025."
    },
    {
      question: "Should they register again for regional as they only registered for online?",
      answer: "Selected teams are promoted from Preliminary round to Regional Round. There is NO need to register the team again for the Regional Round."
    },
    {
      question: "Do all team members need to pay the registration fee individually, or should it be paid only once per team?",
      answer: [
        "The registration fee is ₹1100 per team (not per individual).",
        "It needs to be paid only once per team, regardless of the number of team members.",
        "If multiple members from the same team have mistakenly paid the fee, they may contact the organizers with the payment details.",
        "The extra amount will be verified, and if eligible, the excess payment can be refunded as per the refund policy."
      ]
    }
  ];

  return (
    <div id="faq" className="text-blue-950 flex justify-center flex-col items-center relative overflow-hidden pb-[5vw] min-h-[50vh]">
      <div className="min-w-[85vw] max-md:flex-1 flex relative flex-col justify-center">
        <div className="text-[2.5vw] max-md:text-[4.5vw] font-semibold w-full max-md:h-auto flex justify-center items-center pointer-events-none mb-[2vw] max-md:mb-[3vw] max-md:px-[2vw]">
          <div className="max-w-[85vw] flex-1 max-md:text-left">Frequently Asked Questions</div>
        </div>
        
        <div className="flex w-full justify-center max-w-[100vw] overflow-hidden items-center py-[1vw] max-md:w-[95vw] max-md:px-[2.5vw]">
          <div className="flex-1 flex flex-col max-w-[65vw] max-md:max-w-[90vw] min-h-[15vw] w-full">
            {/* FAQ Section - shadcn style */}
            <div className="space-y-0 border rounded-md w-full">
              {faqData.map((item, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button
                    className="flex w-full items-center justify-between py-4 px-4 sm:px-6 text-left font-medium transition-all hover:bg-muted/50"
                    onClick={() => toggleItem(index)}
                    data-state={openItems[index] ? "open" : "closed"}
                  >
                    <span className="text-sm sm:text-base font-medium leading-relaxed pr-4">
                      {item.question}
                    </span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        openItems[index] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      openItems[index] 
                        ? 'max-h-[1000px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 pt-0">
                      {Array.isArray(item.answer) ? (
                        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.answer.map((point, pointIndex) => (
                            <li key={pointIndex}>
                              {point}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq