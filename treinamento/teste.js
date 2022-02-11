// teste r7
  function catAndMouse(mouse, cat1, cat2) {
    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      return 'cat1';
    } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
      return 'cat2';
    } else {
      return 'os gatos trombam e o rato foge';
    }
  }
  
  console.log(catAndMouse(1, 0, 2));

