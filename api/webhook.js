const { Telegraf } = require('telegraf');

// YOUR TELEGRAM BOT TOKEN
const BOT_TOKEN = '8230608492:AAEy8bW21yidejrjgsXHB1H_fwHTk6YdjlQ'; 

const bot = new Telegraf(BOT_TOKEN);

// Start command sends a welcome message
bot.start((ctx) => ctx.reply('Welcome! Your bot is ready.'));

// Vercel requires the function to be exported as 'handler'
module.exports = async (req, res) => {
    try {
        await bot.handleUpdate(req.body, res);
    } catch (err) {
        console.error(err);
        res.statusCode = 200;
        res.end('Success');
    }
};
