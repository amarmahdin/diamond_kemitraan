import { defineStore } from 'pinia'

const STORAGE_KEY = 'imitra-auth-v1'

/** Demo: username yang diawali "admin" (case-insensitive) → peran admin; selain itu → user. */
export function resolveRoleFromUsername(username) {
  const u = String(username || '').trim()
  return /^admin/i.test(u) ? 'admin' : 'user'
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    /** @type {'user' | 'admin' | null} */
    role: null,
  }),
  getters: {
    isAuthenticated: (s) => s.role === 'user' || s.role === 'admin',
  },
  actions: {
    hydrateFromStorage() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return
        const data = JSON.parse(raw)
        const role = data?.role
        const username = data?.username
        if ((role === 'user' || role === 'admin') && typeof username === 'string' && username) {
          this.username = username
          this.role = role
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    },
    persist() {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ username: this.username, role: this.role }),
      )
    },
    /**
     * @returns {{ ok: true, role: 'user' | 'admin' } | { ok: false, reason: 'empty' }}
     */
    login(username, password) {
      const u = String(username || '').trim()
      const p = String(password || '')
      if (!u || !p) return { ok: false, reason: 'empty' }
      const role = resolveRoleFromUsername(u)
      this.username = u
      this.role = role
      this.persist()
      return { ok: true, role }
    },
    logout() {
      this.username = ''
      this.role = null
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})
