import { Ability } from './ability.models';
import { Item } from './item.models';
import { Move } from './move.models';
import { Spicie } from './specie.model';
import { Sprites } from './sprites.models';
import { Stat } from './stat.models';
import { Type } from './type.model';

export class Pokemon {
    public id: number;
    public spicie: Spicie;
    public base_experience: number;
    public name: string;
    public sprites: Sprites;
    public types: Type[];
    public abilities: Ability[];
    public stats: Stat[];
    public is_default: boolean;
    public height: number;
    public weight: number;
    public moves: Move[];
    public forms: any;
    public held_items: Item[];
    public location_area_encounters: any;
    public game_indices: any;
}
