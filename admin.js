document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "login.html";
});

const userForm = document.getElementById("userForm");
const productForm = document.getElementById("productForm");
const msg = document.getElementById("adminMsg");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({
    name: document.getElementById("userName").value,
    email: document.getElementById("userEmail").value,
  });
  localStorage.setItem("users", JSON.stringify(users));
  msg.textContent = "Thêm người dùng thành công!";
});

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({
    name: document.getElementById("productName").value,
    price: document.getElementById("productPrice").value,
    desc: document.getElementById("productDesc").value,
    image: document.getElementById("productImage").value,
  });
  localStorage.setItem("products", JSON.stringify(products));
  msg.textContent = "Thêm sản phẩm thành công!";
});
