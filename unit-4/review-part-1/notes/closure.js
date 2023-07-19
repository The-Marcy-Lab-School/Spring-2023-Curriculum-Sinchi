const createCounter = () => {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count ${count}`);
    }

    const decrement = () => {
        count--;
        console.log(`Count ${count}`);
    }

    return {
        increment,
        decrement
    }
}

const counter = createCounter();

console.log('Increasing Count')
counter.increment()
counter.increment()
counter.increment()

console.log('Decreasing Count')
counter.decrement()
counter.decrement()
counter.decrement()
counter.decrement()


const bankAccount = () => {
    let balance = 100;

    return {
        withdraw(amount) {
            balance -= amount
            console.log(`Withdraw this ${balance} amount`)
        },
        
        deposit(amount) {
            balance += amount
            console.log(`Deposited this ${balance} amount`)
        },

        getBalance() {
            console.log(`You have ${balance} amount`)
            return balance
        }
    }
};

const jowelBank = bankAccount();

jowelBank.withdraw(50);

jowelBank.deposit(150);

jowelBank.getBalance()

