class Ninja {
    constructor (nombre, salud, velocidad = 3, fuerza = 3){
        this.nombre= nombre;
        this.salud= salud;
        this.velocidad= velocidad;
        this.fuerza= fuerza;
}

    sayName() {
        console.log(this.nombre);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

class superSensei {
    constructor (nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10){
        this.nombre= nombre;
        this.salud= salud;
        this.velocidad= velocidad;
        this.fuerza= fuerza;
        this.sabiduria= sabiduria;
}

    sayName() {
        console.log(this.nombre);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    speakWisdom() {
        drinkSake()
        console.log("sabiduria")
    }

    drinkSake() {
        this.salud += 10;
    }
}

const danny = new Ninja('Danny', 200, 4, 5)

const ninja1 = new Ninja('Sazuke', 15);

const ninja2 = new Ninja("Hyabusa");
ninja2.sayName();
ninja2.showStats();

console.log(ninja1);

console.log(ninja1.sayName());

const ninjaBelt2 = ninja =>
    beltColor => 
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.")

ninjaBelt2('Nick')('Negro')

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
