let loveIcon=document.querySelectorAll('.love_icon');

loveIcon.forEach((icon)=>{
    icon.addEventListener('click',function(){
        if(icon.classList.contains('active')){
        icon.classList.remove('active');
        }
        else{
          icon.classList.add('active');  
        }
    })
})
{/* <div class="products_options">
            <section class="love_icon">
            <i class="fa-regular fa-heart" ></i>
            </section>
            <div class="option_img">
                <img src="./images/Rectangle 7.png">
            </div>

            <div class="product_content" onclick="window.location.href='product_details.html?id=7'">
                <p class="product_title">iPhone 9</p>
                <span class="product_title">85$</span>
            </div>

            <p class="product_description">An apple mobile which is nothing like apple, An apple mobile which is nothing like apple</p>

        </div> */}
// all product cards
let allProductCards=document.querySelectorAll('.products_options');
let allProductImages=document.querySelectorAll('.products_options .option_img img');
let allProductTitles=document.querySelectorAll('.products_options .product_content .product_title');
let allProductPrices=document.querySelectorAll('.products_options .product_content .product_price');
let allProductDescription=document.querySelectorAll('.products_options .product_description');

// fetch data from url
let productImage=document.querySelector('.product_details_container > .product_image');
let productTitle=document.querySelector('.product_details_content > .product_title');
let productPrice=document.querySelector('.product_details_content > .product_price');
let productAvailability=document.querySelector('.product_numbers');
let productBrand=document.querySelector('.product_details_content .product_brand');
let AddedTOCartBtn=document.querySelector('.cart_addition .add_to_cart_btn')
let AddedToCartMessage=document.querySelector('.cart_addition .added_to_cart');
     AddedTOCartBtn.addEventListener('click',function(){
     AddedToCartMessage.style.cssText='opacity:1;';
})

     // <section class="availability">
     //                        <p>Stock & Availability: <span class="product_numbers">10</span></p>
     //                    </section>
     //                    <section class="product_size">
     //                        <p>Size</p>
     //                        <section class="size_buttons_group">
     //                            <button type="button" class="active">XS</button>
     //                            <button type="button">S</button>
     //                            <button type="button">M</button>
     //                            <button type="button">L</button>
     //                        </section>
     //                    </section>
     //                    <Section class="cart_addition">
     //                        <button type="button" class="add_to_cart_btn">Add to Cart</button>
     //                        <a href="#" class="added_to_cart">added to cart</a>
     //                    </Section>
     //                </section>
     //            </section>


async function get(){
let response=await fetch('https://dummyjson.com/products');
let data = await response.json();

allProductCards.forEach((product,index)=>{
     allProductImages[index].src=data.products[index].images[0];
     allProductTitles[index].textContent=data.products[index].title;
     allProductPrices[index].textContent=data.products[index].price + "$";
     allProductDescription[index].textContent=data.products[index].description;
})

     localStorage.setItem('productData', JSON.stringify(data.products));
}

get();

// return data from localstorage 

const productData = JSON.parse(localStorage.getItem('productData'));


let queryString=window.location.search;

// analyse the parameter as a key and value
let urlParams=new URLSearchParams(queryString);

// get the value of any parameter with it key
productId=urlParams.get('id');

// AllProducts

productImage.src=productData[productId].images[0];
productTitle.textContent=productData[productId].title;
productPrice.textContent=productData[productId].price + "$";
productAvailability.textContent=productData[productId].stock;
productBrand.textContent=productData[productId].brand;

