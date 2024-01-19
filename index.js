const currenntTime = new Date();
const hourss = new Date().getHours()
const mins = new Date().getMinutes()
const currentHour = currenntTime.getHours();
const session = () => {
    if (hourss < 12) {
    return "AM"
} else {
    return "PM"
}
}

let greeting;
if(currentHour<12) {
    greeting = 'Good morning! the time is ' +hourss+":"+mins+" "+session();
} else if (currentHour,18) {
    greeting= 'Good afternoon!'
    
}else {
    greeting= 'Good evening!';
}
console.log(greeting);
