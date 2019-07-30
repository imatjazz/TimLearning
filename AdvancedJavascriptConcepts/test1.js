// class SuperHero{
//     constructor(name, age, ability){
//         this.name = name,
//         this.age = age    
//     }
//     specialSkill(){
//         console.log('my ability is ' + this.ability)
//     }
// }

// var batman = new SuperHero('batman', 32, 'flying')
// batman.specialSkill()

class Character {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type){
        super(name, weapon);
        this.type = type;
    }
}

class Orge extends Character{
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort(){
        return 'strongest fort in the world made';
    }
}

const fiona  = new Elf('Fiona', 'ninja starts');
const dolby = new Elf('Dolby', 'cloth', 'house')

console.log(dolby.attack())

const shrek = new Orge('Shrek', 'club', 'green')
console.log(shrek)

let arr = [[1,2], [3,4], [5,6]]
const flatArr = arr.reduce((a, b)=>a.concat(b),[]);
        



