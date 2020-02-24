var countClicksUp = 0;
var countClicksDown = 0;
function increaseFontSizeBy5px() {
    txt = document.getElementById('font-change');             //div tag id where u want to increase the font size of your text field
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 5) +'px';
    countClicksUp++;
}

function decreaseFontSizeBy5px() {
    txt = document.getElementById('font-change');             //div tag id where u want to decrease the font size of your text field
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 5) + 'px' ;
    countClicksDown++;
}

//setting font size for the default size
function setDefault() {                                       
    txt = document.getElementById('font-change');             //div tag id where u want to decrease the font size of your text field
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    txt.style.fontSize = "initial";
	countClicksUp = 0;
	countClicksDown = 0;
}

function upClick(){
    if (countClicksUp<3){
        increaseFontSizeBy5px();
		if(countClicksDown==3){
			countClicksDown=0;
		}	
    }else if(countClicksDown==3){
        countClicksDown=0;
    }
}
function downClick(){
    if (countClicksDown<3){
        decreaseFontSizeBy5px();
		if(countClicksUp==3){
			countClicksUp=0;
		}
    }else if (countClicksUp==3){
        countClicksUp=0;
    }
}
