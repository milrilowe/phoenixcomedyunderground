/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'
import { Route as AppLayoutImport } from './routes/_appLayout'
import { Route as AppLayoutIndexImport } from './routes/_appLayout/index'
import { Route as AppLayoutCountImport } from './routes/_appLayout/count'
import { Route as AppLayoutContactImport } from './routes/_appLayout/contact'
import { Route as AppLayoutCalendarImport } from './routes/_appLayout/calendar'
import { Route as AuthDashboardLayoutRouteImport } from './routes/_auth/_dashboardLayout/route'
import { Route as AuthDashboardLayoutDashboardIndexImport } from './routes/_auth/_dashboardLayout/dashboard/index'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutRoute = AppLayoutImport.update({
  id: '/_appLayout',
  getParentRoute: () => rootRoute,
} as any)

const AppLayoutIndexRoute = AppLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutCountRoute = AppLayoutCountImport.update({
  id: '/count',
  path: '/count',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutContactRoute = AppLayoutContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AppLayoutCalendarRoute = AppLayoutCalendarImport.update({
  id: '/calendar',
  path: '/calendar',
  getParentRoute: () => AppLayoutRoute,
} as any)

const AuthDashboardLayoutRouteRoute = AuthDashboardLayoutRouteImport.update({
  id: '/_dashboardLayout',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDashboardLayoutDashboardIndexRoute =
  AuthDashboardLayoutDashboardIndexImport.update({
    id: '/dashboard/',
    path: '/dashboard/',
    getParentRoute: () => AuthDashboardLayoutRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_appLayout': {
      id: '/_appLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/_dashboardLayout': {
      id: '/_auth/_dashboardLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthDashboardLayoutRouteImport
      parentRoute: typeof AuthImport
    }
    '/_appLayout/calendar': {
      id: '/_appLayout/calendar'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof AppLayoutCalendarImport
      parentRoute: typeof AppLayoutImport
    }
    '/_appLayout/contact': {
      id: '/_appLayout/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof AppLayoutContactImport
      parentRoute: typeof AppLayoutImport
    }
    '/_appLayout/count': {
      id: '/_appLayout/count'
      path: '/count'
      fullPath: '/count'
      preLoaderRoute: typeof AppLayoutCountImport
      parentRoute: typeof AppLayoutImport
    }
    '/_appLayout/': {
      id: '/_appLayout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppLayoutIndexImport
      parentRoute: typeof AppLayoutImport
    }
    '/_auth/_dashboardLayout/dashboard/': {
      id: '/_auth/_dashboardLayout/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthDashboardLayoutDashboardIndexImport
      parentRoute: typeof AuthDashboardLayoutRouteImport
    }
  }
}

// Create and export the route tree

interface AppLayoutRouteChildren {
  AppLayoutCalendarRoute: typeof AppLayoutCalendarRoute
  AppLayoutContactRoute: typeof AppLayoutContactRoute
  AppLayoutCountRoute: typeof AppLayoutCountRoute
  AppLayoutIndexRoute: typeof AppLayoutIndexRoute
}

const AppLayoutRouteChildren: AppLayoutRouteChildren = {
  AppLayoutCalendarRoute: AppLayoutCalendarRoute,
  AppLayoutContactRoute: AppLayoutContactRoute,
  AppLayoutCountRoute: AppLayoutCountRoute,
  AppLayoutIndexRoute: AppLayoutIndexRoute,
}

const AppLayoutRouteWithChildren = AppLayoutRoute._addFileChildren(
  AppLayoutRouteChildren,
)

interface AuthDashboardLayoutRouteRouteChildren {
  AuthDashboardLayoutDashboardIndexRoute: typeof AuthDashboardLayoutDashboardIndexRoute
}

const AuthDashboardLayoutRouteRouteChildren: AuthDashboardLayoutRouteRouteChildren =
  {
    AuthDashboardLayoutDashboardIndexRoute:
      AuthDashboardLayoutDashboardIndexRoute,
  }

const AuthDashboardLayoutRouteRouteWithChildren =
  AuthDashboardLayoutRouteRoute._addFileChildren(
    AuthDashboardLayoutRouteRouteChildren,
  )

interface AuthRouteChildren {
  AuthDashboardLayoutRouteRoute: typeof AuthDashboardLayoutRouteRouteWithChildren
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthDashboardLayoutRouteRoute: AuthDashboardLayoutRouteRouteWithChildren,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthDashboardLayoutRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/calendar': typeof AppLayoutCalendarRoute
  '/contact': typeof AppLayoutContactRoute
  '/count': typeof AppLayoutCountRoute
  '/': typeof AppLayoutIndexRoute
  '/dashboard': typeof AuthDashboardLayoutDashboardIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthDashboardLayoutRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/calendar': typeof AppLayoutCalendarRoute
  '/contact': typeof AppLayoutContactRoute
  '/count': typeof AppLayoutCountRoute
  '/': typeof AppLayoutIndexRoute
  '/dashboard': typeof AuthDashboardLayoutDashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_appLayout': typeof AppLayoutRouteWithChildren
  '/_auth': typeof AuthRouteWithChildren
  '/login': typeof LoginRoute
  '/_auth/_dashboardLayout': typeof AuthDashboardLayoutRouteRouteWithChildren
  '/_appLayout/calendar': typeof AppLayoutCalendarRoute
  '/_appLayout/contact': typeof AppLayoutContactRoute
  '/_appLayout/count': typeof AppLayoutCountRoute
  '/_appLayout/': typeof AppLayoutIndexRoute
  '/_auth/_dashboardLayout/dashboard/': typeof AuthDashboardLayoutDashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/calendar'
    | '/contact'
    | '/count'
    | '/'
    | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/login' | '/calendar' | '/contact' | '/count' | '/' | '/dashboard'
  id:
    | '__root__'
    | '/_appLayout'
    | '/_auth'
    | '/login'
    | '/_auth/_dashboardLayout'
    | '/_appLayout/calendar'
    | '/_appLayout/contact'
    | '/_appLayout/count'
    | '/_appLayout/'
    | '/_auth/_dashboardLayout/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppLayoutRoute: typeof AppLayoutRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  AppLayoutRoute: AppLayoutRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_appLayout",
        "/_auth",
        "/login"
      ]
    },
    "/_appLayout": {
      "filePath": "_appLayout.tsx",
      "children": [
        "/_appLayout/calendar",
        "/_appLayout/contact",
        "/_appLayout/count",
        "/_appLayout/"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/_dashboardLayout"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_auth/_dashboardLayout": {
      "filePath": "_auth/_dashboardLayout/route.tsx",
      "parent": "/_auth",
      "children": [
        "/_auth/_dashboardLayout/dashboard/"
      ]
    },
    "/_appLayout/calendar": {
      "filePath": "_appLayout/calendar.tsx",
      "parent": "/_appLayout"
    },
    "/_appLayout/contact": {
      "filePath": "_appLayout/contact.tsx",
      "parent": "/_appLayout"
    },
    "/_appLayout/count": {
      "filePath": "_appLayout/count.tsx",
      "parent": "/_appLayout"
    },
    "/_appLayout/": {
      "filePath": "_appLayout/index.tsx",
      "parent": "/_appLayout"
    },
    "/_auth/_dashboardLayout/dashboard/": {
      "filePath": "_auth/_dashboardLayout/dashboard/index.tsx",
      "parent": "/_auth/_dashboardLayout"
    }
  }
}
ROUTE_MANIFEST_END */
