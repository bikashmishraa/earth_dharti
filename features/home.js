const HomePage = document.getElementById("Home");
HomePage.addEventListener("click", () => {
  window.location.href = "/";
});

const dataToggleButton = document.getElementById("ast_data_visual");
const astroidDataContainer = document.getElementById("astroid-data-container");
dataToggleButton.addEventListener("click", () => {
  if (astroidDataContainer.style.display === "none")
    astroidDataContainer.style.display = "block";
  else astroidDataContainer.style.display = "none";
});
