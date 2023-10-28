

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
    let notaSimulado = Number(document.querySelector('[data-js="input-simulado"]').value)
    let notaAv1 = Number(document.querySelector('[data-js="input-av1"]').value)
    let notaAv2 = Number(document.querySelector('[data-js="input-av2"]').value)
    let notaDiscursiva = Number(document.querySelector('[data-js="input-av-discursiva"]').value)
    let notaFinal = Number(document.querySelector('[data-js="input-av-final"]').value)
    
    if(notaSimulado === 0) notaSimulado = 'n'
    if(notaAv1 === 0) notaAv1 = 'n'
    if(notaAv2 === 0) notaAv2 = 'n'
    if(notaDiscursiva === 0) notaDiscursiva = 'n'
    if(notaFinal === 0) notaFinal = 'n'

    console.log(typeof(notaFinal), notaSimulado, notaAv1, notaAv2, notaDiscursiva, notaFinal);
    let resultado = calcularMedia([notaSimulado, notaAv1, notaAv2, notaDiscursiva, notaFinal])

    document.querySelector('[data-js="popup"]').style.display = 'block';
    document.querySelector('[data-js="overlay"]').style.display = 'block';

    document.querySelector('[data-js="resultado"]').textContent = `${resultado[0]}`
})

const  btnClosepopup = document.querySelector('[data-js="btn-closepopup"]')
btnClosepopup.addEventListener('click', closePopup)

function closePopup() {
    document.querySelector('[data-js="popup"]').style.display = 'none';
    document.querySelector('[data-js="overlay"]').style.display = 'none';
  }

  document.querySelector('[data-js="overlay"]').addEventListener('click', closePopup);


