
// ----------------------------------------hien thi san chi tiet san pham---------------------------




function show_detail_product(id) {
    //B1:lay danh sach san pham tu local len
    let list_item = JSON.parse(localStorage.getItem('list_product'));
    let img_product, name_product, watch_brand, attribute, price;
    // console.log(list_item);
    //B2:duyet danh sach san pham de lay ra san pham co id trung view_shopping_cartoi id truyen vao
    for (let i = 0; i < list_item.length; i++) {
        if (id == list_item[i].id) {
            img_product = list_item[i].img_product;
            name_product = list_item[i].name_product;
            watch_brand = list_item[i].watch_brand;
            attribute = list_item[i].attribute;
            price = list_item[i].price;
            break;
        }
    }
    let html = "";
    html += `<div id="detail_product">
    <div class="detail">
        <div class="top">
            <div class="left1">
                <img src="${img_product}">
            </div>
            <div class="right1">
                <div class="go-back">
                    <button onclick="back_index()"><i class="ti-close"></i></button>
                </div>
                <h3 style="margin-top:50px;">${watch_brand}</h3>
                <h1>${name_product}</h1><br>
                <p>O${attribute}</p><br>
                <h2>$${price}</h2><br><br>
                <h3>So luong</h3>
                <!-- ================ -->
                <div id="product-qty">
                    <div id="sub">
                        <button onclick="decre_product(${id})"><i class="ti-minus"></i></button>
                    </div>
                    <div id="count"></div>
                    <div id="add">
                        <button onclick="incre_product(${id})"><i class="ti-plus"></i></button>
                    </i></div>
                </div>
                <!-- ==================== -->
            </div>
        </div>
        <div class="buttom" id="buttom">
            <button onclick="add_product_to_shopping_cart(${id}),spawnTemp()">Chọn mua</button>
        </div>
    </div>
    <div id="thaotac"></div>
</div> `
    // console.log(html);
    document.getElementById('show_detail_item').innerHTML = html;

    document.getElementById('count').innerHTML = '1';
}




//cac thao tac trong chi tiet san pham 


//1:them so luong  san pham muon mua
function incre_product(id) {
    let count = document.getElementById('count');
    soluong = parseInt(count.textContent);
    soluong++;
    document.getElementById('count').innerHTML = soluong;
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;

}

//2:giam so luong san pham muon mua 
function decre_product(id) {
    let count = document.getElementById('count');
    soluong = parseInt(count.textContent);
    if (soluong == 1) {
        return;
    }
    else {
        soluong--;
    }
    document.getElementById('count').innerHTML = soluong;
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;

}




//3:quay lai trang chu sau khi xem chi tiet
function back_index() {
    document.getElementById("detail_product").style.display = "none";
}



// ------------------------------------hien thi chi tiet san pham(end)----------------------------


















//  -------------------------------------------index-SLIDER ----------------------------------------------------------------

