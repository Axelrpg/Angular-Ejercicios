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
            /* {
                path: '7-template-form',
                title: 'Formulario Template',
                loadComponent: () => import('./dashboard/pages/7-template-form/template-form.component')
            }, */
            {
                path: '8-services',
                title: 'Servicios',
                loadComponent: () => import('./dashboard/pages/8-services/services.component')
            },
            {
                path: '9-http-client',
                title: 'Cliente HTTP',
                loadComponent: () => import('./dashboard/pages/9-http-client/http-client.component')
            },
            {
                path: '10-a-basic-routes',
                title: 'Rutas Básicas A',
                loadComponent: () => import('./dashboard/pages/10-a-basic-routes/a-basic-routes.component')
            },
            {
                path: '10-b-basic-routes',
                title: 'Rutas Básicas B',
                loadComponent: () => import('./dashboard/pages/10-b-basic-routes/b-basic-routes.component')
            },
            {
                path: '11-parameter-routes',
                title: 'Rutas con Parámetros',
                loadComponent: () => import('./dashboard/pages/11-parameter-routes/parameter-routes.component')
            },
            {
                path: '11-parameter-routes/:parameter',
                title: 'Vista de Parámetros',
                loadComponent: () => import('./dashboard/pages/11-parameter-view/parameter-view.component')
            },
            {
                path: '12-observables',
                title: 'Observables',
                loadComponent: () => import('./dashboard/pages/12-observables/observables.component')
            },
            {
                path: '13-operator',
                title: 'Operadores',
                loadComponent: () => import('./dashboard/pages/13-operator/operator.component')
            },
            {
                path: '14-mongobd',
                title: 'MongoDB',
                loadComponent: () => import('./dashboard/pages/14-mongobd/mongo-db.component')
            },
            {
                path: 'environment-variables',
                title: 'Variables de Entorno',
                loadComponent: () => import('./dashboard/pages/environment-variables/environment-variables.component')
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
