// 'use client'
// import { useState, useRef, useEffect } from "react"
// import Image from "next/image";

// const COMMANDS = {
//   'help' : `
// Available commands:
// - help: Show this help message
// - about: About ICPC World Finals
// - register: Get registration information
// - clear: Clear terminal screen`,
//   'clear': '',
//   'about' : `
// International Collegiate Programming Contest (ICPC)
// World Finals 2024 @ Amrita University

// The ICPC is the premier global programming competition conducted by and for the world's universities. 
// The contest fosters creativity, teamwork, and innovation in building new software programs.`,
//  'register' : `
// Registrations are now closed.

// Registration Deadline: November 9th, 2024
// Registration Fee: 1100 INR per team

// For more information, contact the ICPC World Finals 2024 Organizing Committee at icpc@amrita.edu.
// `
// };

// export default function Terminal() {
//   const [isDragging, setIsDragging] = useState(false);
//   const [offset, setOffset] = useState([0, 0]);
//   const [position, setPosition] = useState({ left: 100, top: 100 });
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState(['Welcome\nType help for available commands']);
//   const [commandHistory, setCommandHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [isOpen, setIsOpen] = useState(false);
  
//   const ref = useRef(null);
//   const inputRef = useRef(null);
//   const outputRef = useRef(null);
//   const terminalRef = useRef(null);

//   const calculateCenteredPosition = () => {
//     const terminalWidth = window.innerWidth < 640 ? window.innerWidth * 0.9 : window.innerWidth * 0.35;
//     const terminalHeight = window.innerWidth < 640 ? window.innerWidth * 0.5 : window.innerWidth * 0.2;
    
//     return {
//       left: (window.innerWidth - terminalWidth) / 2,
//       top: (window.innerHeight - terminalHeight) / 2 + window.scrollY
//     };
//   };

//   useEffect(() => {
//     if (isOpen) {
//       setPosition(calculateCenteredPosition());
//     }
//   }, [isOpen]);

//   const constrainPosition = (pos) => {
//     const terminalWidth = terminalRef.current?.offsetWidth || 0;
//     const terminalHeight = terminalRef.current?.offsetHeight || 0;
    
//     return {
//       left: Math.max(0, Math.min(window.innerWidth - terminalWidth, pos.left)),
//       top: Math.max(0, Math.min(window.innerHeight - terminalHeight + window.scrollY, pos.top))
//     };
//   };

//   useEffect(() => {
//     if (outputRef.current) {
//       outputRef.current.scrollTop = outputRef.current.scrollHeight;
//     }
//   }, [history]);

//   const handleCommand = (cmd) => {
//     const args = cmd.trim().split(' ');
//     const command = args[0].toLowerCase();
//     const commandArgs = args.slice(1);

//     let output = '';
    
//     if (command in COMMANDS) {
//       if (typeof COMMANDS[command] === 'function') {
//         output = COMMANDS[command](commandArgs);
//       } else {
//         output = COMMANDS[command];
//       }
//     } else if (command) {
//       output = `Command not found: ${command}. Type help for available commands.`;
//     }

//     if (command === 'clear') {
//       setHistory([]);
//     } else {
//       setHistory(prev => [...prev, `coder@amritaicpc$ ${cmd}`, output].filter(Boolean));
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleCommand(input);
//       setCommandHistory(prev => [...prev, input]);
//       setHistoryIndex(-1);
//       setInput('');
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (historyIndex < commandHistory.length - 1) {
//         const newIndex = historyIndex + 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setInput('');
//       }
//     }
//   };

//   const handleMouseDown = (e) => {
//     if (e.target === ref.current) {
//       setIsDragging(true);
//       setOffset([position.left - e.clientX, position.top - e.clientY]);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const newPosition = {
//         left: e.clientX + offset[0],
//         top: e.clientY + offset[1],
//       };
//       setPosition(constrainPosition(newPosition));
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging, offset]);

//   const toggleTerminal = () => {
//     setIsOpen(prev => !prev);
//   };

