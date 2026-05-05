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
                <svg width="16" height="16" viewBox="0 0 16 16" class="mt-[20px] ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L6.20711 13.7071C5.81658 14.0976 5.18342 14.0976 4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929L9.08579 8L4.79289 3.70711C4.40237 3.31658 4.40237 2.68342 4.79289 2.29289C5.18342 1.90237 5.81658 1.90237 6.20711 2.29289L11.2071 7.29289Z" fill="#7F7F80"/>
                </svg>
                <h1 class="text-sm text-[#7F7F80] mt-3 ml-1">MoU/NDA</h1>
            </div>
            <div class="h-auto py-3 px-4 bg-slate-100">
                <!-- Start Content -->
                <div class="w-full max-w-[1217px] p-1 rounded-lg bg-white min-h-screen mx-auto">
                    <div class="flex pl-4 pt-4">
                        <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                        <h1 class="text-xl font-medium ml-[6px]">MoU/NDA</h1>
                     </div>
                     <span class="text-base text-[#9C9C9C] pl-4">Formulir Pengajuan Mitra</span>

                     <!-- Start Layout angka -->
                     <div class="w-full max-w-[1217px] h-[59px]">
                        <div class="flex justify-center mt-4">
                            <div class="flex flex-col items-center">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="#E9F1FB"/>
                                    <path d="M17.2832 21.5H15.1709V15.7168C15.1709 15.5573 15.1732 15.3613 15.1777 15.1289C15.1823 14.8919 15.1891 14.6504 15.1982 14.4043C15.2074 14.1536 15.2165 13.9281 15.2256 13.7275C15.1755 13.7868 15.0729 13.8893 14.918 14.0352C14.7676 14.1764 14.6263 14.304 14.4941 14.418L13.3457 15.3408L12.3271 14.0693L15.5469 11.5059H17.2832V21.5Z" fill="#2671D9"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">Dasar</span>
                            </div>
                            <svg width="34" height="2" class="ml-4 mt-6" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#BAD1F3"/>
                            </svg>
                            <div class="flex flex-col items-center ml-2">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="8" fill="#E9F1FB"/>
                                    <path d="M19.5469 21.5H12.5605V20.0303L15.0693 17.4941C15.5752 16.9746 15.9808 16.5417 16.2861 16.1953C16.596 15.8444 16.8193 15.5254 16.9561 15.2383C17.0973 14.9512 17.168 14.6436 17.168 14.3154C17.168 13.9189 17.0563 13.6227 16.833 13.4268C16.6143 13.2262 16.3203 13.126 15.9512 13.126C15.5638 13.126 15.1878 13.2148 14.8232 13.3926C14.4587 13.5703 14.0781 13.8232 13.6816 14.1514L12.5332 12.791C12.8203 12.5449 13.1234 12.3125 13.4424 12.0938C13.766 11.875 14.1396 11.6995 14.5635 11.5674C14.9919 11.4307 15.5046 11.3623 16.1016 11.3623C16.7578 11.3623 17.3206 11.4808 17.79 11.7178C18.264 11.9548 18.6286 12.2783 18.8838 12.6885C19.139 13.0941 19.2666 13.5544 19.2666 14.0693C19.2666 14.6208 19.1572 15.1243 18.9385 15.5801C18.7197 16.0358 18.4007 16.487 17.9814 16.9336C17.5667 17.3802 17.0654 17.8747 16.4775 18.417L15.1924 19.627V19.7227H19.5469V21.5Z" fill="#2671D9"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">Ruang Lingkup</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="8" fill="#E9F1FB"/>
                                    <path d="M18.6572 13.7412C18.6572 14.2015 18.5615 14.6003 18.3701 14.9375C18.1787 15.2747 17.9189 15.5505 17.5908 15.7646C17.2673 15.9788 16.9027 16.1361 16.4971 16.2363V16.2773C17.2992 16.3776 17.9076 16.6237 18.3223 17.0156C18.7415 17.4076 18.9512 17.9316 18.9512 18.5879C18.9512 19.1712 18.8076 19.693 18.5205 20.1533C18.238 20.6136 17.8005 20.9759 17.208 21.2402C16.6156 21.5046 15.8522 21.6367 14.918 21.6367C14.3665 21.6367 13.8516 21.5911 13.373 21.5C12.8991 21.4134 12.4525 21.279 12.0332 21.0967V19.2988C12.4616 19.5176 12.9105 19.6839 13.3799 19.7979C13.8493 19.9072 14.2868 19.9619 14.6924 19.9619C15.4489 19.9619 15.9775 19.832 16.2783 19.5723C16.5837 19.3079 16.7363 18.9388 16.7363 18.4648C16.7363 18.1868 16.6657 17.9521 16.5244 17.7607C16.3831 17.5693 16.137 17.4235 15.7861 17.3232C15.4398 17.223 14.9544 17.1729 14.3301 17.1729H13.5713V15.5527H14.3438C14.959 15.5527 15.4261 15.4958 15.7451 15.3818C16.0687 15.2633 16.2874 15.1038 16.4014 14.9033C16.5199 14.6982 16.5791 14.4658 16.5791 14.2061C16.5791 13.8506 16.4697 13.5726 16.251 13.3721C16.0322 13.1715 15.6676 13.0713 15.1572 13.0713C14.8382 13.0713 14.5465 13.1123 14.2822 13.1943C14.0225 13.2718 13.7878 13.3675 13.5781 13.4814C13.3685 13.5908 13.1839 13.6979 13.0244 13.8027L12.0469 12.3467C12.4388 12.0641 12.8968 11.8294 13.4209 11.6426C13.9495 11.4557 14.5785 11.3623 15.3076 11.3623C16.3376 11.3623 17.1533 11.5697 17.7549 11.9844C18.3564 12.3991 18.6572 12.9847 18.6572 13.7412Z" fill="#2671D9"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">Lainnya</span>
                            </div>
                            <svg width="34" height="2" class="mt-6 ml-3" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="1" x2="33.5" y2="1" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex flex-col items-center ml-3">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="0.5" width="31" height="31" rx="7.5" fill="#2671D9"/>
                                    <rect x="1" y="0.5" width="31" height="31" rx="7.5" stroke="#2671D9"/>
                                    <path d="M19.7725 19.4287H18.5693V21.5H16.5049V19.4287H12.2393V17.959L16.6211 11.5059H18.5693V17.7881H19.7725V19.4287ZM16.5049 17.7881V16.0928C16.5049 15.9333 16.5072 15.7441 16.5117 15.5254C16.5208 15.3066 16.5299 15.0879 16.5391 14.8691C16.5482 14.6504 16.5573 14.4567 16.5664 14.2881C16.5801 14.1149 16.5892 13.9941 16.5938 13.9258H16.5391C16.4525 14.1126 16.3613 14.2949 16.2656 14.4727C16.1699 14.6458 16.0583 14.8281 15.9307 15.0195L14.0986 17.7881H16.5049Z" fill="white"/>
                                </svg>
                                <span class="text-sm text-[#2671D9] mt-1">Daftar Mitra Bisnis</span>
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
                                <span class="text-sm text-[#9C9C9C] mt-1">Lampiran</span>
                            </div>
                        </div>
                     </div>
                     <!-- End layout angka -->

                     <h1 class="text-xl text-[#333333] font-medium pl-4 py-6">Daftar Mitra Bisnis</h1>
                     <div class="w-[1230px] h-auto flex justify-between">

                        <!-- Calon Mitra Bisnis -->
                        <div class="ml-4">
                            <label class="text-[#4D5E80] font-medium">Calon Mitra Bisnis <span class="text-[#FF5656]">*</span></label> 
                            <form action="" class="w-[1160px] h-[40px] px-4 py-2 mt-2 border-[1px] rounded-lg flex justify-between text-sm">
                                <input type="text" placeholder="Pilih Calon Mitra Bisnis" class="w-[400px] outline-none">
                                <svg width="16" height="16" class="cursor-pointer mt-1 ml-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 11.2071C8.31658 11.5976 7.68342 11.5976 7.29289 11.2071L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8.70711 11.2071Z" fill="#2671D9"/>
                                </svg>
                            </form>
                        </div>
                     </div>

                     <svg width="1150" class="mt-64 ml-4" height="1" viewBox="0 0 1150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1150" height="0" transform="translate(0 1)" fill="white"/>
                        <line y1="0.5" x2="1190" y2="0.5" stroke="#E5E7E9"/>
                    </svg>
                    
                    <div class="flex justify-end">
                        <div class="mr-4 py-4">
                            <router-link :to="'Lainnya'"><button class="w-[107px] h-12 font-medium rounded-lg text-[#2671D9] text-sm border-[1px] border-[#2671D9]">Sebelumnya</button></router-link>
                        </div>
                        <div class=" mr-11 py-4">
                            <router-link :to="'Lampiran'"><button class="w-[107px] h-12 rounded-lg font-medium text-white text-sm bg-[#2671D9]">Selanjutnya</button></router-link>
                        </div>
                    </div>
                </div>
                <!-- End Content -->

            </div>
        </div>
    </div>
</template>