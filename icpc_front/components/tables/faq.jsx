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
      question: "Can beginners participate?",
      answer: "Absolutely. ICPC is open to eligible university students, and you do not need to be an expert competitive programmer to participate."
    },
    {
      question: "How many students are there in a team?",
      answer: "An ICPC team consists of three contestants, subject to the official eligibility rules."
    },
    {
      question: "Does my team need a coach?",
      answer: "Yes, follow the official ICPC team and coach requirements for your regional registration."
    },
    {
      question: "How much is registration?",
      answer: "The preliminary-round registration fee for Indian teams is ₹1,500 per team."
    },
    {
      question: "Is the preliminary round online?",
      answer: "Yes. The ICPC India Preliminary Round is conducted online."
    },
    {
      question: "How are teams selected for the onsite round?",
      answer: "Selection is based on performance in the preliminary round and the applicable ICPC regional selection rules."
    },
    {
      question: "Where will the Amritapuri Regional be conducted?",
      answer: "The 2026 Amritapuri multisite regional is being conducted across four locations: Kollam, Bengaluru, Coimbatore, and Mysuru."
    },
    {
      question: "Do I have to travel to Kerala?",
      answer: "Not necessarily. Amritapuri is a multisite regional with four announced locations (Kollam, Bengaluru, Coimbatore, and Mysuru), so you can choose the city that works best for your team."
    },
    {
      question: "What if I have never participated in ICPC before?",
      answer: "That's okay. Start with the Beginner Guide and preparation resources available on the site."
    },
    {
      question: "What happens after the regional?",
      answer: "Depending on performance and the applicable ICPC qualification rules, top teams can progress toward subsequent stages of the ICPC pathway, including the Asia West Championship and the ICPC World Finals."
    },
    {
      question: "Where can I get registration help?",
      answer: "Contact the official ICPC Amritapuri support team at: icpc@am.amrita.edu"
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