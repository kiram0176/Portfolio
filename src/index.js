import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'));

/* class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log('I am ', this.name,' I am ', this.age, ' years old.');
    }
}

const animal1 = new Animals('Zoomba', 3);
animal1.speak();

console.log(animal1);

class Lion extends Animals {
    constructor(name, age, furColor, speed) {
        super(name, age);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar() {
        console.log('I have a ', this.furColor,
        ' fur and runs with the speed of ', this.speed,
        ' miles per hour');
    }
}

const lions1 = new Lion('Poker', 5, 'Golden', 250);
lions1.speak();
lions1.roar();
console.log(lions1); */