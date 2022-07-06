import styled from 'styled-components';
import { Swiper } from 'swiper/react/swiper-react';

export const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: flex-end;

  @media (max-width: 820px) {
    margin-top: 64px;
    margin-bottom: 64px;
  }

  @media (max-width: 425px) {
    margin-top: 64px;
    width: 320px;
  }
`;
