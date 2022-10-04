function carregar() {
    
    var titulo = window.document.querySelector('h1')
    //Variavel para o título, ele mudará conforme o periodo(manhã, tarde ou noite)

    var lhorario = window.document.querySelector('#hora')
    var horario = new Date().toLocaleTimeString().substring(0, 5)
    //Variavel horario que é hora:minutos

    var hora = horario.substring(0,2)
    //Variavel hora que é somente a hora.

    lhorario.innerHTML = `Agora são ${horario}.`
    //aqui fica a segunda frase

    var img = window.document.querySelector('#imagem')
    //seleciono o local da imagem

    if (hora >= 0 && hora < 12) {
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
    //criei uma variavel para a semana

    switch(semana) {
        case 0:
            semana = ('domingo')
        break
        case 1:
            semana = ('segunda-feira')
        break
        case 2:
            semana = ('terça-feira')
        break
        case 3:
            semana = ('quarta-feira')
        break
        case 4:
            semana = ('quinta-feira')
        break
        case 5:
            semana = ('sexta-feira')
        break
        case 6:
            semana = ('sábado')
        break
    }
    //switch do numero da semana para o nome de semana
    
    var data = new Date().toLocaleDateString()
    // data é a variavel da data completa

    frase2.innerHTML = `Hoje é ${semana}, dia ${data}.`
    // aqui fica a primeira frase
}