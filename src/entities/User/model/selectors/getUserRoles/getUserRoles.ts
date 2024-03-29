import { createSelector } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider'

import { UserRole } from '../../consts'

export const getUserRoles = (state: StateSchema) => state.user?.authData?.roles

export const isUserAdmin = createSelector(getUserRoles, userRoles =>
    Boolean(userRoles?.includes(UserRole.ADMIN)),
)

export const isUserManager = createSelector(getUserRoles, userRoles =>
    Boolean(userRoles?.includes(UserRole.MANAGER)),
)
