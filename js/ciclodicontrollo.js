let num=0;
let somma =0;

// se mettiamo un + davanti alla variabile facciamo il casting 
do{
 num = prompt('inserisci un valore : ');
 somma +=+num;
}
while (num!=0) 
document.write(somma);
