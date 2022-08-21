export class Mathe {
    constructor(attack) {
        this.attack = attack
    }

    setAttack(x) {
        const percent = 100 - (x - 1) * 10;

        return this.attack * percent / 100;
    }

    setStoned(x) {
        const att = this.setAttack(x);

        return att - Math.log2(x) * 5;
    }
}




