let dato =true;
if(dato==true){
    console.log("es true");
}
else{
    console.log("es false");
}

let lenguaje = "javascript";
if(lenguaje=="javascript"){
    console.log("Estoy aprendiendo");
} else{
    console.log("Lo aprenderé más adelante");
}

function puedePasar(nombre) {
    if(nombre=="Cosme Fulanito"){
        return false;
    }
    return true;
}

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]

let indiceJuan=alumnos.indexOf("Juan");
let indiceFrancisco=alumnos.indexOf("Francisco");

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];

  let freaseNueva= arrayFrase.join(" ");
  console.log(freaseNueva);

 

  let alumnoEgresado=[];
  alumnoEgresado=estudiantes.pop();  


    estudiantes.push({
        nombre: Juan,

        promedio: 5,
        
        curso: iOS});

    estudiantes.push({
        nombre: Miguel,

        promedio: 2,
        
        curso: Android
        });

        let estudiantes = [
            {
               nombre: 'Alvaro',
               promedio : 9,
               curso : 'Android',
             },
              {
                nombre: 'Daniel',
                promedio : 6,
                curso : 'Full Stack',
              },
              {
                nombre: 'Alexis',
                promedio : 3,
                curso : 'iOS',
              },
            ]

            let alumnoDeBaja=estudiantes.shift();

            estudiantes.unshift({nombre: "Mariana",

            promedio: 9,
            
            curso: "Full Stack"},
            {nombre: "Francisco",

            promedio: 2,
            
            curso: "Android"});
            
