import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json"

const BaristaForm = () => {

    const [currentDrink,setCurrentDrink] = useState("");
    const [trueRecipe, setTrueRecipe] = useState("");
    const [correct_temp, setCheckedTemperature] = useState('');
const [correct_syrup, setCheckedSyrup] = useState('');
const [correct_milk, setCheckedMilk] = useState('');
const [correct_blended, setCheckedBlended] = useState('');

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const onNewDrink = () => {
        setCheckedTemperature('');
setCheckedSyrup('');
setCheckedMilk('');
setCheckedBlended('');
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
          getNextDrink();
    }

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
          }
          else {
            setCheckedTemperature("correct");
          }
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    return (

        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2>{currentDrink}</h2>
                <button className="button newdrink" onClick={onNewDrink} type="new-drink-button">"🔄"</button>
            </div>
            <form action="">
                <h3>Temperature</h3>
                <div className="answer-space" >
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />

                <h3>Syrup</h3>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />

                <h3>Milk</h3>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />

                <h3>Blended</h3>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
            </form>
            <button className="button submit" type="submit" onClick={onCheckAnswer}>Check Answer</button>
            <button className="button submit" type="new-drink-button" onClick={onNewDrink}>New Drink</button>
        </div>
    );

};

export default BaristaForm;