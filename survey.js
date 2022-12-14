const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A survey app which asks the user a bunch of questions one after the other,
// like their favourite music, activity, food, sport, etc. 
// It will then generate a profile description for them to use online.

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  console.log(`Thank you ${name}`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`You like ${activity}! That's awesome!`);

    rl.question('What do you listen to while doing that? ', (music) => {
      console.log(`You have great musical tastes!`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        console.log(`Hey we love ${meal} too!`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          console.log(`${food} is super yummy!`);

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`${sport} is the best!`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log(`Wow! That's incredible!`);

              console.log(
                `\nāā Here's your Fun Profile: āā\n\n${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);

              rl.close();

            });
          });
        });
      });
    });
  });
});

