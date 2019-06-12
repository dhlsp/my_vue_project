<template>
  <div class="login-container">
    <div class="bg" :class="isShowLogo ? 'bg-d' : 'bg-b'"></div>
    <div class="header">
      <div class="header-main">
        <img v-if="isShowLogo" class="logo" src="../../assets/logo.png" alt="">
        <div class="language">
          <span :class="isEn ? '' : 'active'" @click="selectLanguage('zh')">中文</span><span class="en" :class="isEn ? 'active' : ''" @click="selectLanguage('en')">English</span>
        </div>
      </div>
    </div>
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      label-position="left">
      <div class="login-title">{{$t('登录')}}</div>
      <el-form-item prop="account">
        <el-input
          v-model.trim="loginForm.account"
          :placeholder="$t('账号')"
          @keyup.enter.native="handleLogin"
          autofocus
          size="medium">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          name="password"
          :type="passwordType"
          v-model.trim="loginForm.password"
          :placeholder="$t('密码')"
          @keyup.enter.native="handleLogin"
          size="medium">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          <span slot="suffix" class="pwd-eye" @click="showPwd">
            <svg-icon v-if="passwordType === 'password'" icon-class="noseeeye"/>
            <svg-icon v-else icon-class="seeeye"/>
          </span>
        </el-input>
      </el-form-item>
      <el-form-item prop="verifynum">
        <el-input
          v-model.trim="loginForm.verifynum"
          :placeholder="$t('验证码')"
          @keyup.enter.native="handleLogin"
          size="medium"
          class="verify-ipt">
          <i slot="prefix" class="el-input__icon el-icon-s-check"></i>
        </el-input>
        <div class="verify-img">
          <span v-show="!isShowVerifyImg" class="verify-loading">{{$t('请求中...')}}</span>
          <img v-show="isShowVerifyImg" :src="verifyImg" alt="验证码" width="100%" height="100%">
        </div>
      </el-form-item>
      <el-button
        :disabled="disableLogin"
        type="primary"
        size="small"
        :loading="loading"
        class="login-btn"
        @click.native.prevent="handleLogin">
        {{$t('登录')}}
      </el-button>
    </el-form>
    <div v-show="isShowQrcode" class="mask">
      <div id="qrcode"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    this.isShowLogo = process.env.BUILD_SIGN !== 'b';
    return {
      verifyImg: '', // 验证码base64
      isShowVerifyImg: false, // 是否显示二维码
      verifyTimer: null, // 验证码定时器
      loginForm: {
        login_acc_type: '3',
        account: '',
        password: '',
        verifyid: '', // 验证码id
        verifynum: '', // 验证码数值
        is_force: '0',
      },
      passwordType: 'password',
      loading: false,
      disableLogin: false,
      isShowVerifyImgError: false, // 是否显示二维加载失败
      isShowQrcode: false,
      // isSuccessLogin: false,
    };
  },
  computed: {
    loginRules() {
      return {
        login_acc_type: [
          { required: true, message: this.$t('请输入账号类型'), trigger: 'change' },
        ],
        account: [
          { required: true, message: this.$t('请输入账号'), trigger: 'blur' },
        ],
        password: [
          { required: true, message: this.$t('请输入密码'), trigger: 'blur' },
        ],
        verifynum: [
          { required: true, message: this.$t('请输入验证码'), trigger: 'blur' },
        ],
      };
    },
  },
  methods: {
    selectLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch('set_language', lang)
        .then(() => {
          let tip = '选择中文成功';
          if (lang === 'en') {
            tip = '选择英文成功';
          }
          this.$message({
            message: this.$t(tip),
            type: 'success',
          });
        });
    },
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$lpt: 6px;

.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .header {
    position: relative;
    z-index: 1;
    background-color: #ffffff;
    overflow: hidden;
    .header-main {
      min-width: 1000px;
      width: 85%;
      margin: auto;
    }
    .logo {
      float: left;
      width: 45px;
      margin: 12px 0 12px 0;
    }
    .language {
      float: right;
      line-height: 65px;
      span {
        display: inline-block;
        padding: 0 $lpt;
        font-size: 16px;
        color: #C0C4CC;
        cursor: pointer;
        &.active {
          color: #000000;
        }
      }
    }
    .en:before {
      content: ' ';
      height: 15px;
      width: 2px;
      background-color: #C0C4CC;
      position: relative;
      top: 2px;
      left: -$lpt;
      display: inline-block;
    }
  }
  .login-form {
    position: absolute;
    left: 80%;
    top: 47%;
    width: 350px;
    padding: 20px 20px 20px 20px;
    background-color: rgb(255, 255, 255);
    // margin: 120px auto;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }
  .login-title {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 5px;
  }
  .pwd-eye {
    margin-right: 5px;
    cursor: pointer;
  }
  .bg {
    background: #2d3a4b none no-repeat center center;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  // .bg-d {
  //   // background-image: url(../../assets/imgs/logo.jpg);
  // }
  // .bg-b {
  //   // background-image: url(../../assets/imgs/logo.jpg);
  // }
  .verify-ipt {
    width: 45%;
    float: left;
  }
  .verify-img {
    float: left;
    width: 128px;
    height: 36px;
    margin: 2px 4px 0 4px;
    border-radius: 2px;
  }
  .verify-refresh {
    float: left;
    line-height: 40px;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      color: #C0C4CC;
    }
  }
  .login-btn {
    width: 100%;
    border-radius: 16px;
    line-height: 1.5;
  }
}
</style>
