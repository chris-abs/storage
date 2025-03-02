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
import { Route as AuthenticatedCadenceIndexImport } from './routes/_authenticated/cadence/index'
import { Route as AuthenticatedUserSettingsImport } from './routes/_authenticated/user/settings'
import { Route as AuthenticatedUserProfileImport } from './routes/_authenticated/user/profile'
import { Route as AuthenticatedFamilySettingsImport } from './routes/_authenticated/family/settings'
import { Route as AuthenticatedCadenceStorageIndexImport } from './routes/_authenticated/cadence/storage/index'
import { Route as AuthenticatedCadenceServicesIndexImport } from './routes/_authenticated/cadence/services/index'
import { Route as AuthenticatedCadenceMealsIndexImport } from './routes/_authenticated/cadence/meals/index'
import { Route as AuthenticatedCadenceChoresIndexImport } from './routes/_authenticated/cadence/chores/index'
import { Route as AuthenticatedCadenceStorageWorkspacesIndexImport } from './routes/_authenticated/cadence/storage/workspaces/index'
import { Route as AuthenticatedCadenceStorageTagsIndexImport } from './routes/_authenticated/cadence/storage/tags/index'
import { Route as AuthenticatedCadenceStorageItemsIndexImport } from './routes/_authenticated/cadence/storage/items/index'
import { Route as AuthenticatedCadenceStorageContainersIndexImport } from './routes/_authenticated/cadence/storage/containers/index'
import { Route as AuthenticatedCadenceStorageWorkspacesWorkspaceIdImport } from './routes/_authenticated/cadence/storage/workspaces/$workspaceId'
import { Route as AuthenticatedCadenceStorageTagsTagIdImport } from './routes/_authenticated/cadence/storage/tags/$tagId'
import { Route as AuthenticatedCadenceStorageItemsItemIdImport } from './routes/_authenticated/cadence/storage/items/$itemId'
import { Route as AuthenticatedCadenceStorageContainersContainerIdImport } from './routes/_authenticated/cadence/storage/containers/$containerId'
import { Route as AuthenticatedCadenceStorageTagsAssignIndexImport } from './routes/_authenticated/cadence/storage/tags/assign/index'
import { Route as AuthenticatedCadenceStorageItemsAssignIndexImport } from './routes/_authenticated/cadence/storage/items/assign/index'
import { Route as AuthenticatedCadenceStorageContainersAssignIndexImport } from './routes/_authenticated/cadence/storage/containers/assign/index'

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

