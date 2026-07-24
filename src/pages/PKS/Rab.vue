<script setup>
import WizardPageLayout from '@/layouts/WizardPageLayout.vue'
import { PKS_STEPS } from '@/constants/navigation'
</script>

<template>
  <WizardPageLayout
    :breadcrumb="[{ label: 'Buat' }, { label: 'PKS' }]"
    title="PKS"
    subtitle="Formulir Pengajuan Mitra"
    :steps="PKS_STEPS"
    :current-step="2"
  >
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
  </WizardPageLayout>
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