//   return (
//     <>
//       <div className="fixed z-20 bottom-0 right-0">
//         <div className="text-[1.6vw] font-bold hidden">
//             <p className="transform -translate-x-[.4vw] translate-y-[4vw] -rotate-[85deg]">A</p>
//             <p className="transform -translate-x-[.8vw] translate-y-[2.5vw] -rotate-[60deg]">S</p>
//             <p className="transform -translate-x-[.8vw] translate-y-[1.5vw] -rotate-[30deg]">K</p>
//             <p className="transform translate-x-[1.5vw] -translate-y-[4vw] ">H</p>
//             <p className="transform translate-x-[1.3vw] -translate-y-[1vw] rotate-[85deg]">E</p>
//             <p className="transform -translate-x-[1.5vw] -rotate-45">R</p>
//             <p className="transform translate-x-[1.3vw] -translate-y-[1vw] rotate-[85deg]">E</p>
//         </div>
//         <button 
//           onClick={toggleTerminal}
//           className=" bg-blue-500 hover:bg-blue-600 text-white rounded-full w-[5vw] h-[5vw] max-md:w-[20vw] max-md:h-[20vw] flex justify-center items-center m-[1vw] hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
//           aria-label="Toggle Terminal"
//         >
//           {/* <Image src="/terminal_black.png" width={1} height={1} className="h-[4vw] w-auto max-md:h-[15vw] brightness-0" unoptimized></Image> */}
//             <p className="text-[1.6vw] font-bold max-md:text-[6vw]">FAQ</p>
//         </button>
//       </div>

//       {isOpen && (
//         <div 
//           className="absolute z-20 bg-black w-[35vw] h-[20vw] max-md:w-[90vw] max-md:h-[50vw] rounded-[1vw] max-md:rounded-[2vw] overflow-hidden flex flex-col shadow-lg animate-fade-in"
//           style={{ 
//             left: position.left + "px", 
//             top: position.top + "px",
//           }}
//         >
//           <div 
//             ref={ref}
//             className="h-[2vw] max-md:h-[5vw] bg-gray-700 w-full flex justify-between items-center cursor-move"
//             onMouseDown={handleMouseDown}
//           >
//             <div className="flex items-center">
//               <div className="rounded-full ml-[0.5vw] max-md:ml-[1vw] bg-red-500 h-[1vw] w-[1vw] max-md:h-[3vw] max-md:w-[3vw] cursor-pointer hover:bg-red-600" onClick={toggleTerminal} />
             
//             </div>
//             <div className="text-xs max-md:text-[3vw] text-gray-300 mr-2">ICPC Help Terminal</div>
//           </div>
          
//           <div 
//             ref={outputRef} 
//             className="flex-1 overflow-y-auto p-2 font-mono text-green-400 text-[0.8vw] max-md:text-[3.5vw] max-h-[calc(20vw-4vw)] max-md:max-h-[calc(37vw)]"
//           >
//             {history.map((line, i) => (
//               <div key={i} className="whitespace-pre-wrap break-words">{line}</div>
//             ))}
//           </div>

//           <div className="flex px-2 py-1 items-center max-md:min-h-[10vw] font-mono text-green-400 text-[0.8vw] max-md:text-[3.5vw] border-t border-gray-700 h-[2vw]">
//             <span>coder@amritaicpc$ </span>
//             <input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               className="flex-1 bg-transparent outline-none ml-1 min-w-0 max-md:min-w-[50vw] max-md:min-h-[10vw]"
//               autoFocus
//             />
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.2s ease-out;
//         }
//       `}</style>
//     </>
//   );
// }

'use client';
import { useEffect, useRef, useState } from 'react';

export default function Terminal({ apiKey }) {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! 👋 Need help with ICPC World Finals?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4', // or 'gpt-3.5-turbo'
          messages: [
            { role: 'system', content: 'You are a helpful assistant for the ICPC World Finals. Be concise, friendly, and helpful.' },
            ...messages.map(msg => ({
              role: msg.from === 'bot' ? 'assistant' : 'user',
              content: msg.text
            })),
            { role: 'user', content: input }
          ]
        })
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content?.trim();

      if (botReply) {
        setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
      } else {
        setMessages(prev => [...prev, { from: 'bot', text: "Sorry, I didn't get that. Try again." }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { from: 'bot', text: '⚠️ Error talking to server. Try again later.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const toggleChat = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out overflow-hidden group"
          aria-label="Toggle Chat"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] z-40 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col animate-slide-up">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 text-sm font-semibold flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium">ICPC HubBot</div>
                <div className="text-xs opacity-90">Online now</div>
              </div>
            </div>
            <button onClick={toggleChat} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm shadow-sm ${
                  msg.from === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-2xl max-w-[80%] border border-gray-200">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex border-t border-gray-200 px-4 py-3 bg-white">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isTyping}
              className="ml-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
