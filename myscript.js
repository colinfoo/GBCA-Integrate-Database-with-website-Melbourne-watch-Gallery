function additem(ele) {
  let productname =
    ele.parentElement.parentElement.querySelector("h2").innerHTML;
  let productimage = ele.parentElement.parentElement.querySelector("img").src;
  let productprice = ele.parentElement.querySelector("h2 span").innerHTML;

  //   console.log(productname, productimage, productprice);

  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) cart = [];

  let product = {
    productname: productname,
    productprice: productprice,
    productimage: productimage,
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updatedisplay();
}

function additem2(ele) {
  let productname = document.getElementById("productname").innerHTML;
  let productimage = document.querySelector(".image_gallery img").src;
  let productprice = document.getElementById("productprice").innerHTML;

  //   console.log(productname, productimage, productprice);

  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) cart = [];

  let product = {
    productname: productname,
    productprice: productprice,
    productimage: productimage,
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updatedisplay();
}

function removeitem(index) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) cart = [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  updatedisplay();
}

function updatedisplay() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart == null) cart = [];

  let content = "";
  let total = 0;
  cart.forEach((item, index) => {
    content += `
        <div class="cart_item">
        <img
          src=${item.productimage}"
          alt=""
        />
        <div>
          <h2>${item.productname}</h2>
        </div>

        <h2>$${item.productprice}</h2>

        <button onclick="removeitem(${index})" class="btn btn-secondary">Remove</button>
      </div>
      `;

    total += parseInt(item.productprice);
  });

  document.querySelector(".shopping_cart div").innerHTML = content;
  document.getElementById("totalamount").innerHTML = "$" + total;
  document.getElementById("itemcount").innerHTML = cart.length;
}

function changeimage(ele) {
  document.querySelector(".main_image").src = ele.src;
}
