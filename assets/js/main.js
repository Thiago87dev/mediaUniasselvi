window.onload = preencherInputNotas

const btnMenosSimulado = document.querySelector('[data-js="btn-menos-simulado"]')
btnMenosSimulado.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-simulado"]').value > 0)
    document.querySelector('[data-js="input-simulado"]').stepDown()
})
const btnMaisSimulado = document.querySelector('[data-js="btn-mais-simulado"]')
btnMaisSimulado.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-simulado"]').value < 10)
    document.querySelector('[data-js="input-simulado"]').stepUp()
})

const btnMenosAv1 = document.querySelector('[data-js="btn-menos-av1"]')
btnMenosAv1.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av1"]').value > 0)
    document.querySelector('[data-js="input-av1"]').stepDown()
})
const btnMaisAv1 = document.querySelector('[data-js="btn-mais-av1"]')
btnMaisAv1.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av1"]').value < 10)
    document.querySelector('[data-js="input-av1"]').stepUp()
})

const btnMenosav2 = document.querySelector('[data-js="btn-menos-av2"]')
btnMenosav2.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av2"]').value > 0)
    document.querySelector('[data-js="input-av2"]').stepDown()
})
const btnMaisav2 = document.querySelector('[data-js="btn-mais-av2"]')
btnMaisav2.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av2"]').value < 10)
    document.querySelector('[data-js="input-av2"]').stepUp()
})

const btnMenosDiscursiva = document.querySelector('[data-js="btn-menos-av-discursiva"]')
btnMenosDiscursiva.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av-discursiva"]').value > 0)
    document.querySelector('[data-js="input-av-discursiva"]').stepDown()
})
const btnMaisDiscursiva = document.querySelector('[data-js="btn-mais-av-discursiva"]')
btnMaisDiscursiva.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av-discursiva"]').value < 10)
    document.querySelector('[data-js="input-av-discursiva"]').stepUp()
})

const btnMenosfinal = document.querySelector('[data-js="btn-menos-av-final"]')
btnMenosfinal.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av-final"]').value > 0)
    document.querySelector('[data-js="input-av-final"]').stepDown()
})
const btnMaisfinal = document.querySelector('[data-js="btn-mais-av-final"]')
btnMaisfinal.addEventListener('click',()=>{
    if(document.querySelector('[data-js="input-av-final"]').value < 10)
    document.querySelector('[data-js="input-av-final"]').stepUp()
})

const btnCalcular =document.querySelector('[data-js="btn-calcular"]')
btnCalcular.addEventListener('click',()=>{
    document.querySelector('[data-js="resultado"]').innerHTML = ''
    let notaSimulado = Number(document.querySelector('[data-js="input-simulado"]').value)
    localStorage.setItem('simulado', notaSimulado)
    let notaAv1 = Number(document.querySelector('[data-js="input-av1"]').value)
    localStorage.setItem('av1', notaAv1)
    let notaAv2 = Number(document.querySelector('[data-js="input-av2"]').value)
    localStorage.setItem('av2', notaAv2)
    let notaDiscursiva = Number(document.querySelector('[data-js="input-av-discursiva"]').value)
    localStorage.setItem('avDiscursiva', notaDiscursiva)
    let notaFinal = Number(document.querySelector('[data-js="input-av-final"]').value)
    localStorage.setItem('avFinal', notaFinal)
    
    if(notaSimulado === 0) notaSimulado = 'n'
    if(notaAv1 === 0) notaAv1 = 'n'
    if(notaAv2 === 0) notaAv2 = 'n'
    if(notaDiscursiva === 0) notaDiscursiva = 'n'
    if(notaFinal === 0) notaFinal = 'n'

    console.log(typeof(notaFinal), notaSimulado, notaAv1, notaAv2, notaDiscursiva, notaFinal);
    let resultado = calcularMedia([notaSimulado, notaAv1, notaAv2, notaDiscursiva, notaFinal])

    document.querySelector('[data-js="popup"]').showModal()

    resultadoContainer = document.querySelector('[data-js="resultado"]')

    for(let i = 0; i < resultado.length; i++){
        const resultadoItem = document.createElement('span')
        resultadoItem.textContent = resultado[i]

        if(i < resultado.length - 1){
            resultadoItem.style.marginBottom = '10px'
        }
        resultadoItem.style.display = 'block'
        resultadoContainer.appendChild(resultadoItem)
    }
    
})

const  btnClosepopup = document.querySelector('[data-js="btn-closepopup"]')
btnClosepopup.addEventListener('click', closePopup)

function closePopup() {
    document.querySelector('[data-js="popup"]').close()
}

const btnLimpar = document.querySelector('[data-js="btn-limpar"]')
btnLimpar.addEventListener('click', limpar)

function limpar() {
    document.querySelector('[data-js="input-simulado"]').value = 0
    document.querySelector('[data-js="input-av1"]').value = 0
    document.querySelector('[data-js="input-av2"]').value = 0
    document.querySelector('[data-js="input-av-discursiva"]').value = 0
    document.querySelector('[data-js="input-av-final"]').value = 0
}

function preencherInputNotas (){
    const inputSimulado = document.querySelector('[data-js="input-simulado"]')
    const notaArmazenadaSimulado = localStorage.getItem('simulado')
    if(notaArmazenadaSimulado) inputSimulado.value = notaArmazenadaSimulado

    const inputAv1 = document.querySelector('[data-js="input-av1"]')
    const notaArmazenadaAv1 = localStorage.getItem('av1')
    if(notaArmazenadaAv1) inputAv1.value = notaArmazenadaAv1

    const inputAv2 = document.querySelector('[data-js="input-av2"]')
    const notaArmazenadaAv2 = localStorage.getItem('av2')
    if(notaArmazenadaAv2) inputAv2.value = notaArmazenadaAv2

    const inputAvDiscursiva = document.querySelector('[data-js="input-av-discursiva"]')
    const notaArmazenadaAvDiscursiva = localStorage.getItem('avDiscursiva')
    if(notaArmazenadaAvDiscursiva) inputAvDiscursiva.value = notaArmazenadaAvDiscursiva

    const inputAvFinal = document.querySelector('[data-js="input-av-final"]')
    const notaArmazenadaAvFinal = localStorage.getItem('avFinal')
    if(notaArmazenadaAvFinal) inputAvFinal.value = notaArmazenadaAvFinal
}

