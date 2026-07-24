export const MOU_STEPS = [
  'Dasar',
  'Ruang Lingkup',
  'Lainnya',
  'Daftar Mitra Bisnis',
  'Lampiran',
]

export const PKS_STEPS = [
  'Dasar',
  'RAB',
  'Ruang Lingkup',
  'Lainnya',
  'Daftar Mitra Bisnis',
  'Lampiran',
]

export const USER_NAV = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    to: '/Dashboard',
    match: ['Dashboard'],
  },
  {
    key: 'buat',
    label: 'Buat',
    children: [
      {
        key: 'mou',
        label: 'MoU/NDA',
        to: '/MoU-NDA',
        match: ['MoU', 'Ruanglingkup', 'Lainnya', 'Mitrabisnis', 'Lampiran'],
      },
      {
        key: 'pks',
        label: 'PKS',
        to: '/PKS',
        match: ['PKS', 'Rab', 'Pksruanglingkup', 'Pkslainnya', 'Pksmitrabisnis', 'Pkslampiran'],
      },
    ],
  },
  {
    key: 'draft',
    label: 'Draft',
    to: '/Draft',
    match: ['Draft', 'Detaildraft'],
  },
  {
    key: 'proses',
    label: 'Proses',
    to: '/Proses',
    match: ['Proses', 'Detailproses', 'DetailMoU'],
  },
  {
    key: 'selesai',
    label: 'Selesai',
    to: '/Selesai',
    match: ['Selesai'],
  },
]

export const ADMIN_NAV = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    to: '/Dashboardadmin',
    match: ['Dashboardmanager'],
  },
  {
    key: 'approval',
    label: 'Approval',
    to: '/Approvalpengajuanbaru',
    match: ['Pengajuanbaru', 'Disetujui', 'Ditolak', 'Detailmanager'],
  },
  {
    key: 'proses',
    label: 'Proses',
    to: '/Prosesadmin',
    match: ['Prosesmanager', 'Detailprosesmanager', 'DetailMoUmanager'],
  },
  {
    key: 'selesai',
    label: 'Selesai',
    to: '/Selesaiadmin',
    match: ['Selesaimanager'],
  },
]
