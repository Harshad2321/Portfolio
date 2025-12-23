export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  company: string;
  type: string;
  mode: string;
  description: string[];
  tags?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: '1',
    date: 'December 2025 - Present',
    role: 'AI Engineer Intern',
    company: 'Akiyam Solutions Private Limited',
    type: 'Industrial Training',
    mode: 'Remote',
    description: [
      'Collaborating with a cross-functional team to build and deploy AI-powered systems',
      'Working on Agentic AI workflows involving tool-calling LLMs and state management',
      'Developing and integrating REST APIs using FastAPI for AI model serving',
      'Contributing to backend architecture and data pipeline development for production-ready AI applications',
    ],
    tags: ['Agentic AI', 'FastAPI', 'LLMs', 'Backend'],
  },
];

export default experienceData;
