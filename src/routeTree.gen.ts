/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthenticatedSettingsImport } from './routes/_authenticated/settings'
import { Route as AuthenticatedProfileImport } from './routes/_authenticated/profile'
import { Route as AuthenticatedWorkspacesIndexImport } from './routes/_authenticated/workspaces/index'
import { Route as AuthenticatedTagsIndexImport } from './routes/_authenticated/tags/index'
import { Route as AuthenticatedItemsIndexImport } from './routes/_authenticated/items/index'
import { Route as AuthenticatedContainersIndexImport } from './routes/_authenticated/containers/index'
import { Route as AuthenticatedCadenceIndexImport } from './routes/_authenticated/cadence/index'
import { Route as AuthenticatedWorkspacesWorkspaceIdImport } from './routes/_authenticated/workspaces/$workspaceId'
import { Route as AuthenticatedTagsTagIdImport } from './routes/_authenticated/tags/$tagId'
import { Route as AuthenticatedItemsItemIdImport } from './routes/_authenticated/items/$itemId'
import { Route as AuthenticatedContainersContainerIdImport } from './routes/_authenticated/containers/$containerId'
import { Route as AuthenticatedTagsAssignIndexImport } from './routes/_authenticated/tags/assign/index'
import { Route as AuthenticatedItemsAssignIndexImport } from './routes/_authenticated/items/assign/index'
import { Route as AuthenticatedContainersAssignIndexImport } from './routes/_authenticated/containers/assign/index'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedSettingsRoute = AuthenticatedSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedProfileRoute = AuthenticatedProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedWorkspacesIndexRoute =
  AuthenticatedWorkspacesIndexImport.update({
    id: '/workspaces/',
    path: '/workspaces/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedTagsIndexRoute = AuthenticatedTagsIndexImport.update({
  id: '/tags/',
  path: '/tags/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedItemsIndexRoute = AuthenticatedItemsIndexImport.update({
  id: '/items/',
  path: '/items/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedContainersIndexRoute =
  AuthenticatedContainersIndexImport.update({
    id: '/containers/',
    path: '/containers/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceIndexRoute = AuthenticatedCadenceIndexImport.update({
  id: '/cadence/',
  path: '/cadence/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedWorkspacesWorkspaceIdRoute =
  AuthenticatedWorkspacesWorkspaceIdImport.update({
    id: '/workspaces/$workspaceId',
    path: '/workspaces/$workspaceId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedTagsTagIdRoute = AuthenticatedTagsTagIdImport.update({
  id: '/tags/$tagId',
  path: '/tags/$tagId',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedItemsItemIdRoute = AuthenticatedItemsItemIdImport.update({
  id: '/items/$itemId',
  path: '/items/$itemId',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedContainersContainerIdRoute =
  AuthenticatedContainersContainerIdImport.update({
    id: '/containers/$containerId',
    path: '/containers/$containerId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedTagsAssignIndexRoute =
  AuthenticatedTagsAssignIndexImport.update({
    id: '/tags/assign/',
    path: '/tags/assign/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedItemsAssignIndexRoute =
  AuthenticatedItemsAssignIndexImport.update({
    id: '/items/assign/',
    path: '/items/assign/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedContainersAssignIndexRoute =
  AuthenticatedContainersAssignIndexImport.update({
    id: '/containers/assign/',
    path: '/containers/assign/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/profile': {
      id: '/_authenticated/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/settings': {
      id: '/_authenticated/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthenticatedSettingsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/containers/$containerId': {
      id: '/_authenticated/containers/$containerId'
      path: '/containers/$containerId'
      fullPath: '/containers/$containerId'
      preLoaderRoute: typeof AuthenticatedContainersContainerIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/items/$itemId': {
      id: '/_authenticated/items/$itemId'
      path: '/items/$itemId'
      fullPath: '/items/$itemId'
      preLoaderRoute: typeof AuthenticatedItemsItemIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/tags/$tagId': {
      id: '/_authenticated/tags/$tagId'
      path: '/tags/$tagId'
      fullPath: '/tags/$tagId'
      preLoaderRoute: typeof AuthenticatedTagsTagIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/workspaces/$workspaceId': {
      id: '/_authenticated/workspaces/$workspaceId'
      path: '/workspaces/$workspaceId'
      fullPath: '/workspaces/$workspaceId'
      preLoaderRoute: typeof AuthenticatedWorkspacesWorkspaceIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/': {
      id: '/_authenticated/cadence/'
      path: '/cadence'
      fullPath: '/cadence'
      preLoaderRoute: typeof AuthenticatedCadenceIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/containers/': {
      id: '/_authenticated/containers/'
      path: '/containers'
      fullPath: '/containers'
      preLoaderRoute: typeof AuthenticatedContainersIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/items/': {
      id: '/_authenticated/items/'
      path: '/items'
      fullPath: '/items'
      preLoaderRoute: typeof AuthenticatedItemsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/tags/': {
      id: '/_authenticated/tags/'
      path: '/tags'
      fullPath: '/tags'
      preLoaderRoute: typeof AuthenticatedTagsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/workspaces/': {
      id: '/_authenticated/workspaces/'
      path: '/workspaces'
      fullPath: '/workspaces'
      preLoaderRoute: typeof AuthenticatedWorkspacesIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/containers/assign/': {
      id: '/_authenticated/containers/assign/'
      path: '/containers/assign'
      fullPath: '/containers/assign'
      preLoaderRoute: typeof AuthenticatedContainersAssignIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/items/assign/': {
      id: '/_authenticated/items/assign/'
      path: '/items/assign'
      fullPath: '/items/assign'
      preLoaderRoute: typeof AuthenticatedItemsAssignIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/tags/assign/': {
      id: '/_authenticated/tags/assign/'
      path: '/tags/assign'
      fullPath: '/tags/assign'
      preLoaderRoute: typeof AuthenticatedTagsAssignIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedProfileRoute: typeof AuthenticatedProfileRoute
  AuthenticatedSettingsRoute: typeof AuthenticatedSettingsRoute
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedContainersContainerIdRoute: typeof AuthenticatedContainersContainerIdRoute
  AuthenticatedItemsItemIdRoute: typeof AuthenticatedItemsItemIdRoute
  AuthenticatedTagsTagIdRoute: typeof AuthenticatedTagsTagIdRoute
  AuthenticatedWorkspacesWorkspaceIdRoute: typeof AuthenticatedWorkspacesWorkspaceIdRoute
  AuthenticatedCadenceIndexRoute: typeof AuthenticatedCadenceIndexRoute
  AuthenticatedContainersIndexRoute: typeof AuthenticatedContainersIndexRoute
  AuthenticatedItemsIndexRoute: typeof AuthenticatedItemsIndexRoute
  AuthenticatedTagsIndexRoute: typeof AuthenticatedTagsIndexRoute
  AuthenticatedWorkspacesIndexRoute: typeof AuthenticatedWorkspacesIndexRoute
  AuthenticatedContainersAssignIndexRoute: typeof AuthenticatedContainersAssignIndexRoute
  AuthenticatedItemsAssignIndexRoute: typeof AuthenticatedItemsAssignIndexRoute
  AuthenticatedTagsAssignIndexRoute: typeof AuthenticatedTagsAssignIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedProfileRoute: AuthenticatedProfileRoute,
  AuthenticatedSettingsRoute: AuthenticatedSettingsRoute,
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedContainersContainerIdRoute:
    AuthenticatedContainersContainerIdRoute,
  AuthenticatedItemsItemIdRoute: AuthenticatedItemsItemIdRoute,
  AuthenticatedTagsTagIdRoute: AuthenticatedTagsTagIdRoute,
  AuthenticatedWorkspacesWorkspaceIdRoute:
    AuthenticatedWorkspacesWorkspaceIdRoute,
  AuthenticatedCadenceIndexRoute: AuthenticatedCadenceIndexRoute,
  AuthenticatedContainersIndexRoute: AuthenticatedContainersIndexRoute,
  AuthenticatedItemsIndexRoute: AuthenticatedItemsIndexRoute,
  AuthenticatedTagsIndexRoute: AuthenticatedTagsIndexRoute,
  AuthenticatedWorkspacesIndexRoute: AuthenticatedWorkspacesIndexRoute,
  AuthenticatedContainersAssignIndexRoute:
    AuthenticatedContainersAssignIndexRoute,
  AuthenticatedItemsAssignIndexRoute: AuthenticatedItemsAssignIndexRoute,
  AuthenticatedTagsAssignIndexRoute: AuthenticatedTagsAssignIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/settings': typeof AuthenticatedSettingsRoute
  '/': typeof AuthenticatedIndexRoute
  '/containers/$containerId': typeof AuthenticatedContainersContainerIdRoute
  '/items/$itemId': typeof AuthenticatedItemsItemIdRoute
  '/tags/$tagId': typeof AuthenticatedTagsTagIdRoute
  '/workspaces/$workspaceId': typeof AuthenticatedWorkspacesWorkspaceIdRoute
  '/cadence': typeof AuthenticatedCadenceIndexRoute
  '/containers': typeof AuthenticatedContainersIndexRoute
  '/items': typeof AuthenticatedItemsIndexRoute
  '/tags': typeof AuthenticatedTagsIndexRoute
  '/workspaces': typeof AuthenticatedWorkspacesIndexRoute
  '/containers/assign': typeof AuthenticatedContainersAssignIndexRoute
  '/items/assign': typeof AuthenticatedItemsAssignIndexRoute
  '/tags/assign': typeof AuthenticatedTagsAssignIndexRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/profile': typeof AuthenticatedProfileRoute
  '/settings': typeof AuthenticatedSettingsRoute
  '/': typeof AuthenticatedIndexRoute
  '/containers/$containerId': typeof AuthenticatedContainersContainerIdRoute
  '/items/$itemId': typeof AuthenticatedItemsItemIdRoute
  '/tags/$tagId': typeof AuthenticatedTagsTagIdRoute
  '/workspaces/$workspaceId': typeof AuthenticatedWorkspacesWorkspaceIdRoute
  '/cadence': typeof AuthenticatedCadenceIndexRoute
  '/containers': typeof AuthenticatedContainersIndexRoute
  '/items': typeof AuthenticatedItemsIndexRoute
  '/tags': typeof AuthenticatedTagsIndexRoute
  '/workspaces': typeof AuthenticatedWorkspacesIndexRoute
  '/containers/assign': typeof AuthenticatedContainersAssignIndexRoute
  '/items/assign': typeof AuthenticatedItemsAssignIndexRoute
  '/tags/assign': typeof AuthenticatedTagsAssignIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/_authenticated/profile': typeof AuthenticatedProfileRoute
  '/_authenticated/settings': typeof AuthenticatedSettingsRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/containers/$containerId': typeof AuthenticatedContainersContainerIdRoute
  '/_authenticated/items/$itemId': typeof AuthenticatedItemsItemIdRoute
  '/_authenticated/tags/$tagId': typeof AuthenticatedTagsTagIdRoute
  '/_authenticated/workspaces/$workspaceId': typeof AuthenticatedWorkspacesWorkspaceIdRoute
  '/_authenticated/cadence/': typeof AuthenticatedCadenceIndexRoute
  '/_authenticated/containers/': typeof AuthenticatedContainersIndexRoute
  '/_authenticated/items/': typeof AuthenticatedItemsIndexRoute
  '/_authenticated/tags/': typeof AuthenticatedTagsIndexRoute
  '/_authenticated/workspaces/': typeof AuthenticatedWorkspacesIndexRoute
  '/_authenticated/containers/assign/': typeof AuthenticatedContainersAssignIndexRoute
  '/_authenticated/items/assign/': typeof AuthenticatedItemsAssignIndexRoute
  '/_authenticated/tags/assign/': typeof AuthenticatedTagsAssignIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/register'
    | '/profile'
    | '/settings'
    | '/'
    | '/containers/$containerId'
    | '/items/$itemId'
    | '/tags/$tagId'
    | '/workspaces/$workspaceId'
    | '/cadence'
    | '/containers'
    | '/items'
    | '/tags'
    | '/workspaces'
    | '/containers/assign'
    | '/items/assign'
    | '/tags/assign'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/register'
    | '/profile'
    | '/settings'
    | '/'
    | '/containers/$containerId'
    | '/items/$itemId'
    | '/tags/$tagId'
    | '/workspaces/$workspaceId'
    | '/cadence'
    | '/containers'
    | '/items'
    | '/tags'
    | '/workspaces'
    | '/containers/assign'
    | '/items/assign'
    | '/tags/assign'
  id:
    | '__root__'
    | '/_authenticated'
    | '/login'
    | '/register'
    | '/_authenticated/profile'
    | '/_authenticated/settings'
    | '/_authenticated/'
    | '/_authenticated/containers/$containerId'
    | '/_authenticated/items/$itemId'
    | '/_authenticated/tags/$tagId'
    | '/_authenticated/workspaces/$workspaceId'
    | '/_authenticated/cadence/'
    | '/_authenticated/containers/'
    | '/_authenticated/items/'
    | '/_authenticated/tags/'
    | '/_authenticated/workspaces/'
    | '/_authenticated/containers/assign/'
    | '/_authenticated/items/assign/'
    | '/_authenticated/tags/assign/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LoginRoute: typeof LoginRoute
  RegisterRoute: typeof RegisterRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LoginRoute: LoginRoute,
  RegisterRoute: RegisterRoute,
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
        "/_authenticated",
        "/login",
        "/register"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/profile",
        "/_authenticated/settings",
        "/_authenticated/",
        "/_authenticated/containers/$containerId",
        "/_authenticated/items/$itemId",
        "/_authenticated/tags/$tagId",
        "/_authenticated/workspaces/$workspaceId",
        "/_authenticated/cadence/",
        "/_authenticated/containers/",
        "/_authenticated/items/",
        "/_authenticated/tags/",
        "/_authenticated/workspaces/",
        "/_authenticated/containers/assign/",
        "/_authenticated/items/assign/",
        "/_authenticated/tags/assign/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/_authenticated/profile": {
      "filePath": "_authenticated/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/settings": {
      "filePath": "_authenticated/settings.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/containers/$containerId": {
      "filePath": "_authenticated/containers/$containerId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/items/$itemId": {
      "filePath": "_authenticated/items/$itemId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/tags/$tagId": {
      "filePath": "_authenticated/tags/$tagId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/workspaces/$workspaceId": {
      "filePath": "_authenticated/workspaces/$workspaceId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/": {
      "filePath": "_authenticated/cadence/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/containers/": {
      "filePath": "_authenticated/containers/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/items/": {
      "filePath": "_authenticated/items/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/tags/": {
      "filePath": "_authenticated/tags/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/workspaces/": {
      "filePath": "_authenticated/workspaces/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/containers/assign/": {
      "filePath": "_authenticated/containers/assign/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/items/assign/": {
      "filePath": "_authenticated/items/assign/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/tags/assign/": {
      "filePath": "_authenticated/tags/assign/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
