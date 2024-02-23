    function calculateCoffee() {
        const waterWeight = parseFloat(document.getElementById('waterWeight').value);
        const ratio = parseFloat(document.getElementById('ratio').value);
        
        if (isNaN(waterWeight) || isNaN(ratio)) {
            alert('Please enter valid numbers.');
            return;
        }
        
        const coffeeAmount = waterWeight / ratio;
        document.getElementById('result').innerText = `For ${waterWeight} grams of water and a ${ratio}:1 ratio, you need ${coffeeAmount.toFixed(2)} grams of coffee.`;
    }
