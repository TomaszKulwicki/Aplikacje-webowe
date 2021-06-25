import { Game } from "../game.model";
import Board from './Board'
import { GameSaver } from "../database/savegame";

export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
        console.log('tictactoe')
    }
    
    getGameElement(): HTMLElement {
        console.log('gethtmlelement')
        const div = document.createElement('div');
        div.id='tictactoe'
        document.body.appendChild(div)
        return div;
    }
    
    startGame(){
        var gameSave=new GameSaver('tictactoe')
        var board;
        board =new Board(3)
    }
}