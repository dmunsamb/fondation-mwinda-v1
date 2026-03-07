import { 
  Shield, 
  GraduationCap, 
  HeartPulse, 
  Palette, 
  Leaf,
  Users,
  Globe,
  HandHeart
} from 'lucide-react';

export const INTERVENTION_AREAS = [
  {
    id: 'protection',
    title: 'PROTECTION',
    icon: 'Shield',
    description: 'Prise en charge des enfants vulnérables et lutte contre les violences.',
    details: [
      'Prise en charge des enfants sans parents (ENA, ES, abandonnés).',
      'Scolarisation, nutrition et prise en charge globale.',
      'Mise en place du CBCM dans la zone de santé de Bipemba (Mbujimayi) pour la confidentialité des survivantes.'
    ]
  },
  {
    id: 'education',
    title: 'ÉDUCATION',
    icon: 'GraduationCap',
    description: 'Accès à l\'éducation pour tous, des plus jeunes aux adultes.',
    details: [
      'École élémentaire FOM pour la scolarisation des enfants.',
      'Centres d\'alphabétisation pour femmes et hommes (85 femmes, 17 hommes) à Mbuji-Mayi.',
      'Prise en charge des études de 15 filles en coupe et couture au Kasaï Central.',
      'Ouverture d\'une école au quartier Bandara (Kinshasa).',
      'Auto-école à Lubumbashi pour la réinsertion des jeunes.'
    ]
  },
  {
    id: 'sante',
    title: 'SANTÉ',
    icon: 'HeartPulse',
    description: 'Soins de santé primaires et soutien aux survivants de violences.',
    details: [
      'Centre de santé pour la prise en charge médicale des survivants de violences sexuelles.',
      'Accès aux soins de santé primaires pour la communauté locale.',
      'Pharmacie à Lubumbashi offrant des médicaments gratuits aux veuves et filles-mères.'
    ]
  },
  {
    id: 'culture',
    title: 'CULTURE',
    icon: 'Palette',
    description: 'Promotion de la culture congolaise et message de paix.',
    details: [
      'Projet "L’art congolais réunit les frontières pour le silence à l’EST".',
      'Dénonciation des violences à l\'Est de la RDC par la performance artistique.',
      'Événements culturels internationaux à Lille (France) et Rome (Italie).'
    ]
  },
  {
    id: 'environnement',
    title: 'ENVIRONNEMENT',
    icon: 'Leaf',
    description: 'Protection de notre écosystème pour les générations futures.',
    details: [
      'Actions de sensibilisation à la protection de l\'environnement.',
      'Projets de développement durable au sein des communautés.',
      'Acquisition de 100 hectares à Mbuji-Mayi pour la lutte contre la famine.'
    ]
  }
];

export const PROJECTS = [
  {
    id: 'orphelinat-lualaba',
    title: 'Construction d’un orphelinat à Lualaba',
    description: 'Projet ambitieux visant à offrir un foyer sécurisé aux enfants vulnérables de la province du Lualaba.',
    status: 'En cours',
    location: 'Lualaba'
  },
  {
    id: 'education-paix-uvira',
    title: 'Éducation pour la paix - Uvira',
    description: 'Garantir à 200 enfants déplacés internes un accès durable à l’éducation de base dans un cadre sécurisant.',
    status: 'En cours',
    location: 'Uvira'
  },
  {
    id: 'perse',
    title: 'Projet PERSE',
    description: 'Atténuation des risques et des incidents de protection dans la sous-division de Tshilenge 1.',
    status: 'En cours',
    location: 'Tshilenge'
  }
];

export const BLOG_POSTS = [
  {
    id: 'tout-savoir',
    title: 'Tout savoir sur la FONDATION MWINDA (FOM)',
    excerpt: 'Plus les années passent, plus la Fondation Mwinda (FOM), ne cesse de faire briller la vie des Congolaises et congolais par ses actions humanitaires.',
    date: '2024-05-15',
    image: 'https://picsum.photos/seed/fom-blog1/600/400'
  },
  {
    id: 'hectares-mbuji',
    title: 'Acquisition de 100 hectares à Mbuji-Mayi',
    excerpt: 'Félicitations à la grande équipe de la FONDATION MWINDA pour l’obtention de 100 hectares à Mbuji-Mayi. FOM tient particulièrement à remercier l’OMS.',
    date: '2024-04-20',
    image: 'https://picsum.photos/seed/fom-blog2/600/400'
  }
];

export const EVENTS = [
  {
    id: 'conf-lille',
    title: 'Conférence Culturelle - Lille',
    date: '15 Juin 2026',
    location: 'Lille, France',
    description: 'Promotion de la culture congolaise et message de paix.'
  },
  {
    id: 'expo-rome',
    title: 'Exposition Artistique - Rome',
    date: '22 Juillet 2026',
    location: 'Rome, Italie',
    description: 'L’art congolais réunit les frontières pour le silence à l’EST.'
  },
  {
    id: 'inauguration-lualaba',
    title: 'Inauguration Orphelinat Lualaba',
    date: '10 Septembre 2026',
    location: 'Lualaba, RDC',
    description: 'Ouverture officielle du nouveau centre d\'accueil.'
  }
];

export const PARTNERS = [
  { id: 'oms', name: 'OMS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png' },
  { id: 'unicef', name: 'UNICEF', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UNICEF_logo.svg/1200px-UNICEF_logo.svg.png' },
  { id: 'rdc-gov', name: 'Gouvernement RDC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Coat_of_arms_of_the_Democratic_Republic_of_the_Congo.svg/1200px-Coat_of_arms_of_the_Democratic_Republic_of_the_Congo.svg.png' },
  { id: 'partner4', name: 'Partenaire 4', logo: 'https://picsum.photos/seed/partner4/200/100' },
  { id: 'partner5', name: 'Partenaire 5', logo: 'https://picsum.photos/seed/partner5/200/100' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/Fondation-mwinda-officiel-108141687646878/', icon: 'Facebook' },
  { name: 'Twitter', url: 'https://twitter.com/Fondationmuinda', icon: 'Twitter' },
  { name: 'Youtube', url: 'https://www.youtube.com/channel/UCwvOgJjt7TQkwnp6roZwgbQ', icon: 'Youtube' },
  { name: 'Instagram', url: 'https://www.instagram.com/fondationmwinda/', icon: 'Instagram' },
];

export const ADMINS = [
  {
    id: '1',
    name: 'Administrateur 1',
    role: 'Coordonnateur National',
    photoUrl: 'https://picsum.photos/seed/admin1/300/300'
  },
  {
    id: '2',
    name: 'Administrateur 2',
    role: 'Secrétaire Général',
    photoUrl: 'https://picsum.photos/seed/admin2/300/300'
  },
  {
    id: '3',
    name: 'Administrateur 3',
    role: 'Trésorier',
    photoUrl: 'https://picsum.photos/seed/admin3/300/300'
  }
];
