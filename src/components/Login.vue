<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/python-black.png" alt="icon">
      </div>
      <!--  登录表单区域, el-form等组件需要在element.js中先导入 -->
      <el-form :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- username -->
        <el-form-item prop="username">
          <!--   v-model 双向绑定数据  -->
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- password-->
        <el-form-item prop="password">
        <!--   v-model 双向绑定数据  -->
          <el-input v-model="loginForm.password" placeholder="密码" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        // 登录表单的数据绑定对象
        loginForm: {
          username: '',
          password: ''
        },
        // 这是表单的验证规则对象
        // 注意：规则名即prop的属性值必须是v-mode的对象的值
        // 注意：v-model 与:model不一样。v-model双向绑定 ：model只用于数据传输。:model相当于v-bind:model。
        loginFormRules: {
          // 验证用户名是否合法
          username: [
            // 复杂的可以自定义
            { required: true, message: '请输入登录用户名', trigger: 'blur' },
            { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          // 验证密码是否合法
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
           // { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }   // 注册可以提示，登录页面模糊提示即可
          ]
        }
      }
    }

  }
</script>

<!-- 表示支持less语法格式；scoped控制样式生效区间，单文件写组件的建议都加上，防止组件之间的样式冲突 -->
<!--route/index.js中通过路由的形式将其渲染到根组件App.vue中-->
<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* 向x轴，y轴移动'自身长宽'的50%，从而达到居中效果 */
  }

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%; /* 变成圆角边框线 */
    padding: 10px; /* 内边距，使图片和边框有间距 */
    box-shadow: 0 0 10px #ddd; /* 加阴影 */
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%); /* position不同影响展示效果 */
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%; /* 变成圆角边，如果图片是方的 */
      background-color: #eee;
    }
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;  /* https://www.w3school.com.cn/cssref/pr_box-sizing.asp */
  }
</style>
