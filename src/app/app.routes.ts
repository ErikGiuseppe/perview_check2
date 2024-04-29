import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home/home-component';
import { RotasComponentComponent } from './components/rotas-component/rotas-component.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { TabelaEstadoComponent } from './components/tabela-estado/tabela-estado.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'nova-rota', component: RotasComponentComponent },
  { path: 'cliente/:id', component: ClienteDetailComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'pokemon', component: ListPokemonsComponent },
  { path: 'estado', component: TabelaEstadoComponent },
  { path: '**', component: HomeComponentComponent },
];
