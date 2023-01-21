const resultTextDisplay = document.querySelector('.result-text')
const drawBtn = document.getElementById('draw-button')
const drawBtnTwo = document.getElementById('draw-button-two')
const drawIsOver = document.getElementById('end-message')
const annaChosen = document.getElementById('ANNA')
const januszChosen = document.getElementById('JANUSZ')
const marysiaChosen = document.getElementById('MARYSIA')
const mateuszChosen = document.getElementById('MATEUSZ')
const asiaChosen = document.getElementById('ASIA')
const adamChosen = document.getElementById('ADAM')
const agnieszkaChosen = document.getElementById('AGNIESZKA')
const łukaszChosen = document.getElementById('ŁUKASZ')
const nataliaChosen = document.getElementById('NATALIA')
const patrykChosen = document.getElementById('PATRYK')






let firstChoice = ''
let secondChoice = ''


let SELECTION1 = ['ANNA', 'JANUSZ', 'MARYSIA', 'MATEUSZ', 'ASIA', 'ADAM', 'AGNIESZKA', 'ŁUKASZ', 'NATALIA', 'PATRYK'];



let SELECTION2 = ['ANI', 'JANUSZOWI', 'MARYSI', 'MATEUSZOWI', 'ASI', 'ADAMOWI', 'AGNIESZCE', 'ŁUKASZOWI', 'NATALI', 'PATRYKOWI'];

let EXCLUDED = [];

function checkArray() {
    if (SELECTION1.length === 0 && SELECTION2.length === 0) {
        console.log('END')
        drawBtn.classList.add('hidden')
        drawIsOver.innerHTML = 'To są ostateczne wyniki losowania'
    } else {
        firstSelection();
}
}


function firstSelection() {
    console.log(SELECTION2)
    const randomIndexOne = Math.floor(Math.random() * SELECTION1.length);
   firstChoice = SELECTION1[randomIndexOne];
   SELECTION1 = SELECTION1.filter(item => item !== firstChoice)
   console.log(SELECTION1)
   console.log(firstChoice)
   highlightName();
   excludeSameName();
   console.log(SELECTION2)
   addResult();
   drawBtn.classList.add('hidden')
   drawBtnTwo.classList.add('active')
}




function secondSelection() {
    const randomIndexTwo = Math.floor(Math.random() * SELECTION2.length);
   secondChoice = SELECTION2[randomIndexTwo];
   SELECTION2 = SELECTION2.filter(item => item !== secondChoice)
   EXCLUDED.push(secondChoice);
   console.log(EXCLUDED)
   console.log(SELECTION2)
   includeTheNameAgain2();
   //includeTheNameAgain();
   addResultTwo();
   drawBtnTwo.classList.remove('active')
   drawBtn.classList.remove('hidden')
   secondChoice = ''

   
  
   
   if (SELECTION1.length === 0 && SELECTION2.length === 0) {
    console.log('END')
    drawBtn.classList.add('hidden')
    drawIsOver.innerHTML = 'To są ostateczne wyniki losowania'
} 
   
}


function addResult() {
    const addingResult = document.createElement('div')
    addingResult.classList.add('adding-result')
    addingResult.innerHTML = `Wylosowaną osobą jest ${firstChoice}`
    resultTextDisplay.append(addingResult)
    return;

    
}

function addResultTwo() {
    const addingResult = document.createElement('div')
    addingResult.classList.add('adding-result-two')
    addingResult.innerHTML = `${firstChoice} robi prezent ${secondChoice}`
    resultTextDisplay.append(addingResult)
    return;
}

function highlightName() {
    switch(firstChoice) {
        case 'ANNA':
            annaChosen.classList.add('highlight');
        break;
        case 'JANUSZ':
            januszChosen.classList.add('highlight');
        break;
        case 'MARYSIA':
            marysiaChosen.classList.add('highlight');
        break;
        case 'MATEUSZ':
            mateuszChosen.classList.add('highlight');
        break;
        case 'ASIA':
            asiaChosen.classList.add('highlight');
        break;
        case 'ADAM':
            adamChosen.classList.add('highlight');
        break;
        case 'AGNIESZKA':
            agnieszkaChosen.classList.add('highlight');
        break;
        case 'ŁUKASZ':
            łukaszChosen.classList.add('highlight');
        break;
        case 'NATALIA':
            nataliaChosen.classList.add('highlight');
        break;
        case 'PATRYK':
            patrykChosen.classList.add('highlight');
        break;
        default:
            console.log('default')
    }
}

