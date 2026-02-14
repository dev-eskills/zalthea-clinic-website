export const slides = [
  {
    title: "Advanced Cardiac & Vascular Surgery",
    doctor: "Dr. Sami Anwar Khan",
    credentials: "MBBS, MS, MCh, CTVS (Gold Medalist)",
    desc: "Precision surgical care for heart and vascular health at Mohak Super Speciality.",
    image: "/Cardiologist_hero.png", // Main large image
    gallery: [
      "/public/Cardiologist_hero.png", // Large
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80", // Small
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80", // Medium
    ],
    link: "/cardiology",
  },
  {
    title: "Specialized ENT & Head-Neck Surgery",
    doctor: "Dr. Sabiya Khan Suri",
    credentials: "MBBS, DLO (Gold Medalist)",
    desc: "Expert clinical solutions for complex hearing, sinus, and throat disorders.",
    image: "/ent_background_flipped.png",
    gallery: [
      "/public/ent_background_flipped.png",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80",
    ],
    link: "/ent",
  },
];

// export const slides = [
//     {
//         title: "Advanced Cardiac & Vascular Surgery",
//         doctor: "Dr. Sami Anwar Khan",
//         credentials: "MBBS, MS, MCh, CTVS (Gold Medalist)",
//         desc: "Precision surgical care for heart and vascular health at Mohak Super Speciality.",
//         image: "/public/Cardiologist_hero.png",
//         link: "/cardiology",
//     },
//     {
//         title: "Specialized ENT & Head-Neck Surgery",
//         doctor: "Dr. Sabiya Khan Suri",
//         credentials: "MBBS, DLO (Gold Medalist)",
//         desc: "Expert clinical solutions for complex hearing, sinus, and throat disorders.",
//         image: "/public/ent_background_flipped.png",
//         link: "/ent",
//     }
// ];

// export const treatments = [
//   {
//     name: "Heart Valve Repair",
//     cat: "Advanced Cardiology",
//     iconName: "HeartPulse",
//     details:
//       "Specialized reconstructive surgery for mitral and aortic valves. We prioritize tissue-sparing techniques over replacement to maintain natural heart geometry and long-term durability.",
//     link: "/cardiology",
//   },
//   {
//     name: "Micro EAR Surgery",
//     cat: "Otology & Audiology",
//     iconName: "Ear",
//     details:
//       "Ultra-precision microscopic intervention for chronic ear pathologies. Focused on the restoration of the ossicular chain to recover hearing function and resolve persistent infections.",
//     link: "/ent",
//   },
//   {
//     name: "Vascular & Aortic Care",
//     cat: "Vascular Surgery",
//     iconName: "Activity",
//     details:
//       "Comprehensive management of peripheral arterial diseases and aortic aneurysms using a hybrid of traditional and endovascular (EVAR) protocols for targeted recovery.",
//     link: "/cardiology",
//   },
//   {
//     name: "Endoscopic Sinus Surgery",
//     cat: "Advanced Rhinology",
//     iconName: "Wind",
//     details:
//       "Functional Endoscopic Sinus Surgery (FESS) utilizing high-definition imaging to clear obstructive sinus pathways and nasal polyps with minimal post-operative downtime.",
//     link: "/ent",
//   },
//   {
//     name: "CABG (Bypass Surgery)",
//     cat: "Cardiac Surgery",
//     iconName: "Hospital",
//     details:
//       "Gold-standard coronary revascularization (Beating Heart Surgery). Our protocols focus on total arterial grafting to ensure maximum graft longevity and reduced risk of stroke.",
//     link: "/cardiology",
//   },
//   {
//     name: "Cardio–Thoracic & Vascular Surgery",
//     cat: "Comprehensive Heart, Lung & Vascular Care",
//     iconName: "HeartPulse",
//     details:
//       "Advanced care for heart, lung, and vascular conditions using minimally invasive techniques to deliver safer procedures, faster recovery, and better long-term outcomes.",
//     link: "cardiology",
//   },
// ];

