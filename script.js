function multiplicacao() {
  let numero = document.getElementById('numero');
    let tabuada = document.getElementById('tabuada');
    
    if (numero.value.length == 0) {
      alert('Você não digitou nenhum número');
    } else {
      tabuada.innerHTML='';
      let num = Number(numero.value);
        for(let contador = 0; contador <= 10; contador++) {
          let addOption = document.createElement('option');
          tabuada.appendChild(addOption);
          addOption.innerHTML= `${num} X ${contador} = ${num * contador}`;     
        }
    }
  }


  function divisao() {
    let numero = document.getElementById('numero');
      let tabuada = document.getElementById('tabuada');
      
      if (numero.value.length == 0) {
        alert('Você não digitou nenhum número');
      } else {
        tabuada.innerHTML='';
        let num = Number(numero.value);
          for(let contador = 0; contador <= 10; contador++) {
            let addOption = document.createElement('option');
            tabuada.appendChild(addOption);
            let divisao = parseFloat(num/contador);

              addOption.innerHTML= `${num} ÷ ${contador} = ${divisao}`;
          }
      }
    }  
    function somar() {
      let numero = document.getElementById('numero');
        let tabuada = document.getElementById('tabuada');
        
        if (numero.value.length == 0) {
          alert('Você não digitou nenhum número');
        } else {
          tabuada.innerHTML='';
          let num = Number(numero.value);
            for(let contador = 0; contador <= 10; contador++) {
              let addOption = document.createElement('option');
              tabuada.appendChild(addOption);
                addOption.innerHTML= `${num} + ${contador} = ${num+contador}`;
            }
        }
      }

      function subtracao() {
        let numero = document.getElementById('numero');
          let tabuada = document.getElementById('tabuada');
          
          if (numero.value.length == 0) {
            alert('Você não digitou nenhum número');
          } else {
            tabuada.innerHTML='';
            let num = Number(numero.value);
              for(let contador = 0; contador <= 10; contador++) {
                let addOption = document.createElement('option');
                tabuada.appendChild(addOption);
                  addOption.innerHTML= `${num} - ${contador} = ${num-contador}`;
              }
          }
        }
    