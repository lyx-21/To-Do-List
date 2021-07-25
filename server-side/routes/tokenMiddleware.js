// 对后续请求进行认证

const { pathToRegexp } = require("path-to-regexp");
const { getErr } = require("./getSendResult");
const jwt = require("./jwt");
const needTokenApi = [
    { method: "POST", path: "/api/student" },
    { method: "PUT", path: "/api/student/:id" },
    { method: "GET", path: "/api/admin/whoami" },
];
// 解析token 
module.exports = (req, res, next) => {
    // 筛选那些需要token 认证
    const apis = needTokenApi.filter((api) => {
        const reg = pathToRegexp(api.path);
        return api.method === req.method && reg.test(req.path);
    });
    if (apis.length === 0) {
        next();
        return;
    }
    //jwt 认证
    const result = jwt.verify(req);
    if(result) {
        // 认证通过
        req.userId = result.id;
        next();
    } else {
        // 认证失败
        handleNontoken(req, res, next);
    }

    // 不使用jwt 自行加密
    // // 获取 token 没有 返回 403 
    // let token = req.cookies.token;
    // if(!token) {
    //     // cookie中没有 在header 中找
    //     token = req.headers.authorization;
    // }

    // // 都没有获取到 说明没有认证
    // if(!token) {
    //     handleNontoken(req, res, next);
    //     return;
    // }
    // const userId = cryptor.decrypt(token);
    // req.userId = userId;
    // 使用session 认证
    // if(req.session.loginUser) {
    //     // 登录成功
    //     next();
    // } else {
    //     handleNontoken(req, res, next);
    // }
}

// 处理 没有 认证的情况
function handleNontoken(req, res, next) {
    res
    .status(403)
    .send(getErr("you do not have any token to access the api", 403));
}