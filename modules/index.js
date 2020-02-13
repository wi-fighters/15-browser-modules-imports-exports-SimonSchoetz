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


const aspectForm = document.querySelector("#aspect-form")
aspectForm.addEventListener("change", () => {
    const ratio1 = document.querySelector("#ratio_1").value
    const ratio2 = document.querySelector("#ratio_2").value
    const ratioWidth = document.querySelector("#ratio_result-width").value
    const ratioHeight = document.querySelector("#ratio_result-height").value
    console.log(calculateAspectRatio(ratio1, ratio2, ratioWidth, ratioHeight))

})