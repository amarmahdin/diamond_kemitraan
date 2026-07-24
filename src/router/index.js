import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import AppLayout from '@/layouts/AppLayout.vue'

import Login from '@/pages/Login.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Draft from '@/pages/Draft.vue'
import Proses from '@/pages/Proses.vue'
import Selesai from '@/pages/Selesai.vue'
import Detaildraft from '@/pages/Detaildraft.vue'
import Detailproses from '@/pages/Detailproses.vue'
import DetailMoU from '@/pages/DetailMoU.vue'

import Pengajuanbaru from '@/pages/Admin/Approval/Pengajuanbaru.vue'
import Disetujui from '@/pages/Admin/Approval/Disetujui.vue'
import Ditolak from '@/pages/Admin/Approval/Ditolak.vue'
import Detailmanager from '@/pages/Admin/Detailmanager.vue'

import MoU from '@/pages/MoU/Mou.vue'
import Ruanglingkup from '@/pages/MoU/Ruanglingkup.vue'
import Lainnya from '@/pages/MoU/Lainnya.vue'
import Mitrabisnis from '@/pages/MoU/Mitrabisnis.vue'
import Lampiran from '@/pages/MoU/Lampiran.vue'

import PKS from '@/pages/PKS/Pks.vue'
import Rab from '@/pages/PKS/Rab.vue'
import Pksruanglingkup from '@/pages/PKS/Pksruanglingkup.vue'
import Pkslainnya from '@/pages/PKS/Pkslainnya.vue'
import Pksmitrabisnis from '@/pages/PKS/Pksmitrabisnis.vue'
import Pkslampiran from '@/pages/PKS/Pkslampiran.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { public: true },
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      // User
      {
        path: 'Dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { roles: ['user'] },
      },
      {
        path: 'Draft',
        name: 'Draft',
        component: Draft,
        meta: { roles: ['user'] },
      },
      {
        path: 'Proses',
        name: 'Proses',
        component: Proses,
        meta: { roles: ['user'] },
      },
      {
        path: 'Selesai',
        name: 'Selesai',
        component: Selesai,
        meta: { roles: ['user'] },
      },
      {
        path: 'Detaildraft',
        name: 'Detaildraft',
        component: Detaildraft,
        meta: { roles: ['user'] },
      },
      {
        path: 'Detailproses',
        name: 'Detailproses',
        component: Detailproses,
        meta: { roles: ['user'] },
      },
      {
        path: 'DetailMoU',
        name: 'DetailMoU',
        component: DetailMoU,
        meta: { roles: ['user'] },
      },

      // Admin — reuse user views where UI identical
      {
        path: 'Dashboardadmin',
        name: 'Dashboardmanager',
        component: Dashboard,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Approvalpengajuanbaru',
        name: 'Pengajuanbaru',
        component: Pengajuanbaru,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Approvaldisetujui',
        name: 'Disetujui',
        component: Disetujui,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Approvalditolak',
        name: 'Ditolak',
        component: Ditolak,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Prosesadmin',
        name: 'Prosesmanager',
        component: Proses,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Selesaiadmin',
        name: 'Selesaimanager',
        component: Selesai,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Detailpengajuanadmin',
        name: 'Detailmanager',
        component: Detailmanager,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'Detailprosesmanager',
        name: 'Detailprosesmanager',
        component: Detailproses,
        meta: { roles: ['admin'], layout: 'admin' },
      },
      {
        path: 'DetailMoUmanager',
        name: 'DetailMoUmanager',
        component: DetailMoU,
        meta: { roles: ['admin'], layout: 'admin' },
      },

      // MoU
      {
        path: 'MoU-NDA',
        name: 'MoU',
        component: MoU,
        meta: { roles: ['user'] },
      },
      {
        path: 'Ruanglingkup',
        name: 'Ruanglingkup',
        component: Ruanglingkup,
        meta: { roles: ['user'] },
      },
      {
        path: 'Lainnya',
        name: 'Lainnya',
        component: Lainnya,
        meta: { roles: ['user'] },
      },
      {
        path: 'Mitrabisnis',
        name: 'Mitrabisnis',
        component: Mitrabisnis,
        meta: { roles: ['user'] },
      },
      {
        path: 'Lampiran',
        name: 'Lampiran',
        component: Lampiran,
        meta: { roles: ['user'] },
      },

      // PKS
      {
        path: 'PKS',
        name: 'PKS',
        component: PKS,
        meta: { roles: ['user'] },
      },
      {
        path: 'Rab',
        name: 'Rab',
        component: Rab,
        meta: { roles: ['user'] },
      },
      {
        path: 'Pksruanglingkup',
        name: 'Pksruanglingkup',
        component: Pksruanglingkup,
        meta: { roles: ['user'] },
      },
      {
        path: 'Pkslainnya',
        name: 'Pkslainnya',
        component: Pkslainnya,
        meta: { roles: ['user'] },
      },
      {
        path: 'Pksmitrabisnis',
        name: 'Pksmitrabisnis',
        component: Pksmitrabisnis,
        meta: { roles: ['user'] },
      },
      {
        path: 'Pkslampiran',
        name: 'Pkslampiran',
        component: Pkslampiran,
        meta: { roles: ['user'] },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (to.meta.public) {
    if (auth.isAuthenticated && to.name === 'Login') {
      return auth.role === 'admin' ? '/Dashboardadmin' : '/Dashboard'
    }
    return true
  }

  if (!auth.isAuthenticated) {
    return { name: 'Login', query: { ...to.query, redirect: to.fullPath } }
  }

  const roles = to.meta.roles
  if (Array.isArray(roles) && roles.length && !roles.includes(auth.role)) {
    return auth.role === 'admin' ? '/Dashboardadmin' : '/Dashboard'
  }

  return true
})

export default router
