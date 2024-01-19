let correctUsername = "Femi"
let correctPassword = "Epignosis22"
function Oluwafemi (username, password){
    if (username == correctUsername && correctPassword == password){
        return "login successfully";
    }else if (username != correctUsername && password == correctPassword){
        return "username not correct"
    }else if(username == correctUsername && password != correctPassword){
        return "password is not correct"
    }else {
        return "credentials is not correct"
    }
} 
Oluwafemi("Femi", "Epignosis22");