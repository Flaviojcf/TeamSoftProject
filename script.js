//variáveis
const gray = "#AEB6C1"
const red = "#D80000"
let total = 0


/* Função para diminuir a quantidade dos acompanhamentos  */
function Diminuir(id,rmvSvgId) {
    const elemento = document.getElementById(id)
    const innerTextNumber = Number(elemento.innerText)
    const svgElement= document.getElementById(rmvSvgId)
    if (innerTextNumber === 0) {
        return
    }

    else {
        const newValue = innerTextNumber - 1
        if(newValue === 0) {
            svgElement.setAttribute('fill', gray)
        }
        total -= 1
        if(total === 7 ) {
            transformColorRed()
        }
        elemento.innerText = newValue
    }
}


/* Função para aumentar a quantidade dos acompanhamentos  */
function Aumentar(id,rmvSvgId) {
    const elemento = document.getElementById(id)
    const innerTextNumber = Number(elemento.innerText)
    const svgElement= document.getElementById(rmvSvgId)
    if (total === 8) {
        transformColorGray()
        return
    }

    if (innerTextNumber === 8) {
        return
    }

    else {
        const newValue = innerTextNumber + 1
        if(newValue > 0) {
            svgElement.setAttribute('fill', red)
        }
        total += 1
        elemento.innerText = newValue
        if (total === 8 ){
            transformColorGray()
        }
    }

}

/* Função responsável por atribuir cor ao svg*/
function transformColorGray() {
    const idsDeAddSVG = ['addCheddar','addCrispy','addMolhoCheddar', 'addMolhoPicanha']
        
    idsDeAddSVG.forEach(id => {
       const svgElement= document.getElementById(id )
    
      svgElement.setAttribute('fill', gray)
    })

}

/* Função responsável por atribuir cor ao svg*/
function transformColorRed() {
    const idsDeAddSVG = ['addCheddar','addCrispy','addMolhoCheddar', 'addMolhoPicanha']
        
    idsDeAddSVG.forEach(id => {
       const svgElement= document.getElementById(id )
    
      svgElement.setAttribute('fill', red)
    })

}

/* Função responsável por atribuir cor ao svg*/
function transformMinusToRed() {
    const idsDeRmvSVG = ['rmvCheddar','rmvCrispy','rmvMolhoCheddar', 'rmvMolhoPicanha']
        
    idsDeRmvSVG.forEach(id => {
       const svgElement= document.getElementById(id)
    
      svgElement.setAttribute('fill', red)
    })
}


/* Função responsável por diminuir a quantidade de itens do pedido */
function rmvOrder() {
    const elementoOrder = document.getElementById('numberOrder')
    const innerTextNumber = Number(elementoOrder.innerText)
    const newValue = innerTextNumber - 1
    const svgElement= document.getElementById('rmvOrder')
    if(newValue === 0) {
        svgElement.setAttribute('fill', gray)
    }
    if(innerTextNumber === 0) {
        return
    }
    elementoOrder.innerText = newValue
  
}

/* Função responsável por aumentar a quantidade de itens do pedido */
function addOrder(){
    const elementoOrder = document.getElementById('numberOrder')
    const innerTextNumber = Number(elementoOrder.innerText)
    const newValue = innerTextNumber + 1
    const svgElement= document.getElementById('rmvOrder')
    if(newValue > 0) {
        svgElement.setAttribute('fill', red)
    }
    elementoOrder.innerText = newValue
}   






/* Abertura do modal */
const Modal = {
    
    open() {
        const totalOrder = document.getElementById('Circle')
        const elementoOrder = document.getElementById('numberOrder')
        const innerTextNumber = Number(elementoOrder.innerText)
        totalOrder.innerText = innerTextNumber
        console.log(innerTextNumber)

        if (innerTextNumber === 0) {
            window.alert('É necessário informar a quantidade de itens.')
        }
        else {
        document.querySelector('.modalOverlay').classList.add('active')

        setTimeout(()=> {
            document.querySelector('.modalOverlay').classList.remove('active')},5000
        )
         createElement()
        }
    }
}

/*Passando a lista dinâmica parao modal */
function createElement(){
    const listaAcompanhamentos = ['queijoCheddar','cebolaCrispy','molhoCheddar', 'molhoPicanha']
    let lists = `<li>1 Carne 250gr </li>
                 <li>1 Bacon </li> `
    const list = document.getElementById('lista')
    listaAcompanhamentos.forEach(id => {
        const listaId = document.getElementById(id)
        const quantidadeLista = Number(listaId.innerText)
        if(quantidadeLista == 0 ) {
            return
        }
        else {
        lists += `<li>${quantidadeLista} ${changeName(id)}</li>  ` 
        }
     })
  
        list.innerHTML = lists
}

/* Atribuindo o nome correto do acompanhamento */
function changeName(id) {
    switch (id) {
       case 'queijoCheddar':
          return "Queijo Cheddar";
       case 'cebolaCrispy':
          return "Cebola crispy";
       case 'molhoCheddar':
          return "Molho cheddar";
       case 'molhoPicanha':
          return "Molho de picanha";
    }
 }