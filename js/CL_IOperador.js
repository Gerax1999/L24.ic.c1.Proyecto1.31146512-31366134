export default class CL_IOperador {
    leerCedula() {
       return prompt("ingrese la cedula del operador");
    }
    leerTipo() {
        return prompt("ingrese el tipo de operador 1=supervisor,2=diseñador,3=costurera,4=bordador,5=empacador ");
    }
    leerHorasSemana() {
        return prompt("ingrese las horas trabajadas en la semana");
    }
    leerPrecioHoraBase() {
       return  prompt("ingrese el precio de la hora base");
    }
    reporteOperador(c,he,bhe,phe,tc) {
        return `
        <br> cedula: ${c} 
        <br> cantidad de horas extras trabajadas: ${he}
        <br> bono de las horas extras: ${bhe}%
        <br> precio de la hora extra: ${phe}$
        <br> total a cobrar: ${tc}$
        `
    }
}