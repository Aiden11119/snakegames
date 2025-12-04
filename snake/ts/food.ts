
export class Food{

    element:HTMLElement;

    constructor()
    {
        this.element=document.getElementById("food")!;
    }

    getX()
    {
        return this.element.offsetLeft;
    }

    getY()
    {
        return this.element.offsetTop;  
    }

    change()
    {
        const randomMultiple1 = Math.floor(Math.random() * 34) * 10;
        const randomMultiple2 = Math.floor(Math.random() * 34) * 10;
        this.element.style.left = randomMultiple1 + "px";
        this.element.style.top = randomMultiple2 + "px";
    }


}


