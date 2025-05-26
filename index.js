const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const Discord = require('discord.js');
require('dotenv').config();
const adfunc = require('./aditionalfunction');
const refunc = require('./responseFunctions');
const conocimiento = require('./conocimiento');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`✅ ${client.user.tag} is online!`); //If Silver Label WORKS on discord !!
});

//Prefijo
var prefix = '💎'; //Prefijo del bot UNICODE 1153
//Base de conocimiento
var conoci = conocimiento.conocimiento;
//Intent
var intent;
//Respuesta
var respuesta = '';
//Info extra
var infoAdicional = '';
//Contexto por DEFAULT
var contexto = 'DEFAULT';

client.on('ready', () => {
  console.log(`Conectado como: ${client.user.tag}!`); // Saber nombre y tag del bot
  client.user.setStatus`online`;

  console.groupCollapsed(client.user.presence.status); //Saber estado de bot
});

client.on('messageCreate', async (message) => {
  console.log(message.content);
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }
  message.channel.sendTyping();

  // Azcapotzalco
  if (message.content.startsWith(prefix + 'Azcapotzalco')) {
    const embed = new EmbedBuilder()
      .setTitle('Hdx Circus bar')
      .setThumbnail('https://i.pinimg.com/736x/77/ee/09/77ee096013c83e489522377f18f92899.jpg')
      .setDescription('La música como nunca la habías sentido')
      .setColor(0xffffff)
      .addFields(
        {
          name: 'Ubicación',
          value: '[Av. Cuitláhuac 3368, Jardín Azpeitia, Azcapotzalco, 02530 Ciudad de México, CDMX](https://goo.gl/maps/8Gc1pcGoxXzkDuCG7)'
        },
        { name: 'Cover:', value: '$400.00 MXN', inline: true },
        {
          name: 'Horario:',
          value: '7:00 pm - 12:00 am Viernes, Sábado o según el evento que se esté presentando',
          inline: true
        },
        { name: 'Trago:', value: 'champagne', inline: true },
        {
          name: 'Contacto:',
          value: '[HDX Circus Bar Pagina oficial](https://hdx-bar.negocio.site/)',
          inline: true
        },
        {
          name: 'Facebook:',
          value: '[HDX Circus Bar](https://www.facebook.com/HDXCircusBar/)',
          inline: true
        },
        {
          name: 'Instagram:',
          value: '[@HDXCircusbar](https://www.instagram.com/hdxcircusbar/)',
          inline: true
        },
        { name: 'Parking:', value: '50 MNX', inline: true },
        {
          name: 'Para pasar los cadeneros rápidamente:',
          value: 'Si eres del norte mirrey y quieres música y shows en vivo, este es para ti paps.'
        }
      )
      .setImage('https://i.pinimg.com/564x/9e/26/59/9e2659b3b28d6971cd083368afd818b3.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Este es mi favorito cuando voy a la Azcapo :',
      components: []
    });
  }


  // Benito Juárez
  if (message.content.startsWith(prefix + 'Benito Juárez')) {
    const embed = new EmbedBuilder()
      .setTitle('Presley Club CDMX')
      .setThumbnail(
        'https://scontent.fmex28-1.fna.fbcdn.net/v/t31.18172-8/24130533_2232068153497877_3955567318350904271_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U5CamuU-K48AX-n1taE&_nc_ht=scontent.fmex28-1.fna&oh=00_AT-E0YTQjuCtDCzMayFu3VEF6uBHrsxBD3L8VMixA1Awzg&oe=62B192F4'
      )
      .setDescription(
        'El lugar que marcó tendencia a partir del 2017 en la colonia Nápoles es Presley Club CDMX. En la cabina podemos encontrar una diversa variedad de DJ’s tocando música del género urbano, con una infraestructura de dos pisos, gradas con mesas tipo estadio y una zona central donde se encuentra la barra principal y la cabina.'
      )
      .setColor(0x1c36ff)
      .addFields(
        {
          name: 'Ubicación',
          value: '[Maximino Ávila Camacho 113, Cd. de los Deportes, Benito Juárez, 03710 Ciudad de México, CDMX](https://goo.gl/maps/U8aXH5RH8wZtuuZh7)'
        },
        { name: 'Cover:', value: '$100.00 MXN', inline: true },
        { name: 'Horario:', value: 'Viernes y sábado de 11:00 pm - 4:00 am', inline: true },
        { name: 'Trago:', value: 'Vodka', inline: true },
        { name: 'Contacto:', value: '5567833452', inline: true },
        { name: 'FB:', value: '[presleyclub](https://www.facebook.com/presleyclub/)', inline: true },
        { name: 'Parking:', value: 'Sí', inline: true },
        {
          name: 'Para pasar los cadeneros rápidamente:',
          value: 'Principalmente ir bien vestido y en parejas de preferencia.'
        }
      )
      .setImage('https://www.trendmexico.com/wp-content/uploads/2017/10/Lugar3-2.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Para un buen ambiente con musiquita en vivo, este es el lugar indicado, príncipe',
      components: []
    });
  }

  //alcaldia coyoacan
  if (message.content.startsWith(prefix + 'Coyoacán')) {
    const embed = new EmbedBuilder()
      .setTitle('Asha Bar')
      .setThumbnail('https://asha-bar.com/archivo/img-logo/80x80/ed2b538709_ww.png')
      .setDescription('¡Te recomendamos este lugar para una gran noche en Coyoacán!')
      .setColor(0x3b83bd)
      .addFields(
        {
          name: 'Ubicación',
          value: '[Victoria 9, Copilco el Bajo, Coyoacán, 04340 Ciudad de México, CDMX](https://www.google.com/maps/place/Asha+Bar/@19.3387477,-99.1895496,185m/data=!3m1!1e3!4m5!3m4!1s0x85d1ffff838de001:0x293c254583f6cb7!8m2!3d19.3388592!4d-99.1895519?hl=es)'
        },
        { name: 'Cover:', value: '$250.00 MXN', inline: true },
        { name: 'Horario:', value: 'Jueves, viernes y sábado de 10:00 pm - 3:00 am', inline: true },
        { name: 'Trago:', value: 'Vodka', inline: true },
        { name: 'Contacto:', value: '5540892500', inline: true },
        { name: 'TW:', value: '[@AshaBarOficial](https://twitter.com/ashabaroficial?lang=es)', inline: true },
        { name: 'Página web:', value: '[asha-bar.com](https://asha-bar.com/)', inline: true },
        { name: 'Parking:', value: 'No', inline: true },
        {
          name: 'Para pasar los cadeneros rápidamente:',
          value: 'Principalmente ir bien vestido y en parejas de preferencia.'
        }
      )
      .setImage('https://asha-bar.com/archivo/img-galery/lugar/600x600/c2889b8ef3-galeria-para-web-asha-13.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Para un buen ambiente con musiquita en vivo, este es el lugar indicado, príncipe',
      components: []
    });
  }

  //alcaldia cuauhtemoc
  if (message.content.startsWith(prefix + 'Cuauhtémoc')) {
    const embed = new EmbedBuilder()
      .setTitle('Main Room')
      .setThumbnail('https://images.adsttc.com/media/images/56cd/c4dd/e58e/cefa/9100/03e3/large_jpg/12-Main_Room_copy.jpg?1456325844')
      .setDescription('Este es de lo más exclusivo de la Roma, paps.')
      .setColor(0xfbb84d)
      .addFields(
        {
          name: 'Ubicación',
          value: '[Av Oaxaca 90, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX](https://goo.gl/maps/p7HHJR151NVGU1ym6)'
        },
        { name: 'Cover:', value: '$300.00 MXN', inline: true },
        { name: 'Horario:', value: 'Jueves, viernes y sábado de 11:00 pm - 3:00 am', inline: true },
        { name: 'Trago:', value: 'Champagne', inline: true },
        { name: 'Contacto:', value: '5585264162', inline: true },
        { name: 'IG:', value: '[@mainroom_club](https://www.instagram.com/mainroom_club/)', inline: true },
        { name: 'Parking:', value: 'Sí', inline: true },
        {
          name: 'Para pasar los cadeneros rápidamente:',
          value: 'Con los cadeneros no hay tanto problema, solo lleva buen outfit, buena actitud para bailar y tomarte unos ricos tragos.'
        }
      )
      .setImage('https://images.adsttc.com/media/images/56cd/c498/e58e/cefa/9100/03e1/medium_jpg/08-Main_Room_copy.jpg?1456325776')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Si quieres pasar una noche al estilo vintage, este lugar de la colonia Roma es para ti, príncipe.',
      components: []
    });
  }

  //cuajimalpa
  if (message.content.startsWith(prefix + 'Cuajimalpa')) {
    const embed = new EmbedBuilder()
      .setTitle('SENS')
      .setThumbnail('https://lh3.googleusercontent.com/p/AF1QipN4AOH8uVhuvoFXZJ1x2vQA_7BrqwUblNJf5f6o=s1600-w400')
      .setDescription(
        'De los mejores antros que conozco, rey. Durante algunos años, el Sens se ha mantenido como uno de los antros más glam y exclusivos de la Ciudad de México. Superar la cadena es complicado, pero vale la pena.'
      )
      .setColor(0x30216f)
      .addFields(
        {
          name: 'Ubicación',
          value: '[P.º de los Tamarindos 90, Bosques de las Lomas, Cuajimalpa de Morelos, 05120 Ciudad de México, CDMX](https://goo.gl/maps/392pLA7Qwsg4JqUw7)'
        },
        { name: 'Cover:', value: 'Hombres $250.00 MXN', inline: true },
        { name: 'Horario:', value: 'Jueves, viernes y sábado 11:00 pm - 6:00 am', inline: true },
        { name: 'Trago:', value: 'Champagne', inline: true },
        { name: 'Contacto:', value: '5585264162', inline: true },
        { name: 'IG:', value: '[@sensmexico](https://www.instagram.com/sensmexico/?hl=es)', inline: true },
        { name: 'Parking:', value: 'Sí', inline: true },
        {
          name: 'Para pasar los cadeneros rápidamente:',
          value: 'Ir bien vestido y en parejas. Es más difícil entrar si solo vas con hombres. Lleva identificación, haz reservación anticipada y llega con actitud de fiesta... y de gastar en buenas botellas.'
        }
      )
      .setImage('https://media.timeout.com/images/100479675/1372/772/image.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Este es uno de los antros más exclusivos de CDMX. Belinda, Rihanna y muchas celebridades han estado aquí, paps.',
      components: []
    });
  }

  // Gustavo A. Madero(Top)
  if (message.content.startsWith(prefix + 'Gustavo A. Madero')) {
    const embed = new EmbedBuilder()
      .setTitle('Sin info, nene')
      .setDescription('No hay lugares verificados por el gobierno en ese rumbo 😅');

    message.reply({
      embeds: [embed],
      content: 'No hay nada bueno en ese rumbo, pero si te animas, nos lanzamos a otro lado 😎',
      components: [],
    });
  }

  // Iztacalco
  if (message.content.startsWith(prefix + 'Iztacalco')) {
    const embed = new EmbedBuilder()
      .setTitle('Sin info, nene')
      .setDescription('Lo más top ahí son los mercados... 😬');

    message.reply({
      embeds: [embed],
      content: 'Ahi solo hay mercados, mirrey, pero te mando un Uber para que te vengas a mi penthouse 😏',
      components: [],
    });
  }


  // Iztapalapa(top)
  if (message.content.startsWith(prefix + 'Iztapalapa')) {
    const embed = new EmbedBuilder()
      .setTitle('La Ingrata Bar Club')
      .setThumbnail('https://scontent.fmex28-1.fna.fbcdn.net/v/t1.6435-9/87318642_203077301060289_8709574462263001088_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zz8EQnryTUQAX8g-dpV&_nc_ht=scontent.fmex28-1.fna&oh=00_AT90cVRMg6fQsPYctRXME0B285SPFisODEWkz3CT2lqWfA&oe=62B50727')
      .setDescription('Recién inaugurado con muchas promos que ofrecer y la mejor actitud que puedas encontrar. Tú lleva tu presencia y ellos ponen el ambiente. Listo para conquistar unas cuantas lobuquis 😎')
      .setColor(0xf594d1)
      .addFields(
        {
          name: 'Ubicación',
          value: '[Av. Río Altar 80, Paseos de Churubusco, Iztapalapa, 09030 Ciudad de México, CDMX](https://goo.gl/maps/gQfThksBBgpPr9ge7)',
        },
        { name: 'Cover:', value: '$100.00 MXN', inline: true },
        { name: 'Horario:', value: 'Jueves, viernes y sábado de 7:00 pm - 1:00 am', inline: true },
        { name: 'Trago:', value: 'Tequila', inline: true },
        { name: 'Contacto:', value: '5528516154', inline: true },
        { name: 'FB:', value: '[La ingrata Paseos](https://www.facebook.com/La-ingrata-Paseos-103872565461930/)', inline: true },
        { name: 'Parking:', value: 'No', inline: true },
        {
          name: 'Para pasar los cadeneros rápidamente:',
          value: 'Principalmente ir bien vestido y en parejas. Es más difícil accesar siendo solo hombres. Otro punto importante es llevar identificación, tener reservación previa y llegar con actitud positiva (y presupuesto para unas buenas botellas).'
        }
      )
      .setImage('https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/280755057_151337560715430_7593702713533407087_n.png?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=CzUMIhvmIHYAX_2TyWc&_nc_ht=scontent.fmex28-1.fna&oh=00_AT_XRIL5miPiZlux0UkBSuZU6CfZz1psN6tKAMmqZ6WB3Q&oe=62933EF0')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX ' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Para buena música en vivo por esta zona, vente a este lugar, te va a encantar príncipe 💃🕺',
      components: [],
    });
  }


  // Magdalena Contreras
  if (message.content.startsWith(prefix + 'Magdalena Contreras')) {
    const embed = new EmbedBuilder()
      .setTitle('Sin info nene 😔')
      .setDescription('Que horror príncipe, yo no conozco ese lado oscuro de la ciudad... pero no te preocupes, te pido un Uber y te vienes acá donde sí hay plan 🔥')
      .setColor(0x777777)
      .addFields({
        name: 'Plan alternativo',
        value: '[Mejor vente aquí](https://goo.gl/maps/CM4gdoYmxPFLsDP48)',
      })
      .setFooter({ text: 'Atención personalizada del mirrey bot' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: '🛺 Uber pedido, ponte guapo que la fiesta es de este lado, príncipe',
      components: [],
    });
  }


  // Miguel Hidalgo
  if (message.content.startsWith(prefix + 'Miguel Hidalgo')) {
    const embed = new EmbedBuilder()
      .setTitle('La Santa Masaryk Polanco')
      .setThumbnail('https://lasantamasaryk.com/archivo/img-logo/80x80/808e8906f4-logosanta.png')
      .setDescription(
        'La Santa Masaryk es una discoteca que te hará pasar una noche inolvidable, acompañado de la mejor música y ambiente.'
      )
      .setColor(0x4b3e81)
      .addFields(
        {
          name: 'Ubicacion',
          value: '[Av. Pdte. Masaryk 336, Polanco, Polanco IV Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX](https://goo.gl/maps/a634z8s4iwpksR248)',
        },
        { name: 'Cover:', value: '$100.00', inline: true },
        { name: 'Horario:', value: '9:00 pm - 5:00 am', inline: true },
        { name: 'Trago:', value: 'Champagne', inline: true },
        { name: 'Contacto:', value: '5585264162', inline: true },
        { name: 'IG:', value: '[@laculpablecoapa](https://www.instagram.com/laculpablecoapa/)', inline: true },
        { name: 'Parking:', value: 'Sí', inline: true },
        {
          name: 'Para pasar los canederos rápidamente:',
          value:
            'Principalmente ir bien vestido y en parejas, ya que resulta más difícil accesar siendo únicamente hombres, otro punto muy importante es tener tu identificación, tu reservación con previa anticipación y llegar a la cadena con la mejor actitud de asistir y de gastar en buenas botellas',
        }
      )
      .setImage('https://www.armandoplanes.mx/wp-content/uploads/2019/01/7-2.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Este es mi favorito cuando voy a la Mickey 😊',
      components: [],
    });
  }


  // Milpa Alta
  if (message.content.startsWith(prefix + 'Milpa Alta')) {
    const embed = new EmbedBuilder()
      .setTitle('Clausurado por meter buchones')
      .setColor(0xff0000) // rojo para dar énfasis
      .setFooter({ text: 'No te preocupes, aquí siempre hay buena vibra 😎' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'No te preocupes muñeco, te pido Uber y le caes a mi depa',
      components: [],
    });
  }


  // Tláhuac
  if (message.content.startsWith(prefix + 'Tláhuac')) {
    const embed = new EmbedBuilder()
      .setTitle('Aquí en tu pueblo no hay nada mi príncipe')
      .setColor(0xff6f61) // un color cálido, pero puedes cambiarlo
      .setFooter({ text: 'Pero no te preocupes, aquí te esperamos' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'No te preocupes rey, te pido Uber y le caes a mi depa',
      components: [],
    });
  }


  // Tlalpan
  if (message.content.startsWith(prefix + 'Tlalpan')) {
    const embed = new EmbedBuilder()
      .setTitle('La Culpable Coapa')
      .setThumbnail('https://pbs.twimg.com/profile_images/662389437326753792/T9kOwA-W_400x400.jpg')
      .setDescription(
        'El único lugar al sur de la ciudad de México donde encontrarás banda sinaloense en vivo además de los mejores géneros.'
      )
      .setColor(0xab0f08)
      .addFields(
        { name: 'Ubicación', value: '[Calz Acoxpa 497, Coapa, Prados Coapa 3ra Secc, Tlalpan, 14357 Ciudad de México, CDMX](https://goo.gl/maps/T5a6NWwFYV4N6byj8)' },
        { name: 'Cover:', value: '$100.00 MXN', inline: true },
        { name: 'Horario:', value: '10:00 pm - 5:00 am', inline: true },
        { name: 'Trago:', value: 'Tequila', inline: true },
        { name: 'Contacto:', value: '5585264162', inline: true },
        { name: 'IG:', value: '[@laculpablecoapa](https://www.instagram.com/laculpablecoapa/)', inline: true },
        { name: 'Parking:', value: 'Sí', inline: true },
        {
          name: 'Para pasar los canederos rápidamente:',
          value:
            'Principalmente ir bien vestido y en parejas, ya que resulta más difícil accesar siendo únicamente hombres, otro punto muy importante es tener tu identificación, tu reservación con previa anticipación y llegar a la cadena con la mejor actitud de asistir y de gastar en buenas botellas',
        }
      )
      .setImage('http://socialestrespuntocero.mx/wp-content/uploads/2020/03/La-Culpable_.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Por aquí tenía dos amiguitos buchones :',
      components: [],
    });
  }

  // Venustiano Carranza (pendiente)

  // Xochimilco
  if (message.content.startsWith(prefix + 'Xochimilco')) {
    const embed = new EmbedBuilder()
      .setTitle('Embarcadero Nuevo Nativitas Xochimilco')
      .setThumbnail('http://www.xochimilco.cdmx.gob.mx/wp-content/uploads//2021/11/Logo_Pagina_2021-uai-258x252.png')
      .setDescription(
        'Las trajas es algo de lo que no te puedes perder mirrey, nada como vivir una experiencia única a bordo de una chinampa y disfrutar de la mejor música, ambiente, todo lo que un spring breaker desea'
      )
      .setColor(0x034c8e)
      .addFields(
        { name: 'Ubicación', value: '[C. del Mercado 133, San Jerónimo, Xochimilco, 16420 Ciudad de México, CDMX](https://g.page/xochimilcotraji?share)' },
        { name: 'Cover:', value: '$500.00 x hr', inline: true },
        { name: 'Horario:', value: '24 hrs', inline: true },
        { name: 'Trago:', value: 'Micheladas', inline: true },
        { name: 'Contacto:', value: '+525510133063', inline: true },
        { name: 'IG:', value: '[@embarcaderonuevonativitas](https://www.instagram.com/embarcaderonuevonativitas/)', inline: true },
        { name: 'Parking:', value: 'Sí', inline: true },
        {
          name: 'Para no esperar:',
          value:
            'Llega en grupito, entre más sean mejor porque todos los dueños de las trajas se estarán peleando por ustedes a buenos precios y papi no te preocupes si no estás acostumbrado a estos sitios recuerda que entre más corriente más ambiente, ¡viva México jaja :D!',
        }
      )
      .setImage('https://images-ext-2.discordapp.net/external/hGcbVU9xbtmTSXNnBVXGkMK5CUotPxz8F3x-qs-FqJI/%3Fw%3D1024%26ssl%3D1/https/i0.wp.com/trajinerasxochimilco.info/wp-content/uploads/2021/09/trajineras-xochimilco.jpg')
      .setFooter({ text: 'VERIFICADO POR EL GOBIERNO DE LA CDMX' })
      .setTimestamp();

    message.reply({
      embeds: [embed],
      content: 'Sin duda alguna te recomiendo este lugar (no me juzgues te encantará): ',
      components: [],
    });
  }

  var text = message.content;
  intent = refunc.findIntent(conoci, text);
  // console.log(intent);
  contexto = refunc.identificarContexto(intent, contexto);
  //console.log(contexto);
  respuesta = refunc.responder(intent);
  //console.log(respuesta);
  infoAdicional = refunc.acciones(intent, text, contexto);
  // console.log(infoAdicional);
  respuesta += infoAdicional;
  message.channel.send(respuesta);
});

// Error handling for Discord client
client.on('error', error => {
  console.error('Discord client error:', error);
});

// Login with error handling
client.login(process.env.TOKEN)
  .catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
  });
