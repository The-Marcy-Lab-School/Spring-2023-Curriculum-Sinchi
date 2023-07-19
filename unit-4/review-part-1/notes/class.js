class Person {
    #bankAccount; 

    constructor(name, age, bankAccount) {
        this.name = name;
        this.age = age;
        this.#bankAccount = bankAccount;
        this.isCool = true;
    }

    static create(name, age, bankAccount) {
        return new Person(name, age, bankAccount)
    }
    
    getBankInfo() {
        console.log(this.#bankAccount);
    }

    #secretMethod() {
        console.log(`My name is ${this.name}, and my net worth is ${this.#bankAccount}`)
    }
};

const jowel = Person.create('Jowel', 28, 10);

console.log(jowel)

jowel.getBankInfo()



class Fellow extends Person {
    constructor(name, age, bankAccount, cohort) {

    }
}