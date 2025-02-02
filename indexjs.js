


var randomnumber1 = Math.floor(Math.random() * 5) + 1
var randomnumber2 = Math.floor(Math.random() * 5) + 1

document.querySelector(".img1").setAttribute("src", `images/dice${randomnumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomnumber2}.png`);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Jogador 1 venceu"

} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Jogador 2 venceu"


} else {
    document.querySelector("h1").innerHTML = "Atualize-Me"
}
    


