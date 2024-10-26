function Calculator(ev) {
    ev.preventDefault(); // Prevent the form from submitting

    const value = document.getElementById("ava").value;
    var o1 = document.getElementById("zzz").value;
    var o2 = document.getElementById("zzzz").value;

    if (o1 == "kelvin" && o2 == "celsius") {
      let celsius = value - 273;
      outputText.textContent = celsius;
    } else if (o1 == "kelvin" && o2 == "fahrenheit") {
      let fahrenheit = (value - 273.15) * 1.8 + 32;
      fahrenheit = Math.ceil(fahrenheit);
      outputText.textContent = fahrenheit;
    } else if (o1 == "celsius" && o2 == "fahrenheit") {
      let fahrenheit = value * (9 / 5) + 32;
      outputText.textContent = Math.ceil(fahrenheit);
    } else if (o1 == "fahrenheit" && o2 == "celsius") {
      let celsius = (value - 32) * (5 / 9);
      celsius = Math.ceil(celsius);
      outputText.textContent = celsius;
    } else if (o1 == "celsius" && o2 == "kelvin") {
      let kelvin = value + 273;
      kelvin = Math.ceil(kelvin);
      outputText.textContent = kelvin;
    } else if (o1 == "fahrenheit" && o2 == "kelvin") {
      let kelvin = (value - 32) * (5 / 9) + 273.15;
      kelvin = Math.ceil(kelvin);
      outputText.textContent = kelvin;
    } else {
      outputText.textContent = value;
    }
  }