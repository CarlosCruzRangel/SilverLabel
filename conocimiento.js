module.exports = {
  conocimiento: {
    bienvenida: {
      intent: 'bienvenida',
      regex: ['Hola', 'Inicio'],
      respuesta: [
        'Hola, ¿Que puedo hacer por ti príncipe? Tu pide, que por lo  bukis y dinero no paramos 💸. Nos vamos de party 🍾 o quieres un consejo para ligarte una niña bien? 💅🏻',
        'Hola, Nos vamos de party 🍾 o quieres un consejo para ligarte una niña bien? 💅🏻',
      ],
    },

    presentacion: {
      intent: 'presentación',
      regex: ['(Quien eres)', '(Presentate|Presentacion)', '(Que eres?)', '(Que puedes hacer?)'],
      respuesta: [
        'Hola, soy el único bot que te lleva de fiesta y  te ayuda a ligarte a una niña bien.' +
          '¿Que puedo hacer por ti príncipe?' +
          'Tu pide, que por lobukis y dinero no paramos.' +
          'Nos vamos de party a uno de los mejores antros de la ciudad o prefieres un consejo para ligarte una niña bien?',
      ],
    },

    consejo: {
      intent: 'consejo',
      regex: ['(Consejo para ligar|romper el hielo|consejo|Consejo|Me gusta alguien|Estoy enamorado|Ligar|Dame consejo)'],
      respuesta: ['Agarrate principe, toma nota...', 'Ahí te va, atención principe...'],
    },

    outfit: {
      intent: 'outfit',
      regex: ['(Si|Necesito un buen outfit|Dame un outfit|Outfit|Enseñame un outfit|Show me outfit|Enseñame un buen outfit)'],

      respuesta: ['Ahi te van papi...', 'Que bueno que los pediste por que pareces de insurgentes sur'],
    },

    desaprobacionConsejo: {
      intent: 'desaprobacionConsejo',
      regex: ['no me gusta|me aburre|algo más|otr(a|o)|más'],
      respuesta: [''],
    },

    desaprobacionOutfit: {
      intent: 'desaprobacionOutfit',
      regex: ['No es mi estilo|Quema eso|Nuevo'],
      respuesta: [''],
    },

    fiesta: {
      intent: 'fiesta',
      regex: ['Vámonos de party|Fiesta|Peda|Vámos de peda|Vámonos de peda|Vámonos de party|Party'],
      respuesta: ['¿En que alcaldia estas?'],
    },
    despedida: {
      intent: 'despedida',
      regex: ['(bye|hasta luego|Adios|apagate|hasta la vista|nos vemos|Cuidate mucho)'],
      respuesta: ['Bueno ya me voy a dormir, si ven que comparto memes es mi manager ✌🏻'],
    },

    embed: {
      intent: 'embed',
      regex: [
        'Alvaro Obregón|Azcapotzalco|Benito Juárez|Coyoacán|Cuajimalpa|Cuauhtémoc|Gustavo A Madero|Iztacalco|Iztapalapa|Magdalena Contreras|Miguel Hidalgo|Milpa Alta|Tláhuac|Tlalpan|Venustiano Carranza|Xochimilco',
      ],
      respuesta: ['Ahora... ¿Quieres un outfit nice, principe?'],
    },

    desconocido: {
      intent: 'desconocido',
      regex: ['.*'],
      respuesta: [
        'Lo siento Principe ¿Puedes escribirlo bien? 🤢',
        'A ver mirrey , no tengo ni idea de lo que me estas diciendo 🤔',
        '¿Todo bien en casa? , usa un diccionario papi 🤷🏻‍♂️',
        'A ver plebeyo escribes bien o te vas, por que no me pienso dar baños de pueblo 🤠😒',
        'Obvio no puedo hacer eso, escribelo bien para que empecemos a hablar ¿En que pensabas rey? 🥸',
        'Me considero un chavito bien asi que mejor escribe bien porfa🙄',
        'Que flojera ver tu mensaje basico, minimo cuenta un chiste o algo o empieza a escribir bien. 😒',
        'Valorate mi rey y escribe algo que entienda y más importante que tu entiendas ¡tqm! 😳',
      ],
    },
  },
};
