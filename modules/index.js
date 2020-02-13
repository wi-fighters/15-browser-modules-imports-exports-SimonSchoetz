// Your code goes here!

import { calculateAspectRatio } from "./aspect-ratio.js";
import { modulo } from "./percentage.js"
import { percentage } from "./percentage.js"
import { percentageOf } from "./percentage.js"
import { difference } from "./percentage.js"

// import * as percent from "./percentage"
// imports everything, to use you need something like percent.modulo.*...* 


//target form
// link inputs to calculations
//listener on change
const moduloForm = document.querySelector("#modulo-form")
moduloForm.addEventListener("change", () => {
    const modulo1 = document.querySelector("#modulo_1").value
    const modulo2 = document.querySelector("#modulo_2").value
    document.querySelector("#modulo_result").value = modulo(modulo1, modulo2)
})

const percentageForm = document.querySelector("#percentage-form")
percentageForm.addEventListener("change", () => {
    const num1 = document.querySelector("#percentage_1").value
    const num2 = document.querySelector("#percentage_2").value
    document.querySelector("#percentage_result").value = percentage(num1, num2)
})

const percentageOfForm = document.querySelector("#percentageOf-form")
percentageOfForm.addEventListener("change", () => {
    const num1 = document.querySelector("#percentageOf_1").value
    const num2 = document.querySelector("#percentageOf_2").value
    document.querySelector("#percentageOf_result").value = percentage(num1, num2)
})

const differenceForm = document.querySelector("#difference-form")
differenceForm.addEventListener("change", () => {
    const num1 = document.querySelector("#difference_1").value
    const num2 = document.querySelector("#difference_2").value
    document.querySelector("#difference_result").value = percentage(num1, num2)
})


const aspectForm = document.querySelector("#aspect-form")
aspectForm.addEventListener("change", () => {
    const ratio1 = document.querySelector("#ratio_1").value
    const ratio2 = document.querySelector("#ratio_2").value
    const ratioWidth = document.querySelector("#ratio_result-width").value
    const ratioHeight = document.querySelector("#ratio_result-height").value
    document.querySelector("#ratio_result-height").value = calculateAspectRatio(ratio1, ratio2, ratioWidth, ratioHeight)
})