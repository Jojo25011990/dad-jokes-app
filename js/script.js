// *** Strict Mode - Gsap Regis.Plugin ***
'use strict';
gsap.registerPlugin(TextPlugin);
// *** End of Strict Mode - Gsap Regis.Plugin ***

// *** Select Btn - Paragraph Dad Jokes, Boy - Boy Mouth ***
const btn = document.querySelector('.dad-jokes-btn');
const jokeParagraph = document.querySelector('.dad-jokes-joke');

const boy = document.querySelector('.boy');
const boyMouth = document.querySelector('.boy__head-mouth');
// *** End of Select Btn - Paragraph Dad Jokes, Boy - Boy Mouth ***

// *** Handler Btn - GetAnotherJoke Function ***
btn.addEventListener('click', getAnotherJoke);

getAnotherJoke();

function getAnotherJoke() {
  const configHeader = {
    headers: {
      accept: 'application/json',
    },
  };

  // *** Fetch Data ***
  fetch('https://icanhazdadjoke.com', configHeader)
    .then(res => res.json())
    .then(data => {
      const jokeData = data.joke;
      jokeParagraph.textContent = jokeData;

      // *** Gsap Paragraph Animation ***
      gsap.from(jokeParagraph, {
        autoAlpha: 0,
        y: 50,
        ease: 'elastic.out(1,0.3)',
        duration: 1.7,
      });
      // *** End of Gsap Paragraph Animation ***

      // *** Mouth Animations, according to how this long dad joke is. ***
      if (jokeData.length > 80) {
        setTimeout(() => {
          boyMouth.classList.add('smile');
          boyMouth.classList.remove('sad');
        }, 100);
      } else if (jokeData.length >= 62 && jokeData.length <= 80) {
        setTimeout(() => {
          boyMouth.classList.remove('sad');
          boyMouth.classList.remove('smile');
        }, 100);
      } else {
        setTimeout(() => {
          boyMouth.classList.add('sad');
          boyMouth.classList.remove('smile');
        }, 100);
      }
      // *** End of Mouth Animations, according to how this long dad joke is. ***
    })
    .catch(error => console.log(error));
  // *** End of Fetch Data ***
}
// *** End of Handler Btn - GetAnotherJoke Function ***

// *** Add Class, boy.active - 3sec ***
setTimeout(() => {
  boy.classList.add('active');
}, 3000);
// *** End of Add Class, boy.active - 3sec***
