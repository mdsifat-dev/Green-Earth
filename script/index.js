// Modal Container
const categoriesContainer = document.getElementById("categorie_container");
const plantContainer = document.getElementById("plant_container");
const plantCardContainer = document.getElementById("Platcard_Container");
const cartContainer = document.getElementById("cart_container");
const totalPriceContainer = document.getElementById("total_PriceContainer");
const spinnerDiv = document.getElementById("spinner");
const modalContainer = document.getElementById("modal_container");
let cartArray = [];
let totalPriceStore = 0;

const managespinner = (status) => {
  if (status === true) {
    spinnerDiv.classList.remove("hidden");
    plantCardContainer.classList.add("hidden");
  } else {
    spinnerDiv.classList.add("hidden");
    plantCardContainer.classList.remove("hidden");
  }
};

const loadCategorie = () => {
  const url = `https://openapi.programming-hero.com/api/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((catData) => {
      showCategories(catData.categories);
    });
};

const showCategories = (allCategories) => {
  allCategories.forEach((catList) => {
    console.log(catList);
    categoriesContainer.innerHTML += `
        
        <li id="${catList.id}" class="hover:bg-[#2b9b54] hover:text-white p-2 rounded-sm cursor-pointer">${catList.category_name}</li>
        `;
  });
};

plantContainer.addEventListener("click", (e) => {
  const allLi = document.querySelectorAll("li");
  allLi.forEach((li) => {
    li.classList.remove("bg-[#15803D]", "text-white");
  });
  if (e.target.localName === "li") {
    e.target.classList.add("bg-[#15803D]", "text-white");
    loadPlantsCategories(e.target.id);
  }
});

const loadPlantsCategories = (categoriesId) => {
  managespinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${categoriesId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showPlantsCategories(data.plants);
    });
};

const loadPlantsDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((details) => {
      showDetailsPlants(details.plants);
    });
};

const showDetailsPlants = (details) => {
  console.log(details);
  modalContainer.innerHTML = `
    <div class="space-y-4">
                    <h2 class="text-xl font-bold">${details.name}</h2>
                    <div>
                        <img class="h-[300px] w-[500px] object-cover" src="${details.image}" alt="">
                    </div>
                    <h2><span class="text-xl font-bold">Category:</span>${details.category}</h2>
                    <h2><span class="text-xl font-bold">Price:৳</span>${details.price}</h2>
                    <p><span class="text-xl font-bold">Description:</span>${details.description}</p>
    </div>
    `;
  document.getElementById("my_modal_5").showModal();
};

const showPlantsCategories = (platsInfo) => {
  plantCardContainer.innerHTML = "";
  platsInfo.forEach((plantInfo) => {
    plantCardContainer.innerHTML += `
    <div class="bg-white flex flex-col justify-between rounded-lg p-5">
        <div class="mb-4">
          <img class="rounded-lg h-[300px] w-[600px] object-cover" src="${plantInfo.image}" alt="">
       </div>
       <div id="${plantInfo.id}" class="space-y-4">
         <h2 onclick="loadPlantsDetails(${plantInfo.id})" class="font-bold">${plantInfo.name}</h2>
         <p class="text-[#1F2937]">${plantInfo.description}</p>
         <div class="flex justify-between"> 
         <h2 class="bg-[#CFF0DC] text-[#15803D] px-3 py-1 font-medium rounded-full">${plantInfo.category}</h2>
         <p class="font-bold"><span class="font-bold">৳</span><span id="tree_price">${plantInfo.price}</span></p>
         </div>
           <button class="bg-[#15803D] text-white text-center w-full py-3 px-5 rounded-full cursor-pointer hover:opacity-70 ease-in-out duration-200 active:bg-green-800 " >Add to Cart</button>
       </div>
    </div>
        `;
  });

  managespinner(false);
};

plantCardContainer.addEventListener("click", (e) => {
  if (e.target.innerText === "Add to Cart") {
    handleAddToCart(e);
  }
});

const handleAddToCart = (e) => {
  const treeName = e.target.parentNode.children[0].innerText;
  const id = e.target.parentNode.id;
  const price =
    e.target.parentNode.children[2].children[1].children[1].innerText;
  const priceNum = Number(price);
  // console.log(priceNum)
  cartArray.push({
    treeName: treeName,
    price: priceNum,
    id: id,
  });
  showAddCart(cartArray);
};

const showAddCart = (cartArray) => {
  cartContainer.innerHTML = "";
  cartArray.forEach((cartItem) => {
    cartContainer.innerHTML += `
     <div class=" my-2 flex justify-between items-center border-1 border-gray-300 p-3 bg-[#F0FDF4] rounded-lg ">
       <div >
        <h2 class="font-bold">${cartItem.treeName}</h2>
        <p class="text-[#8C8C8C]">৳<span>${cartItem.price}</span></p>
       </div>
       <div>
        <i onclick="delteCart('${cartItem.id}')"  class=" cursor-pointer text-red-500 text-lg fa-solid fa-xmark "></i>
       </div>
 </div>
    `;
  });

  if (cartArray.length === 0) {
    totalPriceContainer.innerHTML = "";
  } else {
    totalPrice();
  }
};

const delteCart = (cartId) => {
  const filterCart = cartArray.filter((cart) => cart.id !== cartId);
  cartArray = filterCart;
  showAddCart(cartArray);
};

const totalPrice = () => {
  totalPriceContainer.innerHTML = "";
  totalPriceContainer.innerHTML += `
    <div class="bg-white p-4 text-black rounded-md flex justify-between"> 
      <h2>Total:</h2>
      <span id="totalPriceshow"></span>
    </div>
    `;
  addPrice();
};

const addPrice = () => {
  totalPriceStore = 0;
  cartArray.forEach((item) => {
    totalPriceStore += item.price;
  });

  document.getElementById("totalPriceshow").innerText = "৳" + totalPriceStore;
};

loadCategorie();

const allLoad = () => {
  const url = ` https://openapi.programming-hero.com/api/plants`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showPlantsCategories(data.plants);
    });
};
allLoad();
