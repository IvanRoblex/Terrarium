// Mandaremos a llamar a todos los id de planta para poder manipularlos
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));


// onpointerdownse activa cuando se presiona un botón o,
//  en nuestro caso, se toca un elemento que se puede arrastrar.

function dragElement(terrariumElement){
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;


// Cuando se activa el onpointerdown evento, se invoca la función pointerDrag
function pointerDrag(e){
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

// En esta función, edita mucho las posiciones iniciales 1-4 que establece como variables locales en la función externa.
function elementDrag(e){
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos2, pos3, pos4);
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}

// Esta pequeña función restablece los eventos onpointerupy onpointermovepara 
// que pueda reiniciar el progreso de su planta comenzando a arrastrarla nuevamente o comenzar a arrastrar una nueva planta.
function stopElementDrag(){
    document.onpointerup = null;
    document.onpointermove = null;
}
}