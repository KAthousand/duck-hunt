window.onload = function () {
  const body = document.body;

  console.log(body);
  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  // let duck = document.createElement('div')
  // duck.className = 'duck'
  // this.document.body.appendChild(duck)


  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  const flap = (duck) => {
    duck.classList.toggle('flap');
  }
  // select make the function add class list toggle 

  // I moved this into the loop.

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  const moveDuck = (duck) => {
    duck.style.left = (Math.random() * window.innerWidth) + `px`;
    duck.style.top = (Math.random() * window.innerHeight) + `px`;
  }

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // I moved this into the loop!

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  const createDuck = () => {
    const newDuck = document.createElement('div');
    moveDuck(newDuck);
    newDuck.className = 'duck';
    this.document.body.appendChild(newDuck);
    this.setInterval(flap, 250, newDuck);
    this.setInterval(moveDuck, 1000, newDuck);
    return newDuck
  }


  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function


  for (let i = 0; i < 5; i++) {
    const newDuck = createDuck();
    newDuck.addEventListener('click', () => {
      newDuck.classList.add('shot');
      const exit = () => {
        newDuck.parentNode.removeChild(newDuck);
        checkForWinner();
      }
      this.setTimeout(exit, 1000);
    })
  }


  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location  
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // Dry baby! I already did this with the moveDuck function I wrote.

  // 9. Keep going! Move onto part 3!



  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // Did it in the loop!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // Added it to my function above in the loop!

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  function checkForWinner() {
    let winner = document.querySelectorAll('.duck')
    this.console.log(winner)
    if (winner.length === 0) {
      this.console.log('Hey you sure did win.')
      let winMsg = document.createElement(`h1`)
      winMsg.textContent = " You Are A Winner!"
      winMsg.style.color = 'white'
      this.document.body.appendChild(winMsg)
    }
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
};
