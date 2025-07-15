//Layout styles
export const LAYOUT_STYLE = {
  screenLayout: 'h-screen flex  bg-gray-50 flex-col',
  mainContainer: 'flex-1 flex justify-center w-full min-h-0 pb-4',
  pageContent: 'flex-1 flex flex-col w-full min-h-0 mt-4',
};

//Header styles
export const HEADER_STYLE = {
  titleContainer: 'p-4 pb-2',
  titleText: 'text-3xl font-bold text-center mb-2',
};

export const LOGIN_STYLE = {
  loginBox: 'flex flex-col items-center justify-center h-screen',
  paragraph: 'text-gray-500 mb-6',
  buttonBox: 'flex gap-6',
  button: 'w-full h-full object-cover rounded-full',
  loading: 'flex flex-col items-center justify-center h-screen',
};

export const LOADING_SPINNER_STYLE = {
  container: 'flex justify-center items-center h-48',
  button: 'animate-spin rounded-full border-4 border-solid border-gray-200',
};

export const LOGIN_ERROR_FALLBACK_STYLE = {
  container: 'flex flex-col items-center justify-center min-h-screen p-4',
  title: 'text-2xl font-bold mb-4',
  paragraph: 'text-red-500 mb-8',
  button: 'px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600',
};

export const NAVIGATION_BAR_STYLE = {
  container:
    'relative flex items-center justify-between px-4 py-5 shadow-md bg-white',
  leftGroup: 'flex items-center space-x-24',
  logoButton: 'flex items-center space-x-2 cursor-pointer',
  logoImage: 'w-6 h-6',
  logoText: 'text-xl font-bold text-blue-600',
  desktopNav: 'hidden md:flex space-x-24 text-gray-600 font-medium',
  navButtonBase: 'flex items-center space-x-1',
  navButtonActive: 'text-blue-600 font-semibold',
  navButtonInactive: 'hover:text-blue-600',
  mobileMenuButton: 'md:hidden text-gray-600',
  mobileDropdown:
    'absolute top-full left-0 w-full flex flex-col bg-white shadow-md z-20 px-4 py-2 md:hidden text-gray-600 font-medium space-y-2',
};

export const ERROR_FALLBACK_STYLE = {
  container: 'w-screen h-screen flex items-center justify-center',
  box: 'flex flex-col items-center justify-center bg-red-50 min-w-[60vh] min-h-[60vh] p-8 text-center text-red-800 rounded-lg shadow-md',
  statusText: 'text-5xl font-bold mb-4',
  messageText: 'text-xl font-semibold mb-2',
  subText: 'text-sm text-gray-600 mb-6 font-bold',
  homeButton:
    'mt-2 px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition',
};

export const PROFILE_STYLE = {
  pageWrapper: 'h-screen bg-gray-50 w-full flex flex-col bg-white',
  header: 'h-16 flex bg-gray-50 items-center justify-center',
  main: 'flex-1 flex flex-col bg-gray-50 items-center justify-between px-4 py-6',
  logoutWrapper: 'w-full max-w-2xl px-2 mt-8',
  logoutButton: 'w-full bg-gray-300 text-gray-500 py-3 rounded shadow-sm',
};

export const PROFILE_CONTENT_STYLE = {
  wrapper: 'flex flex-col items-center gap-6',
  avatarIcon: 'w-32 h-32 text-gray-400',
  infoContainer: 'w-screen max-w-2xl space-y-4 text-base',
  row: 'flex justify-between px-2',
  rowWithCenter: 'flex justify-between items-center px-2',
  label: 'font-medium text-gray-600',
  socialIconWrapper: 'w-8 h-8',
  socialIconImage: 'w-full h-full object-cover rounded-full',
  webhookButton:
    'bg-blue-500 text-white px-4 py-1 rounded text-sm hover:bg-blue-600',
  section: 'mt-6',
  sectionTitle: 'text-base font-semibold text-gray-800 mb-2',
  rowWithColumn: 'flex flex-col gap-2 px-2',
};

export const NOTIFICATION_STYLE = {
  pageWrapper: 'min-h-screen bg-gray-50 px-4 py-8',
  header: 'max-w-2xl  mx-auto',
  main: 'space-y-4',
};

export const NOTIFICATION_ITEM_STYLE = {
  itemContainer:
    'bg-white shadow-sm rounded-lg px-6 py-4 border border-gray-200',
  badgeWrapper: 'flex items-center gap-2 mb-1',
  badge:
    'inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium',
  icon: 'w-4 h-4',
  content: 'text-sm text-gray-900 font-medium',
  dateWrapper: 'mt-2 flex items-center text-xs text-gray-500',
  calendarIcon: 'w-4 h-4 mr-1 text-gray-400',

  pageWrapper: 'min-h-screen bg-gray-50 px-4 py-8',
  header: 'max-w-2xl mx-auto',
  main: 'space-y-4',
};

export const JOB_ITEM_STYLE = {
  itemContainer:
    'bg-white shadow-sm rounded-lg px-6 py-4 border border-gray-200',
  badgeWrapper: 'flex items-center gap-2 mb-1',
  badge:
    'inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium',
  icon: 'w-4 h-4',
  content: 'text-sm text-gray-900 font-medium',
  dateWrapper: 'mt-2 flex items-center text-xs text-gray-500',
  calendarIcon: 'w-4 h-4 mr-1 text-gray-400',

  pageWrapper: 'min-h-screen bg-gray-50 px-4 py-8',
  header: 'max-w-2xl mx-auto',
  main: 'space-y-4',
};
