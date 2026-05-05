<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import sidebar from '../components/sidebar.vue'
import navbar from '../components/navbar.vue'
import user from '../assets/img/User.png'
import group from '../assets/img/Group.png'
import deliv from '../assets/img/Delivered.png'
import deliv1 from '../assets/img/Delivered1.png'
import deliv2 from '../assets/img/Delivered2.png'
import deliv3 from '../assets/img/Delivered3.png'
import deliv4 from '../assets/img/Delivered4.png'
</script>

<template>
    <div class="flex">    
    <sidebar/>
    <div class="flex-grow min-w-0">
        <navbar/>
        <div class="w-auto h-[54px]"></div>
        <div class="h-auto py-3 px-4 bg-slate-100">

            <!-- Start Content -->
            <div class="w-full max-w-[1217px] h-auto p-1 rounded-lg bg-white min-h-screen mx-auto">
                <div class="flex pl-4 pt-4">
                    <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                    <h1 class="text-xl font-medium ml-[6px]">Dashboard</h1>
                </div>
                <span class="text-base text-[#9C9C9C] pl-4">Dashboard User</span>
                <div class="w-full max-w-[1170px] h-[100px] bg-[#2671D9] ml-4 mt-4 rounded-lg">
                    <div class="ml-[23px] flex">
                        <img :src="user" alt="User Image" class="w-[18px] h-[18px] mt-[23px]">
                        <div class="mt-[23px]">
                            <h1 class="text-[15px] ml-2 text-white font-medium">OFFICER KEMITRAAN BISNIS</h1>
                            <h1 class="text-[20px] text-white ml-2 mt-2 max-w-[600px] w-full min-w-0">Staff Sub Bidang Kemitraan Bisnis Konektivitas dan Infrastruktur</h1>
                        </div>
                        <img :src="group" alt="Group Image" class="ml-[275px] rounded-lg">
                    </div>
                </div>

                <!-- Data -->
                <div class="w-full max-w-[1170px] h-[68px] ml-4 mt-6 flex justify-between">
                    <div class="w-[196.4px] h-full bg-[#5197F9] border-[1px] rounded-lg flex justify-between">
                        <div class="mt-[5px] ml-4">
                            <span class="text-xs text-white">Total Permintaan</span>
                            <h1 class="text-[24px] text-white font-medium">32</h1>
                        </div>
                        <img :src="deliv1" alt="Direvisi Image" class="object-none">
                    </div>
                    <div class="w-[196.4px] h-full bg-[#8C62FF] border-[1px] rounded-lg flex justify-between">
                        <div class="mt-[5px] ml-4">
                            <span class="text-xs text-white">Total Diproses</span>
                            <h1 class="text-[24px] text-white font-medium">18</h1>
                        </div>
                        <img :src="deliv" alt="Diproses Image" class="object-none">
                    </div>
                    <div class="w-[196.4px] h-full bg-[#FFA229] border-[1px] rounded-lg flex justify-between">
                        <div class="mt-[5px] ml-4">
                            <span class="text-xs text-white">Total Direvisi</span>
                            <h1 class="text-[24px] text-white font-medium">2</h1>
                        </div>
                        <img :src="deliv2" alt="Direvisi Image" class="object-none">
                    </div>
                    <div class="w-[196.4px] h-full bg-[#FF5656] border-[1px] rounded-lg flex justify-between">
                        <div class="mt-[5px] ml-4">
                            <span class="text-xs text-white">Total Ditolak</span>
                            <h1 class="text-[24px] text-white font-medium">4</h1>
                        </div>
                        <img :src="deliv3" alt="Dilotak Image" class="object-none">
                    </div>
                    <div class="w-[196.4px] h-full bg-[#0EA976] border-[1px] rounded-lg flex justify-between">
                        <div class="mt-[5px] ml-4">
                            <span class="text-xs text-white">Total Selesai</span>
                            <h1 class="text-[24px] text-white font-medium">23</h1>
                        </div>
                        <img :src="deliv4" alt="Selesai Image" class="object-none">
                    </div>
                </div>

                <!-- Search -->
                <div class="mt-6">
                    <div class="flex">
                        <div><div class="ml-4 w-[280px] py-2 border-[1px] rounded-s-lg flex">
                            <form action="search" class="flex">
                                <input v-model="searchQuery" type="text" name="search" placeholder="Cari sesuatu disini ..." class="ml-4 w-[250px] outline-none">
                            </form></div>
                        </div>
                        <div class="w-10 h-[41.5px] bg-[#2671D9] rounded-e-lg -translate-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[25px] h-[40px] ml-[6px] cursor-pointer" viewBox="0 0 101 101" id="Search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                        </div>
                    
                        <!-- Filter -->
                        <div class="w-[90px] ml-2 filter-container">
                            <button @click="filterDropdown" class="w-[90px] border-[1px] px-1 py-2 flex justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[14px] mt-[6px] cursor-pointer" viewBox="0 0 6.35 6.35" id="filter">
                                <path fill-rule="evenodd" d="M2 .998A1 1 0 0 0 .996 2.002v4.002a1 1 0 0 0 .252.656l6.754 7.715V22a1 1 0 0 0 1.55.834l6-4.002a1 1 0 0 0 .444-.834v-3.623l6.756-7.715a1 1 0 0 0 .25-.656V2.002A1 1 0 0 0 21.998.998H2zm.996 2h18.006V5H2.996V2.998zM4.2 7h15.6l-5.553 6.34a1 1 0 0 0-.242.658v3.469l-4.002 2.666v-6.135a1 1 0 0 0-.25-.658L4.199 7z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" paint-order="stroke fill markers" transform="scale(.26458)" style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;isolation:auto;mix-blend-mode:normal" fill="#2671d9" class="color000000 svgShape"></path>
                            </svg>
                            <span class="text-[#333333] ml-2 ">Filter</span>
                            </button>

                            <!-- Pilih Filter -->
                            <div v-show="isFilterOpen" class="absolute w-[240px] border-[1px] rounded-lg bg-white z-10 mt-2">
                                <ul class="text-sm w-full">
                                    <li class="border-b h-[40px] flex">
                                        <svg width="14" height="14" class="ml-[17.33px] mt-[13.33px]" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 0.333374H2.33337C1.80294 0.333374 1.29423 0.544088 0.919161 0.91916C0.544088 1.29423 0.333374 1.80294 0.333374 2.33337V3.11337C0.333279 3.38867 0.390018 3.66102 0.500041 3.91337V3.95337C0.594227 4.16735 0.727636 4.36181 0.893374 4.52671L5.00004 8.60671V13C4.99981 13.1133 5.02846 13.2248 5.08329 13.324C5.13811 13.4231 5.2173 13.5067 5.31337 13.5667C5.41947 13.6325 5.54189 13.6671 5.66671 13.6667C5.77107 13.6661 5.87383 13.641 5.96671 13.5934L8.63337 12.26C8.74332 12.2046 8.83577 12.1199 8.90049 12.0152C8.96521 11.9104 8.99967 11.7898 9.00004 11.6667V8.60671L13.08 4.52671C13.2458 4.36181 13.3792 4.16735 13.4734 3.95337V3.91337C13.5926 3.66299 13.6584 3.39056 13.6667 3.11337V2.33337C13.6667 1.80294 13.456 1.29423 13.0809 0.91916C12.7058 0.544088 12.1971 0.333374 11.6667 0.333374ZM7.86004 7.86004C7.79825 7.92233 7.74937 7.99621 7.71619 8.07744C7.68302 8.15866 7.6662 8.24564 7.66671 8.33337V11.2534L6.33337 11.92V8.33337C6.33388 8.24564 6.31706 8.15866 6.28389 8.07744C6.25071 7.99621 6.20183 7.92233 6.14004 7.86004L2.60671 4.33337H11.3934L7.86004 7.86004ZM12.3334 3.00004H1.66671V2.33337C1.66671 2.15656 1.73695 1.98699 1.86197 1.86197C1.98699 1.73695 2.15656 1.66671 2.33337 1.66671H11.6667C11.8435 1.66671 12.0131 1.73695 12.1381 1.86197C12.2631 1.98699 12.3334 2.15656 12.3334 2.33337V3.00004Z" fill="#2671D9"/>
                                        </svg>                                              
                                        <span class="text-[#7F7F80] ml-2 mt-[10px]">Pilih Filter</span>
                                    </li>
                                    <li @click="filterTipe" class="cursor-pointer border-b h-[40px] flex justify-between hover:font-semibold">
                                        <span class="text-[#333333] ml-4 mt-[10px]">Tipe</span>  
                                        <svg width="8" height="12" class="mt-3 mr-3" iewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#2671D9"/>
                                        </svg>    
                                    </li>
                                    <li @click="toggleFilterStatus" class="cursor-pointer border-b h-[40px] flex justify-between hover:font-semibold">
                                        <span class="text-[#333333] ml-4 mt-[10px]">Status</span>  
                                        <svg width="8" height="12" class="mt-3 mr-3" iewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#2671D9"/>
                                        </svg>    
                                    </li>
                                </ul>
                            </div>

                            <!-- Type -->
                            <div v-show="isFilterTipe" class="absolute w-[240px] ml-[247px] mt-[48px] border-[1px] rounded-lg bg-white z-10">
                            <ul class="text-sm w-full">
                                <li @click="updateFilterType('PKS')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterType === 'PKS'" readonly>
                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterType === 'PKS'}">PKS</span>
                                </li>
                                <li @click="updateFilterType('NDA')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterType === 'NDA'" readonly>
                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterType === 'NDA'}">NDA</span>
                                </li>
                                <li @click="updateFilterType('MoU')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterType === 'MoU'" readonly>
                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterType === 'MoU'}">MoU</span>
                                </li>
                            </ul>
                            </div>

                            <!-- Status -->
                            <div v-show="isFilterStatus" class="absolute w-[240px] ml-[247px] mt-[90px] border-[1px] rounded-lg bg-white z-10">
                            <ul class="text-sm w-full">
                                <li @click="updateFilterStatus('Selesai')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Selesai'" readonly>
                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Selesai'}">Selesai</span>
                                </li>
                                <li @click="updateFilterStatus('Revisi')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Revisi'" readonly>
                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Revisi'}">Revisi</span>
                                </li>
                            </ul>
                            </div>
        
                        </div>

                        <div class="w-[109px] ml-2 filter-date-container">
                            <button @click="dateDropdown" class="w-auto border-[1px] px-3 py-2 flex justify-center rounded-lg">
                                <svg width="16" height="16" class="mt-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50001 1.33337C4.8682 1.33337 5.16668 1.63185 5.16668 2.00004V2.83337H10.8333V2.00004C10.8333 1.63185 11.1318 1.33337 11.5 1.33337C11.8682 1.33337 12.1667 1.63185 12.1667 2.00004V2.83337H12.5C13.6966 2.83337 14.6667 3.80342 14.6667 5.00004V12.5C14.6667 13.6967 13.6966 14.6667 12.5 14.6667H3.50001C2.30339 14.6667 1.33334 13.6967 1.33334 12.5V5.00004C1.33334 3.80342 2.30339 2.83337 3.50001 2.83337H3.83334V2.00004C3.83334 1.63185 4.13182 1.33337 4.50001 1.33337ZM3.50001 4.16671C3.03977 4.16671 2.66668 4.5398 2.66668 5.00004V5.49943C2.92321 5.39245 3.20471 5.33337 3.50001 5.33337H12.5C12.7953 5.33337 13.0768 5.39245 13.3333 5.49943V5.00004C13.3333 4.5398 12.9602 4.16671 12.5 4.16671H3.50001ZM13.3333 7.50004C13.3333 7.0398 12.9602 6.66671 12.5 6.66671H3.50001C3.03977 6.66671 2.66668 7.0398 2.66668 7.50004V12.5C2.66668 12.9603 3.03977 13.3334 3.50001 13.3334H12.5C12.9602 13.3334 13.3333 12.9603 13.3333 12.5V7.50004Z" fill="#2671D9"/>
                                </svg>
                                <span class="text-[#333333] ml-2">{{ selectedDay || 'Tanggal' }}</span>
                            </button>
                            <DatePicker v-show="isDate" v-model="selectedDay" @date-selected="updateSelectedDay" :key="selectedDay" class="z-10 mt-2"/>
                        </div>
                        
                    </div>

                <!-- All -->
                <div v-if="isFilterVisibleAll" class="w-full max-w-[1170px] h-[44px] border-[1px] rounded-lg mt-4 ml-4 flex justify-between">
                    <div class="px-[10px] py-[10px] flex">
                        <div v-if="isFilterVisibleType" class="w-[60px] h-[24px] bg-[#E9F1FB] border-[1px] border-[#BAD1F3] rounded-[100px] flex justify-between">
                            <span class=" text-xs text-[#2671D9] font-semibold ml-[10px] mt-[3px]">{{ filterType }}</span>
                            <svg @click="clearFilterType" width="10" height="10" class="cursor-pointer mr-[7px] mt-[7px]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.43306 1.43306C1.67714 1.18898 2.07286 1.18898 2.31694 1.43306L5 4.11612L7.68306 1.43306C7.92714 1.18898 8.32286 1.18898 8.56694 1.43306C8.81102 1.67714 8.81102 2.07286 8.56694 2.31694L5.88388 5L8.56694 7.68306C8.81102 7.92714 8.81102 8.32286 8.56694 8.56694C8.32286 8.81102 7.92714 8.81102 7.68306 8.56694L5 5.88388L2.31694 8.56694C2.07286 8.81102 1.67714 8.81102 1.43306 8.56694C1.18898 8.32286 1.18898 7.92714 1.43306 7.68306L4.11612 5L1.43306 2.31694C1.18898 2.07286 1.18898 1.67714 1.43306 1.43306Z" fill="#2671D9"/>
                            </svg>
                        </div>
                        <div v-if="isFilterVisibleStatus" class="w-[70px] h-[24px] ml-[6px] bg-[#E9F1FB] border-[1px] border-[#BAD1F3] rounded-[100px] flex justify-between">
                            <span class=" text-xs text-[#2671D9] font-semibold ml-[10px] mt-[3px]">{{ filterStatus }}</span>
                            <svg @click="clearFilterStatus" width="10" height="10" class="cursor-pointer mr-[7px] mt-[7px]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.43306 1.43306C1.67714 1.18898 2.07286 1.18898 2.31694 1.43306L5 4.11612L7.68306 1.43306C7.92714 1.18898 8.32286 1.18898 8.56694 1.43306C8.81102 1.67714 8.81102 2.07286 8.56694 2.31694L5.88388 5L8.56694 7.68306C8.81102 7.92714 8.81102 8.32286 8.56694 8.56694C8.32286 8.81102 7.92714 8.81102 7.68306 8.56694L5 5.88388L2.31694 8.56694C2.07286 8.81102 1.67714 8.81102 1.43306 8.56694C1.18898 8.32286 1.18898 7.92714 1.43306 7.68306L4.11612 5L1.43306 2.31694C1.18898 2.07286 1.18898 1.67714 1.43306 1.43306Z" fill="#2671D9"/>
                            </svg>
                        </div>
                    </div>
                    <svg width="12" height="8" class="mr-[18.5px] mt-[18.5px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z" fill="#7F7F80"/>
                    </svg>
                </div>    

                <!-- Start Data -->
                <div class="w-full max-w-[1170px] overflow-auto rounded-lg border-[1px] mt-4 ml-4 h-auto">
                    <table class="table-auto w-full text-left">
                        <!-- Kolom -->
                        <thead class="text-xs text-[#4D5E80] rounded-lg h-[48px]">
                            <tr class="bg-none border-b-2">
                                <th class="w-[74px] px-3"><div class="flex justify-between">No.
                                    <svg @click="SortNo" width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[268px] px-3"><div class="flex justify-between">Judul                                    
                                    <svg @click="SortJudul" width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[130px] px-3"><div class="flex justify-between">No Pengajuan                                  
                                    <svg @click="SortCode" width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg></div></th>
                                <th class="w-[87px] px-3"><div class="flex justify-between">Tipe
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[172px] px-3"><div class="flex justify-between">Tanggal Pengajuan
                                    <svg @click="SortDateStart" width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[172px] px-3"><div class="flex justify-between">Tanggal PKS Selesai
                                    <svg @click="SortDateEnd" width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[97px] px-3"><div class="flex justify-between">Status
                                    <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                        <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                    </svg>
                                </div></th>
                                <th class="w-[54px] px-3"></th>
                            </tr>
                        </thead>
                        <!-- Baris -->
                        <tbody>  
                            <tr v-for="row in paginatedRows" :key="row.id" class="bg-white border-b text-sm text-[#333333] h-[54px] data-row">
                                <td class="w-[74px] px-3">{{ row.id }}</td>
                                <td class="w-[268px] px-3">{{ row.name }}</td>
                                <td class="w-[122px] px-3">{{ row.code }}</td>
                                <td class="w-[87px] px-3">{{ row.type }}</td>
                                <td class="w-[172px] px-3">{{ row.startDate }}</td>
                                <td class="w-[172px] px-3">{{ row.endDate }}</td>
                                <td class="w-[97px] px-3">
                                    <span :class="row.statusClass" class="px-[8px] py-1 text-xs font-medium border-1 rounded-[100px]">{{ row.status }}</span>
                                </td>
                                <td class="w-[54px] px-3">
                                    <div class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- End data -->
                </div>

                <!-- Start Menampilkan -->
                <div class="w-full max-w-[1170px] ml-4 py-3 flex justify-between">
                    <div class="flex">
                    <span class="text-sm text-[#333333] mt-[5px]">Menampilkan</span>
                    <div class="w-[44px] ml-4 relative filter-data-container">
                        <button @click="toggleDataDropdown" :class="[isDataOpen ? 'rounded-b-lg' : 'rounded-lg', 'flex w-[44px] h-8 border-[1px]']">
                            <span class="text-sm mt-1 pl-3">{{ DataOption || '7' }}</span>
                            <svg width="16" height="16" class="mt-2 transition-transform duration-300" :class="{'rotate-180': isDataOpen}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10.2663L4 6.26634L4.93333 5.33301L8 8.39967L11.0667 5.33301L12 6.26634L8 10.2663Z" fill="#2671D9"/>
                            </svg>
                        </button>
                        <div v-show="isDataOpen" class="absolute bottom-full w-[44px] border-[1px] rounded-t-lg cursor-pointer z-10 bg-white">
                            <ul class="text-sm w-full">
                                <li @click="selectDataOption('5')" :class="{ 'text-black': rowsPerPage === 5, '': rowsPerPage !== 5 }" class="cursor-pointer border-b pl-4 py-1 hover:font-semibold">5</li>
                                <li @click="selectDataOption('7')" :class="{ 'text-black': rowsPerPage === 7, '': rowsPerPage !== 7 }" class="cursor-pointer border-b py-1 pl-4 hover:font-semibold">7</li>
                                <li @click="selectDataOption('8')" :class="{ 'text-black': rowsPerPage === 8, '': rowsPerPage !== 8 }" class="cursor-pointer pl-4 py-1 hover:font-semibold">8</li>
                            </ul>
                        </div>
                    </div>
                    <p class="text-sm text-[#333333] mt-1 ml-3">dari <span class="font-semibold text-sm">{{ dataRows.length }}</span> Data</p>
                    </div>
                    <div class="pagination-controls">
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
                        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === filteredTotalPages">
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#7F7F80"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- akhir menampilkan -->

            </div>
            <!-- End Content -->

        </div>
    </div>
