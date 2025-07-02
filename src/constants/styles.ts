//Layout styles
export const LAYOUT_STYLE = {
  screenLayout: 'h-screen flex flex-col',
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

export const LOGIN_ERROR_FALLBACK_STYLE = {
  container: 'flex flex-col items-center justify-center min-h-screen p-4',
  title: 'text-2xl font-bold mb-4',
  paragraph: 'text-red-500 mb-8',
  button: 'px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600',
};

export const NAVIGATION_STYLE = {
  background:
    'flex justify-center w-full max-w-screen-md h-16 bg-blue-500 shadow-xl z-10 rounded-t-xl',
  buttonList: 'flex w-full h-full items-center',
  button: 'flex-1 flex flex-col',
  buttonImage: 'h-6 md:h-8 object-contain',
  buttonText: 'text-xs mt-1 font-bold',
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
