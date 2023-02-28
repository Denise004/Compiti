

 let num = prompt('inserisci un valore : ');
       if(num%2 == 0)
            alert('il numero è pari ');
       else 
            alert('il numero è dispari');
      
let somma="";
let n=0;
let risultato=0;
     do{
          n=prompt("inserisci un numero");
          somma+=n;
          risultato+=+n;
          }while(n!=0)
            document.write(somma);
            document.write("Il risultato : "+risultato);
            
            
    for(r=0;r<=9;r++){
        for(c=1;c<=10;c++){
        v=r*10+c;
        if(v<10) 
            v='0'+v;
            document.write(v+' ')
    }
    document.write('<br>');
}