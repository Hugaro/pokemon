import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilitiesComponent } from './abilities/abilities.component';
import { AreaComponent } from './areas/areas.component';
import { BerriesComponent } from './berries/berries.component';
import { GenerationComponent } from './generation/generation.component';
import { GenerationsComponent } from './generations/generations.component';
import { ItemsComponent } from './items/items.component';
import { LocationsComponent } from './locations/locations.component';
import { MachineComponent } from './machines/machine.component';
import { MovesComponent } from './moves/moves.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { RegionsComponent } from './regions/regions.component';
import { StatsComponent } from './stats/stats.component';
import { TypesComponent } from './types/types.component';
import { WatchComponent } from './watch/watch.component';
import { WikiComponent } from './wiki/wiki.component';
import { RegionComponent } from './region/region.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'pokemon/:name', component: PokemonComponent },
  { path: 'types', component: TypesComponent },
  { path: 'type/:name', component: TypeComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'abilities', component: AbilitiesComponent },
  { path: 'moves', component: MovesComponent },
  { path: 'machines', component: MachineComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'generations', component: GenerationsComponent },
  { path: 'generation/:name', component: GenerationComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'region/:name', component: RegionComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'areas', component: AreaComponent },
  { path: 'wiki', component: WikiComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'watch', component: WatchComponent },
  { path: '**', component: PokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
