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
      {
        id: 1,
        title: "Classes V to X",
        link: "https://forms.gle/MkamfVm2axZPRFqT6",
      },
      {
        id: 2,
        title: "Classes XI to XII",
        link: "https://forms.gle/icXaoUbmY2Y4bm4A9",
      },
      {
        id: 3,
        title: "All UG, PG and PhD",
        link: "https://forms.gle/JV9UoaMrXSAbcVo46"
      }
    ],
  },
  { id: 13, time: "4:30 PM", title: "Results & Closing Session" },
  {
    id: 14,
    time: "5:00 PM",
    title: "Working Group Hybrid Meeting / AI at IITH Poster Session",
  },
  { id: 15, time: "6:30 PM", title: "Refreshments & Networking" },
  { id: 16, time: "7:00 PM", title: "Cultural Event", hasToggle: true, isCulturalEvent: true },
  { id: 17, time: "8:30 PM", title: "Dinner" },
];

export const CulturalEventArtists = [
  {
    id: 1,
    name: "Vidushi Smt Dr G. Sarada Subramaniam",
    profileSrc: "/images/sarada-profile.jpeg",
    tagLine: "Carnatic Vocalist",
    details:
      "<p>Vidushi Smt Dr G. Sarada Subramaniam is a Carnatic Vocalist of great accomplishments. She belongs to a family lineage of great musicians and acquired her initial training from her father Kulapathi Sri. I.V.L.Sastry and mother Smt Sita. Later, she honed her skills under Sangeetha Kalanidhi Dr. Nedunuri Krishna Murthy. <br /><br /> Dr. Sarada started performing at the tender age of 5 years. She has MPhil in Carnatic Music, was a recipient of central government senior scholarship for music. She is an ‘A’ grade artist of All India Radio and is currently holding portfolios in several reputed organizations. She is an Expert Committee member in CFPGS of the Ministry of Culture, Government of India, AP state vice-president for music and member of national team for music in Sanksar Bharati, KV advisory committee member, Sangeeta janakulam board member, Sri IVL Sastry Thyagaraja Aradhana Trust chairman, All India Radio audition board member, to name a few. <br /><br /> Smt. Dr. Sarada has many coveted Awards to her credit. She was conferred with Honorary Doctorate (D. Litt. Degree) from ITM University, Raipur, Chhattisgarh for her contribution to Carnatic Music. She received The President’s award in 1987 from the then president of India, Giani Zail Singh, in the national competitions conducted by Sanskara Bharati. She also received awards such as 'Sangeeta Kalanidhi Dr Nedunuri Krishna Murthy Award' by Visakha Music Academy, top prize in All India Radio national competition, and numerous medals. <br /><br />Smt. Dr. Sarada is honored with many titles such as 'Sangeetha bushana' by Sriranjani Sangeetha Sabha, 'Gayatri Sangeetha Vidwan Mani', 'Gandharvaamrutha Varshini', 'Swara Sudha Kala Prapoorna' by Swara Raga Sudha kala academy from New Jersey USA, 'Sangeeta Sudha Nidhi' by Sri Vijaya Tyaga Raja Sangeetha Sabha, and many more. <br /><br />In addition to being a reputed performer, her contributions to the field of propagation of music are remarkable. She has conducted free music classes for beginners and advanced level in Visakhapatnam, Delhi, and Mumbai for over 35 Years through Sangeetha Janakulam which was founded by her father, as well as at various organizations like Sanathana Dharma charitable trust run by Shri Sadhguru Sivanandha Murthy and Nada sudha Tharangini by Sri  Nedunuri Krishna Murthy. She has composed and produced several CD’S and has been part of several CD's produced by TTD, Shri Nedunuri Krishna Murthy, Sadguru Sivanandha Murthy, Bhairavananda Swamy, Sri P.V Ramana , Sri Samavedam Shanmukha Sarma and the likes. <br /><br /> Dr Sarada is known for her melodious and versatile voice. She is famous for her mature and intricately woven Manodharma rendition. She also composed many reputed songs and albums. She has a varied repertoire belonging to several regions and composers. She conducted several music workshops and performed concerts in USA , Mauritius and Singapore. She has also made a mark in being a favored online teacher and has several students around the world learning over Skype. More than 20 of her students are graded in All India Radio. <br /><br />In addition to being an aclaimed Carnatic vocalist, Dr. Sarada Subramaniam is also an acclaimed Bharatanatyam and kuchipudi dancer and gave performances to her credit. She received Nataraja Ramakrishna National Scholarship for music from Sharada Devi Trust.<p>",
  },
  {
    id: 2,
    name: "Vidushi Smt. I Durgapriyadarsini",
    profileSrc: "/images/durgaPriyadarshini-profile.jpeg",
    tagLine: "Carnatic Vocalist",
    details: "<p>Mrs. Durga Priyadarsini hails from a family with rich music tradition. She started learning music at the age of 4 along with her sister Katyayani, initially under the tutelage of their grandfather Sri. IVL Sastry garu & Sri ML Narsimham garu, their parents,  and then continues to learn under the tutelage of their paternal aunt Vidushi Smt. Dr. G Sarada Subramaniam, an eminent carnatic vocalist. Together, they sang as 'Indraganti sisters' for many years and are now also performing individually.<br /><br /><p>Apart from holding an MA degree in HRM, Durga has done her bachelor’s degree in  music & also holds a diploma in Carnatic Music from Telugu University. She is 'A' grade artist in Devotional Music & B'high Artist in Lite Music with All India Radio and her performances were aired from Visakhapatnam and Hyderabad Centres.</p></p>"
  },
  {
    id: 3,
    name: "Sri Ramaraju Dinakar",
    profileSrc: "/images/ramaraju-profile.jpeg",
    tagLine: "Violinist",
    objectPosition: "center top",
    details:
      "<p>Sri Ramaraju Dinakar received his classical violin training from gurus Sri Sagi Venkateswara Rao and Sriman NCH Krishnamacharyulu. He is A top graded artist in All India Radio. <br /><br />Apart from being a solo artist, he has also been accompanying all legends like Padma Vibhushan late Sri M. Bala Murali Krishna, TNS, TVS, MS Sheela, Sangeetha Kalanidhi Sri Nedunuri Krishna Murthy, Hyderabad brothers, Malladi brothers, and so on. Sri R Dinakar travelled across globe and gave various performances. He has also been consistently performing in sangeetha sammelanam every year.</p>",
  },
  {
    id: 4,
    name: "Sri Panduranga Murali",
    profileSrc: "/images/panduranga-profile.jpeg",
    tagLine: "Tabla Artist",
    details:
      "<p>Sri Panduranga Murali have taken his initial tabla training from his father Late Panduranga Anjaiah who have worked as a staff artist of A.I.R Hyderabad. He also learned tabla from eminent artists of Hyderabad like Late Sri Lakshman Rao, Late Sri Sathyanarayanam, and Late Ashiq Hussain Khan. He did his diploma from Sri Potti Sri Ramulu University of Hyderabad, did higher grade TTC (Teacher Training Course) from Gandarav Maha Vidyalaya, and worked as a Tabla Instructor in TSWR Fine Arts School. He has been performing tabla as a B-High grade artist in All India Radio since three decades.<br /><br /><p>He accompanied all the eminent artists of Hyderabad and travelled for several concerts in countries like New Zealand, Australia, Malaysia, Fuji Island, Russia, West Indies, East Africa, Croatia, etc. through Indian council for cultural relations, Government of India.</p></p>",
  },
  {
    id: 5,
    name: "Sri Peravali Jayabhaskar",
    profileSrc: "/images/jayabhaskar-profile.jpeg",
    tagLine: "Mridangam Artist",
    details:
      "<p>Sri Peravali Jaya Bhaskar hails from a music family. He received his mridangam training from Padmasri Dr. Yella Venkateswara Rao, who belongs to the Guru-Shishya Parampara of Mridangam Maestro Sri Palghat Mani Iyyer. He accompanied many eminent artists of the Carnatic music field. He presented many Taala Vadya Kutcheries in National and International music festivals. Sri P Jaya Bhaskar is honored with several titles such as 'Ustad Bismillah Khan Yuva Puraskar' by The Central Sangeetha Nataka Academy, 'Kousthubh Kala Ratna' by the Benaras Hindu University, and 'Laya Kala Vipanchi' from the hands of Padma Vibhushan Late Dr Mangalampalli Balamurali Krishna. He is also a Top grade Staff artiste of the All India Radio , Hyderabad.</p>",
  },
];

export const RegistrationFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-WyXMYpNy66UCXbQM9ACaAbUKLtEjIV3dJujIj_ebcTLpiQ/viewform";
