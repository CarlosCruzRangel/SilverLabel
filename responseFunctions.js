const adFunc = require('./aditionalfunction');

module.exports = {
  findIntent(diccionario, userInput) {
    //Función que identifica el intent buscando en toda la base de conocimiento.
    console.log('Entrada del usuario:', userInput);
    for (var key of Object.keys(diccionario)) {
      console.log('Verificando intent:', key);
      for (const regex of diccionario[key].regex) {
        var re = new RegExp(regex, 'i');
        let str = userInput.match(re);
        if (str) {
          console.log('Intent encontrado:', diccionario[key].intent);
          return diccionario[key];
        }
      }
    }
    console.log('No se encontró ningún intent');
    return null;
  },

  identificarContexto(intent, contexto) {
    //Función que asocia un intent a un contexto.
    console.log('Intent recibido:', intent ? intent.intent : 'null');
    console.log('Contexto anterior:', contexto);
    
    if (!intent) {
      console.log('No hay intent, manteniendo contexto:', contexto);
      return contexto;
    }
    
    var intentName = intent.intent;
    if (intentName == 'bienvenida') {
      console.log('Contexto actual: BIENVENIDA');
      return 'BIENVENIDA';
    } else if (intentName == 'presentacion') {
      console.log('Contexto actual: PRESENTACION');
      return 'PRESENTACION';
    } else if (intentName == 'consejo') {
      console.log('Contexto actual: CONSEJO');
      return 'CONSEJO';
    } else if (intentName == 'outfit') {
      console.log('Contexto actual: OUTFIT');
      return 'OUTFIT';
    }
    console.log('Manteniendo contexto actual:', contexto);
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
    }else if(intentName=='trago'){
      return adFunc.sugerirTrago();
    }else if(intentName=='desaprobacionTrago'){
      return module.exports.respuestaApropiadaTrago();
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
