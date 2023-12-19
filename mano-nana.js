import pkg from 'discord.js';
import 'dotenv/config'

const { Client, Intents, MessageActionRow, MessageButton } = pkg;
const client = new Client({ intents: [8] });

const channelId = process.env.CHANNEL_ID;
const intervaloDeHoras = 6;

client.once('ready', () => {
    console.log(`Bot está conectado como ${client.user.tag}`);
    enviarMensagemDiaria();
    setInterval(enviarMensagemDiaria, intervaloDeHoras * 60 * 60 * 1000);
});

const mensagens = [
  'Lamentando a falta do vaqueiro, eu amo a Ana Castela dentro da Hilux.',
  'Eu amo a Ana Castela, mesmo dentro da Hilux, onde ecoa a tristeza pela ausência do vaqueiro.',
  'Dentro da Hilux, o vazio da ausência do vaqueiro se mistura ao amor que sinto por Ana Castela.',
  'Vai se fuder, Marcos!',
  'Bom dia, eu amo a Ana Castela.',
  'Vava?',
  'Burro, burro, burro',
  'seu coco, catarrento, bobalhão',
  'bom dia seus adestrador de tejo',
  'Eu perguntei a Deus do céu, ai.\n Por que tamanha judiação?',
  'bom dia vaqueirama do ceará, eu amo a Ana Castela',
  'Ana Castela a maior artista do mundo',
  'Vai um mel de abelha?', 
  'Vendo uma toro!',
  'Nasci e me criei numa casa de taipa',
  'consigo jogar com a ana castela?',
  'Tengo, lengo, tengo, lengo',
  'amo a ana castela e jogar ping pong',
  'no final da tarde eu levo o gado pra beber',
  'eu te amo, Kelly, mas nunca será sabrina e ana castela',
  'eu amo Pedra Branca'
]

async function enviarMensagemDiaria() {
    const canal = await client.channels.fetch(channelId);

    canal.send(mensagens[Math.floor(Math.random() * mensagens.length)]);
}

const token = process.env.BOT_TOKEN;
client.login(token);
