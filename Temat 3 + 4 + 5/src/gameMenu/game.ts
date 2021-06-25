import { Flags } from "./game.flags";
import { Games } from "../game.enum";
import { Game } from "../game.model";

function enableGame(gameConstructor:Function):void{
    gameConstructor.prototype.gameFlag=Flags.enabled
}
function disableGame(gameConstructor:Function):void{
    gameConstructor.prototype.gameFlag=Flags.disabled
}

class GameObj{
    gameSelector:number;
    gameFlag:number;
    gameType:string;

    constructor(){}

    public getFlag(){
        return this.gameFlag
    }

    public getGame(){
        return this.gameSelector
    }

    public getGameName(){
        return this.gameType
    }

    public getGameDetails(){
        return[this.getGame(), this.getFlag()]
    }
}

@enableGame
class GameEnabled extends GameObj {
    constructor(gameSelector:number) {
        super();
        this.gameSelector=gameSelector;
        this.gameType=Games[gameSelector]
    }
}
@disableGame
class GameDisabled extends GameObj {
    constructor(gameSelector:number) {
        super();
        this.gameSelector=gameSelector;
        this.gameType=Games[gameSelector]
    }
}
export{
    GameObj, 
    GameDisabled,
    GameEnabled
}