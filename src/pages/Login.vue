<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import log from '@/assets/img/log.png'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const isPasswordVisible = ref(false)

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}

function submitLogin() {
  const result = auth.login(username.value, password.value)
  if (!result.ok) return

  const raw = route.query.redirect
  if (typeof raw === 'string' && raw.startsWith('/') && !raw.startsWith('//')) {
    router.replace(raw)
    return
  }
  router.replace(result.role === 'admin' ? '/Dashboardadmin' : '/Dashboard')
}
</script>

<template>

    <div class="flex min-h-screen flex-col items-center bg-slate-100 px-4 py-8 xl:flex-row xl:justify-center xl:px-6 xl:py-10">
        <div class="relative mb-8 w-full max-w-[643px] shrink-0 shadow-lg xl:mb-0">
            <img :src="log" alt="" class="block h-auto w-full">
            <!-- Mobile / tablet welcome -->
            <div class="absolute inset-x-4 bottom-4 rounded-[20px] bg-[#21252B80] px-3 py-4 xl:hidden">
                <p class="text-center text-sm font-semibold leading-snug text-[#E9EAEC] sm:text-base">"Welcome to DIAMOND (Digital Administration Monitoring Dashboard)”</p>
            </div>
            <!-- Desktop — posisi seperti desain asli -->
            <div class="absolute ml-[37px] hidden h-[156px] w-[588px] max-w-[calc(100%-74px)] rounded-[20px] bg-[#21252B80] xl:block xl:-translate-y-[250px]">
                <p class="ml-4 mt-6 w-[min(556px,calc(100%-2rem))] text-center text-[26px] font-semibold text-[#E9EAEC]">"Welcome to DIAMOND (Digital Administration Monitoring Dashboard)”</p>
            </div>
        </div>
        <div class="flex w-full max-w-[720px] flex-col justify-center bg-white shadow-lg min-h-[min(640px,85vh)] xl:min-h-[min(1024px,92vh)]">
            <div class="mx-auto flex w-full max-w-[480px] flex-col px-6 py-12 xl:ml-[120px] xl:mr-auto xl:mt-[clamp(3rem,15vh,202px)] xl:min-h-[496px] xl:px-0 xl:py-0">
                <svg width="252" height="45" class="mx-auto xl:ml-[114.5px]" viewBox="0 0 252 45" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect x="0.5" y="0.5" width="251" height="44" fill="url(#pattern0_2285_24014)"/>
                    <defs>
                    <pattern id="pattern0_2285_24014" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2285_24014" transform="scale(0.00398406 0.0227273)"/>
                    </pattern>
                    <image id="image0_2285_24014" width="251" height="44" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAAAsCAYAAACjSc4xAAAACXBIWXMAAAsSAAALEgHS3X78AAAJr0lEQVR4nO2dvXLiShbH/966RYqjVQjZKoN9ApgnGAhWKZqcKnufYHSfYO0qcotUCZ4nuPITXMgU4lCZSUm8gQ6+AtRSn1Z3S77Wr8rlGdNf+vj3x+lzmpv393d0dKjQW22GAKYAhgar2QOIj8v53mAdX4KbTuwdKvRWmwcAdxarfDwu5/cW6/vb0Ym9g01vtQkBLBqouhN8DTqxd7DorTY+gKcGmzA/LufPDdb/aenE3iFNb7UZA4gB9BtsxgHAuFvD8/lH0w3o+Bz0VptbACGaFTqo/m5kV+Dmn//6zxjAg4ayYvq9BbBNk2hft0DH9ThtC9MkCmvW5wPwJZMHaRLFFuqrfV25+m4hIZQ0iaaXf2twnS5ifVzO/cs/Oq4XV+R7A+CnSfQmUwnjndimSVRoT2C+x2XEp7oA7NMk2nIy/wbgFsBEQ0POynBc7xXZixVyG5WD07ZYsY48AYABI+20Zn1DVF/f2HG9WEfnieyFYz9rWqe3SegAsOitNvFxOQ8v/i5zfTGAsWQ9Q8kyyzClsQP+0lhcldnkNH6AbGvmT8f1Ysf1pgbrqo3jejPICx0AJo7rDQ01J08fGkYFuv9swdI6var+g0qbNPBA7eMyclwv1N2YBugje6Z/OK63p3dYiK01+4QaFNJUso2obOkEuhsh4LuGzpLdYUis078dl/Ob43J+C2Bdo21FrKnsGwBzQZo+gJDayWXhuN7faRtvAGBDA2vh/bBtoFsAiGkN0xqoPSrTrJnFzitUzUgv9Ugh60NJvt+Py3l8+g+tn18U6ijibD1OW22PgrQjqM98/lc1Gn5CJgD2RRprwho/Qib4YQN1i1Dt4fs18nIZOK4XcDNRZ8TOV7FOfzku50VlzgDsuHVdsEPBPSVnGlHZC2qvCmHbBh8N9FEwqDa19dYH8NyGKT21oY7xydfUFBl+KnSSD2Bul1Ws0w/IRH3FcTl/Q2a0VBX8DsCUyinCh9g+oLp+b827qJmT4D+uq8l99hHsrXnLqDsyD2h7xhahbEJVoxzK1+l+iRjzguca7aqEjuNyvoX4efWhvtQZQM9uTts480ngiv0V2brs8kfVGnvXgimU35IyZJkw1pmqa1nROv1RxlVVQfAHVHQiubJDAL8EH6vYJT7ytsRCr1tjH+/Lb8yMYZpEQdEHJNp78EeSe9gVywc0InO220RMHNeb1nWyYfBAe+9CcdC11Xn5L3nlBKEcl/Ntb7WZotq99oBsROf4YvjIHEt0PLs8C8f1tmkS6XCAUaVMY0Nk134P3tIsAPCsbRqfJtE2TSIfwDfweqFFg+slncY1X2NZVQxQsgSi+6n7hWU/IxLwtCSJitBPMwfdQj/RWgt9mkR76gim4Gls5LjeWPuanUY37s2yfnNpPSsz8sluJy0s7zCULYEC6Pdh76vsZ5OQ/yv42OcK3RKtttCTR+qUmW1qxEBHguc4WTRxY33JdCHkr0W2TF1cjd70kpo6VEI1AGVf8LcfqqGq5KdvktZb6EnwIt+DIsyIneA8SKtipxFYxrZwoCAU2Wux7ZE1KfAC0zF9F3VuE67Q6Oiqyzw/CnzaZcsLIX52Or34PoOFPmSkHZoUe2yw7LrIijIEgDSJnpFZSavoW96GA4DgNAJR3bUDLsh7TWTxXsgKnqb9zzhfUvxuSuhFUXA1GcF+By4NM8BsZEzssiGEtiFh+JLJw9y/ZUf3gNEcHfSRWed1G+V8lHusBWWZSegxzu0ia4HnXSUVHn07A0I/0XT8fhXSLspf8fCKGeQe4O6i55QV0qCBCL8FrkfQWkh4w/2scFGNcS30svRCKo7C2qF+qPGXwJjYW2zcCCTTnYmb4slle9Empn464qXPkHCOeSoRfF7ovwwJ/RUVXndfAOnnznWq4TA1WLYSzJj1sUrgCfHdcb2hpgMngOylrruvfOqoWJ3CcTl/q3COeeqtNtuCLbR8m4e91eb2JEpaAtyDTjUSOeuQr7tI6AcAsxpCX0N+ltdKmNuDO5PTeJ+R1tZeK2fEvQPw8+KHI5SAkVamrLoHRCjPNnLOMaI2xAVBKLNc+hGAfW+1iXurzR7Zvewju593dAb9GbnDLYtQcsa5YI8WDkhMfEbavRGx05r1OyNLbKIdeWi7TftUtwSdse571Os81jWOBgPwIXhf8HEfF4Iv6CBO4i6aodzllwMSp9jOdDjj0D35UbecJlDwp4i1i50awXWWiHW3o4DAQh15+tDoZEP+2iqhowdosiGQE4xIHCfB3+bSizy9irYxn3qrjZ+z4ouE/iN/aEZdyI+C45zSOKSxmJlNn2+843pjihr6E7x10Nr0Np2GmHVVdBvqfIU8gc77S3vkXMHPke3bvyDbZx/ScVOX5TwhW9KVCT1Ub30xdCqsyK+gNTiuNyQ7Ugyexl7SJNpzDXS+YFtpzKw8T6CYj0NTjhEDx/V8XUdBp0m0dVzvEfLTt52JCK7jch6S0a6oAx0hE/yHlZxmBFezPSoHODfCiQyRjyaEnsPH9XZhE4g0NoS6kTYA+FtvA2TrrssfVaE/arRYl+FbqMNW3QHkjXXGOjnaShO5p44guZSrmCmcWJv+jjea/eSNik0h0piq0F9OoddNOtXsYGFU1xizrspEZwQVvZS+RNK16fj6Crdajh/9tOQzE26whdDAU9aWz8bZEWJNif0AYGbJpVZ2RDggi8WX/RGFbdZpgxTkq1/m4KPNKCeBj3K32rAsc4W/e+Hhkyb5zBb6Cw4ApnmNmXSqEbFD9vU7e9MVMWLWAclv1cgRU8SZzKxh4bheoPmafYiNWVqNcmVcON0U3etFb7XZF/nESwi9Ee+4NIlCha2tNnES+tn2pO2R/VdRIwziM9KGCuVzthh9hfKFUMcR4Pqssl+2j1XKudWKIgOv/OgrAlsad4P9LBb6Al4ADIs0Zmtkf4GGL0LkwIhZB66DXmR5gHzvfw/NNgoStVVhi6ARfoZyt9oxsi9WvIX4vtV1g9WJj3ZY6GV4BXBPS7xCTI7sr8istf9Ok8jmYYwnOGs9JcEwg2OaiHW3ioRb7ckFuUzodd1gtUFLoSmat9CLOCDT2Lc0iYZlQgeykf0Ner62J6bfW2j6ymbw2nZZ35CRl+vxl4fTUVxa5feQa6OuUc64iOhU2RmAPxSy6ziTTvV9KSRNojey/VQ957J269LYlsraI9MY617dvL+/a2hDR8c5FaGpRRjxjuv4i694eEWHBSSdZU50QrdAJ/YOY5CAq4JM1p3Q7dBN4zuMU7Kfbs07rqMb2TssIPCj74RumW5k77AGWenHyI6iqrMD0qHA/wF9F/+nN+nNRAAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>
                <h1 class="mt-12 text-center text-4xl font-semibold text-[#21252B] xl:mt-[48px] xl:ml-[186px] xl:text-left xl:text-[40px]">Login</h1>
                <div class="mt-8">
                    <label class="text-base font-semibold text-[#4D5E80]" for="username">Username <span class="text-[#FF5656]">*</span></label>
                    <form action="" class="mt-2" @submit.prevent="submitLogin">
                        <input id="username" v-model="username" type="text" class="h-[40px] w-full max-w-[480px] rounded-lg border-[1px] px-3 outline-none" placeholder="Masukkan username" name="username" autocomplete="username">
                    </form>
                </div>
                <div class="mt-6 relative">
                    <label class="text-base font-semibold text-[#4D5E80]" for="password">Password <span class="text-[#FF5656]">*</span></label>
                    <form action="" class="relative mt-2 flex" @submit.prevent="submitLogin">
                        <input id="password" v-model="password" :type="isPasswordVisible ? 'text' : 'password'" class="h-[40px] w-full max-w-[480px] rounded-lg border-[1px] px-3 outline-none" placeholder="Masukkan password" name="password" autocomplete="current-password">
                        <svg v-if="!isPasswordVisible" width="16" height="17" class="-translate-x-7 mt-[11px] cursor-pointer" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" @click.prevent="togglePasswordVisibility">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9999 6.61348C6.95604 6.61348 6.11323 7.45629 6.11323 8.50015C6.11323 8.8404 6.20251 9.15781 6.36009 9.43285L8.93259 6.86034C8.65756 6.70277 8.34015 6.61348 7.9999 6.61348ZM5.11323 8.50015C5.11323 6.90401 6.40375 5.61348 7.9999 5.61348C8.79844 5.61348 9.51729 5.93711 10.0401 6.45993C10.2354 6.65519 10.2354 6.97177 10.0401 7.16704L6.66678 10.5404C6.47152 10.7356 6.15494 10.7356 5.95968 10.5404C5.43685 10.0175 5.11323 9.29869 5.11323 8.50015Z" fill="#2671D9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50489 6.50479C3.09884 3.99922 5.43458 2.48682 7.9999 2.48682C9.49964 2.48682 10.9369 3.00922 12.181 3.94764C12.4014 4.11393 12.4454 4.42745 12.2791 4.64791C12.1128 4.86837 11.7993 4.91228 11.5788 4.74599C10.4896 3.92441 9.26015 3.48682 7.9999 3.48682C5.85866 3.48682 3.80783 4.74762 2.34844 7.04185L2.34802 7.0425C2.11163 7.41285 1.97656 7.94298 1.97656 8.50348C1.97656 9.06399 2.11163 9.59412 2.34802 9.96447C2.85054 10.7532 3.43264 11.4288 4.05925 11.9677C4.26862 12.1478 4.29238 12.4635 4.11232 12.6728C3.93227 12.8822 3.61658 12.906 3.40721 12.7259C2.70049 12.1181 2.05569 11.3667 1.50487 10.5021C1.14142 9.93254 0.976562 9.20283 0.976562 8.50348C0.976562 7.80412 1.14143 7.0744 1.50489 6.50479Z" fill="#2671D9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0532 5.39721C13.2684 5.22414 13.5831 5.25826 13.7562 5.47344C14.0121 5.79162 14.2635 6.13352 14.4954 6.4989C14.8585 7.0684 15.0232 7.79777 15.0232 8.49682C15.0232 9.19618 14.8584 9.9259 14.4949 10.4955C12.901 13.0011 10.5652 14.5135 7.9999 14.5135C7.10887 14.5135 6.23645 14.3251 5.4192 13.981C5.1647 13.8738 5.04525 13.5806 5.15241 13.3261C5.25957 13.0716 5.55276 12.9522 5.80726 13.0593C6.51001 13.3552 7.25092 13.5135 7.9999 13.5135C10.1411 13.5135 12.192 12.2527 13.6514 9.95845L13.6518 9.9578C13.8882 9.58745 14.0232 9.05732 14.0232 8.49682C14.0232 7.93631 13.8882 7.40618 13.6518 7.03583L13.6511 7.03473C13.4429 6.70678 13.2144 6.39535 12.977 6.1002C12.8039 5.88502 12.838 5.57028 13.0532 5.39721Z" fill="#2671D9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4306 8.47511C10.7021 8.52518 10.8817 8.78592 10.8316 9.05749C10.6207 10.2014 9.69447 11.1276 8.55057 11.3385C8.279 11.3886 8.01826 11.2091 7.96818 10.9375C7.91811 10.6659 8.09766 10.4052 8.36923 10.3551C9.10532 10.2194 9.71245 9.61225 9.84819 8.87615C9.89826 8.60458 10.159 8.42503 10.4306 8.47511Z" fill="#2671D9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35345 10.1466C6.54871 10.3419 6.54871 10.6584 6.35345 10.8537L3.02012 14.187C2.82485 14.3823 2.50827 14.3823 2.31301 14.187C2.11775 13.9918 2.11775 13.6752 2.31301 13.4799L5.64634 10.1466C5.8416 9.95133 6.15819 9.95133 6.35345 10.1466Z" fill="#2671D9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6868 2.81326C13.882 3.00853 13.882 3.32511 13.6868 3.52037L10.3534 6.8537C10.1582 7.04897 9.8416 7.04897 9.64634 6.8537C9.45108 6.65844 9.45108 6.34186 9.64634 6.1466L12.9797 2.81326C13.1749 2.618 13.4915 2.618 13.6868 2.81326Z" fill="#2671D9"/>
                        </svg>
                        <!-- Hide password visibility toggle -->
                        <svg v-else width="16" height="17" class="-translate-x-7 mt-[11px] cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click.prevent="togglePasswordVisibility">
                          <path d="M12 5C7.5 5 3.735 7.61 2 12C3.735 16.39 7.5 19 12 19C16.5 19 20.265 16.39 22 12C20.265 7.61 16.5 5 12 5ZM12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17ZM12 9C10.346 9 9 10.346 9 12C9 13.654 10.346 15 12 15C13.654 15 15 13.654 15 12C15 10.346 13.654 9 12 9Z" stroke="#2671D9" stroke-width="1" fill="none"/>
                        </svg>
                    </form>
                </div>
              <div class="mt-20">
                <button type="button" class="w-full h-[48px] bg-[#2671D9] text-white font-semibold rounded-lg" @click="submitLogin">Login</button>
                <button type="button" class="w-full h-[48px] text-[#2671D9] border-[1px] mt-4 font-semibold rounded-lg">Login dengan SSO</button>
              </div>
            </div>
        </div>
    </div>

</template>

<style>
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear,
  input[type="password"]::-webkit-clear-button,
  input[type="password"]::-webkit-reveal-button {
    display: none;
  }
</style>
