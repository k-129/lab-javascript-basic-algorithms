console.log("I'm ready!");

// Iteration 1: Names and Input

let Hacker1 = "Erik";
//console.log(`The driver name is ${Hacker1}!`)

let Hacker2 = "Francisco";
//console.log(`The navigator name is ${Hacker2}!`)

// Iteration 2: Conditionals

if (Hacker1.length > Hacker2.length) {

    console.log(`The driver has the longest name, it has ${Hacker1.length} characters.`);
}
else if (Hacker2.length > Hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${Hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${Hacker2.length} characters!`)
}


// Iteration 3: Loops

let driver = ""
for (let i = 0; i < Hacker1.length; i++){ 
    driver = driver + Hacker1[i] + " ";

}
console.log(driver.toUpperCase());


let navigator = ""
for (let f = Hacker2.length-1; f >= 0; f--){
    navigator = navigator + Hacker2[f];
}

console.log(navigator);



if (Hacker2.localeCompare(Hacker1) === 1) {
    console.log("The driver's name goes first.")
}else if (Hacker1.localeCompare(Hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}

//BONUS TIME 1 (ongoing)

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu turpis tempor, viverra leo et, condimentum velit. Proin eget lacus eu eros feugiat accumsan. Duis rutrum magna eget auctor tempus. Integer imperdiet, neque at euismod venenatis, nunc dolor dapibus elit, ut luctus libero risus vestibulum nisi. Phasellus viverra diam tortor, vel pretium mi vestibulum eu. Vestibulum augue lectus, maximus vitae consectetur vel, interdum eu tortor. Vestibulum enim leo, tempus id quam ut, fringilla sodales odio. Fusce odio ligula, gravida vel purus et, accumsan vestibulum tortor. Fusce finibus eget urna sed tincidunt. Sed eget odio in mauris eleifend consectetur vulputate quis lacus.
Praesent dictum tellus in porta pharetra. Etiam pharetra sed lorem sed consectetur. Nullam vel metus hendrerit, varius velit non, pharetra magna. Sed euismod felis quam, a maximus ex finibus quis. Morbi lacinia tortor quis odio iaculis vulputate. Fusce imperdiet fringilla arcu, nec pharetra magna. Etiam efficitur urna sed sapien commodo consectetur. Quisque egestas dolor tortor, vitae aliquet nunc sagittis vel. Pellentesque ut lacus rhoncus, lacinia ligula vel, porta nibh. Vestibulum in aliquam tortor. Donec eu eleifend velit. Pellentesque porttitor sodales elit, sed hendrerit ipsum pulvinar et. Quisque non posuere justo. Curabitur suscipit arcu eget turpis scelerisque, sit amet egestas lectus pharetra. Vestibulum magna lectus, sagittis sit amet velit interdum, mattis pellentesque libero.
Etiam massa enim, viverra ac quam quis, consectetur ornare ex. Morbi finibus laoreet lorem et consequat. Curabitur sed gravida neque. Praesent gravida non nisl ac tempus. Sed scelerisque arcu faucibus, sollicitudin libero a, placerat libero. Sed libero leo, tincidunt sit amet mauris id, scelerisque eleifend est. Quisque magna lorem, commodo a nulla ac, aliquam ullamcorper ante. Integer pharetra sit amet dolor ac pharetra. Pellentesque ornare ullamcorper luctus. Nam sodales enim id lectus consectetur, vel tempus arcu scelerisque. Morbi tortor nibh, pulvinar ut dui finibus, volutpat blandit tellus. Nam tincidunt ex metus. Aenean mollis ipsum nec tincidunt interdum. Pellentesque consectetur elit nulla, id mattis massa convallis sodales.`


//wordCount = longText.length-1;
//console.log(wordCount);
console.log(longText.length);


for (let i = 0; i < longText.length; i++){
    if (longText.includes('et') === true)
}