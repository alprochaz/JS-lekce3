// 3 prednaska

// const hodinovka = 300
// const pocetHodin = prompt("Zadej pocet hodin zamestnance", "160")
// const premie = prompt("Zadej mimoradnou odmenu v Kc")
// const plat = (hodinovka * pocetHodin) + premie

// document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc.</p>"


// Priklad Ockovani
const jmeno = prompt("Zedej tvoje jmeno a prijmeni:");
const vek = prompt("Tvuj vek:");
document.body.innerHTML += "<p>" + jmeno + ", vek: " + vek + "</p>" ;

// Priklad Vyplata
const hodinovaSazba = Number(prompt("Zadej hodinovou sazbu v Kc"))
const hrubaMzda =  hodinovaSazba * 8 * 21 
document.body.innerHTML += "<p> Hruba mzda: " + hrubaMzda + " Kc </p>" 
