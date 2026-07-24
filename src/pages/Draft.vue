<script setup>
import PageHeader from '@/components/ui/PageHeader.vue'
import PageBreadcrumb from '@/components/ui/PageBreadcrumb.vue'
</script>

<template>
  <div>
    <PageBreadcrumb :items="[{ label: 'Draft' }]" />
    <div class="page-body">
      <div class="content-card">
        <PageHeader title="Draft" subtitle="Draft Surat Pengajuan Mitra" />

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
                                            <li @click="updateFilterStatus('Approval Manager')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Approval Manager'" readonly>
                                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Approval Manager'}">Approval Manager</span>
                                            </li>
                                            <li @click="updateFilterStatus('Approval VP')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Approval VP'" readonly>
                                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Approval VP'}">Approval VP</span>
                                            </li>
                                            <li @click="updateFilterStatus('Approval Direksi')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Approval Direksi'" readonly>
                                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Approval Direksi'}">Approval Direksi</span>
                                            </li>
                                            <li @click="updateFilterStatus('Waiting Approval')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Waiting Approval'" readonly>
                                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Waiting Approval'}">Waiting Approval</span>
                                            </li>
                                            <li @click="updateFilterStatus('Revisi')" class="border-b h-[40px] flex items-center group hover:bg-[#E9F1FB]">
                                                <input type="checkbox" class="w-4 h-4 border-[2px] ml-4 accent-[#2671D9]" :checked="filterStatus === 'Revisi'" readonly>
                                                <span class="text-[#333333] ml-2 group-hover:font-semibold group-hover:text-[#2671D9]" :class="{'text-[#2671D9] font-semibold': filterStatus === 'Revisi'}">Revisi</span>
                                            </li>
                                        </ul>
                                    </div>

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
                                        <div v-if="isFilterVisibleStatus" class="w-auto h-[24px] ml-[6px] bg-[#E9F1FB] border-[1px] border-[#BAD1F3] rounded-[100px] flex justify-between">
                                            <span class=" text-xs text-[#2671D9] font-semibold ml-[10px] mt-[3px]">{{ filterStatus }}</span>
                                            <svg @click="clearFilterStatus" width="10" height="10" class="cursor-pointer ml-1 mr-[7px] mt-[7px]" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        <th class="w-[130px] px-3"><div class="flex justify-between">Tipe
                                            <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                                <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                            </svg>
                                        </div></th>
                                        <th class="w-[130px] px-3"><div class="flex justify-between">Pelaksana
                                            <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                                <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                            </svg>
                                        </div></th>
                                        <th class="w-[130px] px-3"><div class="flex justify-between">Status
                                            <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                                <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                            </svg>
                                        </div></th>
                                        <th class="w-[130px] px-3"><div class="flex justify-between">Status Approval
                                            <svg width="16" height="16" class="cursor-pointer ml-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                                <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                            </svg>
                                        </div></th>
                                        <th class="w-[54px] px-3"></th>
                                    </tr>
                                </thead>
                                <!-- Baris -->
                                <tbody>
                                    <tr v-for="(row, index) in paginatedRows" :key="row.id" class="bg-white border-b text-sm text-[#333333] h-[54px]">
                                        <td class="w-[74px] px-3">{{ row.id }}</td>
                                        <td class="w-[268px] px-3">{{ row.judul }}</td>
                                        <td class="w-[130px] px-3">{{ row.code }}</td>
                                        <td class="w-[130px] px-3">{{ row.type }}</td>
                                        <td class="w-[130px] px-3">{{ row.pelaksana }}</td>
                                        <td class="w-[130px] px-3">
                                            <span class="px-2 py-1 text-xs bg-[#E7F1FD] font-medium text-[#4791F2] border-[#91BEF7] border-1 rounded-[100px]">{{ row.status }}</span>
                                        </td>
                                        <td class="w-[135px] px-3">
                                            <span :class="row.statusClass" class="px-[6px] py-1 text-xs font-medium border-1 rounded-[100px]">{{ row.statusap }}</span>
                                        </td>
                                        <td class="w-[54px] px-3">
                                            <div @click="toggleView1(index, row.type)" class="w-6 h-6 bg-[#E5E7E9] rounded-lg flex justify-center cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-[2px]" viewBox="0 0 128 512">
                                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                                                </svg>
                                            </div>
                                            <!-- View -->
                                            <div v-if="activeViewIndex === index" class="absolute -translate-x-[135px] w-[160px]">
                                            <!-- PKS type -->
                                            <router-link v-if="row.type === 'PKS'" to="/Detaildraft">
                                            <div class="h-[40px] rounded-lg border-[1px] border-[#E5E7E9] flex cursor-pointer shadow-lg bg-white hover:bg-gray-200 hover:border-[#2671D9]">
                                                <svg width="16" height="12" class="mx-3 my-3" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00054 1.66634C5.20282 1.66634 2.82717 3.48083 1.98949 5.99905C1.989 6.00052 1.989 6.00234 1.98949 6.00381C2.82821 8.52021 5.20296 10.333 7.99937 10.333C10.7971 10.333 13.1727 8.51852 14.0104 6.0003C14.0109 5.99882 14.0109 5.99701 14.0104 5.99554C13.1717 3.47914 10.797 1.66634 8.00054 1.66634ZM0.724321 5.5782C1.7378 2.53148 4.61156 0.333008 8.00054 0.333008C11.3879 0.333008 14.2606 2.52944 15.2753 5.57394C15.367 5.84883 15.367 6.14622 15.2756 6.42115C14.2621 9.46787 11.3883 11.6663 7.99937 11.6663C4.61197 11.6663 1.7393 9.46991 0.72457 6.42541C0.632951 6.15052 0.632864 5.85314 0.724321 5.5782ZM8 4.66634C7.26362 4.66634 6.66666 5.26329 6.66666 5.99967C6.66666 6.73605 7.26362 7.33301 8 7.33301C8.73638 7.33301 9.33333 6.73605 9.33333 5.99967C9.33333 5.26329 8.73638 4.66634 8 4.66634ZM5.33333 5.99967C5.33333 4.52692 6.52724 3.33301 8 3.33301C9.47276 3.33301 10.6667 4.52691 10.6667 5.99967C10.6667 7.47243 9.47276 8.66634 8 8.66634C6.52724 8.66634 5.33333 7.47243 5.33333 5.99967Z" fill="#2671D9"/>
                                                </svg>
                                                <span class="text-[#333333] mt-[10px] hover:text-[#2671D9]">View</span>
                                            </div>
                                            </router-link>
                                            <!-- MoU type -->
                                            <router-link v-if="row.type === 'MoU'" to="/Detaildraft">
                                            <div class="h-[40px] rounded-lg border-[1px] border-[#E5E7E9] flex cursor-pointer shadow-lg bg-white hover:bg-gray-200 hover:border-[#2671D9]">
                                                <svg width="16" height="12" class="mx-3 my-3" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00054 1.66634C5.20282 1.66634 2.82717 3.48083 1.98949 5.99905C1.989 6.00052 1.989 6.00234 1.98949 6.00381C2.82821 8.52021 5.20296 10.333 7.99937 10.333C10.7971 10.333 13.1727 8.51852 14.0104 6.0003C14.0109 5.99882 14.0109 5.99701 14.0104 5.99554C13.1717 3.47914 10.797 1.66634 8.00054 1.66634ZM0.724321 5.5782C1.7378 2.53148 4.61156 0.333008 8.00054 0.333008C11.3879 0.333008 14.2606 2.52944 15.2753 5.57394C15.367 5.84883 15.367 6.14622 15.2756 6.42115C14.2621 9.46787 11.3883 11.6663 7.99937 11.6663C4.61197 11.6663 1.7393 9.46991 0.72457 6.42541C0.632951 6.15052 0.632864 5.85314 0.724321 5.5782ZM8 4.66634C7.26362 4.66634 6.66666 5.26329 6.66666 5.99967C6.66666 6.73605 7.26362 7.33301 8 7.33301C8.73638 7.33301 9.33333 6.73605 9.33333 5.99967C9.33333 5.26329 8.73638 4.66634 8 4.66634ZM5.33333 5.99967C5.33333 4.52692 6.52724 3.33301 8 3.33301C9.47276 3.33301 10.6667 4.52691 10.6667 5.99967C10.6667 7.47243 9.47276 8.66634 8 8.66634C6.52724 8.66634 5.33333 7.47243 5.33333 5.99967Z" fill="#2671D9"/>
                                                </svg>
                                                <span class="text-[#333333] mt-[10px] hover:text-[#2671D9]">View</span>
                                            </div>
                                            </router-link>
                                            <!-- NDA type -->
                                            <router-link v-if="row.type === 'NDA'" to="/Detaildraft">
                                            <div class="h-[40px] rounded-lg border-[1px] border-[#E5E7E9] flex cursor-pointer shadow-lg bg-white hover:bg-gray-200 hover:border-[#2671D9]">
                                                <svg width="16" height="12" class="mx-3 my-3" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00054 1.66634C5.20282 1.66634 2.82717 3.48083 1.98949 5.99905C1.989 6.00052 1.989 6.00234 1.98949 6.00381C2.82821 8.52021 5.20296 10.333 7.99937 10.333C10.7971 10.333 13.1727 8.51852 14.0104 6.0003C14.0109 5.99882 14.0109 5.99701 14.0104 5.99554C13.1717 3.47914 10.797 1.66634 8.00054 1.66634ZM0.724321 5.5782C1.7378 2.53148 4.61156 0.333008 8.00054 0.333008C11.3879 0.333008 14.2606 2.52944 15.2753 5.57394C15.367 5.84883 15.367 6.14622 15.2756 6.42115C14.2621 9.46787 11.3883 11.6663 7.99937 11.6663C4.61197 11.6663 1.7393 9.46991 0.72457 6.42541C0.632951 6.15052 0.632864 5.85314 0.724321 5.5782ZM8 4.66634C7.26362 4.66634 6.66666 5.26329 6.66666 5.99967C6.66666 6.73605 7.26362 7.33301 8 7.33301C8.73638 7.33301 9.33333 6.73605 9.33333 5.99967C9.33333 5.26329 8.73638 4.66634 8 4.66634ZM5.33333 5.99967C5.33333 4.52692 6.52724 3.33301 8 3.33301C9.47276 3.33301 10.6667 4.52691 10.6667 5.99967C10.6667 7.47243 9.47276 8.66634 8 8.66634C6.52724 8.66634 5.33333 7.47243 5.33333 5.99967Z" fill="#2671D9"/>
                                                </svg>
                                                <span class="text-[#333333] mt-[10px] hover:text-[#2671D9]">View</span>
                                            </div>
                                            </router-link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- End data -->
                    </div>

                        <!-- Start Menampilkan -->
                        <div class="w-full max-w-[1170px] ml-4 py-3  flex justify-between">
                            <div class="flex">
                            <span class="text-sm text-[#333333] mt-[5px]">Menampilkan</span>
                            <div class="w-[44px] ml-4 relative data-container">
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
                                <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">
                                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20711 5.29289C7.59763 5.68342 7.59763 6.31658 7.20711 6.70711L2.20711 11.7071C1.81658 12.0976 1.18342 12.0976 0.792892 11.7071C0.402369 11.3166 0.402369 10.6834 0.792892 10.2929L5.08579 6L0.792893 1.70711C0.402369 1.31658 0.402369 0.683417 0.792893 0.292893C1.18342 -0.0976314 1.81658 -0.0976313 2.20711 0.292893L7.20711 5.29289Z" fill="#7F7F80"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <!-- akhir menampilkan -->
      </div>
    </div>
  </div>
