<template>
    <div class="cButton">
      <span>传入的背景bgColor与外围背景色一致的效果</span>
      <div class="box1">
        <div class="item1">
          <c-button type="primary">主色调：按钮</c-button>
        </div>
        <div class="item2">
          <c-button type="success">成功色：按钮</c-button>
        </div>
        <div class="item3">
          <c-button type="warning">警告色：按钮</c-button>
        </div>
        <div class="item4">
          <c-button type="danger">失败色：按钮</c-button>
        </div>
      </div>
  
      <span>传入的背景bgColor与外围背景色不一致的效果</span>
      <div class="box2">
        <div>
          <c-button type="primary">主色调：按钮</c-button>
        </div>
        <div>
          <c-button type="success">成功色：按钮</c-button>
        </div>
        <div>
          <c-button type="warning">警告色：按钮</c-button>
        </div>
        <div>
          <c-button type="danger">失败色：按钮</c-button>
        </div>
      </div>
  
      <span
        >自定义背景色和颜色，需要传入属性 bgColor 和 color 且将 type 设置为
        custom</span
      >
      <div class="box2">
        <div>
          <c-button type="custom" bgColor="#F6CEEC" color="#D939CD"
            >自定义：按钮</c-button
          >
        </div>
      </div>
  
      <span>按钮形状 shape：round/圆角、circle/圆、square/方形、自定义圆角</span>
      <div class="box2">
        <div>
          <c-button type="primary" shape="round">圆角</c-button>
        </div>
        <div>
          <c-button type="primary" shape="square">方形</c-button>
        </div>
        <div>
          <c-button type="primary" shape="circle">圆</c-button>
        </div>
      </div>
      <span>自定义大圆角maxRound, 小圆角minRound</span>
      <div class="box2">
        <c-button type="primary" maxRound="0" minRound="20">自定义圆角</c-button>
      </div>
  
      <span>按钮 s小/m中/l大，默认m中</span>
      <div class="box2">
        <div>
          <c-button type="primary" size="s">小</c-button>
        </div>
        <div>
          <c-button type="primary" size="m">中</c-button>
        </div>
        <div>
          <c-button type="primary" size="l">大</c-button>
        </div>
        <div>
          <!-- 自定义大小 采用 :deep() 样式穿透 -->
          <c-button type="primary" size="s" class="ooo">小</c-button>
        </div>
      </div>
  
      <span>配合图标使用</span>
      <div class="box2">
        <c-button type="primary">
          <c-icon color="#00a0ea" size="40"><LogoTwitter /></c-icon>
        </c-button>
        <c-button type="danger" shape="square">
          <c-icon color="#E80505" size="40"><LogoTwitter /></c-icon>
        </c-button>
        <c-button type="warning" shape="circle">
          <c-icon color="#F8D800" size="30"><LogoTwitter /></c-icon>
        </c-button>
        <span>配合图标使用并要调整大小，请自行调整两者 <b style="color:red">size</b> 的大小</span>
        <c-button type="danger" size="s" shape="square" maxRound="0" >
          <c-icon color="red" size="15"><LogoTwitter /></c-icon>
        </c-button>
        <c-button type="warning" size="m" maxRound="0" shape="round" >
          <c-icon color="#F8D800" size="70"><LogoTwitter /></c-icon>
        </c-button>
        <c-button type="primary" size="l" maxRound="0"  minRound="0">
          <c-icon color="#00a0ea" size="80"><LogoTwitter /></c-icon>
        </c-button>
  
      </div>
      <c-button type="primary" size="50"  shape="square" @click="add(1,2)">
        <c-icon color="#00a0ea" size="30"><LogoTwitter /></c-icon>
      </c-button>
    </div>
  
  </template>
  
  <script setup lang="ts">
  import { LogoTwitter } from "@vicons/ionicons5";
 const add=(a: number, b: number)=>{
    return a + b;
  }
  export {add};
  </script>
  <style scoped lang="less">
  .cButton {
    width: auto;
    height: 2000px;
    padding: 100px;
    .box1 {
      width: 100%;
      height: 200px;
      display: flex;
      margin-top: 10px;
      div {
        box-sizing: border-box;
        width: 200px;height: 150px;
        display: flex;
        justify-content:center;
        align-items: center;
      }
    }
    .item1 {
      background-color: #ecf0f3;
    }
    .item2 {
      background-color: #e0eade;
    }
    .item3 {
      background-color: #f0eee5;
    }
    .item4 {
      background-color: #f0e5e5;
    }
  
    .box2 {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      margin-bottom: 20px;
      div {
        margin-right: 10px;
        .ooo{
          width: 200px;
          height: 200px;
          :deep(.c-button) {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
  </style>