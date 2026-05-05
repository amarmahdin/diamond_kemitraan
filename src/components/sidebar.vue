<!-- eslint-disable vue/multi-word-component-names -->
<!-- script import -->
<script>
import {ref, watch } from 'vue';
import { computed } from 'vue';

</script>

<template>
    <div class="flex">
      <div class="w-[248px] shrink-0 h-auto border-e-[1px]">
        <div class="flex justify-between mt-8 ml-4 mr-4">
          <svg width="77" height="13" viewBox="0 0 77 13" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="77" height="13" fill="url(#pattern0_1287_569)"/>
            <defs>
              <pattern id="pattern0_1287_569" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_1287_569" transform="matrix(0.00398406 0 0 0.0235979 0 -0.0191542)"/>
              </pattern>
              <image id="image0_1287_569" width="251" height="44" xlink:href="data:image/png;base64,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"/>
            </defs>
          </svg>
        </div>
        <hr class="mt-[23px] w-[216px] ml-4 ">
        <div class="w-[212px] h-8 grid mt-[23px] ml-4">

          <!-- Dashboard -->
          <router-link :to="'/Dashboard'">
            <div :class="{'bg-[#2671D9] text-white': isDashboardActive, 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': !isDashboardActive}" class="flex h-10 py-[10px] px-3 rounded-lg cursor-pointer">
              <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg" :fill="isDashboardActive ? '#ffffff' : '#2671D9'">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.9375 1.25C0.9375 0.835786 1.27329 0.5 1.6875 0.5H16.3125C16.7267 0.5 17.0625 0.835786 17.0625 1.25C17.0625 1.66421 16.7267 2 16.3125 2H15.9375V9.6875C15.9375 11.0337 14.8462 12.125 13.5 12.125H12.8531L13.649 14.5128C13.78 14.9058 13.5676 15.3305 13.1747 15.4615C12.7817 15.5925 12.357 15.3801 12.226 14.9872L12.0219 14.375H5.97807L5.77401 14.9872C5.64303 15.3801 5.21829 15.5925 4.82533 15.4615C4.43237 15.3305 4.22 14.9058 4.35099 14.5128L5.14693 12.125H4.5C3.15381 12.125 2.0625 11.0337 2.0625 9.6875V2H1.6875C1.27329 2 0.9375 1.66421 0.9375 1.25ZM3.5625 2V9.6875C3.5625 10.2053 3.98223 10.625 4.5 10.625H13.5C14.0178 10.625 14.4375 10.2053 14.4375 9.6875V2H3.5625ZM6.72807 12.125L6.47807 12.875H11.5219L11.2719 12.125H6.72807ZM11.25 3.3125C11.6642 3.3125 12 3.64829 12 4.0625V8.5625C12 8.97671 11.6642 9.3125 11.25 9.3125C10.8358 9.3125 10.5 8.97671 10.5 8.5625V4.0625C10.5 3.64829 10.8358 3.3125 11.25 3.3125ZM9 5C9.41421 5 9.75 5.33579 9.75 5.75V8.5625C9.75 8.97671 9.41421 9.3125 9 9.3125C8.58579 9.3125 8.25 8.97671 8.25 8.5625V5.75C8.25 5.33579 8.58579 5 9 5ZM6.75 6.6875C7.16421 6.6875 7.5 7.02329 7.5 7.4375V8.5625C7.5 8.97671 7.16421 9.3125 6.75 9.3125C6.33579 9.3125 6 8.97671 6 8.5625V7.4375C6 7.02329 6.33579 6.6875 6.75 6.6875Z"/>
              </svg>
              <span class="text-sm font-semibold ml-3 -translate-y-[2px]">Dashboard</span>
            </div>
          </router-link>

          <!-- Buat -->
          <div @click="setActive('buat')" :class="{'bg-[#2671D9] text-white': isBuatActive, 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': !isBuatActive}" class="flex mt-2 h-10 py-[10px] px-3 rounded-lg cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" :fill="isBuatActive ? '#ffffff' : '#2671D9'">
              <path d="M2.75 12.5H5.93C6.0287 12.5006 6.12655 12.4817 6.21793 12.4443C6.30931 12.407 6.39242 12.352 6.4625 12.2825L11.6525 7.08502L13.7825 5.00002C13.8528 4.93029 13.9086 4.84734 13.9467 4.75595C13.9847 4.66455 14.0043 4.56652 14.0043 4.46752C14.0043 4.36851 13.9847 4.27048 13.9467 4.17908C13.9086 4.08769 13.8528 4.00474 13.7825 3.93502L10.6025 0.717515C10.5328 0.647219 10.4498 0.591423 10.3584 0.553347C10.267 0.51527 10.169 0.495667 10.07 0.495667C9.97099 0.495667 9.87296 0.51527 9.78157 0.553347C9.69017 0.591423 9.60722 0.647219 9.5375 0.717515L7.4225 2.84002L2.2175 8.03752C2.14799 8.1076 2.093 8.19071 2.05567 8.28209C2.01835 8.37346 1.99943 8.47131 2 8.57001V11.75C2 11.9489 2.07902 12.1397 2.21967 12.2803C2.36032 12.421 2.55109 12.5 2.75 12.5ZM10.07 2.30752L12.1925 4.43002L11.1275 5.49502L9.005 3.37252L10.07 2.30752ZM3.5 8.87752L7.9475 4.43002L10.07 6.55252L5.6225 11H3.5V8.87752ZM14.75 14H1.25C1.05109 14 0.860322 14.079 0.71967 14.2197C0.579018 14.3603 0.5 14.5511 0.5 14.75C0.5 14.9489 0.579018 15.1397 0.71967 15.2803C0.860322 15.421 1.05109 15.5 1.25 15.5H14.75C14.9489 15.5 15.1397 15.421 15.2803 15.2803C15.421 15.1397 15.5 14.9489 15.5 14.75C15.5 14.5511 15.421 14.3603 15.2803 14.2197C15.1397 14.079 14.9489 14 14.75 14Z"/>
            </svg>
            <span class="text-sm font-semibold ml-3 -translate-y-[2px]">Buat</span>
            <span :class="{'rotate-0': isDropdownOpen, 'rotate-180': !isDropdownOpen}" class="ml-auto mt-2 mb-2 transition-transform duration-300">
              <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
              </svg>
            </span>
          </div>

          <!-- Dropdown Menu -->
          <div v-show="isDropdownOpen" class="ml-[48px]" id="submenu">
            <router-link to="/MoU-NDA"><h1  @click="setActive('mou')" :class="{'text-[#2671D9] font-semibold': isMouActive}" class="cursor-pointer text-sm mt-2 hover:text-[#2671D9]">MoU/NDA</h1></router-link>
            <router-link to="/PKS"><h1 @click="setActive('pks')" :class="{'text-[#2671D9] font-semibold': isPksActive}" class="cursor-pointer text-sm mt-3 h-6 hover:text-[#2671D9]">PKS</h1></router-link>
          </div>

          <!-- Draft -->
          <router-link to="/Draft">
          <div :class="{'bg-[#2671D9] text-white': isDraftActive, 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': !isDraftActive}" class="flex mt-2 h-10 py-[10px] px-3 rounded-lg cursor-pointer">
            <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
              <path :fill="isDraftActive ? '#ffffff' : '#2671D9'" d="M8.25 9.5H3.75C3.55109 9.5 3.36032 9.57902 3.21967 9.71967C3.07902 9.86032 3 10.0511 3 10.25C3 10.4489 3.07902 10.6397 3.21967 10.7803C3.36032 10.921 3.55109 11 3.75 11H8.25C8.44891 11 8.63968 10.921 8.78033 10.7803C8.92098 10.6397 9 10.4489 9 10.25C9 10.0511 8.92098 9.86032 8.78033 9.71967C8.63968 9.57902 8.44891 9.5 8.25 9.5ZM8.25 6.5H5.25C5.05109 6.5 4.86032 6.57902 4.71967 6.71967C4.57902 6.86032 4.5 7.05109 4.5 7.25C4.5 7.44891 4.57902 7.63968 4.71967 7.78033C4.86032 7.92098 5.05109 8 5.25 8H8.25C8.44891 8 8.63968 7.92098 8.78033 7.78033C8.92098 7.63968 9 7.44891 9 7.25C9 7.05109 8.92098 6.86032 8.78033 6.71967C8.63968 6.57902 8.44891 6.5 8.25 6.5ZM9.75 2H8.865C8.71027 1.56234 8.42395 1.18325 8.0453 0.914704C7.66665 0.646159 7.21421 0.501305 6.75 0.5H5.25C4.78579 0.501305 4.33335 0.646159 3.9547 0.914704C3.57605 1.18325 3.28974 1.56234 3.135 2H2.25C1.65326 2 1.08097 2.23705 0.65901 2.65901C0.237053 3.08097 0 3.65326 0 4.25V13.25C0 13.8467 0.237053 14.419 0.65901 14.841C1.08097 15.2629 1.65326 15.5 2.25 15.5H9.75C10.3467 15.5 10.919 15.2629 11.341 14.841C11.7629 14.419 12 13.8467 12 13.25V4.25C12 3.65326 11.7629 3.08097 11.341 2.65901C10.919 2.23705 10.3467 2 9.75 2ZM4.5 2.75C4.5 2.55109 4.57902 2.36032 4.71967 2.21967C4.86032 2.07902 5.05109 2 5.25 2H6.75C6.94891 2 7.13968 2.07902 7.28033 2.21967C7.42098 2.36032 7.5 2.55109 7.5 2.75V3.5H4.5V2.75ZM10.5 13.25C10.5 13.4489 10.421 13.6397 10.2803 13.7803C10.1397 13.921 9.94891 14 9.75 14H2.25C2.05109 14 1.86032 13.921 1.71967 13.7803C1.57902 13.6397 1.5 13.4489 1.5 13.25V4.25C1.5 4.05109 1.57902 3.86032 1.71967 3.71967C1.86032 3.57902 2.05109 3.5 2.25 3.5H3V4.25C3 4.44891 3.07902 4.63968 3.21967 4.78033C3.36032 4.92098 3.55109 5 3.75 5H8.25C8.44891 5 8.63968 4.92098 8.78033 4.78033C8.92098 4.63968 9 4.44891 9 4.25V3.5H9.75C9.94891 3.5 10.1397 3.57902 10.2803 3.71967C10.421 3.86032 10.5 4.05109 10.5 4.25V13.25Z"/>
            </svg>
            <span class="text-sm font-semibold ml-4 -translate-y-[2px]">Draft</span>
          </div>
          </router-link>

          <!-- Proses -->
          <router-link to="/Proses">
          <div :class="{'bg-[#2671D9] text-white': isProsesActive, 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': !isProsesActive}" class="flex mt-2 h-10 py-[10px] px-3 rounded-lg cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path :fill="isProsesActive ? '#ffffff' : 'none'" d="M14.8006 1.08935L4.18235 9.93822M6.6839 12.4509L9.10754 14.8634C9.25638 15.016 9.44247 15.127 9.64741 15.1856C9.85234 15.2441 10.069 15.2481 10.276 15.1973C10.4841 15.1488 10.6762 15.0475 10.8339 14.9033C10.9915 14.7591 11.1094 14.5768 11.1762 14.3738L15.1555 2.44472C15.2388 2.2213 15.2561 1.97866 15.2054 1.74568C15.1546 1.51271 15.038 1.29922 14.8695 1.13062C14.7009 0.962027 14.4874 0.845429 14.2544 0.79471C14.0214 0.74399 13.7788 0.761286 13.5554 0.844537L1.62628 4.82497C1.41633 4.89652 1.2293 5.02285 1.08453 5.1909C0.939758 5.35895 0.842504 5.56262 0.802823 5.78086C0.761837 5.97948 0.770889 6.18517 0.829164 6.37942C0.88744 6.57367 0.993109 6.75038 1.13666 6.89364L4.18235 9.93934L4.0822 13.7963L6.6839 12.4509Z" stroke="#2671D9" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-sm font-semibold ml-3 -translate-y-[2px]">Proses</span>
          </div>
          </router-link>

          <!-- Selesai -->
          <router-link to="/Selesai">
            <div :class="{'bg-[#2671D9] text-white': isSelesaiActive, 'hover:bg-[#E9F1FB] hover:text-[#2671D9]': !isSelesaiActive}" class="flex mt-2 h-10 py-[10px] px-3 rounded-lg cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :stroke="isSelesaiActive ? '#FFFFFF' : '#2671D9'" d="M9.27747 6.66016H13.215" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path :stroke="isSelesaiActive ? '#FFFFFF' : '#2671D9'" d="M4.78503 6.66016L5.34753 7.22266L7.03503 5.53516" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path :stroke="isSelesaiActive ? '#FFFFFF' : '#2671D9'" d="M9.27747 11.9102H13.215" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path :stroke="isSelesaiActive ? '#FFFFFF' : '#2671D9'" d="M4.78503 11.9102L5.34753 12.4727L7.03503 10.7852" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path :stroke="isSelesaiActive ? '#FFFFFF' : '#2671D9'" d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <span class="text-sm font-semibold ml-3 -translate-y-[2px]">Selesai</span>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();   

