import { useState, useEffect } from "react";
import '../styles.css'

const CurrencyAPI = () => {
    const [data, setData] = useState({})

    const getData = () => {
        fetch('https://api.currencyfreaks.com/latest?apikey=5ea3c1bc908341dfba4ead7f82d389bc&symbols=CAD,EUR,IDR,JPY,CHF,GBP')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
        
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>We Buy</th>
                  <th>Exchange Rate</th>
                  <th>We Sell</th>
                </tr>
              </thead>
              <tbody>
                {data.rates &&
                  Object.keys(data.rates).map((currency) => (
                    <tr key={currency}>
                      <td>{currency}</td>
                      <td>
                        {(
                          parseFloat(data.rates[currency]) +
                          data.rates[currency] * 5 / 100
                        ).toFixed(4)}
                      </td>
                      <td>{parseFloat(data.rates[currency]).toFixed(4)}</td>
                      <td>
                        {(
                          parseFloat(data.rates[currency]) -
                          data.rates[currency] * 5 / 100
                        ).toFixed(4)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <p>Rates are based from 1 USD<br/>
            This application uses API from <a href="https://currencyfreaks.com">https://currencyfreaks.com</a>
            </p>
          </div>
        </div>
      );
};
    


export default CurrencyAPI;