<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Navbar from '@/components/navbar.vue';
import Sidebar from '@/components/sidebar.vue';

</script>

<template>
    <div class="flex">
        <Sidebar/>
        <div class="flex-grow">
            <Navbar/>
            <div class="h-[54px] flex">
                <h1 class="text-[#2671D9] text-sm ml-6 mt-3">Buat</h1>
                <svg width="16" height="16" viewBox="0 0 16 16" class="mt-[20px] ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L6.20711 13.7071C5.81658 14.0976 5.18342 14.0976 4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929L9.08579 8L4.79289 3.70711C4.40237 3.31658 4.40237 2.68342 4.79289 2.29289C5.18342 1.90237 5.81658 1.90237 6.20711 2.29289L11.2071 7.29289Z" fill="#7F7F80"/>
                </svg>
                <h1 class="text-sm text-[#7F7F80] mt-3 ml-1">PKS</h1>
            </div>
            <div class="h-auto py-3 px-4 bg-slate-100">

                <!-- Start Content -->
                <div class="w-[1217px] p-1 rounded-lg h-auto bg-white min-h-screen mx-auto">
                    <div class="flex pl-4 pt-4">
                        <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                        <h1 class="text-xl font-medium ml-[6px]">PKS</h1>
                    </div>
                    <span class="text-base text-[#9C9C9C] pl-4">Formulir Pengajuan Mitra</span>

                    <!-- Start Layout angka -->
                    <div class="w-[1217px] h-[59px]">
                        <div class="flex justify-center mt-4">
                            <div class="flex flex-col items-center">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="8" fill="#E9F1FB"/>
                                    <path d="M17.7832 21.5H15.6709V15.7168C15.6709 15.5573 15.6732 15.3613 15.6777 15.1289C15.6823 14.8919 15.6891 14.6504 15.6982 14.4043C15.7074 14.1536 15.7165 13.9281 15.7256 13.7275C15.6755 13.7868 15.5729 13.8893 15.418 14.0352C15.2676 14.1764 15.1263 14.304 14.9941 14.418L13.8457 15.3408L12.8271 14.0693L16.0469 11.5059H17.7832V21.5Z" fill="#2671D9"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">Dasar</span>
                            </div>
                            <svg width="34" height="2" class="ml-4 mt-6" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#BAD1F3"/>
                            </svg>
                            <div class="flex flex-col items-center ml-2">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="#E9F1FB"/>
                                    <path d="M19.0469 21.5H12.0605V20.0303L14.5693 17.4941C15.0752 16.9746 15.4808 16.5417 15.7861 16.1953C16.096 15.8444 16.3193 15.5254 16.4561 15.2383C16.5973 14.9512 16.668 14.6436 16.668 14.3154C16.668 13.9189 16.5563 13.6227 16.333 13.4268C16.1143 13.2262 15.8203 13.126 15.4512 13.126C15.0638 13.126 14.6878 13.2148 14.3232 13.3926C13.9587 13.5703 13.5781 13.8232 13.1816 14.1514L12.0332 12.791C12.3203 12.5449 12.6234 12.3125 12.9424 12.0938C13.266 11.875 13.6396 11.6995 14.0635 11.5674C14.4919 11.4307 15.0046 11.3623 15.6016 11.3623C16.2578 11.3623 16.8206 11.4808 17.29 11.7178C17.764 11.9548 18.1286 12.2783 18.3838 12.6885C18.639 13.0941 18.7666 13.5544 18.7666 14.0693C18.7666 14.6208 18.6572 15.1243 18.4385 15.5801C18.2197 16.0358 17.9007 16.487 17.4814 16.9336C17.0667 17.3802 16.5654 17.8747 15.9775 18.417L14.6924 19.627V19.7227H19.0469V21.5Z" fill="#2671D9"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">RAB</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="0.5" width="31" height="31" rx="7.5" fill="#2671D9"/>
                                    <rect x="1" y="0.5" width="31" height="31" rx="7.5" stroke="#2671D9"/>
                                    <path d="M19.1572 13.7412C19.1572 14.2015 19.0615 14.6003 18.8701 14.9375C18.6787 15.2747 18.4189 15.5505 18.0908 15.7646C17.7673 15.9788 17.4027 16.1361 16.9971 16.2363V16.2773C17.7992 16.3776 18.4076 16.6237 18.8223 17.0156C19.2415 17.4076 19.4512 17.9316 19.4512 18.5879C19.4512 19.1712 19.3076 19.693 19.0205 20.1533C18.738 20.6136 18.3005 20.9759 17.708 21.2402C17.1156 21.5046 16.3522 21.6367 15.418 21.6367C14.8665 21.6367 14.3516 21.5911 13.873 21.5C13.3991 21.4134 12.9525 21.279 12.5332 21.0967V19.2988C12.9616 19.5176 13.4105 19.6839 13.8799 19.7979C14.3493 19.9072 14.7868 19.9619 15.1924 19.9619C15.9489 19.9619 16.4775 19.832 16.7783 19.5723C17.0837 19.3079 17.2363 18.9388 17.2363 18.4648C17.2363 18.1868 17.1657 17.9521 17.0244 17.7607C16.8831 17.5693 16.637 17.4235 16.2861 17.3232C15.9398 17.223 15.4544 17.1729 14.8301 17.1729H14.0713V15.5527H14.8438C15.459 15.5527 15.9261 15.4958 16.2451 15.3818C16.5687 15.2633 16.7874 15.1038 16.9014 14.9033C17.0199 14.6982 17.0791 14.4658 17.0791 14.2061C17.0791 13.8506 16.9697 13.5726 16.751 13.3721C16.5322 13.1715 16.1676 13.0713 15.6572 13.0713C15.3382 13.0713 15.0465 13.1123 14.7822 13.1943C14.5225 13.2718 14.2878 13.3675 14.0781 13.4814C13.8685 13.5908 13.6839 13.6979 13.5244 13.8027L12.5469 12.3467C12.9388 12.0641 13.3968 11.8294 13.9209 11.6426C14.4495 11.4557 15.0785 11.3623 15.8076 11.3623C16.8376 11.3623 17.6533 11.5697 18.2549 11.9844C18.8564 12.3991 19.1572 12.9847 19.1572 13.7412Z" fill="white"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">Ruang Lingkup</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-3" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                                    <rect x="1" y="0.5" width="31" height="31" rx="7.5" stroke="#9C9C9C"/>
                                    <path d="M19.7725 19.4287H18.5693V21.5H16.5049V19.4287H12.2393V17.959L16.6211 11.5059H18.5693V17.7881H19.7725V19.4287ZM16.5049 17.7881V16.0928C16.5049 15.9333 16.5072 15.7441 16.5117 15.5254C16.5208 15.3066 16.5299 15.0879 16.5391 14.8691C16.5482 14.6504 16.5573 14.4567 16.5664 14.2881C16.5801 14.1149 16.5892 13.9941 16.5938 13.9258H16.5391C16.4525 14.1126 16.3613 14.2949 16.2656 14.4727C16.1699 14.6458 16.0583 14.8281 15.9307 15.0195L14.0986 17.7881H16.5049Z" fill="#9C9C9C"/>
                                </svg>
                                <span class="text-sm text-[#9C9C9C] mt-1">Lainnya</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-3" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#9C9C9C"/>
                                    <path d="M15.6973 15.1152C16.3079 15.1152 16.8503 15.2314 17.3242 15.4639C17.8027 15.6963 18.1787 16.0381 18.4521 16.4893C18.7256 16.9404 18.8623 17.4964 18.8623 18.1572C18.8623 18.8773 18.7119 19.4993 18.4111 20.0234C18.1149 20.543 17.6706 20.9417 17.0781 21.2197C16.4902 21.4977 15.7565 21.6367 14.877 21.6367C14.3529 21.6367 13.8584 21.5911 13.3936 21.5C12.9333 21.4134 12.5299 21.279 12.1836 21.0967V19.2715C12.5299 19.4538 12.9447 19.6087 13.4277 19.7363C13.9154 19.8594 14.3734 19.9209 14.8018 19.9209C15.221 19.9209 15.5742 19.8662 15.8613 19.7568C16.1484 19.6429 16.3649 19.4697 16.5107 19.2373C16.6611 19.0003 16.7363 18.6995 16.7363 18.335C16.7363 17.8473 16.5723 17.4736 16.2441 17.2139C15.916 16.9541 15.4124 16.8242 14.7334 16.8242C14.4736 16.8242 14.2025 16.8493 13.9199 16.8994C13.6419 16.9495 13.4095 16.9997 13.2227 17.0498L12.3818 16.5986L12.7578 11.5059H18.1787V13.2969H14.6104L14.4258 15.2588C14.5807 15.2269 14.7493 15.195 14.9316 15.1631C15.1139 15.1312 15.3691 15.1152 15.6973 15.1152Z" fill="#9C9C9C"/>
                                </svg>
                                <span class="text-sm text-[#9C9C9C] mt-1">Daftar Mitra Bisnis</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-3" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#9C9C9C"/>
                                    <path d="M11.9922 17.2549C11.9922 16.6807 12.0332 16.1133 12.1152 15.5527C12.2018 14.9876 12.3499 14.4567 12.5596 13.96C12.7692 13.4587 13.0632 13.0166 13.4414 12.6338C13.8197 12.2464 14.3005 11.9434 14.8838 11.7246C15.4671 11.5013 16.1735 11.3896 17.0029 11.3896C17.1989 11.3896 17.4268 11.3988 17.6865 11.417C17.9508 11.4307 18.1696 11.4557 18.3428 11.4922V13.1807C18.1605 13.1396 17.9645 13.1077 17.7549 13.085C17.5498 13.0576 17.3447 13.0439 17.1396 13.0439C16.3102 13.0439 15.6676 13.1761 15.2119 13.4404C14.7607 13.7048 14.4417 14.0716 14.2549 14.541C14.0726 15.0059 13.9655 15.5482 13.9336 16.168H14.0225C14.1501 15.9447 14.3096 15.7464 14.501 15.5732C14.6969 15.4001 14.9339 15.2633 15.2119 15.1631C15.4899 15.0583 15.8158 15.0059 16.1895 15.0059C16.7728 15.0059 17.2786 15.1312 17.707 15.3818C18.1354 15.6279 18.4658 15.9857 18.6982 16.4551C18.9307 16.9245 19.0469 17.4964 19.0469 18.1709C19.0469 18.891 18.9079 19.5107 18.6299 20.0303C18.3519 20.5498 17.9577 20.9486 17.4473 21.2266C16.9414 21.5 16.3398 21.6367 15.6426 21.6367C15.1322 21.6367 14.6559 21.5501 14.2139 21.377C13.7718 21.1992 13.3844 20.9303 13.0518 20.5703C12.7191 20.2103 12.4593 19.7568 12.2725 19.21C12.0856 18.6585 11.9922 18.0068 11.9922 17.2549ZM15.6016 19.9482C16.0163 19.9482 16.3535 19.807 16.6133 19.5244C16.873 19.2419 17.0029 18.7998 17.0029 18.1982C17.0029 17.7106 16.889 17.3278 16.6611 17.0498C16.4378 16.7673 16.0983 16.626 15.6426 16.626C15.3327 16.626 15.0592 16.6966 14.8223 16.8379C14.5898 16.9746 14.4098 17.1501 14.2822 17.3643C14.1546 17.5739 14.0908 17.7904 14.0908 18.0137C14.0908 18.2461 14.1227 18.4762 14.1865 18.7041C14.2503 18.932 14.346 19.1393 14.4736 19.3262C14.6012 19.513 14.7585 19.6634 14.9453 19.7773C15.1367 19.8913 15.3555 19.9482 15.6016 19.9482Z" fill="#9C9C9C"/>
                                </svg>
                                <span class="text-sm text-[#9C9C9C] mt-1">Lampiran</span>
                            </div>
                        </div>
                    </div>
                    <!-- End layout angka -->

                    <h1 class="text-xl text-[#333333] font-medium pl-4 mt-4">Lingkup Pekerjaan</h1>
                    <div class="w-[1220px] h-auto"> 
                        <!-- Start Lingkup -->
                        <div class="container">
                            <div class="template" id="template-1">
                            </div>
                        </div>
                    </div>
                    <!-- End lingkup -->
                    
                    <button id="add-button" class="w-[235px] flex mt-3 ml-4 pl-4 border-[1px] border-[#2671D9] py-3 rounded-lg cursor-pointer hover:bg-[#E9F1FB] hover:border-none">
                        <svg width="14" height="14" class="mt-1" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0.875C7.48325 0.875 7.875 1.26675 7.875 1.75V6.125H12.25C12.7332 6.125 13.125 6.51675 13.125 7C13.125 7.48325 12.7332 7.875 12.25 7.875H7.875V12.25C7.875 12.7332 7.48325 13.125 7 13.125C6.51675 13.125 6.125 12.7332 6.125 12.25V7.875H1.75C1.26675 7.875 0.875 7.48325 0.875 7C0.875 6.51675 1.26675 6.125 1.75 6.125H6.125V1.75C6.125 1.26675 6.51675 0.875 7 0.875Z" fill="#2671D9"/>
                        </svg>
                        <span class="text-sm font-medium text-[#2671D9] ml-3">Tambah Lingkup Pekerjaan</span>
                    </button>

                    <svg width="1150" class="mt-36 ml-4" height="1" viewBox="0 0 1150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1150" height="0" transform="translate(0 1)" fill="white"/>
                        <line y1="0.5" x2="1150" y2="0.5" stroke="#E5E7E9"/>
                    </svg>
                    <div class="flex justify-end">
                        <div class="mr-4 py-4">
                            <router-link :to="'Rab'"><button class="w-[107px] h-12 font-medium rounded-lg text-[#2671D9] text-sm border-[1px] border-[#2671D9]">Sebelumnya</button></router-link>
                        </div>
                        <div class=" mr-11 py-4">
                            <router-link :to="'Pkslainnya'"><button class="w-[107px] h-12 rounded-lg font-medium text-white text-sm bg-[#2671D9]">Selanjutnya</button></router-link>
                        </div>
                    </div>
                </div>
                <!-- End Content -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
