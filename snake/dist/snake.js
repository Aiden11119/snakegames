export class Snake {
    constructor() {
        this.element = document.getElementById("snake");
        this.head = this.element.querySelector("div");
        this.body = this.element.getElementsByTagName("div");
    }
    getX() {
        return this.head.offsetLeft;
    }
    getY() {
        return this.head.offsetTop;
    }
    setX(value) {
        if (this.getX() === value) {
            return;
        }
        this.head.style.left = value + "px";
    }
    setY(value) {
        if (this.getY() === value) {
            return;
        }
        this.head.style.top = value + "px";
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
        newBody.style.left = x + "px";
        newBody.style.top = y + "px";
    }
    movebody() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let x = this.body[i - 1].offsetLeft;
            let y = this.body[i - 1].offsetTop;
            this.body[i].style.left = x + "px";
            this.body[i].style.top = y + "px";
        }
    }
    crash() {
        for (let i = this.body.length - 1; i > 0; i--) {
            if (this.getX() === this.body[i].offsetLeft && this.getY() === this.body[i].offsetTop) {
                return true;
            }
        }
        return false;
    }
}
