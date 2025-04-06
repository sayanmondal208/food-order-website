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
      if (target) {
        window.location.href = target;
      }
    });
  });
  