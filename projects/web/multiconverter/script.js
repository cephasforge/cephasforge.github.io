const conversionType = document.getElementById("conversion-type");
const conversionBoxes = Array.from(document.getElementsByClassName("conversion-box"));

const lengthInput = document.getElementById("length-input");
const lengthOutput = document.getElementById("length-output");

const lenghtUnitInputOption = document.getElementById("lenght-unit-input");
const lenghtUnitOutputOption = document.getElementById("lenght-unit-output");

// =====================================================================================
// CONVERTER INPUT LISTENER
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
// LENGHT CONVERSION
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
        lengthOutput.value = 0;
    }else{
        lengthOutput.value = Number(outputValue.toFixed(3));
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