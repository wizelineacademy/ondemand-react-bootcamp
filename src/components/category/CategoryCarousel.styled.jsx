import styled from "@emotion/styled";

const CategorySlider = styled.div`
  .parent {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    width: 200px;
    height: 200px;
    margin: 10px;
  }
  
  .child {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  
  img.child {
    object-fit: cover;
  }
  
  .covering {
    z-index: 1;
    background: #eee;
    transition: transform 1s ease-in-out;
    transform: translateX(-100%);
    display: flex; justify-content: center; align-items: center;
  }

  .covering-pre {
    z-index: 1;
    background: #eee;
    transition: transform 1s ease-in-out;
    transform: translateX(+100%);
    display: flex; justify-content: center; align-items: center;
  }
  
  .covered {
    transform: translateX(0%);
  }

  .hidden {
    a {
      display: none;
    }
  }
`

export default CategorySlider;