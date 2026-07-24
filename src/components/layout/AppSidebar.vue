<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from '@/components/ui/BrandLogo.vue'
import { ADMIN_NAV, USER_NAV } from '@/constants/navigation'

const props = defineProps({
  variant: {
    type: String,
    default: 'user',
    validator: (value) => ['user', 'admin'].includes(value),
  },
})

const route = useRoute()
const isBuatOpen = ref(false)

const items = computed(() => (props.variant === 'admin' ? ADMIN_NAV : USER_NAV))

function isMatch(match = []) {
  return match.includes(route.name)
}

function isItemActive(item) {
  if (item.children?.length) {
    return item.children.some((child) => isMatch(child.match))
  }
  return isMatch(item.match)
}

watch(
  () => route.name,
  () => {
    const buat = items.value.find((item) => item.key === 'buat')
    isBuatOpen.value = Boolean(buat?.children?.some((child) => isMatch(child.match)))
  },
  { immediate: true },
)

function onBuatClick() {
  isBuatOpen.value = !isBuatOpen.value
}
</script>

<template>
  <aside class="w-sidebar shrink-0 border-e border-surface-line">
    <div class="px-4 pt-8">
      <BrandLogo />
      <hr class="mt-6 border-surface-line" />
    </div>

    <nav class="mt-6 grid gap-2 px-4 pb-8" aria-label="Menu utama">
      <template v-for="item in items" :key="item.key">
        <template v-if="item.children">
          <button
            type="button"
            class="nav-item w-full justify-between"
            :class="isItemActive(item) || isBuatOpen ? 'nav-item-active' : 'nav-item-idle'"
            @click="onBuatClick"
          >
            <span>{{ item.label }}</span>
            <svg
              class="h-2 w-2 transition-transform duration-300"
              :class="isBuatOpen ? 'rotate-0' : 'rotate-180'"
              viewBox="0 0 14 8"
              fill="none"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </button>

          <div v-show="isBuatOpen" class="ml-12 space-y-3">
            <router-link
              v-for="child in item.children"
              :key="child.key"
              :to="child.to"
              class="block text-sm hover:text-brand"
              :class="isMatch(child.match) ? 'font-semibold text-brand' : 'text-ink'"
            >
              {{ child.label }}
            </router-link>
          </div>
        </template>

        <router-link
          v-else
          :to="item.to"
          class="nav-item"
          :class="isItemActive(item) ? 'nav-item-active' : 'nav-item-idle'"
        >
          {{ item.label }}
        </router-link>
      </template>
    </nav>
  </aside>
</template>
