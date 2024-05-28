const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("_id");

if (productId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "GET",
    headers: {
      Authorization:
       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMTFiMTcyYjNlYTAwMTU3MWZiZDgiLCJpYXQiOjE3MTUzNDM3OTMsImV4cCI6MTcxNjU1MzM5M30.sNDA-ktUx9uF1e3pnH-un7Wmr19QvbYrzcDlINH7GrU",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore prodotto");
      }
    })
    .then((product) => {
      const productDetailsContainer = document.getElementById("productDetails");

      const detailsRow = document.createElement("div");
      detailsRow.classList.add("row");

      const imageCol = document.createElement("div");
      imageCol.classList.add("col-md-6");
      const productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = product.name;
      productImage.classList.add("img-fluid");
      imageCol.appendChild(productImage);

      const detailsCol = document.createElement("div");
      detailsCol.classList.add("col-md-6");
      const detailsList = document.createElement("ul");
      detailsList.classList.add("list-group");

      const nameItem = document.createElement("li");
      nameItem.classList.add("list-group-item");
      nameItem.innerText = `Nome: ${product.name}`;
      detailsList.appendChild(nameItem);

      const descriptionItem = document.createElement("li");
      descriptionItem.classList.add("list-group-item");
      descriptionItem.innerText = `Descrizione: ${product.description}`;
      detailsList.appendChild(descriptionItem);

      const brandItem = document.createElement("li");
      brandItem.classList.add("list-group-item");
      brandItem.innerText = `Brand: ${product.brand}`;
      detailsList.appendChild(brandItem);

      const priceItem = document.createElement("li");
      priceItem.classList.add("list-group-item");
      priceItem.innerText = `Prezzo: ${product.price} €`;
      detailsList.appendChild(priceItem);

      detailsCol.appendChild(detailsList);

      detailsRow.appendChild(imageCol);
      detailsRow.appendChild(detailsCol);

      productDetailsContainer.appendChild(detailsRow);
    });
}