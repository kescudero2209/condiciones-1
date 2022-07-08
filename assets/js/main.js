if(document.getElementById("image") !== null){
    //Desafio parte 1
    let img = document.getElementById("image");
          var clicked = false;
    
          const attributes = {
            style: "border: 10px solid blue;",
          };
    
          console.log(clicked);
          img.addEventListener("click", (e) => {
            if (clicked == false) {
              function setAttributes(element, attributes) {
                Object.keys(attributes).forEach((attr) => { //método para iterar una matriz de datos
                  element.setAttribute(attr, attributes[attr]);
                });
              }
    
              setAttributes(img, attributes); //método para setear los valores a un elemento 
    
              clicked = true;
              console.log(clicked);
            } else {
              document.querySelector("#image").setAttribute("style", "");
    
              clicked = false;
              console.log(clicked);
            }
           
        });
    }