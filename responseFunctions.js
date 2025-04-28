const adFunc = require('./aditionalfunction');

module.exports = {
  findIntent(diccionario, userInput) {
    //Función que identifica el intent buscando en toda la base de conocimiento.
    for (var key of Object.keys(diccionario)) {
      //console.log(diccionario[key].regex);
      for (const regex of diccionario[key].regex) {
        // console.log(regex);
        var re = new RegExp(regex, 'i');
        let str = userInput.match(re);
        if (str) {
          //console.log("Match: " + str);
          return diccionario[key];
        }
      }
    }
  },

  identificarContexto(intent, contexto) {
    //Función que asocia un intent a un contexto.
    var intentName = intent.intent;
    if (intentName == 'bienvenida') {
      return 'BIENVENIDA';
    } else if (intentName == 'presentacion') {
      return 'PRESENTACION';
    } else if (intentName == 'consejo') {
      return 'CONSEJO';
    } else if (intentName == 'outfit') {
      return 'OUTFIT';
    }
    return contexto;
  },

  responder(intent) {
    //Función que devuelve una respuesta aleatoria de las disponibles.
    return adFunc.choice(intent.respuesta);
  },

  acciones(intent, userInput, contexto) {
    //Función que añade contenido necesario a una respuesta.
    var intentName = intent.intent;
    if (intentName == 'desaprobacionConsejo') {
      return module.exports.respuestaApropiada(intent, userInput, contexto);
    } else if (intentName == 'consejo') {
      return adFunc.contarConsejo();
    } else if (intentName == 'desaprobacionOutfit') {
      return module.exports.respuestaApropiadaOutfit(intent, userInput, contexto);
    } else if (intentName == 'outfit') {
      return adFunc.mostrarOutfit();
    }
    return '';
  },

  respuestaApropiada(intent, userInput, contexto) {
    //Función que modifica una respuesta para que su contenido sea el adecuado.
    if (contexto == 'CONSEJO') {
      return 'Aquí te va otro' + adFunc.contarConsejo();
    } else {
      return 'Aquí te va otro, espero que tengas éxito como lo hice en Eiza González' + adFunc.contarConsejo();
    }
  },

  respuestaApropiadaOutfit(intent, userInput, contexto) {
    //Función que modifica una respuesta para que su contenido sea el adecuado.
    if (contexto == 'OUTFIT') {
      return 'Aquí te va otro principe' + adFunc.mostrarOutfit();
    } else {
      return 'Que exigente, bueno esto es para ti' + adFunc.mostrarOutfit();
    }
  },
};
