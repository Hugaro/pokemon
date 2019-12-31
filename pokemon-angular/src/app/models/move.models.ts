import { Effect } from './effect.models';

export class Move {
    public name: string;
    public effect_entries: Effect[];
    public accuracy: number;
    public power: number;
    public pp: number;
    public priority: number;
}
