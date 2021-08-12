function contar(){
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    
    if (inicio.value.lenght == 0 ||fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)
    
        var x = ini
        if (ini<fi) {
            while (x<=fi) {
                res.innerHTML += x + ' '
                x+=pas
            }
    
        } else {
            while(x>=fi) {
                res.innerHTML += x + ' '
                x-=pas
            }
        }
    }

    /*var p = document.createElement('p')
    p.setAttribute('id', 'ir')
    res.appendChild(p)
    p.textContent = inicio*/
}

function limpar() {
    res.innerHTML = ''
}