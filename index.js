//Crear un array con las preguntas y las opciones que van a aparecer en pantalla

const preguntas = [

  //Pregunta 1

  {pregunta: "¿Cuál de los siguientes no es un lenguaje de programación?",
  opcion: ["Python", "Java", "JavaScript", "HTML"],
  correcta: 'd'},

  //Pregunta 2

  {pregunta: "¿Cuál fue el lenguage de programación más usado en GitHub durante el último año?",
  opcion: ["Java", "Python", "C++", "JavaScript"],    
  correcta: 'b'},

  //Pregunta 3

  {pregunta: "¿A qué hace referencia la M en el tech stack M.E.A.N?",
  opcion: ["MyQuerySelector", "MySQL", "MongoDB", "MyIA"],    
  correcta: 'c'},

  //Pregunta 4

  {pregunta: "¿Qué significa HTML?",
  opcion: ["HyperText Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
  correcta: 'a'
},

//Pregunta 5

  {pregunta: "¿Cuál de los siguientes es un lenguaje de programación orientado a objetos?",
  opcion: ["Python", "HTML", "CSS", "Markdown"],
  correcta: 'a'
},

//Pregunta 6

  {pregunta: "¿Qué es un algoritmo?",
  opcion: ["Un lenguaje de programación", "Una secuencia de pasos para resolver un problema", "Una base de datos", "Un sistema operativo"],
  correcta: 'b'
}

  ];


  let IndexPreguntas = 0;
  let puntaje = 0;

  function cargarPregunta() {
      const InfoPregunta = preguntas[IndexPreguntas];
      document.getElementById("pregunta").textContent = InfoPregunta.pregunta;

      const opcionesPregunta = document.querySelectorAll(".opcion");
      opcionesPregunta.forEach((button, index) =>{
          button.textContent = `${String.fromCharCode(65 + index)}) ${InfoPregunta.opcion[index]}`;
          button.disabled = false; 
      })

  }   
  
  //Función que revisa si la opción seleccionada fue la correcta

  function revisarRespuesta(opcionElegida){

      const respuestaCorrecta = preguntas[IndexPreguntas].correcta;
      const opcionesPregunta = document.querySelectorAll(".opcion");

      if (opcionElegida === respuestaCorrecta){
          Swal.fire('Corecto!', ' Excelente, haz click en siguiente pregunta!', 'success');
          puntaje += 100;
          puntajeCorrecto();

          opcionesPregunta.forEach(button => {
              button.disabled = true;
          });

          document.getElementById("siguiente-boton").style.display = "block";     
      }
      else{
          Swal.fire('Incorrecto!', ' Oops, elige otra opción!', 'error');
      }
  }

  //Variable que almacena el puntaje
  //Cargar puntaje:

  function puntajeCorrecto() {
          document.getElementById("puntaje").innerText = "Puntaje = " + puntaje
      }

  //Función para darle trabajar el botón siguiente pregunta
  function siguientePregunta() {

      IndexPreguntas++;

      if (IndexPreguntas < preguntas.length) {
          cargarPregunta();
      }
      else{
          Swal.fire('Felicidades!', ' Has terminado el test!', 'success');
      }

      document.getElementById("siguiente-boton").style.display = "none"; 
  }

  cargarPregunta();