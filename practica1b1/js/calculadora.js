document.getElementById("invertButton").addEventListener("click", function() {
    document.body.classList.toggle("invertColors");
}); 
class Calculadora{
    isBuscado(arr,buscar){
        let pos=0,enc=0
        //[2,4,6]  4
        while(pos<arr.length && enc==0){
            if (arr[pos]==buscar){
               enc=1
            }else{
                pos+=1
            }
        }
        if (enc == 1){
            return pos
        }else{
            return -1
        }
    }
    buscaArreglo(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(";")
        console.log($input)
        console.log(cadena)
        console.log(arreglo)
        let buscado=prompt("Ingrese dato a buscar")
        let pos = this.isBuscado(arreglo,buscado)
        if (pos >= 0){
            $input.value=`[${arreglo}] - ${buscado} se encuentra en la posicion: ${pos}`
        }else{
            $input.value=`[${arreglo}] - ${buscado} no se encuentra en el arreglo`
        }
        
    }   
     isPalabras(frase){
        let cp=1
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            
            if (frase[pos]==' ' && frase[pos+1]!=' ' ){
                cp+=1
            }
        }
        return cp
    }
    contarPalabras(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let cp = this.isPalabras(cadena)
        $input.value=`${cadena} tiene ${cp} palabras`
   
    }
     isCopiarCaracteres(frase,car){
        let copia=""
        frase = frase.trim()
        for(let pos=0;pos<frase.length;pos++){
            if (frase[pos]==car ){
                copia = copia + frase[pos]
            }
        }
        return copia
    }
    copiarCaracteres(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let caracter = prompt("Ingrese caracter")
        let cc = this.isCopiarCaracteres(cadena,caracter)
        $input.value=`${cadena} - ${cc} `
   
    }
      isDivisor(arr,divisor){
        let divisores=[],pos2=0
        for (let pos=0;pos<arr.length;pos++){
            let num=parseInt(arr[pos])
            if (num%divisor==0){
                divisores.push(num)
                //divisores[pos2]=arr[pos]
                //pos2+=1
            }

        }
        return divisores
    }
    copiarDivisor(){
        let $input=document.getElementById("result")
        let cadena = $input.value
        let arreglo = cadena.split(";")
        //console.log($input)
        //console.log(cadena)
        //console.log(arreglo)["ana","jose","dan"] jose
        let divisor=parseInt(prompt("Ingrese Divisor"))
        let divisores = this.isDivisor(arreglo,divisor)
        $input.value=`[${arreglo}] - ${divisores}`
        
        
    }
    isExponente(base,exp){
        let res = 1
        for(let i=1;i<=exp;i++){
            res*=base
        }
        return res
    }   
    isDigitos(numero,base){
        let  digitos= []
        while(numero > 0){
            digitos.push(numero%base)
            numero = parseInt(numero/base)
        }
        return digitos
    }
    base10_2(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,2)
        let base2=""
        for(let i=arreglo.length-1;i>=0;i--){
            base2=base2+arreglo[i].toString()
        }
         $input.value=`[Base10=${numero}] ==> Base2=${base2}`
        
    }
  
    base2_10(){
        let $input=document.getElementById("result")
        let numero = parseInt($input.value)
        let arreglo=this.isDigitos(numero,10)
        let base10=0,limite=arreglo.length-1
        for(let i=arreglo.length-1;i>=0;i--){
            base10= base10 + arreglo[i]*this.isExponente(2,limite)
            limite=limite-1
        }
         $input.value=`[Base2=${numero}] ==> Base2=${base10}`
    }
    quitaEspacio(cadena){
        let sinEspacio=""
        cadena = cadena.trim()
        for(let i=0;i<cadena.length;i++){
            if (cadena[i]!==' '){
                sinEspacio+=cadena[i]
            }
        }
        return sinEspacio
    }
    palindroma(){
        let $input=document.getElementById("result")
        let cadena = $input.value // anitalavala  t  i  n  a
        //                           012345678910 11 12 13 14
        // 
        let cadenaPal=this.quitaEspacio(cadena).toLowerCase()                       
        let pi=0,pf=cadenaPal.length-1,pal=1
        while (pi <= pf && pal==1){
            if (cadenaPal[pi]==cadenaPal[pf]){
                pi++
                pf--
            }
            else{
                pal=0
            }
        }
        if (pal==1){
             $input.value=`[${cadena}] Es Palindroma`
        }else{
             $input.value=`[${cadena}] No es Palindroma`
        }
    }
  
}
let cal = new Calculadora()
// console.log(cal.isExponente(5,3))
// console.log(cal.isDigitos(123,10))
// console.log(cal.isDigitos(25,2))
//console.log(cal.quitaEspacio(" anita  lava la tina"))
