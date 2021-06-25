import { Games } from './game.enum'
import { Game } from "./game.model";
import GameMenu from './gameMenu/GameMenu';
import { GameEnabled, GameObj } from './gameMenu/game';

import './styles/styles.scss'

class App {

    constructor() {
        this.init();        
    }

    init(): void {
        var gamesmenu=new GameMenu();
        gamesmenu.addGame(new GameEnabled(1))
        gamesmenu.addGame(new GameEnabled(2))
        gamesmenu.showMenu();
    }
  }
  const myApp=new App();