const isDropdownOpen = ref(false);

const isDashboardActive = computed(() => route.name === 'Dashboard');
const isPksActive = computed(() => ['PKS', 'Rab', 'Pksruanglingkup', 'Pkslainnya', 'Pksmitrabisnis', 'Pkslampiran'].includes(route.name));
const isMouActive = computed(() => ['MoU', 'Ruanglingkup', 'Lainnya', 'Mitrabisnis', 'Lampiran'].includes(route.name));
const isDraftActive = computed(() => ['Draft', 'Detaildraft'].includes(route.name));
const isProsesActive = computed(() => ['Proses', 'Detailproses', 'DetailMoU'].includes(route.name));
const isSelesaiActive = computed(() => route.name === 'Selesai');
const isBuatActive = computed(() => ['MoU', 'Ruanglingkup', 'Lainnya', 'Mitrabisnis', 'Lampiran', 'PKS', 'Rab', 'Pksruanglingkup', 'Pkslainnya', 'Pksmitrabisnis', 'Pkslampiran'].includes(route.name));

watch(
  () => route.name,
  () => {
    if (isMouActive.value || isPksActive.value) {
      isDropdownOpen.value = true; 
    } else {
      isDropdownOpen.value = false; 
    }
  },
  { immediate: true }
);

function setActive(tab) {
  if (tab === 'Dashboard') {
    isDashboardActive.value = true;
    isDropdownOpen.value = false;
  } else if (tab === 'buat') {
    isDropdownOpen.value = !isDropdownOpen.value;
  } else if (tab === 'mou') {
    isMouActive.value = true;
    isPksActive.value = false;
    isDropdownOpen.value = true;
  } else if (tab === 'pks') {
    isPksActive.value = true;
    isMouActive.value = false;
    isDropdownOpen.value = true;
  } else if (tab === 'draft') {
    isDraftActive.value = true;
    isDropdownOpen.value = false;
  } else if (tab === 'proses') { 
    isProsesActive.value = true;
    isDropdownOpen.value = false;
  } else if (tab === 'selesai') { 
    isSelesaiActive.value = true;
    isDropdownOpen.value = false;
  } else {
    isDropdownOpen.value = false;
  }
}
</script>