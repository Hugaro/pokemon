import { Damage } from './damage.models';
import { Pokemon } from './pokemon.model';

export class Type {
    public id: number;
    public name: string;
    public url: string;
    public pokemon: Pokemon[];
    public damage_relations: Damage;
}
