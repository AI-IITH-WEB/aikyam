export const HeaderConstants = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Event Schedule", href: "#schedule" },
  { id: 4, name: "Speakers", href: "#speakers" },
  { id: 5, name: "Venue", href: "#venue" },
];

export const EventScheduleConstants = [
  { id: 1, time: "9:30 AM", title: "Welcoming Guests" },
  { id: 2, time: "9:35 AM", title: "Lamp Lighting and Inauguration" },
  { id: 3, time: "9:40 AM", title: "Address by the Director, IIT Hyderabad" },
  { id: 4, time: "9:50 AM", title: "Plenary Talk" },
  { id: 5, time: "10:30 AM", title: "Coffee Break & Networking" },
  { id: 6, time: "11:00 AM", title: "Keynote Talk" },
  {
    id: 7,
    time: "11:45 AM",
    title: "Panel Discussion I",
    description: "Promoting Inclusive AI Development",
  },
  {
    id: 8,
    time: "12:30 PM",
    title: "Panel Discussion II",
    description: "Societal Adoption of AI: Opportunities & Challenges",
  },
  { id: 9, time: "1:00 PM", title: "Lunch" },
  {
    id: 10,
    time: "2:00 PM",
    title: "Startup Pitch Event",
    description: "Theme: AI for All",
  },
  { id: 11, time: "3:00 PM", title: "Coffee Break & Networking" },
  {
    id: 12,
    time: "3:30 PM",
    title: "AI and Me",
    description: "Student Perspectives on AI and its Future",
    hasToggle: true,
    image: "/images/ai-and-me-flyer.png",
    detailsTitle:
      "“AI and Me” is a student-centric initiative designed to encourage students to reflect on their interactions with artificial intelligence and its role in their lives. We invite thoughtful written submissions from students that reflect their experiences, expectations, and concerns regarding AI. Students may write about:",
    detailsPoints: [
      "How AI influences their learning habits",
      "What they believe could be the next major breakthrough in AI",
      "Societal benefits and risks associated with AI",
      "Trustworthiness and limitations of AI systems",
      "Challenges faced while using AI tools",
      "The impact of increasing dependence on AI in everyday life",
    ],
    hasSubmissionLinks: true,
    submissionLinks: [
      { id: 1, title: "Classes V to X", link: "https://forms.gle/MkamfVm2axZPRFqT6" },
      { id: 2, title: "Classes XI to XII", link: "https://forms.gle/icXaoUbmY2Y4bm4A9" }
    ]
  },
  { id: 13, time: "4:30 PM", title: "Results & Closing Session" },
  {
    id: 14,
    time: "5:00 PM",
    title: "Working Group Hybrid Meeting / AI at IITH Poster Session",
  },
  { id: 15, time: "6:30 PM", title: "Refreshments & Networking" },
  { id: 16, time: "7:00 PM", title: "Cultural Event" },
  { id: 17, time: "8:30 PM", title: "Dinner" },
];

export const RegistrationFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-WyXMYpNy66UCXbQM9ACaAbUKLtEjIV3dJujIj_ebcTLpiQ/viewform";
