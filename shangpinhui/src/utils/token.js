export const setToken = (token) => {
  localStorage.setItem('TOKEN', token);
};

export const getToken = () => {
  return localStorage.getItem('TOKEN');
};

// 清除 Token
export const removeToken = () => {
  localStorage.removeItem('TOKEN');
};