import { VersionGroup } from './version-group.models';

export class Region {
    public name: string;
    public pokedexes: any;
    public locations: Location[];
    public version_groups: VersionGroup[];
}
