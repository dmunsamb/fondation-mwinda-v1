import {
  Shield,
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Leaf,
  Palette,
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
  },
  {
    id: 'culture',
    title: 'CULTURE',
    icon: 'Palette',
    description: 'Renforcer l\'identité culturelle congolaise à travers l\'art et le patrimoine.',
    details: [
      'Renforcer l\'identité culturelle à travers l\'art.',
      'Promouvoir les valeurs, patrimoines et art congolais.'
    ]
  }
];

export const PROJECTS = [
  {
    id: 'orphelinat-lualaba',
    title: 'Construction d\'un orphelinat à Lualaba',
    description: 'Projet ambitieux visant à offrir un foyer sécurisé aux enfants vulnérables de la province du Lualaba.',
    status: 'En cours',
    year: '2025',
    location: 'Lualaba',
    image: 'https://picsum.photos/seed/proj1/600/400',
    highlights: [
      { label: 'Capacité', value: '50+ Enfants' },
      { label: 'Surface', value: '1 200 m²' },
      { label: 'Budget estimé', value: '$150 000' },
      { label: 'Livraison prévue', value: 'Déc. 2025' },
    ],
    body: [
      { type: 'paragraph', text: 'La Fondation Mwinda s\'est engagée dans la construction d\'un orphelinat dans la province du Lualaba, l\'un des projets les plus ambitieux de son histoire. Cette infrastructure est destinée à accueillir plus de 50 enfants vulnérables dans des conditions de confort, de sécurité et de dignité optimales.' },
      { type: 'paragraph', text: 'L\'orphelinat de Lualaba sera un espace de vie complet, intégrant des dortoirs, des salles de classe, un réfectoire, des espaces de jeux et une infirmerie. Chaque détail a été pensé pour offrir aux enfants un environnement chaleureux et propice à leur épanouissement.' },
      { type: 'section', title: 'Notre vision', text: 'Au-delà d\'un simple foyer, cet orphelinat sera un centre de vie où les enfants pourront grandir, apprendre et se préparer à une vie autonome. La FOM s\'engage à assurer le suivi éducatif, nutritionnel et psychologique de chaque enfant accueilli.' },
      { type: 'list', title: 'Ce que comprend le projet', items: [
        'Construction d\'un bâtiment de 1 200 m² sur deux niveaux',
        'Dortoirs séparés garçons/filles avec capacité de 50+ lits',
        'Salles de classe équipées pour l\'enseignement primaire',
        'Cuisine et réfectoire communautaires',
        'Espace de jeux extérieur sécurisé',
        'Infirmerie avec accès aux soins de base',
      ]},
      { type: 'paragraph', text: 'Ce projet est rendu possible grâce à la générosité de nos partenaires et donateurs. La FOM invite toute personne souhaitant contribuer à contacter l\'équipe ou à faire un don directement via la page de soutien.' },
    ]
  },
  {
    id: 'education-paix-uvira',
    title: 'Éducation pour la paix — Uvira',
    description: 'Garantir à 200 enfants déplacés internes un accès durable à l\'éducation de base dans un cadre sécurisant.',
    status: 'En cours',
    year: '2024',
    location: 'Uvira',
    image: 'https://picsum.photos/seed/proj2/600/400',
    highlights: [
      { label: 'Bénéficiaires', value: '200 Enfants' },
      { label: 'Province', value: 'Sud-Kivu' },
      { label: 'Type', value: 'Éducation d\'urgence' },
      { label: 'Statut', value: 'En cours' },
    ],
    body: [
      { type: 'paragraph', text: 'La ville d\'Uvira, dans la province du Sud-Kivu, est l\'une des zones les plus touchées par les déplacements internes en République Démocratique du Congo. Des milliers de familles ont fui les violences armées, privant leurs enfants d\'un accès régulier à l\'éducation.' },
      { type: 'paragraph', text: 'Face à cette réalité, la Fondation Mwinda a lancé le projet "Éducation pour la Paix", visant à garantir à 200 enfants déplacés un accès durable à l\'éducation de base dans un environnement sécurisé et bienveillant.' },
      { type: 'section', title: 'Notre approche', text: 'Le projet combine l\'accès à l\'enseignement formel avec un soutien psychosocial adapté aux enfants ayant vécu des traumatismes. Des enseignants formés et du matériel scolaire sont fournis gratuitement aux bénéficiaires.' },
      { type: 'list', title: 'Actions menées', items: [
        'Identification et enrôlement de 200 enfants déplacés',
        'Mise en place de classes temporaires sécurisées',
        'Formation des enseignants à la pédagogie en situation d\'urgence',
        'Distribution de kits scolaires complets',
        'Suivi psychosocial des enfants et de leurs familles',
        'Sensibilisation des parents à l\'importance de la scolarisation',
      ]},
      { type: 'paragraph', text: 'La FOM travaille en étroite collaboration avec les autorités locales et les organisations humanitaires présentes sur le terrain pour garantir la durabilité et l\'impact de ce projet.' },
    ]
  },
  {
    id: 'perse',
    title: 'Projet PERSE',
    description: 'Atténuation des risques et des incidents de protection dans la sous-division de Tshilenge 1.',
    status: 'En cours',
    year: '2024',
    location: 'Tshilenge',
    image: 'https://picsum.photos/seed/proj3/600/400',
    highlights: [
      { label: 'Zone', value: 'Tshilenge 1' },
      { label: 'Province', value: 'Kasaï-Oriental' },
      { label: 'Focus', value: 'Protection' },
      { label: 'Statut', value: 'En cours' },
    ],
    body: [
      { type: 'paragraph', text: 'Le Projet PERSE (Protection et Équilibre pour la Résilience des Sociétés Exposées) est une initiative de la Fondation Mwinda visant à atténuer les risques et les incidents de protection dans la sous-division de Tshilenge 1, dans la province du Kasaï-Oriental.' },
      { type: 'paragraph', text: 'Cette zone, comme beaucoup d\'autres dans le Centre de la RDC, est confrontée à des défis sécuritaires importants qui exposent les communautés — en particulier les femmes et les enfants — à diverses formes de violence et d\'abus.' },
      { type: 'section', title: 'Objectifs du projet', text: 'Le projet PERSE vise à renforcer les mécanismes de protection communautaire, à sensibiliser les populations sur leurs droits, et à établir des réseaux de référencement pour les survivants de violence.' },
      { type: 'list', title: 'Axes d\'intervention', items: [
        'Mise en place de comités de protection communautaire',
        'Formation des leaders locaux sur les droits humains et la protection de l\'enfance',
        'Création de mécanismes de signalement des incidents de protection',
        'Prise en charge des survivants de violences',
        'Sensibilisation des ménages aux risques de protection',
        'Collaboration avec les autorités locales et les partenaires humanitaires',
      ]},
      { type: 'paragraph', text: 'Le Projet PERSE s\'inscrit dans la continuité des engagements de la FOM pour la protection des personnes vulnérables, notamment les femmes, les jeunes filles et les enfants exposés à des environnements à risques.' },
    ]
  },
  {
    id: 'ecole-mwinda',
    title: 'École Mwinda Notre Avenir',
    description: 'Ouverture de l\'école Mwinda Notre Avenir à Kinshasa, offrant un accès à l\'éducation de qualité aux enfants du quartier Bandara.',
    status: 'Réalisé',
    year: '2019',
    location: 'Kinshasa',
    image: 'https://picsum.photos/seed/ecole-mwinda/600/400',
    highlights: [
      { label: 'Inauguration', value: '20 déc. 2019' },
      { label: 'Localisation', value: 'Bandara, Kinshasa' },
      { label: 'Type', value: 'École primaire' },
      { label: 'Statut', value: 'Réalisé' },
    ],
    body: [
      { type: 'paragraph', text: 'Le 20 décembre 2019, la Fondation Mwinda a officiellement inauguré l\'École Mwinda Notre Avenir, un établissement scolaire situé dans le quartier Bandara de Kinshasa. Cette inauguration marque une étape majeure dans l\'engagement de la FOM pour l\'accès à l\'éducation.' },
      { type: 'paragraph', text: 'Fondée sur la conviction que l\'éducation est le levier le plus puissant pour transformer une communauté, l\'école accueille des enfants issus de familles vulnérables qui n\'auraient pas pu accéder à un enseignement de qualité sans ce soutien.' },
      { type: 'section', title: 'Une réalisation collective', text: 'Ce projet est l\'aboutissement de plusieurs mois de travail acharné de l\'équipe de la FOM, de ses partenaires et de ses donateurs. Il témoigne de la capacité de la Fondation à mobiliser des ressources et des énergies autour d\'un objectif commun : offrir un avenir meilleur aux enfants congolais.' },
      { type: 'list', title: 'Ce que propose l\'école', items: [
        'Enseignement primaire de qualité dans un environnement sécurisé',
        'Encadrement par des enseignants qualifiés et engagés',
        'Accès à du matériel pédagogique adapté',
        'Programmes d\'alphabétisation pour adultes',
        'Suivi individuel de chaque élève',
      ]},
      { type: 'quote', text: 'L\'éducation est la clé qui ouvre toutes les portes. En scolarisant un enfant, nous investissons dans l\'avenir de toute une nation.' },
      { type: 'paragraph', text: 'Depuis son ouverture, l\'École Mwinda Notre Avenir est devenue un symbole d\'espoir pour le quartier Bandara. La Fondation Mwinda continue de soutenir l\'établissement pour garantir la qualité de l\'enseignement dispensé.' },
    ]
  },
  {
    id: 'pharmacie-lubumbashi',
    title: 'Pharmacie Mwinda de Lubumbashi',
    description: 'Ouverture d\'une pharmacie communautaire à Lubumbashi offrant des médicaments gratuits aux veuves et filles-mères dans le besoin.',
    status: 'Réalisé',
    year: '2019',
    location: 'Lubumbashi',
    image: 'https://picsum.photos/seed/pharmacie-mwinda/600/400',
    highlights: [
      { label: 'Inauguration', value: '28 déc. 2019' },
      { label: 'Localisation', value: 'Lubumbashi' },
      { label: 'Bénéficiaires', value: 'Veuves & filles-mères' },
      { label: 'Statut', value: 'Réalisé' },
    ],
    body: [
      { type: 'paragraph', text: 'Le 28 décembre 2019, une délégation de la Fondation Mwinda s\'est rendue à Lubumbashi pour officialiser l\'ouverture de la Pharmacie Mwinda, un espace de santé communautaire dédié aux personnes les plus vulnérables de la ville.' },
      { type: 'paragraph', text: 'Cette pharmacie s\'inscrit dans le cadre de l\'axe "Protection de la Santé" de la FOM. Elle a pour mission principale de fournir des médicaments gratuits ou à prix réduit aux veuves, aux filles-mères et aux personnes dans une situation de grande précarité.' },
      { type: 'section', title: 'Un accès aux soins pour tous', text: 'À Lubumbashi, comme dans de nombreuses villes congolaises, l\'accès aux médicaments de base reste un luxe pour une large partie de la population. La Pharmacie Mwinda veut changer cela en créant un pont entre les ressources disponibles et les personnes qui en ont le plus besoin.' },
      { type: 'list', title: 'Services proposés', items: [
        'Distribution gratuite de médicaments essentiels aux veuves et filles-mères',
        'Consultations et orientations médicales de base',
        'Sensibilisation à l\'hygiène et à la prévention des maladies',
        'Collaboration avec les centres de santé locaux',
        'Suivi des bénéficiaires réguliers',
      ]},
      { type: 'paragraph', text: 'L\'équipe FOM Lubumbashi, renforcée par la délégation venue de Kinshasa, a accueilli la cérémonie d\'inauguration avec fierté et détermination. Cette réalisation est le fruit d\'une mobilisation collective portée par la vision de la Fondation Mwinda.' },
    ]
  },
];

