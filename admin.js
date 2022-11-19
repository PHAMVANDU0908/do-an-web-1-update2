


//1.danh sach san pham hien thi tren giao dien nguoi dung 
let list_product = [
    {
        id: "1",
        img_product: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHXXvaxTtt7NS0A-mef2qIqWa1IPDmAFsBIwrTWSXdGrwfcP3WKwO8QxeKDDsna4PnxsnOY0eZnQ&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "2",
        img_product: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMBsmpb-K11Ll6Osf9i1dOiZa-RN6Wa3wA1IJqTXDZMc2Jqp4hw72tvjRQYTPfKZ2l6yY5fQcLrA&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "3",
        img_product: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQK2SAUG1zqHBrSdtS7jY6dvQBQZQ9JXVBHikj9fRxn2Uq9mgMC8QahCvLQLQ_3&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "4",
        img_product: "./anhdonghonam/Teintop T7017-2.jpg",
        watch_brand: "Teintop",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },
    {
        id: "5",
        img_product: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMBsmpb-K11Ll6Osf9i1dOiZa-RN6Wa3wA1IJqTXDZMc2Jqp4hw72tvjRQYTPfKZ2l6yY5fQcLrA&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "6",
        img_product: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQK2SAUG1zqHBrSdtS7jY6dvQBQZQ9JXVBHikj9fRxn2Uq9mgMC8QahCvLQLQ_3&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "7",
        img_product: "./anhdonghonam/Aouke AK01-1.png",
        watch_brand: "Aouke",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },
    {
        id: "8",
        img_product: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQK2SAUG1zqHBrSdtS7jY6dvQBQZQ9JXVBHikj9fRxn2Uq9mgMC8QahCvLQLQ_3&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "9",
        img_product: "./anhdonghonam/Aouke AK01-1.png",
        watch_brand: "Aouke",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },
    {
        id: "10",
        img_product: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHXXvaxTtt7NS0A-mef2qIqWa1IPDmAFsBIwrTWSXdGrwfcP3WKwO8QxeKDDsna4PnxsnOY0eZnQ&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    },

    {
        id: "11",
        img_product: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMBsmpb-K11Ll6Osf9i1dOiZa-RN6Wa3wA1IJqTXDZMc2Jqp4hw72tvjRQYTPfKZ2l6yY5fQcLrA&usqp=CAc",
        watch_brand: "Rolex",
        name_product: "DATEJUST 41",
        attribute: "Oyster, 41 mm, Oystersteel and white gold",
        price: "50000"
    }
]






//2.hien thi danh sach san pham len giao dien nguoi dung
//B1:chuyen danh sach san pham thanh json de co the luu vao local storage

//B2:luu danh sach san pham xuong local storage

//B3:lay danh sach san pham tu localStorage len de hien thi danh sach san pham
// console.log(list_product);


//B4:ham hien thi danh sach san pham moi khi vao trang web
function show_product(){
let json_list_product = JSON.stringify(list_product);
localStorage.setItem('list_product', json_list_product);
list_product = JSON.parse(localStorage.getItem('list_product'));

    let list_item = '';
    let id, img_product, watch_brand, name_product, attribute, price;
    for (let i = 0; i < 6; i++) {
        if(i >= list_product.lengthd){
            break;
        }
        id = list_product[i].id;
        img_product = list_product[i].img_product;
        watch_brand = list_product[i].watch_brand;
        name_product = list_product[i].name_product;
        attribute = list_product[i].attribute;
        price = list_product[i].price;
        list_item += `<div id="product">
        <button onclick="show_detail_product(${id})">
            <img src="${img_product}">
            <h2>$${price}</h2>
            <h3>${watch_brand}</h3>
            <h2>${name_product}</h2>
        </button>
    </div>`
    }
    document.getElementById("right").innerHTML = list_item;
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;

}
