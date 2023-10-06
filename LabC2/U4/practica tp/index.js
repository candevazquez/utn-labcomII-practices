var ciudad = document.getElementById('selector-ciudad');
var tarjeta = document.getElementById('card');
var htmlCard;
var tarjeta2 = document.getElementById('card2');



//utilizar funcion asinc , mientras hacemos, la pagina sigue funcionando


async function consultarCiudad() {
    if (ciudad.value == "-") {
        alert('seleccione la ciudad');
        return false; //asegura q sea false
    }
    else {

        const api_key = '28aabcc16cb9cd75304a7cbeba35362a';
        const ciudadElegida = ciudad.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadElegida}&appid=${api_key}&units=metric&lang=es`;

        //tarjeta.innerHTML = url
        try { //para tratar conectarnos a la url await espera fetch para conectarse 
            const respuesta = await fetch(url);

            if (respuesta.ok) {
                //fuciono
                const data = await respuesta.json();

                //console.log(data);
                //simpple
                htmlCard = '';
                htmlCard = `
                <h3>${data.name}</h3>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <p>temperatura : ${data.main.temp}</p>
                <p>viento : ${data.wind.speed}</p>
                `;
                tarjeta.innerHTML = htmlCard;

                //complejo
                tarjeta2.innerHTML = mostrarTarjeta(data);


            } else {
                console.log('error 404');

            }

        }

        catch (err) {
            console.log(err);
        }
    }
}
//englobar en dos partes la ejecucion 

var mostrarTarjeta = function (data) {
    const {name, weather:[arr], main: {temp, feels_like }, wind: { speed } } = data;
    htmlCard = '';
    htmlCard = `
                <h3>${name}</h3>
                <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png">
                <p>temperatura : ${temp}</p>
                <p>viento : ${speed}</p>
                <p>sensacion termica: ${feels_like}</p>
                `;
                return htmlCard


}


//promesa

function mostrarClima(){
    consultarApi(ciudad).then( data =>{
        //ejecutar la consulta, leer json
        json.parse(json.stringfy(data)); //transoforma data en json

        html


    }) .catch(() =>{

    }).finally(()=> {

    })
}