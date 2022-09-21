import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { MantenimientoComponent } from "./mantenimiento.component";

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: MantenimientoComponent
    }
];

@NgModule({
    declarations: [
        MantenimientoComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes)
    ]
})
export class MantenimientoModule
{
}
