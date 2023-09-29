var calculatePrice = function () {
    var color = document.getElementById('selec-color').value;
    var capacidad = document.getElementById('selec-cap').value;
    var cantidad = document.getElementById('cantidad').value;
    



    if (color === 0 || capacidad === 0 || cantidad === "") {

        document.getElementById('result').innerHTML = "debe completar todos los campos para poder cotizar";


    }
    else if (cantidad < 1 || cantidad > 10){

        document.getElementById('result').innerHTML = "la cantidad debe ser mayor que 0 y menor o igual a 10";

    }
    else{
        var precio
        var preciofinal
        if(capacidad == 128){
            precio = 150000
        }
        else if(capacidad == 256){
            precio = 165000
        }
        else{
            precio = 180000
        } 

        preciofinal = cantidad * precio

        document.getElementById('result').innerHTML = `el precio de la cotizacion es de $ ${preciofinal}`; 

    }
    
}