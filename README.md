DAY12 NORTHWIND REACT NOTES 
======================================================================
## Documantation
[Documantation](https://tr.reactjs.org/)
[react tutorial](https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important)
[github react](https://github.com/facebook/react/)
[wesbos redux github](https://github.com/wesbos/redux/blob/master/examples/shopping-cart/actions/index.js)
======================================================================
## Eclipse-Swagger And React 
### [eclipse swagger](http://localhost:8080/swagger-ui.html)
### [browser react](http://localhost:3000/)
======================================================================
## SECTION
======================================================================
## Day11th intalled packages
### `npm install semantic-ui-react semantic-ui-css`
### `npm install axios`
======================================================================
## Day12th intalled packages
### `npm install react-router-dom`
### ``
======================================================================
## CREATE FILE - COMPONENT
### CREATE LAYOUT FILE = SignedIn.jsx
1. layouts--> Right Click > New File> FileName= SignedIn.jsx
path: src\layouts\SignedIn.jsx

### CREATE LAYOUT FILE = SignedOut.jsx
2. layouts--> Right Click > New File> FileName= SignedOut.jsx
path: src\layouts\SignedOut.jsx

### CREATE PAGES FILE = ProductDetail.jsx
3. pages--> Right Click > New File> FileName= ProductDetail.jsx
path: src\pages\ProductDetail.jsx


### CREATE PAGES FILE = CartDetail.jsx
3. pages--> Right Click > New File> FileName= CartDetail.jsx
path: src\pages\CartDetail.jsx


======================================================================
## Google search: `semantic ui react`
[semantic ui react](https://react.semantic-ui.com/)[semantic ui react]

======================================================================
## All Steps - SECTION -12 -STEPS Day12 Northwind React Lesson
===========================================================================
### step1:useEffect function a Boş bir array atmak gerekiyor! Aksi takdirde çalışır fakat networke bakarsak sürekli istekte bulunur.
#### SECTION 12 ,[] - Boş bir array atmak gerekiyor! Aksi takdirde çalışır fakat sürekli istekte bulunur.
`path src\pages\ProductList.jsx`
===========================================================================
### step2: React Prop lar ile çalışmak
1. React'in en önemli konusu Propslar ile çalışmak.
2. Bir component'de diğerine geçiş yaparken veri taşımayla ilgili 
kısacası React'da Prop'larla ilgili bir çalışma yapacağız.
3. React ana konusu bir component'den alt component'e data veya event nasıl taşırız?
======================================================================

**********************************************************************
============================================================================
### SENARYO: 1 - FAKE bir Autontication Ortamı Oluşturacağız. 
1. google search: semantic ui react 
AMAÇ: end-pointlerimize hızlıca ulaşmak
2. FAKE bir Autontication Ortamı Oluşturacağız. 
s1. Örneğin, şuan sisteme giriş yapmamış 
giriş yapmamış birisi için ya kayıt ol(register) yada giriş yap(Login) olabilir.
s2. Bu kişi sisteme giriş yapmış olabilir. 
Sisteme giriş yaptığında burada başka bir Componentin görünmesini istiyoruz. 3. Kısacası, biz burada iki adet buton gösterebiliriz. Giriş yapmadığı takdirde → SignUp yada Login butonu 
Yada giriş yaptığında da SigIn yada SingUp gerçekleştirdiğinde burada kişi ile ilgili bir bilgi oluşturabilirim.
======================================================================


## SECTION-12 STEPS
### step1: rfc ile componentimizi oluşturalım.
#### Signed Out.jsx and SingedIn.jsx components has been added.
1. SignedOut.jsx
2. SingedIn.jsx
======================================================================
### step2: Öncelikle daha basit olduğu için SignedOut.jsx i yapalım.
1. div içine iki adet buton ekle.
2.  <Button>Giriş yap</Button>
    <Button>Kayıt ol</Button>
======================================================================
### step3: SignedIn.jsx i yapalım.
1. ÖZETLE: Bir div içinde Menu Item > 
s1. bir Image,
s2. Bir tane dropdown, onu menu formatında gösterecek. İçerisinde de elemanlar olacak.
======================================================================
#### SUMMARY:React'da iki component arasında bilgi(event) geçişini kısacası Propları öğreneceğiz.  
======================================================================
### step4: Navi.jsx 'de iki componenti çağır
#### Calling Signed Out.jsx and SingedIn.jsx components in Navi.jsx.
1. SignedOut.jsx -- calling component
2. SingedIn.jsx --calling component
======================================================================
### step5: SignIn.jsx 'de pointing ve kullanıcı ismi Vermek
1.  userName and pointing has been added
<Dropdown pointing="top left" text="Nazan">

======================================================================
### step6: SignOut.jsx 'de 
1. Buttonları container içine al.

2. Buttonlara primary özelliği ver.
3. Buttonlara style ver.
======================================================================
### step7:Sisteme Giriş Yapılması Senaryosu
1. Sisteme Giriş yapıldığında user and photo bilgisi görünsün.
2. Sistemden çıkış yapıldığında ise Giriş yap ve Kayıt ol butonlarının görünmesini istiyoruz.
3. Dolayısıyla bu nokta bize bu state önemli.
4. Giriş yap ve Kayıt ol bilgisinin gösterilip göstermeyeceğne karar veren Nav.jsi'dir.
5. Navi.jsx'e geldiğimiz zaman bizim bir şart göstermen lazım. example.SignedOut  ve SignedIn  için.

6. Navi.jsx
<!-- <Menu.Menu position="right">
    <CartSummary />
    <SignedOut />
    <SignedIn />
</Menu.Menu> -->

### SENARYO - Hangisi göstereceğimiz karar vermek- NAVI
1. Eğer kişi Authentice olmuşsa  SignedIn i göster 
2. Authentice olmamışsa SignOut i göster 
3. YILDIZLI NOT: Bunlardan hangisini göstereceğine karar verecek olan Navi'dir.
4. YILDIZLI NOT: Bir Component'te senin bir şarta göre birşeyler yapman lazım. Bir datayı tutman lazım ise orada AKLINA STATE gelsin. Yani o componentin datası kısacası. Bu işin en basic kısmı. Biz bir sonraki aşamada alt componente data taşıyacağız. 
5. Bizim SingIn ve SignOut'a tıkladığımızda state i değiştirmesi lazım. 
6. Bizim Şuan Navi miz içerisinde
Navi= {SignIn, SingOut} var. hangisini göstereceğine karar verecek olan Navigation olduğu için State bilgisini Navi içinde tutmak zorundasın. Çünkü o SI yada SO u gösterecek. 
7. Ama biz state bilgisini SI yada SO 'dan değiştirebilmelisin. O buttonlara tıklayarak değiştirebilmelisin. 
8. O yüzden biz navi içindeki state i biz SI ve SO'a taşımamız gerekiyor. O yüzden state konusu React için çok önemli. 
9. Yine bir hook yazacağız. 
React'de useState hook unu kullabilmemiz için.

======================================================================
### step8:Hook Yazmak - Navi.jsx
1. State i hook un içinde tanımlayacağız. 
2. useState importunu ekleyelim.
import React, { useState } from "react";
3. Destructor yapalım. 
const [isAuthenticated, setIsAuthenticated] = useState(true);
4. Ternay Operatörü ile State bilgisi tutalım.
###  {isAuthenticated ? <SignedIn /> : <SignedOut />}
Biz sisteme kayıt olmadıysak butonların gelmesi gerekiyor. Giriş yap, Kayıt ol gibi. Kayıt olmuşsak kullanıcı bilgilerimizin gelmesi gerekiyor.

======================================================================
### step9: State i Değiştiren Fonksiyon(setIsAuthenticated) ile State Değiştirmek - Navi.jsx
1. Çıkış yap butonuna bastığımızda isAuthenticated ı değiştirmem gerekiyor.
2. setIsAuthenticated ı kullanarak ona true yada false bilgini geçebilirsin.
3. SigIn.jsx'den başlayalım.
4. YILDIZLI NOT: function with snippet handleSignOut() oluşturalım. Biz fonksiyonu buraya yazmak zorundayız çünkü stati yönettiğimiz yer Navi.jsx 'dir. State i navi kullanıyor. O yüzden state i değiştirmen gerekiyor. Bunu çağıracak olan alt componenttir. Yani bizim alt Component'e bir fonksiyon yollamamız lazım.
5. ÖZETLE: bizim alt component'e bir fonksiyon yollamamız lazım.
6. Nereye Yollayacağız?
SignedIn'e çünkü giriş yapmış.

======================================================================
### function tanımlamak
7. function tanımlamak
//function with snippet handleSignOut() SECTION -12
  function handleSignOut(params) {   //SECTION -12 -aarams
    //çıkış yapmayı handle edelim
    setIsAuthenticated(false)  //true yu false çekiyoruz. Bunu da oraya göndereğiz.
  }

======================================================================
### Alt Component'e Data Geçmek
8.  syntax code Navi.jsx 
{isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut />} 

### Fonksiyona Props  Atamak- Fonksiyona değer atamak
{isAuthenticated ? <SignedIn signOut={handleSignOut} bisey={}/> : <SignedOut />} 
s1. bisey="1" değerini atamak
### `{isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> : <SignedOut />} `

======================================================================
### USING Props  -SignedIn.jsx'de...
1. SignedIn.jsx'de... 
2. Biz Navi.jsx'de bu hareketi yaptığımızda; 
3. SignIn.jsx içindeki return fonksiyonu çağrılıyor. 
4. Demekki onlarda onun parametreleri biz de props diye geçebiliriz.
5. syntax code
### `export default function SignedIn(props) { //SECTION 12- props}`

======================================================================
### AÇIKLAMA
1. Çıkış yap buttonuna tıkladığımız zaman, propslardaki, propslar encapsulationdır.
2. Navi.jsx içindeki signOut={handleSignOut} bisey="1" bu iki değer props ın içindedir.
3. Bu propslardaki handleSignOut çalıştırarak devreye alabilir.
======================================================================
## SignIn.jsx'de <Dropdown.Item> içine OnClick event vermek 
1. Nasıl kullanıcaz? SignIn.jsx'de Dropdown'a tıklandığında olayını yakalamamamız lazım.
###  ` <Dropdown.Item onClick={props.signOut} text="Çıkış" icon="sign-out" /> `

======================================================================
### Kayıt ol ve Giriş yap Buttonları için OnClick event vermek 
1. Giriş yap butonuna basınca avartar gelsin. Giriş yap true ya çeksin.
2. Navi.jsx'de fonksiyon tanımla
function with snippet handleSignIn()→ TRUE SECTION -12
  function handleSignIn() {}
3.  return ( <div> ...)  içinde
<SignedOut signIn={handleSignIn} /> //SECTION -12 : added code  ekle.
...................................................................
<Menu.Menu position="right">
            <CartSummary />
            {/* ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için}     -- //SECTION -12*/}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} /> //SECTION -12 : added code
            )}
          </Menu.Menu>
....................................................................
4. Singout.jsx'de props geçmek - SignedOut(props)
export default function SignedOut(props) { //SECTION 12: props geçmek - SignedOut(props)
......................................................................
======================================================================
5.  OnClick eventi vermek - SingOut.jsx'de(Giriş yap butonuna tıklandığında)
<Button onClick={props.signIn} primary>Giriş yap</Button>
6. YILDIZLI NOT: Burada props encapsulation geliyor. props ın signIn ini şeklide. Biz burda destruction yaparız. Ezbere yapma....
7. Objeleri nasıl destruct ediyorduk?
8. objeleri destruct etmek → props geçmek yerine obje destruct ediyorduk.
changed code → export default function SignedOut(props) {}
new code → export default function SignedOut({ signIn }) {}

YILDIZLI NOT: SingedOut.jsx
1. heryere props yazmak yerine obje destruct etmemiz laızm.
2. changed code → export default function SignedOut(props) {}
3. new destruct obje code → export default function SignedOut({signIn}) {}
4. her yere props demene gerek kalmaz.
changed code → <Button onClick={props.signIn} primary>Giriş yap</Button>
new code →   <Button onClick={signIn} primary>Giriş yap</Button>
======================================================================
## Root İşlemi Yapmak
1. Ürüne tıkladığımızda o ürünün detayına gidelim.
2. HATIRLATMA: Birbiriyle ilişkisi zayıf componnetlerde veri taşımayı nasıl yapacağız. Bu aşamada da redux kullanacağız. 
Component hiyerarşimize göre ürünler ile Navi aynı hiyerarşide direkt bağlantıları yok. bağlantıları navi üzerinde var o yüzden farklı componentlerde datayı nasıl taşıyacağımızı konuşacağız. 
Bu noktada Redux Thunk da kullanacağız. Asenkron operasyonları veri kaynağına API'ye bağlanarak yapılan çalışmaları da bu alt yapıyla görmüş olacağız.  

### Root İşlemi Nedir?
1. Linktir kısacası bir şeye tıkladığımızda diğer şeyi açmaktır.
2. Single Page Application çalışıyoruz.
### YILDIZLI NOT: Dolayısıyla bizim yapacağımız iş bir componenti kapatıp, başka bir componenti açmaktır.

###  IMPORT `npm install react-router-dom`
kuralım. react için yazılmış en popüler pakettir. Core içinde gelmez. React iiçin yazılmış projemize dahil ediyoruz.
3. package.json'da  react-router-dom eklendiğini görelim.
4. Kendi layoutumuzda çalışacağız. Dolayısıyla Dashboard.jsx'e geçelim. Root işlemini istediğimiz ana componentte yapabiliriz. Başka componentlerde de root işlemi yapabiliriz.


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
======================================================================
## ÖNEMLİ HATIRLATMALAR
### ./ bulunduğunuzdizini temsil eder
======================================================================
## ProductDetail Sayfasının Açılması
### CREATE PAGES FILE = ProductDetail.jsx
3. pages--> Right Click > New File> FileName= ProductDetail.jsx
path: src\pages\ProductDetail.jsx
### ProductDetail.jsx 
1. path: src\pages\ProductDetail.jsx
2. rfc snipped ekle.
......................................................................
### Dashboard.jsx'e git
1. ProductDetail Route path ekleyelim.
<Route path="/products/1" component={ProductDetail} /> 
2. import ekleyelim.
import ProductDetail from "../pages/ProductDetail";
3. browser'da hata alacağız. Nedeni exactdir.
YILDIZLI NOT: Eğer benzerlik varsa exact yapıştır.(example. Dashboard.jsx)

### `<Route exact path="/products" component={ProductList} />` 
4. Uyarı: Benzerlik var dikkat et!
### `<Route exact path="/" component={ProductList} />`   
### `<Route exact path="/products" component={ProductList} />` 
### `<Route path="/products/1" component={ProductDetail} />`
5. Hangi ürüne tıklarsam onun numarası gelsin ve detay sayfası gelsin.
Dolayısıyla parametre var. Parametreleri : ikinokta ile gösteriyoruz.
......................................................................
### USING: Route WITH PARAMETER - Dashboard.jsx
### `<Route path="/products/:id" component={ProductDetail} />`
1. Artık hangi parametreyi verirsek verelim gelecektir.
======================================================================
## CartDetail Route eklemek
### CREATE PAGES FILE = CartDetail.jsx
### pages--> Right Click > New File> FileName= CartDetail.jsx
###  rfc snipped
### Dashboard.jsx'de - CartDetail Route eklemek 
1. CartDetail Route
`<Route exact path="/cart" component={CartDetail} />` 
2. import ekle
`import CartDetail from "../pages/CartDetail";`

======================================================================
## CartSummary.jsx'de Sepet Git steplerini Oluşturmak
###  `<Dropdown.Divider/>`  - araya çizgi çekmek için
### YILDIZLI NOT: AMAÇ: Sepete git e tıkladığımızda roote u çalıştırmak istiyoruz.
### `<Dropdown.Item>Sepete git</Dropdown.Item>`
### Link veya NavLink dediğimiz React-router-dom'dan gelen bir element ile yapıyoruz.

### SOLUTION: USING SEMANTIC:'Sen bir NavLink'sin'
#### USING: NAVLINK : Bir yerden bir yere yönlendirmek için Kullan
1. as={ NavLink } ekle
### `<Dropdown.Item as={ NavLink }>Sepete git</Dropdown.Item>`
2. intellicene auto import ekle
### `import { NavLink } from "react-router-dom";    //for Sepete Ekle Navlink import`

3.  to=""  → nereye gidecek?
### `<Dropdown.Item as={ NavLink } to="/cart">Sepete git</Dropdown.Item>`
### SOLUTION: DON'T USING SEMANTIC :'Sen bir Link'sin'
1. <Link> importu otomatik gelecektir.
2. UYARI: href i unut bunu kullanmayacağız.
======================================================================
## Ürüne tıkladığımızda ürün detayına götürsün.
1. Angular'daki RoouterLink'in aynısı) Bunlar hepsi birbirinin aynısı.
2. props ile kullandığımız da Angular ile çok benzer. Sadece Angular'da html ve component entegrasyonunu bilmen seni koruyor. Bunlar birbirine benzeyen yapılar. Örneğin, Redux i biliyorsan. İster React-Redux kullan, ister ngrx kullan ister vuex kullan. Herbiri popüler redux implementasyonudur. Bu senin için hep aynıdır. Uzun süre react ile çalışmasan da hepsinin mantığı aynıdır. Arada nasıl yazıldığına google dan bakıyor. Olaya yaklaşım o olmalı.      
Asla kendini bir codea bağlı kalma. Özetle herbir ürünü link haline getireceğiz.

### Herbir ürünü link haline getirmek
### ProductList.jsx Git
1. USING: ProductName i Link haline getireceğiz.
### `{<Table.Cell>{ product.productName }</Table.Cell> }`
### `{<Table.Cell>{ product.productName }</Table.Cell> }`
2. Link vermek
 ### `{<Table.Cell><Link>{ product.productName }</Link></Table.Cell> }`
3. back tick yap - <Link to={``}>
 ### ` {<Table.Cell><Link to={}>{ product.productName }</Link></Table.Cell> }`
4. String ile birleştirmek yerine direkt birleştiriyorsun.
Avantajı, C# ve java'da da vardır. 
"metin-1" + "metin-2" iki metin varsa bellekte farklı yerlerde tutuyor. Toplamını başka yerde tutuyor. Bu sayede tek string ile işi bitiriyor.

5. buraya code yaz. → <Link to={ `/products/${ //buraya code yaz }` }>
### `{<Table.Cell><Link to={ `/products/${ //buraya code yaz }` }>{ product.productName }</Link></Table.Cell> }`

6. <Link to={ `/products/${product.id}` }>
### ` {<Table.Cell><Link to={ `/products/${product.id}` }>{ product.productName }</Link></Table.Cell> }`

7. import ekle
### `import { Link } from "react-router-dom"; //using for product Link `

======================================================================
## Detay Sayfasında Değeri Yakalamak → useParams() Bana Parametreleri veriyor(Obje Olarak)
1. ProductDetail'e gittiğim zaman oradaki id yi nasıl okuyacağım. 
2. keywords: useParams()
## useParams()
3. import ekle
## `import { useParams } from 'react-router-dom' //SECTION 12: useParams`,
4. Destructure işlemi yapacağız
destructure yapalım useParams() için → aslında let {id:id} demektir.
5. YILDIZLI NOT: uyarı bu notasyonda iki tarafta aynıysa birini yazman yeterlidir.
    let {id} = useParams()
6. Code Son hali

import React from "react";
import { useParams } from "react-router-dom"; //useParams

export default function ProductDetail() {
  let { id } = useParams();

  return <div>Ürün : {id}</div>;
}
7. Parametreler
Dashboard.jsx'deki Route daki parametrelerdir.
### `<Route path="/products/:id" component={ProductDetail} />`

### Dashboard.jsx'deki ikinci parametre vermek istersek
### `<Route path="/products/:id/category/:id2" component={ProductDetail} />`
### YILDIZLI NOT: 
1. Biz istersek, buradaki iki parametreyi bize obje olarak veriyor. 
2. ProductDetail.jsx'de useParams() bir fonksiyon ve bize bir obje dönderiyor. Biz onu destructure edebiliyoruz. Ordaki id yide okuyoruz.
### Birden fazla parametre göndermek istersek,
### `let { id, categoryId } = useParams();` bu şekilde okuruz.


 
======================================================================
## Çıkış Yap Tıkladığımızda Anasayfaya Gitsin

======================================================================
## Anasayfaya Tıkladığımızda Anasayfaya Gitsin
======================================================================

======================================================================

======================================================================





































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