function excludeSameName() {
    switch(firstChoice) {
        case 'ANNA':
            SELECTION2 = SELECTION2.filter(item => item !== 'ANI');
        break;
        case 'JANUSZ':
            SELECTION2 = SELECTION2.filter(item => item !== 'JANUSZOWI');
        break;
        case 'MARYSIA':
            SELECTION2 = SELECTION2.filter(item => item !== 'MARYSI');
        break;
        case 'MATEUSZ':
            SELECTION2 = SELECTION2.filter(item => item !== 'MATEUSZOWI');
        break;
        case 'ASIA':
            SELECTION2 = SELECTION2.filter(item => item !== 'ASI');
        break;
        case 'ADAM':
            SELECTION2 = SELECTION2.filter(item => item !== 'ADAMOWI');
        break;
        case 'AGNIESZKA':
            SELECTION2 = SELECTION2.filter(item => item !== 'AGNIESZCE');
        break;
        case 'ŁUKASZ':
            SELECTION2 = SELECTION2.filter(item => item !== 'ŁUKASZOWI');
        break;
        case 'NATALIA':
            SELECTION2 = SELECTION2.filter(item => item !== 'NATALI');
        break;
        case 'PATRYK':
            SELECTION2 = SELECTION2.filter(item => item !== 'PATRYKOWI');
        break;
        default:
            console.log('default-nnn')
    }
}

function includeTheNameAgain2() {
    if (firstChoice === 'ANNA' && !EXCLUDED.includes('ANI')) {
        SELECTION2.push('ANI')
        console.log('PUSHEDanna')
    } else if (firstChoice === 'JANUSZ' && !EXCLUDED.includes('JANUSZOWI')) {
        SELECTION2.push('JANUSZOWI')
        console.log('PUSHEDjanusz')
    } else if (firstChoice === 'MARYSIA' && !EXCLUDED.includes('MARYSI')) {
        SELECTION2.push('MARYSI')
        console.log('PUSHEDmarysia')
    } else if (firstChoice === 'MATEUSZ' && !EXCLUDED.includes('MATEUSZOWI')) {
        SELECTION2.push('MATEUSZOWI')
        console.log('PUSHEDmateusz')
    } else if (firstChoice === 'ASIA' && !EXCLUDED.includes('ASI')) {
        SELECTION2.push('ASI')
        console.log('PUSHEDasia')
    } else if (firstChoice === 'ADAM' && !EXCLUDED.includes('ADAMOWI')) {
        SELECTION2.push('ADAMOWI')
        console.log('PUSHEDadam')
    } else if (firstChoice === 'AGNIESZKA' && !EXCLUDED.includes('AGNIESZCE')) {
        SELECTION2.push('AGNIESZCE')
        console.log('PUSHEDagnieszce')
    }   else if (firstChoice === 'ŁUKASZ' && !EXCLUDED.includes('ŁUKASZOWI')) {
        SELECTION2.push('ŁUKASZOWI')
        console.log('PUSHEDłukasz')
    } else if (firstChoice === 'NATALIA' && !EXCLUDED.includes('NATALI')) {
        SELECTION2.push('NATALI')
        console.log('PUSHEDnatalia') 
    }  else if (firstChoice === 'PATRYK' && !EXCLUDED.includes('PATRYKOWI')) {
        SELECTION2.push('PATRYKOWI')
        console.log('PUSHEDpatryk')
    } else {
        console.log('ELSE')
    }
}


/*function includeTheNameAgain() {
    switch(firstChoice) {
        case 'ANNA' && !EXCLUDED.includes('ANI')  === true:
        
           SELECTION2.push('ANI')
            console.log('annaPUSHED')
        break;
        case 'JANUSZ' && !EXCLUDED.includes('JANUSZOWI'):
            
            SELECTION2.push('JANUSZOWI')
            console.log('janusz')
        break;
        case 'MARYSIA' && !EXCLUDED.includes('MARYSI'):
            
            SELECTION2.push('MARYSI')
            console.log('marysia')
        break;
        case 'MATEUSZ' && !EXCLUDED.includes('MATEUSZOWI'):
            
            SELECTION2.push('MATEUSZOWI')
            console.log('mateusz')
        break;
        case 'ASIA' && !EXCLUDED.includes('ASI'):
            
            SELECTION2.push('ASI')
            console.log('asia')
        break;
        case 'ADAM' && !EXCLUDED.includes('ADAMOWI'):
           
           SELECTION2.push('ADAMOWI')
            console.log('adam')
        break;
        case 'AGNIESZKA' && !EXCLUDED.includes('AGNIESZCE'):
            
            SELECTION2.push('AGNIESZCE')
            console.log('agnieszka')
        break;
        case 'ŁUKASZ' && !EXCLUDED.includes('ŁUKASZOWI'):
            
            SELECTION2.push('ŁUKASZOWI')
            console.log('łukasz')
        break;
        case 'NATALIA' && !EXCLUDED.includes('NATALI'):
            
            SELECTION2.push('NATALI')
            console.log('natalia')
        break;
        case 'PATRYK' && !EXCLUDED.includes('PATRYKOWI'):
            
            SELECTION2.push('PATRYKOWI')
            console.log('patryk')
        break;
        default:
            console.log('default-sss')
    }
} */










drawBtn.addEventListener('click', firstSelection)
drawBtnTwo.addEventListener('click', secondSelection)