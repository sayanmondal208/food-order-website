// Function to toggle the "Show More" content
function toggleContent() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("show-more-btn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      btnText.innerHTML = "Show Less";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      btnText.innerHTML = "Show More";
    }
  }
  
  document.querySelectorAll('.category').forEach(cat => {
    cat.addEventListener('click', () => {
      const target = cat.getAttribute('data-target');
      if (target) window.location.href = target;
    });
  });


  

  const form = document.getElementById("my-form");
  const status = document.getElementById("status");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    if (res.ok) {
      status.innerText = "Message sent! Thank you 😊";
      form.reset();
    } else {
      status.innerText = "Oops! Something went wrong.";
    }
  });
//hamburger

function toggleMenu() {
  document.getElementById("dropdownmenu").classList.toggle("show");
}

function toggleAbout() {
  const moreText = document.getElementById("more-text");
  const dots = document.getElementById("dots");
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    dots.style.display = "none";
  } else {
    moreText.style.display = "none";
    dots.style.display = "inline";
  }
}

emailjs.init("your_user_id"); // Replace with your EmailJS user ID

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("your_service_id", "your_template_id", this)
    .then(() => alert("Message sent successfully!"))
    .catch((error) => alert("Failed to send message: " + error));
});

// Make entire category div clickable
document.querySelectorAll(".category").forEach((category) => {
  category.addEventListener("click", () => {
    const target = category.getAttribute("data-target");
    if (target) window.location.href = target;
  });
});
