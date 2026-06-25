'use client'
import { Trophy, Users, Target, Star, Award, Gift, CheckCircle, MessageCircle, Crown, CrossIcon, CheckSquare, SkipBack, X, CrownIcon, Medal, StarIcon, StarOff } from "lucide-react"
import { Check, User, Rocket } from "lucide-react";
import Image from "next/image"; // Add this import

const steps = [
  {
    title: "Step 1",
    subtitle: "Submit Your Application",
    description: "Click the button below and complete the application form. Tell us about yourself, your campus, and why you're passionate about growing the competitive programming community.",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "Step 2",
    subtitle: "Get Your Ambassador Kit",
    description: "Once selected, you'll receive a confirmation email containing: Your Ambassador Welcome Kit, Official Ambassador Resources, Promotional Materials, and Support Resources to Help You Succeed.",
    icon: <Gift className="w-5 h-5" />,
  },
  {
    title: "Step 3",
    subtitle: "Lead and Inspire",
    description: "Start your mission. Promote ICPC within your institution, guide students, build awareness, and help more teams discover the world of competitive programming. The more impact you create, the more rewards and recognition you'll unlock.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-40 pb-8 sm:pb-12">
        {/* Hero Section Part 1 - Image left, Content right layout */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Image column - Left side on desktop */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <Image
                src="/expert.png"
                alt="ICPC Championship Event"
                className="  w-full h-auto object-cover"
                width={600}
                height={400}
              />
            </div>
            
            {/* Content column - Right side on desktop */}
            <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Become an ICPC Amritapuri Ambassador
                </h1>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    <p className="text-base sm:text-lg font-medium text-gray-700">Lead Your Campus. Inspire a Generation.</p>
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">Earn Rewards Worth ₹10,00,000.</p>
                </div>
                
                <div className="text-base sm:text-lg mb-6 lg:pr-8 leading-relaxed space-y-4 text-gray-700 text-justify">
                  <p>
                    The ICPC Amritapuri Ambassador Program is your opportunity to become the face of competitive programming in your institution and region.
                  </p>
                  <p>
                    As an official ambassador, you&apos;ll help students discover ICPC, guide aspiring programmers, build thriving coding communities, and compete for rewards worth up to ₹10,00,000.
                  </p>
                </div>
                
                <a 
                  href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSey2XIxzRWhb1Z4x2DihPOs3GZycbvVUT1S5m22JQQNhsSXyA/viewform?usp=send_form" 
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

        {/* Hero Section Part 2 - Content left, Image right layout */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Content column - Left side on desktop */}
            <div className="lg:w-1/2 flex flex-col order-2 lg:order-1">
              <div className="text-base sm:text-lg lg:pr-8 leading-relaxed space-y-4 text-gray-700 text-justify">
                <p>
                  Whether you&apos;re a competitive programmer, community builder, student leader, or simply passionate about technology, this is your chance to create a lasting impact while earning exclusive recognition and rewards.
                </p>
                
                <div className="mt-6 bg-blue-50 p-5 rounded-lg text-sm sm:text-base text-blue-900 border border-blue-100">
                  <p className="font-semibold mb-3 text-blue-800 text-left text-lg">Why Become an Ambassador?</p>
                  <ul className="list-none space-y-2 text-left">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> Official ICPC Amritapuri Ambassador Certificate</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> Exclusive ICPC Merchandise & Rewards</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> Featured on the ICPC Website</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> National Ambassador Leaderboard</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> Leadership & Networking Opportunities</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> Rewards Worth Up to ₹10,00,000</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" /> Recognition Among India’s Top Student Leaders</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Image column - Right side on desktop */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <Image
                src="/ambassadorimage.jpeg"
                alt="Students at ICPC Event"
                className="  w-full h-auto object-cover"
                width={600}
                height={400}
              />
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
                <div className="order-first lg:order-first">
              <Image
                src="/abcd.png"
                alt="Ambassador Program"
                className=" w-full h-auto"
                width={600}
                height={400}
              />
            </div>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-justify">
              <p>
                The ICPC Amritapuri Ambassador Program is a student leadership initiative designed to empower passionate students to promote competitive programming and help more teams discover ICPC.
              </p>
              <p>
                Ambassadors serve as the bridge between ICPC and their campus communities. They spread awareness, connect students with opportunities, guide participants, and build a stronger competitive programming culture within their institutions.
              </p>
              <p>
                More than just a title, becoming an ambassador means becoming a community builder, a mentor, and a leader who inspires others to challenge themselves and grow.
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-orange-50 border-t-4 border-orange-500 p-6 md:p-8 rounded-b-lg rounded-t-sm shadow-sm text-center max-w-4xl mx-auto">
            <h3 className="font-bold text-orange-800 text-xl md:text-2xl flex flex-col md:flex-row items-center justify-center gap-2 mb-3">
              <StarIcon className="h-6 w-6 md:h-8 md:w-8" />
              Exclusive Opportunity: Only 3 Ambassadors Per College
            </h3>
            <p className="text-orange-900 text-base md:text-lg max-w-3xl mx-auto">
              To ensure quality leadership and meaningful impact, each institution can have a maximum of three official ICPC Amritapuri Ambassadors. Once all ambassador positions from a college are filled, applications from the same institution may be placed on a waiting list.
            </p>
            <p className="text-orange-900 text-base md:text-lg font-semibold mt-3">
              If you&apos;re interested, don&apos;t wait. Apply early before your college mates secure the available ambassador positions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Your Mission as an Ambassador:</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <Star className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Promote the Legacy:</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Introduce students to ICPC and help them understand the value of competitive programming.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Build Awareness:</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Spread information about ICPC events, opportunities, and resources across your campus and networks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Help Students Get Started:</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Guide students in forming teams, registering for contests, and beginning their competitive programming journey.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
              <Target className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Strengthen Your Community:</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Collaborate with clubs, faculty, and student groups to foster a culture of problem-solving and innovation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <Rocket className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Inspire Future Champions:</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Encourage students to challenge themselves, develop new skills, and participate in one of the world&apos;s most prestigious programming competitions.
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
          <p className="text-base sm:text-lg mb-6 text-justify">
            The most successful ambassadors don&apos;t just earn rewards—they develop skills that stay with them for life.
          </p>
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Through this program, you&apos;ll gain experience in:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <Crown className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Leadership</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
                <span className="font-medium">Community Building</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <Target className="h-5 w-5 text-red-600" />
                <span className="font-medium">Event Promotion</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <MessageCircle className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Communication</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <CheckSquare className="h-5 w-5 text-yellow-600" />
                <span className="font-medium">Team Management</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 border rounded-lg">
                <Star className="h-5 w-5 text-orange-600" />
                <span className="font-medium">Professional Networking</span>
              </div>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
            You&apos;ll have the opportunity to work closely with the ICPC community, connect with students from across the country, and build a profile that stands out on your resume, LinkedIn, and future applications.
          </p>
          <p className="text-base sm:text-lg font-semibold text-blue-800">
            The impact you create today can open doors tomorrow.
          </p>
        </section>

        {/* Rewards Levels */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-purple-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Your Journey of Rewards</h2>
          </div>
          <p className="text-base sm:text-lg mb-8 leading-relaxed text-justify">
            We believe in celebrating every milestone. As you inspire more teams, you&apos;ll unlock an incredible ladder of
            rewards, with each level including all perks from the previous ones.
          </p>

          {/* Simplified card grid with reduced animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2">Starter Ambassador</h3>
              <div className="text-3xl font-bold mb-1">5</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Official ICPC Ambassador Certificate</span>
                  </div>
                   <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">ICPC T-Shirt & Merchandise Kit</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2 text-yellow-700">Bronze Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-yellow-600">10</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="space-y-2">
                   <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Everything in Starter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Website Recognition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Ambassador Leaderboard Listing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-blue-300 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2 text-gray-500">Silver Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-gray-600">15</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="space-y-2">
                   <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Everything in Bronze</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-green-700">Cash Prize: ₹2,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-yellow-400 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2 text-yellow-600">Gold Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-yellow-500">25</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Everything in Silver</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-green-700">Cash Prize: ₹3,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-lg p-5 sm:p-6 hover:border-gray-400 transition-colors duration-200">
              <h3 className="text-lg font-bold mb-2 text-gray-800">Platinum Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-gray-700">50</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Everything in Gold</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-green-700">Cash Prize: ₹5,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-indigo-200 rounded-lg p-5 sm:p-6 hover:border-indigo-400 transition-colors duration-200 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-indigo-800">Elite Ambassador</h3>
              <div className="text-3xl font-bold mb-1 text-indigo-700">100</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Everything in Platinum</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Special Recognition at ICPC Amritapuri</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-sm">Premium Reward</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-sm font-semibold text-green-700">Cash Prize: ₹15,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-fuchsia-50 border-2 border-purple-300 rounded-lg p-5 sm:p-6 hover:border-purple-400 transition-colors duration-200 relative overflow-hidden sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <div className="absolute top-2 right-2">
                <Crown className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">Legend Ambassador</h3>
              <div className="text-4xl font-bold mb-1 text-purple-800">200</div>
              <div className="text-gray-600 mb-4">Teams</div>
              <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything in Elite</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Special Award Ceremony Recognition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Exclusive Premium Reward</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-green-700">Cash Prize: ₹25,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-600 flex items-start gap-3">
            <MessageCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Note:</strong> Cash prizes are milestone-specific and do not accumulate. However, all non-cash rewards, recognition, merchandise, and benefits from previous tiers carry forward as you progress through the program.
            </p>
          </div>
        </section>
        
        {/* Application Process */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to Begin? Apply in 3 Simple Steps.</h2>
          </div>
          <p className="text-base sm:text-lg mb-8 text-justify">
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
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSey2XIxzRWhb1Z4x2DihPOs3GZycbvVUT1S5m22JQQNhsSXyA/viewform?usp=send_form" 
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
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">Who can apply to become an ambassador?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Any student currently enrolled in a recognized institution can apply.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">Do I need prior ICPC experience?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                No. Passion, leadership, and willingness to help your community are more important than prior experience.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">Is there any application fee?</h3>
              <p className="text-sm sm:text-base text-gray-700">
                No. Applying to become an ambassador is completely free.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                How many ambassadors can a college have?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Each institution can have a maximum of three official ambassadors.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                How are ambassadors selected?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Applications are reviewed based on leadership potential, community involvement, outreach capability, and enthusiasm for promoting competitive programming.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                What rewards can I earn?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Ambassadors can unlock certificates, merchandise, exclusive recognition, premium rewards, and benefits from the ambassador rewards ladder with a total reward pool worth up to ₹10,00,000.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                Can first-year students apply?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Absolutely. Students from all years are encouraged to apply.
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-lg hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-bold mb-2 text-base sm:text-lg">
                What happens after I apply?
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our team will review your application and contact shortlisted candidates with the next steps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
