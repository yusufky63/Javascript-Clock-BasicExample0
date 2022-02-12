let Name = prompt("Adınızı Girin :")
let goster = document.getElementById("myName")

goster.innerHTML = `${Name}`

//TARİHİ YAZDIRMA
let ClockTime = document.getElementById("myClock")

let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
let hours, minute, seconds, day, Datenow, now

function nowTime() {
    Datenow = new Date();
    hours = Datenow.getHours()
    minute = Datenow.getMinutes()
    seconds = Datenow.getSeconds()
    day = Datenow.getDay()

    now = `${hours}:${minute}:${seconds}-${days[day-1]}`
    return now
}

function showTime() {
    ClockTime.innerHTML = nowTime();
    setTimeout(showTime, 1000);
}