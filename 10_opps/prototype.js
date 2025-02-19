// let myName = 'Karan     '

// console.log(myName.length);

let myHero = ["thor","spiderMan"]

let heroPower = {
    thor: 'hammer',
    spiderMan: 'web',

    getSpiderPower: function(){
        console.log(`power of the spiderMan is ${this.spiderMan}`);
    }
}

Object.prototype.karan = function(){
    console.log('karan is present in all prototype');
    
}

Array.prototype.heykaran = function(){
    console.log('karan say hello');
    
} 

// myHero.heykaran()
// heroPower.heykaran()
// heroPower.getSpiderPower()
// heroPower.karan()
// myHero.karan()



let anotherUserName = '     karan      '

String.prototype.trueLength = function(){
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength()


