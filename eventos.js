function calculadorHTML(operacion){
    //obtengo los valores de los input
    const numero1= document.querySelector("#numero1").value;
    const numero2=document.querySelector("#numero2").value;

    //valido qyue los datos no estén vacíos
    if(numero1==="" || numero2===""){
        alert("Debes completar los datos");
        return;
    }

    //una vez que valide los datos, debo hallar la operacion
    //necesito una variable que se encargue de guardar el resultado.
    let resultado=0

    if(operacion==="+"){
        resultado=sumar(numero1,numero2)
    }
    if(operacion==="-"){
        resultado=restar(numero1,numero2)
    }
    if(operacion==="*"){
        resultado=multiplicar(numero1,numero2)
    }
    if(operacion==="/"){
        resultado=dividir(numero1,numero2)
    }

    //para acabar debo mostrar el resultado en mi HTML
    //usaremos CREATE ELEMENT
    const p=document.createElement("p");
    const value=document.createTextNode(resultado);

    p.appendChild(value); // appendChild es el primer "hijo" de p. En este caso se está indicando que el primer hijo (valor) que se va a guardar en p será "value"
    const contenedor=document.querySelector("#resultado");
    contenedor.appendChild(p);

}