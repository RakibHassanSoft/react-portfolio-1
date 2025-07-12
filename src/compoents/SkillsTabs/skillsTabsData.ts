// src/data/skillsTabsData.ts
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from 'react-icons/si';

export const tabs = ['Works', 'Technology', 'Pricing'];

export const worksData = [1, 2, 3].map((id) => ({
  id,
  title: `Sample Work ${id}`,
  subtitle: 'Branding',
  image: `https://th.bing.com/th/id/R.eeed0f38a43651ff834c82edff98566f?rik=9dgnK9RF33AwTA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wC6M_4vZRsY%2fT2wQ85IW11I%2fAAAAAAAAGKM%2fy2R4nyW96Rg%2fs1600%2fCat-05.jpg&ehk=OIoBuajkA%2bckV20zAdo%2bSP3z4MPIuMtfg%2f82ojD0BoM%3d&risl=&pid=ImgRaw&r=0`,
}));

export const technologies = [
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Figma', icon: FaFigma },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Database', icon: FaDatabase },
];

export const pricingPlans = [
  {
    title: 'Starter',
    price: '$99',
    features: ['1 Page', 'Responsive', '3 Days Delivery'],
  },
  {
    title: 'Professional',
    price: '$299',
    features: ['3 Pages', 'Custom UI', '5 Days Delivery'],
  },
  {
    title: 'Enterprise',
    price: '$599',
    features: ['Full Website', 'Animations', '10 Days Delivery'],
  },
];
