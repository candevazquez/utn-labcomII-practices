var precio = {
    dolar : 900,
    euro : 1000
}
var calcular = function () {
    var pesos = document.getElementById('pesos').value;
    var moneda = document.getElementById('monExtr').value;
    var mostrar = document.getElementById('mostrar');


    if (pesos <= 0 || moneda == "") {
        alert("debe completar todos los campos y de forma correcta");
        
    }

    else{
        var resultado = precio[moneda]*pesos;
        mostrar.innerHTML= `cambio de pesos a ${moneda} = ${resultado}`;
        

    }
}

var agregarMoneda = function() {
    var nombre = document.getElementById('nombre').value;
    var costo = document.getElementById('costo').value;
    var selecmoneda = document.getElementById('monExtr');

    if (costo <= 0 || nombre == "") {
        alert("debe completar todos los campos y de forma correcta");
        
    }

    else{
        
        var nuevaopc = document.createElement("option");
        nuevaopc.text = nombre;
        nuevaopc.value = nombre;
        selecmoneda.appendChild(nuevaopc);
        precio[nombre] = costo //agrega a precio el costo
        
        
    }


}