function calcularMedia(notas) {
    let resultado = []
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
                somaPesoNotas = somaPesoNotas + 0.5
                continue
            } else {
                simulado = true
                notas[i] = notas[i] * 0.5 / 10
            }
        }

        if (i === 1) {
            if (notas[i] === 'n') {
                notas[i] = 0
                somaPesoNotas = somaPesoNotas + 1.5
                continue
            } else {
                av1 = true
                notas[i] = notas[i] * 1.5 / 10
                media += notas[i]
            }
        }

        if (i === 2) {
            if (notas[i] === 'n') {
                notas[i] = 0
                somaPesoNotas = somaPesoNotas + 1.5
                continue
            } else {
                av2 = true
                notas[i] = notas[i] * 1.5 / 10
                media += notas[i]
            }
        }

        if (i === 3) {
            if (notas[i] === 'n') {
                notas[i] = 0
                somaPesoNotas = somaPesoNotas + 4
                continue
            } else {
                avDiscursiva = true
                notas[i] = notas[i] * 4 / 10
                media += notas[i]
            }
        }

        if (i === 4) {
            if (notas[i] === 'n') {
                notas[i] = 0
                somaPesoNotas = somaPesoNotas + 3
                continue
            } else {
                avFinal = true
                notas[i] = notas[i] * 3 / 10
                media += notas[i]
            }
        }

    }

    if (media >= 7) {

        resultado.push('vc ja esta aprovado')
    } else {
        if (somaPesoNotas > 0) {
            let media2 = (media + notas[0])
            const valorRestante = (7 - (media2)).toFixed(2)

            function notaNecessaria(porcentagem, valorRestante) {
                return porcentagem * valorRestante / 100
            }

            function notaNecessariaReal(notaNecessaria, pesoNota) {
                for (let i = 1; i <= 10; i++) {
                    if (i * pesoNota / 10 >= notaNecessaria || (i * pesoNota / 10) + (media2) >= 7) {
                        return [i, i * pesoNota / 10]
                    }
                }
                return [11,11]
            }

            if (simulado === false) {
                const porcentagem0 = 0.5 / somaPesoNotas * 100
                const notaNecessaria0 = notaNecessaria(porcentagem0, valorRestante)
                const notaNecessariareal0 = notaNecessariaReal(notaNecessaria0, 0.5)
                if (notaNecessariareal0[0] === 11) {
                    resultado.push(`não tem como ser aprovado`);
                } else {   
                    media2 = media2 + notaNecessariareal0[1]
                    console.log(notas[0]);
                    resultado.push(`Você precisa tirar ${notaNecessariareal0[0]} no simulado`);
                }

            }
            if (av1 === false) {
                const porcentagem1 = 1.5 / somaPesoNotas * 100
                const notaNecessaria1 = notaNecessaria(porcentagem1, valorRestante)
                const notaNecessariareal1 = notaNecessariaReal(notaNecessaria1, 1.5)
                if (notaNecessariareal1[0] === 11) {
                    resultado.push('não tem como ser aprovado');
                } else {
                    media2 = media2 + notaNecessariareal1[1]
                    resultado.push(`Você precisa tirar ${notaNecessariareal1[0]} na avaliação 1`)
                }
            }
            if (av2 === false) {
                const porcentagem2 = 1.5 / somaPesoNotas * 100
                const notaNecessaria2 = notaNecessaria(porcentagem2, valorRestante)
                const notaNecessariareal2 = notaNecessariaReal(notaNecessaria2, 1.5)
                if (notaNecessariareal2[0] === 11) {
                    resultado.push('não tem como ser aprovado');
                } else {
                    media2 = media2 + notaNecessariareal2[1]
                    resultado.push(`Você precisa tirar ${notaNecessariareal2[0]} na avaliação 2`);
                }
            }
            if (avDiscursiva === false) {
                const porcentagem3 = 4 / somaPesoNotas * 100
                const notaNecessaria3 = notaNecessaria(porcentagem3, valorRestante)
                const notaNecessariareal3 = notaNecessariaReal(notaNecessaria3, 4)
                if (notaNecessariareal3[0] === 11) {
                    resultado.push('não tem como ser aprovado');
                } else {
                    media2 = media2 + notaNecessariareal3[1]
                    resultado.push(`Você precisa tirar ${notaNecessariareal3[0]} na avaliação discursiva`);
                }
            }
            if (avFinal === false) {
                const porcentagem4 = 3 / somaPesoNotas * 100
                const notaNecessaria4 = notaNecessaria(porcentagem4, valorRestante)
                const notaNecessariareal4 = notaNecessariaReal(notaNecessaria4, 3)
                if (notaNecessariareal4[0] === 11) {
                    resultado.push('não tem como ser aprovado');
                } else {
                    media2 = media2 + notaNecessariareal4[1]
                    resultado.push(`Você precisa tirar ${notaNecessariareal4[0]} na avaliação final`);
                }
            }
        }
    }

    resultado.push("Sua média SEM o simulado é: " + (media).toFixed(2))
    media = media + notas[0]
    resultado.push("Sua média COM o simulado é: " + (media).toFixed(2))

    if (media >= 7) {
        resultado.push("Aprovado")
    } else {
        resultado.push("Reprovado")
    }
    return resultado
}



