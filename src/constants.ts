import { 
  Shield, 
  GraduationCap, 
  HeartPulse, 
  TrendingUp, 
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
    title: 'PROTECTION DE LA SANTÉ',
    icon: 'HeartPulse',
    description: 'Soins de santé primaires et soutien aux survivants de violences.',
    details: [
      'Centre de santé pour la prise en charge médicale des survivants de violences sexuelles.',
      'Accès aux soins de santé primaires pour la communauté locale.',
      'Pharmacie à Lubumbashi offrant des médicaments gratuits aux veuves et filles-mères.'
    ]
  },
  {
    id: 'autonomisation',
    title: 'AUTONOMISATION & ÉCONOMIE',
    icon: 'TrendingUp',
    description: 'Soutien à l\'entrepreneuriat et renforcement des capacités économiques.',
    details: [
      'Accompagnement des initiatives entrepreneuriales locales.',
      'Formation en gestion financière et création d\'activités génératrices de revenus.',
      'Soutien à l\'autonomisation des femmes et des jeunes.'
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
    location: 'Lualaba',
    image: 'https://picsum.photos/seed/proj1/600/400'
  },
  {
    id: 'education-paix-uvira',
    title: 'Éducation pour la paix - Uvira',
    description: 'Garantir à 200 enfants déplacés internes un accès durable à l’éducation de base dans un cadre sécurisant.',
    status: 'En cours',
    location: 'Uvira',
    image: 'https://picsum.photos/seed/proj2/600/400'
  },
  {
    id: 'perse',
    title: 'Projet PERSE',
    description: 'Atténuation des risques et des incidents de protection dans la sous-division de Tshilenge 1.',
    status: 'En cours',
    location: 'Tshilenge',
    image: 'https://picsum.photos/seed/proj3/600/400'
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
    id: 'senegal',
    title: 'Événement Sénégal',
    date: '01-03 Mai 2026',
    location: 'Sénégal 🇸🇳',
    description: 'Événement au Sénégal.'
  },
  {
    id: 'expo-suisse',
    title: 'Exposition',
    date: 'Juin-Juillet 2026',
    location: 'Suisse',
    description: 'Exposition en Suisse.'
  },
  {
    id: 'expo-belgique',
    title: 'Exposition',
    date: 'Octobre 2026',
    location: 'Belgique',
    description: 'Exposition en Belgique.'
  },
  {
    id: 'inauguration-lualaba',
    title: 'Inauguration de l’orphelinat Lualaba',
    date: 'Juillet 2027',
    location: 'Lualaba, RDC',
    description: 'Inauguration officielle de l’orphelinat Lualaba.'
  }
];

export const PARTNERS = [
  { id: 'partner1', name: 'Partenaire 1', logo: 'https://lh3.googleusercontent.com/d/13x72uF8qu40jo1ltn_ptGs3059XFrEdx' },
  { id: 'partner2', name: 'Partenaire 2', logo: 'https://lh3.googleusercontent.com/d/1hydLoF1Sj8rtibUjhT4YRIZvVEf1F-U7' },
  { id: 'partner3', name: 'Partenaire 3', logo: 'https://lh3.googleusercontent.com/d/1ncetFf-P-1hPu3NeCz-p2oPO9ojghi_P' },
  { id: 'partner4', name: 'Partenaire 4', logo: 'data:image/png;base64,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' },
  { id: 'partner5', name: 'DMD Consulting', logo: 'https://dmdconsulting.be/wp-content/uploads/2022/11/Logo-Full-HD-fond-transparent-small.png' },
  { id: 'partner6', name: 'Partenaire 6', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUxD9W4BvrvUUa4hEGwQv6bjgTo1hH_eypg&s' },
  { id: 'partner7', name: 'Partenaire 7', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa7dcHWZrOioC9elgtwfgQIHM-x34nuR_Y72UIm4cp5WnI3sI' },
  { id: 'partner8', name: 'OMS', logo: 'https://tunisia.un.org/sites/default/files/styles/featured_image/public/2023-06/OMS%20Logo.png?itok=gxo9z7Yw' },
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
    name: 'Nancy Mwinda',
    role: 'Fondatrice',
    photoUrl: 'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/486580071_967760498897816_2665021292103335992_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=zaitq6n1yjwQ7kNvwEoiv_5&_nc_oc=Adm6xyC4PtqzceLQPurzDdYM6MbLwFC2bInPJwdBZMoiYCGRYGit6S_utuwjzrBNVeE&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=oTA-mAPmQRjt2zIZrld3Bg&_nc_ss=8&oh=00_AfzrGe34RLAHsplvJWdIJJQw7L6kpwsWW-QRVtGDT6zBvg&oe=69B4EC5A'
  },
  {
    id: '2',
    name: 'Ange Olenga',
    role: 'Présidente FOM',
    photoUrl: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/45887856_2041216352635410_8592004706107129856_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=8p0noB-8eg4Q7kNvwFzE21k&_nc_oc=AdlmfgcBLa26lUZeOUV5-sivzidCHJ2zZWLn1PP0P8sy0vSIu8gRfbQWp7yuNRg-HnY&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=bAEnxIHO0jfqVWBJfZZN6w&_nc_ss=8&oh=00_Afz4cUZSMS5WtAs3Vj8pe72Q1K3bIHl17KsCwuL2dbZb4Q&oe=69D65861'
  },
  {
    id: '3',
    name: 'Secrétaire',
    role: 'Secrétaire',
    photoUrl: 'https://picsum.photos/seed/secretaire/300/300'
  },
  {
    id: '4',
    name: 'Trésorier',
    role: 'Trésorier',
    photoUrl: 'https://picsum.photos/seed/tresorier/300/300'
  }
];
