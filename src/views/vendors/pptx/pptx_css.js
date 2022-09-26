export default `section {
    width: 100%;
    height: 690px;
    position: relative;
    border: 1px solid #333;
    background-color: #EFEFEF;
    text-align: center;
    border-radius: 10px;
    box-shadow: 1px 1px 3px #AAA;
    overflow: hidden;
  }
  
  section div.block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  section div.content {
    display: flex;
    flex-direction: column;
    /*
    justify-content: center;
    align-items: flex-end;
    */
  }
  
  section div.v-up {
    justify-content: flex-start;
  }
  section div.v-mid {
    justify-content: center;
  }
  section div.v-down {
    justify-content: flex-end;
  }
  section div.h-left {
    align-items: flex-start;
    text-align: left;
  }
  section div.h-mid {
    align-items: center;
    text-align: center;
  }
  section div.h-right {
    align-items: flex-end;
    text-align: right;
  }
  section div.up-left {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
  section div.up-center {
    justify-content: flex-start;
    align-items: center;
  }
  section div.up-right {
    justify-content: flex-start;
    align-items: flex-end;
  }
  section div.center-left {
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
  section div.center-center {
    justify-content: center;
    align-items: center;
  }
  section div.center-right {
    justify-content: center;
    align-items: flex-end;
  }
  section div.down-left {
    justify-content: flex-end;
    align-items: flex-start;
    text-align: left;
  }
  section div.down-center {
    justify-content: flex-end;
    align-items: center;
  }
  section div.down-right {
    justify-content: flex-end;
    align-items: flex-end;
  }
  
  section span.text-block {
    /* display: inline-block; */
  }
  
  li.slide {
    margin: 10px 0;
    font-size: 18px;
  }
  
  div.footer {
    text-align: center;
  }
  
  section table {
    position: absolute;
  }
  
  section table, section th, section td {
    border: 1px solid black;
  }
  
  section svg.drawing {
    position: absolute;
    overflow: visible;
  }`
  