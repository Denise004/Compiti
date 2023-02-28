
<script> 
       let num = prompt('inserisci un valore : ');
       if(num%2 == 0)
            alert('il numero è pari ');
       else 
            alert('il numero è dispari');
      // dato un numero , somma  tutti i numeri più piccoli di esso
      let ris=0;  
      for(let i=0;i<=num;i++){
         ris += i;
         document.write(i +'<br>');
         }
         document.write(ris);
    </script>