const imgPosition = document.querySelectorAll(" .aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem = document.querySelectorAll(".dot")
let imgNumber = imgPosition.length
let idx = 0
// console.log(imgPosition)
imgPosition.forEach(function (image, idx) {

    image.style.left = idx * 100 + "%"
    dotItem[idx].addEventListener("click", function () {
        slider(idx)
    })
})
function imgSlide() {
    idx++;
    if (idx >= imgNumber) { idx = 0 }
    slider(idx)
}
function slider(idx) {
    imgContainer.style.left = "-" + idx * 100 + "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[idx].classList.add("active")
}
setInterval(imgSlide, 5000)


// ---------------------------------slider end-----------------------------









//  ---------------------------------search product --------------------------------------


function search_product() {
    document.getElementById('right').style.minHeight = '400px';
    let product_search = document.getElementById('search').value.toLowerCase();
    let list_item = JSON.parse(localStorage.getItem('list_product'));
    document.getElementById('index-slider').style.display = "none";

    let list_cart_product_search = '', list_product_search = new Array();
        for (let i = 0; i < list_item.length; i++){
        if ((list_item[i].watch_brand.toLowerCase()).includes(product_search) && product_search != '' && list_product_search.length < 6) {
            list_product_search.push(list_item[i]);
            list_cart_product_search += `<div id="product">
            <button onclick="show_detail_product(${list_item[i].id})">
                <img src="${list_item[i].img_product}">
                <h2>$${list_item[i].price}</h2>
                <h3>${list_item[i].watch_brand}</h3>
                <h2>${list_item[i].name_product}</h2>
            </button>
        </div>`
        }
        else if((list_item[i].watch_brand.toLowerCase()).includes(product_search) && product_search != '' && list_product_search.length >= 6){
            list_product_search.push(list_item[i]);
        }
    }
    if (list_cart_product_search == '') {
        if (product_search == '') {
            document.getElementById('index-slider').style.display = "block";
            show_product();
            show_page();
        }
        else {
            localStorage.setItem('list_product',JSON.stringify(list_product_search));
            show_page();
            document.getElementById('right').innerHTML = "❌ Không có sản phẩm phù hợp!";
        }
    }
    else {
        localStorage.setItem('list_product',JSON.stringify(list_product_search));
        document.getElementById('right').innerHTML = list_cart_product_search;
        show_page();
    }
}



// -----------------------------------chuyen trang-------------------------------------------
function show_page() {
    list_item = JSON.parse(localStorage.getItem('list_product'));
    console.log(list_item);
    let so_luong_trang = Math.ceil(list_item.length / 6);
    let html = '';
    for (let i = 1; i <= so_luong_trang; i++) {
        html += `<button onclick="show_product_depend_on_page(${i})"><div class="page">${i}</div></button>`
    }
    document.getElementById('show-page').innerHTML = html;
}


function show_product_depend_on_page(page_current) {
    list_item = JSON.parse(localStorage.getItem('list_product'));
    let html = '';
    let product_start = (page_current - 1) * 6;
    // console.log(product_start);
    for (let i = product_start; i < product_start + 6; i++) {
        if (i >= list_item.length) {
            break;
        }
        // console.log(i);
        html += `<div id="product">
        <button onclick="show_detail_product(${list_item[i].id})">
            <img src="${list_item[i].img_product}">
            <h2>$${list_item[i].price}</h2>
            <h3>${list_item[i].watch_brand}</h3>
            <h2>${list_item[i].name_product}</h2>
        </button>
    </div>`
    }
    console.log(html);
    document.getElementById('right').innerHTML = html;
}






function load(list_item)
{

}








// --------------------------------------------


function create_product_in_shopping_cart(id) {
    let product = new Object();
    product.id = id;
    product.count = 1;
    return product;
}



// let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
// if(list_product_in_shopping_cart == null){
//     list_product_in_shopping_cart = new Array();
// }

function add_product_to_shopping_cart(id) {
    // window.alert("them vao gio hang thanh cong ");
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
    // let list_item = JSON.parse(localStorage.getItem('list_product'));
    let exist = false;
    for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
        if (list_product_in_shopping_cart[i].id == id) {
            let quantity = parseInt(document.getElementById('count').textContent);
            list_product_in_shopping_cart[i].count = parseInt(list_product_in_shopping_cart[i].count) + quantity;
            exist = true;
        }

    }

    if (exist == false) {
        let new_product = create_product_in_shopping_cart(id);
        new_product.count = parseInt(document.getElementById('count').textContent);
        list_product_in_shopping_cart.push(new_product);
    }

    let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
    localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
    //dua so luong san pham quay lai = 1
    document.getElementById('count').innerHTML = "1";
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;
    document.getElementById('detail_product').style.display = "none";
    document.getElementById("index-header").scrollIntoView({behavior: 'smooth'});

}



function spawnTemp() {
    let deleteMe = $("<div style='background-color:red;width:250px;height:50px;position:absolute;z-index:1;right:20px;font-size:16px;display:flex;justify-content:center;align-items:center;border-radius:6px'>✅ Thêm sản phẩm thành công</div>").appendTo("#anounce");
    setTimeout(function() {
      deleteMe.remove();
    },2000);
  }




