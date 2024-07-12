import React from 'react';

export const SimpleSwapTON: React.FC = () => {
  function getWidth() {
    if (document.documentElement.clientWidth > 998) return 566;
    if (document.documentElement.clientWidth <= 998) return 260;
  }

  const width = getWidth();

  return (
    <iframe
      id="simpleswap-frame"
      name="SimpleSwap Widget"
      width={`${width}px`}
      height="392px"
      src="https://simpleswap.io/widget/06989838-e591-4f41-a48f-2672c6d26f65"
      frameBorder="0">
    </iframe>
  )
}
