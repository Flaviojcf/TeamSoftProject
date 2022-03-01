//variáveis
const gray = "#AEB6C1"
const red = "#D80000"
let total = 0
let content = ''

/* Função para diminuir a quantidade dos acompanhamentos  */
function decrease(id,rmvSvgId) {
    const element = document.getElementById(id)
    const innerTextNumber = Number(element.innerText)
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
        element.innerText = newValue
    }
}


/* Função para aumentar a quantidade dos acompanhamentos  */
function increase(id,rmvSvgId) {
    const element = document.getElementById(id)
    const innerTextNumber = Number(element.innerText)
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
        element.innerText = newValue
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
    const elementOrder = document.getElementById('numberOrder')
    const innerTextNumber = Number(elementOrder.innerText)
    const newValue = innerTextNumber - 1
    const svgElement= document.getElementById('rmvOrder')
    if(newValue === 0) {
        svgElement.setAttribute('fill', gray)
    }
    if(innerTextNumber === 0) {
        return
    }
    elementOrder.innerText = newValue
  
}

/* Função responsável por aumentar a quantidade de itens do pedido */
function addOrder(){
    const elementOrder = document.getElementById('numberOrder')
    const innerTextNumber = Number(elementOrder.innerText)
    const newValue = innerTextNumber + 1
    const svgElement= document.getElementById('rmvOrder')
    if(newValue > 0) {
        svgElement.setAttribute('fill', red)
    }
    elementOrder.innerText = newValue
}   






/* Abertura do modal */
const Modal = {
    
    open() {
        const totalOrder = document.getElementById('Circle')
        const elementOrder = document.getElementById('numberOrder')
        const innerTextNumber = Number(elementOrder.innerText)
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

/*Passando a lista dinâmica para o modal */
function createElement(){
    const listItens = ['queijoCheddar','cebolaCrispy','molhoCheddar', 'molhoPicanha']
    let lists = `<li>1 Carne 250gr </li>
                 <li>1 Bacon </li> `
    const list = document.getElementById('lista')
    listItens.forEach(id => {
        const listId = document.getElementById(id)
        const quantList = Number(listId.innerText)
        if(quantList == 0 ) {
            return
        }
        else {
        lists += `<li>${quantList} ${changeName(id)}</li>  ` 
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

/* Consumindo parte do api */

 fetch('https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products').then(resposta =>{
    return resposta.json()}).then(cont=>{
        content = cont
        getApiItens()
})

function getApiItens(){
    const cebola = document.getElementById('cebola')
    const cheeseCheddar = document.getElementById('cheeseCheddar')
    const sauceCheddar =  document.getElementById('sauceCheddar')
    const sauceMeat = document.getElementById('sauceMeat')
    

    cheeseCheddar.innerText = content[0].ingredients[0].itens[0].nm_item
    cebola.innerText = content[0].ingredients[0].itens[1].nm_item
    sauceCheddar.innerText = content[0].ingredients[0].itens[2].nm_item
    sauceMeat.innerText = content[0].ingredients[0].itens[3].nm_item
}

