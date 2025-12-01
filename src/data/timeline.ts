/**
 * Learning Journey Timeline
 */

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'education' | 'project' | 'achievement' | 'certification';
  link?: string;
  tags?: string[];
}

export const timelineData: TimelineEvent[] = [
  {
    id: '1',
    date: '2023 - Present',
    title: 'B.Tech in AI & Machine Learning',
    description:
      'Currently pursuing my degree at Symbiosis Institute of Technology, Pune. Focusing on deep learning, neural networks, and practical AI applications.',
    type: 'education',
    tags: ['AI', 'ML', 'Education'],
  },
];

export default timelineData;
