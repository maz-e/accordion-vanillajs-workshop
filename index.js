const accordion = document.getElementById('accordion')
let oldTarget

function closeAllAccordionContents() {
    for (let dd of accordion.querySelectorAll('dd')) {
        dd.hidden = true
    }
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

