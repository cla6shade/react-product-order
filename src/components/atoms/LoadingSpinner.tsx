import styled from '@emotion/styled';
import Container from '@components/atoms/container/Container';

/**
 * Source: https://loading.io/css/
 */
const LoadingSpinner = styled.div`
  & {
    /* change color here */
    color: #d1d1d1
  }

  &,
  &:after {
    box-sizing: border-box;
  }

  & {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: lds-hourglass 1.2s infinite;
  }

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

export function LoadingSpinnerFullWidth() {
  return (
    <Container elementSize="full-width" justifyContent="center">
      <LoadingSpinner />
    </Container>
  );
}

export default LoadingSpinner;
