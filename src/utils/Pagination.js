import styled from '@emotion/styled';
import React from 'react';

const Div = styled.div`
    margin-left: 50%; 
    margin-right: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 8px;
    row-gap: 8px;
`

const Pagination = props => {

  return (
    <Div>
        <div>previous</div>
        <div> 1 </div>
        <div>next</div>
    </Div>
  );
};

export default Pagination;