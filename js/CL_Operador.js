export default class CL_Operador {
    constructor(cedula,tipo,horas_semana,precio_hora_base) {
        this.cedula = cedula;
        this.tipo = tipo;
        this.horas_semana = horas_semana;
        this.precio_hora_base = precio_hora_base;
    }
    set cedula(c) {
        this._cedula = +c;
    }
    get cedula() {
        return this._cedula;
    }
    set tipo(t) {
        this._tipo = +t;
    }
    get tipo() {
        return this._tipo;
    }
    set horas_semana(hs) {
        this._horas_semana = +hs;
    }
    get horas_semana() {
        return this._horas_semana;
    }
    set precio_hora_base(phb) {
        this._precio_hora_base = +phb;
    }
    get precio_hora_base() {
        return this._precio_hora_base;
    }

    cantidad_horas_extras() {
        if (this._horas_semana > 40) {
            return this._horas_semana - 40;} 
        else {
            return 0;
        }
    }
    bono_horas_extras() {
       if ( this._horas_semana > 40) {
           switch (this._tipo) {
               case 1:
                return this._precio_hora_base * 0.32; 
                break;
               case 2:
                return this._precio_hora_base * 0.23;
                break;   
               case 3:
                return this._precio_hora_base * 0.17;
                break;           
               case 4:
                return this._precio_hora_base * 0.07;
                break;              
               case 5:
                return this._precio_hora_base * 0.05;
                break;              
               default:
                return 0;
           }
       }
       else {
           return 0;
       }
    }
    precio_hora_extra() {
        if (this._horas_semana > 40) {
        return this._precio_hora_base + this.bono_horas_extras();}
        else {
            return 0;}
    }

    total_cobrar() {
        return this._horas_semana * this._precio_hora_base + this.precio_hora_extra();
    }
}