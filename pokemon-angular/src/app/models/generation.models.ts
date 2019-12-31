import { Move } from './move.models';
import { Region } from './region.models';
import { Type } from './type.model';

export class Generation {
    public id: number;
    public name: string;
    public main_region: Region;
    public moves: Move;
    public pokemon_species: any;
    public types: Type;
    public version_groups: any;
}