mounted() {
    const addButton = document.getElementById('add-button');
    const container = document.querySelector('.container');

    let templateCount = 1;

    addButton.addEventListener('click', () => {
    const newTemplate = document.createElement('div');
    newTemplate.classList.add('template');
    newTemplate.innerHTML = `
        <div class="py-2 flex ml-1">
            <div class="w-[20px] h-[50] bg-[#2671D9] text-white py-3 px-3 rounded-s-lg text-xs font-semibold">${templateCount + 0}</div>
            <div class="w-[1070px] h-[48px] border-[1px] rounded-e-lg py-2 px-3">
                <input class="mt-1 w-full outline-none" type="text" placeholder="Lingkup Pekerjaan ${templateCount + 0}">    
            </div> 
                <svg width="14" height="18" class="ml-[26px] mt-[15px] cursor-pointer delete-icon" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.4375C6.59126 2.4375 6.18408 2.44404 5.77854 2.45701C5.35446 2.47058 4.99738 2.8011 4.9443 3.24405C5.62483 3.20651 6.31024 3.1875 7 3.1875C7.68977 3.1875 8.37517 3.20651 9.0557 3.24405C9.00262 2.8011 8.64554 2.47058 8.22146 2.45701C7.81593 2.44404 7.40874 2.4375 7 2.4375ZM10.5625 3.35801C10.5622 2.08865 9.57742 0.999618 8.26942 0.957776C7.84791 0.944292 7.42473 0.9375 7 0.9375C6.57527 0.9375 6.15209 0.944292 5.73058 0.957776C4.42258 0.999618 3.43783 2.08865 3.4375 3.35801C2.77551 3.42171 2.11861 3.50297 1.46727 3.60134C1.20543 3.64088 0.944495 3.68318 0.68449 3.72822C0.276354 3.79892 0.00280748 4.18709 0.0735059 4.59523C0.141511 4.98781 0.503257 5.25587 0.893962 5.21281L1.63236 14.8119C1.73004 16.0819 2.789 17.0625 4.06268 17.0625H9.93732C11.211 17.0625 12.27 16.0819 12.3676 14.8119L13.106 5.21281C13.4967 5.25587 13.8585 4.98781 13.9265 4.59523C13.9972 4.18709 13.7236 3.79892 13.3155 3.72822C13.0555 3.68318 12.7946 3.64088 12.5327 3.60134C11.8814 3.50297 11.2245 3.42171 10.5625 3.35801ZM11.619 4.98731C11.0025 4.90665 10.3809 4.8419 9.75472 4.79351C8.84584 4.72328 7.92717 4.6875 7 4.6875C6.07283 4.6875 5.15416 4.72328 4.24528  4.79351C3.6191 4.8419 2.99755 4.90665 2.38105 4.98731L3.12794 14.6969C3.16551 15.1853 3.5728 15.5625 4.06268 15.5625H9.93732C10.4272 15.5625 10.8345 15.1853 10.8721 14.6969L11.619 4.98731ZM4.91589 6.00055C5.32979 5.98463 5.67824 6.30727 5.69416 6.72118L5.95377 13.4712C5.96969 13.8851 5.64706 14.2335 5.23315 14.2494C4.81924 14.2654 4.4708 13.9427 4.45488 13.5288L4.19527 6.77882C4.17935 6.36492 4.50198 6.01647 4.91589 6.00055ZM9.08411 6.00055C9.49802 6.01647 9.82065 6.36492 9.80474 6.77882L9.54512 13.5288C9.5292 13.9427 9.18076 14.2654 8.76685 14.2494C8.35294 14.2335 8.03031 13.8851 8.04623 13.4712L8.30584 6.72118C8.32176 6.30727 8.67021 5.98463 9.08411 6.00055Z" fill="#FF5656"/>
                </svg>
        </div>`;
    container.appendChild(newTemplate);
    templateCount++;
    });

    container.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-icon')) {
        const template = e.target.parentNode.parentNode;
        template.remove();
        templateCount--;
    }
    });
}
}
</script>