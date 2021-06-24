import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalcularImcComponent } from "./resultado/calcular.component";
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';

@NgModule ({
    declarations: [
        CalcularImcComponent,
    ],
    exports: [
        CalcularImcComponent
    ],
    imports: [
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
 
    ]
})

export class CalculadoraImcModule {

}