//  业务逻辑 管理员初始化
// 判断数据库中是否有管理员 如果没有 添加一个 默认管理员

const Admin = require("../models/Admin"); // 导入模块Adimin 模型对象
const md5 = require("md5"); // 密码 使用MD5 加密
exports.addAdmin = async function(Obj) {
    Obj.loginPwd = md5(Obj.loginPwd);
    // 判断adminObj的各种属性是否合理 以及账号是否已存在
    // 创建实例 
    const ins = await Admin.create(Obj);
    return ins.toJSON();// 返回实例对象 JSON对象
}

exports.deleteAdmin = async function(id) {
    // // 方法1 有管理员的情况下
    // // 获取实例 findByPk
    // const ins = await Admin.findByPk(id);
    // // 删除实例
    // if(ins) {
    //     await ins.destroy();
    // }

    // 方法2 没有管理员的情况下
    const result = await Admin.destroy({
        where: {
            // 条件
            id,
        }
    });
    return result;
}

exports.updateAdmin = async function(id, Obj) {
    // // 方法1 
    // const ins = await Admin.findByPk(id);
    // ins.loginId = adminObj.loginId;
    // ins.save(); // 保存 更新

    if(Obj.loginPwd) {
        Obj.loginPwd = md5(Obj.loginPwd);
    }
    const result = await Admin.update(Obj, {
        where: {
            id,
        }
    });
    return result;

}

// 查询 登录
exports.login = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd);
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd,
        },
    });
    if(result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null;
}

// 通过id 主键 查询一条数据
exports.getAdminById = async function(id) {
    const result = await Admin.findByPk(id);
    if(result) {
        return result.toJSON();
    }
    return null;
}

// 查询全部 数据
exports.getAdmins = async function() {
    const result = await Admin.findAll();
    if(result) {
        return JSON.parse(JSON.stringify(result));
    }
    return null;
}