export class ScorePanel {
    constructor() {
        this.score = 0;
        this.level = 1;
        this.scoreelement = document.getElementById("score");
        this.levelelemet = document.getElementById("level");
    }
    getscore() {
        return (this.score);
    }
    getlevel() {
        return (this.level);
    }
    addscore() {
        this.score++;
        this.scoreelement.innerHTML = this.score + "";
        if (this.score % 10 === 0) {
            this.addlevel();
        }
    }
    addlevel() {
        this.level++;
        this.levelelemet.innerHTML = this.level + "";
    }
}
