export type Language = 'en' | 'np';

export interface Course {
  id: string;
  title: { en: string; np: string };
  category: 'bartending' | 'barista' | 'flair' | 'advanced';
  duration: { en: string; np: string };
  batches: { en: string; np: string };
  feeNpr: number;
  feeUsd: number;
  summary: { en: string; np: string };
  highlights: { en: string[]; np: string[] };
  syllabus: { week: string; topic: { en: string; np: string }; details: { en: string; np: string } }[];
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: { en: string; np: string };
  location: { en: string; np: string };
  quote: { en: string; np: string };
  course: { en: string; np: string };
  year: string;
  avatar: string;
}

export interface VerifiedCertificate {
  code: string;
  studentName: string;
  courseName: { en: string; np: string };
  completionDate: string;
  grade: string;
  issueCity: string;
}

export const ACADEMY_INFO = {
  name: {
    en: 'Bar Academy Tarahara',
    np: 'बार एकेडेमी तरहरा',
  },
  tagline: {
    en: 'Premier Bartending & Professional Barista Training Center',
    np: 'नेपालको उत्कृष्ट बारटेन्डिङ तथा व्यावसायिक बारिष्टा तालिम केन्द्र',
  },
  address: {
    en: 'Dharan-Itahari Highway, Tarahara Chowk, Itahari-2, Sunsari, Koshi Province, Nepal',
    np: 'धरान-इटहरी राजमार्ग, तरहरा चोक, इटहरी-२, सुनसरी, कोशी प्रदेश, नेपाल',
  },
  phone1: '+977 980-0000000',
  phone2: '+977 981-2345678',
  whatsapp: '+9779800000000',
  email: 'info@baracademytarahara.com',
  facebook: 'https://www.facebook.com/profile.php?id=61555945627589',
  instagram: 'https://www.instagram.com/bar_academy_/',
  googleMapsUrl: 'https://www.google.com/maps/place/Bar+Academy+Tarahara/@26.7087126,87.2694582,17z',
  stats: [
    { number: '1,500+', label: { en: 'Certified Alumni', np: 'प्रमाणित ग्राजुएटहरू' } },
    { number: '100%', label: { en: 'Practical Lab Hours', np: 'व्यावहारिक प्रयोगशाला' } },
    { number: '95%+', label: { en: 'Job Placement Rate', np: 'रोजगार सफलता दर' } },
    { number: '12+', label: { en: 'Specialized Modules', np: 'विशिष्ट मोड्युलहरू' } },
  ]
};

