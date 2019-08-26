const accordion = document.getElementById('accordion')
const addBtn = document.getElementById('add-btn')
let oldTarget

function closeAllAccordionContents() {
    for (let dd of accordion.querySelectorAll('dd')) {
        dd.hidden = true
    }
}

function addContent(content) {
    const { name, status, species, gender, image, created } = content
    let dt = document.createElement('dt')
    let dd = document.createElement('dd') 

    dt.className = 'Accordion-title'
    dt.innerHTML = name

    dd.className = 'Accordion-body'
    dd.innerHTML = `<p>${species} - ${gender}<br/><img src="${image}" alt="${name}"></p>`

    accordion.append(dt)
    accordion.append(dd)
    closeAllAccordionContents()
}

closeAllAccordionContents()

accordion.onclick = function(event) {
    const target = event.target 

    //También prodría utilizar 'target.className'
    if(target.tagName == 'DT') {
        if(oldTarget && target !== oldTarget) {
            closeAllAccordionContents()
        }
        target.nextElementSibling.hidden = !target.nextElementSibling.hidden
    }
    
    oldTarget = target
}

addBtn.addEventListener("click", function() {
    const request = new XMLHttpRequest()
    const url = 'https://rickandmortyapi.com/api/character/'
    
    //Only to add different characters each time you add content. It could have been made with random numbers.  
    const nextID = (accordion.children.length / 2)

    request.onreadystatechange = async function() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                addContent(JSON.parse(request.response))
            } else {
                alert('Hubo problemas con la petición.');
            }
        }
    }
    request.open('GET', url + nextID)
    request.send()
})