function size(){
                
    var divs = document.getElementsByClassName('square');
    var divsWidth = document.getElementsByClassName('square')[0].offsetWidth;

    for (i = 0; i < divs.length; i++) {
        divs[i].style.height= divsWidth+'px';
    }
    
}