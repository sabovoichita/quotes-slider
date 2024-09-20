const testimonials = [
  {
    name: "Maria T.",
    photoUrl: "./images/1.jpg",
    text: "‘Do something you love everyday!’",
  },
  {
    name: "Bogdan T.",
    photoUrl: "./images/16.jpg",
    text: "‘Defiéndete. Elige ser un guerrero en un mundo de subvencionados y burócratas’",
  },
  {
    name: "Ana M.",
    photoUrl: "./images/2.jpg",
    text: "‘Never stop loving!’",
  },
  {
    name: "Juan G.",
    photoUrl: "./images/3.jpg",
    text: "‘Love youself!’",
  },
  {
    name: "Bogdan T.",
    photoUrl: "./images/15.jpg",
    text: "‘La pereza nos roba la energía’",
  },
  {
    name: "Natali B.",
    photoUrl: "./images/4.jpg",
    text: "‘Smile every day!’",
  },
  {
    name: "Bogdan T.",
    photoUrl: "./images/14.jpg",
    text: "‘El conformismo sofoca todo inpulso’",
  },
  {
    name: "Dina P.",
    photoUrl: "./images/5.jpg",
    text: "‘Gather love around you!’",
  },
  {
    name: "Bogdan T.",
    photoUrl: "./images/13.jpg",
    text: "‘El pesimismo es como una nube que oculta el sol’",
  },
  {
    name: "Jeff Bezos",
    photoUrl: "./images/6.jpg",
    text: "‘Failure and invention are inseparable twins. To invent you have to experiment, and if you know in advance that it's going to work, it's not an experiment.’",
  },
  {
    name: "Charles Mingus",
    photoUrl: "./images/7.jpg",
    text: "‘Anyone can make the simple complicated. Creativity is making the complicated simple.’",
  },
  {
    name: "Bogdan T.",
    photoUrl: "./images/12.jpg",
    text: "‘Muestra acción, voluntad y ambición’",
  },
  {
    name: "Mark Manson",
    photoUrl: "./images/8.jpg",
    text: "‘Iteration is the fundamental basis of all improvement.’",
  },
  {
    name: "Lao Tzu",
    photoUrl: "./images/9.jpg",
    text: "‘If you don't change your direction, you may end up where you are going.’",
  },
  {
    name: "A. Einstein",
    photoUrl: "./images/10.jpg",
    text: "‘Fantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope.’",
  },
  {
    name: "E.O. Wilson",
    photoUrl: "./images/11.jpg",
    text: "‘We are drowning in information, while starving for wisdom.’",
  },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[index];
  // console.log(photoUrl);
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}

function quoteButtonActivated() {
  const quotes = [
    "‘Do something you love everyday! - Maria T. ’",
    "‘Defiéndete. Elige ser un guerrero en un mundo de subvencionados y burócratas - Bogdan T.’",
    "‘Never stop loving! - Ana M.’",
    "‘Love youself!’ - Juan G.",
    "‘La pereza nos roba la energía - Bogdan T.’",
    "‘Smile every day!’ - Natali B.",
    "‘El conformismo sofoca todo inpulso - Bogdan T.’",
    "‘Gather love around you!’ - Dina P.",
    "‘El pesimismo es como una nube que oculta el sol - Bogdan T.’",
    "‘Failure and invention are inseparable twins. To invent you have to experiment, and if you know in advance that it's going to work, it's not an experiment.’ - Jeff Bezos",
    "‘Anyone can make the simple complicated. Creativity is making the complicated simple.’ - Charles Mingus",
    "‘Muestra acción, voluntad y ambición - Bogdan T.’",
    "‘Iteration is the fundamental basis of all improvement. - Mark Manson’",
    "‘If you don't change your direction, you may end up where you are going. - Lao Tzu’",
    "‘Fantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope. - A. Einstein’",
    "‘We are drowning in information, while starving for wisdom. - E.O. Wilson’",
    "‘The only way to do great work is to love what you do. - Steve Jobs’",
    "‘Believe you can and you're halfway there. - Theodore Roosevelt’",
    "‘It does not matter how slowly you go as long as you do not stop. - Confucius’",
    "‘You are never too old to set another goal or to dream a new dream. - C.S. Lewis’",
    "‘Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll’",
  ];

  document.getElementById("quoteButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [quoteText, username] = quotes[randomIndex].split(" - ");
    document.getElementById("quotetext").innerText = quoteText;
    document.querySelector(".username").innerText = username || "";
  });
}

updateTestimonial();
quoteButtonActivated();