//hien thi danh sach san pham duoc chon mua len gio hnag
function show_product_in_shopping_cart() {
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
    // let list_item = JSON.parse(localStorage.getItem('list_product'))
    // console.log(list_product_in_shopping_cart);
    let html = '';
    let totalprice = 0;
    for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
        let product = get_Infor_by_id(list_product_in_shopping_cart[i].id);
        // console.log(product);
        product.count = list_product_in_shopping_cart[i].count;
        product.totalprice = function () {
            return parseInt(product.price) * parseInt(product.count);
        }
        totalprice += product.totalprice();
        html += `<div id="${product.id + product.name_product + product.id}">
        <div id="div_product">
            <div id="div_img" class="grip2">
                <img src="${product.img_product}">
            </div>
            <div id="div_name" class="grip5">
                <h2>${product.name_product}</h2>
            </div>
            <div id="div_price" class="grip3">
                <h2>$${product.price}</h2>
            </div>
            <div id="div_count" class="grip2">
                <div id="sub-product-in-shopping-cart">
                   
                        <button onclick="sub_product(${product.id})"><i class="ti-minus"></i></button>
                    
                </div>
                <div id="count-product-in-shopping-cart">
                <span id="${product.id}">${product.count}</span>
                </div>
                <div id="add-product-in-shopping-cart">
                   
                        <button onclick="add_product(${product.id})"><i class="ti-plus"></i></button>
                    
                </div>
            </div>
            <div id="div_totalprice" class="grip3">
                <h2 id="${product.id + product.name_product}">$${product.totalprice()}</h2>
            </div>
            <div id="div_delete" class="grip1">
            
            <button id='delete_btn' onclick="delete_product(${product.id})"><i class="ti-trash"></i></button>
            
            </div>
    </div>
    </div>
        `
    }
    document.getElementById('show_product_in_shopping_cart').innerHTML = html;
    document.getElementById('totalprice').innerHTML = "Tổng tiền: $" + totalprice;
}



function get_Infor_by_id(id) {
    let product = new Object();
    let list_item = JSON.parse(localStorage.getItem('list_product'));
    for (let i = 0; i < list_item.length; i++) {
        if (id == list_item[i].id) {
            product = list_item[i];
            break;
        }
    }
    return product;
}







//xoa san pham moi khi nhan vao thung rac


let id_product_of_confirm_delete;
function delete_product(id) {
    // confirm_delete.apply(null, arguments);
    id_product_of_confirm_delete = arguments;
    document.getElementById('notification-body').style.display = "flex";
    // announce_when_delete_product(id);
    // let delete_clicked = document.getElementById('button-confirm-delete');
    // let cancle_clicked = document.getElementById('button-confirm-cancel');
    // console.log("1");

    // delete_clicked.addEventListener('click', function confirm_delete_product(){
    //     let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'))
    //     // product = get_Infor_by_id(id);
    //     // document.getElementById(id+product.name_product+id).style.display = "none";
    //     for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
    //         if (id == list_product_in_shopping_cart[i].id) {
    //             list_product_in_shopping_cart.splice(i, list_product_in_shopping_cart[i].count);
    //             let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
    //             localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
    //         }
    //     }

    //     document.getElementById('notification-body').style.display = "none";
    //     show_product_in_shopping_cart();
    //     document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;
    //   });

    // delete_clicked.addEventListener('click', function go_back_shopping_cart(){
    //     document.getElementById('notification-body').style.display = "none";
    // });
}


// ----------------------------thong bao khi xoa san pham----------------------------
// function announce_when_delete_product(id){
//     // confirm_delete.apply(null, arguments);
//     document.getElementById('notification-body').style.display = "flex";
// }
function confirm_delete() {
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'))
    for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
        if (id_product_of_confirm_delete[0] == list_product_in_shopping_cart[i].id) {
            // console.log("hahaha");
            list_product_in_shopping_cart.splice(i, list_product_in_shopping_cart[i].count);
            let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
            localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
        }
    }

    document.getElementById('notification-body').style.display = "none";
    show_product_in_shopping_cart();
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;
}


function go_back_shopping_cart() {
    document.getElementById('notification-body').style.display = "none";
}


// ----------------------------thong bao khi xoa san pham (end)----------------------------



