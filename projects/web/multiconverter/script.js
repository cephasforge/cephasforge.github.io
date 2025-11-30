// =====================================================================================
// VARIABLES AND CONSTANTS
// =====================================================================================

const conversionType = document.getElementById("conversion-type");
const conversionBoxes = Array.from(document.getElementsByClassName("conversion-box"));

const lengthInput = document.getElementById("length-input");
const lengthOutput = document.getElementById("length-output");

const lenghtUnitInputOption = document.getElementById("lenght-unit-input");
const lenghtUnitOutputOption = document.getElementById("lenght-unit-output");

const massInput = document.getElementById("mass-input");
const massOutput = document.getElementById("mass-output");

const massUnitInputOption = document.getElementById("mass-unit-input");
const massUnitOutputOption = document.getElementById("mass-unit-output");


// =====================================================================================
// CONVERTER INPUT LISTENER
// =====================================================================================

    conversionType.addEventListener('change', () => {

        hideConversionBoxes();

        switch (conversionType.value) {
            case 'type-length':
                document.getElementById("length-conversion").style.display = 'block';
                break;
            case 'type-mass':
                document.getElementById("mass-conversion").style.display = 'block';
                break;
            case 'type-time':
                document.getElementById("time-conversion").style.display = 'block';
                break;
            default:
                break;
        }
    });

    // =====================================================================================
    // LENGHT
    // =====================================================================================

    lenghtUnitInputOption.addEventListener('change', () => {
        conversionLenghtCore();
    })

    lenghtUnitOutputOption.addEventListener('change', () => {
        conversionLenghtCore();
    })

    lengthInput.addEventListener('input', () => {
        conversionLenghtCore();
    })

    // =====================================================================================
    // MASS 
    // =====================================================================================

    massUnitInputOption.addEventListener('change', () => {
        conversionMassCore();
    })

    massUnitOutputOption.addEventListener('change', () => {
        conversionMassCore();
    })

    massInput.addEventListener('input', () => {
        conversionMassCore();
    })

// =====================================================================================
// CONVERSION FUNCTIONS
// =====================================================================================

    // =====================================================================================
    // LENGTH
    // =====================================================================================

    function meterToOthers(input, unit){

        let result = 0.0;
        let parseInput = parseFloat(input);

        switch (unit) {
            case "km":
                result = (parseInput / 1000.0);
                return result;
            case "m":
                result = parseInput;
                return result;
            case "cm":
                result = (parseInput * 100.0);
                return result;
            case "mm":
                result = (parseInput * 1000.0);
                return result;

            case "mi":
                result = (parseInput / 1609.344);
                return result;
            case "yd":
                result = (parseInput * 1.09361329834);
                return result;
            case "ft":
                result = (parseInput * 3.28083989501);
                return result;
            case "in":
                result = (parseInput * 39.3700787402);
                return result; 
            default:
                return result;
        }
    }

    function othersToMeter(input, unit){

        let result = 0.0;
        let parseInput = parseFloat(input);

        switch (unit) {
            case "km":
                result = (parseInput * 1000.0);
                return result;
            case "m":
                result = parseInput;
                return result;
            case "cm":
                result = (parseInput / 100.0);
                return result;
            case "mm":
                result = (parseInput / 1000.0);
                return result; 

            case "mi":
                result = (parseInput * 1609.344);
                return result;
            case "yd":
                result = (parseInput * 0.9144);
                return result;
            case "ft":
                result = (parseInput * 0.3048);
                return result;
            case "in":
                result = (parseInput * 0.0254);
                return result; 
            default:
                return result;
        }
    }

    // =====================================================================================
    // MASS
    // =====================================================================================

    function gramToOthers(input, unit){

        let result = 0.0;
        let parseInput = parseFloat(input);

        switch (unit) {
            case "t":
                result = (parseInput / 1e6);
                return result;
            case "kg":
                result = (parseInput / 1000.0);
                return result;
            case "g":
                result = parseInput;
                return result;
            case "mg":
                result = (parseInput * 100.0);
                return result;

            case "lb":
                result = (parseInput / 453.59237);
                return result;
            case "oz":
                result = (parseInput / 28.349523125);
                return result;
            case "ton":
                result = (parseInput / 907184.74);
                return result;
            default:
                return result;
        }
    }

    function othersToGram(input, unit){

        let result = 0.0;
        let parseInput = parseFloat(input);

        switch (unit) {
            case "t":
                result = (parseInput * 1e6);
                return result;
            case "kg":
                result = (parseInput * 1000.0);
                return result;
            case "g":
                result = parseInput;
                return result;
            case "mg":
                result = (parseInput / 100.0);
                return result;

            case "lb":
                result = (parseInput * 453.59237);
                return result;
            case "oz":
                result = (parseInput * 28.349523125);
                return result;
            case "ton":
                result = (parseInput * 907184.74);
                return result;
            default:
                return result;
        }
    }
// =====================================================================================
// CONVERTER FUNCTIONS
// =====================================================================================

function conversionLenghtCore(){
    
    let inputUnit = document.getElementById("lenght-unit-input").value;
    let outputUnit = document.getElementById("lenght-unit-output").value;

    let inputValue = lengthInput.value;
    let outputValue = lengthOutput.value;
    
    if(inputUnit == "m"){
        outputValue = meterToOthers(inputValue, outputUnit);
    }else if(outputUnit == "m"){
        outputValue = othersToMeter(inputValue, inputUnit);
    }else{
        inputValue = othersToMeter(inputValue, inputUnit);
        outputValue = meterToOthers(inputValue, outputUnit);
    }

    if(Number.isNaN(outputValue)){
        lengthOutput.value = 0+" "+outputUnit;
    }else{
        lengthOutput.value = Number(outputValue.toFixed(3))+" "+outputUnit;
    }
}

function conversionMassCore(){
    let inputUnit = document.getElementById("mass-unit-input").value;
    let outputUnit = document.getElementById("mass-unit-output").value;

    let inputValue = massInput.value;
    let outputValue = massOutput.value;
    
    if(inputUnit == "g"){
        outputValue = gramToOthers(inputValue, outputUnit);
    }else if(outputUnit == "g"){
        outputValue = othersToGram(inputValue, inputUnit);
    }else{
        inputValue = othersToGram(inputValue, inputUnit);
        outputValue = gramToOthers(inputValue, outputUnit);
    }

    if(Number.isNaN(outputValue)){
        massOutput.value = 0+" "+outputUnit;
    }else{
        massOutput.value = Number(outputValue.toFixed(3))+" "+outputUnit;
    }
}

// =====================================================================================
// SETUP FUNCTIONS
// =====================================================================================

function hideConversionBoxes(){
    conversionBoxes.forEach(box => {
        box.style.display = 'none';        
    });
}

function converterSetUp(){
    hideConversionBoxes();
    document.getElementById("length-conversion").style.display = 'block';
}

converterSetUp();