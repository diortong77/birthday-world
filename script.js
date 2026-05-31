const cake = document.getElementById("cake");
const flame = document.getElementById("flame");
const message = document.getElementById("message");

cake.addEventListener("click", () => {

  cake.classList.add("active");

  flame.classList.remove("hidden");

  setTimeout(() => {
    message.classList.remove("hidden");
  }, 800);

});
