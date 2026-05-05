<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Navbar from '@/components/navbar.vue';
import Sidebar from '@/components/sidebar.vue';


</script>

<template>
    <div class="flex">
        <Sidebar/>
        <div class="flex-grow min-w-0">
            <Navbar/>
            <div class="h-[54px] flex">
                <h1 class="text-[#2671D9] text-sm ml-6 mt-3">Buat</h1>
                <svg width="16" height="16" viewBox="0 0 16 16" class="mt-[19px] ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L6.20711 13.7071C5.81658 14.0976 5.18342 14.0976 4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929L9.08579 8L4.79289 3.70711C4.40237 3.31658 4.40237 2.68342 4.79289 2.29289C5.18342 1.90237 5.81658 1.90237 6.20711 2.29289L11.2071 7.29289Z" fill="#7F7F80"/>
                </svg>
                <h1 class="text-sm text-[#7F7F80] mt-3 ml-1">PKS</h1>
            </div>
            <div class="h-auto py-3 px-4 bg-slate-100">

                <!-- Start Content -->
                <div class="w-full max-w-[1217px] p-1 rounded-lg h-auto bg-white min-h-screen mx-auto">
                    <div class="flex pl-4 pt-4">
                        <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                        <h1 class="text-xl font-medium ml-[6px]">PKS</h1>
                     </div>
                     <span class="text-base text-[#9C9C9C] pl-4">Formulir Pengajuan Mitra</span>

                     <!-- Start Layout angka -->
                     <div class="w-full max-w-[1217px] h-[59px]">
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
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="#2671D9"/>
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#2671D9"/>
                                    <path d="M19.0469 21.5H12.0605V20.0303L14.5693 17.4941C15.0752 16.9746 15.4808 16.5417 15.7861 16.1953C16.096 15.8444 16.3193 15.5254 16.4561 15.2383C16.5973 14.9512 16.668 14.6436 16.668 14.3154C16.668 13.9189 16.5563 13.6227 16.333 13.4268C16.1143 13.2262 15.8203 13.126 15.4512 13.126C15.0638 13.126 14.6878 13.2148 14.3232 13.3926C13.9587 13.5703 13.5781 13.8232 13.1816 14.1514L12.0332 12.791C12.3203 12.5449 12.6234 12.3125 12.9424 12.0938C13.266 11.875 13.6396 11.6995 14.0635 11.5674C14.4919 11.4307 15.0046 11.3623 15.6016 11.3623C16.2578 11.3623 16.8206 11.4808 17.29 11.7178C17.764 11.9548 18.1286 12.2783 18.3838 12.6885C18.639 13.0941 18.7666 13.5544 18.7666 14.0693C18.7666 14.6208 18.6572 15.1243 18.4385 15.5801C18.2197 16.0358 17.9007 16.487 17.4814 16.9336C17.0667 17.3802 16.5654 17.8747 15.9775 18.417L14.6924 19.627V19.7227H19.0469V21.5Z" fill="white"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">RAB</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white"/>
                                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#9C9C9C"/>
                                    <path d="M18.6572 13.7412C18.6572 14.2015 18.5615 14.6003 18.3701 14.9375C18.1787 15.2747 17.9189 15.5505 17.5908 15.7646C17.2673 15.9788 16.9027 16.1361 16.4971 16.2363V16.2773C17.2992 16.3776 17.9076 16.6237 18.3223 17.0156C18.7415 17.4076 18.9512 17.9316 18.9512 18.5879C18.9512 19.1712 18.8076 19.693 18.5205 20.1533C18.238 20.6136 17.8005 20.9759 17.208 21.2402C16.6156 21.5046 15.8522 21.6367 14.918 21.6367C14.3665 21.6367 13.8516 21.5911 13.373 21.5C12.8991 21.4134 12.4525 21.279 12.0332 21.0967V19.2988C12.4616 19.5176 12.9105 19.6839 13.3799 19.7979C13.8493 19.9072 14.2868 19.9619 14.6924 19.9619C15.4489 19.9619 15.9775 19.832 16.2783 19.5723C16.5837 19.3079 16.7363 18.9388 16.7363 18.4648C16.7363 18.1868 16.6657 17.9521 16.5244 17.7607C16.3831 17.5693 16.137 17.4235 15.7861 17.3232C15.4398 17.223 14.9544 17.1729 14.3301 17.1729H13.5713V15.5527H14.3438C14.959 15.5527 15.4261 15.4958 15.7451 15.3818C16.0687 15.2633 16.2874 15.1038 16.4014 14.9033C16.5199 14.6982 16.5791 14.4658 16.5791 14.2061C16.5791 13.8506 16.4697 13.5726 16.251 13.3721C16.0322 13.1715 15.6676 13.0713 15.1572 13.0713C14.8382 13.0713 14.5465 13.1123 14.2822 13.1943C14.0225 13.2718 13.7878 13.3675 13.5781 13.4814C13.3685 13.5908 13.1839 13.6979 13.0244 13.8027L12.0469 12.3467C12.4388 12.0641 12.8968 11.8294 13.4209 11.6426C13.9495 11.4557 14.5785 11.3623 15.3076 11.3623C16.3376 11.3623 17.1533 11.5697 17.7549 11.9844C18.3564 12.3991 18.6572 12.9847 18.6572 13.7412Z" fill="#9C9C9C"/>
                                </svg>
                                <span class="text-sm text-[#9C9C9C] mt-1">Ruang Lingkup</span>
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

                    <h1 class="text-xl font-medium pl-4 mt-6">RAB</h1>
                    <div class="w-[1175px] h-10 mt-6 flex justify-between">
                        <div class="flex ">
                            <!-- Search -->
                            <div class="ml-4 w-[280px] py-2 border-[1px] rounded-s-lg flex ">
                                <form action="search" class="flex">
                                    <input type="text" name="search" placeholder="Cari sesuatu disini ..." class="ml-4 w-[250px] outline-none">
                                </form>
                            </div>
                            <div class="w-10 h-10 bg-[#2671D9] rounded-e-lg -translate-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[40px] ml-[6px] cursor-pointer" viewBox="0 0 101 101" id="Search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                            </div>

                            <!-- Filter -->
                            <div class="w-[90px] ml-2">
                                <button @click="filterDropdown" :class="{'rounded-t-lg': isFilterOpen, 'rounded-lg': !isFilterOpen}" class="w-[90px] border-[1px] px-1 py-2 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[14px] mt-2 cursor-pointer" viewBox="0 0 6.35 6.35" id="filter">
                                        <path fill-rule="evenodd" d="M2 .998A1 1 0 0 0 .996 2.002v4.002a1 1 0 0 0 .252.656l6.754 7.715V22a1 1 0 0 0 1.55.834l6-4.002a1 1 0 0 0 .444-.834v-3.623l6.756-7.715a1 1 0 0 0 .25-.656V2.002A1 1 0 0 0 21.998.998H2zm.996 2h18.006V5H2.996V2.998zM4.2 7h15.6l-5.553 6.34a1 1 0 0 0-.242.658v3.469l-4.002 2.666v-6.135a1 1 0 0 0-.25-.658L4.199 7z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" paint-order="stroke fill markers" transform="scale(.26458)" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;isolation:auto;mix-blend-mode:normal" fill="#2671d9" class="color000000 svgShape"></path>
                                    </svg>
                                    <span class="text-sm ml-2 mt-1">{{FilterOption || 'Filter'}}</span>
                                </button>
                                <div v-show="isFilterOpen" class="absolute w-[90px] border-[1px] rounded-b-lg bg-white z-10">
                                    <ul class="text-sm w-full">
                                        <li @click="filterOption('Item 1')" :class="{' text-black': FilterOption === 'Item 1', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': FilterOption !== 'Item 1'}" class="cursor-pointer border-b px-4 py-2">Item 1</li>
                                        <li @click="filterOption('Item 2')" :class="{' text-black': FilterOption === 'Item 2', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': FilterOption !== 'Item 2'}" class="cursor-pointer border-b px-4 py-2">Item 2</li>
                                        <li @click="filterOption('Item 3')" :class="{' text-black': FilterOption === 'Item 3', 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': FilterOption !== 'Item 3'}" class="cursor-pointer px-4 py-2">Item 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Button Tambah -->
                        <div>
                            <button @click="openTambah" class="w-[102px] h-10 bg-[#2671D9] rounded-lg text-white"><span class="text-lg font-normal">+</span> Tambah</button>
                        </div>
                    </div>

                    <!-- Start Data -->
                    <div class="w-[1160px] overflow-auto rounded-lg border-[1px] mt-4 ml-4 h-auto">
                        <table class="table-auto w-full text-left">
                            <!-- Kolom -->
                            <thead class="text-xs text-[#4D5E80] rounded-lg h-[48px]">
                                <tr class="bg-none border-b-2">
                                    <th class="w-[74px] px-3"><div class="flex justify-between">No.
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div></th>
                                    <th class="w-[231px] px-3"><div class="flex justify-between">Pelanggan                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div></th>
                                    <th class="w-[231px] px-3"><div class="flex justify-between">Produk
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg>
                                    </div></th>
                                    <th class="w-[265px] px-3"><div class="flex justify-between">Deskripsi
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg>
                                    </div></th><th class="w-[200px] px-3"><div class="flex justify-between">PLN/Non PLN</div></th>
                                    <th class="w-[54px] px-3"></th>
                                </tr>
                            </thead>
                            <!-- Baris -->
                            <tbody>
                                <tr v-for="row in paginatedRows" :key="row.id" class="bg-white border-b text-sm text-[#333333] h-[54px]">
                                <td class="w-[74px] px-3">{{ row.id }}</td>
                                <td class="w-[268px] px-3">{{ row.pelanggan }}</td>
                                <td class="w-[122px] px-3">{{ row.produk }}</td>
                                <td class="w-[87px] px-3">{{ row.desk }}</td>
                                <td class="w-[172px] px-3">{{ row.type }}</td>
                                <td class="w-[54px] px-3">
                                    <div class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                                <!-- tambahkan baris tabel lainnya disini -->
                            </tbody>
                        </table>
                    </div>
                    <!-- End data -->

                    <!-- Start Menampilkan -->
                    <div class="w-full max-w-[1120px] ml-4 py-3  flex justify-between">
                        <div class="flex">
                        <span class="text-sm text-[#333333] mt-[5px]">Menampilkan</span>
                        <div class="w-[44px] ml-4 relative data-container">
                            <button @click="toggleDataDropdown" :class="[isDataOpen ? 'rounded-b-lg' : 'rounded-lg', 'flex w-[44px] h-8 border-[1px]']">
                                <span class="text-sm mt-1 pl-3">{{ DataOption || '8' }}</span>
                                <svg width="16" height="16" class="mt-2 transition-transform duration-300" :class="{'rotate-180': isDataOpen}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10.2663L4 6.26634L4.93333 5.33301L8 8.39967L11.0667 5.33301L12 6.26634L8 10.2663Z" fill="#2671D9"/>
                                </svg>
                            </button>
                            <div v-show="isDataOpen" class="absolute bottom-full w-[44px] border-[1px] rounded-t-lg cursor-pointer z-10 bg-white">
                                <ul class="text-sm w-full">
                                    <li @click="selectDataOption('5')" :class="{' text-black': DataOption === '5', '': DataOption !== '5'}" class="cursor-pointer border-b pl-4 py-1 hover:font-semibold">5</li>
                                    <li @click="selectDataOption('7')" :class="{' text-black': DataOption === '7', '': DataOption !== '7'}" class="cursor-pointer border-b py-1 pl-4 hover:font-semibold">7</li>
                                    <li @click="selectDataOption('8')" :class="{' text-black': DataOption === '8', '': DataOption !== '8'}" class="cursor-pointer pl-4 py-1 hover:font-semibold">8</li>
                                </ul>
                            </div>
                        </div>
                        <p class="text-sm text-[#333333] mt-1 ml-3">dari <span class="font-semibold text-sm">{{ dataRows.length }}</span> Data</p>
                    </div>
                    <div class="pagination-controls translate-x-10">
                        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.792893 6.70711C0.402369 6.31658 0.402369 5.68342 0.792893 5.29289L5.79289 0.292893C6.18342 -0.0976314 6.81658 -0.0976314 7.20711 0.292893C7.59763 0.683417 7.59763 1.31658 7.20711 1.70711L2.91421 6L7.20711 10.2929C7.59763 10.6834 7.59763 11.3166 7.20711 11.7071C6.81658 12.0976 6.18342 12.0976 5.79289 11.7071L0.792893 6.70711Z" fill="#7F7F80"/>
                            </svg>
                        </button>
                        <div v-for="page in paginationPages" :key="page">
                            <button v-if="page !== '...'" @click="changePage(page)" :class="{ active: page === currentPage }">
                                {{ page }}
                            </button><span v-else>...</span>
                        </div>
                        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#7F7F80"/>
                            </svg>
                        </button>
                     </div>
                    </div>
                    <!-- akhir menampilkan -->

                    <svg width="1170" class="mt-4" height="1" viewBox="0 0 1125 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1160" height="0" transform="translate(0 1)" fill="white"/>
                        <line y1="0.5" x2="1160" y2="0.5" stroke="#E5E7E9"/>
                    </svg>
                    <div class="flex justify-end">
                        <div class="mr-4 py-4">
                            <router-link :to="'PKS'"><button class="w-[107px] h-12 font-medium rounded-lg text-[#2671D9] text-sm border-[1px] border-[#2671D9]">Sebelumnya</button></router-link>
                        </div>
                        <div class=" mr-11 py-4">
                            <router-link :to="'Pksruanglingkup'"><button class="w-[107px] h-12 rounded-lg font-medium text-white text-sm bg-[#2671D9]">Selanjutnya</button></router-link>
                        </div>
                    </div>
                </div>
                <!-- End Content -->

                <!-- Start Pop up -->
                <div>
                    <!-- Tambah RAB-->
                     <div v-if="isOpen"  class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div class="bg-white rounded-lg shadow-lg w-[973px] h-[690px]">
                            <div class="bg-[#E9F1FB] w-auto h-[76px] rounded-t-lg flex justify-between p-4">
                                <h1 class="text-xl font-semibold">Tambah Rencana Anggaran Biaya</h1>
                                <div @click="closeSend" class="cursor-pointer mt-2">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292894C10.6834 -0.0976307 11.3166 -0.0976307 11.7071 0.292894C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#CCCCCC"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- buka -->
                            <div class="pl-4 mt-7 w-[1125px] flex justify-between">
                                <div>
                                    <label class="text-[#4D5E80] font-medium">Pelanggan <span class="text-[#FF5656]">*</span></label>
                                    <div class="relative w-[529px] mt-2">
                                        <form class="w-[454px] h-[40px] px-4 border-[1px] rounded-lg text-sm flex justify-between items-center">
                                            <input type="text" class="w-[399px] outline-none" placeholder="Cari pelanggan" name="" id="pelanggan">
                                            <svg width="17" height="16" class="cursor-pointer ml-2" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49992 2.66683C5.10668 2.66683 3.16659 4.60693 3.16659 7.00016C3.16659 9.3934 5.10668 11.3335 7.49992 11.3335C8.69672 11.3335 9.77914 10.8492 10.564 10.0643C11.349 9.27938 11.8333 8.19696 11.8333 7.00016C11.8333 4.60693 9.89315 2.66683 7.49992 2.66683ZM1.83325 7.00016C1.83325 3.87055 4.3703 1.3335 7.49992 1.3335C10.6295 1.3335 13.1666 3.87055 13.1666 7.00016C13.1666 8.32447 12.7117 9.54343 11.9506 10.508L14.9713 13.5288C15.2317 13.7891 15.2317 14.2112 14.9713 14.4716C14.711 14.7319 14.2889 14.7319 14.0285 14.4716L11.0078 11.4508C10.0432 12.2119 8.82422 12.6668 7.49992 12.6668C4.3703 12.6668 1.83325 10.1298 1.83325 7.00016Z" fill="#2671D9"/>
                                            </svg>
                                        </form>
                                    </div>
                                </div>
                                <div class="-translate-x-44">
                                    <label class="text-[#4D5E80] font-medium">Produk <span class="text-[#FF5656]">*</span></label> 
                                    <form class="w-[454px] h-[40px] px-4 mt-2 border-[1px] rounded-lg text-sm flex justify-between items-center">
                                        <input type="text" class="w-[399px] outline-none" placeholder="Cari produk" name="" id="pelanggan">
                                        <svg width="17" height="16" class="cursor-pointer ml-2" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.49992 2.66683C5.10668 2.66683 3.16659 4.60693 3.16659 7.00016C3.16659 9.3934 5.10668 11.3335 7.49992 11.3335C8.69672 11.3335 9.77914 10.8492 10.564 10.0643C11.349 9.27938 11.8333 8.19696 11.8333 7.00016C11.8333 4.60693 9.89315 2.66683 7.49992 2.66683ZM1.83325 7.00016C1.83325 3.87055 4.3703 1.3335 7.49992 1.3335C10.6295 1.3335 13.1666 3.87055 13.1666 7.00016C13.1666 8.32447 12.7117 9.54343 11.9506 10.508L14.9713 13.5288C15.2317 13.7891 15.2317 14.2112 14.9713 14.4716C14.711 14.7319 14.2889 14.7319 14.0285 14.4716L11.0078 11.4508C10.0432 12.2119 8.82422 12.6668 7.49992 12.6668C4.3703 12.6668 1.83325 10.1298 1.83325 7.00016Z" fill="#2671D9"/>
                                        </svg>
                                    </form>
                                </div>
                            </div>
                            <!-- -->
                            <div class="pl-4 mt-6 w-[1125px] flex justify-between">
                                <div>
                                    <label class="text-[#4D5E80] font-medium">PLN/Non PLN <span class="text-[#FF5656]">*</span></label>
                                    <div class="relative w-[529px] mt-2">
                                        <button @click="plnDropdown" :class="{'rounded-t-lg': isPlnOpen, 'rounded-lg': !isPlnOpen, 'text-[#7F7F80]': !isPlnOpen}" class="w-[454px] h-[40px] px-4 border-[1px] text-sm flex justify-between items-center">
                                            <span :class="{'text-black': PlnOption, 'text-[#9C9C9C]': !PlnOption}">{{ PlnOption || 'PLN/Non PLN' }}</span>
                                            <svg width="16" height="16" class="ml-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 11.2071C8.31658 11.5976 7.68342 11.5976 7.29289 11.2071L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8.70711 11.2071Z" fill="#2671D9"/>
                                            </svg>
                                        </button>
                                        <div v-show="isPlnOpen" class="w-[454px] border-[1px] rounded-b-lg z-10">
                                            <ul class="text-sm">
                                                <li @click="plnOption('PLN')" :class="{'bg-[#2671D9] text-white': PlnOption === 'PLN', 'hover:bg-[#E9F1FB] hover:text-[#2671D9] hover:font-medium': PlnOption !== 'PLN'}" class="cursor-pointer border-b-[1px] px-4 py-2">PLN</li>
                                                <li @click="plnOption('Non PLN')" :class="{'bg-[#2671D9] text-white': PlnOption === 'Non PLN', 'hover:bg-[#E9F1FB] hover:text-[#2671D9] hover:font-medium': PlnOption !== 'Non PLN'}" class="cursor-pointer border-b-[1px] px-4 py-2">Non PLN</li>
                                            </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="-translate-x-44">
                                    <label class="text-[#4D5E80] font-medium">Revenue <span class="text-[#FF5656]">*</span></label> 
                                    <form class="w-[454px] h-[40px] px-4 mt-2 border-[1px] rounded-lg text-sm flex justify-between items-center">
                                        <span class="mr-2">Rp.</span><input type="text" class="w-[399px] outline-none" placeholder="Masukan Revenue" id="pelanggan">
                                    </form>
                                </div>
                            </div>
                            <div class="pl-4 mt-6">
                                <label class="text-[#4D5E80] font-medium">Biaya <span class="text-[#FF5656]">*</span></label> 
                                <form class="w-[454px] h-[40px] px-4 mt-2 border-[1px] rounded-lg text-sm flex justify-between items-center">
                                    <span class="mr-2">Rp.</span><input type="text" class="w-[399px] outline-none" placeholder="Masukan Biaya" id="pelanggan">
                                </form>
                            </div>
                            <div class="pl-4 mt-6">
                                <label class="text-[#4D5E80] font-medium">Biaya <span class="text-[#FF5656]">*</span></label> 
                                <form class="w-[925px] h-[90px] px-4 mt-2 border-[1px] rounded-lg text-sm p-1">
                                    <input type="text" class="w-[900px] outline-none" placeholder="Masukkan Deskripsi" id="pelanggan">
                                </form>
                            </div>
                            <svg width="925" class="mt-4 ml-4" height="1" viewBox="0 0 1125 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1125" height="0" transform="translate(0 1)" fill="white"/>
                                <line y1="0.5" x2="1125" y2="0.5" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex justify-end w-[925px] mt-4">
                                <button @click="closeSend" class="w-[80px] h-[40px] text-[#FF5656]">Batal</button>
                                <button @click="openOk" class="w-[80px] h-[40px] bg-[#2671D9] text-white rounded-lg">Tambah</button>
                            </div> 
                        </div>
                    </div>
                </div>
                 <!-- End Pop up -->

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
    isOpen: false, 
    isOkOpen: false, 
    isDataOpen,
    DataOption: '8',
    currentPage: 1,
    rowsPerPage: 8,
    filterClickListener: null,
    dataRows: [
        { id: 1, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 2, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 3, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 4, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 5, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 6, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 7, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 8, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 9, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 10, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 11, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 12, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 13, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 14, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 15, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 16, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 17, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 18, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 19, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 20, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 21, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 22, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 23, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 24, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 25, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 26, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 27, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 28, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 29, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 30, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        { id: 31, pelanggan: 'Lorem ipsum dolor sit amet', produk: 'Lorem ipsum dolor sit amet', desk: 'Lorem ipsum dolor sit amet', type: 'Lorem ipsum dolor sit amet'},
        ]
    };
  },
  computed: {
    totalPages() {
        return Math.ceil(this.dataRows.length / this.rowsPerPage);
    },
    paginatedRows() {
        const start = (this.currentPage - 1) * this.rowsPerPage;
        const end = start + this.rowsPerPage;
        return this.dataRows.slice(start, end);
    },
    paginationPages() {
            const totalPages = Math.ceil(this.dataRows.length / this.rowsPerPage);
            let pages = [];

        if (totalPages <= 7) {
            
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (this.currentPage <= 4) {
                pages = [1, 2, 3, 4, 5, '...', totalPages];
            } else if (this.currentPage > totalPages - 4) {
                pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
            } else {
                pages = [1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', totalPages];
            }
        }

        return pages;
    },
    },
  methods: {
    toggleDataDropdown() {
        this.isDataOpen = !this.isDataOpen;
    },
    goToPage(page) {
        console.log('Attempting to go to page:', page);
        if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        }
    },
    changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        }
    },
    selectDataOption(option) {
        const newRowsPerPage = Number(option);
        this.DataOption = option;
        this.rowsPerPage = newRowsPerPage;
        console.log('Data Option:', this.DataOption);
        console.log('Rows per Page:', this.rowsPerPage);

        const totalPages = Math.ceil(this.dataRows.length / this.rowsPerPage);
        if (this.currentPage > totalPages) {
        this.currentPage = totalPages;
        }
        isDataOpen.value = false;
    },
    // Pop Up
    openTambah() {
        this.isOpen = true;
        this.isOkOpen = false; 
    },
    closeSend() {
        this.isOpen = false;
    },
    openOk() {
        this.isOkOpen = true;
        this.isOpen = false; 
    },
    closeOk() {
        this.isOkOpen = false;
    },
    },
    mounted() {
    this.filterClickListener = (e) => {
        if (!e.target.closest('.data-container')) {
            isDataOpen.value = false;
        }
    };
    document.addEventListener('click', this.filterClickListener);
    }
};
const isDataOpen = ref(false);
function toggleDataDropdown() {
    isDataOpen.value = !isDataOpen.value;
}
// Pop up RAB
const isPlnOpen = ref(false);
const PlnOption = ref('');
function plnDropdown() {
  isPlnOpen.value = !isPlnOpen.value;
}
function plnOption(option) {
    PlnOption.value = option;
  isPlnOpen.value = false;  
}

// Filter
const isFilterOpen = ref(false);
const FilterOption = ref('');


function filterDropdown() {
  isFilterOpen.value = !isFilterOpen.value;

}
function filterOption(option) {
    FilterOption.value = option;
  isFilterOpen.value = false;  
}
</script>

<style>
.pagination-controls {
  display: flex;
  align-items: center;
}

.pagination-controls button {
  margin: 0 5px;
  padding: 5px 10px;
}

.pagination-controls .active {
  background-color: #2671D9;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.data-row {
  margin-bottom: 10px;
}
</style>