
const autos = require('./autos');/* requerir módulo autos */
let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente){
      for(let i = 0; i < autos.length; i++){
         let car = this.autos[i];
         if(car.patente === patente){
            return car;
         }else{
            return null;
         }
      }
   },

   venderAuto: function(patente){
      let a = this.buscarAuto(patente);
      a.vendido = true;
   },
   autosParaLaVenta: function(){
      return this.autos.filter(auto => 
          auto.vendido != true
      );
   },

   autosNuevos: function(){
      let ventas = this.autosParaLaVenta();
      return ventas;
    //   return ventas.filter(venta =>
    //      venta.km < 100
    //   );
   }
}

console.log("***ANTES DE VENDER APL123****");
console.log(concesionaria.autos);
concesionaria.venderAuto("APL123");
console.log("***DESPUES DE VENDER APL123****");
console.log(concesionaria.autos);
console.log("*******");
console.log(concesionaria.autosNuevos());
concesionaria.venderAuto("JJK116");
console.log(concesionaria.autosNuevos());