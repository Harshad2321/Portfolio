export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'C', level: 75 },
      { name: 'HTML', level: 60 },
      { name: 'CSS', level: 60 },
      { name: 'R', level: 50 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'scikit-learn', level: 70 },
      { name: 'Pandas', level: 75 },
      { name: 'Matplotlib', level: 70 },
      { name: 'Data Preprocessing', level: 75 },
      { name: 'XGBoost', level: 65 },
      { name: 'Regression', level: 70 },
    ],
  },
  {
    category: 'Python Concepts',
    skills: [
      { name: 'Generators', level: 65 },
      { name: 'File Handling', level: 75 },
      { name: 'OOP', level: 70 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 65 },
      { name: 'MongoDB', level: 50 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git', level: 75 },
      { name: 'Google Colab', level: 80 },
      { name: 'Jupyter Notebook', level: 75 },
      { name: 'Excel', level: 70 },
      { name: 'DSA', level: 70 },
    ],
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Windows', level: 60 },
      { name: 'macOS', level: 65 },
      { name: 'Linux', level: 50 },
    ],
  },
];

export default skillsData;
