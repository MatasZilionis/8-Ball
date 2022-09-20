console.log("MAGIC 8-BALL:");

let answer = Math.floor(Math.random() * 10);

if (answer === 0) {
    console.log("It is certain.");
} else if (answer === 1) {
    console.log("As I see it, yes.");
} else if (answer === 2) {
    console.log("Without a doubt.");
} else if (answer === 3) {
    console.log("Outlook good.");
} else if (answer === 4) {
    console.log("Yes definitely.");
} else if (answer === 5) {
    console.log("Ask again later.");
} else if (answer === 6) {
    console.log("Cannot predict now.");
} else if (answer === 7) {
    console.log("Reply hazy, try again.");
} else if (answer === 8) {
    console.log("My reply is no.");
} else {
    console.log("Very doubtful.");
}