export const treatments = [
  {
    name: "CABG (Coronary Artery Bypass Surgery)",
    cat: "Cardiac Surgery",
    iconName: "HeartPulse",
    details:
      "Advanced coronary artery bypass surgery including beating-heart techniques, focused on restoring optimal blood flow and improving long-term cardiac health.",
    link: "/cardiology",
  },
  {
    name: "Heart Valve Repair & Replacement",
    cat: "Advanced Cardiology",
    iconName: "Heart",
    details:
      "Comprehensive surgical management of mitral and aortic valve diseases using tissue-preserving repair techniques and modern prosthetic replacements.",
    link: "/cardiology",
  },
  {
    name: "Minimally Invasive Cardiac Surgery",
    cat: "Cardio-Thoracic Care",
    iconName: "ActivitySquare",
    details:
      "Small-incision heart procedures designed to reduce surgical trauma, minimize hospital stay, and accelerate patient recovery.",
    link: "/cardiology",
  },
  {
    name: "Vascular & Aneurysm Surgery",
    cat: "Vascular Surgery",
    iconName: "Activity",
    details:
      "Advanced treatment for peripheral arterial disease (PAD), carotid artery disease, AV fistula creation, and aortic aneurysms using open and endovascular techniques.",
    link: "/cardiology",
  },
  {
    name: "Thoracoscopic (VATS) Lung Surgery",
    cat: "Thoracic Surgery",
    iconName: "Cpu",
    details:
      "Video-Assisted Thoracoscopic Surgery for lung infections, tumors, and chest trauma with minimal incisions and faster recovery.",
    link: "/cardiology",
  },
  {
    name: "Microscopic Ear Surgery",
    cat: "Otology",
    iconName: "Ear",
    details:
      "Precision ear surgery including tympanoplasty and mastoid procedures to restore hearing and treat chronic ear infections.",
    link: "/ent",
  },
  {
    name: "Endoscopic Sinus Surgery (FESS)",
    cat: "Rhinology",
    iconName: "Wind",
    details:
      "Minimally invasive sinus surgery for chronic sinusitis, nasal polyps, and deviated septum using high-definition endoscopic techniques.",
    link: "/ent",
  },
  {
    name: "Thyroid & Head–Neck Surgery",
    cat: "Head & Neck",
    iconName: "UserCheck",
    details:
      "Expert surgical care for thyroid disorders, salivary gland conditions, head & neck tumors, and neck swellings with nerve-preserving precision.",
    link: "/ent",
  },
  {
    name: "Sleep Apnea & Airway Surgery",
    cat: "Sleep & Airway",
    iconName: "Moon",
    details:
      "Comprehensive evaluation and surgical management of snoring, obstructive sleep apnea, and airway obstruction for improved breathing and sleep quality.",
    link: "/ent",
  },
];

export const stats = [
  {
    value: "6,000+",
    label: "Lives Transformed",
    desc: "Advanced cardiac, vascular, and thoracic procedures performed with precision across our specialized centers, restoring health and enhancing quality of life.",
    img: "/slider1.jpeg",
  },
  {
    value: "99%",
    label: "Clinical Excellence Rate",
    desc: "Delivering outstanding outcomes in cardiac, vascular, and thoracic treatments through world-class expertise, innovation, and rigorous patient safety standards.",
    img: "/img1.jpeg",
  },
  {
    value: "7,000+",
    label: "Individuals Treated",
    desc: "Comprehensive cardiac, vascular, and thoracic care provided with compassion, advanced technology, and a commitment to long-term patient well-being.",
    img: "/slider3.jpeg",
  },
];

export const doctors = [
  {
    value: "ctvs",
    name: "Dr. Sami Anwar Khan",
    credentials: "MBBS, MS, MCh, CTVS (Gold Medalist)",
    hospital: "Mohak Super Speciality & SAIMS Hospital",
    desc: "Senior Consultant - Cardiothoracic & Vascular Surgeon specializing in complex heart surgeries and arterial revascularization.",
    image: "/Sami.png",
  },
  {
    value: "ent",
    name: "Dr. Sabiya Khan Suri",
    credentials: "MBBS, DLO (Gold Medalist)",
    hospital: "Shalby Multi-Specialty Hospital, Indore",
    desc: "Consultant ENT and Head & Neck Surgeon with expertise in microscopic ear surgery and endoscopic sinus procedures.",
    image: "/Sabiya.png",
  },
];
// export const doctors = [
//     {
//         name: "Dr. Sami Anwar Khan",
//         specialty: "Senior Cardiac Surgeon",
//         image: "/public/DrAnwar.jpg",
//         description: "Specializing in minimally invasive heart surgery with over 15 years of experience."
//     },
//     {
//         name: "Dr. Sabiya Khan Suri",
//         specialty: "Specialized ENT & Head-Neck Surgery",
//         image: "/public/DrSabiya.jpg",
//         description: "Expert in advanced peripheral vascular interventions and venous disorders."
//     }
// ];

export const reviews = [
  {
    patient: "Shifa Patel",
    treatment: "Heart Valve Repair",
    rating: 5,
    occupation: "MBBS Final Year Student, MGM Indore",
    date: "Jan 2026",
    comment:
      "Dr. Sabiya maam has always been a great doctor and support system for me. I visited her for sinusitis and ear issues and received complete relief every time. I would recommend her to anyone suffering from ENT problems.",
    type: "Cardiology",
    image: "/shifapatel.jpeg",
  },
  {
    patient: "Sunil Pandhre",
    treatment: "Microscopic Ear Surgery",
    rating: 5,
    date: "Dec 2025",
    comment:
      "I, Sunil Pandhre, a yoga instructor, highly recommend Dr. Sabiya. Her accurate diagnosis and clear guidance ensure effective treatment outcomes. Many from my yoga community have benefited from her dedicated care.",
    type: "ENT",
    image: "/sunilpadhre.jpeg",
  },
  {
    patient: "Meesha",
    treatment: "Bypass Surgery",
    rating: 5,
    date: "Nov 2025",
    comment:
      "I, Meesha, a national-level yoga player and student of Daly College, am grateful for the care provided by Dr. Sabiya. She is highly skilled, compassionate, and explains every concern clearly, making patients feel comfortable and confident.",
    type: "Cardiology",
    image: "/meesha.jpeg",
  },
];
