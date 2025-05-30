// src/slices/auth.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from '@/app/services/auth'

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true
      state.error = null
    },
    loginSuccess(state, action: PayloadAction<{ user: User; token: string }>) {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
      state.loading = false
      state.error = null
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      state.error = null
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
      state.isAuthenticated = true
    }
  }
})

export const { loginStart, loginSuccess, loginFailure, logout, setUser } = authSlice.actions
export default authSlice.reducer
