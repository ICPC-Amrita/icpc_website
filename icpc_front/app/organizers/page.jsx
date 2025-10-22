"use client"

import { useState, useCallback, useMemo } from "react"
import { Linkedin, Twitter, Github, Mail, User, Filter, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaLinkedin, FaTwitter, FaGithub, FaFemale } from "react-icons/fa"

// Team data with campus field - All categories in all campuses
const TEAM_DATA = [
  {
    title: "Core Organising Team",
    subsections: [
      {
        subtitle: "Regional Contest Director",
        members: [
          {
            id: "rcd-1",
            name: "Vipin Pavithran",
            role: "Regional Contest Director",
            bio: "",
            image: "/organisers/vipin.jpg",
            campus: "amritapuri",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          }
        ]
      },
      {
        subtitle: "Associate Contest Directors",
        members: [
          {
            id: "acd-1",
            name: "Prashant Nair",
            role: "Associate Contest Director | Coimbatore",
            bio: "",
            image: "/organisers/prashant.jpg",
            campus: "coimbatore",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          },
          {
            id: "acd-2",
            name: "Gopalakrishnan E. A.",
            role: "Associate Contest Director | Bangalore",
            bio: "",
            image: "/organisers/gopalakrishnan.jpg",
            campus: "bangalore",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          },
          {
            id: "acd-3",
            name: "Binu P K",
            role: "Associate Contest Director | Amritapuri",
            bio: "",
            image: "/organisers/binu.jpg",
            campus: "amritapuri",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          },
          {
            id: "acd-4",
            name: "Adwitiya Mukhopadhyay",
            role: "Associate Contest Director | Mysuru",
            bio: "",
            image: "/organisers/adwitiya.jpg",
            campus: "mysuru",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          }
        ]
      },
      {
        subtitle: "Leadership Team",
        members: [
          {
            id: "hmo-1",
            name: "Aravind B L",
            role: "Head, Marketing and Operations",
            bio: "",
            image: "/organisers/aravindbl3.png",
            campus: "amritapuri",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          },
           {
            id: "hco-1",
            name: "Arjun T U ",
            role: "Head,  Contest Environment",
            bio: "",
            image: "/organisers/Arjun_TU.jpeg",
            campus: "amritapuri",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          },

          {
            id: "hc-1",
            name: "Rajan Sundaravaradan",
            role: "Head, Problem Setting",
            bio: "",
            image: "/organisers/rajan.jpg",
            campus: "amritapuri",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          },
          {
            id: "rcd-2",
            name: "Ramaguru Radhakrishnan",
            role: "Head, Outreach and Communication",
            bio: "",
            image: "/organisers/ramaguru.jpg",
            campus: "amritapuri",
            socialLinks: {
              linkedin: "",
              email: ""
            }
          }
        ]
      }
    ]
  },
  {
    title: "Campus Leads",
    members: [
      {
        id: "campus-lead-1",
        name: "Aswin J",
        role: "Technical Support Lead | Amritapuri",
        bio: "",
        image: "/organisers/aswinj.jpg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "",
          github: "",
          email: ""
        }
      },
      {
        id: "campus-lead-2",
        name: "Ranjan Kananan",
        role: "Venue & Infrastructure Lead | Amritapuri",
        bio: "",
        image: "/organisers/ranjan.jpg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "",
          twitter: "",
          email: ""
        }
      },
      {
        id: "campus-lead-3",
        name: "Athul R",
        role: "Media & Documentation Lead | Amritapuri",
        bio: "",
        image: "/organisers/athul.png",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "",
          twitter: "",
          email: ""
        }
      },
      {
        id: "campus-lead-4",
        name: "Arun Kumar",
        role: "Outreach & Communication Lead | Amritapuri",
        bio: "",
        image: "/organisers/arun.jpeg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/arun-kumar",
          email: "arun@amrita.edu"
        }
      },
        {
        id: "campus-lead-5",
        name: "Vishnu V Thayyil",
        role: "Hospitality Lead | Amritapuri",
        bio: "",
        image: "/organisers/vishnu.jpg",
        campus: "amritapuri",
        socialLinks: {
          linkedin: "https://linkedin.com/in/arun-kumar",
          email: "arun@amrita.edu"
        }
      }
    ]
  }
]

// Campus filter options
const CAMPUS_OPTIONS = [
  { value: "all", label: "All Campuses" },
  { value: "amritapuri", label: "Amritapuri" },
  { value: "coimbatore", label: "Coimbatore" },
  { value: "bangalore", label: "Bangalore" },
  { value: "mysuru", label: "Mysuru" }
]

// Social icons mapping
const SOCIAL_ICONS = {
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  twitter: { icon: FaTwitter, label: "Twitter" },
  github: { icon: FaGithub, label: "GitHub" },
  email: { icon: Mail, label: "Email" }
}

