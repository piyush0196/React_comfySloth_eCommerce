/* ==========================================================================
  HTTP Method Types
========================================================================== */
const METHOD_TYPES = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch'
}

/* ==========================================================================
LocalStorage / Cookie data
========================================================================== */
const TOKEN = 'authtoken'
const LANGUAGE = 'language'

/* ==========================================================================
Loader types
========================================================================== */
const LOADER_TYPE = {
  SCALE: 'scale',
  PULSE: 'pulse'
}

/* ==========================================================================
  TOASTER / NOTIFICATION
========================================================================== */
const TOASTER_TYPE = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
}

/* ==========================================================================
  Loader Type Array
========================================================================== */
const LOADER_HANDLER_TYPES = {
  page: 'pageLoader',
  submit: 'submitButtonLoader'
}

/* ==========================================================================
  All the navigation route Paths
========================================================================== */

const ROUTE_PATHS = {
  // ----single routes------------
  home: '/',
  about: '/about',
  products: '/products',
  login: '/login',
  settings: '/settings',
  dashboard: '/dashboard',
  profile: '/profile',
  changePassword: '/change-password',
  forgotPassword: '/forgot-password'
}

export {
  TOASTER_TYPE,
  TOKEN,
  LANGUAGE,
  ROUTE_PATHS,
  LOADER_TYPE,
  METHOD_TYPES,
  LOADER_HANDLER_TYPES
}