const AuthenticatedCadenceIndexRoute = AuthenticatedCadenceIndexImport.update({
  id: '/cadence/',
  path: '/cadence/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedUserSettingsRoute = AuthenticatedUserSettingsImport.update({
  id: '/user/settings',
  path: '/user/settings',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedUserProfileRoute = AuthenticatedUserProfileImport.update({
  id: '/user/profile',
  path: '/user/profile',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedFamilySettingsRoute =
  AuthenticatedFamilySettingsImport.update({
    id: '/family/settings',
    path: '/family/settings',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageIndexRoute =
  AuthenticatedCadenceStorageIndexImport.update({
    id: '/cadence/storage/',
    path: '/cadence/storage/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceServicesIndexRoute =
  AuthenticatedCadenceServicesIndexImport.update({
    id: '/cadence/services/',
    path: '/cadence/services/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceMealsIndexRoute =
  AuthenticatedCadenceMealsIndexImport.update({
    id: '/cadence/meals/',
    path: '/cadence/meals/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceChoresIndexRoute =
  AuthenticatedCadenceChoresIndexImport.update({
    id: '/cadence/chores/',
    path: '/cadence/chores/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageWorkspacesIndexRoute =
  AuthenticatedCadenceStorageWorkspacesIndexImport.update({
    id: '/cadence/storage/workspaces/',
    path: '/cadence/storage/workspaces/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageTagsIndexRoute =
  AuthenticatedCadenceStorageTagsIndexImport.update({
    id: '/cadence/storage/tags/',
    path: '/cadence/storage/tags/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageItemsIndexRoute =
  AuthenticatedCadenceStorageItemsIndexImport.update({
    id: '/cadence/storage/items/',
    path: '/cadence/storage/items/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageContainersIndexRoute =
  AuthenticatedCadenceStorageContainersIndexImport.update({
    id: '/cadence/storage/containers/',
    path: '/cadence/storage/containers/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute =
  AuthenticatedCadenceStorageWorkspacesWorkspaceIdImport.update({
    id: '/cadence/storage/workspaces/$workspaceId',
    path: '/cadence/storage/workspaces/$workspaceId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageTagsTagIdRoute =
  AuthenticatedCadenceStorageTagsTagIdImport.update({
    id: '/cadence/storage/tags/$tagId',
    path: '/cadence/storage/tags/$tagId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageItemsItemIdRoute =
  AuthenticatedCadenceStorageItemsItemIdImport.update({
    id: '/cadence/storage/items/$itemId',
    path: '/cadence/storage/items/$itemId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageContainersContainerIdRoute =
  AuthenticatedCadenceStorageContainersContainerIdImport.update({
    id: '/cadence/storage/containers/$containerId',
    path: '/cadence/storage/containers/$containerId',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageTagsAssignIndexRoute =
  AuthenticatedCadenceStorageTagsAssignIndexImport.update({
    id: '/cadence/storage/tags/assign/',
    path: '/cadence/storage/tags/assign/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageItemsAssignIndexRoute =
  AuthenticatedCadenceStorageItemsAssignIndexImport.update({
    id: '/cadence/storage/items/assign/',
    path: '/cadence/storage/items/assign/',
    getParentRoute: () => AuthenticatedRoute,
  } as any)

const AuthenticatedCadenceStorageContainersAssignIndexRoute =
  AuthenticatedCadenceStorageContainersAssignIndexImport.update({
    id: '/cadence/storage/containers/assign/',
    path: '/cadence/storage/containers/assign/',
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
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/family/settings': {
      id: '/_authenticated/family/settings'
      path: '/family/settings'
      fullPath: '/family/settings'
      preLoaderRoute: typeof AuthenticatedFamilySettingsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/user/profile': {
      id: '/_authenticated/user/profile'
      path: '/user/profile'
      fullPath: '/user/profile'
      preLoaderRoute: typeof AuthenticatedUserProfileImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/user/settings': {
      id: '/_authenticated/user/settings'
      path: '/user/settings'
      fullPath: '/user/settings'
      preLoaderRoute: typeof AuthenticatedUserSettingsImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/': {
      id: '/_authenticated/cadence/'
      path: '/cadence'
      fullPath: '/cadence'
      preLoaderRoute: typeof AuthenticatedCadenceIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/chores/': {
      id: '/_authenticated/cadence/chores/'
      path: '/cadence/chores'
      fullPath: '/cadence/chores'
      preLoaderRoute: typeof AuthenticatedCadenceChoresIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/meals/': {
      id: '/_authenticated/cadence/meals/'
      path: '/cadence/meals'
      fullPath: '/cadence/meals'
      preLoaderRoute: typeof AuthenticatedCadenceMealsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/services/': {
      id: '/_authenticated/cadence/services/'
      path: '/cadence/services'
      fullPath: '/cadence/services'
      preLoaderRoute: typeof AuthenticatedCadenceServicesIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/': {
      id: '/_authenticated/cadence/storage/'
      path: '/cadence/storage'
      fullPath: '/cadence/storage'
      preLoaderRoute: typeof AuthenticatedCadenceStorageIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/containers/$containerId': {
      id: '/_authenticated/cadence/storage/containers/$containerId'
      path: '/cadence/storage/containers/$containerId'
      fullPath: '/cadence/storage/containers/$containerId'
      preLoaderRoute: typeof AuthenticatedCadenceStorageContainersContainerIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/items/$itemId': {
      id: '/_authenticated/cadence/storage/items/$itemId'
      path: '/cadence/storage/items/$itemId'
      fullPath: '/cadence/storage/items/$itemId'
      preLoaderRoute: typeof AuthenticatedCadenceStorageItemsItemIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/tags/$tagId': {
      id: '/_authenticated/cadence/storage/tags/$tagId'
      path: '/cadence/storage/tags/$tagId'
      fullPath: '/cadence/storage/tags/$tagId'
      preLoaderRoute: typeof AuthenticatedCadenceStorageTagsTagIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/workspaces/$workspaceId': {
      id: '/_authenticated/cadence/storage/workspaces/$workspaceId'
      path: '/cadence/storage/workspaces/$workspaceId'
      fullPath: '/cadence/storage/workspaces/$workspaceId'
      preLoaderRoute: typeof AuthenticatedCadenceStorageWorkspacesWorkspaceIdImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/containers/': {
      id: '/_authenticated/cadence/storage/containers/'
      path: '/cadence/storage/containers'
      fullPath: '/cadence/storage/containers'
      preLoaderRoute: typeof AuthenticatedCadenceStorageContainersIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/items/': {
      id: '/_authenticated/cadence/storage/items/'
      path: '/cadence/storage/items'
      fullPath: '/cadence/storage/items'
      preLoaderRoute: typeof AuthenticatedCadenceStorageItemsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/tags/': {
      id: '/_authenticated/cadence/storage/tags/'
      path: '/cadence/storage/tags'
      fullPath: '/cadence/storage/tags'
      preLoaderRoute: typeof AuthenticatedCadenceStorageTagsIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/workspaces/': {
      id: '/_authenticated/cadence/storage/workspaces/'
      path: '/cadence/storage/workspaces'
      fullPath: '/cadence/storage/workspaces'
      preLoaderRoute: typeof AuthenticatedCadenceStorageWorkspacesIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/containers/assign/': {
      id: '/_authenticated/cadence/storage/containers/assign/'
      path: '/cadence/storage/containers/assign'
      fullPath: '/cadence/storage/containers/assign'
      preLoaderRoute: typeof AuthenticatedCadenceStorageContainersAssignIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/items/assign/': {
      id: '/_authenticated/cadence/storage/items/assign/'
      path: '/cadence/storage/items/assign'
      fullPath: '/cadence/storage/items/assign'
      preLoaderRoute: typeof AuthenticatedCadenceStorageItemsAssignIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cadence/storage/tags/assign/': {
      id: '/_authenticated/cadence/storage/tags/assign/'
      path: '/cadence/storage/tags/assign'
      fullPath: '/cadence/storage/tags/assign'
      preLoaderRoute: typeof AuthenticatedCadenceStorageTagsAssignIndexImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedFamilySettingsRoute: typeof AuthenticatedFamilySettingsRoute
  AuthenticatedUserProfileRoute: typeof AuthenticatedUserProfileRoute
  AuthenticatedUserSettingsRoute: typeof AuthenticatedUserSettingsRoute
  AuthenticatedCadenceIndexRoute: typeof AuthenticatedCadenceIndexRoute
  AuthenticatedCadenceChoresIndexRoute: typeof AuthenticatedCadenceChoresIndexRoute
  AuthenticatedCadenceMealsIndexRoute: typeof AuthenticatedCadenceMealsIndexRoute
  AuthenticatedCadenceServicesIndexRoute: typeof AuthenticatedCadenceServicesIndexRoute
  AuthenticatedCadenceStorageIndexRoute: typeof AuthenticatedCadenceStorageIndexRoute
  AuthenticatedCadenceStorageContainersContainerIdRoute: typeof AuthenticatedCadenceStorageContainersContainerIdRoute
  AuthenticatedCadenceStorageItemsItemIdRoute: typeof AuthenticatedCadenceStorageItemsItemIdRoute
  AuthenticatedCadenceStorageTagsTagIdRoute: typeof AuthenticatedCadenceStorageTagsTagIdRoute
  AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute: typeof AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute
  AuthenticatedCadenceStorageContainersIndexRoute: typeof AuthenticatedCadenceStorageContainersIndexRoute
  AuthenticatedCadenceStorageItemsIndexRoute: typeof AuthenticatedCadenceStorageItemsIndexRoute
  AuthenticatedCadenceStorageTagsIndexRoute: typeof AuthenticatedCadenceStorageTagsIndexRoute
  AuthenticatedCadenceStorageWorkspacesIndexRoute: typeof AuthenticatedCadenceStorageWorkspacesIndexRoute
  AuthenticatedCadenceStorageContainersAssignIndexRoute: typeof AuthenticatedCadenceStorageContainersAssignIndexRoute
  AuthenticatedCadenceStorageItemsAssignIndexRoute: typeof AuthenticatedCadenceStorageItemsAssignIndexRoute
  AuthenticatedCadenceStorageTagsAssignIndexRoute: typeof AuthenticatedCadenceStorageTagsAssignIndexRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedFamilySettingsRoute: AuthenticatedFamilySettingsRoute,
  AuthenticatedUserProfileRoute: AuthenticatedUserProfileRoute,
  AuthenticatedUserSettingsRoute: AuthenticatedUserSettingsRoute,
  AuthenticatedCadenceIndexRoute: AuthenticatedCadenceIndexRoute,
  AuthenticatedCadenceChoresIndexRoute: AuthenticatedCadenceChoresIndexRoute,
  AuthenticatedCadenceMealsIndexRoute: AuthenticatedCadenceMealsIndexRoute,
  AuthenticatedCadenceServicesIndexRoute:
    AuthenticatedCadenceServicesIndexRoute,
  AuthenticatedCadenceStorageIndexRoute: AuthenticatedCadenceStorageIndexRoute,
  AuthenticatedCadenceStorageContainersContainerIdRoute:
    AuthenticatedCadenceStorageContainersContainerIdRoute,
  AuthenticatedCadenceStorageItemsItemIdRoute:
    AuthenticatedCadenceStorageItemsItemIdRoute,
  AuthenticatedCadenceStorageTagsTagIdRoute:
    AuthenticatedCadenceStorageTagsTagIdRoute,
  AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute:
    AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute,
  AuthenticatedCadenceStorageContainersIndexRoute:
    AuthenticatedCadenceStorageContainersIndexRoute,
  AuthenticatedCadenceStorageItemsIndexRoute:
    AuthenticatedCadenceStorageItemsIndexRoute,
  AuthenticatedCadenceStorageTagsIndexRoute:
    AuthenticatedCadenceStorageTagsIndexRoute,
  AuthenticatedCadenceStorageWorkspacesIndexRoute:
    AuthenticatedCadenceStorageWorkspacesIndexRoute,
  AuthenticatedCadenceStorageContainersAssignIndexRoute:
    AuthenticatedCadenceStorageContainersAssignIndexRoute,
  AuthenticatedCadenceStorageItemsAssignIndexRoute:
    AuthenticatedCadenceStorageItemsAssignIndexRoute,
  AuthenticatedCadenceStorageTagsAssignIndexRoute:
    AuthenticatedCadenceStorageTagsAssignIndexRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/': typeof AuthenticatedIndexRoute
  '/family/settings': typeof AuthenticatedFamilySettingsRoute
  '/user/profile': typeof AuthenticatedUserProfileRoute
  '/user/settings': typeof AuthenticatedUserSettingsRoute
  '/cadence': typeof AuthenticatedCadenceIndexRoute
  '/cadence/chores': typeof AuthenticatedCadenceChoresIndexRoute
  '/cadence/meals': typeof AuthenticatedCadenceMealsIndexRoute
  '/cadence/services': typeof AuthenticatedCadenceServicesIndexRoute
  '/cadence/storage': typeof AuthenticatedCadenceStorageIndexRoute
  '/cadence/storage/containers/$containerId': typeof AuthenticatedCadenceStorageContainersContainerIdRoute
  '/cadence/storage/items/$itemId': typeof AuthenticatedCadenceStorageItemsItemIdRoute
  '/cadence/storage/tags/$tagId': typeof AuthenticatedCadenceStorageTagsTagIdRoute
  '/cadence/storage/workspaces/$workspaceId': typeof AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute
  '/cadence/storage/containers': typeof AuthenticatedCadenceStorageContainersIndexRoute
  '/cadence/storage/items': typeof AuthenticatedCadenceStorageItemsIndexRoute
  '/cadence/storage/tags': typeof AuthenticatedCadenceStorageTagsIndexRoute
  '/cadence/storage/workspaces': typeof AuthenticatedCadenceStorageWorkspacesIndexRoute
  '/cadence/storage/containers/assign': typeof AuthenticatedCadenceStorageContainersAssignIndexRoute
  '/cadence/storage/items/assign': typeof AuthenticatedCadenceStorageItemsAssignIndexRoute
  '/cadence/storage/tags/assign': typeof AuthenticatedCadenceStorageTagsAssignIndexRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/': typeof AuthenticatedIndexRoute
  '/family/settings': typeof AuthenticatedFamilySettingsRoute
  '/user/profile': typeof AuthenticatedUserProfileRoute
  '/user/settings': typeof AuthenticatedUserSettingsRoute
  '/cadence': typeof AuthenticatedCadenceIndexRoute
  '/cadence/chores': typeof AuthenticatedCadenceChoresIndexRoute
  '/cadence/meals': typeof AuthenticatedCadenceMealsIndexRoute
  '/cadence/services': typeof AuthenticatedCadenceServicesIndexRoute
  '/cadence/storage': typeof AuthenticatedCadenceStorageIndexRoute
  '/cadence/storage/containers/$containerId': typeof AuthenticatedCadenceStorageContainersContainerIdRoute
  '/cadence/storage/items/$itemId': typeof AuthenticatedCadenceStorageItemsItemIdRoute
  '/cadence/storage/tags/$tagId': typeof AuthenticatedCadenceStorageTagsTagIdRoute
  '/cadence/storage/workspaces/$workspaceId': typeof AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute
  '/cadence/storage/containers': typeof AuthenticatedCadenceStorageContainersIndexRoute
  '/cadence/storage/items': typeof AuthenticatedCadenceStorageItemsIndexRoute
  '/cadence/storage/tags': typeof AuthenticatedCadenceStorageTagsIndexRoute
  '/cadence/storage/workspaces': typeof AuthenticatedCadenceStorageWorkspacesIndexRoute
  '/cadence/storage/containers/assign': typeof AuthenticatedCadenceStorageContainersAssignIndexRoute
  '/cadence/storage/items/assign': typeof AuthenticatedCadenceStorageItemsAssignIndexRoute
  '/cadence/storage/tags/assign': typeof AuthenticatedCadenceStorageTagsAssignIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/register': typeof RegisterRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/family/settings': typeof AuthenticatedFamilySettingsRoute
  '/_authenticated/user/profile': typeof AuthenticatedUserProfileRoute
  '/_authenticated/user/settings': typeof AuthenticatedUserSettingsRoute
  '/_authenticated/cadence/': typeof AuthenticatedCadenceIndexRoute
  '/_authenticated/cadence/chores/': typeof AuthenticatedCadenceChoresIndexRoute
  '/_authenticated/cadence/meals/': typeof AuthenticatedCadenceMealsIndexRoute
  '/_authenticated/cadence/services/': typeof AuthenticatedCadenceServicesIndexRoute
  '/_authenticated/cadence/storage/': typeof AuthenticatedCadenceStorageIndexRoute
  '/_authenticated/cadence/storage/containers/$containerId': typeof AuthenticatedCadenceStorageContainersContainerIdRoute
  '/_authenticated/cadence/storage/items/$itemId': typeof AuthenticatedCadenceStorageItemsItemIdRoute
  '/_authenticated/cadence/storage/tags/$tagId': typeof AuthenticatedCadenceStorageTagsTagIdRoute
  '/_authenticated/cadence/storage/workspaces/$workspaceId': typeof AuthenticatedCadenceStorageWorkspacesWorkspaceIdRoute
  '/_authenticated/cadence/storage/containers/': typeof AuthenticatedCadenceStorageContainersIndexRoute
  '/_authenticated/cadence/storage/items/': typeof AuthenticatedCadenceStorageItemsIndexRoute
  '/_authenticated/cadence/storage/tags/': typeof AuthenticatedCadenceStorageTagsIndexRoute
  '/_authenticated/cadence/storage/workspaces/': typeof AuthenticatedCadenceStorageWorkspacesIndexRoute
  '/_authenticated/cadence/storage/containers/assign/': typeof AuthenticatedCadenceStorageContainersAssignIndexRoute
  '/_authenticated/cadence/storage/items/assign/': typeof AuthenticatedCadenceStorageItemsAssignIndexRoute
  '/_authenticated/cadence/storage/tags/assign/': typeof AuthenticatedCadenceStorageTagsAssignIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/register'
    | '/'
    | '/family/settings'
    | '/user/profile'
    | '/user/settings'
    | '/cadence'
    | '/cadence/chores'
    | '/cadence/meals'
    | '/cadence/services'
    | '/cadence/storage'
    | '/cadence/storage/containers/$containerId'
    | '/cadence/storage/items/$itemId'
    | '/cadence/storage/tags/$tagId'
    | '/cadence/storage/workspaces/$workspaceId'
    | '/cadence/storage/containers'
    | '/cadence/storage/items'
    | '/cadence/storage/tags'
    | '/cadence/storage/workspaces'
    | '/cadence/storage/containers/assign'
    | '/cadence/storage/items/assign'
    | '/cadence/storage/tags/assign'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/register'
    | '/'
    | '/family/settings'
    | '/user/profile'
    | '/user/settings'
    | '/cadence'
    | '/cadence/chores'
    | '/cadence/meals'
    | '/cadence/services'
    | '/cadence/storage'
    | '/cadence/storage/containers/$containerId'
    | '/cadence/storage/items/$itemId'
    | '/cadence/storage/tags/$tagId'
    | '/cadence/storage/workspaces/$workspaceId'
    | '/cadence/storage/containers'
    | '/cadence/storage/items'
    | '/cadence/storage/tags'
    | '/cadence/storage/workspaces'
    | '/cadence/storage/containers/assign'
    | '/cadence/storage/items/assign'
    | '/cadence/storage/tags/assign'
  id:
    | '__root__'
    | '/_authenticated'
    | '/login'
    | '/register'
    | '/_authenticated/'
    | '/_authenticated/family/settings'
    | '/_authenticated/user/profile'
    | '/_authenticated/user/settings'
    | '/_authenticated/cadence/'
    | '/_authenticated/cadence/chores/'
    | '/_authenticated/cadence/meals/'
    | '/_authenticated/cadence/services/'
    | '/_authenticated/cadence/storage/'
    | '/_authenticated/cadence/storage/containers/$containerId'
    | '/_authenticated/cadence/storage/items/$itemId'
    | '/_authenticated/cadence/storage/tags/$tagId'
    | '/_authenticated/cadence/storage/workspaces/$workspaceId'
    | '/_authenticated/cadence/storage/containers/'
    | '/_authenticated/cadence/storage/items/'
    | '/_authenticated/cadence/storage/tags/'
    | '/_authenticated/cadence/storage/workspaces/'
    | '/_authenticated/cadence/storage/containers/assign/'
    | '/_authenticated/cadence/storage/items/assign/'
    | '/_authenticated/cadence/storage/tags/assign/'
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
        "/_authenticated/",
        "/_authenticated/family/settings",
        "/_authenticated/user/profile",
        "/_authenticated/user/settings",
        "/_authenticated/cadence/",
        "/_authenticated/cadence/chores/",
        "/_authenticated/cadence/meals/",
        "/_authenticated/cadence/services/",
        "/_authenticated/cadence/storage/",
        "/_authenticated/cadence/storage/containers/$containerId",
        "/_authenticated/cadence/storage/items/$itemId",
        "/_authenticated/cadence/storage/tags/$tagId",
        "/_authenticated/cadence/storage/workspaces/$workspaceId",
        "/_authenticated/cadence/storage/containers/",
        "/_authenticated/cadence/storage/items/",
        "/_authenticated/cadence/storage/tags/",
        "/_authenticated/cadence/storage/workspaces/",
        "/_authenticated/cadence/storage/containers/assign/",
        "/_authenticated/cadence/storage/items/assign/",
        "/_authenticated/cadence/storage/tags/assign/"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/register": {
      "filePath": "register.tsx"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/family/settings": {
      "filePath": "_authenticated/family/settings.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/user/profile": {
      "filePath": "_authenticated/user/profile.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/user/settings": {
      "filePath": "_authenticated/user/settings.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/": {
      "filePath": "_authenticated/cadence/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/chores/": {
      "filePath": "_authenticated/cadence/chores/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/meals/": {
      "filePath": "_authenticated/cadence/meals/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/services/": {
      "filePath": "_authenticated/cadence/services/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/": {
      "filePath": "_authenticated/cadence/storage/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/containers/$containerId": {
      "filePath": "_authenticated/cadence/storage/containers/$containerId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/items/$itemId": {
      "filePath": "_authenticated/cadence/storage/items/$itemId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/tags/$tagId": {
      "filePath": "_authenticated/cadence/storage/tags/$tagId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/workspaces/$workspaceId": {
      "filePath": "_authenticated/cadence/storage/workspaces/$workspaceId.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/containers/": {
      "filePath": "_authenticated/cadence/storage/containers/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/items/": {
      "filePath": "_authenticated/cadence/storage/items/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/tags/": {
      "filePath": "_authenticated/cadence/storage/tags/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/workspaces/": {
      "filePath": "_authenticated/cadence/storage/workspaces/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/containers/assign/": {
      "filePath": "_authenticated/cadence/storage/containers/assign/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/items/assign/": {
      "filePath": "_authenticated/cadence/storage/items/assign/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cadence/storage/tags/assign/": {
      "filePath": "_authenticated/cadence/storage/tags/assign/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
