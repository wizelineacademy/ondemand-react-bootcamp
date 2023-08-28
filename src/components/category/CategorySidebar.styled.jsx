import styled from "@emotion/styled";

const CategorySidebar= styled.div`
  .sidebar {
    height:100%;
    width:200px;
    background-color:#fff;
    //float: left;
    position:fixed!important;
    //position:relative;
    z-index:1;overflow:auto
  }

  .s-light-grey,.s-hover-light-grey:hover,.s-light-gray,.s-hover-light-gray:hover {
    color:#000!important;
    background-color:#f1f1f1!important
  }

  .s-card,.s-card-2 {
    box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)
  }

  .s-bar .s-bar-item {
    padding:8px 16px;
    float:left;
    width:auto;
    border:none;
    display:block;
    outline:0
  }

  .s-bar-block .s-bar-item {
    width:100%;
    display:block;
    padding:8px 16px;
    text-align:left;
    border:none;
    white-space:normal;
    float:none;outline:0
  }

  .s-bar-block.s-bar-center .s-bar-item {
    text-align:center
  }

  .s-bar-item:hover {
    color:#000!important;
    background-color:#ccc!important
  }

  .s-bar-item.selected {
    font-weight: bold;
  }
`

export default CategorySidebar;