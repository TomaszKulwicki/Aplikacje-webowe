export class DarkMode{
    value: boolean;
    constructor(val: boolean){
       this.value = val;
    }
    changeToDark(){
      if(this.value === true){
         return(document.body.removeAttribute('data-theme'))
      }
      else{
         return(document.body.setAttribute('data-theme','dark'))
      }
   }
}