function add_product(id) {
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
    for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
        if (list_product_in_shopping_cart[i].id == id) {
            let product = get_Infor_by_id(id);
            list_product_in_shopping_cart[i].count = parseInt(list_product_in_shopping_cart[i].count) + 1;
            let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
            localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
            console.log(list_product_in_shopping_cart[i].count);
            document.getElementById(id).innerHTML = list_product_in_shopping_cart[i].count;
            product.totalprice = function () {
                return parseInt(list_product_in_shopping_cart[i].count) * parseInt(product.price);
            }
            console.log(product.totalprice());
            document.getElementById(id + product.name_product).innerHTML = "$" + product.totalprice();
            console.log(id + product.name_product);
        }
    }
    console.log(list_product_in_shopping_cart);
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;

}



function sub_product(id) {
    // window.alert("ban dang giam so luong san pham " + id);
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));
    for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
        if (list_product_in_shopping_cart[i].id == id) {
            if (list_product_in_shopping_cart[i].count == 1) {
                delete_product(id);
            }
            else {
                let product = get_Infor_by_id(id);
                list_product_in_shopping_cart[i].count = parseInt(list_product_in_shopping_cart[i].count) - 1;
                let json_list_product_in_shopping_cart = JSON.stringify(list_product_in_shopping_cart);
                localStorage.setItem('product_in_shopping_cart', json_list_product_in_shopping_cart);
                document.getElementById(id).innerHTML = list_product_in_shopping_cart[i].count;
                product.totalprice = function () {
                    return parseInt(list_product_in_shopping_cart[i].count) * parseInt(product.price);
                }
                console.log(product.totalprice());
                document.getElementById(id + product.name_product).innerHTML = "$" + product.totalprice();
                console.log(id + product.name_product);
            }
        }
    }
    console.log(list_product_in_shopping_cart);
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;

}



//xem gio hang
function view_shopping_cart() {
    show_product_in_shopping_cart();
    document.getElementById('show_product').style.display = "flex";
}


//quay lai sau khi xem gio hang
function back_to_page() {
    document.getElementById('show_product').style.display = "none";
}







// ------------------------------delete all product from shooping cart-------------------------
function delete_all_product() {
    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem("product_in_shopping_cart"));
    for (let i = 0; i < list_product_in_shopping_cart.length;) {
        if (list_product_in_shopping_cart.length == 0) {
            break;
        }
        product = get_Infor_by_id(list_product_in_shopping_cart[i].id);
        document.getElementById(product.id + product.name_product + product.id).style.display = "none";
        list_product_in_shopping_cart.splice(i, 1);
    }
    localStorage.setItem('product_in_shopping_cart', JSON.stringify(list_product_in_shopping_cart));
    document.getElementById('count-on-icon-shopping').innerHTML = list_product_in_shopping_cart.length;

}









// --------------------------------thanh toan don hang------------------------------
function pay() {
    document.getElementById('bill-content').style.display = "flex";
    document.getElementById('index-nav').style.display = "none";
    document.getElementById('index-slider').style.display = "none";
    document.getElementById('index-content').style.display = "none";

    let list_product_in_shopping_cart = JSON.parse(localStorage.getItem('product_in_shopping_cart'));

    let html = '', money_to_pay = 0;
    for (let i = 0; i < list_product_in_shopping_cart.length; i++) {
        let product = get_Infor_by_id(list_product_in_shopping_cart[i].id);
        product.count = list_product_in_shopping_cart[i].count;
        product.totalprice = function () {
            return parseInt(product.price) * parseInt(product.count);
        }

        money_to_pay += product.totalprice();

        html += `<div id="product-in-bill">
        <img src="${product.img_product}" alt="">
        <h3>${product.name_product}</h3>
        <p>số lượng: ${product.count}</p>
        <p>tổng tiền: $${product.totalprice()}</p>
    </div>`
    }

    console.log(money_to_pay);
    document.getElementById('money-to-be-pay').innerHTML = "Tổng tiền cần thanh toán: $" + money_to_pay;
    document.getElementById('show-product-in-bill').innerHTML = html;

}



