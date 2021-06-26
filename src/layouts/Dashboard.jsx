//rfc snippet code - rfc = reactFunctionalComponent| Dashboard:  Ana sayfa
import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react"; //for table grid import
//import { Route } from "react-router"; // SECTION 12 Route...
import { Route } from "react-router";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            {/* SECTION 12 Route...→ 1) <Route/> */}
            {/* SECTION 12 Route...→ 2) <Route exact path="/" component={ProductList} />   
            SECTION 12 Route...→ 3) <Route path="/products" component={ProductList} />  */}
            {/* <Route/> */}
            <Route exact path="/" component={ProductList} />   
            <Route path="/products" component={ProductList} /> 

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

/*SECTION 12 NOTES...
step1. Root ile değişecek yer ProductList olacaktır. 
1. Unutma: Categories ve Navi Componentleri değişmeyecektir. Sadece PorductList değişecektir.
2. <ProductList /> i silip root u yazalım.
3. <root/> tagi ekleyelim.
4. Ana bileşenimizi browser rooter ile sarmallamamız gerekmektedir.
5. index.js'ye git.
İndex.js'de ana bileşenimiz App'dir.
ReactDOM.render(<App />, document.getElementById('root'));

step2. ana sayfa componentimizi aç
1.  <Route path="/" component={ProductList} />

step3: Domain IPsi
1. localhost:3000 -- bu aslında bir domaindir. Bir IP.

step4: product dersek de aynı sayfayı getiriyor.
 <Route path="/products" component={ProductList} />

step5: import
import { Route } from "react-router"; 

### İŞLEM ADIMLARI 
### 1. index.js
1. <BrowserRouter> ile Sarmallama yapalım.<App /> için
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
,document.getElementById("root")
);

2. import
### `import { BrowserRouter } from "react-router-dom"; //BrowserRouter sarmallama for <App />`

### 1. Dashboardjsx 
1. import
### `import { Route } from "react-router";`

2.  route exact path 
### `<Route exact path="/" component={ProductList} />`   
### `<Route path="/products" component={ProductList} />`

3. Definition
### `path="/"` → Ana Component - {ProductList} i aç. Ana Sayfa, localhost:3000 üzerine 
### `localhost:3000` → Domain
### `<Route path="/products"`→ dersek de {ProductList} i aç. 
### `http://localhost:3000/products`dersek de {ProductList} açılacaktır.
### exact → tam path olsun. default değer true dur. 
### `http://localhost:3000/xyz` yazarsak birşey gelmez. exact keywordu nedeniyle tam path arar.


===============================================================================
...............................................................................
code son hali:
//rfc snippet code - rfc = reactFunctionalComponent| Dashboard:  Ana sayfa
import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react"; //for table grid import

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
...............................................................................
===============================================================================
...............................................................................
EXAMPLE: Router işlemleri
Code Son Hali
//rfc snippet code - rfc = reactFunctionalComponent| Dashboard:  Ana sayfa
import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react"; //for table grid import
//import { Route } from "react-router"; // SECTION 12 Route...
import { Route } from "react-router";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            // SECTION 12 Route...→ 1) <Route/> 
            // SECTION 12 Route...→ 2) <Route exact path="/" component={ProductList} />   
            SECTION 12 Route...→ 3) <Route path="/products" component={ProductList} />  
            // <Route/> 
            <Route exact path="/" component={ProductList} />   
            <Route path="/products" component={ProductList} /> 

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

................................................................................
===============================================================================
// SECTION -11 - STEPS
*/