export const BLOG_POSTS = [
  {
    id: 'tout-savoir',
    title: 'Tout savoir sur la FONDATION MWINDA (FOM)',
    excerpt: 'Plus les années passent, plus la Fondation Mwinda (FOM) ne cesse de faire briller la vie des Congolaises et Congolais par ses actions humanitaires concrètes.',
    date: '2024-02-05',
    image: 'https://picsum.photos/seed/fom-blog1/600/400',
    body: [
      { type: 'paragraph', text: 'Plus les années passent, plus la Fondation Mwinda (FOM) ne cesse de faire briller la vie des Congolaises et Congolais par ses actions humanitaires. Depuis sa création le 17 octobre 2018, la FOM est une organisation non gouvernementale à but non lucratif qui œuvre inlassablement pour le bien-être des populations vulnérables de la République Démocratique du Congo.' },
      { type: 'section', title: 'Une fondation née d\'une vision', text: 'La Fondation Mwinda est née d\'une volonté profonde de transformer la réalité congolaise à travers des actions concrètes et durables. En six ans d\'existence, elle a développé des programmes couvrant l\'éducation, la santé, la protection des femmes et des jeunes filles, la nutrition et la sécurité alimentaire, et l\'environnement.' },
      { type: 'list', title: 'Champs d\'action principaux', items: [
        'Éducation : scolarisation, alphabétisation, formation professionnelle',
        'Santé : soins primaires, prise en charge des survivants de violences',
        'Protection globale de la fille et de la femme',
        'Autonomisation féminine et promotion du leadership féminin',
        'Environnement : sensibilisation, agriculture durable',
        'Culture : promotion du patrimoine et des valeurs congolaises',
      ]},
      { type: 'section', title: 'Une présence nationale', text: 'La FOM est représentée dans 10 provinces de la RDC : Kinshasa, Kasaï, Lualaba, Kongo-Central, Nord-Kivu, Sud-Kivu, Tanganyika, Sankuru et bien d\'autres. Cette présence capillaire lui permet d\'atteindre les populations les plus reculées et de répondre aux besoins spécifiques de chaque territoire.' },
      { type: 'list', title: 'Nos valeurs fondamentales', items: [
        'Unité africaine : croire en la force du collectif',
        'Partenariat : construire ensemble des solutions durables',
        'Entraide : se soutenir mutuellement en toutes circonstances',
        'Équité : garantir un traitement juste pour tous',
        'Respect des différences : valoriser la diversité comme une richesse',
      ]},
      { type: 'section', title: 'Les réalisations 2023', text: 'L\'année 2023 a été marquée par de nombreuses activités : journées internationales de la femme célébrées dans plusieurs provinces, formations en entrepreneuriat, visites aux enfants en situation difficile, distributions de fournitures scolaires, et ateliers de sensibilisation dans les communautés.' },
      { type: 'quote', text: 'Nous pensons que le développement d\'un pays doit passer par le développement personnel de l\'individu. Chaque personne soutenue devient un acteur du changement pour sa communauté.' },
      { type: 'paragraph', text: 'La mission de la FOM vise à soutenir le bien-être des enfants, des jeunes et des familles en renforçant les besoins fondamentaux de l\'être humain selon la pyramide de Maslow. Portée par les valeurs d\'espérance, de force et de solidarité, la Fondation Mwinda continue de tracer son chemin vers un Congo meilleur.' },
    ]
  },
  {
    id: 'hectares-mbuji',
    title: 'Acquisition de 100 hectares à Mbuji-Mayi',
    excerpt: 'Félicitations à la grande équipe de la FONDATION MWINDA pour l\'obtention de 100 hectares à Mbuji-Mayi. La FOM remercie particulièrement l\'OMS pour son soutien décisif dans ce projet.',
    date: '2021-10-26',
    image: 'https://picsum.photos/seed/fom-blog2/600/400',
    body: [
      { type: 'paragraph', text: 'C\'est une grande victoire pour la Fondation Mwinda et pour toutes les communautés de Mbuji-Mayi. La FOM a officialisé l\'acquisition de 100 hectares de terres dans la région de Mbuji-Mayi, une avancée majeure dans le cadre de son engagement pour la lutte contre la famine et le développement agricole durable.' },
      { type: 'paragraph', text: 'Ce projet d\'envergure est le fruit d\'un travail acharné et d\'un partenariat solide avec l\'Organisation Mondiale de la Santé (OMS), qui a fourni 1 800 semences permettant l\'exploitation immédiate de 20 hectares. La FOM tient à remercier chaleureusement l\'OMS pour cette contribution décisive.' },
      { type: 'section', title: 'Un projet contre la famine', text: 'La région du Kasaï-Oriental, dont Mbuji-Mayi est la capitale, est l\'une des zones les plus touchées par l\'insécurité alimentaire en RDC. L\'acquisition de ces 100 hectares permettra à la Fondation Mwinda de développer une agriculture à grande échelle, de former des agriculteurs locaux et de créer des réserves alimentaires pour les populations vulnérables.' },
      { type: 'list', title: 'Objectifs du projet agricole', items: [
        'Mise en culture progressive des 100 hectares sur 3 ans',
        'Formation des agriculteurs locaux aux techniques durables',
        'Production de cultures vivrières pour les besoins communautaires',
        'Création d\'emplois locaux dans le secteur agricole',
        'Développement d\'une filière de distribution alimentaire',
        'Lutte directe contre la malnutrition des enfants',
      ]},
      { type: 'paragraph', text: 'Dans un premier temps, 20 hectares sont déjà en cours d\'exploitation grâce aux semences fournies par l\'OMS. Les résultats de cette première saison serviront de base pour planifier l\'extension progressive des cultures sur l\'ensemble du terrain.' },
      { type: 'quote', text: 'Merci à tous ! Grâce à votre soutien et à notre partenariat avec l\'OMS, nous posons aujourd\'hui les bases d\'une sécurité alimentaire durable pour les habitants de Mbuji-Mayi.' },
    ]
  },
  {
    id: 'inauguration-ecole',
    title: 'L\'inauguration de l\'école Mwinda Notre Avenir',
    excerpt: 'Le 20 décembre 2019, la Fondation Mwinda a inauguré son école à Kinshasa, ouvrant ses portes aux enfants du quartier pour leur offrir un avenir meilleur par l\'éducation.',
    date: '2019-12-20',
    image: 'https://picsum.photos/seed/ecole-inaug/600/400',
    body: [
      { type: 'paragraph', text: 'Le 20 décembre 2019 restera une date gravée dans l\'histoire de la Fondation Mwinda. Ce jour-là, l\'équipe de la FOM, entourée de ses partenaires, des familles du quartier et de nombreux enfants, a célébré l\'inauguration officielle de l\'École Mwinda Notre Avenir, à Kinshasa.' },
      { type: 'paragraph', text: 'Ce moment symbolique marque l\'aboutissement de mois de travail, de collecte de fonds, de construction et de préparation. Il représente surtout la concrétisation d\'une conviction profonde : l\'éducation est le premier pas vers la dignité et l\'autonomie.' },
      { type: 'section', title: 'Un quartier transformé', text: 'L\'école est implantée dans le quartier Bandara de Kinshasa, une zone où de nombreuses familles vivent dans des conditions précaires et où l\'accès à un enseignement de qualité était jusqu\'ici limité. L\'ouverture de cet établissement change concrètement la réalité de ces familles.' },
      { type: 'list', title: 'Ce que signifie cette inauguration', items: [
        'Un accès à l\'éducation pour des dizaines d\'enfants du quartier',
        'Des emplois créés pour des enseignants et du personnel local',
        'Un espace sécurisé et stimulant pour l\'apprentissage',
        'Un symbole d\'espoir pour toute la communauté',
        'La preuve que la FOM tient ses engagements',
      ]},
      { type: 'quote', text: 'Chaque enfant qui franchit les portes de cette école porte avec lui le futur du Congo. C\'est pour eux que nous nous battons chaque jour.' },
      { type: 'paragraph', text: 'La cérémonie d\'inauguration a rassemblé des représentants locaux, des membres de la FOM venus de Belgique et de RDC, ainsi que les familles des premiers élèves. Un moment d\'émotion et de fierté collective que l\'équipe Mwinda n\'est pas près d\'oublier.' },
    ]
  },
  {
    id: 'pharmacie-lubumbashi',
    title: 'Inauguration de la pharmacie Mwinda de Lubumbashi',
    excerpt: 'Le 28 décembre 2019, la Fondation Mwinda a inauguré sa pharmacie communautaire à Lubumbashi, offrant des médicaments gratuits aux veuves et filles-mères dans le besoin.',
    date: '2019-12-28',
    image: 'https://picsum.photos/seed/pharmacie-inaug/600/400',
    body: [
      { type: 'paragraph', text: 'Le 28 décembre 2019, une délégation de la Fondation Mwinda s\'est rendue à Lubumbashi pour une occasion exceptionnelle : l\'inauguration de la Pharmacie Mwinda, un espace de santé communautaire créé pour répondre aux besoins médicaux des personnes les plus vulnérables de la ville.' },
      { type: 'paragraph', text: 'La délégation a d\'abord retrouvé les membres de l\'équipe FOM Lubumbashi, des hommes et des femmes engagés au quotidien pour faire vivre les valeurs de la Fondation sur le terrain. Ensemble, ils ont célébré l\'ouverture officielle de cette pharmacie, fruit d\'un effort collectif remarquable.' },
      { type: 'section', title: 'Des médicaments pour ceux qui en ont le plus besoin', text: 'La Pharmacie Mwinda de Lubumbashi a une mission claire : fournir des médicaments essentiels gratuitement aux veuves et aux filles-mères qui n\'ont pas les moyens de se soigner. Dans une ville où l\'accès aux soins reste un défi quotidien pour beaucoup, cette initiative représente un filet de sécurité vital.' },
      { type: 'list', title: 'Ce que la pharmacie offre', items: [
        'Médicaments essentiels gratuits pour les veuves et filles-mères',
        'Orientations médicales vers les structures de santé adaptées',
        'Sensibilisation à la prévention et à l\'hygiène',
        'Accompagnement des bénéficiaires dans leur parcours de soins',
        'Collaboration avec les centres de santé et hôpitaux locaux',
      ]},
      { type: 'paragraph', text: 'Cette réalisation illustre parfaitement l\'approche holistique de la FOM : intervenir là où les besoins sont les plus criants, avec des solutions concrètes et accessibles. La Pharmacie Mwinda de Lubumbashi est un exemple de ce que la solidarité peut accomplir.' },
      { type: 'quote', text: 'Soigner, c\'est respecter la vie. Avec cette pharmacie, nous affirmons que chaque être humain mérite d\'accéder aux soins, quelle que soit sa condition.' },
    ]
  },
  {
    id: 'partenariat-kintambo',
    title: 'Signature du partenariat avec le Home de vieillards de Kintambo',
    excerpt: 'Le 23 décembre 2019, la Fondation Mwinda a signé un contrat de partenariat officiel avec le Home de vieillards de Kintambo, renforçant son engagement envers les personnes âgées vulnérables.',
    date: '2019-12-23',
    image: 'https://picsum.photos/seed/kintambo/600/400',
    body: [
      { type: 'paragraph', text: 'Le 23 décembre 2019, la Fondation Mwinda a signé un contrat de partenariat officiel avec le Home de vieillards de Kintambo, à Kinshasa. Cette signature marque une nouvelle étape dans l\'engagement de la FOM envers les personnes âgées vulnérables, souvent oubliées dans les programmes humanitaires traditionnels.' },
      { type: 'paragraph', text: 'Le Home de vieillards de Kintambo accueille des personnes âgées en situation de précarité, sans ressources et parfois abandonnées par leurs familles. En s\'associant à cet établissement, la Fondation Mwinda affirme que la solidarité intergénérationnelle est au cœur de ses valeurs.' },
      { type: 'section', title: 'Un partenariat fondé sur des valeurs communes', text: 'Ce partenariat repose sur une conviction partagée : toute personne, quel que soit son âge, mérite dignité, soins et attention. La FOM s\'engage à apporter un soutien régulier au Home, qu\'il soit matériel, financier ou humain, pour améliorer les conditions de vie des résidents.' },
      { type: 'list', title: 'Engagements du partenariat', items: [
        'Visites régulières et accompagnement des résidents',
        'Apport de denrées alimentaires et produits d\'hygiène',
        'Soutien aux activités de bien-être et de loisirs',
        'Mobilisation de bénévoles pour animer des ateliers',
        'Plaidoyer pour les droits des personnes âgées',
      ]},
      { type: 'paragraph', text: 'La signature de ce partenariat, quelques jours avant Noël, a pris une dimension particulièrement symbolique. Elle envoie un message fort : personne ne doit être laissé de côté, encore moins à l\'approche des fêtes.' },
      { type: 'quote', text: 'Prendre soin de nos aînés, c\'est honorer notre mémoire collective et reconnaître ce que nous leur devons. Ce partenariat est un acte de respect et de gratitude.' },
    ]
  },
  {
    id: 'je-suis-goma',
    title: 'Je suis Goma, merci',
    excerpt: 'Grâce à votre générosité, la Fondation Mwinda a pu vêtir plus de 60 enfants orphelins sinistrés de Goma. Un geste simple, un impact immense.',
    date: '2021-07-01',
    image: 'https://picsum.photos/seed/goma-merci/600/400',
    body: [
      { type: 'paragraph', text: 'C\'est avec une immense gratitude que la Fondation Mwinda partage les résultats de l\'opération "Je suis Goma". Grâce à la mobilisation extraordinaire de nos donateurs et soutiens, l\'équipe de la FOM a pu vêtir plus de 60 enfants orphelins sinistrés touchés par la situation humanitaire dramatique à Goma.' },
      { type: 'paragraph', text: 'Goma, ville meurtrie par les éruptions volcaniques et les conflits armés, compte des milliers d\'enfants vulnérables qui ont tout perdu. Face à cette réalité, la Fondation Mwinda a voulu poser un geste concret, visible et humain : offrir des vêtements neufs à ceux qui n\'en avaient plus.' },
      { type: 'section', title: 'Un geste simple, un impact profond', text: 'Un vêtement, ce n\'est pas seulement un tissu. C\'est de la dignité. C\'est la chaleur d\'un adulte qui dit à un enfant : "tu comptes, tu existes, tu mérites." Pour chacun des 60 enfants habillés lors de cette opération, ce moment restera gravé dans leur mémoire.' },
      { type: 'quote', text: 'C\'est par de petits gestes comme le vôtre que nous pouvons exister. Nous vous remercions de tout cœur pour votre générosité. — L\'équipe Fondation Mwinda' },
      { type: 'paragraph', text: 'La Bible dit en Actes 20:35 : "Il y a plus de bonheur à donner qu\'à recevoir." C\'est cette conviction qui anime chaque membre de la FOM au quotidien. Et c\'est grâce à des donateurs comme vous que cette parole devient réalité sur le terrain.' },
      { type: 'list', title: 'Ce que votre soutien a permis', items: [
        'Plus de 60 enfants orphelins vêtus',
        'Des vêtements adaptés à chaque enfant selon son âge',
        'Un moment de joie et de dignité retrouvée',
        'Un message d\'amour adressé aux plus vulnérables',
        'La preuve que la solidarité internationale fonctionne',
      ]},
      { type: 'paragraph', text: 'La Fondation Mwinda continue son travail à Goma et dans toutes les régions où des enfants ont besoin de soutien. Si vous souhaitez contribuer à la prochaine opération, rendez-vous sur notre page "Soutenez-nous". Ensemble, nous pouvons faire encore plus.' },
    ]
  },
];

