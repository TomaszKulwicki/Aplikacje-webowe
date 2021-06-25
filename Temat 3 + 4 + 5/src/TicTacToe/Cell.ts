class  Cell {
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell:HTMLElement) {
        this.htmlElement = cell;
        this.cellValue=0;
    }

    setCellValue(value:number){
        //1=krzyzyk, -1=kolko, 0=pole nieustawione
        this.cellValue=value;
        switch(value){
            case 1:
                this.htmlElement.innerHTML='X'
                break;
            case -1:
                this.htmlElement.innerHTML='0'
                break;
            default:
                this.htmlElement.innerHTML=''
                break;
        }
        //this.htmlElement.innerHTML=value.toString();
    }
}
export default Cell;