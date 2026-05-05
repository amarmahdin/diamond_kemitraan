<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import topo from '../assets/img/Topo.png'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

function logoutToLogin() {
  auth.logout()
  router.push('/')
}
</script>

<template>
<div class="h-[58px] border-y-[1px]">
    <img :src="topo" alt="Topo Image" class="px-3 w-full h-[58px]">
    <div class="flex justify-between w-full -translate-y-11">
        <h1 class="text-xl ml-[26px] font-medium text-[#2671D9]">Selamat Datang di DIAMOND</h1>
        <div class="flex mx-7 notif-container">
            <svg @click="notifDrop" width="24" height="24" class="mx-3 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.99951C9.23856 3.99951 6.99998 6.23809 6.99998 8.99951L6.99979 9.74951C6.99979 9.74942 6.99979 9.7496 6.99979 9.74951C6.99973 11.7896 6.38798 13.6885 5.33874 15.2705C6.60339 15.6525 7.91417 15.9285 9.2609 16.0882C10.1586 16.1947 11.0726 16.2495 11.9998 16.2495C12.9271 16.2495 13.8412 16.1947 14.739 16.0882C16.0856 15.9285 17.3963 15.6524 18.6608 15.2705C17.6116 13.6884 16.9998 11.7897 16.9998 9.74951V9.04066L17 8.99951C17 6.23809 14.7614 3.99951 12 3.99951ZM4.99998 8.99925C5.00013 5.13338 8.13408 1.99951 12 1.99951C15.866 1.99951 19 5.13352 19 8.99951L18.9998 9.0487V9.74951C18.9998 11.8085 19.7763 13.6837 21.0541 15.1021C21.2761 15.3485 21.3615 15.6889 21.282 16.011C21.2025 16.333 20.9686 16.5946 20.6574 16.7095C19.1663 17.26 17.6084 17.6723 15.9994 17.9311C15.9998 17.9539 16 17.9767 16 17.9995C16 20.2087 14.2091 21.9995 12 21.9995C9.79085 21.9995 7.99998 20.2087 7.99998 17.9995C7.99998 17.9767 8.00018 17.9539 8.00056 17.9312C6.39146 17.6724 4.83342 17.26 3.34214 16.7095C3.03099 16.5946 2.79704 16.333 2.71758 16.011C2.63812 15.6889 2.7235 15.3485 2.9455 15.1021C4.22327 13.6837 4.99979 11.8085 4.99979 9.74951L4.99998 8.99925C4.99998 8.99934 4.99998 8.99916 4.99998 8.99925ZM10.0073 18.1712C10.0943 19.1954 10.9533 19.9995 12 19.9995C13.0467 19.9995 13.9056 19.1954 13.9927 18.1712C13.3351 18.2231 12.6704 18.2495 11.9998 18.2495C11.3293 18.2495 10.6648 18.2231 10.0073 18.1712Z" fill="#666666"/>
            </svg>
            <Notif v-show="isNotif"/>
            <svg width="24" height="24" class="mx-2 cursor-pointer"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#C7E5D7"/>
                <path d="M12.9339 8.32706H14.2407V13.4407C14.2384 13.9095 14.1389 14.3131 13.9424 14.6516C13.7459 14.9878 13.4713 15.247 13.1186 15.4293C12.7682 15.6093 12.3598 15.6992 11.8934 15.6992C11.4673 15.6992 11.0838 15.6235 10.7429 15.472C10.4043 15.3181 10.1356 15.0908 9.93675 14.7901C9.73789 14.4895 9.63846 14.1154 9.63846 13.668H10.9488C10.9512 13.8645 10.9938 14.0337 11.0767 14.1758C11.1619 14.3178 11.2791 14.4267 11.4282 14.5025C11.5774 14.5782 11.749 14.6161 11.9431 14.6161C12.1538 14.6161 12.3326 14.5723 12.4794 14.4847C12.6261 14.3948 12.7374 14.2622 12.8132 14.087C12.8913 13.9118 12.9315 13.6964 12.9339 13.4407V8.32706Z" fill="#333333"/>
            </svg>
            <span class="text-base text-[#666666] mr-2 font-medium">John Doe</span>
            <svg width="16" height="16" class="cursor-pointer mt-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="logoutToLogin"> 
                <rect width="16" height="16" rx="8" fill="#E5E7E9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13743 9.8419C7.92622 10.0531 7.58378 10.0531 7.37257 9.8419L4.66841 7.13773C4.4572 6.92652 4.4572 6.58409 4.66841 6.37288C4.87962 6.16167 5.22205 6.16167 5.43326 6.37288L7.755 8.69462L10.0767 6.37288C10.2879 6.16167 10.6304 6.16167 10.8416 6.37288C11.0528 6.58409 11.0528 6.92652 10.8416 7.13773L8.13743 9.8419Z" fill="#2671D9"/>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
import Notif from '@/components/notifadmin.vue';
import { ref } from 'vue';

const isNotif = ref(false);

export default {
  data() {
    return {
      isNotif,
      filterClickListener: null,
    }
  },
  methods: {
    notifDrop() {
      isNotif.value = !isNotif.value
    }
  },
  mounted() {
    this.filterClickListener = (e) => {
      if (!e.target.closest('.notif-container') ) {
        isNotif.value = false;
      }
    };
    document.addEventListener('click', this.filterClickListener);
  }
};
</script>