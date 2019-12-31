import { Area } from './area.models';
import { Region } from './region.models';

export class Location {
    public name: string;
    public areas: Area[];
    public region: Region;
}
