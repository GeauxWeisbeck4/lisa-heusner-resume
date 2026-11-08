type Summary = {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  location: {
    title: string;
    href: string;
  };
  phone: string;
  title: string;
};

type Education = {
  period: [string, string];
  institution: string;
  description: string;
};

const all = {
  summary: {
    name: 'Lisa Heusner',
    email: 'lisaheusner4@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lisa-heusner-815b07284',
    github: 'https://github.com/geauxweisbeck4/lisa-heusner-resume',
    location: { title: 'Durham, NC', href: 'https://maps.app.goo.gl/NJbFUx2jAYiKMsCT6' },
    phone: '+1(910)227-4980',
    title: 'Server | Bartender | Service Professional',
  },
  skills: [
    'Table service and guest relations',
    'Bartending, cocktail service, and bar support',
    'POS systems, cash handling, and cashiering',
    'Hosting, bussing, and dining room setup',
    'Catering and special-event service',
    'Food preparation and kitchen support',
    'Customer service and communication',
    'Administrative support and data entry',
    'Financial administration and recordkeeping',
    'Social media marketing support',
    'Harm reduction and social service outreach',
    'Problem resolution',
    'Crisis communications',
    // 'Volunteer Coordination',
    // 'Public Speaking',
    // 'Constituent Services',
    // 'Crisis Communications',
  ],
  education: [
    {
      period: ['Jan 2022', 'May 2023'],
      institution: 'Wake Tech Community College',
      description: 'University Studies (Pre-requisite Courses)',
    },
    {
      period: ['Sep 2026', 'Dec 2028'],
      institution: 'Durham Technical Community College',
      description: 'Marketing Management Program (In Progress)',
    },
  ],
} as const satisfies {
  summary: Summary;
  skills: string[];
  education: Education[];
};

export default all;
