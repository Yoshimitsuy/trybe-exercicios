function contFunction() {
      
    let allCont = document.getElementsByTagName('p');
    for (let index = 0; index < allCont.length; index += 1) {
        console.log(allCont[index].innerHTML);
    }
}
contFunction();