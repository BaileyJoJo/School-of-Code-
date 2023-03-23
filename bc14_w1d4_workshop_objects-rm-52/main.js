const myCat = {
    color: "black",
    name: "Tony",
    lovesCuddles: true,
  };

const myHouse = {
    stories: 2,
    bedrooms: 2,
    parking: "no",
    energyrating: "d"
}

const myCar = {
    color: "red",
    wheels: 4,
    seats: 2,
    steering: "power"
}

//task 2
let person = {
    name: "Ben",
    likesChocolate: true, 
  };

  if (person.likesChocolate === true) {
    console.log ("Ben loves chocolate"); 
  } else if (person.likesChocolate !== true) { 
    console.log ("Ben hates chocolate"); 
  }
  //task 3
  
let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};
let desiredPleasantry = bensPhrases.greeting;

console. log (bensPhrases.smallTalk)
console. log (desiredPleasantry)

//Task 4
let me = {
    firstName: "josh",
    lastName: "bailey",
    isBootcamper: false,
  };

  console.log (me.isBootcamper)
  me.isBootcamper = true 
  console.log (me.isBootcamper)

  //Task 5 
  let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };



    let textValue = communication.payload.message.text;
    const priorityLevel = communication.payload.message.priority;
    if (priorityLevel === "URGENT") {
      console.log(textValue);
    } else {
      console.log("This message is not urgent.");
    }

