import React from 'react';
import ReactDOM from 'react-dom';


const luckyNumber = () => Math.ceil(Math.random() * 1000);

const greeting = (name) => {
    let divContainer =
        <div className="container">
            <h1>Hello {name}, welcome to your doom!</h1>
            <h2 className="text-muted">Your unlucky number of despair is: {luckyNumber()}</h2>
        </div>;
    return divContainer;
};

class User {
    constructor(name) {
        this.name = name;
        this.luckyNumber = luckyNumber();
    }
}

ReactDOM.render(
    greeting(new User('Khaleel').name),
    document.getElementById('root')
);