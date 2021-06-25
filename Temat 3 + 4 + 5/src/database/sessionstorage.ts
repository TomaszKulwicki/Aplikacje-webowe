class SessionStorage{
    key:string
    
    constructor(key:string){
        this.key=key;
    }
    public saveMove(gameData:any):void{
        var oldData:number[]
        oldData=JSON.parse(sessionStorage.getItem(this.key))
        console.log(oldData)
        if(oldData==null){
            oldData=[]
        }
        oldData.push(gameData)
        sessionStorage.setItem(this.key,JSON.stringify(oldData))
    }
    public goBack():any{
        var moveData:number[]
        var remainingData:number[]
        moveData=JSON.parse(sessionStorage.getItem(this.key))
        var moveNumber=(moveData.length-1)
        console.log(moveData)
        remainingData=moveData.slice(0,moveData.length-1)
        console.log(remainingData)
        sessionStorage.removeItem(this.key)
        sessionStorage.setItem(this.key,JSON.stringify(remainingData))
        return(moveData[moveNumber-1])
    }
    public returnAll():any{
        return(JSON.parse(sessionStorage.getItem(this.key)))
    }
    public resetStorage():void{
        sessionStorage.removeItem(this.key)
    }
}
export {SessionStorage}