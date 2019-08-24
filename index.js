const accordion = document.getElementById('accordion')
const addBtn = document.getElementById('add-btn')
let oldTarget

function closeAllAccordionContents() {
    for (let dd of accordion.querySelectorAll('dd')) {
        dd.hidden = true
    }
}

function addContent() {
    const total = accordion.children.length / 2
    let dt = document.createElement('dt')
    let dd = document.createElement('dd') 

    dt.className = 'Accordion-title'
    dt.innerHTML = `Section ${total + 1}`

    dd.className = 'Accordion-body'
    dd.innerHTML = `<p>Section ${total + 1} Content... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laboriosam fuga accusamus quis veritatis quo eum consequatur voluptates nemo incidunt sapiente necessitatibus aspernatur vitae minima hic, exercitationem repellat explicabo quaerat?</p>`

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

addBtn.addEventListener("click", addContent)