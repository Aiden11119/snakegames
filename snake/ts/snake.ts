
export class Snake {
    element: HTMLElement;
    head: HTMLElement;
    body: HTMLCollectionOf<HTMLDivElement>;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = this.element.querySelector("div")! as HTMLDivElement;
        this.body = this.element.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;
    }

    getX()
    {
        return this.head.offsetLeft;
    }

    getY()
    {
        return this.head.offsetTop;
    }

    setX(value:number)
    {
        if(this.getX()===value)
        {
            return;
        }


        this.head.style.left=value+"px";
    }

    setY(value:number)
    {
        if(this.getY()===value)
            {
                return;
            }

            
    

        this.head.style.top=value+"px";
    }



    addbody() {
        // 1. 获取尾巴位置
        const tail = this.body[this.body.length - 1];
        const x = tail.offsetLeft;
        const y = tail.offsetTop;
    
        // 2. 插入新 div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    
        // 3. 设置新身体位置
        const newBody = this.body[this.body.length - 1];
        (newBody as HTMLElement).style.left = x + "px";
        (newBody as HTMLElement).style.top = y + "px";
    }


    movebody()
    {
        for(let i=this.body.length-1;i>0;i--)
        {
            let x = (this.body[i - 1] as HTMLElement).offsetLeft;
            let y = (this.body[i - 1] as HTMLElement).offsetTop;

            this.body[i].style.left = x + "px";
            this.body[i].style.top = y + "px";
        }
    }

    crash()
    {
        for(let i=this.body.length-1;i>0;i--)
        {
            if(this.getX()===(this.body[i] as HTMLElement).offsetLeft && this.getY()===(this.body[i] as HTMLElement).offsetTop)
            {
                return true;
            }
        }

        return false
           
    }

}
