



let palabras = ["MANZANA", "PERA", "CIRUELA"]


 let palabraOc=""; // paabra oculta
 let palabraAdi="";//palabra que va adivinand
 let vidas=4;
 let letraserradas =[];//acumula y muestra las letras erradas

 document.getElementById("boton").addEventListener("click",comprobar);




iniciar();


function iniciar(){
    
    palabraOc=palabras[Math.floor(Math.random()*palabras.length)];
    
    for(let i=0; i<palabraOc.length; i++){
        palabraAdi=palabraAdi + "_ ";
        
    }

    document.getElementById("frase").innerHTML=palabraAdi;

   

    
////////expresiones reguares//////////////
document.getElementById("letra").addEventListener("keyup", myFunction);

function myFunction() {
  let x = document.getElementById("letra");
  const expr = new RegExp("[^A-Za-z ]", 'g')
  x.value = x.value.toUpperCase().replace(expr, "");
}



/////////boton desabilitado
let btn = document.getElementById("letra")
    btn.addEventListener("keyup", function(event) {
      if(event) {
        document.getElementById("boton").disabled = false
        
      }
    })

    

};



function comprobar(){
    let letra=document.getElementById("letra").value.toUpperCase();
    palabraOc=palabraOc.toUpperCase();
    let nuevo="";
    
    for(let i=0; i<palabraOc.length; i++){


          if(letra==palabraOc[i]){
            nuevo=nuevo + letra + " ";
            }else{
               nuevo=nuevo + palabraAdi[i*2]+ " ";

            }
            }
            if(nuevo==palabraAdi){
                vidas=vidas -1;
                document.getElementById("vida").innerHTML="El numero de vida que te quedan son:"+ vidas;
                letraserradas.push(letra);
               // console.log(letraserradas);
                document.getElementById("erradas").innerHTML="Letras erradas:"+letraserradas;
                
            }
            palabraAdi=nuevo;
            document.getElementById("frase").innerHTML=palabraAdi;

            if(vidas==0){
                Swal.fire({
                    title:"Perdiste!!",
                    icon:'error',
                   
                });
               // alert("perdiste");
               let button = document.getElementById("boton");
            button.disabled = true;
               
        }
            if (palabraAdi.search("_")==-1){
                //alert("Gabanste");
                Swal.fire({
                    title:"Ganaste!!",
                    icon:'success',
                });
                let button = document.getElementById("boton");
            button.disabled = true;


            }
            document.getElementById("letra").value="";
            document.getElementById("letra").focus();

        
            dibujar();

}

/*
//Function to detect if key is a letter with keyCode
function validateKey(letterCode){
    if(letterCode >= 65 && letterCode <= 90 || letterCode == 186){
        return true;
    }
}/////*/
