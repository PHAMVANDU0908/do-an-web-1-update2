


// //hien thi danh sach san pham duoc chon mua len gio hnag
// function show_product_in_shopping_cart() {
//     let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
//     // let list_item = JSON.parse(localStorage.getItem('list_product'))
//     console.log(list_product_in_shopping_cart);
//     let html = '';
//     for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
//         let product = get_Infor_by_id(list_product_in_shopping_cart[i].id);
//         // console.log(product);
//         product.count = list_product_in_shopping_cart[i].count;
//         product.totalprice = function () {
//             return parseInt(product.price) * parseInt(product.count);
//         }
//         html += `<div id="${product.id+product.name_product+product.id}">
//         <div id="div_product">
//             <div id="div_img" class="grip2">
//                 <img src="${product.img_product}">
//             </div>
//             <div id="div_name" class="grip5">
//                 <h2>${product.name_product}</h2>
//             </div>
//             <div id="div_price" class="grip3">
//                 <h2>$${product.price}</h2>
//             </div>
//             <div id="div_count" class="grip2">
//                 <div id="sub">
                   
//                         <button onclick="sub_product(${product.id})"><i class="ti-minus"></i></button>
                    
//                 </div>
//                 <div id="count">
//                 <span id="${product.id}">${product.count}</span>
//                 </div>
//                 <div id="add">
                   
//                         <button onclick="add_product(${product.id})"><i class="ti-plus"></i></button>
                    
//                 </div>
//             </div>
//             <div id="div_totalprice" class="grip3">
//                 <h2 id="${product.id + product.name_product}">$${product.totalprice()}</h2>
//             </div>
//             <div id="div_delete" class="grip1">
            
//             <button id='delete_btn' onclick="delete_product(${product.id})"><i class="ti-trash"></i></button>
            
//             </div>
//     </div>
//     </div>
//         `
//     }
//     document.getElementById('show_product_in_shopping_cart').innerHTML = html;
//     // console.log(list_product_in_shopping_cart);
// }



// function get_Infor_by_id(id) {
//     let product = new Object();
//     let list_item = JSON.parse(localStorage.getItem('list_product'));
//     for (let i = 0; i < list_item.length; i++) {
//         if (id == list_item[i].id) {
//             product = list_item[i];
//             break;
//         }
//     }
//     return product;
// }







// //xoa san pham moi khi nhan vao thung rac
// function delete_product(id) {
//     let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'))
//     // console.log(list_product_in_shopping_cart);
//     product = get_Infor_by_id(id);
//     document.getElementById(id+product.name_product+id).style.display = "none";
//     for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
//         if (id == list_product_in_shopping_cart[i].id) {
//             list_product_in_shopping_cart.splice(i, list_product_in_shopping_cart[i].count);
//             // window.alert("san pham "+ id +" bi xoa ra khoi gio hang");
//             // console.log(list_product_in_shopping_cart);
//             //luu danh sach san pham xuong locla lai sau khi xoa
//             let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
//             localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
//         }
//     }
//     // window.alert("san pham " + id +" bi xoa ");
// }





// function add_product(id) {
//     let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
//     for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
//         if (list_product_in_shopping_cart[i].id == id) {
//             let product = get_Infor_by_id(id);
//             list_product_in_shopping_cart[i].count = parseInt(list_product_in_shopping_cart[i].count) + 1;
//             let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
//             localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
//             console.log(list_product_in_shopping_cart[i].count);
//             document.getElementById(id).innerHTML = list_product_in_shopping_cart[i].count;
//             product.totalprice = function () {
//                 return parseInt(list_product_in_shopping_cart[i].count) * parseInt(product.price);
//             }
//             console.log(product.totalprice());
//             document.getElementById(id + product.name_product).innerHTML = "$" + product.totalprice();
//             console.log(id + product.name_product);
//         }
//     }
//     console.log(list_product_in_shopping_cart);
// }



// function sub_product(id) {
//     // window.alert("ban dang giam so luong san pham " + id);
//     let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
//     for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
//         if (list_product_in_shopping_cart[i].id == id) {
//             if (list_product_in_shopping_cart[i].count == 1) {
//                 delete_product(id);
//             }
//             else {
//                 let product = get_Infor_by_id(id);
//                 list_product_in_shopping_cart[i].count = parseInt(list_product_in_shopping_cart[i].count) - 1;
//                 let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
//                 localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
//                 document.getElementById(id).innerHTML = list_product_in_shopping_cart[i].count;
//                 product.totalprice = function () {
//                     return parseInt(list_product_in_shopping_cart[i].count) * parseInt(product.price);
//                 }
//                 console.log(product.totalprice());
//                 document.getElementById(id + product.name_product).innerHTML = "$" + product.totalprice();
//                 console.log(id + product.name_product);
//             }
//         }
//     }
//     console.log(list_product_in_shopping_cart);
// }


// console.log("hehehe");
// let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
// console.log(list_product_in_shopping_cart);