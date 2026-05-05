<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Navadmin from '@/components/navadmin.vue';
import Sidemanager from '@/components/sidemanager.vue';
</script>

<template>
    <div class="flex">    
    <Sidemanager/>
    <div class="flex-grow min-w-0">
        <Navadmin/>
        <div class="h-[54px] flex">
                <router-link to="/Prosesadmin"><h1 class="text-[#2671D9] text-sm ml-6 mt-3">Proses</h1></router-link>
                <svg width="16" height="16" viewBox="0 0 16 16" class="mt-[19px] ml-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L6.20711 13.7071C5.81658 14.0976 5.18342 14.0976 4.79289 13.7071C4.40237 13.3166 4.40237 12.6834 4.79289 12.2929L9.08579 8L4.79289 3.70711C4.40237 3.31658 4.40237 2.68342 4.79289 2.29289C5.18342 1.90237 5.81658 1.90237 6.20711 2.29289L11.2071 7.29289Z" fill="#7F7F80"/>
                </svg>
                <h1 class="text-sm text-[#7F7F80] mt-3 ml-1">Detail Pengajuan</h1>
            </div>
        <div class="h-auto py-3 px-4 bg-slate-100">

            <!-- Start Content -->
            <div class="w-full max-w-[1217px] h-auto p-1 rounded-lg bg-white min-h-screen mx-auto">
                <div class="w-full max-w-[1170px] h-[56px] ml-4 mt-4 flex justify-between">
                    <div>
                    <div class="flex">
                        <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                        <h1 class="text-xl font-medium ml-[6px]">Detail Pengajuan</h1>
                    </div>
                    <span class="text-base text-[#9C9C9C] pl-4">#no_pengajuan</span>
                    </div>
                    <div class="w-[209px] h-[72px] border-[1px] border-[#E5E7E9] rounded-xl">
                        <div class="w-auto h-[29px] bg-[#FFB200] rounded-t-xl text-[10px] text-[#333333] px-4 py-[7px]">Progres Kemitraan</div>
                        <div class="text-[#FFB200] text-lg font-bold flex px-4">
                            <span class="py-2">Proposal</span>
                            <svg width="60" height="60" @click="openAlur" class="cursor-pointer translate-x-[50px] -translate-y-[1px]" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_1290_22642)">
                                <g opacity="0.4" filter="url(#filter1_d_1290_22642)">
                                <path d="M19 26C23.1421 26 26.5 22.6421 26.5 18.5C26.5 14.3579 23.1421 11 19 11C14.8579 11 11.5 14.3579 11.5 18.5C11.5 22.6421 14.8579 26 19 26Z" fill="#FFB200"/>
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3536 18.6464C21.5488 18.8417 21.5488 19.1583 21.3536 19.3536L18.8536 21.8536C18.6583 22.0488 18.3417 22.0488 18.1464 21.8536C17.9512 21.6583 17.9512 21.3417 18.1464 21.1464L20.2929 19L18.1464 16.8536C17.9512 16.6583 17.9512 16.3417 18.1464 16.1464C18.3417 15.9512 18.6583 15.9512 18.8536 16.1464L21.3536 18.6464Z" fill="#F08800"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_1290_22642" x="6" y="6.5" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.778759 0 0 0 0 0.267318 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_22642"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_22642" result="shape"/>
                                </filter>
                                <filter id="filter1_d_1290_22642" x="0.5" y="0" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="4" dy="4"/>
                                <feGaussianBlur stdDeviation="7.5"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1290_22642"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1290_22642" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-4">
                    <!-- Informasi Umum -->
                    <div class="w-full max-w-[1170px] h-auto border-[1px] rounded-lg ml-4">
                        <button @click="informasiDropdown" class="flex w-full h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#4791F2] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Informasi Umum</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[968px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownInformasi ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownInformasi" class="px-6 mt-6">
                            <div class="flex mt-6">
                            <div class="ml-6">
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">No. Permintaan</h1>
                                    <span class="text-[#7F7F80]">370.526.7356</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Judul</h1>
                                    <span class="text-[#7F7F80]">Uji Coba Aplikasi Kemitraan</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Nomor Anggaran</h1>
                                    <span class="text-[#7F7F80]">2024113</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Tipe Anggaran</h1>
                                    <span class="text-[#7F7F80]">Capex</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Calon Mitra Bisnis</h1>
                                    <span class="text-[#7F7F80]">Lorem ipsum</span>
                                </div>
                            </div>
                            <div>
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">Metode Kemitraan</h1>
                                    <span class="text-[#7F7F80]">Tunjuk Langsung</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Jenis Material</h1>
                                    <span class="text-[#7F7F80]">Material Only</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Jenis Barang</h1>
                                    <span class="text-[#7F7F80]">Lorem ipsum</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Pelaksana</h1>
                                    <span class="text-[#7F7F80]">Derek Klocko</span>
                                </div>
                            </div>
                            </div>
                            <svg width="1170" height="1" class="mt-6 -translate-x-6" viewBox="0 0 1200 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="1200" height="0" transform="translate(0 1)" fill="white"/>
                                <line y1="0.5" x2="1200" y2="0.5" stroke="#E5E7E9"/>
                            </svg>
                            <div class="flex py-4">
                            <div class="ml-6">
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">Latar Belakang</h1>
                                    <span class="w-[317px] text-[#7F7F80]">Lorem ipsum dolor sit amet consectetur. Sit tempor tellus ut porttitor. Egestas id tristique at viverra pharetra. Scelerisque sapien commodo scelerisque mattis tortor. Id quam id vitae auctor vitae tristique ultrices facilisis est.</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Dibuat Oleh</h1>
                                    <span class="text-[#7F7F80]">Kenny Carol</span>
                                </div>
                            </div>
                            <div>
                                <div class="w-[541px] flex text-[#333333]">
                                    <h1 class="w-[150px]">Catatan</h1>
                                    <span class="w-[317px] text-[#7F7F80]">Lorem ipsum dolor sit amet consectetur. Sit tempor tellus ut porttitor. Egestas id tristique at viverra pharetra. Scelerisque sapien commodo scelerisque mattis tortor. Id quam id vitae auctor vitae tristique ultrices facilisis est.</span>
                                </div>
                                <div class="w-[541px] flex mt-6 text-[#333333]">
                                    <h1 class="w-[150px]">Tanggal</h1>
                                    <span class="text-[#7F7F80]">21/3/2023</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- Lingkup Pekerjaan -->
                    <div class="w-full max-w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="pekerjaanDropdown" class="flex w-full h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#FFA229] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Lingkup Pekerjaan</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[956px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownPekerjaan ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownPekerjaan" class="px-6 mt-6">
                        <h1 class="text-[#333333]">Calon Mitra Bisnis</h1>
                        <span class="text-[#7F7F80]">-</span>
                        <div class="w-full max-w-[1120px] overflow-auto rounded-lg border-[1px] mb-3 mt-3">
                        <table class="table-auto w-full text-left ">
                            <!-- Kolom -->
                            <thead class="text-xs h-[48px] text-[#4D5E80] rounded-lg">
                                <tr class="bg-none border-b-2">
                                    <th class="w-[74px] px-3 py-[18px]"><div class="flex justify-between">No.
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div></th>
                                    <th class="w-[924px] px-3"><div class="flex justify-between">Judul                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                </tr>
                            </thead>
                            <!-- Baris -->
                            <tbody class="">  
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">1</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">2</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">3</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <!-- tambahkan baris tabel lainnya disini -->
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>

                    <!-- Informasi RAB -->
                    <div class="w-full max-w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="rabDropdown" class="flex w-full h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#0FB37D] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Informasi RAB</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[986px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownRab ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownRab" class="px-6 mt-6">
                        <div class="w-full max-w-[1120px] overflow-auto rounded-lg border-[1px] mb-3 mt-3">
                        <table class="table-auto w-full text-left ">
                            <!-- Kolom -->
                            <thead class="text-xs h-[48px] text-[#4D5E80] rounded-lg">
                                <tr class="bg-none border-b-2">
                                    <th class="w-[74px] px-3 py-[18px]"><div class="flex justify-between">No.
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div></th>
                                    <th class="w-[231px] px-3"><div class="flex justify-between">Aksi                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                    <th class="w-[231px] px-3"><div class="flex justify-between">Deskripsi                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                    <th class="w-[300px] px-3"><div class="flex justify-between">Pelanggan                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                    <th class="w-[200px] px-3"><div class="flex justify-between">PLN/Non PLN                                    
                                        <svg width="16" height="16" class="cursor-pointer" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4252 3.14404C11.7073 3.14404 11.9359 3.36467 11.9359 3.63684L11.9359 11.3174L14.1282 9.20189C14.3276 9.00944 14.651 9.00944 14.8504 9.20189C15.0499 9.39434 15.0499 9.70636 14.8504 9.89881L11.7863 12.8556C11.6906 12.948 11.5607 12.9999 11.4252 12.9999C11.2898 12.9999 11.1599 12.948 11.0641 12.8556L8.00001 9.89881C7.80057 9.70636 7.80057 9.39434 8.00001 9.20189C8.19944 9.00944 8.52279 9.00944 8.72223 9.20189L10.9145 11.3174L10.9145 3.63684C10.9145 3.36467 11.1432 3.14404 11.4252 3.14404Z" fill="#93B8EC"/>
                                            <path d="M4.21369 3.14482C4.41312 2.95238 4.73647 2.95238 4.9359 3.14482L8.00001 6.10158C8.19945 6.29403 8.19945 6.60605 8.00001 6.79849C7.80058 6.99094 7.47723 6.99094 7.27779 6.79849L5.08548 4.68299V12.3635C5.08548 12.6357 4.85684 12.8563 4.57479 12.8563C4.29275 12.8563 4.06411 12.6357 4.06411 12.3635V4.68299L1.87179 6.79849C1.67236 6.99094 1.34901 6.99094 1.14958 6.79849C0.950141 6.60605 0.950141 6.29403 1.14958 6.10158L4.21369 3.14482Z" fill="#93B8EC"/>
                                        </svg></div>
                                    </th>
                                </tr>
                            </thead>
                            <!-- Baris -->
                            <tbody class="">  
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">1</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">2</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">3</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">4</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">5</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">6</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">7</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <tr class="bg-white border-b text-sm text-[#333333]">                          
                                    <td class="px-3 py-[18px]">8</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                    <td class="px-3">Lorem ipsum dolor sit amet</td>
                                </tr>
                                <!-- tambahkan baris tabel lainnya disini -->
                            </tbody>
                        </table>
                    </div>
                    </div>
                
                    </div>

                    <!-- Berkas Lampiran -->
                    <div class="w-full max-w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="berkasDropdown" class="flex w-full h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#F42495] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Berkas Lampiran</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[968px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownBerkas ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownBerkas">
                        <div class="px-6 mt-6 mb-4 flex justify-between">
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKB <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKR <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKF <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>  
                        </div>
                        <div class="px-6 mt-6 mb-4 flex justify-between">
                        <div>
                            <label class="text-[#4D5E80] font-semibold">KKO <span class="text-[#FF5656] text-xs">*</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Proposal Mitra <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Dokumen Surat Menyurat <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>  
                        </div>
                        <div class="px-6 mt-6 mb-4">
                            <label class="text-[#4D5E80] font-semibold">Dokumen Lainnya <span class="text-[#B3B3B3] text-xs">(Opsional)</span></label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">namadokumen.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    </div>

                    <!-- Progres Kemitraan -->
                    <div class="w-full max-w-[1170px] h-auto border-[1px] rounded-lg mt-4 ml-4">
                        <button @click="progresDropdown" class="flex w-full h-[48px] rounded-lg border-b-[1px]"><div class="w-[30px] h-[49px] bg-[#CE8861] -translate-y-[1px] rounded-s-lg"></div>
                        <h1 class="text-base font-semibold ml-[10px] mt-[12px]">Dokumen Progress Kemitraan</h1>
                        <svg width="12" height="8" class="mt-[22px] translate-x-[870px]" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" :d="dropdownProgres ? 'M6.70711 7.20711C6.31658 7.59763 5.68342 7.59763 5.29289 7.20711L0.292893 2.20711C-0.0976316 1.81658 -0.0976317 1.18342 0.292893 0.792893C0.683417 0.402369 1.31658 0.402369 1.70711 0.792893L6 5.08579L10.2929 0.792893C10.6834 0.402369 11.3166 0.402369 11.7071 0.792893C12.0976 1.18342 12.0976 1.81658 11.7071 2.20711L6.70711 7.20711Z' : 'M5.29289 0.792893C5.68342 0.402369 6.31658 0.402369 6.70711 0.792893L11.7071 5.79289C12.0976 6.18342 12.0976 6.81658 11.7071 7.20711C11.3166 7.59763 10.6834 7.59763 10.2929 7.20711L6 2.91421L1.70711 7.20711C1.31658 7.59763 0.683417 7.59763 0.292893 7.20711C-0.0976317 6.81658 -0.0976316 6.18342 0.292893 5.79289L5.29289 0.792893Z'" fill="#2671D9"/>
                        </svg></button>
                        <div v-if="dropdownProgres">
                        <div class="px-6 mt-6 mb-4 flex justify-between">
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Surat Penawaran</label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">Surat_Penawaran.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>   
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Proposal</label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">proposal.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-[#4D5E80] font-semibold">Evaluasi</label> 
                            <div class="w-[333px] h-auto border-[1px] flex rounded-lg mt-2 items-center">
                                <svg width="45" height="46" class="mx-4 my-2" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="23" r="22.5" fill="#E9F1FB"/>
                                    <path d="M30 20.1312C29.9902 20.0451 29.9714 19.9603 29.9437 19.8781V19.7937C29.8987 19.6974 29.8385 19.6087 29.7656 19.5313L24.1406 13.9062C24.0631 13.8333 23.9745 13.7732 23.8781 13.7281H23.7937C23.6985 13.6735 23.5933 13.6384 23.4844 13.625H17.8125C17.0666 13.625 16.3512 13.9213 15.8238 14.4488C15.2963 14.9762 15 15.6916 15 16.4375V29.5625C15 30.3084 15.2963 31.0238 15.8238 31.5512C16.3512 32.0787 17.0666 32.375 17.8125 32.375H27.1875C27.9334 32.375 28.6488 32.0787 29.1762 31.5512C29.7037 31.0238 30 30.3084 30 29.5625V20.1875V20.1312ZM24.375 16.8219L26.8031 19.25H25.3125C25.0639 19.25 24.8254 19.1512 24.6496 18.9754C24.4738 18.7996 24.375 18.5611 24.375 18.3125V16.8219ZM28.125 29.5625C28.125 29.8111 28.0262 30.0496 27.8504 30.2254C27.6746 30.4012 27.4361 30.5 27.1875 30.5H17.8125C17.5639 30.5 17.3254 30.4012 17.1496 30.2254C16.9738 30.0496 16.875 29.8111 16.875 29.5625V16.4375C16.875 16.1889 16.9738 15.9504 17.1496 15.7746C17.3254 15.5988 17.5639 15.5 17.8125 15.5H22.5V18.3125C22.5 19.0584 22.7963 19.7738 23.3238 20.3012C23.8512 20.8287 24.5666 21.125 25.3125 21.125H28.125V29.5625Z" fill="#2671D9"/>
                                </svg>
                                <div class="py-2 w-[200px] flex-grow">
                                    <span class="text-[#333333] text-sm font-semibold">evaluasi.pdf</span>
                                    <p class="text-[#9E9E9E] text-xs">2 MB</p>
                                </div>
                            </div>
                        </div>  
                        </div>
                    </div>
                    </div>
                </div>

                <div class="w-full max-w-[1170px] mt-4 ml-4 mb-4 flex justify-between">
                    <div>
                        <h1 class="text-base text-[#4D5E80] font-semibold">Tanggapan</h1>
                        <div class="w-[561px] h-[88px] bg-[#E0E0E0] border-[1px] border-[#E5E7E9] rounded-lg mt-2">
                            <p class="text-[#333333] px-4 py-3 text-sm">Lorem ipsum dolor sit amet consectetur. Pretium quis amet quam.</p>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-base text-[#4D5E80] font-semibold">Approval</h1>
                        <div class="w-[561px] h-[88px] bg-[#E0E0E0] border-[1px] border-[#E5E7E9] rounded-lg mt-2">
                            <p class="text-[#333333] px-4 py-3 text-sm">Lorem ipsum dolor sit amet consectetur. Pretium quis amet quam.</p>
                        </div>
                    </div>
                </div>

                <svg width="1170" height="1" class="ml-4" viewBox="0 0 1170 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1170" height="0" transform="translate(0 1)" fill="white"/>
                    <line y1="0.5" x2="1170" y2="0.5" stroke="#E5E7E9"/>
                </svg>
            </div>
            <!-- End Content -->

            <!-- Pop Up Alur PKS -->
                <div>
                    <!-- Alur -->
                    <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div class="bg-white rounded-lg shadow-lg w-[684.92px] h-[450px]">
                            <div class="flex ml-[20px] mt-[20px]">
                                <div class="w-[6px] h-7 bg-[#2671D9]"></div>
                                <h1 class="text-xl font-medium ml-[6px]">Progres Kemitraan</h1>
                                <svg width="38" height="30" @click="closeSend" class="ml-[430px] cursor-pointer" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0063 15.0063C14.348 14.6646 14.902 14.6646 15.2437 15.0063L19 18.7626L22.7563 15.0063C23.098 14.6646 23.652 14.6646 23.9937 15.0063C24.3354 15.348 24.3354 15.902 23.9937 16.2437L20.2374 20L23.9937 23.7563C24.3354 24.098 24.3354 24.652 23.9937 24.9937C23.652 25.3354 23.098 25.3354 22.7563 24.9937L19 21.2374L15.2437 24.9937C14.902 25.3354 14.348 25.3354 14.0063 24.9937C13.6646 24.652 13.6646 24.098 14.0063 23.7563L17.7626 20L14.0063 16.2437C13.6646 15.902 13.6646 15.348 14.0063 15.0063Z" fill="#2671D9"/>
                                </svg>
                            </div>
                            <span class="text-base text-[#9C9C9C] ml-[20px]">$judul_pengajuan</span>

                            <div class="w-[650px] h-[310px] ml-[20px] mt-6">
                                <div class="flex w-auto h-[130px]">
                                    <!-- Surat Penawaran -->
                                    <!-- Upload -->
                                    <!-- <div class="w-[289px] ml-[18px] h-auto border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#E0E0E0] rounded-t-lg"><span class="font-semibold ml-4 absolute translate-y-2">Surat Penawaran</span></div>
                                            <span class="text-[#333333] text-xs ml-3">Dokumen Surat Penawaran</span>
                                            <div class="ml-3 mt-3">
                                                <button class="w-[73px] h-[25px] bg-[#E0E0E0] rounded-lg flex py-2">
                                                    <svg width="10" height="9" class="ml-[14.12px]" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_2261_4135)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79378 2.13053C3.93803 2.13053 3.2443 2.82426 3.2443 3.68001C3.2443 3.77881 3.2535 3.87512 3.271 3.96824C3.30473 4.14782 3.20033 4.32463 3.02679 4.38182C2.51744 4.54968 2.15055 5.02951 2.15055 5.59407C2.15055 6.29881 2.72186 6.87012 3.42659 6.87012H7.52816C8.08188 6.87012 8.53076 6.42124 8.53076 5.86751C8.53076 5.43975 8.26271 5.07368 7.88416 4.92985C7.69935 4.85963 7.60418 4.65491 7.66962 4.46836C7.69596 4.39326 7.71045 4.31216 7.71045 4.22689C7.71045 3.82418 7.38399 3.49772 6.98128 3.49772C6.90208 3.49772 6.82651 3.51022 6.75603 3.53308C6.66084 3.56395 6.55714 3.55433 6.46925 3.50649C6.38136 3.45864 6.31699 3.37677 6.29125 3.28007C6.11496 2.61791 5.51082 2.13053 4.79378 2.13053ZM2.51514 3.68001C2.51514 2.42155 3.53532 1.40137 4.79378 1.40137C5.72976 1.40137 6.53326 1.96543 6.8841 2.77176C6.91625 2.76963 6.94866 2.76855 6.98128 2.76855C7.7867 2.76855 8.43962 3.42147 8.43962 4.22689C8.43962 4.28171 8.43657 4.33591 8.43064 4.3893C8.92769 4.69338 9.25993 5.24132 9.25993 5.86751C9.25993 6.82394 8.48459 7.59928 7.52816 7.59928H3.42659C2.31915 7.59928 1.42139 6.70152 1.42139 5.59407C1.42139 4.81305 1.86772 4.13701 2.51856 3.80588C2.51629 3.76418 2.51514 3.72222 2.51514 3.68001ZM5.08286 3.42221C5.22524 3.27983 5.45608 3.27983 5.59846 3.42221L6.69221 4.51596C6.83459 4.65834 6.83459 4.88918 6.69221 5.03156C6.54983 5.17394 6.31899 5.17394 6.17661 5.03156L5.70524 4.56019L5.70524 6.14095C5.70524 6.3423 5.54201 6.50553 5.34066 6.50553C5.1393 6.50553 4.97607 6.3423 4.97607 6.14095L4.97607 4.56019L4.50471 5.03156C4.36233 5.17394 4.13149 5.17394 3.98911 5.03156C3.84673 4.88918 3.84673 4.65834 3.98911 4.51596L5.08286 3.42221Z" fill="#7F7F80"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_2261_4135">
                                                        <rect width="8.75" height="8.75" fill="white" transform="translate(0.96582 0.125)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="text-[#7F7F80] text-[8.75px] font-semibold -translate-y-[2px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Tenggat -->
                                    <!-- <div class="w-[289px] ml-[18px] h-auto border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#FF5656] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">Surat Penawaran</span></div>
                                            <span class="text-[#333333] text-xs ml-3">Dokumen Surat Penawaran</span>
                                            <div class="ml-3 -translate-y-2"><span class="text-[8px] text-[#FF5656]">Progress kemitraan melewati tenggat waktu yang telah ditentukan. </span></div>
                                            <div class="ml-3">
                                                <button class="w-[73px] h-[25px] bg-[#2671D9] rounded-lg flex py-2">
                                                    <svg width="9" height="7" class="ml-[14.12px]" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z" fill="white"/>
                                                    </svg>
                                                    <span class="text-white text-[8.75px] font-semibold -translate-y-[3px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Berhasil -->
                                    <div class="w-[289px] h-auto border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#0EA976] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">Surat Penawaran</span></div>
                                        <div class="w-[265px] h-[18px] flex justify-between ml-3 mt-[10px]">
                                            <span class="text-[#333333] text-xs">Dokumen Surat Penawaran</span>
                                            <svg width="46" height="46" class="-translate-y-2 translate-x-5 " viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_685_22194)">
                                                <g opacity="0.4" filter="url(#filter1_d_685_22194)">
                                                <path d="M19 26.5C23.1421 26.5 26.5 23.1421 26.5 19C26.5 14.8579 23.1421 11.5 19 11.5C14.8579 11.5 11.5 14.8579 11.5 19C11.5 23.1421 14.8579 26.5 19 26.5Z" fill="#8ADFC3"/>
                                                </g>
                                                <path d="M18.3081 22.1256C18.1581 22.1256 18.0156 22.0656 17.9106 21.9606L15.7881 19.8381C15.5706 19.6206 15.5706 19.2606 15.7881 19.0431C16.0056 18.8256 16.3656 18.8256 16.5831 19.0431L18.3081 20.7681L22.1631 16.9131C22.3806 16.6956 22.7406 16.6956 22.9581 16.9131C23.1756 17.1306 23.1756 17.4906 22.9581 17.7081L18.7056 21.9606C18.6006 22.0656 18.4581 22.1256 18.3081 22.1256Z" fill="#0C8D63"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_685_22194" x="6" y="7" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="1"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.662745 0 0 0 0 0.462745 0 0 0 0.15 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_22194"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_22194" result="shape"/>
                                                </filter>
                                                <filter id="filter1_d_685_22194" x="0.5" y="0.5" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="4" dy="4"/>
                                                <feGaussianBlur stdDeviation="7.5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_22194"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_22194" result="shape"/>
                                                </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div class="w-[265px] h-auto flex ml-3 py-[10px]">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="14.5652" cy="14.5652" r="14.5652" fill="#E2FCF3"/>
                                                <path d="M19.4206 12.7088C19.4143 12.6531 19.4021 12.5982 19.3842 12.545V12.4904C19.355 12.428 19.3161 12.3706 19.2689 12.3204L15.6276 8.67914C15.5774 8.63193 15.52 8.59301 15.4576 8.56383H15.403C15.3414 8.52847 15.2733 8.50578 15.2027 8.49707H11.5311C11.0482 8.49707 10.5851 8.68889 10.2437 9.03033C9.90227 9.37177 9.71045 9.83486 9.71045 10.3177V18.8141C9.71045 19.297 9.90227 19.7601 10.2437 20.1015C10.5851 20.4429 11.0482 20.6348 11.5311 20.6348H17.5999C18.0828 20.6348 18.5459 20.4429 18.8873 20.1015C19.2288 19.7601 19.4206 19.297 19.4206 18.8141V12.7453V12.7088ZM15.7793 10.5665L17.3511 12.1384H16.3862C16.2252 12.1384 16.0709 12.0744 15.957 11.9606C15.8432 11.8468 15.7793 11.6924 15.7793 11.5315V10.5665ZM18.2068 18.8141C18.2068 18.9751 18.1429 19.1294 18.0291 19.2432C17.9153 19.357 17.7609 19.421 17.5999 19.421H11.5311C11.3701 19.421 11.2158 19.357 11.102 19.2432C10.9882 19.1294 10.9242 18.9751 10.9242 18.8141V10.3177C10.9242 10.1568 10.9882 10.0024 11.102 9.88859C11.2158 9.77478 11.3701 9.71084 11.5311 9.71084H14.5655V11.5315C14.5655 12.0144 14.7573 12.4774 15.0988 12.8189C15.4402 13.1603 15.9033 13.3521 16.3862 13.3521H18.2068V18.8141Z" fill="#0EA976"/>
                                            </svg>
                                            <div class="ml-[13px] -translate-y-2">
                                                <span class="text-[#333333] text-[9.06px] font-semibold">suratpenawaran.pdf</span>
                                                <p class="text-[#9E9E9E] text-[7.77px]">2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    <svg width="33" height="28" class="ml-[18px] mt-[51px]" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.75 6.91797L31.8317 13.9996L24.75 21.0813" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1 14H30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                    <!-- Proposal -->
                                    <!-- Progres -->
                                    <!-- <div class="w-[289px] ml-[18px] h-auto border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#E0E0E0] rounded-t-lg"><span class="font-semibold ml-4 absolute translate-y-2">Proposal</span></div>
                                            <span class="text-[#7F7F80] text-xs ml-3">Dokumen Proposal</span>
                                            <div class="ml-3 mt-3">
                                                <button class="w-[73px] h-[25px] bg-[#E0E0E0] rounded-lg flex py-2">
                                                    <svg width="10" height="9" class="ml-[14.12px]" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_2261_4135)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79378 2.13053C3.93803 2.13053 3.2443 2.82426 3.2443 3.68001C3.2443 3.77881 3.2535 3.87512 3.271 3.96824C3.30473 4.14782 3.20033 4.32463 3.02679 4.38182C2.51744 4.54968 2.15055 5.02951 2.15055 5.59407C2.15055 6.29881 2.72186 6.87012 3.42659 6.87012H7.52816C8.08188 6.87012 8.53076 6.42124 8.53076 5.86751C8.53076 5.43975 8.26271 5.07368 7.88416 4.92985C7.69935 4.85963 7.60418 4.65491 7.66962 4.46836C7.69596 4.39326 7.71045 4.31216 7.71045 4.22689C7.71045 3.82418 7.38399 3.49772 6.98128 3.49772C6.90208 3.49772 6.82651 3.51022 6.75603 3.53308C6.66084 3.56395 6.55714 3.55433 6.46925 3.50649C6.38136 3.45864 6.31699 3.37677 6.29125 3.28007C6.11496 2.61791 5.51082 2.13053 4.79378 2.13053ZM2.51514 3.68001C2.51514 2.42155 3.53532 1.40137 4.79378 1.40137C5.72976 1.40137 6.53326 1.96543 6.8841 2.77176C6.91625 2.76963 6.94866 2.76855 6.98128 2.76855C7.7867 2.76855 8.43962 3.42147 8.43962 4.22689C8.43962 4.28171 8.43657 4.33591 8.43064 4.3893C8.92769 4.69338 9.25993 5.24132 9.25993 5.86751C9.25993 6.82394 8.48459 7.59928 7.52816 7.59928H3.42659C2.31915 7.59928 1.42139 6.70152 1.42139 5.59407C1.42139 4.81305 1.86772 4.13701 2.51856 3.80588C2.51629 3.76418 2.51514 3.72222 2.51514 3.68001ZM5.08286 3.42221C5.22524 3.27983 5.45608 3.27983 5.59846 3.42221L6.69221 4.51596C6.83459 4.65834 6.83459 4.88918 6.69221 5.03156C6.54983 5.17394 6.31899 5.17394 6.17661 5.03156L5.70524 4.56019L5.70524 6.14095C5.70524 6.3423 5.54201 6.50553 5.34066 6.50553C5.1393 6.50553 4.97607 6.3423 4.97607 6.14095L4.97607 4.56019L4.50471 5.03156C4.36233 5.17394 4.13149 5.17394 3.98911 5.03156C3.84673 4.88918 3.84673 4.65834 3.98911 4.51596L5.08286 3.42221Z" fill="#7F7F80"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_2261_4135">
                                                        <rect width="8.75" height="8.75" fill="white" transform="translate(0.96582 0.125)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="text-[#7F7F80] text-[8.75px] font-semibold -translate-y-[2px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Upload -->
                                    <!-- <div class="w-[289px] ml-[18px] h-auto border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#FFB200] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">Proposal</span></div>
                                            <span class="text-[#333333] text-xs ml-3">Dokumen Proposal</span>
                                            <div class="ml-3 mt-3">
                                                <button class="w-[73px] h-[25px] bg-[#2671D9] rounded-lg flex py-2">
                                                    <svg width="9" height="7" class="ml-[14.12px]" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z" fill="white"/>
                                                    </svg>
                                                    <span class="text-white text-[8.75px] font-semibold -translate-y-[3px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Tenggat -->
                                    <!-- <div class="w-[289px] ml-[18px] h-auto border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#FF5656] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">Proposal</span></div>
                                            <span class="text-[#333333] text-xs ml-3">Dokumen Proposal</span>
                                            <div class="ml-3 -translate-y-2"><span class="text-[8px] text-[#FF5656]">Progress kemitraan melewati tenggat waktu yang telah ditentukan. </span></div>
                                            <div class="ml-3">
                                                <button class="w-[73px] h-[25px] bg-[#2671D9] rounded-lg flex py-2">
                                                    <svg width="9" height="7" class="ml-[14.12px]" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z" fill="white"/>
                                                    </svg>
                                                    <span class="text-white text-[8.75px] font-semibold -translate-y-[3px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Berhasil -->
                                    <div class="w-[289px] h-auto border-[1px] ml-[18px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#0EA976] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">Proposal</span></div>
                                        <div class="w-[265px] h-[18px] flex justify-between ml-3 mt-[10px]">
                                            <span class="text-[#333333] text-xs">Dokumen Proposal</span>
                                            <svg width="46" height="46" class="-translate-y-2 translate-x-5 " viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_685_22194)">
                                                <g opacity="0.4" filter="url(#filter1_d_685_22194)">
                                                <path d="M19 26.5C23.1421 26.5 26.5 23.1421 26.5 19C26.5 14.8579 23.1421 11.5 19 11.5C14.8579 11.5 11.5 14.8579 11.5 19C11.5 23.1421 14.8579 26.5 19 26.5Z" fill="#8ADFC3"/>
                                                </g>
                                                <path d="M18.3081 22.1256C18.1581 22.1256 18.0156 22.0656 17.9106 21.9606L15.7881 19.8381C15.5706 19.6206 15.5706 19.2606 15.7881 19.0431C16.0056 18.8256 16.3656 18.8256 16.5831 19.0431L18.3081 20.7681L22.1631 16.9131C22.3806 16.6956 22.7406 16.6956 22.9581 16.9131C23.1756 17.1306 23.1756 17.4906 22.9581 17.7081L18.7056 21.9606C18.6006 22.0656 18.4581 22.1256 18.3081 22.1256Z" fill="#0C8D63"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_685_22194" x="6" y="7" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="1"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.662745 0 0 0 0 0.462745 0 0 0 0.15 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_22194"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_22194" result="shape"/>
                                                </filter>
                                                <filter id="filter1_d_685_22194" x="0.5" y="0.5" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="4" dy="4"/>
                                                <feGaussianBlur stdDeviation="7.5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_22194"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_22194" result="shape"/>
                                                </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div class="w-[265px] h-auto flex ml-3 py-[10px]">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="14.5652" cy="14.5652" r="14.5652" fill="#E2FCF3"/>
                                                <path d="M19.4206 12.7088C19.4143 12.6531 19.4021 12.5982 19.3842 12.545V12.4904C19.355 12.428 19.3161 12.3706 19.2689 12.3204L15.6276 8.67914C15.5774 8.63193 15.52 8.59301 15.4576 8.56383H15.403C15.3414 8.52847 15.2733 8.50578 15.2027 8.49707H11.5311C11.0482 8.49707 10.5851 8.68889 10.2437 9.03033C9.90227 9.37177 9.71045 9.83486 9.71045 10.3177V18.8141C9.71045 19.297 9.90227 19.7601 10.2437 20.1015C10.5851 20.4429 11.0482 20.6348 11.5311 20.6348H17.5999C18.0828 20.6348 18.5459 20.4429 18.8873 20.1015C19.2288 19.7601 19.4206 19.297 19.4206 18.8141V12.7453V12.7088ZM15.7793 10.5665L17.3511 12.1384H16.3862C16.2252 12.1384 16.0709 12.0744 15.957 11.9606C15.8432 11.8468 15.7793 11.6924 15.7793 11.5315V10.5665ZM18.2068 18.8141C18.2068 18.9751 18.1429 19.1294 18.0291 19.2432C17.9153 19.357 17.7609 19.421 17.5999 19.421H11.5311C11.3701 19.421 11.2158 19.357 11.102 19.2432C10.9882 19.1294 10.9242 18.9751 10.9242 18.8141V10.3177C10.9242 10.1568 10.9882 10.0024 11.102 9.88859C11.2158 9.77478 11.3701 9.71084 11.5311 9.71084H14.5655V11.5315C14.5655 12.0144 14.7573 12.4774 15.0988 12.8189C15.4402 13.1603 15.9033 13.3521 16.3862 13.3521H18.2068V18.8141Z" fill="#0EA976"/>
                                            </svg>
                                            <div class="ml-[13px] -translate-y-2">
                                                <span class="text-[#333333] text-[9.06px]">proposal.pdf</span>
                                                <p class="text-[#9E9E9E] text-[7.77px]">2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 

                                <div class="flex justify-end w-[500px] mt-[18px]">
                                    <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.1221 24.75L14.3405 31.8317L7.55898 24.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.3408 1L14.3408 30.64" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div> 
                                <div class="flex justify-end">
                                <!-- PKS -->
                                <!-- Progres -->
                                    <!-- <div class="w-[289px] mt-[18px] h-[130px] border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#E0E0E0] rounded-t-lg"><span class="font-semibold ml-4 absolute translate-y-2">PKS</span></div>
                                            <span class="text-[#7F7F80] text-xs ml-3">Dokumen PKS</span>
                                            <div class="ml-3 mt-3">
                                                <button class="w-[73px] h-[25px] bg-[#E0E0E0] rounded-lg flex py-2">
                                                    <svg width="10" height="9" class="ml-[14.12px]" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_2261_4135)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79378 2.13053C3.93803 2.13053 3.2443 2.82426 3.2443 3.68001C3.2443 3.77881 3.2535 3.87512 3.271 3.96824C3.30473 4.14782 3.20033 4.32463 3.02679 4.38182C2.51744 4.54968 2.15055 5.02951 2.15055 5.59407C2.15055 6.29881 2.72186 6.87012 3.42659 6.87012H7.52816C8.08188 6.87012 8.53076 6.42124 8.53076 5.86751C8.53076 5.43975 8.26271 5.07368 7.88416 4.92985C7.69935 4.85963 7.60418 4.65491 7.66962 4.46836C7.69596 4.39326 7.71045 4.31216 7.71045 4.22689C7.71045 3.82418 7.38399 3.49772 6.98128 3.49772C6.90208 3.49772 6.82651 3.51022 6.75603 3.53308C6.66084 3.56395 6.55714 3.55433 6.46925 3.50649C6.38136 3.45864 6.31699 3.37677 6.29125 3.28007C6.11496 2.61791 5.51082 2.13053 4.79378 2.13053ZM2.51514 3.68001C2.51514 2.42155 3.53532 1.40137 4.79378 1.40137C5.72976 1.40137 6.53326 1.96543 6.8841 2.77176C6.91625 2.76963 6.94866 2.76855 6.98128 2.76855C7.7867 2.76855 8.43962 3.42147 8.43962 4.22689C8.43962 4.28171 8.43657 4.33591 8.43064 4.3893C8.92769 4.69338 9.25993 5.24132 9.25993 5.86751C9.25993 6.82394 8.48459 7.59928 7.52816 7.59928H3.42659C2.31915 7.59928 1.42139 6.70152 1.42139 5.59407C1.42139 4.81305 1.86772 4.13701 2.51856 3.80588C2.51629 3.76418 2.51514 3.72222 2.51514 3.68001ZM5.08286 3.42221C5.22524 3.27983 5.45608 3.27983 5.59846 3.42221L6.69221 4.51596C6.83459 4.65834 6.83459 4.88918 6.69221 5.03156C6.54983 5.17394 6.31899 5.17394 6.17661 5.03156L5.70524 4.56019L5.70524 6.14095C5.70524 6.3423 5.54201 6.50553 5.34066 6.50553C5.1393 6.50553 4.97607 6.3423 4.97607 6.14095L4.97607 4.56019L4.50471 5.03156C4.36233 5.17394 4.13149 5.17394 3.98911 5.03156C3.84673 4.88918 3.84673 4.65834 3.98911 4.51596L5.08286 3.42221Z" fill="#7F7F80"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_2261_4135">
                                                        <rect width="8.75" height="8.75" fill="white" transform="translate(0.96582 0.125)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span class="text-[#7F7F80] text-[8.75px] font-semibold -translate-y-[2px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Upload -->
                                    <!-- <div class="w-[289px] mt-[18px] h-[130px] border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#FFB200] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">PKS</span></div>
                                            <span class="text-[#333333] text-xs ml-3">Dokumen PKS</span>
                                            <div class="ml-3 mt-3">
                                                <button class="w-[73px] h-[25px] bg-[#2671D9] rounded-lg flex py-2">
                                                    <svg width="9" height="7" class="ml-[14.12px]" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z" fill="white"/>
                                                    </svg>
                                                    <span class="text-white text-[8.75px] font-semibold -translate-y-[3px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Tenggat -->
                                    <!-- <div class="w-[289px] mt-[18px] h-[130px] border-[1px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#FF5656] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">PKS</span></div>
                                            <span class="text-[#333333] text-xs ml-3">Dokumen PKS</span>
                                            <div class="ml-3 -translate-y-2"><span class="text-[8px] text-[#FF5656]">Progress kemitraan melewati tenggat waktu yang telah ditentukan. </span></div>
                                            <div class="ml-3">
                                                <button class="w-[73px] h-[25px] bg-[#2671D9] rounded-lg flex py-2">
                                                    <svg width="9" height="7" class="ml-[14.12px]" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.87337 1.13053C3.01762 1.13053 2.32389 1.82426 2.32389 2.68001C2.32389 2.77881 2.33309 2.87512 2.35059 2.96824C2.38432 3.14782 2.27992 3.32463 2.10638 3.38182C1.59703 3.54968 1.23014 4.02951 1.23014 4.59407C1.23014 5.29881 1.80145 5.87012 2.50618 5.87012H6.60775C7.16147 5.87012 7.61035 5.42124 7.61035 4.86751C7.61035 4.43975 7.3423 4.07368 6.96375 3.92985C6.77894 3.85963 6.68377 3.65491 6.74921 3.46836C6.77555 3.39326 6.79004 3.31216 6.79004 3.22689C6.79004 2.82418 6.46358 2.49772 6.06087 2.49772C5.98167 2.49772 5.9061 2.51022 5.83562 2.53308C5.74043 2.56395 5.63673 2.55433 5.54884 2.50649C5.46095 2.45864 5.39658 2.37677 5.37084 2.28007C5.19455 1.61791 4.59041 1.13053 3.87337 1.13053ZM1.59473 2.68001C1.59473 1.42155 2.61491 0.401367 3.87337 0.401367C4.80935 0.401367 5.61285 0.965434 5.96369 1.77176C5.99584 1.76963 6.02825 1.76855 6.06087 1.76855C6.86629 1.76855 7.51921 2.42147 7.51921 3.22689C7.51921 3.28171 7.51616 3.33591 7.51023 3.3893C8.00728 3.69338 8.33952 4.24132 8.33952 4.86751C8.33952 5.82394 7.56418 6.59928 6.60775 6.59928H2.50618C1.39874 6.59928 0.500977 5.70152 0.500977 4.59407C0.500977 3.81305 0.947312 3.13701 1.59815 2.80588C1.59588 2.76418 1.59473 2.72222 1.59473 2.68001ZM4.16245 2.42221C4.30483 2.27983 4.53567 2.27983 4.67805 2.42221L5.7718 3.51596C5.91418 3.65834 5.91418 3.88918 5.7718 4.03156C5.62942 4.17394 5.39858 4.17394 5.2562 4.03156L4.78483 3.56019L4.78483 5.14095C4.78483 5.3423 4.6216 5.50553 4.42025 5.50553C4.21889 5.50553 4.05566 5.3423 4.05566 5.14095L4.05566 3.56019L3.5843 4.03156C3.44192 4.17394 3.21108 4.17394 3.0687 4.03156C2.92632 3.88918 2.92632 3.65834 3.0687 3.51596L4.16245 2.42221Z" fill="white"/>
                                                    </svg>
                                                    <span class="text-white text-[8.75px] font-semibold -translate-y-[3px] ml-[2.63px]">Upload</span>
                                                </button>
                                            </div>
                                    </div> -->

                                    <!-- Berhasil -->
                                    <div class="w-[289px] h-auto border-[1px] mt-[18px] rounded-t-lg rounded-b-lg">
                                        <div class="w-auto h-[40px] bg-[#0EA976] rounded-t-lg"><span class="text-white font-semibold ml-4 absolute translate-y-2">PKS</span></div>
                                        <div class="w-[265px] h-[18px] flex justify-between ml-3 mt-[10px]">
                                            <span class="text-[#333333] text-xs">Dokumen PKS</span>
                                            <svg width="46" height="46" class="-translate-y-2 translate-x-5 " viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_685_22194)">
                                                <g opacity="0.4" filter="url(#filter1_d_685_22194)">
                                                <path d="M19 26.5C23.1421 26.5 26.5 23.1421 26.5 19C26.5 14.8579 23.1421 11.5 19 11.5C14.8579 11.5 11.5 14.8579 11.5 19C11.5 23.1421 14.8579 26.5 19 26.5Z" fill="#8ADFC3"/>
                                                </g>
                                                <path d="M18.3081 22.1256C18.1581 22.1256 18.0156 22.0656 17.9106 21.9606L15.7881 19.8381C15.5706 19.6206 15.5706 19.2606 15.7881 19.0431C16.0056 18.8256 16.3656 18.8256 16.5831 19.0431L18.3081 20.7681L22.1631 16.9131C22.3806 16.6956 22.7406 16.6956 22.9581 16.9131C23.1756 17.1306 23.1756 17.4906 22.9581 17.7081L18.7056 21.9606C18.6006 22.0656 18.4581 22.1256 18.3081 22.1256Z" fill="#0C8D63"/>
                                                </g>
                                                <defs>
                                                <filter id="filter0_d_685_22194" x="6" y="7" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dy="1"/>
                                                <feGaussianBlur stdDeviation="2"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.662745 0 0 0 0 0.462745 0 0 0 0.15 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_22194"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_22194" result="shape"/>
                                                </filter>
                                                <filter id="filter1_d_685_22194" x="0.5" y="0.5" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                <feOffset dx="4" dy="4"/>
                                                <feGaussianBlur stdDeviation="7.5"/>
                                                <feComposite in2="hardAlpha" operator="out"/>
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.763946 0 0 0 0 0.970231 0 0 0 0 0.498223 0 0 0 0.5 0"/>
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_685_22194"/>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_685_22194" result="shape"/>
                                                </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div class="w-[265px] h-auto flex ml-3 py-[10px]">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="14.5652" cy="14.5652" r="14.5652" fill="#E2FCF3"/>
                                                <path d="M19.4206 12.7088C19.4143 12.6531 19.4021 12.5982 19.3842 12.545V12.4904C19.355 12.428 19.3161 12.3706 19.2689 12.3204L15.6276 8.67914C15.5774 8.63193 15.52 8.59301 15.4576 8.56383H15.403C15.3414 8.52847 15.2733 8.50578 15.2027 8.49707H11.5311C11.0482 8.49707 10.5851 8.68889 10.2437 9.03033C9.90227 9.37177 9.71045 9.83486 9.71045 10.3177V18.8141C9.71045 19.297 9.90227 19.7601 10.2437 20.1015C10.5851 20.4429 11.0482 20.6348 11.5311 20.6348H17.5999C18.0828 20.6348 18.5459 20.4429 18.8873 20.1015C19.2288 19.7601 19.4206 19.297 19.4206 18.8141V12.7453V12.7088ZM15.7793 10.5665L17.3511 12.1384H16.3862C16.2252 12.1384 16.0709 12.0744 15.957 11.9606C15.8432 11.8468 15.7793 11.6924 15.7793 11.5315V10.5665ZM18.2068 18.8141C18.2068 18.9751 18.1429 19.1294 18.0291 19.2432C17.9153 19.357 17.7609 19.421 17.5999 19.421H11.5311C11.3701 19.421 11.2158 19.357 11.102 19.2432C10.9882 19.1294 10.9242 18.9751 10.9242 18.8141V10.3177C10.9242 10.1568 10.9882 10.0024 11.102 9.88859C11.2158 9.77478 11.3701 9.71084 11.5311 9.71084H14.5655V11.5315C14.5655 12.0144 14.7573 12.4774 15.0988 12.8189C15.4402 13.1603 15.9033 13.3521 16.3862 13.3521H18.2068V18.8141Z" fill="#0EA976"/>
                                            </svg>
                                            <div class="ml-[13px] -translate-y-2">
                                                <span class="text-[#333333] text-[9.06px] font-semibold">PKS.pdf</span>
                                                <p class="text-[#9E9E9E] text-[7.77px]">2 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
        dropdownInformasi: false,
        dropdownPekerjaan: false,
        dropdownRab: false,
        dropdownBerkas: false,
        dropdownProgres: false,

        // Pop Up Alur
        isOpen: false, 
        isOkOpen: false, 
        isSelesai: false,
        
        // Date
        selectedDate: '',
        selectedDate1: ''
    };
},
methods: {
    informasiDropdown() {
        this.dropdownInformasi = !this.dropdownInformasi;
    },
    pekerjaanDropdown() {
        this.dropdownPekerjaan = !this.dropdownPekerjaan;
    },
    rabDropdown() {
        this.dropdownRab = !this.dropdownRab;
    },
    berkasDropdown() {
        this.dropdownBerkas = !this.dropdownBerkas;
    },
    progresDropdown() {
        this.dropdownProgres = !this.dropdownProgres;
    },

    // Pop Up Alur
    openAlur() {
        this.isOpen = true;
        this.isOkOpen = false; 
    },
    closeSend() {
        this.isOpen = false;
    },
},
};
</script>