import React, { useEffect, useState } from 'react';
import { IDataList } from './types';
import { MemoizedCurrencyTable } from "./UI/CurrencyTable";

const REQUEST_URL: string = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BNB,ETH,BCH,BNB,LTC,DOT,XTZ,ADA,USDC,AXS&tsyms=USD&api_key={a7ce7b1f9b2498742b17c770b9cf4a900dc4680c315ffc2b2896c70c65a6adf1}';

export const App: React.FC = (): JSX.Element | null => {

  const [ dataList, setDataList ] = useState<IDataList<object>>({
      RAW: {},
      DISPLAY: {}
  });

  useEffect( () => {
      (async () => {
          try {
              const response = await fetch(REQUEST_URL);
              const jsonData = await response.json();

              setDataList(jsonData);
          }
          catch (err) {
              console.error(err);
          }
      })();
  }, []);

  if (!dataList || Object.keys(dataList.DISPLAY).length === 0) {
      return null;
  }

  return (
    <div className="App">
        <MemoizedCurrencyTable data={dataList.DISPLAY} />
    </div>
  );
}
