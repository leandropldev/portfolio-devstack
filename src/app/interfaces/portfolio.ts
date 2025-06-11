export interface Portfolio {
    id: number;
    name: string;
    type: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
}