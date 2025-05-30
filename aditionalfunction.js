module.exports = {
  choice(options) {
    //Funcion que elige al azar un elemento de una lista
    var rand = Math.floor(Math.random() * options.length);
    return options[rand];
  },

  contarConsejo() {
    //funcion que dara un consejo de ligue al usuario
    consejos = [
      ' \n ```Imagina que te estas vendiendo papi, asi que tienes que hacerte un buen marketing no seas naco y sé caballeroso recuerda que tu eres el rey así que cero piropos ```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```No quieras impresionarla con tu dinero, porque eso se nota, mejor hazlo con tu confianza y tu carisma.```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```Acércate como si fuera una old friend que no has visto en mucho tiempo```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```Nunca le preguntes como estas, eso es para básicos, mi rey . Mejor preguntale ¿Que has hecho hoy?, tiene más tema de conversación```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```En una declaración penal y en ligar, mientras menos digas mejor, deja que ellas hablen.```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```Mira papi , No te desveles rey , Las ojeras no combinan con tu rostro, tkm, príncipe```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```Papi dile esto, Pensé que estabas en el cielo por que te confundi con un angel```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
      ' \n ```A ver príncipe, Un verdadero mirrey no sufre por una mujer se va una y llegan dos más.```' +
      ' \n \n ```¿Te puedo ayudar en algo más? [💎Otro / 💎Inicio / 💎Bye]```',
    ];
    consejo = module.exports.choice(consejos);
    return consejo;
  },

  mostrarOutfit() {
    //funcion que dara un consejo de ligue al usuario
    Outfits = [
      'https://i.pinimg.com/564x/a4/ac/bf/a4acbf8a7cdfabd4830def5b16f19df7.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //1
      'https://i.pinimg.com/564x/bd/cf/ca/bdcfcac6dffea45ca7090d0f3ff0248c.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //2
      'https://i.pinimg.com/564x/0d/ef/e3/0defe389ce0820a481976a6016a1734e.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //3
      'https://i.pinimg.com/564x/8e/87/ff/8e87ffd4d23f568ead942098ccd648ab.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //4
      'https://i.pinimg.com/564x/93/96/68/939668edca7cdf05a84cd058bf0428a5.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //5
      'https://i.pinimg.com/564x/00/2e/00/002e002ffc74f5bedc5c7cb2d1bd984d.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //6
      'https://i.pinimg.com/564x/19/9d/94/199d94be6ad126c0698b9d49b79987e4.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //7
      'https://i.pinimg.com/564x/61/6d/ce/616dce26aecf3b69ec42c3d86c0b7a67.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //8
      'https://i.pinimg.com/564x/f5/28/29/f528292589e21db5a3273a4216759b98.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //9
      'https://i.pinimg.com/564x/52/8b/ad/528bad5302f78c2d3f39c6b6642f6886.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //10
      'https://i.pinimg.com/564x/69/9b/fb/699bfbe5c679e89781a0b4523d685049.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //11
      'https://i.pinimg.com/564x/fb/f1/2e/fbf12e02dd510997f73671a02cf1d3a6.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //12
      'https://i.pinimg.com/564x/c7/79/93/c77993258124b6ad67b4d80f0548da6d.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //13
      'https://i.pinimg.com/564x/be/3a/12/be3a124d7ae2bfe58e6b785ec56f3a0c.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //14
      'https://i.pinimg.com/564x/ef/a1/e8/efa1e89d7e4fab86298bffe13605aa9a.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //15
      'https://i.pinimg.com/564x/7a/c2/53/7ac2539b67e1ddb70b23e64c2dafbab2.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //16
      'https://i.pinimg.com/564x/2c/05/43/2c054349aabd90e6373abb5cece9a1b9.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //17
      'https://i.pinimg.com/564x/4b/95/22/4b952285c4be567a7ab17bec7b35b014.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //18
      'https://i.pinimg.com/564x/16/e9/c8/16e9c847e88ee291cf8a8d2fe48cdc33.jpg ' +
      ' \n ```¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]```', //19
    ];
    outfit = module.exports.choice(Outfits);
    return outfit;
  },

  sugerirTrago() {
    const tragos = [
      {
        nombre: 'Mojito',
        receta: 'Ron blanco, hierbabuena, azúcar, lima y soda.',
        preparacion: 'Machaca la hierbabuena con el azúcar y la lima. Añade ron, hielo y completa con soda.',
        frase: 'Refrescante como tu sonrisa en una noche calurosa 😏',
        imagen: 'https://www.liquor.com/thmb/Y4F_mWJ7qPB1TKO3pgz4d2USkEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mojito-720x720-recipe-58ff06a75f9b58bdb3e3dfaf.jpg'
      },
      {
        nombre: 'Margarita',
        receta: 'Tequila, triple sec y jugo de lima.',
        preparacion: 'Agita con hielo y sírvelo con sal en el borde del vaso.',
        frase: 'Ideal para cuando quieres empezar la noche con fuego 🔥',
        imagen: 'https://www.acouplecooks.com/wp-content/uploads/2020/06/Margarita-010.jpg'
      },
      {
        nombre: 'Negroni',
        receta: 'Gin, vermut rojo y Campari.',
        preparacion: 'Todo partes iguales, mezcla sobre hielo y decora con una rodaja de naranja.',
        frase: 'Clásico, elegante… como tú cuando entras al antro 😎',
        imagen: 'https://www.liquor.com/thmb/nE58MtsmrQY5HdAilRYtvFuCqvM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/negroni-720x720-recipe-ae6e261cfb694bdd8fc15ef0362322a4.jpg'
      },
      {
        nombre: 'Piña Colada',
        receta: 'Ron blanco, crema de coco y jugo de piña.',
        preparacion: 'Licúa todo con hielo. Delicioso y tropical.',
        frase: 'Dulce, exótica… y peligrosa. Como tu ex 🙃',
        imagen: 'https://www.acouplecooks.com/wp-content/uploads/2021/07/Pina-Colada-009.jpg'
      },
      {
        nombre: 'Cosmopolitan',
        receta: 'Vodka, triple sec, jugo de arándano y jugo de lima.',
        preparacion: 'Agita todo con hielo y sirve en copa de cóctel.',
        frase: 'Perfecto para brillar como una estrella de Sex and the City ✨',
        imagen: 'https://www.liquor.com/thmb/WnHGzEsDEnkl-DMaRtRpG6PU_N4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cosmopolitan-720x720-primary-937f191fed1940cc9617a76a5a40ed1b.jpg'
      },
      {
        nombre: 'Whiskey Sour',
        receta: 'Whiskey, jugo de limón y jarabe simple.',
        preparacion: 'Agita bien y sirve con una cereza.',
        frase: 'Fuerte y directo. Como el mensaje que le mandaste a las 3am 🤭',
        imagen: 'https://www.acouplecooks.com/wp-content/uploads/2020/06/Whiskey-Sour-010.jpg'
      }
    ];
    const seleccionado = module.exports.choice(tragos);
    return `${seleccionado.imagen}\n\n**${seleccionado.nombre}** 🍹\nReceta: ${seleccionado.receta}\nPreparación: ${seleccionado.preparacion}\n${seleccionado.frase}\n\n\`\`\`¿Te puedo ayudar en algo más? [💎Nuevo / 💎Inicio / 💎Bye]\`\`\``;
  }
};
