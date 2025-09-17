document.getElementById("volverBtn").addEventListener("click", function () {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "../index.html";
  }
});
