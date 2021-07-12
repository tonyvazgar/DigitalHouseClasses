let autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        let auto = this.autos.find((i) => i.patente === patente);
        return auto !== undefined ? auto : null;
    },
    venderAuto: function (patente) {
        let i = this.autos.indexOf(this.buscarAuto(patente));
        if (i >= 0) {
            this.autos[i].vendido = true;
        }
    },
    autosParaLaVenta : function(){
        return this.autos.filter(i => !i.vendido);
    },
    autosNuevos : function() {
        return this.autosParaLaVenta().filter(i => i.km<100);
    },

   listaDeVentas: function(){
      let vendidos = this.autos.filter(
         auto =>
            auto.vendido == true
      );
      let precios= [];
      for (var valor of vendidos) {
  precios.push(valor.precio);
}
      return precios
   },

  totalDeVentas: function(){
     var total = this.listaDeVentas().reduce(function(acumulador, elemento){
        return acumulador  + elemento;
      }, 0);
      return total;
   },
   
   puedeComprar: function(auto, persona){
      let precioAuto = auto.precio;
      let mensualidadAuto = precioAuto / auto.cuotas;
      return (persona.capacidadDePagoTotal > precioAuto && persona.capacidadDePagoEnCuotas > mensualidadAuto) ? true: false;
   },

   autosQuePuedeComprar: function(persona){
      let autosV = this.autosParaLaVenta();
      let ans = [];
      for(var coche in autosV){
         if(this.puedeComprar(coche, persona)){
            answ.push(coche);
         }
      }
      return ans;
   }
   
};

console.log("***ANTES DE VENDER APL123****");
console.log(concesionaria.autos);
concesionaria.venderAuto("APL123");
console.log("***DESPUES DE VENDER APL123****");
console.log(concesionaria.autos);
console.log("*******");
console.log(concesionaria.autosNuevos());
concesionaria.venderAuto("JJK116");
console.log(concesionaria.autosNuevos());
console.log(concesionaria.totalDeVentas());