</template>

<script >
import { ref } from 'vue';
const isFilterOpen = ref(false);
const isFilterTipe = ref(false);
const isFilterStatus = ref(false);
const filterStatus = ref('');
const isDataOpen = ref(false);

function toggleDataDropdown() {
    isDataOpen.value = !isDataOpen.value;
}

function filterDropdown() {
    isFilterOpen.value = !isFilterOpen.value;
    isFilterTipe.value = false;
    isFilterStatus.value = false;
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

// View
export default {
    data() {
        return {
            // View
            isViewVisible: false,
            isView1Visible: false,

            // Data
            isDataOpen,
            DataOption: '8',
            currentPage: 1,
            rowsPerPage: 8,
            filterType: '',
            filterStatus: '',
            FilterOptionStatus: '',
            searchQuery: '',
            filterClickListener: null,
            activeViewIndex: null,
            dataRows: [
                { id: 1, judul: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', pelaksana: 'Pusat', status:'Draft', statusap: 'Approval Manager', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 2, judul: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', pelaksana: 'Pusat',status:'Draft', statusap: 'Approval VP', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 3, judul: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', pelaksana: 'Pusat',status:'Draft', statusap: 'Approval Direksi', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 4, judul: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', pelaksana: 'Pusat',status:'Draft', statusap: 'Revisi', statusClass: 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]' },
                { id: 5, judul: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', pelaksana: 'Pusat',status:'Draft', statusap: 'Waiting Approval', statusClass: 'bg-[#FFF6E1] text-[#FFB200] border-[#FFD064]' },
                { id: 6, judul: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', pelaksana: 'Pusat',status:'Draft', statusap: 'Approval Manager', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 7, judul: 'NDA Penjajakan Kerja Sama berkaita', code: '300223', type: 'NDA', pelaksana: 'Pusat',status:'Draft', statusap: 'Approval Manager', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
                { id: 8, judul: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', pelaksana: 'Pusat',status:'Draft', statusap: 'Approval Manager', statusClass: 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]' },
            ]
            };
        },
computed: {
    searchedRows() {
        const searched = this.dataRows.filter((row) => {
        const searchQuery = this.searchQuery.toLowerCase();
        const titleMatch = row.judul.toLowerCase().includes(searchQuery);
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
        const statusMatch = filterStatus.value === '' || row.statusap === filterStatus.value;
            return typeMatch && statusMatch;
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
        const totalPages = this.searchQuery ? Math.ceil(this.searchedRows.filter(row => row.statusap === this.filterStatus.value).length / this.rowsPerPage) : Math.ceil(this.filteredRows.length / this.rowsPerPage);
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
        this.dataRows.sort((a, b) => a.judul.localeCompare(b.judul));
        } else {
        this.dataRows.sort((a, b) => b.judul.localeCompare(a.judul));
        }
    },
    // View
    toggleView1(index) {
        if (this.activeViewIndex === index) {
            this.activeViewIndex = null; 
        } else {
            this.activeViewIndex = index;
        }
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
            && !e.target.closest('.type-container') 
            && !e.target.closest('.status-container')
            && !e.target.closest('.data-container')) {
            isFilterOpen.value = false;
            isFilterTipe.value = false;
            isFilterStatus.value = false;
            isDataOpen.value = false;
        }
    };
    document.addEventListener('click', this.filterClickListener);
}
};
</script>
