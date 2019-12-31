import { Type } from './type.model';

export class Damage {
    public no_damage_to: Type[];
    public half_damage_to: Type[];
    public double_damage_to: Type[];
    public no_damage_from: Type[];
    public half_damage_from: Type[];
    public double_damage_from: Type[];

    public normal_damage_from(_current_type: Type, all_types: Type[]): Type[] {
        return all_types;
    }
}
