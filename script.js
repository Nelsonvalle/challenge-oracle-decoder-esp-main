
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

/* inicio del la funcion de encriptar y desencriptar la palabra*/

	function encriptar(frase) {
		var texto= frase.value;
		if (texto==""){
	        alert("Por favor ingrese la frase");
	    }else{
		    texto = texto.replaceAll("e", "enter");    
		    texto = texto.replaceAll("i", "imes");    
		    texto = texto.replaceAll("a", "ai");    
		    texto = texto.replaceAll("o", "ober");    
		    texto = texto.replaceAll("u", "ufar"); 
		    document.querySelector("#msg").value = texto; 
	    }
	}

	    function desEncriptar(frase) {
	    	var texto= frase.value;
		if (texto==""){
	        alert("Por favor ingrese la frase");
	    }else{
		    texto = texto.replaceAll("enter", "e");    
		    texto = texto.replaceAll("imes", "i");    
		    texto = texto.replaceAll("ai", "a");    
		    texto = texto.replaceAll("ober", "o");    
		    texto = texto.replaceAll("ufar", "u"); 
		    document.querySelector("#msg").value = texto; 
	    }
	}

	//Aqui se implementa la funcion de copiado

	function copiarFrase (){
	    var copyText = document.getElementById("msg");
	    copyText.select();
	    document.execCommand('copy');
	    alert('Frase copiada!');
	}

	 // Aqui referencio los botones del HTML

	 var btnEncriptar = document.querySelector("#btn-encriptar");
	 var btnDesencriptar = document.querySelector("#btn-desencriptar");
	 var btnCopiar=document.querySelector("btn-copy")

	 //Aqui referencion la caja de texto
	 var txtFrase = document.querySelector("#input-texto");


	 //Aqui agrego las funciones a los	 botones


	 // boton encriptar
	 btnEncriptar.addEventListener("click",function(event){
	 event.preventDefault();
     //aqui recibe la  frase        
     encriptar(txtFrase);      
     txtFrase.value = "";       
	 })


	 // boton desencriptar
	 btnDesencriptar.addEventListener("click",function(event){ 
	 event.preventDefault(); 
     //aqui recibe la  frase        
     desEncriptar(txtFrase);    
     txtFrase.value = "";       
	 })

	 //boton copiar  texto

	 btnCopiar.addEventListener("click",()=>{
    	
    	copiar()
	})

	 


