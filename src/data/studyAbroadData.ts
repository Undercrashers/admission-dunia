// Types for Study Abroad Medical Universities
export interface University {
  id: string;
  name: string;
  location: string;
  totalFees: {
    amount: number;
    currency: string;
    duration: string;
  };
  yearlyBreakdown?: {
    firstYear: number;
    subsequentYears: number;
    hostel?: number;
  };
  recognition: string[];
  highlights: string[];
  image: string;
  gpa?: number;
  additionalCosts?: {
    seatBooking?: number;
    admission?: number;
    hostel?: string;
    food?: string;
  };
}

export interface CountryData {
  name: string;
  flag: string;
  description: string;
  universities: University[];
  currency: string;
  courseDuration: string;
  mediumOfInstruction: string;
}

// Study Abroad Medical Universities Data
export const STUDY_ABROAD_DATA: Record<string, CountryData> = {
  russia: {
    name: "Russia",
    flag: "🇷🇺",
    description: "Russia offers affordable and globally recognized MBBS programs taught in English, attracting thousands of international students every year.",
    currency: "INR",
    courseDuration: "6 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "russia-kazan-federal",
        name: "Kazan Federal University",
        location: "Kazan",
        totalFees: { amount: 3750000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO", "FAIMER"],
        highlights: ["Top-ranked in Russia", "Government university", "Modern campus"],
        image: "/study-abroad/colleges/russia-kazan-federal.jpg"
      },
      {
        id: "russia-crimea-federal",
        name: "Crimea Federal University",
        location: "Simferopol",
        totalFees: { amount: 2800000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Popular among Indian students", "Affordable tuition"],
        image: "/study-abroad/colleges/russia-crimea-federal.jpg"
      },
      {
        id: "russia-bashkir",
        name: "Bashkir State Medical University",
        location: "Ufa",
        totalFees: { amount: 3200000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Government-funded", "English medium"],
        image: "/study-abroad/colleges/russia-bashkir.jpg"
      },
      {
        id: "russia-orel",
        name: "Orel State Medical University",
        location: "Orel",
        totalFees: { amount: 3000000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Recognized by NMC", "Safe environment"],
        image: "/study-abroad/colleges/russia-orel.jpg"
      },
      {
        id: "russia-ulyanovsk",
        name: "Ulyanovsk State University",
        location: "Ulyanovsk",
        totalFees: { amount: 3100000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["English-taught programs", "Affordable education"],
        image: "/study-abroad/colleges/russia-ulyanovsk.jpg"
      },
      {
        id: "russia-kuban",
        name: "Kuban State Medical University",
        location: "Krasnodar",
        totalFees: { amount: 3350000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC", "WFME"],
        highlights: ["High FMGE pass rate", "Urban campus"],
        image: "/study-abroad/colleges/russia-kuban.jpg"
      },
      {
        id: "russia-volgograd",
        name: "Volgograd State Medical University",
        location: "Volgograd",
        totalFees: { amount: 3400000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC", "UNESCO"],
        highlights: ["Top-ranked", "Strong research focus"],
        image: "/study-abroad/colleges/russia-volgograd.jpg"
      },
      {
        id: "russia-people-friendship",
        name: "Peoples' Friendship University of Russia (RUDN)",
        location: "Moscow",
        totalFees: { amount: 4200000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Globally diverse student base", "Located in capital city"],
        image: "/study-abroad/colleges/russia-rudn.jpg"
      },
      {
        id: "russia-north-ossetian",
        name: "North Ossetian State Medical Academy",
        location: "Vladikavkaz",
        totalFees: { amount: 2950000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Low cost", "Good clinical exposure"],
        image: "/study-abroad/colleges/russia-north-ossetian.jpg"
      },
      {
        id: "russia-kursk",
        name: "Kursk State Medical University",
        location: "Kursk",
        totalFees: { amount: 3600000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO", "FAIMER"],
        highlights: ["First English-medium MBBS in Russia", "High student satisfaction"],
        image: "/study-abroad/colleges/russia-kursk.jpg"
      },
      {
        id: "russia-siberian",
        name: "Siberian State Medical University",
        location: "Tomsk",
        totalFees: { amount: 3500000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Top-ranked in Siberia", "Strong research programs"],
        image: "/study-abroad/colleges/russia-siberian.jpg"
      },
      {
        id: "russia-first-pavlov",
        name: "First Pavlov State Medical University of St. Petersburg",
        location: "St. Petersburg",
        totalFees: { amount: 4100000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Prestigious institution", "Modern infrastructure"],
        image: "/study-abroad/colleges/russia-pavlov.jpg"
      },
      {
        id: "russia-sechenov",
        name: "I.M. Sechenov First Moscow State Medical University",
        location: "Moscow",
        totalFees: { amount: 4500000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC", "UNESCO"],
        highlights: ["Oldest medical university in Russia", "Top-tier facilities"],
        image: "/study-abroad/colleges/russia-sechenov.jpg"
      },
      {
        id: "russia-ryazan",
        name: "Ryazan State Medical University",
        location: "Ryazan",
        totalFees: { amount: 3200000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Affordable cost", "Government college"],
        image: "/study-abroad/colleges/russia-ryazan.jpg"
      },
      {
        id: "russia-kemerovo",
        name: "Kemerovo State Medical University",
        location: "Kemerovo",
        totalFees: { amount: 3000000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Affordable", "Safe city for students"],
        image: "/study-abroad/colleges/russia-kemerovo.jpg"
      },
      {
        id: "russia-samara",
        name: "Samara State Medical University",
        location: "Samara",
        totalFees: { amount: 3350000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Strong clinical exposure", "Government university"],
        image: "/study-abroad/colleges/russia-samara.jpg"
      },
      {
        id: "russia-petrozavodsk",
        name: "Petrozavodsk State University",
        location: "Petrozavodsk",
        totalFees: { amount: 3100000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Government college", "Moderate climate"],
        image: "/study-abroad/colleges/russia-petrozavodsk.jpg"
      },
      {
        id: "russia-tver",
        name: "Tver State Medical University",
        location: "Tver",
        totalFees: { amount: 3400000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Popular among Indian students", "English instruction"],
        image: "/study-abroad/colleges/russia-tver.jpg"
      },
      {
        id: "russia-kazan-state",
        name: "Kazan State Medical University",
        location: "Kazan",
        totalFees: { amount: 3800000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Renowned medical program", "Established in 1814"],
        image: "/study-abroad/colleges/russia-kazan-state.jpg"
      },
      {
        id: "russia-northern",
        name: "Northern State Medical University",
        location: "Arkhangelsk",
        totalFees: { amount: 3150000, currency: "INR", duration: "6 years" },
        recognition: ["WHO", "NMC"],
        highlights: ["Good teacher-student ratio", "Affordable tuition"],
        image: "/study-abroad/colleges/russia-northern.jpg"
      }
    ]
  },

  vietnam: {
    name: "Vietnam",
    flag: "🇻🇳",
    description: "Vietnam is a rapidly growing medical education hub in Asia with modern facilities and English medium programs at competitive fees.",
    currency: "USD",
    courseDuration: "6 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "buon-ma-thuot",
        name: "Buon Ma Thuot Medical University",
        location: "Buon Ma Thuot, Vietnam",
        totalFees: { amount: 31800, currency: "USD", duration: "6 years" },
        yearlyBreakdown: { firstYear: 5300, subsequentYears: 4500, hostel: 800 },
        recognition: ["WHO", "Ministry of Education Vietnam"],
        highlights: ["English Medium", "Affordable Fees", "Modern Campus"],
        image: "/study-abroad/colleges/vietnam-buon.jpg"
      },
      {
        id: "hong-bang",
        name: "Hong Bang International Medical University",
        location: "Ho Chi Minh City, Vietnam",
        totalFees: { amount: 37800, currency: "USD", duration: "6 years" },
        yearlyBreakdown: { firstYear: 6300, subsequentYears: 5500, hostel: 800 },
        recognition: ["WHO", "Ministry of Education Vietnam", "International Accreditation"],
        highlights: ["International Standards", "Metro City Location", "Research Facilities"],
        image: "/study-abroad/colleges/vietnam-hongbang.jpg"
      },
      {
        id: "duy-tan",
        name: "Duy Tan Medical University",
        location: "Da Nang, Vietnam",
        totalFees: { amount: 39000, currency: "USD", duration: "6 years" },
        yearlyBreakdown: { firstYear: 6500, subsequentYears: 5700, hostel: 800 },
        recognition: ["WHO", "Ministry of Education Vietnam"],
        highlights: ["Coastal City", "Modern Infrastructure", "International Faculty"],
        image: "/study-abroad/colleges/vietnam-duytan.jpg"
      },
      {
        id: "can-tho",
        name: "Can Tho Medical University",
        location: "Can Tho, Vietnam",
        totalFees: { amount: 34200, currency: "USD", duration: "6 years" },
        yearlyBreakdown: { firstYear: 5700, subsequentYears: 4800, hostel: 900 },
        recognition: ["WHO", "Ministry of Education Vietnam"],
        highlights: ["Mekong Delta Region", "Clinical Training", "Research Opportunities"],
        image: "/study-abroad/colleges/vietnam-cantho.jpg"
      }
    ]
  },

  bangladesh: {
    name: "Bangladesh",
    flag: "🇧🇩",
    description: "Bangladesh provides affordable medical education with English medium instruction, cultural familiarity, and excellent clinical training opportunities.",
    currency: "USD",
    courseDuration: "5 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "bangladesh-medical",
        name: "Bangladesh Medical College",
        location: "Dhaka, Bangladesh",
        totalFees: { amount: 49000, currency: "USD", duration: "5 years" },
        additionalCosts: { 
          seatBooking: 10000, 
          admission: 15000, 
          hostel: "100$/month", 
          food: "50$/month" 
        },
        recognition: ["WHO", "Bangladesh Medical Council", "MCI/NMC"],
        highlights: ["Top Medical College", "Excellent Faculty", "Prime Location"],
        image: "/study-abroad/colleges/bangladesh-bmc.jpg",
        gpa: 10
      },
      {
        id: "dhaka-national",
        name: "Dhaka National Medical College",
        location: "Dhaka, Bangladesh",
        totalFees: { amount: 50000, currency: "USD", duration: "5 years" },
        additionalCosts: { 
          seatBooking: 10000, 
          admission: 10000, 
          hostel: "100$/month" 
        },
        recognition: ["WHO", "Bangladesh Medical Council"],
        highlights: ["National Recognition", "Modern Facilities", "Research Focus"],
        image: "/study-abroad/colleges/bangladesh-dnmc.jpg",
        gpa: 9
      },
      {
        id: "jahurul-islam",
        name: "Jahurul Islam Medical College",
        location: "Kishoreganj, Bangladesh",
        totalFees: { amount: 46000, currency: "USD", duration: "5 years" },
        additionalCosts: { 
          seatBooking: 8000, 
          admission: 14000, 
          hostel: "Included" 
        },
        recognition: ["WHO", "Bangladesh Medical Council"],
        highlights: ["Established College", "Hostel Included", "Good Infrastructure"],
        image: "/study-abroad/colleges/bangladesh-jimc.jpg",
        gpa: 8
      },
      {
        id: "women-medical",
        name: "Medical College for Women & Hospital",
        location: "Dhaka, Bangladesh",
        totalFees: { amount: 47000, currency: "USD", duration: "5 years" },
        additionalCosts: { 
          seatBooking: 5000, 
          admission: 10000, 
          hostel: "AC: 150$/month, Non-AC: 50$/month" 
        },
        recognition: ["WHO", "Bangladesh Medical Council"],
        highlights: ["Women's College", "Specialized Care", "Modern Facilities"],
        image: "/study-abroad/colleges/bangladesh-mcw.jpg",
        gpa: 8
      },
      {
        id: "community-based",
        name: "Community Based Medical College",
        location: "Mymensingh, Bangladesh",
        totalFees: { amount: 45000, currency: "USD", duration: "5 years" },
        additionalCosts: { 
          seatBooking: 5000, 
          admission: 9000, 
          hostel: "Included (50$/month)" 
        },
        recognition: ["WHO", "Bangladesh Medical Council"],
        highlights: ["Community Focus", "Affordable Fees", "Rural Healthcare"],
        image: "/study-abroad/colleges/bangladesh-cbmc.jpg",
        gpa: 7
      }
    ]
  },

  uzbekistan: {
    name: "Uzbekistan",
    flag: "🇺🇿",
    description: "Uzbekistan has WHO recognized medical universities with modern facilities, affordable education, and strong international recognition.",
    currency: "INR",
    courseDuration: "6 years", 
    mediumOfInstruction: "English",
    universities: [
      {
        id: "uzbekistan-tashkent-medical-academy",
        name: "Tashkent Medical Academy",
        location: "Tashkent",
        totalFees: { amount: 2820000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Capital city location", "Affordable fees", "English medium"],
        image: "/images/uzbekistan/tashkent-medical-academy.jpg"
      },
      {
        id: "uzbekistan-samarkand-state",
        name: "Samarkand State Medical University",
        location: "Samarkand",
        totalFees: { amount: 2700000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["UNESCO heritage city", "Modern facilities", "Quality education"],
        image: "/images/uzbekistan/samarkand-state-medical-university.jpg"
      },
      {
        id: "uzbekistan-bukhara-state",
        name: "Bukhara State Medical Institute",
        location: "Bukhara",
        totalFees: { amount: 2580000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Historic city", "Low cost of living", "Government institute"],
        image: "/images/uzbekistan/bukhara-state-medical-institute.jpg"
      },
      {
        id: "uzbekistan-andijan-state",
        name: "Andijan State Medical Institute",
        location: "Andijan",
        totalFees: { amount: 2700000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Affordable fees", "Safe environment", "Quality faculty"],
        image: "/images/uzbekistan/andijan-state-medical-institute.jpg"
      },
      {
        id: "uzbekistan-fergana-medical",
        name: "Fergana Medical Institute of Public Health",
        location: "Fergana",
        totalFees: { amount: 2520000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Public health focus", "Most affordable", "Modern campus"],
        image: "/images/uzbekistan/fergana-medical-institute.jpg"
      },
      {
        id: "uzbekistan-tashkent-dental",
        name: "Tashkent State Dental Institute",
        location: "Tashkent",
        totalFees: { amount: 2760000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Dental specialization", "Capital city", "English medium"],
        image: "/images/uzbekistan/tashkent-dental-institute.jpg"
      },
      {
        id: "uzbekistan-urgench-state",
        name: "Urgench State University (Faculty of Medicine)",
        location: "Urgench",
        totalFees: { amount: 2460000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["University setting", "Lowest fees", "Quality education"],
        image: "/images/uzbekistan/urgench-state-university.jpg"
      },
      {
        id: "uzbekistan-namangan-state",
        name: "Namangan State University (Medical Faculty)",
        location: "Namangan",
        totalFees: { amount: 2460000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["University faculty", "Affordable fees", "Safe city"],
        image: "/images/uzbekistan/namangan-state-university.jpg"
      },
      {
        id: "uzbekistan-silk-road-international",
        name: "Silk Road International University of Tourism and Cultural Heritage (Medical Faculty)",
        location: "Samarkand",
        totalFees: { amount: 2940000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["International university", "UNESCO city", "Cultural heritage"],
        image: "/images/uzbekistan/silk-road-international.jpg"
      },
      {
        id: "uzbekistan-akfa-university",
        name: "Akfa University School of Medicine",
        location: "Tashkent",
        totalFees: { amount: 3360000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Premium education", "Modern facilities", "International standards"],
        image: "/images/uzbekistan/akfa-university.jpg"
      }
    ]
  },

  kazakhstan: {
    name: "Kazakhstan",
    flag: "🇰🇿",
    description: "Kazakhstan offers modern medical education facilities with international curriculum, global recognition, and affordable fees.",
    currency: "INR",
    courseDuration: "6 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "kazakhstan-kazakh-national",
        name: "Kazakh National Medical University",
        location: "Almaty",
        totalFees: { amount: 3180000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Premier medical university", "Capital city location", "Research excellence"],
        image: "/images/kazakhstan/kazakh-national-medical-university.jpg"
      },
      {
        id: "kazakhstan-astana-medical",
        name: "Astana Medical University",
        location: "Nur-Sultan (Astana)",
        totalFees: { amount: 3060000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Capital city", "Modern facilities", "International programs"],
        image: "/images/kazakhstan/astana-medical-university.jpg"
      },
      {
        id: "kazakhstan-semey-state",
        name: "Semey State Medical University",
        location: "Semey",
        totalFees: { amount: 2940000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Affordable fees", "Quality education", "Historic university"],
        image: "/images/kazakhstan/semey-state-medical-university.jpg"
      },
      {
        id: "kazakhstan-west-marat-ospanov",
        name: "West Kazakhstan Marat Ospanov State Medical University",
        location: "Aktobe",
        totalFees: { amount: 2820000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Regional excellence", "English medium", "Affordable fees"],
        image: "/images/kazakhstan/west-kazakhstan-marat-ospanov.jpg"
      },
      {
        id: "kazakhstan-karaganda-state",
        name: "Karaganda State Medical University",
        location: "Karaganda",
        totalFees: { amount: 2940000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Government university", "Modern campus", "Clinical excellence"],
        image: "/images/kazakhstan/karaganda-state-medical-university.jpg"
      },
      {
        id: "kazakhstan-south-medical-academy",
        name: "South Kazakhstan Medical Academy",
        location: "Shymkent",
        totalFees: { amount: 2940000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Low cost of living", "Quality education", "Safe environment"],
        image: "/images/kazakhstan/south-kazakhstan-medical-academy.jpg"
      },
      {
        id: "kazakhstan-north-state-university",
        name: "North Kazakhstan State University",
        location: "Petropavl",
        totalFees: { amount: 2700000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["University faculty", "Affordable tuition", "Northern region"],
        image: "/images/kazakhstan/north-kazakhstan-state-university.jpg"
      },
      {
        id: "kazakhstan-kokshetau-state",
        name: "Kokshetau State University",
        location: "Kokshetau",
        totalFees: { amount: 2640000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Most affordable", "Safe city", "Quality faculty"],
        image: "/images/kazakhstan/kokshetau-state-university.jpg"
      },
      {
        id: "kazakhstan-caspian-international",
        name: "Caspian International School of Medicine",
        location: "Almaty",
        totalFees: { amount: 3120000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["International curriculum", "Modern facilities", "Metro city"],
        image: "/images/kazakhstan/caspian-international-school.jpg"
      },
      {
        id: "kazakhstan-al-farabi",
        name: "Al-Farabi Kazakh National University (Medical Faculty)",
        location: "Almaty",
        totalFees: { amount: 3300000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["National university", "Research focus", "Premier institution"],
        image: "/images/kazakhstan/al-farabi-kazakh-national.jpg"
      }
    ]
  },

  philippines: {
    name: "Philippines",
    flag: "🇵🇭",
    description: "The Philippines offers high-quality medical education in English with American-style curriculum, modern facilities, and strong clinical training programs.",
    currency: "INR",
    courseDuration: "6 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "philippines-santo-tomas",
        name: "University of Santo Tomas Faculty of Medicine and Surgery",
        location: "Manila",
        totalFees: { amount: 3600000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO", "FAIMER"],
        highlights: ["Oldest university in Asia", "Top-tier education", "FAIMER accredited"],
        image: "/images/philippines/university-of-santo-tomas.jpg"
      },
      {
        id: "philippines-up-college-medicine",
        name: "University of the Philippines College of Medicine",
        location: "Manila",
        totalFees: { amount: 3450000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Premier state university", "Research excellence", "Highly competitive"],
        image: "/images/philippines/university-of-the-philippines.jpg"
      },
      {
        id: "philippines-davao-medical",
        name: "Davao Medical School Foundation",
        location: "Davao City",
        totalFees: { amount: 3270000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO", "FAIMER"],
        highlights: ["Modern facilities", "Clinical excellence", "FAIMER accredited"],
        image: "/images/philippines/davao-medical-school.jpg"
      },
      {
        id: "philippines-ama-school",
        name: "AMA School of Medicine",
        location: "Manila",
        totalFees: { amount: 3060000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Affordable fees", "Technology-focused", "Capital city"],
        image: "/images/philippines/ama-school-of-medicine.jpg"
      },
      {
        id: "philippines-cebu-doctors",
        name: "Cebu Doctors University College of Medicine",
        location: "Cebu City",
        totalFees: { amount: 3180000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Established medical school", "Modern campus", "Cebu location"],
        image: "/images/philippines/cebu-doctors-university.jpg"
      },
      {
        id: "philippines-fatima-university",
        name: "Our Lady of Fatima University",
        location: "Valenzuela",
        totalFees: { amount: 3390000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO", "FAIMER"],
        highlights: ["Popular among international students", "FAIMER accredited", "Metro Manila"],
        image: "/images/philippines/our-lady-of-fatima-university.jpg"
      },
      {
        id: "philippines-bicol-christian",
        name: "Bicol Christian College of Medicine",
        location: "Legazpi City",
        totalFees: { amount: 3030000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Affordable fees", "Safe environment", "Christian values"],
        image: "/images/philippines/bicol-christian-college.jpg"
      },
      {
        id: "philippines-northern-philippines",
        name: "University of Northern Philippines",
        location: "Vigan",
        totalFees: { amount: 2940000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Most affordable", "Heritage city location", "Quality education"],
        image: "/images/philippines/university-of-northern-philippines.jpg"
      },
      {
        id: "philippines-southwestern-phinma",
        name: "Southwestern University PHINMA",
        location: "Cebu City",
        totalFees: { amount: 3090000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["PHINMA network", "Modern facilities", "Cebu City"],
        image: "/images/philippines/southwestern-university-phinma.jpg"
      },
      {
        id: "philippines-lyceum-northwestern",
        name: "Lyceum-Northwestern University",
        location: "Dagupan City",
        totalFees: { amount: 3030000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Affordable tuition", "Quality education", "Coastal city"],
        image: "/images/philippines/lyceum-northwestern-university.jpg"
      }
    ]
  },

  georgia: {
    name: "Georgia",
    flag: "🇬🇪",
    description: "Georgia offers European standard medical education with excellent international recognition and modern teaching methodologies.",
    currency: "INR", 
    courseDuration: "6 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "georgia-tbilisi-state",
        name: "Tbilisi State Medical University",
        location: "Tbilisi",
        totalFees: { amount: 3780000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Top-ranked university", "Capital city", "Research excellence"],
        image: "/images/georgia/tbilisi-state-medical-university.jpg"
      },
      {
        id: "georgia-david-tvildiani",
        name: "David Tvildiani Medical University",
        location: "Tbilisi",
        totalFees: { amount: 4080000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Premium education", "Top faculty", "Research focus"],
        image: "/images/georgia/david-tvildiani-medical-university.jpg"
      },
      {
        id: "georgia-seu",
        name: "Georgian National University SEU",
        location: "Tbilisi",
        totalFees: { amount: 3540000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["National university", "Modern campus", "Quality education"],
        image: "/images/georgia/georgian-national-university-seu.jpg"
      },
      {
        id: "georgia-university-of-georgia",
        name: "University of Georgia",
        location: "Tbilisi",
        totalFees: { amount: 3810000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["International recognition", "Modern curriculum", "English medium"],
        image: "/images/georgia/university-of-georgia.jpg"
      },
      {
        id: "georgia-batumi-rustaveli",
        name: "Batumi Shota Rustaveli State University",
        location: "Batumi",
        totalFees: { amount: 3360000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Black Sea Coast", "Government university", "Most affordable"],
        image: "/images/georgia/batumi-shota-rustaveli-state-university.jpg"
      },
      {
        id: "georgia-new-vision",
        name: "New Vision University",
        location: "Tbilisi",
        totalFees: { amount: 3900000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Modern facilities", "International curriculum", "Quality education"],
        image: "/images/georgia/new-vision-university.jpg"
      },
      {
        id: "georgia-european-university",
        name: "European University Georgia",
        location: "Tbilisi",
        totalFees: { amount: 3540000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["European standards", "Modern curriculum", "Quality faculty"],
        image: "/images/georgia/european-university-georgia.jpg"
      },
      {
        id: "georgia-east-european",
        name: "East European University",
        location: "Tbilisi",
        totalFees: { amount: 3600000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["Modern campus", "International students", "Clinical excellence"],
        image: "/images/georgia/east-european-university.jpg"
      },
      {
        id: "georgia-georgian-american",
        name: "Georgian American University",
        location: "Tbilisi",
        totalFees: { amount: 3660000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["American curriculum", "Quality education", "International standards"],
        image: "/images/georgia/georgian-american-university.jpg"
      },
      {
        id: "georgia-ilia-state",
        name: "Ilia State University (Medical Faculty)",
        location: "Tbilisi",
        totalFees: { amount: 3480000, currency: "INR", duration: "6 years" },
        recognition: ["NMC", "WHO"],
        highlights: ["State university", "Research focus", "Modern infrastructure"],
        image: "/images/georgia/ilia-state-university.jpg"
      }
    ]
  },

  nepal: {
    name: "Nepal",
    flag: "🇳🇵",
    description: "Nepal offers quality medical education with cultural proximity to India, affordable tuition fees, and excellent clinical training opportunities.",
    currency: "INR",
    courseDuration: "5.5 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "bp-koirala",
        name: "B.P. Koirala Institute of Health Sciences",
        location: "Dharan, Nepal",
        totalFees: { amount: 4500000, currency: "INR", duration: "5.5 years" },
        recognition: ["NMC", "Nepal Medical Council", "WHO"],
        highlights: ["Government Institute", "Most Affordable", "Research Focus"],
        image: "/study-abroad/colleges/nepal-bp.jpg"
      },
      {
        id: "iom-tu",
        name: "Institute of Medicine (Tribhuvan University)",
        location: "Kathmandu, Nepal",
        totalFees: { amount: 4500000, currency: "INR", duration: "5.5 years" },
        recognition: ["NMC", "Nepal Medical Council", "WHO"],
        highlights: ["Government University", "Established 1972", "Affordable Fees"],
        image: "/study-abroad/colleges/nepal-iom.jpg"
      },
      {
        id: "kist-medical",
        name: "KIST Medical College",
        location: "Lalitpur, Nepal",
        totalFees: { amount: 5000000, currency: "INR", duration: "5.5 years" },
        recognition: ["NMC", "Nepal Medical Council", "Tribhuvan University"],
        highlights: ["Technology Focus", "Modern Infrastructure", "Quality Education"],
        image: "/study-abroad/colleges/nepal-kist.jpg"
      },
      {
        id: "manipal-nepal",
        name: "Manipal College of Medical Sciences",
        location: "Pokhara, Nepal",
        totalFees: { amount: 6000000, currency: "INR", duration: "5.5 years" },
        recognition: ["NMC", "Nepal Medical Council", "Kathmandu University"],
        highlights: ["International Standards", "Scenic Location", "Clinical Excellence"],
        image: "/study-abroad/colleges/nepal-manipal.jpg"
      },
      {
        id: "kathmandu-medical",
        name: "Kathmandu Medical College",
        location: "Kathmandu, Nepal",
        totalFees: { amount: 5500000, currency: "INR", duration: "5.5 years" },
        recognition: ["NMC", "Nepal Medical Council", "Kathmandu University"],
        highlights: ["Capital City", "Established College", "Good Faculty"],
        image: "/study-abroad/colleges/nepal-kmc.jpg"
      },
      {
        id: "devdaha-medical",
        name: "Devdaha Medical College",
        location: "Rupandehi, Nepal",
        totalFees: { amount: 5250000, currency: "INR", duration: "5.5 years" },
        recognition: ["NMC", "Nepal Medical Council", "Kathmandu University"],
        highlights: ["Modern Campus", "Quality Infrastructure", "Clinical Training"],
        image: "/study-abroad/colleges/nepal-devdaha.jpg"
      }
    ]
  },

  kyrgyzstan: {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    description: "Kyrgyzstan offers English medium medical courses with low tuition fees, WHO recognition, and excellent support for international students.",
    currency: "USD",
    courseDuration: "5 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "ksma",
        name: "Kyrgyz State Medical Academy",
        location: "Bishkek, Kyrgyzstan",
        totalFees: { amount: 17500, currency: "USD", duration: "5 years" },
        yearlyBreakdown: { firstYear: 3000, subsequentYears: 3000 },
        recognition: ["WHO", "FAIMER", "Ministry of Education Kyrgyzstan"],
        highlights: ["Government University", "Most Affordable", "English Medium"],
        image: "/study-abroad/colleges/kyrgyzstan-ksma.jpg"
      },
      {
        id: "osh-state",
        name: "Osh State University Medical Faculty",
        location: "Osh, Kyrgyzstan",
        totalFees: { amount: 16000, currency: "USD", duration: "5 years" },
        yearlyBreakdown: { firstYear: 2800, subsequentYears: 2800 },
        recognition: ["WHO", "Ministry of Education Kyrgyzstan"],
        highlights: ["Historic City", "Multicultural Environment", "Low Cost Living"],
        image: "/study-abroad/colleges/kyrgyzstan-osh.jpg"
      },
      {
        id: "ism-kyrgyzstan",
        name: "International School of Medicine",
        location: "Bishkek, Kyrgyzstan",
        totalFees: { amount: 22500, currency: "USD", duration: "5 years" },
        yearlyBreakdown: { firstYear: 4000, subsequentYears: 4000 },
        recognition: ["WHO", "FAIMER"],
        highlights: ["International Faculty", "Modern Curriculum", "Clinical Excellence"],
        image: "/study-abroad/colleges/kyrgyzstan-ism.jpg"
      }
    ]
  },

  armenia: {
    name: "Armenia",
    flag: "🇦🇲", 
    description: "Armenia provides European standard medical education at affordable costs with strong clinical training and international recognition.",
    currency: "USD",
    courseDuration: "6 years",
    mediumOfInstruction: "English",
    universities: [
      {
        id: "ysmu",
        name: "Yerevan State Medical University",
        location: "Yerevan, Armenia",
        totalFees: { amount: 30000, currency: "USD", duration: "6 years" },
        yearlyBreakdown: { firstYear: 4000, subsequentYears: 4000 },
        recognition: ["WHO", "FAIMER", "European Recognition"],
        highlights: ["Established 1920", "European Standards", "Research Excellence"],
        image: "/study-abroad/colleges/armenia-ysmu.jpg"
      },
      {
        id: "aua",
        name: "American University of Armenia",
        location: "Yerevan, Armenia", 
        totalFees: { amount: 28000, currency: "USD", duration: "4 years" },
        yearlyBreakdown: { firstYear: 5000, subsequentYears: 5000 },
        recognition: ["WASC Accredited", "WHO", "American Standards"],
        highlights: ["American Curriculum", "English Medium", "Global Network"],
        image: "/study-abroad/colleges/armenia-aua.jpg"
      },
      {
        id: "haybusak",
        name: "Haybusak University",
        location: "Yerevan, Armenia",
        totalFees: { amount: 27000, currency: "USD", duration: "6 years" },
        yearlyBreakdown: { firstYear: 3500, subsequentYears: 3500 },
        recognition: ["WHO", "Ministry of Education Armenia"],
        highlights: ["Modern Campus", "International Students", "Affordable Fees"],
        image: "/study-abroad/colleges/armenia-haybusak.jpg"
      }
    ]
  }
};

// Helper function to get country data
export function getCountryData(countrySlug: string): CountryData | null {
  return STUDY_ABROAD_DATA[countrySlug] || null;
}

// Helper function to get all countries
export function getAllCountries(): { name: string; slug: string; flag: string }[] {
  return Object.keys(STUDY_ABROAD_DATA).map(slug => ({
    slug,
    name: STUDY_ABROAD_DATA[slug].name,
    flag: STUDY_ABROAD_DATA[slug].flag
  }));
}

// Helper function to format currency
export function formatCurrency(amount: number, currency: string): string {
  if (currency === "INR") {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }
  if (currency === "USD") {
    return `$${amount.toLocaleString()}`;
  }
  return `${amount.toLocaleString()} ${currency}`;
}

// Helper function to get university by ID
export function getUniversityById(countrySlug: string, universityId: string): University | null {
  const countryData = getCountryData(countrySlug);
  if (!countryData) return null;
  
  return countryData.universities.find(uni => uni.id === universityId) || null;
}