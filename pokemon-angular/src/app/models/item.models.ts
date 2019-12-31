import { Category } from './categoty.models';
import { Effect } from './effect.models';
import { Sprites } from './sprites.models';

export class Item {
    public url: string;
    public name: string;
    public sprites: Sprites;
    public category: Category;
    public effect_entries: Effect [];
}