</div>
</template>

<script >
import DatePicker from '@/components/datepicker.vue'
import { ref } from 'vue';

const isFilterOpen = ref(false);
const isFilterTipe = ref(false);
const isFilterStatus = ref(false);
const isDataOpen = ref(false);
const filterStatus = ref('');
const isDate = ref('');

function toggleDataDropdown() {
    isDataOpen.value = !isDataOpen.value;
}

function filterDropdown() {
    isFilterOpen.value = !isFilterOpen.value;
    isFilterTipe.value = false;
    isFilterStatus.value = false;
    isDate.value = false;
}

function dateDropdown() {
    isDate.value = !isDate.value
    isFilterOpen.value = false;
}

function filterTipe() {
    isFilterTipe.value = !isFilterTipe.value;
    if (isFilterTipe.value) {
        isFilterStatus.value = false;    
    }
}

function updateFilterStatus(status) {
    filterStatus.value = status;
    isFilterOpen.value = false;
    isFilterStatus.value = false;
}

function toggleFilterStatus() {
    isFilterStatus.value = !isFilterStatus.value;
    if (isFilterStatus.value) {
        isFilterTipe.value = false; 
    }
}

// Data
export default {
components: { DatePicker },
    data() {
        return {
            isDataOpen,
            DataOption: '8',
            currentPage: 1,
            rowsPerPage: 8, 
            filterType: '',
            filterStatus: '',
            FilterOptionStatus: '',
            searchQuery: '',
            selectedDay: '',
            filterClickListener: null,
            dataRows: [
                { id: 1, name: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', startDate: '25/08/2024', endDate: '02/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 2, name: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 3, name: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', startDate: '10/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 4, name: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 5, name: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFCF]' },
                { id: 6, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 7, name: 'NDA Penjajakan Kerja Sama berkaita', code: '300223', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 8, name: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 9, name: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', startDate: '09/09/2024', endDate: '02/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 10, name: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 11, name: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 12, name: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', startDate: '09/09/2024', endDate: '09/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 13, name: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFCF]' },
                { id: 14, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 15, name: 'NDA Penjajakan Kerja Sama berkaita', code: '300223', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 16, name: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', startDate: '09/09/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 17, name: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 18, name: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', startDate: '25/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 19, name: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 20, name: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 21, name: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', startDate: '25/08/2024', endDate: '02/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFCF]' },
                { id: 22, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 23, name: 'NDA Penjajakan Kerja Sama berkaita', code: '300223', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 24, name: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', startDate: '09/09/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 25, name: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', startDate: '09/09/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 26, name: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 27, name: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 28, name: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 29, name: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', startDate: '10/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFCF]' },
                { id: 30, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '20/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 31, name: 'NDA Penjajakan Kerja Sama berkaita', code: '300123', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 32, name: 'NDA Penjajakan Kerja Sama berkaita', code: '300223', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 33, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 34, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '20/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 35, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 36, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 37, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '25/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 38, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 39, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 40, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '25/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 41, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 42, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '09/09/2024', endDate: '02/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 43, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 44, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 45, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '25/08/2024', endDate: '11/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
            { id: 46, name: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                ]
        };
    },

computed: {
    searchedRows() {
        const searched = this.dataRows.filter((row) => {
        const searchQuery = this.searchQuery.toLowerCase();
        const titleMatch = row.name.toLowerCase().includes(searchQuery);
            return titleMatch;
        });
            return searched;
    },
    isFilterVisibleAll() {
        return this.filterType !== '' || filterStatus.value !== '';
    },
    isFilterVisibleType() {
        return this.filterType !== '';
    },
    isFilterVisibleStatus() {
        return filterStatus.value !== '';
    },
    filteredRows() {
        const filtered = this.dataRows.filter((row) => {
        const typeMatch = this.filterType === '' || row.type === this.filterType;
        const statusMatch = filterStatus.value === '' || row.status === filterStatus.value;
        const dateMatch = this.selectedDay === '' || row.startDate.split('/')[0] === this.selectedDay.toString().padStart(2, '0');
            return typeMatch && statusMatch && dateMatch;
        });
            return filtered;
    },
    filteredTotalPages() {
        if (this.searchQuery) {
            return Math.ceil(this.searchedRows.length / this.rowsPerPage);
        } else {
            return Math.ceil(this.filteredRows.length / this.rowsPerPage);
        }
    },
    totalPages() {
        return Math.ceil(this.dataRows.length / this.rowsPerPage);
    },
    paginatedRows() {
        const start = (this.currentPage - 1) * this.rowsPerPage;
        const end = start + this.rowsPerPage;
        if (this.searchQuery) {
            return this.searchedRows.slice(start, end);
        } else {
            return this.filteredRows.slice(start, end);
        }
    },
    paginationPages() {
        const totalPages = this.searchQuery ? Math.ceil(this.searchedRows.filter(row => row.status === this.filterStatus.value && row.startDate.split('/')[0] === this.selectedDay.toString().padStart(2, '0')).length / this.rowsPerPage) : Math.ceil(this.filteredRows.length / this.rowsPerPage);
        let pages = [];

        if (totalPages <= 1) {
            return null;
        }
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
    }
},

methods: {
    SortDateEnd() {
        if (this.endDateSortOrder === 'asc') {
        this.dataRows.sort((a, b) => {
            const endDateA = new Date(a.endDate.split('/').reverse().join('-'));
            const endDateB = new Date(b.endDate.split('/').reverse().join('-'));
            return endDateA - endDateB;
        });
        this.endDateSortOrder = 'desc';
        } else {
        this.dataRows.sort((a, b) => {
            const endDateA = new Date(a.endDate.split('/').reverse().join('-'));
            const endDateB = new Date(b.endDate.split('/').reverse().join('-'));
            return endDateB - endDateA;
        });
        this.endDateSortOrder = 'asc';
        }
    },
    SortDateStart() {
        if (this.startDateSortOrder === 'asc') {
        this.dataRows.sort((a, b) => {
            const startDateA = new Date(a.startDate.split('/').reverse().join('-'));
            const startDateB = new Date(b.startDate.split('/').reverse().join('-'));
            return startDateA - startDateB;
        });
        this.startDateSortOrder = 'desc';
        } else {
        this.dataRows.sort((a, b) => {
            const startDateA = new Date(a.startDate.split('/').reverse().join('-'));
            const startDateB = new Date(b.startDate.split('/').reverse().join('-'));
            return startDateB - startDateA;
        });
        this.startDateSortOrder = 'asc';
        }
    },
    SortCode() {
        if (this.codeSortOrder === 'asc') {
        this.dataRows.sort((a, b) => {
            const codeA = parseInt(a.code);
            const codeB = parseInt(b.code);
            return codeA - codeB;
        });
        this.codeSortOrder = 'desc';
        } else {
        this.dataRows.sort((a, b) => {
            const codeA = parseInt(a.code);
            const codeB = parseInt(b.code);
            return codeB - codeA;
        });
        this.codeSortOrder = 'asc';
        }
    },
    SortNo() {
        if (this.sortOrder === 'asc') {
            this.sortOrder = 'desc';
        } else {
            this.sortOrder = 'asc';
        }
        this.sortRows();
    },
    sortRows() {
        if (this.sortOrder === 'asc') {
        this.dataRows.sort((a, b) => a.id - b.id);
        } else {
        this.dataRows.sort((a, b) => b.id - a.id);
        }
    },
    SortJudul() {
        if (this.sortJudul === 'asc') {
        this.sortJudul = 'desc';
        } else {
        this.sortJudul = 'asc';
        }
        this.sortJudulRows();
    },
    sortJudulRows() {
        if (this.sortJudul === 'asc') {
        this.dataRows.sort((a, b) => a.name.localeCompare(b.name));
        } else {
        this.dataRows.sort((a, b) => b.name.localeCompare(a.name));
        }
    },
    updateSelectedDay(date) {
        this.selectedDay = date;
        isDate.value = false;
    },
    clearFilterType() {
        this.filterType = '';
        isFilterTipe.value = false;
    },
    clearFilterStatus() {
        filterStatus.value = '';
        isFilterStatus.value = false;
    },
    updateFilterType(type) {
        this.filterType = type;
        isFilterOpen.value = false;  
        isFilterTipe.value = false; 
    },
    updateFilterStatus(status) {
        filterStatus.value = status;
    },
    toggleDataDropdown() {
        this.isDataOpen = !this.isDataOpen;
    },
    goToPage(page) {
    console.log('Attempting to go to page:', page);
        if (page >= 1 && page <= this.filteredTotalPages) {
            this.currentPage = page;
        }
    },
    changePage(page) {
        if (page >= 1 && page <= this.filteredTotalPages) {
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
},

mounted() {
    this.filterClickListener = (e) => {
        if (!e.target.closest('.filter-container') 
            && !e.target.closest('.filter-date-container')
            && !e.target.closest('.filter-data-container')) {
            isFilterOpen.value = false;
            isFilterTipe.value = false;
            isFilterStatus.value = false;
            isDate.value = false;
            isDataOpen.value = false;
        }
    };
    document.addEventListener('click', this.filterClickListener);
}
};
</script>