class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(this.nombre);
    }
    showStats() {
        console.log(`el nombre del ninja es ${this.nombre}, tiene ${this.salud} puntos de salud, su fuerza es de ${this.fuerza} puntos y su velocidad es de ${this.velocidad} puntos`);
    }
    drinkSake() {
        this.salud += 10;
        console.log('Donde caben 2 comenzales, siempre caben 3');
    }
}

// const newNinja = new Ninja("Sasuke",15);
// newNinja.sayName();
// newNinja.showStats();
// newNinja.drinkSake();

class Sensei extends Ninja {
    constructor(nombre){
    super(nombre);
    this.sabiduria = 10;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    }
    speakWisdom() {
        super.drinkSake();
    };
}

const newSensei = new Sensei("Itachi");
newSensei.speakWisdom();
newSensei.showStats();
