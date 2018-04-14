使用的包管理工具是`yarn`

放到服务器时注意修改`chat.js`和`chat.redux.js`的`localhost`

到项目目录使用cmd指令 `yarn` 安装模块

启动数据库mongodb `mongod --dbpath ` + 你的数据库地址

到server文件夹执行 `nodemon server`

到根目录执行 `yarn start`

将会运行在`localhost:3000`,但是没做路由跳转处理所以会提醒错误

到登陆页面在`localhost:3000/login`
