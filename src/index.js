import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom"; //BrowserRouter sarmallama for <App />

//NB- Sanal Virtual Dom mekanizması ile çalışıyor.

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
,document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





/*SECTION 12 NOTES...
step1. Root ile değişecek yer ProductList olacaktır. 
1. Unutma: Categories ve Navi Componentleri değişmeyecektir. Sadece PorductList değişecektir.
2. <ProductList /> i silip root u yazalım.
3.  <Route/> tagi ekleyelim.
4. Ana bileşenimizi browser rooter ile sarmallamamız gerekmektedir.
5. index.js'ye git.
İndex.js'de ana bileşenimiz App'dir.
ReactDOM.render(<App />, document.getElementById('root'));
6. <BrowserRouter></BrowserRouter> açalım.
7. App'yi <BrowserRouter><App /></BrowserRouter> içine yerleştir.
8. import etkel.
import { BrowserRouter } from 'react-router-dom'; //BrowserRouter sarmallama
9. Bu root işlemini App'de destekleyeceğin anlamına gelmektedir.
===============================================================================
*/
