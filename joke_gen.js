

//A file that takes one click of a user and returns a dad joke number and a dad joke.

const randomNum = () => {
     let a = Math.floor(Math.random() * 10);
     return a;
};

const randomJoke = (randomNum) => {
    switch (randomNum) {
        case 1:
        return `Joke number #${randomNum}: What did the horse say after he tripped? Help I've fallen and I cant giddyup!`; 
        case 2:
            return `Joke number #${randomNum}: Why cant you hear a pterodactyl going to the bathroom? Because the P is silent!`; 
        case 3:
            return `Joke number #${randomNum}: What do you call a well-balanced horse?  Stable`; 
        case 4:
            return `Joke number #${randomNum}: What do you call an angry carrot?  A steamed veggie!`; 
        case 5:
            return `Joke number #${randomNum}: Where do polar bears keep their money?  In a snowbank`; 
        case 6:
            return `Joke number #${randomNum}: How do you make an egg-roll?  You push it!`; 
        case 7:
            return `Joke number #${randomNum}: What would bears be without bees?  Ears.`; 
        case 8:
            return `Joke number #${randomNum}: What do you call a pile of cats?  A meow-ntain.`; 
        case 9:
            return `Joke number #${randomNum}: Why do cows wear bells?  Because their horns dont work!`; 
        case 10:
            return `Joke number #${randomNum}: Why did the bicycle fall over?   Because it was two tired!`; 
        default: 
        return 'Error, try again';
    } 
};

function showJoke() {
    const jokeElement = document.getElementById("joke");
    const joke = randomJoke(randomNum());
    jokeElement.textContent = joke;
  }

randomJoke(randomNum());






