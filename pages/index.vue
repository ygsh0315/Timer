<template>
  <div class = "timer">
    <h1>진힐라 시간 계산기</h1>
    <div class = "deathTime">{{DTM}}:{{DTS}}</div>
      <div class="btns">
        <div class="topBtns">  
          <button class="btn" @click="term1()">주기 1</button>
          <button class="btn" @click="term2()">주기 2</button>
          <button class="btn" @click="term3()">주기 3</button>
        </div>
        <div class="bottomBtns">  
          <button class="btn" @click="plusSec()">+1초</button>
          <button class="btn" @click="minusSec()">-1초</button>
          <button class="btn" @click="returnTime()">되돌리기</button>  
          <button class="btn" @click="resetTime()">초기화</button>
        </div>  
      </div>  
    <div class= "detailTime">
      <div>{{DT1M}} 60초전</div>
      <div>{{DT45S}} 45초전</div>
      <div>{{DT30S}} 30초전 </div>
      <div>{{DT15S}} 15초전 </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      deathTimeMin : 27,
      deathTimeSec : 14,
      changeDTM : null,
      changeDTS : null,
  
    }
  },
  computed:{
    DTM(){
      return this.deathTimeMin.toString().padStart(2,'0')
    },
    DTS(){
      return this.deathTimeSec.toString().padStart(2,'0')
    },
    DT1M(){
      let DT1M_m = this.deathTimeMin+1;
      let DT1M_s = this.deathTimeSec;
      return DT1M_m.toString().padStart(2,'0') + ":" + DT1M_s.toString().padStart(2,'0')
    },
    DT45S(){
      let DT45S_m = null;
      let DT45S_s = null;
      if(this.deathTimeSec<15){
        DT45S_m = this.deathTimeMin;
        DT45S_s = this.deathTimeSec + 45;
      }else{
        DT45S_m = this.deathTimeMin + 1;
        DT45S_s = this.deathTimeSec - 15;
      }
      return DT45S_m.toString().padStart(2,'0') + ":" + DT45S_s.toString().padStart(2,'0')
    },
    DT30S(){
      let DT30S_m = null;
      let DT30S_s = null;
      if(this.deathTimeSec<30){
        DT30S_m = this.deathTimeMin;
        DT30S_s = this.deathTimeSec + 30;
      }else{
        DT30S_m = this.deathTimeMin + 1;
        DT30S_s = this.deathTimeSec - 30;
      }
      return DT30S_m.toString().padStart(2,'0') + ":" + DT30S_s.toString().padStart(2,'0')
    },
    DT15S(){
      let DT15S_m = null;
      let DT15S_s = null;
      if(this.deathTimeSec<45){
        DT15S_m = this.deathTimeMin;
        DT15S_s = this.deathTimeSec + 15;
      }else{
        DT15S_m = this.deathTimeMin + 1;
        DT15S_s = this.deathTimeSec - 45;
      }
      return DT15S_m.toString().padStart(2,'0') + ":" + DT15S_s.toString().padStart(2,'0')
    }
  },
  methods:{
    term1(){
      this.changeDTM = this.deathTimeMin
      this.changeDTS = this.deathTimeSec
      if(this.deathTimeSec<32){
        this.deathTimeMin-= 3
        this.deathTimeSec+= 28
      }else{
        this.deathTimeMin-= 2
        this.deathTimeSec -= 32
      }  
    },
    term2(){
      this.changeDTM = this.deathTimeMin
      this.changeDTS = this.deathTimeSec
      if(this.deathTimeSec<6){
        this.deathTimeMin-= 3
        this.deathTimeSec+= 54
      }else{
        this.deathTimeMin-= 2
        this.deathTimeSec -= 6
      }  
    },
    term3(){
      this.changeDTM = this.deathTimeMin
      this.changeDTS = this.deathTimeSec
      if(this.deathTimeSec<40){
        this.deathTimeMin-= 2
        this.deathTimeSec+= 20
      }else{
        this.deathTimeMin-= 1
        this.deathTimeSec -= 40
      }  
    },
    plusSec(){
      this.changeDTM = this.deathTimeMin
      this.changeDTS = this.deathTimeSec
      this.deathTimeSec+=1
      if(this.deathTimeSec == 60){
        this.deathTimeSec = 0
        this.deathTimeMin += 1
      }
    },
    minusSec(){
      this.changeDTM = this.deathTimeMin
      this.changeDTS = this.deathTimeSec
      this.deathTimeSec-=1
      if(this.deathTimeSec == -1){
        this.deathTimeSec = 59
        this.deathTimeMin -= 1
      }
    },
    returnTime(){
      this.deathTimeMin = this.changeDTM
      this.deathTimeSec = this.changeDTS
    },
    resetTime(){
      this.changeDTM = this.deathTimeMin
      this.changeDTS = this.deathTimeSec
      this.deathTimeMin = 27
      this.deathTimeSec = 14
    }
  }
}
</script>
<style lang="scss">
.timer {
  height: 500px;
  width: 500px;
  border : 5px solid #2E2423;
  border-radius: 30px;
  background-color: #464D25;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px;
  .deathTime{
    font-size : 50px;
    font-weight: bold;
  }
    .btns{
      display: flex;
      width: 500px;
      height: 100px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .topBtns{  
        .btn{
        height: 50px;
        width: 120px;
        background : none;
        border : 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: 25px;
        }
      }
      .bottomBtns{
        .btn{
        height: 40px;
        width: 100px;
        background : none;
        border : 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
        }
      }
    }
  .detailTime{
    font-size: 20px;
    font-weight: bold;
  .detailTime:nth-child(3){
    color: red;
  }
  }    
}
</style>