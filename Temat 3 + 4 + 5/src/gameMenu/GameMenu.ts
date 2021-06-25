import { GameObj, GameDisabled, GameEnabled } from "./game";
import { Game } from "../game.model";
import { TicTacToe } from "../ticTacToe/Tictactoe";
import { DarkMode } from "../darkmode";

class GameMenu{
    gameArray:GameObj[];
    changeStyle: boolean;
    
    constructor(){
        this.gameArray=[]
    }
    public addGame(game:GameObj){
        this.gameArray.push(game);
    }
    public showMenu(){
        if(document.getElementById('openMenuButton')){
            document.body.removeChild(document.getElementById('openMenuButton'))
        }

        const changeColorButton=<HTMLElement>(document.createElement('BUTTON'))
        changeColorButton.innerHTML=('dark mode') 
        this.changeStyle =true;
        changeColorButton.onclick=()=>{

            this.changeStyle =!this.changeStyle;
            new DarkMode(this.changeStyle).changeToDark();
        }
        const menuContainer = <HTMLDivElement>(document.createElement('div')); 
        menuContainer.id='menuContainer'
        const closeButton=<HTMLElement>(document.createElement('a'))
        closeButton.innerHTML=('Zamknij')
        closeButton.onclick=()=>{this.hideMenu()}

        menuContainer.appendChild(closeButton)
        menuContainer.appendChild(changeColorButton)

        const list = document.createElement('ul');
        this.gameArray.forEach(element => {
            if(element.getFlag()){
                const listEntry=document.createElement('button')
                listEntry.innerHTML=element.getGameName()
                listEntry.onclick=()=>{this.openGame(element.getGame())}
                list.appendChild(listEntry)
            }
        });
        menuContainer.appendChild(list)
        document.body.appendChild(menuContainer)
    }
    public hideMenu():void{
        const openButton=<HTMLElement>(document.createElement('a'))
        openButton.id='openMenuButton'
        openButton.innerHTML=('Menu')
        openButton.onclick=()=>{this.showMenu()}
        document.body.removeChild(document.getElementById('menuContainer'))
        document.body.appendChild(openButton)
    }
    public openGame(gameId:number):void{
        document.body.removeChild(document.getElementById('menuContainer'))
        switch(gameId){
            case 1:
                console.log('tictactoe')
                var tictactoe= new TicTacToe()
                tictactoe.startGame()
                break;

            case 2:
                console.log('battleships')
                break;

            default:
                alert('no such game')
                break;
        }
    }
}
export default GameMenu