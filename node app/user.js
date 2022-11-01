const user = {
    name: 'Ann',
    age: 23,
    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

exports.user = user;