export const EVENTS = [
  {
    id: "senegal",
    status: "upcoming",
    title: "Evenement Senegal",
    date: "01-03 Mai 2026",
    location: "Senegal 🇸🇳",
    description: "La Fondation Mwinda participe a un evenement majeur au Senegal, renforçant ses liens avec la diaspora africaine et ses partenaires sur le continent.",
    flyer: null,
  },
  {
    id: "expo-suisse",
    status: "upcoming",
    title: "Exposition Suisse",
    date: "Juin - Juillet 2026",
    location: "Suisse 🇨🇭",
    description: "La Fondation Mwinda expose ses projets et sa vision a travers une exposition culturelle en Suisse, a la rencontre de la diaspora congolaise et de partenaires europeens.",
    flyer: null,
  },
  {
    id: "expo-belgique",
    status: "upcoming",
    title: "Exposition Belgique",
    date: "Octobre 2026",
    location: "Belgique 🇧🇪",
    description: "Une exposition en Belgique pour presenter les actions de la Fondation Mwinda et mobiliser la diaspora congolaise autour de nos projets humanitaires.",
    flyer: null,
  },
  {
    id: "expo-milan",
    status: "upcoming",
    title: "Exposition Milan",
    date: "Octobre 2026",
    location: "Milan, Italie 🇮🇹",
    description: "La Fondation Mwinda sera presente a Milan pour une exposition mettant en lumiere la richesse culturelle et les initiatives humanitaires en RDC.",
    flyer: null,
  },
  {
    id: "inauguration-lualaba",
    status: "upcoming",
    title: "Inauguration de l'orphelinat Lualaba",
    date: "Juillet 2027",
    location: "Lualaba, RDC 🇨🇩",
    description: "Inauguration officielle de l'orphelinat Lualaba, un projet phare de la Fondation Mwinda offrant un foyer digne a des dizaines d'enfants vulnerables.",
    flyer: null,
  },
  {
    id: "anniversaire-fom-2020",
    status: "past",
    title: "1er Anniversaire de la Fondation Mwinda",
    date: "17 Octobre 2020",
    location: "N'Sele, Kinshasa 🇨🇩",
    description: "La Fondation Mwinda celebre son premier anniversaire aupres des personnes vulnerables. Un moment de partage, de reflexion et d'inspiration au coeur de sa mission.",
    flyer: "/images/event/La FOM célèbre son premier anniversaire auprès des personnes vulnérables le 17 octobre 2020.webp",
  },
  {
    id: "conference-culture-2021",
    status: "past",
    title: "Conference Culture & Developpement",
    date: "15 Juillet 2021",
    location: "Kinshasa, RDC 🇨🇩",
    description: "Une conference dediee au role de la culture dans le developpement des communautes congolaises, reunissant artistes, intellectuels et acteurs humanitaires.",
    flyer: "/images/event/Conférence \"Comment vendre la culture congolaise\" le 15 juillet 2021.webp",
  },
  {
    id: "barbecue-mboka-2021",
    status: "past",
    title: "Barbecue Mboka - Soiree de solidarite",
    date: "5 Juin 2021",
    location: "Kinshasa, RDC 🇨🇩",
    description: "Une soiree conviviale et festive organisee pour renforcer les liens au sein de la communaute FOM et recolter des fonds pour nos projets sur le terrain.",
    flyer: "/images/event/Barbecue mboka nabiso 5 juin 2021.webp",
  },
  {
    id: "journee-paludisme-2021",
    status: "past",
    title: "Journee Mondiale contre le Paludisme",
    date: "25 Avril 2021",
    location: "Kinshasa, RDC 🇨🇩",
    description: "La Fondation Mwinda a marque la Journee Mondiale contre le Paludisme par des actions de sensibilisation et de distribution de moustiquaires dans les quartiers vulnerables.",
    flyer: "/images/event/Conférence de lutte contre le paludisme, 21 avril 2021.webp",
  },
  {
    id: "journee-femme-2021",
    status: "past",
    title: "Journee Internationale de la Femme",
    date: "8 Mars 2021",
    location: "Kinshasa, RDC 🇨🇩",
    description: "La FOM a celebre la Journee Internationale de la Femme en honorant les femmes qui portent nos communautes et en lancant des initiatives en faveur de leur autonomisation.",
    flyer: "/images/event/Journée Internationale de la Femme, 8 mars 2021.webp",
  },
  {
    id: "inauguration-pharmacie-2019",
    status: "past",
    title: "Inauguration de la Pharmacie Communautaire",
    date: "28 Decembre 2019",
    location: "Lubumbashi, RDC 🇨🇩",
    description: "Inauguration de la pharmacie communautaire de Lubumbashi, rendant les medicaments essentiels accessibles aux populations a faibles revenus.",
    flyer: null,
  },
  {
    id: "inauguration-ecole-2019",
    status: "past",
    title: "Inauguration de l'ecole primaire",
    date: "20 Decembre 2019",
    location: "Kinshasa, RDC 🇨🇩",
    description: "Inauguration d'une ecole primaire construite par la Fondation Mwinda, offrant un acces a l'education a des centaines d'enfants issus de milieux defavorises.",
    flyer: null,
  },
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
    role: 'Présidente',
    photoUrl: 'https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/45887856_2041216352635410_8592004706107129856_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=8p0noB-8eg4Q7kNvwFzE21k&_nc_oc=AdlmfgcBLa26lUZeOUV5-sivzidCHJ2zZWLn1PP0P8sy0vSIu8gRfbQWp7yuNRg-HnY&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=bAEnxIHO0jfqVWBJfZZN6w&_nc_ss=8&oh=00_Afz4cUZSMS5WtAs3Vj8pe72Q1K3bIHl17KsCwuL2dbZb4Q&oe=69D65861'
  },
  {
    id: '3',
    name: 'Micheline KINZOLA',
    role: 'Secrétaire',
    photoUrl: '/images/Micheline KINZOLA.jpeg'
  },
  {
    id: '4',
    name: 'Sylvie KOROLENCHUK',
    role: 'Trésorière',
    photoUrl: '/images/Sylvie KOROLENCHUK.jpeg'
  }
];
