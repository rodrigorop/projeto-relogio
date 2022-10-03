function carregar() {
    
    var titulo = window.document.querySelector('h1')
    
    var data = window.document.querySelector('#hora')
    hora = new Date().getHours()
    hora = ("00" + hora).slice(-2) 

    // puxo a hora e transformo ela em 2 casas decimais

    minutos = new Date().getMinutes()
    minutos = ("00" + minutos).slice(-2)

    // puxo os minutos e transformo eles em 2 casas decimais

    data.innerHTML = `Agora são ${hora}:${minutos}`

    var img = window.document.querySelector('#imagem')

    if(hora >= 0 && hora < 12) {
        //BOM DIA
        titulo.innerHTML = ('BOM DIA!')
        img.src = './img/dia.png'
        document.body.style.background = '#b58718'

    } else if(hora >=12 && hora < 18) {
        //BOA TARDE
        titulo.innerHTML = ('BOA TARDE!')
        img.src = './img/tarde.png'
        document.body.style.background = '#7a4f60'
    } else {
        //BOA NOITE
        titulo.innerHTML = ('BOA NOITE')
        img.src = './img/noite.png'
        document.body.style.background = '#173750'
    }

    var frase2 = window.document.querySelector('#frase2')
    var semana = new Date().getDay()

    switch(semana) {
        case 0:
            semana = ('domingo')
        break
        case 1:
            semana = ('segunda feira')
        break
        case 2:
            semana = ('terça feira')
        break
        case 3:
            semana = ('quarta feira')
        break
        case 4:
            semana = ('quinta feira')
        break
        case 5:
            semana = ('sexta feira')
        break
        case 6:
            semana = ('sábado')
        break
    }
    // criando variavel dia e colocandoo 2 casas decimais
    var dia = new Date().getDate()
    dia = ("00" + dia).slice(-2)
    // criando variavel mes e colocando 2 casas decimais
    var mes = new Date().getMonth()
    mes = (mes + 1)
    mes = ("00" + mes).slice(-2)
    // criando variavel ano
    var ano = new Date().getFullYear()

    frase2.innerHTML = `Hoje é ${semana}, dia ${dia}/${mes}/${ano}.`
}