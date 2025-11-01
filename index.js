const { Telegraf } = require('telegraf');

// YOUR TELEGRAM BOT TOKEN
const BOT_TOKEN = '8230608492:AAEy8bW21yidejrjgsXHB1H_fwHTk6YdjlQ'; 

const bot = new Telegraf(BOT_TOKEN);

// Start command sends a welcome message
bot.start((ctx) => ctx.reply('Welcome! I am connected to a database.'));

// Launch the bot to start listening for updates
bot.launch();
