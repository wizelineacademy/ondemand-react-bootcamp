import styled from 'styled-components';
import { Swiper } from 'swiper/react/swiper-react';

export const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: flex-end;

  @media (max-width: 1007px) {
    width: 640px;
    height: 384px;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  @media (max-width: 640px) {
    width: 304px;
    height: 192px;
    margin-top: 64px;
  }
`;
