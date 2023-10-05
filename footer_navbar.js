fetch('navbar.html')
              .then(response => response.text())
              .then(data => {
                document.getElementById("navigation").innerHTML = data;
});
fetch('footer.html')
              .then(response => response.text())
              .then(data => {
                document.getElementById("footer").innerHTML = data;
 });
