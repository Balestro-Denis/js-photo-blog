fetch("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("card-container");
    data.forEach((item) => {
      const cardCol = document.createElement("div");
      cardCol.classList.add("col-12", "col-sm-6", "col-lg-4");
      cardCol.innerHTML = `
    
    <div class="card h-100">
    <img src="${item.url}" class="card-img-top" alt="${item.title}">
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">Data: ${item.date}</p>
    </div>
    </div>

`;
      container.appendChild(cardCol);

      const img = cardCol.querySelector("img-click");
      addEventListener("click", () => {
        const overlay = document.getElementById("overlay");
        const overlayImg = document.getElementById("overlay-img");
        overlayImg.src = item.url;
        overlay.classList.remove("d-none");
      });
    });
  });
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

closeBtn.addEventListener("click", () => {
  overlay.classList.add("d-none");
});
