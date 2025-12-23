export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Agentic AI & LLMs',
    skills: [
      { name: 'Agentic AI Systems' },
      { name: 'ReAct Agent Architecture' },
      { name: 'Tool-Calling LLMs' },
      { name: 'Retrieval-Augmented Generation (RAG)' },
      { name: 'Vector Databases' },
      { name: 'State Management in AI Workflows' },
      { name: 'MCP (Model Context Protocol)' },
    ],
  },
  {
    category: 'Machine Learning & Data',
    skills: [
      { name: 'scikit-learn' },
      { name: 'Pandas' },
      { name: 'XGBoost' },
      { name: 'Data Preprocessing' },
      { name: 'Matplotlib' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'REST API Design' },
      { name: 'Pydantic' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'Linux' },
      { name: 'AWS' },
      { name: 'UV Package Manager' },
    ],
  },
];

export default skillsData;