export const COURSES_DATA: Course[] = [
  {
    id: 'pro-bartending',
    title: {
      en: 'Professional Bartending & Mixology Diploma',
      np: 'प्रोफेसनल बारटेन्डिङ तथा मिक्सोलोजी डिप्लोमा',
    },
    category: 'bartending',
    duration: { en: '6 Weeks (90 Hours)', np: '६ हप्ता (९० घण्टा)' },
    batches: { en: 'Morning (7-9 AM), Afternoon (1-3 PM), Evening (4-6 PM)', np: 'बिहान (७-९ बजे), दिउँसो (१-३ बजे), साँझ (४-६ बजे)' },
    feeNpr: 25000,
    feeUsd: 190,
    summary: {
      en: 'Comprehensive hands-on training covering spirit knowledge, cocktail science, free pouring accuracy, speed bartending, and bar setup.',
      np: 'रक्सी र ककटेल विज्ञान, फ्रि पोरिङ, स्पीड बारटेन्डिङ र बार व्यवस्थापन सम्बन्धी पूर्ण व्यावहारिक तालिम।',
    },
    highlights: {
      en: [
        'Over 50 Classic & Modern Cocktail Recipes',
        'Speed Pouring & Free-Pour Measurement Precision',
        'Alcohol & Spirits World Geography & Tasting Notes',
        'Bar Sanitation, Glassware Care & Hygiene Standards',
        'International Resume & Placement Guidance for Gulf/Europe'
      ],
      np: [
        '५० भन्दा बढी क्लासिक तथा आधुनिक ककटेल रेसिपी',
        'स्पीड पोरिङ र फ्रि-पोर मापन शुद्धता',
        'अन्तर्राष्ट्रिय रक्सी र स्पिरिट्स ज्ञान',
        'बार सरसफाइ तथा स्वच्छता मापदण्ड',
        'वैदेशिक रोजगारीका लागि सिभी निर्माण र सहजीकरण'
      ]
    },
    syllabus: [
      {
        week: 'Week 1',
        topic: { en: 'Bar Setup, Tools & Free Pouring', np: 'बार सेटअप, औजार तथा फ्रि पोरिङ' },
        details: { en: 'Introduction to bar tools, shakers, strainers, glass types, and mastering precise 30ml/60ml free pours.', np: 'बार उपकरण, सेकर, स्ट्रेनर, गिलासका प्रकार र सटीक ३०/६० एमएल फ्रि पोरिङ।'}
      },
      {
        week: 'Week 2',
        topic: { en: 'Base Spirits: Vodka, Gin & Rum', np: 'बेस स्पिरिट्स: भोड्का, जिन र रम' },
        details: { en: 'Distillation process, cocktail families (Martini, Mojito, Daiquiri), fruit purees, and balance of sweet vs sour.', np: 'उत्पादन प्रक्रिया, ककटेल प्रकारहरू (मार्टिनी, मोहितो, डेक्वेरी) र स्वाद सन्तुलन।'}
      },
      {
        week: 'Week 3',
        topic: { en: 'Whiskey, Tequila, Brandy & Liqueurs', np: 'ह्विस्की, टेकिला, ब्रान्डी र लिकर' },
        details: { en: 'Bourbon vs Scotch, Agave spirits, herbal liqueurs, Old Fashioned, Margarita, and Manhattan craftsmanship.', np: 'स्कच र बर्बन, एगेभ स्पिरिट्स, ओल्ड फेसन र मार्गारिता निर्माण।'}
      },
      {
        week: 'Week 4',
        topic: { en: 'Mocktails & Non-Alcoholic Mixology', np: 'मकटेल र गैर-अल्कोहलिक पेयपदार्थ' },
        details: { en: 'Syrup reductions, infused sodas, virgin cocktails, smoothie physics, and layered non-alcoholic beverages.', np: 'सिरप निर्माण, इन्फ्युज्ड सोडा, भर्जिन ककटेल र लेयर्ड पेय पदार्थ।'}
      },
      {
        week: 'Week 5',
        topic: { en: 'Speed Bartending & Customer Service', np: 'स्पीड बारटेन्डिङ र ग्राहक सेवा' },
        details: { en: 'Simulated high-volume club environment, multi-order handling, POS operation, and hospitality etiquette.', np: 'उच्च चाप भएको बार वातावरण अभ्यास, बहु-अर्डर व्यवस्थापन र आतिथ्य शिष्टाचार।'}
      },
      {
        week: 'Week 6',
        topic: { en: 'Practical Exam, Recipe Creation & Graduation', np: 'व्यावहारिक परीक्षा र प्रमाणपत्र' },
        details: { en: 'Blind tasting, mystery basket cocktail creation exam, final evaluation and diploma distribution.', np: 'प्रैक्टिकल परीक्षा, नयाँ ककटेल सिर्जना र डिप्लोमा प्रमाणपत्र वितरण।'}
      }
    ],
    image: '/images/hero_bar_academy_1784797795228.jpg',
    popular: true
  },
  {
    id: 'master-barista',
    title: {
      en: 'Master Barista & Coffee Craft Course',
      np: 'मास्टर बारिष्टा तथा कफी क्राफ्ट तालिम',
    },
    category: 'barista',
    duration: { en: '4 Weeks (60 Hours)', np: '४ हप्ता (६० घण्टा)' },
    batches: { en: 'Morning (8-10 AM), Day (12-2 PM), Evening (3-5 PM)', np: 'बिहान (८-१० बजे), दिउँसो (१२-२ बजे), साँझ (३-५ बजे)' },
    feeNpr: 18000,
    feeUsd: 135,
    summary: {
      en: 'Master commercial espresso machines, bean origins, extraction science, milk steaming chemistry, and stunning latte art.',
      np: 'कमर्सियल एस्प्रेसो मेसिन सञ्चालन, कफी बीन्स ज्ञान, दूध स्टिमिङ र उत्कृष्ट लाते आर्ट कला।',
    },
    highlights: {
      en: [
        'Commercial Espresso Machine Calibration & Maintenance',
        'Espresso Extraction Ratios, Grind Size & Dialing-in',
        'Milk Micro-Foaming & Temperature Chemistry',
        'Latte Art Mastery: Heart, Rosetta, Tulip & Swan',
        'Manual Brewing Methods: V60, Aeropress, Chemex & French Press'
      ],
      np: [
        'कमर्सियल एस्प्रेसो मेसिन मर्मत र क्यालिब्रेसन',
        'एस्प्रेसो एक्स्ट्र्याक्सन अनुपात र ग्राइन्डर सेटिङ',
        'दूधको माइक्रो-फोम र तापक्रम नियन्त्रण',
        'लाते आर्ट: हर्ट, रोजेट्टा, ट्युलिप र स्वान डिजाइन',
        'म्यानुअल कफी मेकर्स: V60, एरोप्रेस र फ्रेन्च प्रेस'
      ]
    },
    syllabus: [
      {
        week: 'Week 1',
        topic: { en: 'Coffee Beans & Grinder Calibration', np: 'कफी बीन्स र ग्राइन्डर सेटिङ' },
        details: { en: 'Arabica vs Robusta, coffee bean processing, grinder dosing, tamping mechanics, and golden 25-30 second extraction.', np: 'अराबिका र रोबस्टा, ग्राइन्डर सेटिङ, ट्याम्पिङ र पर्फेक्ट २५-३० सेकेन्ड एक्स्ट्र्याक्सन।'}
      },
      {
        week: 'Week 2',
        topic: { en: 'Espresso Menu & Milk Steaming Chemistry', np: 'एस्प्रेसो मेनु र दूध स्टिमिङ' },
        details: { en: 'Preparing Ristretto, Americano, Cappuccino, Latte, Flat White, and Mocha with velvety micro-foam at 60-65°C.', np: 'क्यापुचिनो, लाते, फ्ल्याट ह्वाइट र मोका तयारी तथा ६०-६५ डिग्रीमा स्टिमिङ।'}
      },
      {
        week: 'Week 3',
        topic: { en: 'Latte Art Fundamentals to Advanced', np: 'लाते आर्ट आधारभूत र एडभान्स' },
        details: { en: 'Pitcher positioning, flow speed, canvas creation, perfecting Heart, Rosetta, Tulip, and 3D etching.', np: 'पिचर समात्ने तरिका, रोजेट्टा र ट्युलिप कला अभ्यास।'}
      },
      {
        week: 'Week 4',
        topic: { en: 'Café Menu Design & Practical Exam', np: 'क्याफे मेनु र व्यावहारिक परीक्षा' },
        details: { en: 'Cost control, cold brews, signature coffee beverages, coffee machine cleaning/backflushing, and practical test.', np: 'कोल्ड ब्रु, क्याफे मेनु डिजाइन, मेसिन मर्मत तथा व्यावहारिक मूल्यांकन।'}
      }
    ],
    image: '/images/barista_coffee_art_1784797823366.jpg',
    popular: true
  },
  {
    id: 'flair-bartending',
    title: {
      en: 'Working & Exhibition Flair Bartending',
      np: 'वर्किङ तथा एक्जिभिसन फ्लेयर बारटेन्डिङ',
    },
    category: 'flair',
    duration: { en: '4 Weeks (40 Hours)', np: '४ हप्ता (४० घण्टा)' },
    batches: { en: 'Afternoon (2-4 PM), Evening (5-7 PM)', np: 'दिउँसो (२-४ बजे), साँझ (५-७ बजे)' },
    feeNpr: 15000,
    feeUsd: 115,
    summary: {
      en: 'High-energy bottle flips, shaker catches, multiplex moves, speed pours, and showmanship routines for high-end bars.',
      np: 'बोतल र सेकरको रोमाञ्चक फ्लिप, क्याच, स्पीड पोर र सोम्यानसिप कला।',
    },
    highlights: {
      en: [
        'Safe Practice Bottles & Rubber Floor Training Mat',
        'Working Flair with Active Liquids & Ice Drops',
        'Shaker Tins, Strainer & Glass Spins and Catches',
        'Exhibition Flair Routines & Choreographed Drops',
        'Fire & Smoke Special Effects (Safety Certified)'
      ],
      np: [
        'सुरक्षित प्राक्टिस बोटल र रबर म्याट ट्रेनिङ',
        'लिक्विड सहितको वर्किङ फ्लेयर अभ्यास',
        'सेकर र गिलासो स्पिन तथा क्याच कला',
        'स्टेज फ्लेयर कोरियोग्राफी र म्यूजिक टाइमिङ',
        'आगो र धुवाँको विशेष इफेक्ट कला (सुरक्षा सहित)'
      ]
    },
    syllabus: [
      {
        week: 'Week 1',
        topic: { en: 'Basic Bottle Movements & Grip Types', np: 'आधारभूत बोटल मुभमेन्ट र ग्रिप' },
        details: { en: 'Thumb grip, palm grip, basic flips, reverse flips, and single shaker catches.', np: 'थम ग्रिप, पाम ग्रिप, रिभर्स फ्लिप र सेकर क्याच।'}
      },
      {
        week: 'Week 2',
        topic: { en: 'Working Flair & Pouring Under Pressure', np: 'वर्किङ फ्लेयर र स्पीड पोर' },
        details: { en: 'Pouring exact measures while performing bottle rolls, back catches, and double tin spins.', np: 'बोतल रोल, ब्याक क्याच र डबल टिन स्पिन गर्दै सही मात्रा हाल्ने कला।'}
      },
      {
        week: 'Week 3',
        topic: { en: 'Multiplex Moves & Two-Bottle Flair', np: 'टु-बोटल फ्लेयर र मल्टिप्लेक्स' },
        details: { en: 'Juggling two bottles, shaker-bottle combinations, shadow moves, and floor recovery techniques.', np: 'दुई बोतल जुगलिङ, सेकर-बोतल कम्बिनेसन र सो मुभमेन्ट।'}
      },
      {
        week: 'Week 4',
        topic: { en: 'Show Routine Choreography & Final Performance', np: 'स्टेज सो कोरियोग्राफी र फाइनल सो' },
        details: { en: '2-minute timed musical flair performance, cocktail construction during showmanship, and judging.', np: '२ मिनेटको म्युजिकल सो प्रदर्शन र ककटेल तयारी मूल्यांकन।'}
      }
    ],
    image: '/images/flair_bartending_class_1784797809525.jpg'
  },
  {
    id: 'advanced-molecular',
    title: {
      en: 'Molecular Mixology & Bar Operations',
      np: 'मोलिक्युलर मिक्सोलोजी तथा बार म्यानेजमेन्ट',
    },
    category: 'advanced',
    duration: { en: '2 Weeks Intensive (30 Hours)', np: '२ हप्ता तीव्र (३० घण्टा)' },
    batches: { en: 'Weekend Batch (Sat & Sun) / Evening Special', np: 'वीकेन्ड ब्याच (शनिबार/आइतबार) / विशेष साँझ' },
    feeNpr: 16000,
    feeUsd: 120,
    summary: {
      en: 'Cutting-edge cocktail chemistry: Spherification, edible foams, wood smoke infusions, custom syrups, and bar profit costing.',
      np: 'अत्याधुनिक ककटेल केमिस्ट्री: स्फेरिफिकेसन, फोम, स्मोक्ड ककटेल, सिरप निर्माण र बार बजेटिङ।',
    },
    highlights: {
      en: [
        'Direct & Reverse Spherification (Flavor Caviar Pearls)',
        'Culinary Foams, Airs & Citrus Emulsions',
        'Wood-Smoke Infusion Guns & Aged Barrel Cocktails',
        'Custom Artesian Syrups, Cordials & Clarified Milk Punches',
        'Beverage Costing, Inventory Control & Menu Engineering'
      ],
      np: [
        'स्फेरिफिकेसन (फ्लेभर क्याभियर पर्ल्स सिर्जना)',
        'इडिबल फोम र अमिलो इमल्सन कला',
        'वुड-स्मोक इन्फ्युजन र एज्ड ब्यारेल ककटेल',
        'होममेड सिरप, कोर्डियल्स र मिल्क पञ्च',
        'ककटेल लागत नियन्त्रण, इन्भेन्टरी र मेनु डिजाइन'
      ]
    },
    syllabus: [
      {
        week: 'Week 1',
        topic: { en: 'Molecular Culinary Techniques', np: 'मोलिक्युलर कुलिनरी प्रविधि' },
        details: { en: 'Sodium alginate spherification, soy lecithin airs, smoke gun infusions, and dehydrated garnishes.', np: 'सोडियम एल्जिनेट, सोय लेसिथिन फोम र स्मोक गन प्रयोग।'}
      },
      {
        week: 'Week 2',
        topic: { en: 'Clarification, Milk Punch & Bar Profitability', np: 'मिल्क पञ्च र बार नाफा विश्लेषण' },
        details: { en: 'Centrifugal clarification, milk punch, calculating drink pour cost %, inventory management, and cocktail pricing.', np: 'दूध र सिट्रस क्लेरिफिकेसन, पोअर कष्ट प्रतिशत र मूल्य निर्धारण।'}
      }
    ],
    image: '/images/cocktail_mixology_craft_1784797837528.jpg'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan Shrestha',
    role: { en: 'Head Bartender at Atlantis The Royal', np: 'हेड बारटेन्डर, एट्लान्टिस द रोयल' },
    location: { en: 'Dubai, UAE', np: 'दुबई, युएई' },
    quote: {
      en: 'Bar Academy Tarahara gave me the confidence and exact technical pour accuracy required for international 5-star resort interviews. The instructors are world-class!',
      np: 'तरहरा एकेडेमीको तालिमले मलाई दुबईको ५-तारे रिसोर्टको अन्तर्वार्तामा शतप्रतिशत आत्मविश्वास दियो। यहाँको सिकाइ एकदमै व्यावहारिक छ।',
    },
    course: { en: 'Professional Bartending & Mixology', np: 'प्रोफेसनल बारटेन्डर कोर्स' },
    year: '2023 Graduate',
    avatar: 'https://picsum.photos/seed/bartender1/150/150'
  },
  {
    id: '2',
    name: 'Anjali Chaudhari',
    role: { en: 'Lead Barista & Café Manager', np: 'मुख्य बारिष्टा तथा क्याफे म्यानेजर' },
    location: { en: 'Itahari, Nepal', np: 'इटहरी, नेपाल' },
    quote: {
      en: 'I opened my own specialty coffee shop in Itahari right after completing the Master Barista course. I learned espresso calibration, milk art, and café budgeting.',
      np: 'बारिष्टा तालिम सकेपछि मैले इटहरीमै आफ्नै क्याफे खोलें। मेसिन क्यालिब्रेसनदेखि लाते आर्टसम्मको पूर्ण ज्ञान पाइयो।',
    },
    course: { en: 'Master Barista & Coffee Craft', np: 'मास्टर बारिष्टा तालिम' },
    year: '2024 Graduate',
    avatar: 'https://picsum.photos/seed/barista2/150/150'
  },
  {
    id: '3',
    name: 'Bikash Rai',
    role: { en: 'Flair Bartender & Mixologist', np: 'फ्लेयर बारटेन्डर तथा मिक्सोलोजिस्ट' },
    location: { en: 'Cruise Ship Line (Europe)', np: 'क्रुज सिप (युरोप)' },
    quote: {
      en: 'The flair training arena in Tarahara is unbelievable. Flipping bottles safely with real fluid control helped me land a high-paying role on European cruise ships.',
      np: 'एकेडेमीको फ्लेयर ट्रेनिङ हल र प्रशिक्षकहरूको मार्गदर्शनले गर्दा आज म युरोपियन क्रुजमा आकर्षक तलबमा कार्यरत छु।',
    },
    course: { en: 'Working & Exhibition Flair', np: 'वर्किङ तथा एक्जिभिसन फ्लेयर' },
    year: '2023 Graduate',
    avatar: 'https://picsum.photos/seed/flair3/150/150'
  },
  {
    id: '4',
    name: 'Pooja Thapa',
    role: { en: 'Beverage Specialist', np: 'बेभरेज स्पेसलिस्ट' },
    location: { en: 'Doha, Qatar', np: 'दोहा, कतार' },
    quote: {
      en: 'The instructors focus 100% on practical hands-on experience. We practiced over 50 cocktail recipes and learned cocktail chemistry that blew my interviewers away!',
      np: 'यहाँ ९०% भन्दा बढी समय प्रक्टिकल हुन्छ। ५० भन्दा बढी ककटेल आफै बनाएर सिक्न पाइने हुनाले वैदेशिक रोजगारमा धेरै सजिलो भयो।',
    },
    course: { en: 'Professional Bartending & Mixology', np: 'प्रोफेसनल बारटेन्डर कोर्स' },
    year: '2024 Graduate',
    avatar: 'https://picsum.photos/seed/student4/150/150'
  }
];

