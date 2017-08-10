const Telegraf = require('telegraf');

// Add Telegram bot token you get from BotFather
// Would be better to use some kind of env tool e.g. dotenv to set the variable
//process.env.BOT_TOKEN='your telegram bot token';

const app = new Telegraf(process.env.BOT_TOKEN);

app.command('start', ({ from, reply }) => {
    console.log('start', from);
    return reply('Welcome!')
});
app.hears('hi', (ctx) => ctx.reply('No moro!'));
app.command('/kuosmanen', (ctx) => ctx.reply('Hehehee'));
app.on('sticker', (ctx) => ctx.reply('👍'));

app.startPolling();