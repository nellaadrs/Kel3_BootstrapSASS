
// navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("navigation").innerHTML = data;
  });
// footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
