export const DOCUMENT_TYPES = ['PKS', 'NDA', 'MoU']

export const DRAFT_STATUS_OPTIONS = [
  'Approval Manager',
  'Approval VP',
  'Approval Direksi',
  'Waiting Approval',
  'Revisi',
]

export const DASHBOARD_STATUS_OPTIONS = ['Selesai', 'Revisi']

export const APPROVAL_STATUS_OPTIONS = ['Draft', 'Revisi Mayor']

export function statusTone(status = '') {
  const value = String(status).toLowerCase()
  if (value.includes('selesai') || value.includes('disetujui') || value.includes('masuk kemitraan')) {
    return 'bg-[#E2FCF3] text-[#0EA976] border-[#8ADFC3]'
  }
  if (value.includes('tolak') || value.includes('ditolak')) {
    return 'bg-[#FFECEC] text-[#FF5656] border-[#FFB3B3]'
  }
  if (value.includes('revisi mayor') || value.includes('waiting')) {
    return 'bg-[#FFF6E1] text-[#FFB200] border-[#FFD064]'
  }
  if (value.includes('revisi')) {
    return 'bg-[#FFF3E6] text-[#FF8000] border-[#FFD6AD]'
  }
  if (value.includes('draft') || value.includes('proposal') || value.includes('mou') || value.includes('evaluasi') || value.includes('surat') || value.includes('perlu')) {
    return 'bg-[#E7F1FD] text-[#4791F2] border-[#91BEF7]'
  }
  return 'bg-brand-soft text-brand border-brand-light'
}
