<template>
  <div class="order">
    <el-col :span="16" class="orderDetail">
      <div class="orderDetailTitle">
        <span>进行中的项目</span
        ><span @click="tapAll" class="tapAll">全部项目</span>
      </div>
      <div class="orderDetailContent">
        <div class="orderDetailContentDetail">
          <p class="orderDetailContentTitle">西藏林芝友好帮扶项目西藏林芝友好帮扶项目</p>
          <p class="orderDetailContentFonts">
            这是一个描述这是一个描述这是一个描述这是一个描述
            这是一个描述这是一个描述这是一个描述这是一个描述
            这是一个描述这是一个描述这是一个描述这是一个描述
          </p>
          <p class="orderDetailTime">2020-05-02</p>
        </div>
        <div class="orderDetailContentDetail"></div>
        <div class="orderDetailContentDetail"></div>
        <div class="orderDetailContentDetail"></div>
        <div class="orderDetailContentDetail"></div>
        <div class="orderDetailContentDetail"></div>
        <div class="orderDetailContentDetail"></div>
        <div class="orderDetailContentDetail"></div>
      </div>
    </el-col>
    <el-col :span="6" class="orderDetail"> 1</el-col>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="less" scoped>
.order {
  margin: 24px 0px 0px 18%;
  .orderDetail {
    padding: 20px;
    margin-right: 30px;
    background: #fff;
    height: 480px;
    overflow: hidden;
    .orderDetailTitle {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .tapAll {
        color: #409eff;
      }
    }
    .orderDetailContent div:nth-child(4n) {
      border-right: 1px solid #ccc;
    }
    .orderDetailContent {
      display: flex;
      flex-wrap: wrap;
      .orderDetailContentDetail {
        display: inline-block;
        height: 200px;
        width: 25%;
        background: #fff;
        border: 1px solid #ccc;
        border-right: 0;
        border-top: 0;
        box-sizing: border-box;
        .orderDetailContentTitle {
          padding-left: 10px;
          overflow: hidden;
          font-size: 18px;
          text-overflow: ellipsis;
          font-weight: 600;
          color:#409eff ;
          white-space: nowrap;
        }
        .orderDetailContentFonts {
          padding: 10px 10px 20px 10px;
          display: -webkit-box;

          -webkit-box-orient: vertical;
            font-size: 14px;
            color: #aaa;
          -webkit-line-clamp: 3;
          margin-bottom: 30px;
          overflow: hidden;
          height: 40px;
        }
        .orderDetailTime {
          padding-right: 10px;
          text-align: right;
          color: #ccc;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
