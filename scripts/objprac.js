// Create an object that represents your pet.
// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const Dog = {
    Name: "Bella",
    Species: 'Pit',
    Nickname: ['Dog', 'Big B'],
    Age: 2,
    favoriteToys: [],
    bark: (someOne) => {
        console.log(`Bella Barks Ruff Ruff! at ${someOne}`);
    },
    whines: (criesOver) => {
        console.log(`Bella whines because she wants ${criesOver} too!`);
    },
    eat: (meal) => {
        console.log(`Bella eats ${meal} and goes straight to sleep`);
    },
    Toys: function (item) {
        this.favoriteToys.push(item)
    },
    play: function (toy, toyProperty) {
        if (toyProperty === 'chewy') {
            this.favoriteToys.push(toy)
        }
    }
};
Dog.bark('Mom')
Dog.whines('food')
Dog.eat('Soup')
Dog.Toys('Stuffed Duck')
Dog.Toys('towels')
Dog.play('Rubber Snail', 'chewy')
console.log(Dog);