const anagramm = document.getElementById("anagramm-text")
var input = document.getElementById("guess")
var correct = "";
const data = [
    {
        "correct" : "Kartoffel",
        "anagramm" : "Fartfokel"
    },
    {
        "correct" : "Rosinen",
        "anagramm" : "Sonneri"
    },
    {
        "correct" : "Himbeere",
        "anagramm" : "Erbeheim"
    }
]


function setAnagramm () {
    input.style.borderColor = "black"
    let random = rand(0, data.length - 1)
    anagramm.innerText = data[random].anagramm
    correct = data[random].correct
    document.getElementById("submit").innerText = "Abschicken"
    document.getElementById("submit").removeEventListener("click", setAnagramm)
    document.getElementById("submit").addEventListener("click", handleSumbit)
}

function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
}

function handleSumbit() {
    if (input.value == "") {
        console.error("empty")
    }
    console.log(input.value, correct)
    if (input.value == correct) {
        input.style.borderColor = "green"
        document.getElementById("submit").innerText = "Nocheinmal spielen"
        document.getElementById("submit").removeEventListener("click", handleSumbit)
        document.getElementById("submit").addEventListener("click", setAnagramm)
    } else {
        input.style.borderColor = "red"
    }

}

window.onload = setAnagramm