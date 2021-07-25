const express = require("express");
const app = express(); // 创建一个express应用

// 插入cookie-parser 中间件
// 加入过后 会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入过后 会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 解析token 中间件
app.use(require("./tokenMiddleware"));

// 处理请求体
// 解析 application/json 格式的请求体
app.use(express.json());

// 解析 application/x-www-form-urlencoded 格式的消息体
app.use(express.urlencoded({ extended: true }));

// 处理api请求
app.use("/api/admin", require("./api/admin"));

// 错误处理中间件
app.use(require("./errorMiddleware"));

const port = 5001;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
})