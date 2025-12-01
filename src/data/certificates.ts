export interface Certificate {
  id: string;
  title: string;
  filename: string;
  category: 'AI' | 'Cloud' | 'Hackathon' | 'Programming' | 'Other';
  issuer?: string;
  date?: string;
  description?: string;
}

// Auto-categorize certificates based on filename patterns
function categorizeCertificate(filename: string): Certificate['category'] {
  const lower = filename.toLowerCase();
  
  if (lower.includes('nasa') || lower.includes('hack') || lower.includes('paranox')) {
    return 'Hackathon';
  }
  if (lower.includes('cloud') || lower.includes('oracle') || lower.includes('aws') || lower.includes('gcp')) {
    return 'Cloud';
  }
  if (lower.includes('python') || lower.includes('sql') || lower.includes('javascript')) {
    return 'Programming';
  }
  if (lower.includes('ai') || lower.includes('ml') || lower.includes('gpt')) {
    return 'AI';
  }
  
  return 'Other';
}

export const certificatesData: Certificate[] = [
  {
    id: '1',
    title: '100 Days of Python',
    filename: '100 DAYS OF PYTHON-1.png',
    category: 'Programming',
    description: 'Completed intensive 100-day Python programming challenge',
  },
  {
    id: '2',
    title: '2 Fast 2 Hack',
    filename: '2 FAST 2 HACK-1.png',
    category: 'Hackathon',
    description: 'Hackathon participation certificate',
  },
  {
    id: '3',
    title: 'GPT-5 Co-Creation',
    filename: 'GPT5.png',
    category: 'AI',
    description: 'Co-creating with GPT-5 hackathon',
  },
  {
    id: '4',
    title: 'Hedera Certification',
    filename: 'Hedera Certification-1.png',
    category: 'Other',
    description: 'Hedera blockchain certification',
  },
  {
    id: '5',
    title: 'NASA Space Apps Challenge',
    filename: 'NASA Space Apps Challenge-1.png',
    category: 'Hackathon',
    description: 'NASA Space Apps Challenge 2024 participation',
  },
  {
    id: '6',
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    filename: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate-1.png',
    category: 'Cloud',
    issuer: 'Oracle',
    description: 'Oracle Cloud Infrastructure foundations certification',
  },
  {
    id: '7',
    title: 'Paranox 2.0 TechXNinjas',
    filename: 'Paranox 2.O TechXNinjas-1.png',
    category: 'Hackathon',
    description: 'Paranox 2.0 hackathon by TechXNinjas',
  },
  {
    id: '8',
    title: 'SQL Advanced Certificate',
    filename: 'sql_advanced certificate-1.png',
    category: 'Programming',
    description: 'Advanced SQL certification',
  },
  {
    id: '9',
    title: 'ICFAMEAD Certificate',
    filename: 'Certificate ICFAMEAD-2.png',
    category: 'Other',
    description: 'ICFAMEAD certification',
  },
  {
    id: '10',
    title: 'Campus Ambassador - eDC IIT Delhi',
    filename: 'Campus_Ambassador_Offer_Letter_eDC-1.png',
    category: 'Other',
    issuer: 'eDC IIT Delhi',
    description: 'Campus Ambassador offer letter from eDC IIT Delhi',
  },
];

export const certificateCategories = ['All', 'AI', 'Cloud', 'Hackathon', 'Programming', 'Other'] as const;

export default certificatesData;
