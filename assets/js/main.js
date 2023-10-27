function calcularMedia(notas) {
    let media = 0
    let simulado = false
    let av1 = false
    let av2 = false
    let avDiscursiva = false
    let avFinal = false
    let somaPesoNotas = 0


    for (let i = 0; i < notas.length; i++) {
        if (i === 0) {
            if (notas[i] === 'n') {
                notas[i] = 0
                console.log('Nota do simulado não enviada');
                somaPesoNotas = somaPesoNotas + 0.5
                continue
            } else {
                simulado = true
                notas[i] = notas[i] * 0.5 / 10
                console.log(`Nota do simulado: ${notas[i]}`)
            }
        }

        if (i === 1) {
            if (notas[i] === 'n') {
                notas[i] = 0
                console.log(`nota da avaliação ${i} não enviada`)
                somaPesoNotas = somaPesoNotas + 1.5
                continue
            } else {
                av1 = true
                notas[i] = notas[i] * 1.5 / 10
                console.log(`Nota da avaliação ${i}: ${notas[i]}`)
                media += notas[i]
            }
        }

        if (i === 2) {
            if (notas[i] === 'n') {
                notas[i] = 0
                console.log(`nota da avaliação ${i} não enviada`)
                somaPesoNotas = somaPesoNotas + 1.5
                continue
            } else {
                av2 = true
                notas[i] = notas[i] * 1.5 / 10
                console.log(`Nota da avaliação ${i}: ${notas[i]}`)
                media += notas[i]
            }
        }

        if (i === 3) {
            if (notas[i] === 'n') {
                notas[i] = 0
                console.log('Nota da avaliação discursiva não enviada');
                somaPesoNotas = somaPesoNotas + 4
                continue
            } else {
                avDiscursiva = true
                notas[i] = notas[i] * 4 / 10
                console.log(`Nota da avaliação discursiva: ${notas[i]}`)
                media += notas[i]
            }
        }

        if (i === 4) {
            if (notas[i] === 'n') {
                notas[i] = 0
                console.log('Nota da avaliação final não enviada');
                somaPesoNotas = somaPesoNotas + 3
                continue
            } else {
                avFinal = true
                notas[i] = notas[i] * 3 / 10
                console.log(`Nota da avaliação final: ${notas[i]}`)
                media += notas[i]
            }
        }

    }

    if(media >= 7){
        console.log('vc ja esta aprovado')
    }else{
        if (somaPesoNotas > 0) {
            let media2 = (media + notas[0])
            const valorRestante = (7 - (media2)).toFixed(2)
    
            function notaNecessaria(porcentagem, valorRestante) {
                return porcentagem * valorRestante / 100
            }
    
            function notaNecessariaReal(notaNecessaria, pesoNota) {
                console.log(notaNecessaria);
                for (let i = 1; i <= 10; i++) {
                    if (i * pesoNota / 10 >= notaNecessaria || (i * pesoNota / 10) + (media2) >= 7) {
                        console.log(i);
                        return [i, i * pesoNota / 10]
                    } 
                }
                return 11
                }
            
    
            if (simulado === false) {
                const porcentagem0 = 0.5 / somaPesoNotas * 100
                const notaNecessaria0 = notaNecessaria(porcentagem0, valorRestante)
                const notaNecessariareal0 = notaNecessariaReal(notaNecessaria0, 0.5)
                if (notaNecessariareal0[0] === 11) {
                    console.log('não tem como ser aprovado');
                } else {
                    media2 = media2 + notaNecessariareal0[1]
                    notas[0] = notaNecessariareal0[1]
                    console.log(`Você precisa tirar ${notaNecessariareal0[0]} no simulado`);
                }
    
            }
            if (av1 === false) {
                const porcentagem1 = 1.5 / somaPesoNotas * 100
                const notaNecessaria1 = notaNecessaria(porcentagem1, valorRestante)
                const notaNecessariareal1 = notaNecessariaReal(notaNecessaria1, 1.5)
                if (notaNecessariareal1[0] === 11) {
                    console.log('não tem como ser aprovado');
                }else{
                    media2 = media2 + notaNecessariareal1[1]
                    console.log(`Você precisa tirar ${notaNecessariareal1[0]} na avaliação 1`)
                }
            }
            if (av2 === false) {
                const porcentagem2 = 1.5 / somaPesoNotas * 100
                const notaNecessaria2 = notaNecessaria(porcentagem2, valorRestante)
                const notaNecessariareal2 = notaNecessariaReal(notaNecessaria2, 1.5)
                if (notaNecessariareal2[0] === 11) {
                    console.log('não tem como ser aprovado');
                }else{
                    media2 = media2 + notaNecessariareal2[1]
                    console.log(`Você precisa tirar ${notaNecessariareal2[0]} na avaliação 2`);
                }
            }
            if (avDiscursiva === false) {
                const porcentagem3 = 4 / somaPesoNotas * 100
                const notaNecessaria3 = notaNecessaria(porcentagem3, valorRestante)
                const notaNecessariareal3 = notaNecessariaReal(notaNecessaria3, 4)
                if (notaNecessariareal3[0] === 11) {
                    console.log('não tem como ser aprovado');
                }else{
                    media2 = media2 + notaNecessariareal3[1]
                    console.log(`Você precisa tirar ${notaNecessariareal3[0]} na avaliação discursiva`);
                }
            }
            if (avFinal === false) {
                const porcentagem4 = 3 / somaPesoNotas * 100
                const notaNecessaria4 = notaNecessaria(porcentagem4, valorRestante)
                const notaNecessariareal4 = notaNecessariaReal(notaNecessaria4, 3)
                if (notaNecessariareal4[0] === 11) {
                    console.log('não tem como ser aprovado');
                }else{
                    media2 = media2 + notaNecessariareal4[1]
                    console.log(`Você precisa tirar ${notaNecessariareal4[0]} na avaliação final`);
                }
            }
        }
    }


    console.log("Sua média SEM o simulado é: " + media)
    media = media + notas[0]
    console.log("Sua média COM o simulado é: " + media)

    if (media >= 7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}

calcularMedia(['n', 'n', 'n', 10, 10])

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
