// **************************BMI*********************
//  BMI Stand for {**Body Mass Index**}
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
const weightInKg = calculationOf_BMI.WeightinKG;
const hightInMeters = calculationOf_BMI.Hightinmeters;
// formula of BMI = {W/H*H}
const resultBMI = Math.floor(weightInKg / (hightInMeters * hightInMeters));
console.log(resultBMI);
