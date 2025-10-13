export type College = {
  name: string;
  photo: string;
  state: string;
  levels: string[];
  programs: string[];
  slug: string;
};

export const ALL_COLLEGES: College[] = [
  {
    name: "BITS PILANI",
    photo: "/college_building/bitsp.jpeg",
    state: "Rajasthan",
    levels: ["UG", "PG"],
    programs: ["Computer Science", "Mechanical Eng.", "Electrical Eng.", "Chemical Eng.", "Economics"],
    slug: "bits-pilani",
  },
  {
    name: "VIT Vellore",
    photo: "https://placehold.co/600x400/10B981/FFFFFF?text=VIT+Vellore",
    state: "Tamil Nadu",
    levels: ["UG", "PG"],
    programs: ["Information Technology", "Biotechnology", "Civil Engineering", "Electronics & Comm.", "Fashion Tech"],
    slug: "vit-vellore",
  },
  {
    name: "Manipal Institute of Technology",
    photo: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=MIT+Manipal",
    state: "Karnataka",
    levels: ["UG"],
    programs: ["Computer Science", "Data Science & Eng.", "Automobile Eng.", "Aeronautical Eng."],
    slug: "manipal-institute-of-technology",
  },
  {
    name: "Kalinga Institute of Technology (KIIT)",
    photo: "https://placehold.co/600x400/F59E0B/FFFFFF?text=KIIT",
    state: "Odisha",
    levels: ["UG", "PG"],
    programs: ["Computer Science", "Electronics & Telecomm.", "MBA", "B.Tech"],
    slug: "kiit",
  },
  {
    name: "NMIMS Mumbai",
    photo: "https://placehold.co/600x400/EF4444/FFFFFF?text=NMIMS",
    state: "Maharashtra",
    levels: ["UG", "PG"],
    programs: ["BBA", "MBA", "B.Com (Hons)", "B.Sc. Finance"],
    slug: "nmims-mumbai",
  },
  {
    name: "Ramaiah Institute of Technology",
    photo: "https://placehold.co/600x400/6366F1/FFFFFF?text=MSRIT",
    state: "Karnataka",
    levels: ["UG", "PG"],
    programs: ["Computer Science", "Information Science", "Artificial Intelligence", "Medical Electronics"],
    slug: "ramaiah-institute-of-technology",
  },
  {
    name: "Dr. D.Y. Patil Institute of Technology",
    photo: "https://placehold.co/600x400/EC4899/FFFFFF?text=DY+Patil",
    state: "Maharashtra",
    levels: ["UG"],
    programs: ["Computer Engineering", "Civil Engineering", "Instrumentation Eng.", "Production Eng."],
    slug: "dy-patil",
  },
  {
    name: "Banasthali Vidyapith",
    photo: "https://placehold.co/600x400/22C55E/FFFFFF?text=Banasthali",
    state: "Rajasthan",
    levels: ["UG", "PG"],
    programs: ["Computer Science", "Biotechnology", "B.Com", "B.A."],
    slug: "banasthali-vidyapith",
  },
];
