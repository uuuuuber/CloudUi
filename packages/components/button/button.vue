<template>
  <div class="box" :class="[boxBg, shape, isStrSize]" :style="[style.bgColor, round.maxRound, isNumSize?.bigWH]" >
    <button
      :class="[bem.b(), type, isStrSize]"
      :style="[style.color, style.bgColor, round.minRound, isNumSize?.smallWH]"
      @click="handle"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { createNamespace } from "@cloud/utils/create";
defineOptions({
  name: "c-button",
});
const bem = createNamespace("button");
const props = defineProps({
  type: {
    type: String,
    default: "primary",
    required: true,
  },
  bgColor: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  shape: {
    //按钮形状round/圆角、circle/圆、square/方形
    type: String,
    default: "",
  },
  maxRound:{
    type:String,
    default:''
  },
  minRound:{
    type:String,
    default:''
  },
  size: {
    //s/m/l
    type: String,
    default: "m",
  },
});

const isStrSize=computed(()=>{
  if(isNaN(Number(props.size))) return props.size
})
const isNumSize=computed(()=>{
  if(!isNaN(Number(props.size))) {
      let wh = (Number(props.size)-15)
      return {
        bigWH: {width: props.size+'px',height: props.size+'px'},
        smallWH: {width: wh+'px',height: wh+'px'}
    }
  } 
})

const round = computed(()=>{
  return {
    maxRound: props.maxRound ? ( props.maxRound == '50%' ? {borderRadius: props.maxRound} : {borderRadius: props.maxRound + 'px'} ) : {},
    minRound: props.minRound ? ( props.minRound == '50%' ? {borderRadius: props.minRound} : {borderRadius: props.minRound + 'px'} ) : {}
  };
})

const style = computed(() => {
  if (!props.bgColor && !props.color) return {};
  return {
    bgColor: props.bgColor ? { backgroundColor: props.bgColor } : {},
    color: props.color ? { color: props.color } : {},
  };
});

const boxBg = computed(() => {
  if (!props.bgColor.length) {
    if (props.type == "primary") {
      return "priBg";
    } else if (props.type == "success") {
      return "sucBg";
    } else if (props.type == "warning") {
      return "warBg";
    } else {
      return "danBg";
    }
  }
  return;
});

const emit = defineEmits(["click"]);
const handle = (e: MouseEvent) => {
  emit("click", e);
};
</script>


<style scoped lang="less">
@import "./button.less";
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box.round {
  border-radius: 1.75em;
  .c-button {
    border-radius: 1.75em;
  }
}
.box.square {
  border-radius: 0;
  .c-button {
    border-radius: 0;
  }
}
.box.circle{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  .c-button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.box.circle.m{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  .c-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
.box.circle.l{
  width: 85px;
  height: 85px;
  border-radius: 50%;
  .c-button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}


//type设置
.c-button.primary {
  color: @pcolor;
  background-color: @bg-pcolor;
  box-shadow: @shadow-p;
  &:hover {
    box-shadow: @shadow-p-h;
  }
}

.c-button.success {
  color: @scolor;
  background-color: @bg-scolor;
  box-shadow: @shadow-p;
  &:hover {
    box-shadow: @shadow-p-h;
  }
}

.c-button.danger {
  color: @dcolor;
  background-color: @bg-dcolor;
  box-shadow: @shadow-p;
  &:hover {
    box-shadow: @shadow-p-h;
  }
}

.c-button.warning {
  color: @wcolor;
  background-color: @bg-wcolor;
  box-shadow: @shadow-p;
  &:hover {
    box-shadow: @shadow-p-h;
  }
}
.c-button.custom {
  box-shadow: @shadow-p;
  &:hover {
    box-shadow: @shadow-p-h;
  }
}



//size设置
.box.s{
  width: 85px;
  height: 45px;
  .c-button {
    width: 70px;
    height: 30px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.box.m {
  width: 135px;
  height: 65px;
  .c-button {
    width: 120px;
    height: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.box.l {
  width: 155px;
  height: 85px;
  .c-button {
    width: 140px;
    height: 70px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>