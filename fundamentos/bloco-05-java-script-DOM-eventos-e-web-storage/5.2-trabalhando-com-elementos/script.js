        const pai = getElementById('pai');
        const irmaoA = document.createElement('section');
        irmaoA.id = 'irmaoA';
        pai.appendChild(irmaoA);

        //2
        const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
        const filhoA = document.createElement('section');
        filhoA.id = 'filhoElementoA';
        elementoOndeVoceEsta.appendChild(filhoA);
        
        //3
        const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
        const filhoB = document.createElement('section');
        filhoB.id = 'filhoNetoB'
        primeiroFilhoDoFilho.appendChild(filhoB);

        //4
        const terceiroFilho = filhoB
        .parentElement 
        .parentElement
        .nextElementSibling;   
        console.log(terceiroFilho);
