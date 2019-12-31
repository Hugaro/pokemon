import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule, MatCardModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatTabsModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbilitiesCardComponent } from './ability-card/ability-card.component';
import { AbilitiesCellComponent } from './abilities-cell/abilities-cell.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaCardComponent } from './area-card/area-card.component';
import { AreaComponent } from './areas/areas.component';
import { BerriesComponent } from './berries/berries.component';
import { BerryCardComponent } from './berry-card/berry-card.component';
import { GenerationCardComponent } from './generation-card/generation-card.component';
import { GenerationComponent } from './generation/generation.component';
import { GenerationsComponent } from './generations/generations.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationsComponent } from './locations/locations.component';
import { MachineCardComponent } from './machine-card/machine-card.component';
import { MachineComponent } from './machines/machine.component';
import { MenuComponent } from './menu/menu.component';
import { MoveCardComponent } from './move-card/move-card.component';
import { MovesComponent } from './moves/moves.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCellComponent } from './pokemon-cell/pokemon-cell.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { RegionCardComponent } from './region-card/region-card.component';
import { RegionsComponent } from './regions/regions.component';
import { StatCellComponent } from './stat-cell/stat-cell.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { StatsComponent } from './stats/stats.component';
import { TypeCardComponent } from './type-card/type-card.component';
import { TypeCellComponent } from './type-cell/type-cell.component';
import { TypesComponent } from './types/types.component';
import { WatchCardComponent } from './watch-card/watch-card.component';
import { WatchComponent } from './watch/watch.component';
import { WikiComponent } from './wiki/wiki.component';
import { AbilityComponent } from './ability/ability.component';
import { MoveComponent } from './move/move.component';
import { RegionComponent } from './region/region.component';
import { TypeComponent } from './type/type.component';




@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonCardComponent,
    MenuComponent,
    HeaderComponent,
    TypesComponent,
    TypeCardComponent,
    BerriesComponent,
    BerryCardComponent,
    TypeCellComponent,
    AbilitiesComponent,
    AbilitiesCardComponent,
    AbilitiesCellComponent,
    StatsComponent,
    StatsCardComponent,
    StatCellComponent,
    MachineComponent,
    MovesComponent,
    MoveCardComponent,
    MachineCardComponent,
    GenerationsComponent,
    GenerationComponent,
    GenerationCardComponent,
    WikiComponent,
    RegionsComponent,
    RegionCardComponent,
    LocationCardComponent,
    LocationsComponent,
    AreaComponent,
    AreaCardComponent,
    ItemsComponent,
    PokemonCellComponent,
    WatchComponent,
    WatchCardComponent,
    PokemonComponent,
    AbilityComponent,
    MoveComponent,
    RegionComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
