'use client'
import { Trophy, Users, Target, Star, Award, Gift, CheckCircle, MessageCircle, Crown, CrossIcon, CheckSquare, SkipBack, X, CrownIcon, Medal, StarIcon, StarOff } from "lucide-react"
import { Check, User, Rocket } from "lucide-react";
import Image from "next/image"; // Add this import

const steps = [
  {
    title: "Step 1",
    subtitle: "Submit Your Application",
    description:
      "Click the button below and fill out the form. Tell us why you're passionate about building a coding community.",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "Step 2",
    subtitle: "Get Your Ambassador Kit",
    description:
      "Once selected, you'll receive a confirmation email with your unique referral code and a digital starter kit to help you succeed.",
    icon: <Gift className="w-5 h-5" />,
  },
  {
    title: "Step 3",
    subtitle: "Lead and Inspire",
    description:
      "Start your mission! Engage your community, guide new teams, and watch your impact (and rewards) grow.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-40 pb-8 sm:pb-12">
        {/* Hero Section - Image left, Content right layout */}
        <div className="mb-12 sm:mb-16 ">
            
          <div className="flex flex-col lg:flex-row lg:items-top gap-8">
            {/* Image column - Left side on desktop */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <Image
                src="/coursel_images/2.jpg"
                alt="ICPC Championship Event"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                width={600}
                height={400}
              />
            </div>
            
            {/* Content column - Right side on desktop */}
            <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
              <div className="text-center lg:text-left">
              
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  ARE YOU THE NEXT CHAMPION AMBASSADOR?
                </h1>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    <p className="text-base sm:text-lg">Win a Grand Cash Prize of</p>
                  </div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">₹1,00,000</p>
                </div>
                
                <p className="text-base sm:text-lg mb-6 lg:pr-8 leading-relaxed">
                  The title of Champion Ambassador and our grand prize await the single top performer who inspires over 2,000
                  teams to register for the ICPC Asia West Amritapuri regionals.
                </p>
                <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSdv6guD9QPe64vxsrSmtG6UHLes5RW9LHdZaD5HL3rp3_lWhA/viewform" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-md transition-colors"
>
  Apply Now
</a>
              </div>
            </div>
          </div>
        </div>

        {/* What is the Program */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">What is the Amritapuri Ambassador Program?</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                The ICPC Asia West Championship, hosted at the prestigious Amritapuri campus, is the gateway to the ICPC
                World Finals. This program is a movement to find passionate leaders like you to spread the spirit of
                competitive programming across the region.
              </p>
              <p>
                As an ICPC Amritapuri Ambassador, you will be the critical link connecting your peers to a future in
                technology. You will be at the forefront of building a vibrant, region-wide coding culture, with the
                Amritapuri finals as its celebrated hub.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src="/title_image.svg"
                alt="Ambassador Program"
                className="rounded-lg shadow-md w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Your Mission as an Ambassador:</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
              <Star className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Promote the Legacy:</h3>
                <p className="text-sm sm:text-base">
                  Spread awareness and generate excitement for the ICPC Amritapuri regionals on your campus and in your
                  network.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
              <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Mentor Future Champions:</h3>
                <p className="text-sm sm:text-base">
                  Guide your peers and juniors through the registration process, making it easy for them to take their
                  first step.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
              <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Build a Thriving Community:</h3>
                <p className="text-sm sm:text-base">
                  Organize engaging info sessions, coding meetups, and online events that bring coders together.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
              <Target className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Champion Collaboration:</h3>
                <p className="text-sm sm:text-base">
                  Inspire students to form teams and experience the power of collaborative problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">This is More Than a Title. It&apos;s Your Launchpad.</h2>
          </div>
          <p className="text-base sm:text-lg mb-6">
            While the grand prize is the ultimate goal, the journey of an ambassador is filled with invaluable rewards
            that will shape your career.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Grow as a Leader, Not Just a Coder:</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Trophy className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Earn Elite Recognition:</h4>
                <p className="text-sm sm:text-base">
                  Be officially recognized by ICPC at Amritapuri as a leader. This is a powerful credential that makes
                  top recruiters take notice.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Target className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Build In-Demand Skills:</h4>
                <p className="text-sm sm:text-base">
                  Master leadership, community management, and organizational skills that are critical for success in
                  any field.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Users className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Network with the Region&apos;s Best:</h4>
                <p className="text-sm sm:text-base">
                  Gain access to the ICPC Asia West core community, connecting with top minds, mentors, and future tech
                  leaders.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Star className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Leave a Lasting Legacy:</h4>
                <p className="text-sm sm:text-base">
                  Be the person who inspired hundreds of students on your campus to compete and excel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Levels */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Your Journey of Rewards</h2>
          </div>
          <p className="text-base sm:text-lg mb-8 leading-relaxed">
            We believe in celebrating every milestone. As you inspire more teams, you&apos;ll unlock an incredible ladder of
            rewards, with each level including all perks from the previous ones.
          </p>

          {/* Simplified card grid with reduced animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Level 1-3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Kickstart</h3>
              <div className="text-3xl font-bold mb-1">10</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Everything necessary to get started.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Official ICPC Ambassador Certificate</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Official ICPC T-Shirt</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Growing</h3>
              <div className="text-3xl font-bold mb-1">25</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Everything in Kickstart, plus essential tools.</p>
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">All the Above </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">ICPC Bag</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Active Ambassador</h3>
              <div className="text-3xl font-bold mb-1">50</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Everything in Growing, plus collaboration tools.</p>
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">All the Above </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">ICPC Bottle</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 4-6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Rising Star</h3>
              <div className="text-3xl font-bold mb-1">75</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Building momentum with exclusive items.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">All the Above </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Special invitation to ICPC Amritapuri Onsite Finals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Regional Pass</h3>
              <div className="text-3xl font-bold mb-1">100</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Unlock exclusive access to finals.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">All the Above </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Tech Gadget worth ₹2,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Tech Enthusiast</h3>
              <div className="text-3xl font-bold mb-1">150</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Premium rewards and tech gadgets.</p>
                <div className="space-y-2">
                 <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">All the Above *</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">Tech Gadget worth ₹3,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <X className="h-4 w-4 text-blue-600 flex-shrink-0" /> */}
                    <span className="text-sm text-gray-400">* Note: Previous Gadget is not included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 7-9 - Maintain special styling but reduce animations */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-5 sm:p-6 hover:border-red-400 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2 text-red-700">Power Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-red-600">250</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Advanced rewards for power users.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm">All the Above *</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <span className="text-sm">Premium Gadget worth ₹5,000</span>
                  </div>
                   <div className="flex items-center gap-2">
                    {/* <X className="h-4 w-4 text-red-600 flex-shrink-0" /> */}
                    <span className="text-sm text-gray-400">* Note: Previous Gadget is not included</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-5 sm:p-6 hover:border-orange-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2 text-orange-700">Super Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-orange-600">500</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Elite level with premium gadgets.</p>
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-sm">All the Above *</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                    <span className="text-sm font-semibold ">Premium Gadget worth ₹10,000</span>
                  </div>
                   <div className="flex items-center gap-2">
                    {/* <X className="h-4 w-4 text-orange-600 flex-shrink-0" /> */}
                    <span className="text-sm text-gray-400">* Note: Previous Gadget is not included</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-300 rounded-lg p-5 sm:p-6 hover:border-yellow-400 transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Crown className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-800">Mega Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-yellow-700">1,000</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Ultimate achievement with maximum rewards.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm">All the Above *</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-sm font-semibold">Premium Gadget worth ₹20,000</span>
                  </div>
                   <div className="flex items-center gap-2">
                    {/* <StarOff className="h-4 w-4 text-yellow-600 flex-shrink-0" /> */}
                    <span className="text-sm text-gray-400">* Note: Previous Gadget is not included</span>
                  </div>
                </div>
              </div>
            </div>
             <div className="bg-gradient-to-br from-purple-100 to-purple-50 border-2 border-purple-300 rounded-lg p-5 sm:p-6 hover:border-purple-400 transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Medal className="h-6 w-6 text-legend" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-legend">Champion Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-legend">2,000</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3">Ultimate achievement with maximum rewards.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-legend flex-shrink-0" />
                    <span className="text-sm">All the Above *</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-legend flex-shrink-0" />
                    <span className="text-sm font-semibold">Grand Cash Prize of ₹1,00,000</span>
                  </div>
                   <div className="flex items-center gap-2">
                    {/* <X className="h-4 w-4 text-legend flex-shrink-0" /> */}
                    <span className="text-sm text-gray-400">* Note: Previous Gadget is not included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to Begin? Apply in 3 Simple Steps.</h2>
          </div>
          <p className="text-base sm:text-lg mb-8">
            Your journey to becoming a Champion Ambassador starts now. We&apos;ve made the application process quick and
            easy.
          </p>
          
          {/* Mobile view - Vertical steps */}
          <div className="flex flex-col space-y-8 md:hidden">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Step circle */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 flex-shrink-0 mt-1
                  ${index === 0 ? "bg-blue-500 text-white border-blue-500" : "bg-gray-200 text-blue-500 border-gray-300"}`}
                >
                  {step.icon}
                </div>

                {/* Step text */}
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <h4 className="font-medium text-sm">{step.subtitle}</h4>
                  <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view - Horizontal steps */}
          <div className="hidden md:flex items-center justify-between w-full max-w-4xl mx-auto mt-10">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center text-center relative">
                {/* Line between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                )}

                {/* Step circle */}
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${index === 0 ? "bg-blue-500 text-white border-blue-500" : "bg-gray-200 text-blue-500 border-gray-300"}`}
                >
                  {step.icon}
                </div>

                {/* Step text */}
                <div className="mt-2">
                  <h3 className="font-semibold">{step.title}</h3>
                  <h4 className="font-medium text-sm">{step.subtitle}</h4>
                  <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdv6guD9QPe64vxsrSmtG6UHLes5RW9LHdZaD5HL3rp3_lWhA/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto rounded-md transition-colors inline-block"
            >
              APPLY NOW TO BECOME AN AMRITAPURI AMBASSADOR
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="p-4 sm:p-6 border rounded-lg">
              <h3 className="font-bold mb-2 text-base sm:text-lg">Who is eligible to apply?</h3>
              <p className="text-sm sm:text-base">
                Any current student enrolled in a college or university within the ICPC Asia West region is welcome to
                apply. We are looking for passion and leadership potential.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg">
              <h3 className="font-bold mb-2 text-base sm:text-lg">How are my referred teams tracked?</h3>
              <p className="text-sm sm:text-base">
                You will be given a unique referral code. A successful referral is counted when a team successfully
                completes their registration for the ICPC Amritapuri regionals using your code.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg">
              <h3 className="font-bold mb-2 text-base sm:text-lg">Is there a deadline to apply?</h3>
              <p className="text-sm sm:text-base">
                Yes, applications for the Ambassador Program close on October 15, 2025. We encourage you to apply early!
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg">
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                Can there be more than one ambassador from my college?
              </h3>
              <p className="text-sm sm:text-base">
                We encourage collaboration and believe that multiple ambassadors can work together to create an even
                bigger impact on campus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
