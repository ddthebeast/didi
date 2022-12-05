/*
Da se napravi klasa Kafemat sto ke funkcionira kako mashina za pravenje kafe.
Ima tri parametri: voda, kafe, mleko (ovie bi bile vkupna tezina vo gramovi, 
znaci treba da se brojki). Koga ja instancirame klasata zadavame kolku vkupno grama ke ima za sekoj od ovie parametri - na primer 100g kafe, 100g mleko i 1000g voda.

Da se napravi metod koj sto ke pravi chasha kafe i koga ke go povikate da ispise 
poraka deka kafeto e gotovo. Za edna casa se potrebni 7g kafe, 100g voda i 10g mleko.
Povikajte go metodot nekolku pati za da vidite dali sostojkite vi se troshat kako sto treba, 
slicno kako na chas sto vezbavme so avtomobilite.

Dokolku go povikate metodot za pravenje na kafe, a nemate dovolno od nekoja od 
sostojkite da se ispecati kolku grama i od koja sostojka falat. 

Za kraj, klasata da ima uste edno property, koe sto ke vi kazuva kolku kafinja vkupno ste napravile. 
Pocetnata vrednost mu e nula.
*/


class CoffeeMachine {
    coffee = 0;
    milk = 0;
    water = 0;
    coffeesMade = 0;
    coffeeDose = 7;
    milkDose = 10;
    waterDose = 100;

    constructor(coffee, milk, water) {
      this.coffee = coffee;
      this.milk = milk;
      this.water = water;
    }
   
    
    checkCoffee() {
      return this.coffee > 0;
    }
    checkMilk() {
      return this.milk > 0;
    }
    checkWater() {
      return this.water > 0;
    }
    
    showDeficit() {
      let coffeeDeficit = this.coffeeDose - this.coffee;
      let milkDeficit = this.milkDose - this.milk;
      let waterDeficit = this.waterDose - this.water;
  
      if (!this.checkCoffee()) {
        console.log(`Please add ${coffeeDeficit} grams of coffee`);
      }
      if (!this.checkMilk()) {
        console.log(`Please add ${milkDeficit} grams of milk`);
      }
      if (!this.checkWater()) {
        console.log(`Please add ${waterDeficit} grams of water`);
      }
    }
  
    makeCoffee() {
      if (this.checkCoffee() && this.checkMilk() && this.checkWater()) {
        this.coffee = this.coffee -= this.coffeeDose;
        this.milk = this.milk -= this.milkDose;
        this.water = this.water -= this.waterDose;
        this.coffeesMade ++;
        console.log("Your coffee is ready!");
        this.showCoffeesMade();
      } else {
        this.showDeficit();
      }
    }
    showCoffeesMade(){
      console.log(`There are ${this.coffeesMade} coffees made so far`);
    }
  }
  
 // let myMachine = new CoffeeMachine(100, 100, 1000);
 // myMachine.makeCoffee()