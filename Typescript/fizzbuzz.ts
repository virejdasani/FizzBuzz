let limit:number = 100

for (let counter:number = 0; counter <= limit; counter++){
    if (counter % 3 == 0 && counter % 5 == 0){
        console.log("FizzBuzz");
    } else if (counter % 3 == 0) {
        console.log("Fizz");
    } else if (counter % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(counter)
    }
}