import { projects } from '../../../data/projects';
import ProjectClient from './ProjectClient';

export function generateStaticParams() {
    return Object.keys(projects).map((id) => ({
        id: id,
    }));
}

export default function ProjectPage() {
    return <ProjectClient />;
}
