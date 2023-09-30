const menuItems = document.querySelectorAll(".menuItem");
const sliderWrapper = document.querySelector(".sliderWrapper");
const productImage = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColors = document.querySelectorAll(".color");
const productSizes = document.querySelectorAll(".size");
const payment = document.querySelector(".payment");
const closePayment = document.querySelector(".close");
const productBtn = document.querySelector(".productBtn");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    //change current slide
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    menuItem.classList.add("active");

    //change choosen product
    choosenProduct = products[index];

    //change product text
    productTitle.textContent = choosenProduct.title;

    //change product price
    productPrice.textContent = `$ ${choosenProduct.price}`;

    //change product image
    productImage.src = choosenProduct.colors[0].img;

    //change product color
    productColors.forEach((color, idx) => {
      color.style.backgroundColor = choosenProduct.colors[idx].code;
    });
  });
});

//change product image-color by click on colors
productColors.forEach((color, idx) => {
  color.addEventListener("click", () => {
    productImage.src = choosenProduct.colors[idx].img;
  });
});

//change product size
productSizes.forEach((size) => {
  size.addEventListener("click", () => {
    productSizes.forEach((item) => {
      item.style.backgroundColor = "transparent";
      item.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

//show payment modal
productBtn.addEventListener("click", ()=>{
  payment.style.display = "flex"
})

//close payment modal
closePayment.addEventListener("click", ()=>{
  payment.style.display = "none"
})