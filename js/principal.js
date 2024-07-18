/* un operador se tienen los siguientes datos: cedula,tipo(1=supervisor,2=diseñador,3=costurera,4=bordador,
5=empacador),hora reglamentaria,horas trabajadas en la semana y el precio de la hora base. Si trabaja mas de 40 horas, 
el operador tendra el beneficio de bono por horas extras. La hora extra se calcula de la siguiente manera: 
(supervisor = 32%, diseñador = 23%, costurera = 17% ,bordador = 7%, empacador = 5%).
Muestre como salida del programa,cedula,pecio de la hora extra, cantidad de horas extras trabajadas,  
bono de las horas extras  y total a cobrar para el operador.*/ 

import CL_Operador from "./CL_Operador.js";
import CL_IOperador from "./CL_IOperador.js";

let iopera = new CL_IOperador(),
    c = iopera.leerCedula(),
    t = iopera.leerTipo(),
    hs = iopera.leerHorasSemana(),
    phb = iopera.leerPrecioHoraBase(),

    opera = new CL_Operador(c,t,hs,phb),
    salida = document.getElementById("salida");

    salida.innerHTML = iopera.reporteOperador(opera.cedula,
    opera.cantidad_horas_extras(),opera.bono_horas_extras(),opera.precio_hora_extra(),opera.total_cobrar());