export const VERIFIED_CERTIFICATES: VerifiedCertificate[] = [
  {
    code: 'BAT-2025-1082',
    studentName: 'Sujan Limbu',
    courseName: { en: 'Professional Bartending & Mixology Diploma', np: 'प्रोफेसनल बारटेन्डिङ तथा मिक्सोलोजी डिप्लोमा' },
    completionDate: '2025-01-15',
    grade: 'Distinction (A+)',
    issueCity: 'Tarahara, Sunsari, Nepal'
  },
  {
    code: 'BAT-2025-4091',
    studentName: 'Pratima Tamang',
    courseName: { en: 'Master Barista & Coffee Craft Course', np: 'मास्टर बारिष्टा तथा कफी क्राफ्ट तालिम' },
    completionDate: '2025-02-28',
    grade: 'Excellence (A)',
    issueCity: 'Tarahara, Sunsari, Nepal'
  },
  {
    code: 'BAT-2024-8820',
    studentName: 'Aayush Karki',
    courseName: { en: 'Working & Exhibition Flair Bartending', np: 'वर्किङ तथा एक्जिभिसन फ्लेयर बारटेन्डिङ' },
    completionDate: '2024-11-20',
    grade: 'Distinction (A+)',
    issueCity: 'Tarahara, Sunsari, Nepal'
  }
];

