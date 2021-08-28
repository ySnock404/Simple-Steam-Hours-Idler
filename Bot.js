const SteamUser = require('steam-user');
const config = require('./config.json');
const JogoParaFarmar = 730;

const client = new SteamUser();

const logOnOptions = {
    accountName: config.username,
    password: config.password,
};

client.logOn(logOnOptions); 

client.on('loggedOn', () => {
    console.log('\nLogin feito com sucesso!');

    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(JogoParaFarmar);

    console.log('\nA farmar ID: ' + JogoParaFarmar)
})

