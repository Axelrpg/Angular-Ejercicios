import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: '1-hello-world',
                title: 'Hola Mundo',
                loadComponent: () => import('./dashboard/pages/1-hello-world/hello-world.component')
            },
            {
                path: '2-interpolation',
                title: 'Interpolación',
                loadComponent: () => import('./dashboard/pages/2-interpolation/interpolation.component')
            },
            {
                path: '3-property-binding-y-event-binding',
                title: 'Propiedad y Event Binding',
                loadComponent: () => import('./dashboard/pages/3-property-binding-y-event-binding/property-binding-y-event-binding.component')
            },
            {
                path: '4-structural-directives',
                title: 'Directivas Estructurales',
                loadComponent: () => import('./dashboard/pages/4-structural-directives/structural-directives.component')
            },
            {
                path: '5-pipes',
                title: 'Pipes',
                loadComponent: () => import('./dashboard/pages/5-pipes/pipes.component')
            },
            {
                path: '6-reactive-form',
                title: 'Formulario Reactivo',
                loadComponent: () => import('./dashboard/pages/6-reactive-form/reactive-form.component')
            },
            {
                path: '',
                redirectTo: '1-hello-world',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
