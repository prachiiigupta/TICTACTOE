
const WinorLose = {
 f:0,
 isSameRow(one,two,three){
    if(this.isRowBlank(one,two,three)){
        return false;
    }
    return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
},

 isRowBlank(one,two,three){
return this.isButtonBlank(one) && this.isButtonBlank(two) && this.isButtonBlank(three);
},

 isButtonBlank(button){
return button.innerHTML.trim().length==0?true:false;
},

 isGameOver(buttonArray){
    if(this.isSameRow(buttonArray[0],buttonArray[1],buttonArray[2])){
        return 1;
    }
    if(this.isSameRow(buttonArray[3],buttonArray[4],buttonArray[5])){
        return 1;
    }
    if(this.isSameRow(buttonArray[6],buttonArray[7],buttonArray[8])){
        return 1;
    }

    if(this.isSameRow(buttonArray[0],buttonArray[3],buttonArray[6])){
        return 1;
    }
    if(this.isSameRow(buttonArray[1],buttonArray[4],buttonArray[7])){
        return 1;
    }

    if(this.isSameRow(buttonArray[2],buttonArray[5],buttonArray[8])){
        return 1;
    }
    if(this.isSameRow(buttonArray[0],buttonArray[4],buttonArray[8])){
        return 1;
    }
    if(this.isSameRow(buttonArray[2],buttonArray[4],buttonArray[6])){
        return 1;
    }
    if(this.isRowFill(buttonArray[0],buttonArray[1],buttonArray[2]) &&
          this.isRowFill(buttonArray[3],buttonArray[4],buttonArray[5]) &&
          this.isRowFill(buttonArray[6],buttonArray[7],buttonArray[8])){
    return 2;
    }
    return 0;

  
},
isRowFill(one,two,three){
    return this.isButtonFill(one) && this.isButtonFill(two) && this.isButtonFill(three);
    },
    
     isButtonFill(button){
    return button.innerHTML.trim().length==0?false:true;
    }


   }
