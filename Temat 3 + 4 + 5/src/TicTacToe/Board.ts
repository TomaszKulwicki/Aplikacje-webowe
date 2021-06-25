import Cell from './Cell';
import { GameSaver } from "../database/savegame";
import { SessionStorage } from '../database/sessionstorage';

class Board {
    size:number
    cells:Cell[];
    currentSymbol:number;
    database:GameSaver;
    sessionStorage:SessionStorage
    movesMade:number;
    
    changeSymbol():void{
        switch(this.currentSymbol){
            case 1:
                this.currentSymbol=-1
                break;
            case -1:
                this.currentSymbol=1;
                break;
            default:
                this.currentSymbol=1;
                break;
        }
    }

    makeMove(cell: Cell): void {
        this.changeSymbol()
        this.movesMade++;
        cell.setCellValue(this.currentSymbol);
        if(this.checkRows()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        else if(this.checkColumns()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        else if(this.checkDiagonalOne()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        else if(this.checkDiagonalTwo()){
            console.log('GAME WON BY', this.currentSymbol);
        }
        this.saveMove()
    };

    chceckForWin():void{
        //przeszukać rzędy->kolumny->przekatne
        this.checkRows();
    }
    
    checkRows():boolean {//przeszukuje rzędy i sprawdza czy w którymś znajdyuje sie (size) takich samych wartosci
        let firstElement;
        let rowNumber
        let tempTable:Cell[];
        
        for(let r=0; r<this.size; r++){
            rowNumber=r%this.size;
            tempTable=this.cells.slice(rowNumber,rowNumber+this.size);
            firstElement=this.cells[r*this.size].cellValue;
            const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
            return(tempTable.every(valueEquals));
        }
    }

    checkColumns():boolean{
        let firstElement;
        let colNumber
        let tempTable:Cell[]=[];
        
        for(let c=0; c<this.size; c++){
            colNumber=c
            for(let col=0; col<this.size; col++){
                tempTable.push(this.cells[c]);
                c+=this.size;
            }
            firstElement=this.cells[colNumber].cellValue;
            const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
            return(tempTable.every(valueEquals));
        }
    }

    checkDiagonalOne():boolean{
        let firstElement;
        let colNumber=0;
        let tempTable:Cell[]=[];
        
        const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
        firstElement=this.cells[colNumber].cellValue;
        for(let c=0; c<this.size; c++){
            tempTable.push(this.cells[colNumber]);
            colNumber+=this.size+1;
        }
        return(tempTable.every(valueEquals));
    }

    checkDiagonalTwo():boolean{
        let firstElement;
        let colNumber=this.size-1;
        let tempTable:Cell[]=[];
        
        const valueEquals=(currentValue)=>currentValue.cellValue===firstElement && currentValue.cellValue!==0;
        firstElement=this.cells[colNumber].cellValue;
        console.log(firstElement);
        for(let c=0; c<this.size; c++){
            tempTable.push(this.cells[colNumber]);
            colNumber+=this.size-1;
        }
        return(tempTable.every(valueEquals));
    }

    saveGame():void{
        alert('Game saved !')
        var savedGameData:number[];
        savedGameData=[]
        this.cells.forEach(element => {
            savedGameData.push(element.cellValue)
        });
        this.database.saveData(savedGameData)
    }
    loadGame():void{
        this.sessionStorage.resetStorage()
        var dataFromLocalStorage:number[];
        dataFromLocalStorage=[]
        dataFromLocalStorage=this.database.loadGameSave()
        dataFromLocalStorage.join('')
        if(dataFromLocalStorage!==null){
            this.applyChanges(dataFromLocalStorage)
        }
    }
    saveMove():void{
        var savedMoveData:number[];
        savedMoveData=[]
        this.cells.forEach(element => {
            savedMoveData.push(element.cellValue)
        });
        this.sessionStorage.saveMove(savedMoveData)
    }
    goBack(moves:number):void{
        moves>0?moves--:alert('Cannot go back further')
        var dataFromSessionStorage:number[];
        dataFromSessionStorage=[]
        dataFromSessionStorage=this.sessionStorage.goBack()
        dataFromSessionStorage.join('')
        if(dataFromSessionStorage!==null){
            this.applyChanges(dataFromSessionStorage)
        }
    }
    applyChanges(dataToDisplay:number[]):void{
        for(let i=0; i<this.size*this.size; i++){
            this.cells[i].setCellValue(dataToDisplay[i])
        }
    }
    createControlButtons():void{
        const buttonBox=document.createElement('div')
        buttonBox.id='buttonBox'

        const saveButton=document.createElement('button')
        saveButton.id='saveButton'
        saveButton.innerHTML="Zapisz stan"
        saveButton.onclick=(()=>this.saveGame())
        buttonBox.appendChild(saveButton);

        const loadButton=document.createElement('button')
        loadButton.id='loadButton'
        loadButton.innerHTML="Wczytaj stan"
        loadButton.onclick=(()=>this.loadGame())
        buttonBox.appendChild(loadButton);

        const gobackButton=document.createElement('button')
        gobackButton.id='loadButton'
        gobackButton.innerHTML="Cofnij ruch"
        gobackButton.onclick=(()=>this.goBack(1))
        buttonBox.appendChild(gobackButton);

        document.body.appendChild(buttonBox)
    }

    constructor(size: number) {
        this.size=size;
        this.movesMade=0;
        this.cells = new Array(size)
        this.database=new GameSaver('tictactoe')
        this.sessionStorage=new SessionStorage('tictocsession')
        this.createControlButtons()
        this.sessionStorage.resetStorage()
        const gameContainer=document.createElement('table')
        gameContainer.id='tictactoe';
        document.body.appendChild(gameContainer)
        let table = <HTMLTableElement>document.getElementById("tictactoe");
        let i=0;
        for(let r=0; r<size; r++)
        {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", () => this.makeMove(newCell), false); i++;
            }
        }
    }
}

export default Board;