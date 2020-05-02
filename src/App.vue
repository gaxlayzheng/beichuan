<template>
  <div id="app">
    <el-col :span="4" class="daohang">
      <h5
        style="    color: #fff;
    padding-left: 30px;font-size:14px;"
      >
        北川点单系统
      </h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <router-link to="/order"
              ><el-menu-item index="2-1">订单详情</el-menu-item></router-link
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>上传新闻</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <router-link to="/picture"
              ><el-menu-item index="1-1">更换轮播图</el-menu-item></router-link
            >
            <router-link to="/news"
              ><el-menu-item index="1-2"
                >上传新闻动态</el-menu-item
              ></router-link
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <div class="header">
      <span>
        超级管理员
      </span>
    </div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/order' }"
          >订单管理</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/news' }"
          >新闻发布</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/picture' }"
          >更改图片</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
body{
  background: #f2f2f2;
}
a{
  text-decoration: none;
}
.daohang {
  height: 100%;
  background-color: rgb(84, 92, 100);
  position: fixed;
}
.el-menu {
  border: 0 !important;
}
.el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 45px;
  min-width: 0 !important;
}
.bread {
  height: 60px;
  margin-left: 16%;
  padding: 20px;
  background: #fff;
      box-shadow: 7px 4px 5px rgba(0,0,0,0.3);
  .el-breadcrumb {
    display: inline-block;
  }
}
.header{
  padding:20px 40px 20px 0;
  text-align: right;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
</style>
