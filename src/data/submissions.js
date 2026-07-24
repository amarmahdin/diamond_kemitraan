/** Mock FE data — ganti dengan API nanti tanpa ubah komponen list. */

export const dashboardRows = [
  { id: 1, title: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', startDate: '25/08/2024', endDate: '02/09/2024', status: 'Selesai' },
  { id: 2, title: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi' },
  { id: 3, title: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', startDate: '10/08/2024', endDate: '11/09/2024', status: 'Selesai' },
  { id: 4, title: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Revisi' },
  { id: 5, title: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Selesai' },
  { id: 6, title: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '02/09/2024', status: 'Revisi' },
  { id: 7, title: 'NDA Penjajakan Kerja Sama berkaitan', code: '300223', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai' },
  { id: 8, title: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Revisi' },
  { id: 9, title: 'Kerja Sama Reseller Produk IBM', code: '100124', type: 'PKS', startDate: '09/09/2024', endDate: '02/09/2024', status: 'Selesai' },
  { id: 10, title: 'Perjanjian Mitra Bisnis IBM', code: '100225', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Revisi' },
  { id: 11, title: 'Kerja Sama Reseller Produk IBM', code: '100326', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai' },
  { id: 12, title: 'NDA FTTH Project Collaboration', code: '300127', type: 'NDA', startDate: '09/09/2024', endDate: '09/09/2024', status: 'Revisi' },
]

export const draftRows = [
  { id: 1, title: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Approval Manager' },
  { id: 2, title: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Approval VP' },
  { id: 3, title: 'Kerja Sama Reseller Produk IBM', code: '100322', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Approval Direksi' },
  { id: 4, title: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Revisi' },
  { id: 5, title: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Waiting Approval' },
  { id: 6, title: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Approval Manager' },
  { id: 7, title: 'NDA Penjajakan Kerja Sama berkaitan', code: '300223', type: 'NDA', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Approval Manager' },
  { id: 8, title: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Approval Manager' },
]

export const prosesRows = [
  { id: 1, title: 'Sewa Menyewa Infrastruktur Telekomunikasi', code: '101224', type: 'PKS', progres: 'Masuk Kemitraan' },
  { id: 2, title: 'MoU Rencana Kerja Sama Pemanfaatan', code: '200724', type: 'MoU', progres: 'Proposal' },
  { id: 3, title: 'MoU Rencana Kerja Sama Sistem Informasi', code: '201723', type: 'MoU', progres: 'MoU' },
  { id: 4, title: 'Kerja Sama Reseller Penyediaan Perangkat', code: '101225', type: 'PKS', progres: 'Proposal' },
  { id: 5, title: 'Sewa Menyewa Infrastruktur Telekomunikasi', code: '201124', type: 'MoU', progres: 'Surat Penawaran' },
  { id: 6, title: 'Kerja Sama Reseller Penyediaan Produk', code: '101226', type: 'PKS', progres: 'Evaluasi' },
  { id: 7, title: 'MoU Kerjasama Penyelenggaraan Layanan', code: '200824', type: 'MoU', progres: 'MoU' },
  { id: 8, title: 'MoU Kerja Sama Penyelenggaraan Jaringan', code: '101524', type: 'MoU', progres: 'Surat Penawaran' },
  { id: 9, title: 'Sewa Menyewa Infrastruktur Telekomunikasi', code: '101227', type: 'PKS', progres: 'Masuk Kemitraan' },
  { id: 10, title: 'MoU Rencana Kerja Sama Pemanfaatan', code: '200725', type: 'MoU', progres: 'Proposal' },
]

export const selesaiRows = [
  { id: 1, title: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', startDate: '25/08/2024', endDate: '02/09/2024', status: 'Selesai' },
  { id: 2, title: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai' },
  { id: 3, title: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Selesai' },
  { id: 4, title: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', startDate: '01/08/2024', endDate: '09/09/2024', status: 'Selesai' },
  { id: 5, title: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', startDate: '10/08/2024', endDate: '02/09/2024', status: 'Selesai' },
  { id: 6, title: 'NDA Penjajakan Kerja Sama berkaitan', code: '300223', type: 'NDA', startDate: '01/08/2024', endDate: '11/09/2024', status: 'Selesai' },
  { id: 7, title: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', startDate: '01/08/2024', endDate: '02/09/2024', status: 'Selesai' },
  { id: 8, title: 'Kerja Sama Reseller Produk IBM', code: '100124', type: 'PKS', startDate: '09/09/2024', endDate: '02/09/2024', status: 'Selesai' },
]

export const approvalBaruRows = [
  { id: 1, title: 'Kerja Sama Reseller Produk IBM', code: '100122', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Perlu Disetujui' },
  { id: 2, title: 'Perjanjian Mitra Bisnis IBM', code: '100222', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Perlu Disetujui' },
  { id: 3, title: 'MoU Kerja Sama Pengembangan Jaringan', code: '200923', type: 'MoU', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Perlu Disetujui' },
  { id: 4, title: 'NDA FTTH Project Collaboration', code: '300122', type: 'NDA', pelaksana: 'Pusat', status: 'Revisi Mayor', statusAp: 'Perlu Disetujui' },
  { id: 5, title: 'MoU Rencana Kerja Sama Terkait', code: '200223', type: 'MoU', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Perlu Disetujui' },
  { id: 6, title: 'Kerja Sama Penyediaan APN Private', code: '100523', type: 'PKS', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Perlu Disetujui' },
  { id: 7, title: 'NDA Penjajakan Kerja Sama berkaitan', code: '300223', type: 'NDA', pelaksana: 'Pusat', status: 'Revisi Mayor', statusAp: 'Perlu Disetujui' },
  { id: 8, title: 'MoU Rencana Kerja Sama Terkait Pe', code: '200423', type: 'MoU', pelaksana: 'Pusat', status: 'Draft', statusAp: 'Perlu Disetujui' },
]

export const approvalDisetujuiRows = approvalBaruRows.map((row) => ({
  ...row,
  statusAp: 'Disetujui',
}))

export const approvalDitolakRows = approvalBaruRows.map((row) => ({
  ...row,
  statusAp: 'Ditolak',
  status: row.status === 'Revisi Mayor' ? 'Revisi Mayor' : 'Draft',
}))
