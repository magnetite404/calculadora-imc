import { Component } from "@angular/core";

@Component ({
    selector: "dio-result",
    templateUrl: "./calcular.component.html",
    styleUrls: ["./calcular.component.css"]
})

export class CalcularImcComponent {
    value = '';

    peso!: number;
    altura!: number;
    imc!: number;

    calcularImc(): number {
        let alt = this.altura;
        let pes = this.peso;
        let imc = 0;

        imc = pes / (alt ** 2);
        this.imc= parseFloat((Math.floor(100 * imc) / 100).toFixed(2));
        
        return this.imc;
    }
}