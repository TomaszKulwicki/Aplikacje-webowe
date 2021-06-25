class GameSaver{
    key:string
    
    constructor(key:string){
        this.key=key;
    }
    public saveData(gameData:any):void{
        localStorage.setItem(this.key,JSON.stringify(gameData))
    }
    public loadGameSave():any{
        return(JSON.parse(localStorage.getItem(this.key)))
    }
    public deleteSave():void{
        localStorage.removeItem(this.key)
    }
}
export {GameSaver}