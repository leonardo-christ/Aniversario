const dataDoAniversario = new Date("Sep 21, 2024 00:00:00");
const timeStampDoEvent = dataDoAniversario.getTime();

const countdown = setInterval(function(){
    const now = new Date();
    const timeStampAtual = now.getTime();

    const timeEvent = timeStampDoEvent - timeStampAtual;

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const mins = 1000 * 60;

    const daysEvent = Math.floor(timeEvent / days);
    const hoursEvent = Math.floor((timeEvent % days) / hours);
    const minsEvent = Math.floor((timeEvent % hours) / mins);
    const secEvent = Math.floor((timeEvent % mins) / 1000);

    document.getElementById('time').innerHTML = `${daysEvent}D ${hoursEvent}H ${minsEvent}M ${secEvent}S`;

    if (timeEvent < 0){
        clearInterval(countdown);
        document.getElementById('time').innerHTML = `O aniversário já passou.`
    }
}, 1000);