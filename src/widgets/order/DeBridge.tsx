import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const DeBridge: React.FC = () => {
  useEffect(() => {
    if (document.documentElement.clientWidth > 998) {
      // @ts-ignore: Unreachable code error
      deBridge.widget({"v":"1","element":"debridgeWidget","title":"","description":"","width":"566","height":"560","r":null,"supportedChains":"{\"inputChains\":{\"1\":\"all\",\"10\":\"all\",\"56\":\"all\",\"100\":\"all\",\"137\":\"all\",\"1088\":\"all\",\"1890\":\"all\",\"8453\":\"all\",\"42161\":\"all\",\"43114\":\"all\",\"59144\":\"all\",\"7565164\":\"all\",\"245022934\":\"all\"},\"outputChains\":{\"7565164\":[\"\"]}}","inputChain":1,"outputChain":7565164,"inputCurrency":"","outputCurrency":"","address":"","showSwapTransfer":true,"amount":"","outputAmount":"","isAmountFromNotModifiable":false,"isAmountToNotModifiable":false,"lang":"en","mode":"deswap","isEnableCalldata":false,"styles":"eyJhcHBCYWNrZ3JvdW5kIjoiI2U1ZTVkZCIsImFwcEFjY2VudEJnIjoiI2U1ZTVkZCIsImNoYXJ0QmciOiIjMjMxZjIwIiwiYmFkZ2UiOiIjMjMxZjIwIiwiYm9yZGVyUmFkaXVzIjo4LCJ0b29sdGlwQmciOiIjZDFkMWM5IiwidG9vbHRpcENvbG9yIjoiIzIzMWYyMCIsImZvcm1Db250cm9sQmciOiIjZDFkMWM5IiwiZHJvcGRvd25CZyI6IiNkMWQxYzkiLCJwcmltYXJ5IjoiI2Y2YmFjOSIsInNlY29uZGFyeSI6IiNkMWQxYzkiLCJpY29uQ29sb3IiOiIjMjMxZjIwIiwiZm9udENvbG9yIjoiIzIzMWYyMCIsImZvbnRGYW1pbHkiOiJSb2JvdG8gTW9ubyIsInByaW1hcnlCdG5CZyI6IiMyMzFmMjAiLCJwcmltYXJ5QnRuVGV4dCI6IiNmN2Y3ZWQiLCJzZWNvbmRhcnlCdG5CZyI6IiNkMWQxYzkiLCJzZWNvbmRhcnlCdG5UZXh0IjoiIzIzMWYyMCIsImxpZ2h0QnRuQmciOiIjZDFkMWM5IiwibGlnaHRCdG5UZXh0IjoiIzIzMWYyMCIsImlzTm9QYWRkaW5nRm9ybSI6ZmFsc2UsImJ0blBhZGRpbmciOnsidG9wIjpudWxsLCJyaWdodCI6bnVsbCwiYm90dG9tIjpudWxsLCJsZWZ0IjpudWxsfSwiYnRuRm9udFNpemUiOm51bGwsImJ0bkZvbnRXZWlnaHQiOm51bGx9","theme":"dark","isHideLogo":false,"logo":"","disabledWallets":[]})
      return
    }
    if (document.documentElement.clientWidth <= 998) {
      // @ts-ignore: Unreachable code error
      deBridge.widget({"v":"1","element":"debridgeWidget","title":"","description":"","width":"292","height":"560","r":null,"supportedChains":"{\"inputChains\":{\"1\":\"all\",\"10\":\"all\",\"56\":\"all\",\"100\":\"all\",\"137\":\"all\",\"1088\":\"all\",\"1890\":\"all\",\"8453\":\"all\",\"42161\":\"all\",\"43114\":\"all\",\"59144\":\"all\",\"7565164\":\"all\",\"245022934\":\"all\"},\"outputChains\":{\"7565164\":[\"\"]}}","inputChain":1,"outputChain":7565164,"inputCurrency":"","outputCurrency":"","address":"","showSwapTransfer":true,"amount":"","outputAmount":"","isAmountFromNotModifiable":false,"isAmountToNotModifiable":false,"lang":"en","mode":"deswap","isEnableCalldata":false,"styles":"eyJhcHBCYWNrZ3JvdW5kIjoiI2U1ZTVkZCIsImFwcEFjY2VudEJnIjoiI2U1ZTVkZCIsImNoYXJ0QmciOiIjMjMxZjIwIiwiYmFkZ2UiOiIjMjMxZjIwIiwiYm9yZGVyUmFkaXVzIjo4LCJ0b29sdGlwQmciOiIjZDFkMWM5IiwidG9vbHRpcENvbG9yIjoiIzIzMWYyMCIsImZvcm1Db250cm9sQmciOiIjZDFkMWM5IiwiZHJvcGRvd25CZyI6IiNkMWQxYzkiLCJwcmltYXJ5IjoiI2Y2YmFjOSIsInNlY29uZGFyeSI6IiNkMWQxYzkiLCJpY29uQ29sb3IiOiIjMjMxZjIwIiwiZm9udENvbG9yIjoiIzIzMWYyMCIsImZvbnRGYW1pbHkiOiJSb2JvdG8gTW9ubyIsInByaW1hcnlCdG5CZyI6IiMyMzFmMjAiLCJwcmltYXJ5QnRuVGV4dCI6IiNmN2Y3ZWQiLCJzZWNvbmRhcnlCdG5CZyI6IiNkMWQxYzkiLCJzZWNvbmRhcnlCdG5UZXh0IjoiIzIzMWYyMCIsImxpZ2h0QnRuQmciOiIjZDFkMWM5IiwibGlnaHRCdG5UZXh0IjoiIzIzMWYyMCIsImlzTm9QYWRkaW5nRm9ybSI6ZmFsc2UsImJ0blBhZGRpbmciOnsidG9wIjpudWxsLCJyaWdodCI6bnVsbCwiYm90dG9tIjpudWxsLCJsZWZ0IjpudWxsfSwiYnRuRm9udFNpemUiOm51bGwsImJ0bkZvbnRXZWlnaHQiOm51bGx9","theme":"dark","isHideLogo":false,"logo":"","disabledWallets":[]})
      return
    }
  }, [])

  return (
    <div style={{ position: 'relative', height: '500px' }}>
      <div style={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}>
        <Skeleton style={{ width: '566px', height: '24px', margin: '36px 0 18px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '16px', margin: '18px 0 8px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '56px', margin: '0 0 36px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '16px', margin: '18px 0 8px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '56px', margin: '0 0 18px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '20px', margin: '18px 0 20px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '20px', margin: '19.5px 0' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
        <Skeleton style={{ width: '566px', height: '56px' }} highlightColor='#BCBCAF' baseColor='#D1D1C9' />
      </div>
      <div style={{ position: 'absolute', zIndex: 2, top: 0, left: 0 }} id="debridgeWidget"></div>
    </div>
  )
};
