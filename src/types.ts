import { LucideIcon } from 'lucide-react';

export interface Admin {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'En cours' | 'Terminé';
  location: string;
}

export interface InterventionArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}
