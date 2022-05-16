import React from 'react';

import { BottomFrame, LeftFrame, RightFrame, TopFrame } from './Styled.Frame';

function Frame() {
  return (
    <>
        <TopFrame></TopFrame>
        <RightFrame></RightFrame>
        <BottomFrame></BottomFrame>
        <LeftFrame></LeftFrame>
    </>
  )
}

export default Frame