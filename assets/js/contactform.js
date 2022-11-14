const contactForm = document.querySelector(".php-email-form");
console.log("Hello ");
console.log(contactForm);

let userNameInput = contactForm.querySelector("#name");
let userEmailInput = contactForm.querySelector("#email");
let subjectInput = contactForm.querySelector("#subject");
let messageInput = contactForm.querySelector("textarea[name='message']");

//Function to send email
const sendEmail = () => {
  console.log("inside sendEmail function");
  Email.send({
    Host: "smtp.gmail.com",

    // Username: "sender@email_address.com",
    Username: "enspire.ayush@gmail.com",

    // Password: "Enter your password",
    Password: "********",

    To: "aayushdhakal360@gmail.com",

    // From: "sender@email_address.com",
    From: "enspire.ayush@gmail.com",

    Subject: subjectInput.value,
    Body: `<p> Sent by: ${userNameInput.value} <${userEmailInput.value}>`,
    html: `<h2>Subect: ${subjectInput.value} </h2> 
            <p>Message: ${messageInput.value} </p>`,
    // Attachments: [
    //   {
    //     name: "File_Name_with_Extension",
    //     path: "Full Path of the file"
    //   }]
  }).then(
    () => {
      alert("Mail has been sent successfully");
    },
    (err) => {
      console.error(err);
    }
  );
};

contactForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("here");
  sendEmail();

  // fetch("forms/sendEmailForm.php", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   mode: "same-origin",
  //   credentials: "same-origin",
  //   body: JSON.stringify({
  //     name: userNameInput.value,
  //     email: userEmailInput.value,
  //     subject: subjectInput.value,
  //     message: messageInput.value,
  //   }),
  // })
  //   .then((json) => json.json())
  //   .then((res) => {
  //     console.log(res);
  //   });
};
