function calcular() {
   
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    

    let aprov =  "Você foi aprovado : " ;
    let reprov = "Você foi reprovado : " ;
    let media = (n1 + n2 + n3 + n4) /4 ;

    if (media >= 6) {
      document.getElementById("resultado").textContent =  aprov + media ;
    } else if (media <= 6) {
      document.getElementById("resultado").textContent =  reprov + media;
    }
}


function limpaCampos() {
    let elements = document.getElementsByName("notes");
    for (let i = 0; i < elements.length; i++) {
      elements[i].value = "";
}
    document.getElementById('resultado').textContent = '';
  }

  


