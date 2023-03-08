

function writeCards(name, ocation){
    const messages = [];
for (let i = 0; i < name.length; i++){
    
   messages[i]= `Thank you, ${name[i]}, for the wonderful ${ocation} gift!`;

}
return messages;
    
}
writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");




function countDown(number){

    let i = 0;
    while(i < number+1){
        console.log(number - i);
        i++;
    }
}