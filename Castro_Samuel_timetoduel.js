class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }

    play( target ) {
            if( target instanceof Unit ) {
                // implement card text here
                console.log(`${this.name} > ${target.name} Played: ${this.text}`)
                if(this.stat.toLowerCase() == 'resilience'){
                    if(this.action == 'increase'){
                        target.res = target.res + this.mag;
                    } else {
                        target.res = target.res - this.mag;
                    }
                } else {
                    if(this.action.toLowerCase() == 'increase'){
                        target.power = target.power + this.mag;
                    } else {
                        target.power = target.power - this.mag;
                    }
                    
                }
            } else {
                console.log( "Target must be a unit!" );
            }
        }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        //reduce target res by power
        target.res = Math.floor(target.res - this.power);
        console.log(`Reduced res for ${target.name} updated res: ${target.res}`)
    }

}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitud, action){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = magnitud;
        this.action = action;
    }

}

rbn = new Unit('Red Belt Ninja',3,3,4);
bbn = new Unit('Black Belt Ninja',4,5,4);
ha = new Effect('Hard Algorithm',2, 'increase target\'s resilience by 3', 'resilience',3,'increase');
upr = new Effect('Unhandled Promise Rejection',1, 'reduce target\'s resilience by 2', 'resilience',2,'decrease');
pp = new Effect('Pair Programming',3, 'increase target\'s power by 2', 'power',2, 'increase');


console.log('Red Belt Ninja Starting Resilience: '+ rbn.res)
ha.play(rbn);  // Hard Algorithm > Red Belt Ninja Played: increase target's resilience by 3
console.log('Red Belt Ninja Resilience: '+ rbn.res)
upr.play(rbn);  // Unhandled Promise Rejection > Red Belt Ninja Played: reduce target's resilience by 2
console.log('Red Belt Ninja Resilience: '+ rbn.res)
pp.play(rbn);  // Pair Programming > Red Belt Ninja Played: increase target's power by 2
console.log('Red Belt Ninja Power: ' + rbn.power)

rbn.attack(bbn);  // Reduced res for Black Belt Ninja updated res: -1

rbn.play(ha); // "Target must be a unit!"
