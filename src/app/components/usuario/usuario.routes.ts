import { Routes } from '@angular/router';

import { UsarioNuevoComponent } from './usario-nuevo.component';
import { UsarioEditarComponent } from './usario-editar.component';
import { UsarioDetalleComponent } from './usario-detalle.component';

export const USUARIO_ROUTES: Routes = [
    {path: 'nuevo', component: UsarioNuevoComponent},
            {path: 'editar', component: UsarioEditarComponent},
            {path: 'detalle', component: UsarioDetalleComponent},
            {path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
