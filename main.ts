#! /usr/bin/env node 
// (The above code is what we publish on NPM called Shabang)

// **************************BMI*********************
//  BMI Stand for {**Body Mass Index**}

// now we make a program of calculat BMI from inquirer

import { log } from "console";
import inquirer from "inquirer";

const calculationOf_BMI = await inquirer.prompt([
  {
    message: "Enter Your Weight in KG",
    type: "number",
    name: "WeightinKG",
  },
  {
    message: "Enter Your Hight in meters",
    type: "number",
    name: "Hightinmeters",
  }
]);
// First we store Body and Mass
const weightInKg : number = calculationOf_BMI.WeightinKG
const hightInMeters : number =calculationOf_BMI.Hightinmeters

// formula of BMI = {W/H*H}
const resultBMI : number = Math.floor(weightInKg  / (hightInMeters*hightInMeters))
console.log(resultBMI);
