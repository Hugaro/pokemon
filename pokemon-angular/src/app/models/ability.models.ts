import { Effect } from './effect.models';
import { Pokemon } from './pokemon.model';

export class Ability {
    public url: string;
    public slot: number;
    public id: number;
    public is_hidden: boolean;
    public name: string;
    public pokemon: Pokemon[];
    public effect_entries: Effect[];
}
