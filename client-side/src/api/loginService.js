import request from './request';

// 登录 返回登录信息
async function login(loginId, loginPwd) {
  const resp = await request.post('/api/admin/login', { loginId, loginPwd });
  return resp;
}

// 注销 更改cookie时间
async function loginOut() {
  const date = new Date();
  date.setTime(date.getTime() - 10000000000);// 用当前时间 - 较大的数  得到一个过去的时间
  document.cookie = `token=;expires=${date.toGMTString()}`;
}

// 谁在登录
async function whoAmi() {
  const resp = await request.get('/api/admin/whoAmi');
  return resp;
}

export default {
  login,
  loginOut,
  whoAmi,
};
