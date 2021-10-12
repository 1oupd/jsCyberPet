
let playerName = prompt("Choose your animal name") 
if (animalName == "") {
    animalName = "Why you dont give me name";
}
 class Animal{
     constructor(name){
        this._name = name;
        this._happiness = 0;
        this._hunger = 0;
        this._thirst = 0; 
        this.fun = 0; 
        this._loved = 0; 
        this._energyLevel = 20;
        this._bladder = 10;
        this._sleep = 10;
         
     }
     get name(){
         this._name;
     }
     eat(){
        this._hunger += 10; 
        this._happiness += 10;
        this._energyLevel += 5;
        this._bladder +=5;
        console.log("Now we can play :)")
        console.log(_hunger)
        if(this._hunger >= 50){
            console.log("Oh no, I can not eat more..")
        }
        return(`${_name} hunger meter: ${_hunger} \n your happiness meter: ${_happiness} \n your bladder meter: ${_bladder} \n your energy meter: ${_energyLevel} `)

     }
     drink(){
        this._thirst += 5; 
        this.happiness += 5;
        this._bladder +=5;
        this._energyLevel += 5;
        if(this._thirsty >= 50){
            console.log("Oh no, I can not drink more..")
        }
        setTimeout(() => {
            console.log("My bladder is full, let's have a walk!");
        }, 5000);
        return(`${_name} thirst meter: ${_thirst} \n your happiness meter: ${_happiness} \n your bladder meter: ${_bladder} \n your energy meter: ${_energyLevel} `)
     }
    
     headScratch(){
        this._happiness += 2;
        this._fun += 5;
        this._loved += 5;
        this._energyLevel += 5;
        setTimeout(() => {
            console.log("No no don't stop..");
        }, 3000);
        return(`${_name} happiness meter: ${_happiness} \n your fun meter: ${_fun} \n your loved meter: ${_loved} \n your energy meter: ${_energyLevel}`)
     }

     play(){
         this.loved += 2;
         this._energyLevel -=5;
         this._hunger -= 10;
         this._thirst -= 10;
         this._sleep += 5;
         if(this._energyLevel =< 10){
            console.log("Oh I am tired now and thirsty")
        } else if (this._energyLevel <= 10 && this.this._hunger <= 10){
            console.log("Oh I am so hungry and thirsty...")
        }
         return(`${_name}loved meter: ${_loved} \n your energy meter: ${_fun} \n your hunger meter: ${_loved} \n your thirst meter: ${_energyLevel} \n your sleep meter: ${_sleep}`)
     }
     walk(){
         this._bladder -=10;
         this._hunger -= 10;
         this._thirst -= 10;
         this._energyLevel -=5;
         console.log("I am hungry and thirsty")
         return(`${_name} bladder meter: ${_bladder} \n your hunger meter: ${_hunger} \n your thirst meter: ${_thirst} \n your energy meter: ${_energyLevel} `)
    }
    
 }
    

 class Dog extends Animal{
     constructor(name){
         super(name)
        
     }
    
    }
     
 class Cat extends Animal{
     constructor(name){
         super(name)
         
     }
     

    }