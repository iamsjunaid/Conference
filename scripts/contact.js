const contactForm = document.querySelector('.contact-section');
const contactUs = document.querySelector('.contact-us');
// const popup = document.querySelector('.pop-up');
console.log(popup)
const parser = new DOMParser();

const contactCard = `
<div class="contact-popup-hidden">
  <div class="contact-background"></div>
    <div class="contact-form">
      <i class="fa-solid fa-xmark contact-close"></i>
      <h2 class="d-flex flex-column justify-content-center align-items-center">
          CONTACT US
          <span class="underline"></span>
      </h2>
      <form action="https://formspree.io/f/xayzpwoo" method="post" id="form">
        <label hidden for="text"> Name </label>
        <div class="name-div d-flex mb-4">
          <i class="fa-solid fa-user"></i>
          <input
            type="text"
            id="text"
            name="text"
            maxlength="30"
            placeholder="Enter your name"
            required
          />
        </div>

        <label hidden for="text"> Email</label>
        <div class="email-div d-flex mb-4">
          <i class="fa-solid fa-paper-plane"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <label hidden for="text"> Add your coment</label>
        <div class="comment-div d-flex mb-5">
          <i class="fa-solid fa-message"></i>
          <textarea
            name="comment"
            id="comment"
            maxlength="500"
            placeholder="Write your message here"
            required
          >
          </textarea>
        </div>

        <button type="submit" class="form-btn">Get In Touch</button>
        <span class="message"></span>
      </form>
    </div>

  </div>
  `;

const contactElement = parser.parseFromString(contactCard, 'text/html').body.firstChild;

console.log(contactElement);

const closeBtn = contactElement.querySelector('.contact-close');

contactUs.addEventListener('click', () => {
    contactElement.classList.toggle('contact-popup-hidden');
    popup.classList.toggle('toggler');
    // console.log("contact us cli/cked")
});

closeBtn.addEventListener('click', () => {
    contactElement.classList.toggle('contact-popup-hidden');
    popup.classList.remove('toggler');
});

contactForm.appendChild(contactElement);