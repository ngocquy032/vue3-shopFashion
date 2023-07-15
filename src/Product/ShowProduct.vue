<template>
    <div class="main">
        <div id="content">
            <div class="container mr-t-30">
                <div class="d-flex">
                    <div class="w-50">
                        <div class="slide">
                            <div>
                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" class="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="" alt="">
                                        </div>
                                        <div class="carousel-item">
                                            <!-- <img :src="`../src/assets/images/${product.image}`" class="card-img-top"
                                                :alt="product.name" /> -->
                                        </div>
                                        <div class="carousel-item">
                                            <!-- <img :src="`../src/assets/images/${product.image}`" class="card-img-top"
                                                :alt="product.name" /> -->
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-50">
                        <div class="content-1">

                            <h3>{{ product.name }}</h3>
                            <div class="d-flex">
                                <div class="rating">
                                    <a href="">5.0</a>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>

                                </div>
                                <div class="rating">
                                    <a href="">4,5k</a> Đánh Giá
                                </div>
                                <div class="rating">
                                    <a href="">13k</a> Đã Bán
                                </div>
                            </div>
                            <div class="money">
                                <h2>
                                    {{ product.price }}<span class="woocommerce-Price-currencySymbol">₫</span>
                                </h2>
                            </div>
                            <div class="flash">
                                <div class="d-flex">
                                    <a class="flex items-center _81oBVb"
                                        href="/flash_sale?fromItem=16936296515&amp;promotionId=725375978386697"><svg
                                            viewBox="0 0 108 21" height="21" width="108"
                                            class="flash-sale-logo flash-sale-logo--default">
                                            <g fill="currentColor" fill-rule="evenodd">
                                                <path
                                                    d="M0 16.195h3.402v-5.233h4.237V8H3.402V5.037h5.112V2.075H0zm29.784 0l-.855-2.962h-4.335l-.836 2.962H20.26l4.723-14.12h3.576l4.724 14.12zM26.791 5.294h-.04s-.31 1.54-.563 2.43l-.797 2.744h2.74l-.777-2.745c-.252-.889-.563-2.43-.563-2.43zm7.017 9.124s1.807 2.014 5.073 2.014c3.13 0 4.898-2.034 4.898-4.384 0-4.463-6.259-4.147-6.259-5.925 0-.79.778-1.106 1.477-1.106 1.672 0 3.071 1.245 3.071 1.245l1.439-2.824s-1.477-1.6-4.47-1.6c-2.76 0-4.918 1.718-4.918 4.325 0 4.345 6.258 4.285 6.258 5.964 0 .85-.758 1.126-1.457 1.126-1.75 0-3.324-1.462-3.324-1.462zm12.303 1.777h3.402v-5.53h5.054v5.53h3.401V2.075h-3.401v5.648h-5.054V2.075h-3.402zm18.64-1.678s1.692 1.915 4.763 1.915c2.877 0 4.548-1.876 4.548-4.107 0-4.483-6.492-3.871-6.492-6.36 0-.987.914-1.678 2.08-1.678 1.73 0 3.052 1.224 3.052 1.224l1.088-2.073s-1.4-1.501-4.12-1.501c-2.644 0-4.627 1.738-4.627 4.068 0 4.305 6.512 3.87 6.512 6.379 0 1.145-.952 1.698-2.002 1.698-1.944 0-3.44-1.48-3.44-1.48zm19.846 1.678l-1.166-3.594h-4.84l-1.166 3.594H74.84L79.7 2.174h2.623l4.86 14.021zM81.04 4.603h-.039s-.31 1.382-.583 2.172l-1.224 3.752h3.615l-1.224-3.752c-.253-.79-.545-2.172-.545-2.172zm7.911 11.592h8.475v-2.192H91.46V2.173H88.95zm10.477 0H108v-2.192h-6.064v-3.772h4.645V8.04h-4.645V4.366h5.753V2.174h-8.26zM14.255.808l6.142.163-3.391 5.698 3.87 1.086-8.028 12.437.642-8.42-3.613-1.025z">
                                                </path>
                                            </g>
                                        </svg>
                                    </a>
                                    <div class="aH5TuA">BẮT ĐẦU SAU 21:00 hằng ngày</div>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="flex items-center rt-jjf">
                                    <img src="https://classic.vn/wp-content/uploads/2022/12/flash-sale-icon-2-copy.webp"
                                        width="50px" alt="">
                                </div>
                                <div>
                                    <div class="U1v9hp">
                                        <div class="u86SRJ">Gì Cũng Rẻ</div>
                                    </div>
                                    <div class="AUxo4B">Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!</div>
                                </div>
                            </div>
                            <div class="count">
                                <div class="d-flex">
                                    <p>Số lượng</p>
                                    <button @click="count--" :disabled="count === 1">-</button>
                                    <button>{{ count }}</button>
                                    <button @click="count++">+</button>
                                    <p>250 sản phẩm có sẵn</p>
                                </div>
                            </div>
                            <div class="pay">
                                <div class="container text-center">
                                    <div class="row align-items-center">
                                        <div class="col">
                                            <button @click="Cart"> <i class="fa fa-shopping-cart" style="color:#ee4d2d"></i>
                                                Thêm vào giỏ hàng
                                            </button>
                                        </div>
                                        <div class="col">
                                            <div class="money-2">
                                                <button @click="buy">Mua Ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="content-2">
                <div class="product-information">
                    <h3>Chi Tiết Sản Phẩm</h3>
                    <p>Thương Hiệu: {{ product.name }}</p>
                    <p>Chất Liệu: {{ product.material }} </p>
                    <p>Màu Sắc: {{ product.color }} </p>
                    <p>Số Lượng: {{ product.number }} </p>
                    <p>Xuất Sứ: </p>

                </div>
                <div class="product-information">
                    <h3>Mô Tả Sản Phẩm</h3>
                    <p>
                        Sản phẩm Ví Burberry này có 2 màu cho bạn lựa chọn. Màu nâu da bò sang trọng
                        phù hợp với các bạn nam ưa thích phong cách trẻ trung. Màu đen phù hợp với những bạn nam thích sự
                        đơn giản,
                        phong cách lịch sự và phụ kiện thời trang thường sử dụng gam màu tối. Đây là sản phẩm ví Burberry
                        với 1 khóa sẽ mang đến sự lịch lãm, chuyên nghiệp và lịch lãm cho phái mạnh mỗi khi ra ngoài, đi
                        phượt
                        đi làm, dự sự kiện..
                    </p>

                </div>
                <div class="product-information">
                    <h3>Hướng Dẫn Sử Dụng</h3>
                    <p>
                        - Tránh phơi nắng nếu không sẽ làm ảnh hưởng đến chất liệu của da túi <br>

                        - Không đựng quá nhiều đồ nặng trong túi sẽ làm from túi biến dạng <br />
                        - Nên để ở những nơi khô thoáng, ít ánh nắng mặt trời và luôn để mắt tới chúng.<br />
                        -Tránh để ví nam cầm tay tiếp xúc với ánh nắng mặt trời quá lâu, không được để nơi ẩm ướt (mà có độ
                        ẩm khoảng trên 80%)<br />
                        - Nếu ví còn mùi của hóa chất khi xử lý da PU, bạn nên để chiếc ví ra ngoài chỗ râm mát từ 3 đến 5
                        tiếng.
                    </p>

                </div>
                <div class="product-information">
                    <h3>Cam Kết Của Shop</h3>
                    <p>
                        -Cam kết hàng siêu chuẩn, nói không với hàng kém chất lượng trôi nổi trên thị trường.<br />
                        -Kiểu dáng, chi tiết, chất liệu da và hoàn thiện 100% như hình.<br />
                        -Hàng Fullbox đầy đủ hộp, túi giấy, tem, bill store (Pháp, HongKong,...).<br />
                        -Giá cả cạnh tranh nhất trên thị trường<br />
                        -Miễn phí vận chuyển toàn quốc cho đơn hàng trên 3 triệu, đối với đơn hàng dưới 3 triệu phí vận
                        chuyển đồng giá 30k.
                    </p>
                </div>
                <div class="product-information">
                    <h3>Đánh Giá Sản Phẩm</h3>
                    <div class="d-flex">
                        <div class="vote">
                            <h4>4.8 trên 5</h4>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">
                                    <button>Tất Cả</button>
                                </div>
                                <div class="col">
                                    <button>5 sao (319)</button>
                                </div>
                                <div class="col">
                                    <button>4 sao (220)</button>
                                </div>
                                <div class="col">
                                    <button>3 sao (20)</button>
                                </div>
                                <div class="col">
                                    <button>2 sao (0)</button>
                                </div>
                                <div class="col">
                                    <button>1 sao (0)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
// import {  ref, onMounted } from 'vue';
// const count = ref(1);

// const product = ref({});
// // import { useRoute } from 'vue-router'
// // const route = useRoute();

// onMounted(() => {
//     fetchProduct();
// });

// const fetchProduct = () => {
//     // const productId = route.params.id;
//     // const typeProduct = route.params.typeProduct;
//     // console.log("typeProduct", typeProduct);
//     // console.log("productDAta", productsData[typeProduct]);
//     // const foundProduct = productsData[typeProduct].find((item) => item.id == productId);
//     // console.log("foundProduct", foundProduct);
//     // product.value = foundProduct;

// };
// import {products} from "../store/production";

</script>