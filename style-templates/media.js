import reduce from 'lodash/reduce';
import { css } from 'styled-components';

const deviceWidths = {
  smallPhone: 320,
  phone: 414,
  tablet: 768,
  tabletLandscape: 1024,
};

export default reduce(
  deviceWidths,
  (memo, deviceWidth, deviceWidthKey) => ({
    ...memo,
    [deviceWidthKey]: (...args) => css`
      @media (max-width: ${deviceWidth / 16}em) {
        ${css(...args)};
      }
    `,
  }),
  {},
);