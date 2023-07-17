<template>
    <div>
        <MapComponent></MapComponent>
        <section id="contact">
            <h1 class="section-header">CUSTOMER SUPPORT</h1>
            <div class="contact-wrapper">
                <form id="contact-form" class="form-horizontal" role="form">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <div class="text-name">
                                <i class="fa fa-user"></i> Full Name
                            </div>
                            <input type="text" v-model="fullName" img class="form-control" placeholder="NAME" />
                            <div>
                                <p class="color-p"> {{ messageName }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <div class="text-name">
                                <i class="fa fa-envelope"></i> Email
                            </div>
                            <input type="email" v-model="email" class="form-control" id="email" placeholder="EMAIL">
                            <div>
                                <p class="color-p"> {{ messagerEmail }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-12">
                            <div class="text-name">
                                <i class="fa fa-phone"></i> Number Phone
                            </div>
                            <input type="text" v-model="phone" class="form-control" placeholder="Number Phone" name="phone">
                            <div>
                                <p class="color-p"> {{ messagerPhone }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-name">
                        <i class="fa fa-commenting"></i> Messager
                    </div>
                    <textarea class="form-control" rows="10" v-model="message" placeholder="MESSAGE"
                        name="message"></textarea>

                    <div>
                        <p class="color-p"> {{ messagerMSG }}</p>
                    </div>
                    <button class="btn btn-primary send-button" type="button" @click="submit">
                        <!-- <div class="alt-send-button">
                            <span class="send-text">SEND</span>
                        </div> -->
                        SEND
                    </button>
                </form>
                <div class="direct-contact-container">
                    <ul class="contact-list">
                        <li class="list-item">
                            <span class="contact-text place">
                                <img src="../assets/images/logo.png" class="w-200" alt="">
                            </span>
                        </li>

                        <li class="list-item"><span class="contact-text place">NEX TAG
                                Co,Ltd</span></li>

                        <li class="list-item">
                            <span class="contact-text phone">
                                <img src="../assets/images/phone.png" alt="" class="w-20">
                                <a href="tel:1-212-555-5555" title="Give me a call"> 0386169003</a>
                            </span>
                        </li>

                        <li class="list-item">
                            <span class="contact-text gmail">
                                <img src="../assets/images/gmail.png" alt="" class="w-20">
                                <a href="mailto:#" title="Send me an email">AptechHN.edu.vn</a>
                            </span>
                        </li>
                    </ul>
                    <hr>
                    <ul class="social-media-list">
                        <li>
                            <a href="#" target="_blank" class="contact-icon">
                                <img src="../assets/images/facebook.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="contact-icon">
                                <img src="../assets/images/youtube.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="contact-icon">
                                <img src="../assets/images/twitter.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="contact-icon">
                                <img src="../assets/images/instagram.png" alt="">
                            </a>
                        </li>
                    </ul>
                    <hr>
                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { checkName, fullName } from '@/service/checkSubmit.ts';
import { ref } from 'vue';
import MapComponent from '@/components/MapComponent.vue';
// const fullName = ref('');
const email = ref<String>('');
const phone = ref<Number>(null);
const message = ref('');
const messageName = ref('');
const messagerEmail = ref('');
const messagerPhone = ref('');
const messagerMSG = ref('');


const submit = () => {
    if(!checkName()){
        console.log('contact true');
    }else{
        console.log(' contact false');
    }

    // if (checkName() && checkEmail() && checkPhone() && checkMSG()) {
    //     alert('Đã gửi thành công!');
    //     window.location.reload();
    // }

}

// const checkName = () => {
//     if (fullName.value.trim() === '') {
//         messageName.value = 'Vui Lòng Nhập vào trường này';
//         return false;
//     } else {
//         messageName.value = '';
//         return true;
//     }
// }

// const checkEmail = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.value.trim() === '') {
//         messagerEmail.value = 'Vui lòng nhập vào trường này';
//         return false;
//     } else if (!emailRegex.test(email.value)) {
//         messagerEmail.value = 'Vui lòng nhập đúng định dạng email'
//         return false;
//     } else {
//         messagerEmail.value = '';
//         return true;
//     }
// }

// const checkPhone = () => {
//     const phoneRegex = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
//     if (phone.value.trim() === '') {
//         messagerPhone.value = 'Vui lòng nhập vào trường này';
//         return false;
//     } else if (!phoneRegex.test(phone.value)) {
//         messagerPhone.value = 'Vui lòng nhập đúng định dạng phone'
//         return false;
//     } else {
//         messagerPhone.value = '';
//         return true;
//     }

// }

// const checkMSG = () => {
//     if (message.value.trim() === '') {
//         messagerMSG.value = 'Vui Lòng Nhập vào trường này'
//         return false;
//     } else {
//         messagerMSG.value = '';
//         return true;
//     }
// }



</script>


<style scoped>
.color-p {
    color: red;
    font-size: 14px;
    /* height: 20px; */
}

.w-200 {
    width: 200px;
}

.w-20 {
    width: 20px;
}

.contact-icon img {
    width: 100%;
}

.section-header {
    text-align: center;
    margin-top: 50px;
    font: 300 60px 'Oswald', sans-serif;
    color: black;
    text-transform: uppercase;
    letter-spacing: 6px;
}

.contact-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    margin: 0px 10%;

}

.form-horizontal {
    max-width: 500px;
    font-family: 'Lato';
    font-weight: 400;
}

.form-control,
textarea {
    font-size: 17px;
    height: 60px;
    background-color: white;
    color: black;
    letter-spacing: 1px;
}

.send-button {
    margin-top: 15px;
    height: 34px;
    width: 500px;
    background-color: rgba(255, 0, 0, 0.685);

    overflow: hidden;
    transition: all .2s ease-in-out;
}

.alt-send-button {
    width: 400px;
    height: 35px;
    transition: all .2s ease-in-out;
}

.send-text {
    padding-left: 100px;
    display: block;
    margin-top: 5px;
    font: 700 12px 'Lato', sans-serif;
    letter-spacing: 2px;
}

.send-button:hover {
    background-color: #ff720b;
}

.direct-contact-container {
    margin: 0px 80px;
}

.contact-list {
    list-style-type: none;
    margin-left: -30px;
    padding-right: 20px;
}

.list-item {
    line-height: 4;
    color: black;
}

.contact-text {
    font: 300 18px 'Lato', sans-serif;
    letter-spacing: 1.9px;
    color: black;
}

.place {
    font-size: 30px;
    margin-left: 62px;
}

.phone {
    margin-left: 56px;
}

.gmail {
    margin-left: 53px;
}

.contact-text a {
    color: black;
    text-decoration: none;
    transition-duration: 0.2s;
}

.contact-text a:hover {
    color: #ff720b;
    text-decoration: none;
}

.social-media-list {
    position: relative;
    font-size: 22px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding: 0;
}

.social-media-list li a {
    color: black;
}

.social-media-list li {
    position: relative;
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 10px 3px;
    line-height: 60px;
    border-radius: 50%;
    color: black;
    cursor: pointer;
    transition: all .2s ease-in-out;
}

.social-media-list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 0 1px #fff;
    transition: all .2s ease-in-out;
}

.social-media-list li:hover:after {
    opacity: 1;
    transform: scale(1.12);
    transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
    color: white;
}

.copyright {
    font: 200 14px 'Oswald', sans-serif;
    color: #555;
    letter-spacing: 1px;
    text-align: center;
}

hr {
    border-color: rgba(255, 255, 255, .6);
}

@media screen and (max-width: 850px) {
    .contact-wrapper {
        display: flex;
        flex-direction: column;
    }

    .direct-contact-container,
    .form-horizontal {
        margin: 0 auto;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 300px;
    }

    .social-media-list li {
        height: 60px;
        width: 60px;
        line-height: 60px;
    }

    .social-media-list li:after {
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
}

@media screen and (max-width: 569px) {

    .direct-contact-container,
    .form-wrapper {
        float: none;
        margin: 0 auto;
    }

    .form-control,
    textarea {

        margin: 0 auto;
    }


    .name,
    .email,
    textarea {
        width: 280px;
    }

    .direct-contact-container {
        margin-top: 60px;
        max-width: 280px;
    }

    .social-media-list {
        left: 0;
    }

    .social-media-list li {
        height: 55px;
        width: 55px;
        line-height: 55px;
        font-size: 2rem;
    }

    .social-media-list li:after {
        width: 55px;
        height: 55px;
        line-height: 55px;
    }

}

@media screen and (max-width: 410px) {
    .send-button {
        width: 99%;
    }
}
</style>