export const FAQS_DATA = [
  {
    q: {
      en: 'What are the admission eligibility requirements for joining Bar Academy Tarahara?',
      np: 'बार एकेडेमी तरहरामा भर्ना हुन के के योग्यता चाहिन्छ?',
    },
    a: {
      en: 'No prior hospitality experience is required! Students must be at least 18 years old for alcohol-handling courses (16+ for Barista training). Basic English or Nepali understanding is recommended as instruction is provided in both languages.',
      np: 'कुनै अघिल्लो अनुभव आवश्यक छैन! बारटेन्डिङका लागि १८ वर्ष र बारिष्टाका लागि १६ वर्ष उमेर पुगेको हुनुपर्छ। साधारण नेपाली वा अंग्रेजी भाषा बुझ्न सक्ने हुनुपर्छ।',
    }
  },
  {
    q: {
      en: 'Are the training materials and spirits provided by the academy during practicals?',
      np: 'प्रक्टिकल गर्दा लाग्ने सामान, रक्सी वा कफी एकेडेमीले नै उपलब्ध गराउँछ?',
    },
    a: {
      en: 'Yes! All ingredients, spirits, fresh fruits, syrups, coffee beans, milk, shakers, glassware, espresso machines, and practice flair bottles are 100% provided by Bar Academy Tarahara. There are zero hidden material fees.',
      np: 'हो! प्रक्टिकलमा प्रयोग हुने सम्पूर्ण सामाग्री, कफी बीन्स, दूध, रक्सी, ककटेल सामग्री, सेकर र मेसिन एकेडेमीले नै नि:शुल्क उपलब्ध गराउँछ।',
    }
  },
  {
    q: {
      en: 'Do you help with job placement in Nepal and abroad (Dubai, Qatar, Cruise Ships)?',
      np: 'तालिमपछि नेपाल तथा विदेश (दुबई, कतार, क्रुज) मा जागिर पाउन सहयोग गर्नुहुन्छ?',
    },
    a: {
      en: 'Yes! We have dedicated job placement tie-ups with leading hotels, lounges, and luxury resorts across Nepal (Kathmandu, Pokhara, Itahari, Dharan) as well as direct recruitment agency recommendations for Dubai, Qatar, Maldives, and Cruise ships.',
      np: 'हो! हाम्रो नेपालका स्थापित होटल, क्याफे तथा दुबई, कतार, माल्दिभ्स र क्रुजका लागि म्यानपावर तथा रिक्रूटमेन्ट एजेन्सीहरूसँग सहकार्य छ।',
    }
  },
  {
    q: {
      en: 'What are the batch timings available?',
      np: 'तालिमको समय तालिका (ब्याच) कुन कुन समयमा छ?',
    },
    a: {
      en: 'We run three flexible batches daily: Morning (7:00 AM - 9:00 AM), Afternoon (1:00 PM - 3:00 PM), and Evening (4:00 PM - 6:00 PM). Weekend special batches are also available for working professionals.',
      np: 'दैनिक ३ वटा ब्याचहरू उपलब्ध छन्: बिहान (७-९ बजे), दिउँसो (१-३ बजे) र साँझ (४-६ बजे)। जागिरेहरूका लागि शनिबार विशेष ब्याच पनि उपलब्ध छ।',
    }
  },
  {
    q: {
      en: 'Is the certification recognized internationally?',
      np: 'यहाँको प्रमाणपत्र अन्तर्राष्ट्रिय रूपमा मान्यता प्राप्त छ?',
    },
    a: {
      en: 'Yes! Our academy diploma includes complete course syllabus transcripts, practical hours verification, and a unique QR code for online certificate verification by international employers.',
      np: 'हो! हाम्रो एकेडेमीको प्रमाणपत्रमा क्यूआर कोड (QR Code) र अनलाइन भेरिफिकेसन कोड हुन्छ, जसलाई विदेशका होटल तथा बारहरूले सजिलै जाँच गर्न सक्छन्।',
    }
  }
];
