import { Food } from "./food.js";
import { ScorePanel } from "./scorepanel.js";
import { Snake } from "./snake.js";
export class Gamecontrol {
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorepanel = new ScorePanel();
        this.direction = "ArrowRight";
        this.live = true;
        this.init();
    }
    init() {
        document.addEventListener("keydown", e => {
            if (e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight")
                if (this.direction == "ArrowUp" && e.key !== "ArrowDown") {
                    this.direction = e.key;
                }
            if (this.direction == "ArrowDown" && e.key !== "ArrowUp") {
                this.direction = e.key;
            }
            if (this.direction == "ArrowLeft" && e.key !== "ArrowRight") {
                this.direction = e.key;
            }
            if (this.direction == "ArrowRight" && e.key !== "ArrowLeft") {
                this.direction = e.key;
            }
        });
    }
    run() {
        this.snake.movebody();
        let x = this.snake.getX();
        let y = this.snake.getY();
        switch (this.direction) {
            case "ArrowUp":
                y -= 10;
                break;
            case "ArrowDown":
                y += 10;
                break;
            case "ArrowLeft":
                x -= 10;
                break;
            case "ArrowRight":
                x += 10;
                break;
        }
        if (x > 340 || x < 0 || y > 340 || y < 0) {
            this.live = false;
            alert("gameover!!!");
            const bestscore = JSON.parse(localStorage.getItem("bestscore") || "0");
            if (this.scorepanel.score > bestscore) {
                localStorage.setItem("bestscore", JSON.stringify(this.scorepanel.getscore()));
                localStorage.setItem("bestlevel", JSON.stringify(this.scorepanel.getlevel()));
            }
            window.location.reload();
            return;
        }
        this.snake.setX(x);
        this.snake.setY(y);
        //要给蛇走了之后才能判断crash
        if (this.snake.crash()) {
            this.live = false;
            alert("gameover!!!");
            const bestscore = JSON.parse(localStorage.getItem("bestscore") || "0");
            if (this.scorepanel.score > bestscore) {
                localStorage.setItem("bestscore", JSON.stringify(this.scorepanel.getscore()));
                localStorage.setItem("bestlevel", JSON.stringify(this.scorepanel.getlevel()));
            }
            window.location.reload();
            return;
        }
        this.checkeat(x, y);
        this.live && setTimeout(() => {
            this.run();
        }, 200 - (this.scorepanel.level - 1) * 30);
    }
    checkeat(x, y) {
        if (x === this.food.getX() && y === this.food.getY()) {
            this.snake.addbody();
            this.food.change();
            this.scorepanel.addscore();
        }
    }
}
