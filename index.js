// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["I own a computer", "I own a bookbag", "I own a pencil"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])

// change the value of the last element
truths[2] = "My name is Corey"

// console log the last element to check that it's changed
console.log(truths)

// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["I own a bridge", "I own a school", "I own a company"]

// delete a value from the lies array
lies.shift();

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.push("My name is Vorey")

// SPICY
// pick the truths or lies array and console log the 1st element
console.log(lies[0])

// prompt the user to guess if it was true or false
let choice = prompt("Is this statement true or false")

// stretch: how could you check they are right or wrong?
function answer() {
  if (userinput = true){
  alert("CONGRATS, Your correct")
  }

  if (userinput = false){
    alert("You were WRONG")
  }
}


