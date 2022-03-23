import React, { Fragment } from "react";

import styledComponents from "styled-components";

const DesktopContentWrapper = styledComponents.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  background-color: #edf2f7;
  padding: 0;
`;

const DesktopStyledBackground = styledComponents.div`
  display: flex;
  position: relative;
  width: 100%;
  background: #edf2f7;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 576px) {
    top: 0;
    min-height: 100vh;
  }
`;

const DesktopStyledWidth = styledComponents.div`
  position: relative;
  width: inherit;
  background: ${({ bgColor }) => bgColor || "#ffffff"};
  background-image: ${({ bgImage }) => bgImage || null};
  background-size: ${({ bgSize }) => bgSize || null};
  background-position: ${({ bgPosition }) => bgPosition || null};
  margin: 0 auto 0;
  overflow: hidden;
  @media (min-width: 576px) {
    max-width: 375px;
    -webkit-box-shadow: 0px 52px 120px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 52px 120px rgba(0, 0, 0, 0.08);
  }
`;

const DesktopBackgroundLayout = ({ children, bgColor, bgImage, bgSize }) => {
  return (
    <Fragment>
      <DesktopContentWrapper>
        <DesktopStyledBackground>
          <DesktopStyledWidth
            bgColor={bgColor}
            bgImage={bgImage}
            bgSize={bgSize}
          >
            {children}
          </DesktopStyledWidth>
        </DesktopStyledBackground>
      </DesktopContentWrapper>
    </Fragment>
  );
};

export default DesktopBackgroundLayout;
