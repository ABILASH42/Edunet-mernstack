

function convert(num){
    const farenheit = (num * 9/5) + 32;
    const kelvin = num + 273.15;
    console.log(`Farenheit: ${farenheit}`);
    console.log(`Kelvin: ${kelvin}`);
}


module.exports ={ convert};