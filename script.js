// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }


// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
// }


// for(let i = 10; i > 0; i--){
//     console.log(i);
// }
// console.log("HAPPY NEW YEAR!");


// for(let i = 10; i > 0; i-=2){
//     console.log(i);
// }


for(let i = 1; i <= 20; i++){
    if(i == 13)
        break;
    
    else{
        console.log(i);

    }

}


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

