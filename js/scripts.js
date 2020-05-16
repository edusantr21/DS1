// Calculos da questão de área
var resultadoArea = document.getElementById('resultadoArea')
var btCalculaArea = document.getElementById('btCalculaArea')
btCalculaArea.setAttribute('onClick', 'calculaArea()')
var resultadoArea = document.getElementById('resultadoArea')


const calculaArea = () => {
    let ComprimentoFrontal = document.getElementById('ComprimentoFrontal').value
    let ComprimentoLateral = document.getElementById('ComprimentoLateral').value
    resultadoArea.innerHTML = `A área total do terreno é de ${ ComprimentoLateral * ComprimentoFrontal} Metros Quadrados`
}

// Calculos da questão do HARAS

var totalFerraduras = document.getElementById('totalFerraduras')
var btnCalculaFerraduras = document.getElementById('btnCalculaFerraduras')
btnCalculaFerraduras.setAttribute('onClick', 'calculaFerraduras()')

const calculaFerraduras = () => {
    let totalCavalos = document.getElementById('totalCavalos').value
    if (totalCavalos !== '1') {
        totalFerraduras.innerHTML = `Para ${totalCavalos} cavalos, serão necessárias ${ totalCavalos * 4} ferraduras`
    } else {
        totalFerraduras.innerHTML = `Para ${totalCavalos} cavalo, será necessárias ${ totalCavalos * 4} ferraduras`
    }
}
