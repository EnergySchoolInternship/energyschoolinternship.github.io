"use strict";

let rolls=[
    {
        name:"Унаги ролл",
        price:199,
        img:"./image/sushi1.png",
        recipe:"Лосось, кунжут, рис,",
        countRoll:4
    },
    {
        name:"Яки хамачи",
        price:299,
        img:"./image/sushi2.png",
        recipe:"Лосось, латук, авакадо, мягкий сыр",
        countRoll:4

    },
    {
        name:"Окинава ролл",
        price:299,
        img:"./image/sushi3.png",
        recipe:"Креветка, огурец, мягкий сыр, кунжут",
        countRoll:4

    },

    {
        name:"Чиз угорь",
        price:399,
        img:"./image/sushi4.png",
        recipe:"Угорь, майонез, огурцец и сливочный сыр",
        countRoll:4

    },
    {
        name:"Кинуки",
        price:299,
        img:"./image/sushi5.png",
        recipe:"Лосось, огурец, лук зеленый, нори",
        countRoll:4

    },
    {
        name:"Филадельфия",
        price:349,
        img:"./image/sushi5.png",
        recipe:"Лосось, сыр сливочный, рис, нори",
        countRoll:4

    }
]

let rollContainer=document.querySelector(".roll-container");
let result=document.querySelector(".result");
let allCountContainer=document.querySelector(".all-count-container");
let allPriceContainer=document.querySelector(".all-price-container");
let basket=document.querySelector(".basket")

