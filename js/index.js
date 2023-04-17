// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


const textArea = document.querySelector("#textArea")
const btnEncrypt = document.querySelector("#btnEncrypt")
const btnDecrypt = document.querySelector("#btnDecrypt")
const notResultDiv = document.querySelector("#notResult")
const resultDiv = document.querySelector("#resultContainer")
const resultText = document.querySelector("#resultText")
const btnCopy = document.querySelector("#btnCopy")


btnEncrypt.addEventListener("click", encryptText)
btnDecrypt.addEventListener("click", decryptText)
btnCopy.addEventListener("click", copyText)

function copyText() {
    const text = resultText.innerHTML
    const tempInput = document.createElement("input")
    tempInput.value = text
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
}

function encryptText() {
    if (textArea.value.length === 0) {
        notResultDiv.classList.remove("display_none")
        resultDiv.classList.add("display_none")
        return
    }

    const value = textArea.value.split("")

    const encryptedValue = value.map(letter => {
        switch (letter) {
            case "e":
                return "enter"
            case "i":
                return "imes"
            case "a":
                return "ai"
            case "o":
                return "ober"
            case "u":
                return "ufat"
            default:
                return letter
        }
    })

    notResultDiv.classList.add("display_none")
    resultDiv.classList.remove("display_none")

    resultText.innerHTML = encryptedValue.join("")
}

function decryptText() {
    if (textArea.value.length === 0) {
        notResultDiv.classList.remove("display_none")
        resultDiv.classList.add("display_none")
        return
    }

    let value = textArea.value

    value = value.replaceAll("enter", "e")
    value = value.replaceAll("imes", "i")
    value = value.replaceAll("ai", "a")
    value = value.replaceAll("ober", "o")
    value = value.replaceAll("ufat", "u")

    notResultDiv.classList.add("display_none")
    resultDiv.classList.remove("display_none")

    resultText.innerHTML = value

}
