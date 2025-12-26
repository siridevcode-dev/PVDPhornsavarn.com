import ServiceClient from './ServiceClient';
import { serviceData } from '../../../data/services';

export function generateStaticParams() {
    return Object.keys(serviceData).map((id) => ({
        id: id,
    }));
}

export default function ServicePage() {
    return <ServiceClient />;
}
