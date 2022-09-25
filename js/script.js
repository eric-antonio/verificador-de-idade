function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')


    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique o ano Novamente!')
    }else{
       var fsex = window.document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <= 10){
                img.setAttribute('src','img/criancas/foto-menino.jpg')
            }else if(idade < 21){
                img.setAttribute('src','img/jovens/foto-rapaz.jpg')
            }else if(idade < 50){
                img.setAttribute('src','img/adulto/foto-adulto.jpg')
            }else{
                img.setAttribute('src','img/idosos/foto-idoso.jpg')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }

}