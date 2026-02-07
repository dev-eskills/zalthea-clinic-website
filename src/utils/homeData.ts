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
            "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80"  // Medium
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
            "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80"
        ],
        link: "/ent",
    }
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

export const treatments = [
    {
        name: "Heart Valve Repair",
        cat: "Advanced Cardiology",
        iconName: "HeartPulse",
        details: "Specialized reconstructive surgery for mitral and aortic valves. We prioritize tissue-sparing techniques over replacement to maintain natural heart geometry and long-term durability.",
        link: "/cardiology"
    },
    {
        name: "Micro EAR Surgery",
        cat: "Otology & Audiology",
        iconName: "Ear",
        details: "Ultra-precision microscopic intervention for chronic ear pathologies. Focused on the restoration of the ossicular chain to recover hearing function and resolve persistent infections.",
        link: "/ent"
    },
    {
        name: "Vascular & Aortic Care",
        cat: "Vascular Surgery",
        iconName: "Activity",
        details: "Comprehensive management of peripheral arterial diseases and aortic aneurysms using a hybrid of traditional and endovascular (EVAR) protocols for targeted recovery.",
        link: "/cardiology"
    },
    {
        name: "Endoscopic Sinus Surgery",
        cat: "Advanced Rhinology",
        iconName: "Wind",
        details: "Functional Endoscopic Sinus Surgery (FESS) utilizing high-definition imaging to clear obstructive sinus pathways and nasal polyps with minimal post-operative downtime.",
        link: "/ent"
    },
    {
        name: "CABG (Bypass Surgery)",
        cat: "Cardiac Surgery",
        iconName: "Hospital",
        details: "Gold-standard coronary revascularization (Beating Heart Surgery). Our protocols focus on total arterial grafting to ensure maximum graft longevity and reduced risk of stroke.",
        link: "/cardiology"
    },
    {
        name: "Thyroid & Neck Oncology",
        cat: "Head & Neck Surgery",
        iconName: "ShieldPlus",
        details: "Oncological surgical care for thyroid, parathyroid, and salivary gland disorders. We emphasize nerve monitoring and aesthetic incision placement for optimal patient outcomes.",
        link: "/ent"
    }
];

export const stats = [
    {
        value: "13,000+",
        label: "Hearts Healed",
        desc: "Successful cardiac and vascular procedures performed across specialized centers.",
        img: "/heart_doctors.png"
    },
    {
        value: "99%",
        label: "Success Rate",
        desc: "Maintaining the highest standards of clinical outcomes and patient safety protocols.",
        img: "https://asianheartinstitute.org/wp-content/uploads/2023/12/home-banner-mob.webp"
    },
    {
        value: "50,000+",
        label: "Patients Served",
        desc: "Comprehensive outpatient and surgical care provided with compassion and excellence.",
        img: "https://i.pinimg.com/1200x/ed/6e/6f/ed6e6fc3b43929fca6158fdf5c82eafd.jpg"
    }
];

export const doctors= [
    {
        value: 'ctvs',
        name: 'Dr. Sami Anwar Khan',
        credentials: 'MBBS, MS, MCh, CTVS (Gold Medalist)',
        regNo: 'Reg. No.: MP - 13768',
        hospital: 'Mohak Super Speciality & SAIMS Hospital',
        desc: 'Senior Consultant - Cardiothoracic & Vascular Surgeon specializing in complex heart surgeries and arterial revascularization.',
        image: '/Sami.png'
    },
    {
        value: 'ent',
        name: 'Dr. Sabiya Khan Suri',
        credentials: 'MBBS, DLO (Gold Medalist)',
        regNo: 'Reg. No.: MP - 15829',
        hospital: 'Shalby Multi-Specialty Hospital, Indore',
        desc: 'Consultant ENT and Head & Neck Surgeon with expertise in microscopic ear surgery and endoscopic sinus procedures.',
        image: '/Sabiya.png'
    }
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
        patient: "Aditya Sharma",
        treatment: "Heart Valve Repair",
        rating: 5,
        date: "Jan 2026",
        comment: "The precision of the cardiac team was life-changing. I was back to my routine within weeks. Truly a center of surgical excellence.",
        type: "Cardiology"
    },
    {
        patient: "Priya Varma",
        treatment: "Microscopic Ear Surgery",
        rating: 5,
        date: "Dec 2025",
        comment: "After years of hearing loss, the micro-surgery performed here was a miracle. The professional care and follow-up were outstanding.",
        type: "ENT"
    },
    {
        patient: "Rajesh Iyer",
        treatment: "Bypass Surgery",
        rating: 5,
        date: "Nov 2025",
        comment: "Highly specialized approach to CABG. The minimally invasive technique meant less pain and a very professional recovery environment.",
        type: "Cardiology"
    }
];