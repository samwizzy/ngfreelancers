export interface Project {
  id: number;
  title: string;
  description: string;
  date_created: Date;
  user_id: number;
}

export const Projects: Project[] = [
  {
    id: 1,
    title: 'Amazon',
    description: 'Get started',
    date_created: new Date('2021-10-13T15:25:45'),
    user_id: 2,
  },
  {
    id: 2,
    title: 'Microsoft',
    description: 'Get started',
    date_created: new Date('2021-10-13T15:25:45'),
    user_id: 2,
  },
  {
    id: 3,
    title: 'Tesla',
    description: 'Get started',
    date_created: new Date('2021-10-13T15:25:45'),
    user_id: 2,
  },
];
