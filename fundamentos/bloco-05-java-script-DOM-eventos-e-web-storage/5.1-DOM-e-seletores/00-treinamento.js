const titleH1 = document.getElementsByTagName('h1')[0];

titleH1.style.color = "green";
titleH1.style.backgroundColor = 'rgb(149, 150, 200)';
titleH1.style.margin = '1px'
titleH1.style.padding = '1px'

const pe = document.getElementsByTagName('footer')[0];

pe.style.border = '3px solid black';
pe.style.backgroundColor = 'rgb(34, 77, 34)';
pe.style.padding = '10px'

const bordaSection = document.getElementsByTagName('section');
    for (let index = 0; index < bordaSection.length; index += 1) {
    bordaSection[index].style.border = '10px solid grey'
    bordaSection[index].style.backgroundColor = 'rgb(34, 77, 34)';
    //bordaSection[index].style.backgroundColor = 'yellow';
    bordaSection[index].style.color = 'black';
        
    }

const titleH3 = document.getElementsByTagName('h3');
    for (let index = 0; index < titleH3.length; index += 1) {
    titleH3[index].style.border = '10px solid purple'
    titleH3[index].style.margin = '0'

    }

const noImportant = document.querySelectorAll('.no-emergency-tasks div h3');
    for (let index = 0; index < noImportant.length; index += 1) {
    noImportant[index].style.color = 'black';
    noImportant[index].style.backgroundColor = "grey"
        
    }

const Important = document.querySelectorAll('.emergency-tasks div h3');
    for (let index = 0; index < Important.length; index += 1) {
    Important[index].style.color = 'brown';
    Important[index].style.backgroundColor = "pink";

    }