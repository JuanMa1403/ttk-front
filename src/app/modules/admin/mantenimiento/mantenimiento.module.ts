import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { Route, RouterModule } from "@angular/router";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MantenimientoComponent } from "./mantenimiento.component";

const mantenimientoRoutes: Route[] = [
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
        RouterModule.forChild(mantenimientoRoutes),
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MaterialFileInputModule,
        MatIconModule,
        MatRadioModule,
        MatButtonModule
    ]
})
export class MantenimientoModule
{
}
