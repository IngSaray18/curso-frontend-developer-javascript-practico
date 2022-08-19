const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
   aside.classList.toggle('inactive');
}


const productList =[];
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "carro",
  price: 120000,
  img: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600"
});
productList.push({
  name: "laptop",
  price: 1200,
  img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
  name: "monitor",
  price: 120,
  img: "https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1600"
});


function renderProcucts(arr){
  for (const product of arr) {  
 const productCard= document.createElement("div");
 productCard.classList.add("product-card");

 const img= document.createElement("img");

 img.setAttribute("src", product.img);

 const productInfo= document.createElement("div");
 productInfo.classList.add("product-info");


 const productInfodiv= document.createElement("div");
 

 const productPrice= document.createElement("p");
 productPrice.innerHTML = "$" + product.price;
 const productName= document.createElement("p");
 productName.innerText = product.name;

 productInfodiv.appendChild(productName);
 productInfodiv.appendChild(productPrice);

 const productInfigure= document.createElement("figure");
 const productImgCart= document.createElement("img");
 productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg"); 

 productInfigure.appendChild(productImgCart);
 
 productInfo.append(productInfodiv,productInfigure);

 productCard.append(img,productInfo);

 cardsContainer.append(productCard);


}
};

