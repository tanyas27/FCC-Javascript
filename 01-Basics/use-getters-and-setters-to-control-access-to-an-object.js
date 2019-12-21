/* Alter code below this line */
class Thermostat {
    constructor (temperature){
        this._tempr = temperature;
    }
    get temperature(){
        return  5/9 * (this._tempr-32);
    }
    set temperature(celsius){
       this._tempr = celsius * 9.0 / 5 + 32;
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
