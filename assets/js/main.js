if (document.getElementById("image") !== null) {
  //Desafio parte 1
  let img = document.getElementById("image");
  let clicked = false;
  console.log(clicked);
  img.addEventListener("click", (e) => {
    if (clicked == false) {
      img.setAttribute("style", "border: 10px solid blue;");

      clicked = true;
      console.log(clicked);
    } else {
      document.querySelector("#image").setAttribute("style", "");

      clicked = false;
      console.log(clicked);
    }
  });
}
if (document.getElementById("button") !== null) {
  //Desafio parte 2
  let inputs = document.querySelector("button");

  inputs.addEventListener("click", (e) => {
    let value = document.getElementById("num1").value;
    let value1 = document.getElementById("num2").value;
    let value2 = document.getElementById("num3").value;
    console.log(value1);
    let totalSt = parseFloat(value) + parseFloat(value1) + parseFloat(value2);
    console.log(totalSt);

    if (isNaN(value) || isNaN(value1) || isNaN(value2)) {
      alert("Error, favor ingresar solo números");
      return;
    } else if (totalSt > 10) {
      document.querySelector("#textResult").innerHTML =
        "Llevas demasiados stickers";
      document.querySelector("#total").innerHTML = totalSt;
    } else {
      document.querySelector("#textResult").innerHTML = "¡Perfecto!";
      document.querySelector("#total").innerHTML = totalSt;
    }
  });
}
if (document.getElementById("try") !== null) {
  let inputs = document.querySelector("form");

  inputs.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(inputs);
    let num1 = data.get("num1");
    let num2 = data.get("num2");
    let num3 = data.get("num3");

    console.log(num1);
    console.log(num2);
    console.log(num3);
    var concat = num1 + num2 + num3;
    console.log(concat);

    if (concat == "911") {
      document.querySelector("#result").innerHTML = "password 1 correcto";
    } else if (concat == "714") {
      document.querySelector("#result").innerHTML = "password 2 correcto";
    } else {
      console.log(concat);
      document.querySelector("#result").innerHTML =
        "password " + concat + " està incorrecta"; //no me tomó el ${concat}
    }
    inputs.reset();
  });
}
