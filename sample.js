let time1 = new Date().getHours();
let greetings;
if (time1 >= 5 && time1 <12) {
    greetings = "Good Morning!";    
} else if (time1 >= 12 && time1 <18) {
    greetings = "Good Afternoon!";
} else {
    greetings = "Good Evening!";
}
console.log(greetings);