const products = JSON.parse(localStorage.getItem("products")) || [];

const list = document.getElementById("productList");
list.innerHTML = products
  .map(
    (p) => `
  <div class="card">
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p> ${p.price} VND</p>
    <p>${p.desc}</p>
  </div>
`
  )
  .join("");

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});
