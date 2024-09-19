const testimonials = [
  {
    name: "Maria T.",
    photoUrl: "/images/1.jpg",
    text: "Do something you love everyday!",
  },
  {
    name: "Ana M.",
    photoUrl: "/images/2.jpg",
    text: "Never stop loving!",
  },
  {
    name: "Juan G.",
    photoUrl: "./images/3.jpg",
    text: "Love youself!",
  },
  {
    name: "Karol W.",
    photoUrl: "./images/4.jpg",
    text: "Smile every day!",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[index];
  console.log(photoUrl);
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}

updateTestimonial();