// Mobile Filter Dropdown Component
const MobileFilterDropdown = ({ selectedCampus, onCampusChange, isOpen, onToggle }) => {
  const selectedOption = CAMPUS_OPTIONS.find(option => option.value === selectedCampus)
  
  return (
    <div className="relative lg:hidden mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-600" />
          <span className="font-medium text-black">{selectedOption?.label}</span>
        </div>
        <ChevronDown 
          size={18} 
          className={`text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10 bg-black bg-opacity-25" 
            onClick={onToggle}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
            {CAMPUS_OPTIONS.map((campus) => (
              <button
                key={campus.value}
                onClick={() => {
                  onCampusChange(campus.value)
                  onToggle()
                }}
                className={`w-full text-left px-4 py-3 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  selectedCampus === campus.value
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="option"
                aria-selected={selectedCampus === campus.value}
              >
                {campus.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Desktop Campus Filter Component
const DesktopCampusFilter = ({ selectedCampus, onCampusChange }) => (
  <aside className="hidden lg:block w-64 flex-shrink-0">
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={20} className="text-gray-600" />
          <h3 className="font-medium text-black">Filter by Campus</h3>
        </div>
        <div className="space-y-2">
          {CAMPUS_OPTIONS.map((campus) => (
            <button
              key={campus.value}
              onClick={() => onCampusChange(campus.value)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedCampus === campus.value
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              {campus.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  </aside>
)

// Member card component with uniform height
const MemberCard = ({ member, isHovered, onHover, animationDelay }) => {
  const [imageError, setImageError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const handleImageError = useCallback(() => setImageError(true), [])
  const handleImageLoad = useCallback(() => setImageError(false), [])

  const handleMouseEnter = useCallback(() => onHover(member.id), [member.id, onHover])
  const handleMouseLeave = useCallback(() => onHover(null), [onHover])
  const handleFocus = useCallback(() => onHover(member.id), [member.id, onHover])
  const handleBlur = useCallback(() => onHover(null), [onHover])

  // Trigger animation after component mounts
  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay)
    return () => clearTimeout(timer)
  }, [animationDelay])

  return (
    <article
      className={`group h-full flex flex-col transition-all duration-500 ease-out rounded-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      aria-labelledby={`member-${member.id}-name`}
      aria-describedby={`member-${member.id}-bio`}
    >
      {/* Fixed height container for the entire card */}
      <div className="flex flex-col h-full">
        {/* Image section - responsive sizing */}
        <div className="relative mb-4 sm:mb-6 overflow-hidden flex-shrink-0">
          <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative">
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <User size={32} className="sm:hidden text-gray-400" />
                <User size={48} className="hidden sm:block text-gray-400" />
              </div>
            ) : (
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-focus:scale-105"
                loading="lazy"
                onError={handleImageError}
                onLoad={handleImageLoad}
                decoding="async"
              />
            )}
            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-10' : 'opacity-0'}`} />
          </div>
        </div>

        {/* Content section - responsive typography */}
        <div className="flex flex-col flex-grow space-y-2 sm:space-y-3">
          {/* Name and role - responsive sizing */}
          <div className="flex-shrink-0">
            <h3 
              id={`member-${member.id}-name`} 
              className="text-lg sm:text-xl font-medium text-black tracking-tight leading-tight"
            >
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 leading-tight">
              {member.role}
            </p>
          </div>

          {/* Bio section - responsive and truncated */}
          <div className="flex-grow flex items-start">
            {member.bio ? (
              <p 
                id={`member-${member.id}-bio`} 
                className="text-xs sm:text-sm text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 line-clamp-2 sm:line-clamp-3"
              >
                {member.bio}
              </p>
            ) : (
              <div className="text-xs sm:text-sm text-gray-500 leading-relaxed opacity-0">
                &nbsp;
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

// SubsectionHeader component
const SubsectionHeader = ({ subtitle, isVisible }) => (
  <div className={`mb-8 sm:mb-12 transition-all duration-500 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  }`}>
    <h3 className="text-xl sm:text-2xl font-medium text-black tracking-tight text-center">
      {subtitle}
    </h3>
    <div className="w-8 sm:w-12 h-px bg-gray-300 mx-auto mt-4 opacity-50" aria-hidden="true" />
  </div>
)

// Team Section Header - responsive typography
const TeamSectionHeader = ({ title, isVisible }) => (
  <header className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}>
    {/* Remove or comment out the Badge below */}
    {/* <Badge variant="outline" className="mb-3 sm:mb-4 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-xs sm:text-sm">
      {title.replace(' Team', '')}
    </Badge> */}
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-black tracking-tight">
      {title}
    </h2>
    <div className="w-12 sm:w-16 h-px bg-black mx-auto mt-6 sm:mt-8 opacity-30" aria-hidden="true" />
  </header>
)

// Main TeamSection Component
export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [selectedCampus, setSelectedCampus] = useState("all")
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  
  const handleMemberHover = useCallback(id => setHoveredMember(id), [])
  const handleCampusChange = useCallback(campus => setSelectedCampus(campus), [])
  const toggleMobileFilter = useCallback(() => setMobileFilterOpen(prev => !prev), [])
  
  // Filter team sections based on selected campus
  const filteredTeamSections = useMemo(() => {
    if (selectedCampus === "all") return TEAM_DATA

    return TEAM_DATA.map(section => {
      if (section.subsections) {
        // Handle sections with subsections
        const filteredSubsections = section.subsections.map(subsection => {
          // Always show Regional Contest Director regardless of campus filter
          if (subsection.subtitle === "Regional Contest Director") {
            return subsection
          }
          // For other subsections, filter by campus
          return {
            ...subsection,
            members: subsection.members.filter(member => member.campus === selectedCampus)
          }
        }).filter(subsection => 
          subsection.subtitle === "Regional Contest Director" || subsection.members.length > 0
        )
        
        return filteredSubsections.length > 0 ? { ...section, subsections: filteredSubsections } : null
      } else {
        // Handle regular sections
        const filteredMembers = section.members.filter(member => member.campus === selectedCampus)
        return filteredMembers.length > 0 ? { ...section, members: filteredMembers } : null
      }
    }).filter(Boolean)
  }, [selectedCampus])

  // Trigger section animations
  useState(() => {
    filteredTeamSections.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSections(prev => new Set(prev).add(index))
      }, index * 200)
    })
  }, [filteredTeamSections])

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white min-h-screen" aria-labelledby="team-section-title">
      <div className="max-w-7xl mx-auto">
        <div className="sr-only">
          <h1 id="team-section-title">Our Team</h1>
        </div>

        {/* Mobile Filter */}
        <MobileFilterDropdown
          selectedCampus={selectedCampus}
          onCampusChange={handleCampusChange}
          isOpen={mobileFilterOpen}
          onToggle={toggleMobileFilter}
        />

        <div className="flex gap-6 lg:gap-8">
          {/* Desktop Filter Sidebar */}
          <DesktopCampusFilter 
            selectedCampus={selectedCampus}
            onCampusChange={handleCampusChange}
          />

          {/* Main Content */}
          <main className="flex-1 w-full min-w-0">
            {filteredTeamSections.map((section, sectionIndex) => (
              <section
                key={`section-${sectionIndex}`}
                className={`${sectionIndex > 0 ? "mt-16 sm:mt-24 lg:mt-32" : ""} transition-all duration-700 ease-out transform ${
                  visibleSections.has(sectionIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                aria-labelledby={`section-${sectionIndex}-title`}
              >
                <TeamSectionHeader 
                  title={section.title} 
                  isVisible={visibleSections.has(sectionIndex)}
                />

                {/* Handle subsections */}
                {section.subsections ? (
                  section.subsections.map((subsection, subsectionIndex) => (
                    <div key={`subsection-${subsectionIndex}`} className={`${subsectionIndex > 0 ? "mt-12 sm:mt-16" : ""}`}>
                      <SubsectionHeader 
                        subtitle={subsection.subtitle}
                        isVisible={visibleSections.has(sectionIndex)}
                      />
                      
                      <div 
                        className={`grid gap-6 sm:gap-8 lg:gap-12 ${
                          subsection.subtitle === "Regional Contest Director" 
                            ? "grid-cols-1 justify-items-center max-w-sm mx-auto" 
                            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        }`}
                        role="list" 
                        aria-label={`${subsection.subtitle} members`}
                      >
                        {subsection.members.map((member, memberIndex) => (
                          <div key={member.id} className="h-full">
                            <MemberCard
                              member={member}
                              isHovered={hoveredMember === member.id}
                              onHover={handleMemberHover}
                              animationDelay={(sectionIndex * 200) + (subsectionIndex * 150) + (memberIndex * 100) + 300}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  /* Handle regular sections without subsections */
                  <div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12" 
                    role="list" 
                    aria-label={`${section.title} members`}
                  >
                    {section.members.map((member, memberIndex) => (
                      <div key={member.id} className="h-full">
                        <MemberCard
                          member={member}
                          isHovered={hoveredMember === member.id}
                          onHover={handleMemberHover}
                          animationDelay={(sectionIndex * 200) + (memberIndex * 100) + 300}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </main>
        </div>
      </div>
    </section>
  )
}