rolls.forEach(function(roll){
    let product=document.createElement("div");
        product.className="product";  
        rollContainer.append(product);

    let productImg=document.createElement("div");
        productImg.className="productImg";  
        product.append(productImg)
        productImg.style.backgroundImage=`url(${roll.img})`;

    let productInfo=document.createElement("div");
        productInfo.className="productInfo";
        product.append(productInfo);
        productInfo.innerHTML=`
        <h1>${roll.name}</h1>
        <p>${roll.recipe}, ${roll.countRoll} шт.</p>
        <strong>${roll.price} р.</strong>
        `
    let orderBtn=document.createElement("button");
        orderBtn.className="orderBtn";
        product.append(orderBtn);
        orderBtn.innerHTML="Заказать"

        orderBtn.addEventListener("click",function(){
            let productBig=document.querySelector(".productBig");
                productBig.classList.add("show");

                document.body.style.overflowY="hidden";

            let close=document.querySelector(".close");

                close.addEventListener("click",function(){

                    productBig.classList.remove("show");
                    document.body.style.overflowY="auto";

                })


            let productBigContainer=document.querySelector(".product-big-container");

                productBigContainer.innerHTML=""

            let productBigImg=document.createElement("div");
                productBigImg.className="productBigImg";
                productBigContainer.append(productBigImg);
                productBigImg.style.backgroundImage=`url(${roll.img})`;

            let productBigText=document.createElement("div");
                productBigText.className="productBigText";
                productBigContainer.append(productBigText);
                productBigText.innerHTML=`
                <h2>${roll.name}</h2>
                <strong>${roll.price} р.</strong>
                <p>${roll.recipe}</p>
                `
            let orderBigBtn=document.createElement("button");
                orderBigBtn.innerHTML="Добавить в корзину";
                orderBigBtn.className="orderBigBtn";
                productBigText.append(orderBigBtn);

                orderBigBtn.addEventListener("click",function(){
                    let orderContainer=document.querySelector(".order-container");

                        orderContainer.classList.add("show");

                        productBig.classList.remove("show");

                        basket.classList.add("show")


                        let closeOrderConatiner=orderContainer.querySelector(".close");
                            closeOrderConatiner.addEventListener("click",function(){
                                orderContainer.classList.remove("show");
                                document.body.style.overflowY="auto";
                            })
                        let orders=document.querySelector(".orders");

                        let orderSmall=document.createElement("div");
                            orders.append(orderSmall);
                            orderSmall.className="orderSmall";

                        let orderSmallImg=document.createElement("div")
                            orderSmall.append(orderSmallImg);
                            orderSmallImg.className="orderSmallImg";
                            orderSmallImg.style.backgroundImage=`url(${roll.img})`;

                        let orderSmallInfo=document.createElement("div");
                            orderSmall.append(orderSmallInfo);
                            orderSmallInfo.className="orderSmallInfo";
                            let count=1
                            orderSmallInfo.innerHTML=`
                            <span class="rollName">${roll.name}</span>
                            <button class="minus">-</button>
                            <span class="countContainer">${count}</span>
                            <button class="plus">+</button>
                            <span class="price">${roll.price}</span>р.
                            
                            <button class="remove">X</button>
                            `

                            let removeBtn=orderSmallInfo.querySelector(".remove");
                            removeBtn.addEventListener("click",function(){
                                removeBtn.classList.toggle("timer");
                                if(removeBtn.classList.contains("timer")){
                                    let i=5
                                let timerId=setInterval(function(){
                                    removeBtn.innerHTML=i;
                                    i--;
                                    removeBtn.addEventListener("click",function(){
                                        clearInterval(timerId);
                                        removeBtn.innerHTML="X";
                                        removeBtn.classList.toggle("timer")
                                    })
                                    if(i<0){
                                        clearInterval(timerId);
                                        removeBtn.parentElement.parentElement.remove();
                                        allPriceCall();
                                        allCountCall();

                                    }

                                },1000)

                                }
                            })
                                // function removeTimer(){
                                // setTimeout(function(){
                                //     removeBtn.parentElement.parentElement.remove();

                                //     allPriceCall();
                                //     allCountCall();
    

                                // },5000);
                        //         let i=5
                        //         let timerId=setInterval(function(){
                        //             removeBtn.innerHTML=i;
                        //             i--;
                        //             removeBtn.addEventListener("click",function(){
                        //                 clearInterval(timerId);
                        //                 removeBtn.innerHTML="X";
                        //                 removeBtn.removeEventListener("click",removeTimer)
                        //             })
                        //             if(i<0){
                        //                 clearInterval(timerId);
                        //                 removeBtn.parentElement.parentElement.remove();
                        //                 allPriceCall();
                        //                 allCountCall();

                        //             }

                        //         },1000)
                               
                        //     }
                        //     removeBtn.addEventListener("click",function(){
                        //         removeBtn.removeEventListener("click",removeTimer)
                        //     })
                        //    removeBtn.addEventListener("click",removeTimer)

                            allPriceCall();
                            allCountCall();

                            let plus=orderSmallInfo.querySelectorAll(".plus");
                            console.log(plus)

                            let countContainer=orderSmallInfo.querySelector(".countContainer");

                            let priceContainer=orderSmallInfo.querySelector(".price");
                            let minus=orderSmallInfo.querySelector(".minus")
                        
                            
                            plus.forEach(function(item){
                                item.addEventListener("click",function(){
                                    count++;
                                    countContainer.innerHTML=count;
                                    priceContainer.innerHTML=count*roll.price;
                                    allPriceCall();
                                    allCountCall()
                                })

                         })
                         minus.addEventListener("click",function(){
                            if(count>1){
                                count--;
                                countContainer.innerHTML=count;
                                priceContainer.innerHTML=count*roll.price;
                                allPriceCall();
                                allCountCall()

                            }
                           

                         })


                            
                         

                })
        })



})


function allPriceCall(){
    let allprice=document.querySelectorAll(".price");
    let sum=0;
    console.log(allprice)
    for(let i=0; i<allprice.length;i++){
        sum=sum+ +allprice[i].innerHTML

    }
    console.log(sum);

    result.innerHTML=sum+" р.";
    allPriceContainer.innerHTML=`=${sum} р. `

}

function allCountCall(){
    let allCount=document.querySelectorAll(".countContainer");
    let sum=0;
    for(let i=0; i<allCount.length;i++){
        sum=sum+ +allCount[i].innerHTML
    }
    
    allCountContainer.innerHTML=sum;

    if(sum==0){
        basket.classList.remove("show")
    }

}



