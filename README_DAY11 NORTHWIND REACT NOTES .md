DAY11 NORTHWIND REACT NOTES 
======================================================================
[Documantation](https://tr.reactjs.org/)
======================================================================
REACT KURULUM
C PROMPT KURULUM

Microsoft Windows [Version 10.0.19042.985]
(c) Microsoft Corporation. All rights reserved.

C:\Users\User>cd..

C:\Users>cd C:\Repos\reactcamp

C:\Repos\reactcamp>npx create-react-app camp-project


AÇIKLAMA:
camp-project → proje ismi
create-react-app  → proje şablonu oluşturacak
npx → tarafından

=================================================================
Created git commit.

Success! Created camp-project at C:\Repos\reactcamp\camp-project
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd camp-project
  npm start

Happy hacking!

C:\Repos\reactcamp>

===================================================================

====================================================================
1. DİZİNE YERLEŞ
We suggest that you begin by typing:
  cd camp-project
  npm start

C:\Repos\reactcamp>cd camp-project
======================================================================
2. VISUAL STUDIO CODE DA AÇ
code .
ENTER
=======================================================================
##### QUICK MIND MAP
1. REACT KURULUM START:
C:\Users\User>cd..
C:\Users>cd C:\Repos\projectname               -->path adress copy
C:\Repos\reactcamp>npx create-react-app project-folder-name
C:\Repos\reactcamp>cd project-folder-name
C:\Repos\reactcamp>cd project-folder-name code .
Start auto VSCODE

2. Plugin
- npm install semantic-ui-react semantic-ui-css

3. PACKAGE INSTALLATION (PAKET KURULUMU) - Axios

Amaç: Api'lere istekte bulunmamızı sağlayan pakettir. 

- npm install axios

=======================================================================
3. VISUAL STUDIO CODE - KLASÖR YAPISI

s1. node modules : paketlerin olduğu yer
Projemizde kullandığımız, paketlerdir. Bu kodu github a attığımızda bunları eklemez. gitignore da görürüz zaten.
gitignore node.modules gönderilmeyeceğini söylüyor.
Jquery kullanacak isek jquerynin burada olması gerekiyor.

s2. public → dış dünyaya erişim kodları
javascript uygulamaları geliştirerek hayata geçiriyoruz.  nadir gideriz.

s3. src → source react ile ilgili geriye kalan codelar.Biz src uygulama componentler yer alır. Buraya odaklanacağız. srac klasörü içinde uygulamamızı, componentlerimizi, oluşturacağız.  

Tek bir sayfa var. Hepsiburadayı düşün e-ticaret sistemi, 
menü , sepet account bilgisi var. Category ler var. Ürünlerin olduğu kısım var. Hepsiburada sayfasına bakalım. React ile yazıyor olsaydık; mesela bu bir component iç içe bir sürü component olacaktır. Geliştiricinin o anki planlamasıdır.
Componentleri tekrar tekrar kullanabilmek Single Responsibility ye uygu çalışırız.
Tek Sorumluluk prensibini ayağa kaldırmak gibi nedenlerle bu çalışmayı yapıyoruz. Component Mantığı budur. 
Hepsiburadada sayfa yenilendiği için Singleresponsibility kullanmadıklarını gösteriyor.  

s4. Component → tekrar tekrar kullanabilmek amacıyla ve single responsible kuralına uygun. SPA.

 
s5. React Herşey javaScrpitin ta kendisi. Biz aslında javascripot yazdığımız zaman olayın tamamen ekran mantığı kodluyoruz. Ekran kodu içierisinde de ekran mantığını yazıyoruz. React library yeni nesil jquery gibi düşünebiliriz. 

s5. App.js → ana component tir. Bu bir fonksiyondur. Bu fonskiyon direkt olarak RETURN ifadesine sahiptir. Mantık html html görünümlü JSX tir. component mimarisi kuruyoruz. Biz xml syntax ıdır. Buna hizmet edecek App.css miz var. 
App.css → css codeları

s6. App test.js →
Burada Unit test de yazılabiliyor. Youtube yayını var engin hocanın onu izle.
bkz. https://www.youtube.com/watch?v=YmjIZFbuhUU
Unit test nedir? Nasıl çalıştırılır? Sektörde yazılabilirliği oldukça zayıftır. Yazılması gerekmektedir.

s7. index.js → ana component tir. Bizim ana componentimiz. Aslında ilk başlatılacak olan javascript dosyamızdır. Orada hangi üst component ile başlayacağımızı söylüyoruz.

s8. Statemanagement Durum Yönetimi
APP Navigation , Category, CS hiyerarşi vardır. 
En büyük sorun durum yönetimidir. Bir yerde ürün sepete eklersek başka bir yerde anında sepeti göstermen gerekiyor. React dünyasında data taşımak.  

=============================================================================
4. StrictMode Comment Line
path: C:\Repos\reactcamp\camp-project\src\index.js 

<React.StrictMode> Comment Satırına Al
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

UYARI
4.1. Comment satırına aldık sonra sildik- son hali
ReactDOM.render(
  
    <App />, document.getElementById('root')
);

4.2. StrictMode → bazı standartların oluşması için yapılan çalışmadır.
test amaçlı codelarıda hata almamak için kapattık. sadece uygulamaya yönelik hata almak için kapattık.
4.3. Rendera iki parametre gönderiyoruz. Son hali
//code reafactoring
ReactDOM.render(<App />, document.getElementById('root'));
4.4. Bir component gönderiyoruz bir de root 
4.5. YILDIZLI NOT: Aslında bu App Componentini root a yerleştir demektir.
4.6. Root nerden geliyor. 
public>index.html' git
 
========================================================================
5. ROOT: public >index.html 
s1. code
path: C:\Repos\reactcamp\camp-project\public\index.html

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>

s2. WebPack genel kültür araştır.

==========================================================================
6. DOM nedir?
s1. En temel html yapısı diyebiliriz.
s2. Bu noktada root a App yi monte ediyoruz. 
path: C:\Repos\reactcamp\camp-project\src\index.js
s3. Mantık, roota app'nin monte edilmesidir.

==========================================================================
7.  COMPONENT HIYERARŞİSİ ÇİZELİM
s1. APP → Tek Kişilik Dev Kadro. Bunun altında hiçbir component yok şuan.
s2. Uygulamamız App hiyerarşisiyle çalışıyor.
==========================================================================
8. App.js RENDER EDER ORTAYA BİR HTML ÇIKARTIR
src\App.js 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
==========================================================================
9. TERMİNAL AÇ
s1. npm start 
uygulamayı açmak için kullanılır.
Uygulamayı test ortamında çalıştırmaya yarıyor.
==========================================================================
10.http://localhost:3000/
s1. logo + metin + link var.
s2. div + 
path: src\App.js

s3. React Componentleri jsx yazdığımız zaman, bir tane container componente 
ihtiyacımız oluyor. Container html ihtiyacımız oluyor. 
s4. Bütün kodları div in içindedir. 
s5. şuan div i silip başka birşey eklersen sorun yaşarsın. 
s6. Bize container component derse anlayınki onları bir üst compoment e almamız gerekiyor.
s7. div className ="App"  
Bu App isimli bir sitili arıyor.

s8. Zaten burası root componet, onu işleyecek bir App.css imiz var.

==========================================================================
11.App.css Git
s1. App hariç hepsini sil. Sitlileri silince localhost'da çılgın bir görüntü ortaya çıkacaktır. Çünkü sitilleri sildik.

.App {
  text-align: center;
}
//deleted codes
.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

==========================================================================
12.App.js Git
path: src\App.js

s1. Deleted image
<img src={logo} className="App-logo" alt="logo" />
output: browserda image silindi.


==========================================================================
13. #### CREATE FOLDER

##### Create Folder = pages   
1. src --> Right Click > New Folder> FolderName= pages 
Sayfalarımız için 

##### Create Folder = layouts  
2. src --> Right Click > New Folder> FolderName= layouts 


##### Create Folder = services  
3. src --> Right Click > New Folder> FolderName= services 


#### CREATE LAYOUT FILE = Dashboard.jsx
1. layouts--> Right Click > New File> FileName= Dashboard.jsx
src\layouts\Dashboard.jsx
example: AdminDashboard | ProductDashboard|CategoryDashboard gibi isimler verilebilir. 

UYARI: Dashboard'ın D si büyük yazdık.
YILDIZLI NOT: React Component'lerimizi PascalCase yazıyoruz. Çünkü Class gibidir. 

NOT: Neredeyse bütün React projelerinde farklı klasörleme tekniği görürüz. 
Mantığı bil yeterli. Gerisi klasörleme.  

#### CREATE LAYOUT FILE = Navi.jsx
2. layouts--> Right Click > New File> FileName= Navi.jsx
src\layouts\Navi.jsx


#### CREATE LAYOUT FILE = Categories.jsx
3. layouts--> Right Click > New File> FileName= Categories.jsx
src\layouts\Categories.jsx

#### Create LAYOUT FILE = CartSummary.jsx
4. layouts--> Right Click > New File> FileName= CartSummary.jsx
path: src\layouts\CartSummary.jsx


#### Create SERVICES FILE = productService.js
4. services--> Right Click > New File> FileName= productService.js
path: src\services\productService.js
YILDIZLI NOT: Visual Studioa Code'da Standart javascript code u olduğu için productService şeklinde p küçük yazdık. Aynı zamanda .js uzantısını da eklemeyi unutmadık.
JavaScript, code dosya isimlendirmelerinde; küçük yazıyoruz.


==========================================================================
14. #### PLUGIN PLUG

1. Eklenti Kurmak
s1. Auto Import 1.5.4
s2. Auto Rename Tag 0.1.6.
s3. Bracket Pair Colorizer
s4. ES7 React/Redux/GraphQL/React-Native snippets dsznajder(çok önemli)
s5. ESLint(Şimdilik pasif)
s6. JavaScript Debugger (Nightly)
s7. Material Icon Theme

==========================================================================
15. #### BUILD YOUR OWN COMPONENTS(Kendi Component'imizi Oluşturmak

##### React Functional Component (rfc snippet)
```
snippet: rfc 

import React from 'react'

export default function Dashboard() {
    return (
        <div>
            
        </div>
    )
}

```

- İsmi Dashboard() bu aslında yeni CSX tagı anlamına da geliyor.
 


##### USING: Calling the Dashboard from within the Application (Dashboard'ı App içinde Çağırmak)

1. src-->App.js Git.
2. <Dash yazdığımızda Path intelisence ile görür.
3. İmport otomatik eklenecektir.
import Dashboard from './layouts/Dashboard'; 
4.  Dashboard yaz kapat tagi. 
<Dashboard/>
Düzgün görünüm için <Dashboard/> bunu kullanabilirsin.
5. UYARI: Failed to Compiled olduğu zaman o zaman Dashboard'ı import etmemişsin demektir.
1) Silip bir daha yazma! Ctrl+Space ile yeniden import et!
2) Kaydetmemiş de olabilirsin! Ctrl + S ile kaydet. Solda akydedilmemiş sayısını görebilirsin! 
3) Asla File>auto save i seçme!

##### Hiyerşimize Ek Yapalım.
1. "App ile başlamak zorundasın!" Üst Component ile başlamak zorundayız.
2.  App altında bir Component ekledik. Bu Component'in adı = Dashboard
Biz bunu dallandıracağız. Ancak bir tane ile başlıyoruz.
3. Component Mimarimiz; 
En üstte App, Solda Dashboard, Onun Altında Category, hemen yabında Navigation,
Orta kısım şimdilik Product daha sonra Root ile değiştireceğiz. react rooter a gideceğiz. Bu şekilde dallandıracağız. Sepet ve Sepet Özeti şeklinde dallandıracağız. Bir tane de CURUD operasyonu yapacağız. Orada da çok güzel bir ürünle çalışacağız. 

==========================================================================
16. #### PACKAGE INTRODUCTION DEFINITION

##### SEMANTIC UI REACT DEFINITION  
1. Bir kaç kurumda semantic ui kullanılıyor. Alternatifleri de var.  
2. Package [Semantic UI React](https://react.semantic-ui.com/)
tool gibidir. 
s1. Çok güzel compomentleri de var. Tool gibi düşünebiliriz.
s2. Example. Button. Button un çok güzel alternatifleri var.  
s3. Try it → Codeları görebiliriz.
s4. İhtiyaç oldukça ekran güzelleştirmek için buradan componentleri alacağız. 
s5. Görselliği artırmak için oluşturacağımız componentlerdir.
bkz. [Try it Button](https://react.semantic-ui.com/elements/button/#types-labeled-shorthand)
bkz. [Try Form Bileşenleri]()
bkz. [Try it Menu]()
bkz. [Try it Table]()
bkz. [Form Try it!]()
 

3. Alternatif [material ui react](https://material-ui.com/)
   
4. Telerik ücretli sektörde kullanılıyor data grid yönünden zengin olduğu için kullanılabililiyor... [Modern UI Made Easy](https://www.telerik.com/)

5. Devexpress ücretli... [Your next great app starts here](https://www.devexpress.com/)

6. JavaScript UI Component[JavaScript Component](https://js.devexpress.com/)
==========================================================================
#### PACKAGE INSTALLATION (PAKET KURULUMU) - Semantic UI
Web page...[Semantic UI React](https://react.semantic-ui.com/)

##### Get Started...
[semantic ui get started...](https://react.semantic-ui.com/usage)

- İki adet ürünleri var.-react ve -css
```
$  yarn add semantic-ui-react semantic-ui-css
## Or NPM
$  npm install semantic-ui-react semantic-ui-css

```

- Biz npm install kullanıyoruz.

##### Semantic UI Installing...
1.  COPY CODE: `npm install semantic-ui-react semantic-ui-css ` 

2. Terminal'de yeni bir cmd (+) ile yayın ortamını haricinde bir komut satırı açalım.

3. Copy Code Mause sağ click ile PASTE + ENTER ilr kurulumu başlatalım.

4. Komut Satırı
Microsoft Windows [Version 10.0.19042.985]
(c) Microsoft Corporation. All rights reserved.

C:\Repos\reactcamp\camp-project>npm install semantic-ui-react semantic-ui-css
(ENTER)


##### USING: Semantic UI Button Example...

1. STEP-1: Div içindeki button u copy code
[button](https://react.semantic-ui.com/elements/button/#types-labeled-basic)

2. STEP-2: otomatik import edilecektir.
`import { Button, Icon, Label } from 'semantic-ui-react' `
Aslında hangi bileşeni kullanırsan aslında onlar senin için Component tir.
Burada Button Component, Icon Component, Label Component gibi.

3. VS Code Proje>Dashboard'a gel.
Biz Ana Sayfa yerine bu copy code(button) u yapıştır.
path: src\layouts\Dashboard.js
paste edelim.

4. Sağ Tıkla Format Document diyelim.


5. VSCode çalıştırdığımızda hata mesajı
"Failled to compile" hatası alacağız.
Bu hatanın sebebi Button, Icon, Label importlarının
yapılmamış olmasıdır.Demekki bizim o bileşenleri import etmemiz gerekiyor.

6. import işleminin ardından sorun düzelecektir.
import { Button, Icon, Label } from 'semantic-ui-react'

7: App.js Git
Engin Demiroğ​ →App.js IMPORT:  import 'semantic-ui-css/semantic.min.css'
Minify Etmek: Bunların boyunu küçültmek için kodlarıdaki boşlukları yanyana 
getiriyorlar. Dosyanın boyutunu küçültmek demektir.

##### WARNING: Yeni paket eklediğinde Uygulamayı durdur/yeniden başlat...
1. Node > Ctrl + C 
Terminate batch job (Y/N)? y

2. C:\Repos\reactcamp\camp-project>npm start
3. Result
> camp-project@0.1.0 start C:\Repos\reactcamp\camp-project
> react-scripts start
Compiled successfully!

You can now view camp-project in the browser.

  Local:            http://localhost:3000    
  On Your Network:  http://192.168.1.21:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
-----------------------------------------------------------------
=================================================================
##### İHTİYACA GÖRE PLAN YAPMAK... 
 s1. App.js üst Componentimize 
import 'semantic-ui-css/semantic.min.css'
eklediğimizde; alt Componentlerde etkileneceklerdir.
s2. App.js'ye eklediğimizde Dashboard Component'de de artık bunu kullanabilirim.
s3. Index.js'ye de yazabiliriz ancak; neden yazmadık? Kurumlardan alışkın olduğumuz 
bir harekettir. Çünkü hepsiburada ön tarafta ASP.NET kullanıyorken yönetim tarafında
bambaşka bir uygulama kullanıyor olabilir. Yada bir şablon kullanıyor olabilir.
Genellikle Yönetim ekranları için hazır templetelar vardır herkes onları kullanır.
Onların kendilerine ait css leri vardır. Birbirinden etkilenmesin diye biz ana App 
uygulamamızda kullanacağız. 
Dolayısıyla biz import 'semantic-ui-css/semantic.min.css' bu kodu nekadar aşağıya çekersek
o ve onun altındakileri etkiler. Bu tamamen senin ihtiyacına göre planlaman gerekmektedir.

NOT: Dashboard'dan button örneğini sildik. Açıklamalardan bakabilirsin.
Semantic-ui Minify versiyonu App.js'de import etmiş olduk.

==========================================================================
#### PACKAGE INSTALLATION (PAKET KURULUMU) - Axios

Amaç: Api'lere istekte bulunmamızı sağlayan pakettir. Kendisi Xml http request tir. JavaScript kütüphanesini kullanıyor. Onun üst implementasyonudur aslında. `Fetch API` gibidir. React performanslıdır. 
 
1. React in kendi içinde http requestler yapan alt kütüphanesi yoktur. Angular gibi. Bizde JavaScript'de popüler olan axios kütüphanesini  kullanacağız.

- `npm install axios`


==================================================================
#### Layout And Pages
1. Bizim sayfanın top and lef kısmı layout olarak yerleşecektir. Sağ alt köşeden yukarıya doğru (layout'a kadar) pages olacaktır. Dolayısıyla değişen kısm pages olacaktır. layout sabit kalır. Biz o yüzden navi.js oluşturduk.

##### Create Layout File = Navi.jsx
2. layouts--> Right Click > New File> FileName= Navi.jsx
path: src\layouts\Navi.jsx


##### Create Layout File = Categories.jsx
3. layouts--> Right Click > New File> FileName= Categories.jsx
path: src\layouts\Categories.jsx
 

##### Create Layout File = CartSummary.jsx
4. layouts--> Right Click > New File> FileName= CartSummary.jsx
path: src\layouts\CartSummary.jsx

###### Önemli Not: JS OR JSX UZANTISI FARKI
F2 yada File>Right Click>Rename>CartSummary.js yerine CartSummary.jsx yazabiliriz.

Bunlar jsx dosyalarıdır. js uzantısı yerine jsx yazsak da olur. Anlamı: React code yazıyorum demektir.
src\layouts\CartSummary.jsx

Sonuç olarak js yada jsx uzantısı arasında bir fark yoktur.
Biz tümünü jsx'e çevirelim.


##### Create Pages File = ProductList.jsx
4. pages--> Right Click > New File> FileName= ProductList.jsx
path: src\pages\ProductList.jsx
src\pages\ProductList.jsx

NOT: sabit değişmeyek olanları layout mu yapıyoruz.
product list in oldugu kısım routelar ile dinamik şekilde hep değişicek.
==========================================================================
##### rfc Snippet Code yazmak

###### CartSummary.jsx - Default rfc Snippet Code
1. step-1. rfc yaz snippet ile otomatik code gelecektir.

``` Snippet keyword: rfc
import React from 'react'

export default function CartSummary() {
    return (
        <div>
            
        </div>
    )
}
```
2. Sepet Özeti
```
import React from 'react'

export default function CartSummary() {
    return (
        <div>
            Sepet özeti
        </div>
    )
}
``` 
###### Aynı işlemi Categories.jsx → Kategoriler| Dashboard.jsx → Ana sayfa Navi.jsx → Navi | ProductList.jsx → Ürünler yazalım.

###### Ne yaptık?
Uygulamamız(Api) var onun içinde Dashboard(Anasayfa) Sonra navi
Sonra Categoriler Sonra Ürünler koyacağız. Son olarak sepet özeti var.
App içine → Dashboard
Dashboard içine → Navi
Navinin içine → Sepet
Categoriler ve Ürünleri koyacağız.

==========================================================================
##### Dashboard.jsx - Hiyerşimize Uygun Layoutları Yaz

1. Dashboard'ın içinde en üstte Navi var.
2. Onun içinde CartSummary
3. Categories ve ProductList var.
Biz bu hiyerarşiye uygun bir şekilde Dashboard.jsx  etiketlerimizi yazacağız.
UYARI: Dashboard:  Ana sayfamızıdır.
4. <Navi/> için <Navi Yaz + ENTER Otomatik import gelecektir.
Enter ile eklemezsen importları elle yazman gerekiyor.
5. Sonrasında react rooter ile değiştireceğiz. 
6. Code olgunlaştıkça Ctrl+S bas. Bunu alışkanlık haline getir.

7. Code Son Hali...
```
//rfc snippet code | Dashboard:  Ana sayfa
import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi"; //auto import for <Navi/> with enter


export default function Dashboard() {
  return (
    <div>
      <Navi/> 
      <Categories/>
      <ProductList/>
      </div>
  );
}
```

==========================================================================
##### Navi.jsx - Hiyerşimize Uygun Layoutları Yaz

1. Navi nin içinde CartSummary var.
2. Code Son Hali...
```
//rfc snippet code
import React from 'react'
import CartSummary from './CartSummary'

export default function Navi() {
    return (
        <div>
            <CartSummary/>
        </div>
    )
}
```
###### Uygulamayı Yayına Al : Failed to Compiled - Solution : Yeniden Başlat
1. ÇÖZÜM: Uygulamayı yayına al.Failed to Compiled hatası için Dashboard'ı bulamıyor. Aynı klasörde olmasına rağmen bulamaması sorunu için. Uygulamayı durdur CTRL + C (y/N?) → y ile yeniden yayına al. Hata gidecektir.

2. jsx uzantısı yaptığımız için hata aldık. Daha önce js uzantısı ile import oldu. Uzantı değişince mutlaka uygulamayı yeniden başlatmalısın!


==========================================================================
#### Create Semantic-ui Menu - Try it → Menu 

[semantic-ui](https://react.semantic-ui.com/collections/menu/#variations-size-mini)

1. search=menu gelen sonuç Menu bileşenine Enter diyelim. Yada Collections>menu altındaki dizine gidebilirsin. Size'a git.

2. Try it--> return içini menuyu copy-code. Bize bir menü versin.
3. 1. Ctrl + F = Size ara ve hızlıca git.

#####  Navi.jsx'e Git 
1. <CartSummary/> iptal ettik.
2. Paste Menu
3. <CartSummary/> iptal ettik.
4. import CartSummary from './CartSummary' i de iptal et.
5. CODE : return içinde div etiketi içine import et!
6. FORMAT DOCUMENT : Codelar düzelsin...
7. Mevcut state react Codelarını Sildik Çünkü önce mantığını öğreneceğiz.
        active={activeItem === "home"}
        onClick={this.handleItemClick}
8. Bu state codelarını silmezsek çalışmayacaktı. Mantığnı öğrenip ekleyeceğiz.
9. Code Son Hali

```
 //rfc snippet code
// return Semantic ui -menu bileşeni ekle
import React from "react";
import { Button, Dropdown, Menu } from 'semantic-ui-react' //for failed to compile error...

export default function Navi() {
  return (
    <div>
      <Menu size="mini">
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
```
==========================================================================
#### Create Semantic-ui Inverted - Try it → Inverted
[menu inverted example](https://react.semantic-ui.com/collections/menu/#variations-inverted)
1. Ctrl + F = Inverted ara ve hızlıca git.
2. Navi.jsx'e git
3. inverted keywordu ekle.
Inverted: siyah bir şerit içinde navigation gelecektir.
4. return içinde Menu'den sonra inverted ekle.
```
return (
    <div>
      <Menu inverted size="mini">
	  ...
	  ...
	  )
size="mini" --deleted code
bu sayede normal boyutta gelecektir.  
```
6. Code Son hali.
```
//rfc snippet code - rfc = reactFunctionalComponent
// return Semantic ui -menu bileşeni ekle
import React from "react";
import { Button, Dropdown, Menu } from 'semantic-ui-react' //for failed to compile error...

export default function Navi() {
  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
```

==========================================================================
#### Create Semantic-ui Fixed Menu(Fixed Bar)- Try it → Fixed
[menu fixed example](https://react.semantic-ui.com/collections/menu/#variations-fixed)
Fixed: Menu yukarıdan aşağı insin ancak menu yukarıda sabit kalsın demektir.
UYARI: Semantic-ui da codelar hatalı çalıştığı için menu tagi içine 
fixed yazınca çalıştı. Aynı şekilde inverted yazınca da çalışmıştı.
Fixed: Menu yukarıdan aşağı insin ancak menu yukarıda sabit kalsın demektir.
Eklenen Code: 
``` 
return (
    <div>
	<Menu inverted fixed> 
	...
	...
```
-------------------------------------------------------------------
```
Code Son Hali
//rfc snippet code - rfc = reactFunctionalComponent
// return Semantic ui -menu bileşeni ekle
import React from "react";
import { Button, Dropdown, Menu } from 'semantic-ui-react' //for failed to compile error...

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
```


==========================================================================
#### Create Semantic-ui Container - Try it → Container
1. Sol tarafa category leri ekleyeceğiz. Burada bir Container arayacağız. Bu haliyle çok saçma duruyor. yayılmış duruyor. Aşırı derecede sağa sola yaslanmış duruyor. 

2. Tüm menüyü değil çünkü menüyü de küçültür. Biz yazıları içeri almak istiyoruz.
Menünün içine Container tagi ekleyeceğiz. Menünün kendisi değil, menünün elemanlarını ekleyeceğiz. 
Menu.Item → içerdeki elemanlar demektir.
Menu.Menu → Menu içine alt menü eklemek istersek kullaabiliriz.

3. Sayfamızı sınırlamış olduk...
4. USING-1...
```
 return (
    <div>
      <Menu inverted fixed>
	  ...
	  ...//buraya eklenecek <Container></Container>
	  ...
      </Menu>
    </div>	  
```
5.USING-2...
```  
return (
    <div>
      <Menu inverted fixed>
        <Container>
		.... 
		....//Menu Item - menü içindekiler Container içine gelecek!
		....
		 </Container>

``` 
6. Code Son Hali...
``` 
//rfc snippet code - rfc = reactFunctionalComponent
// return Semantic ui -menu bileşeni ekle
// <Menu inverted> and  <Menu inverted fixed>
// <Container> POINT→ Menu içindekiler gelecek! </Container>
//Uyarı: Container eklerken de diğerlerinde oldğu gibi semantic-ui dan import etmek şarttır.
import React from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react"; //for failed to compile error...

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
``` 


==========================================================================
#### Changed Code:fixed="top" ekledik 
CHANGED CODE: fixed="top" ekledik
<Menu inverted fixed="top">
==========================================================================
#### Başka Bir Component Yapmak... (Menu İçinde Menu'de Dropdown Sepet Oluşturmak)...

##### STEP1: Navi.jsx-->Menu.Menu--><CartSummary /> Eklemek Dropdown kısmını CartSummary.jsx adlı Component'e taşıyacağız.
1. <Menu.Menu position="right"> içindeki Dropdown menuyu kestik.
2. CartSummary.jsx'e paste et!
3. Navi.jsx'de Dropdown 'ı taşıdığımız için, importunu da silmemiz gerekmektedir.
4. `deleted  Dropdown import: import { Button, Container, Dropdown, Menu } from "semantic-ui-react";  //for failed to compile error...`
5. `code son hali: import { Button, Container, Menu } from "semantic-ui-react";  //for failed to compile error...`
6.  Kullanmadığın import warning olarak çıkar. Kullanılmayan importu sil! 
 
- Navi.jsx Code Son Hali...
 ```Navi.jsx Code Son Hali...
import React from "react";
import { Button, Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
```
 ================================================================
Navi.jsx NOTES...
//step1: rfc snippet code - rfc = reactFunctionalComponent
//step2: return Semantic ui -menu bileşeni ekle
//step3:  <Menu inverted> and  <Menu inverted fixed>
//step4: <Container> POINT→ Menu içindekiler gelecek! </Container>
//step5: Uyarı: Container eklerken de diğerlerinde oldğu gibi semantic-ui dan import etmek şarttır.
//step6: Menu.Item → içerdeki elemanlar demektir.
//step7: Menu.Menu → Menu içine alt menü eklemek istersek kullanabiliriz.
//step8: CHANGED CODE: fixed="top" ekledik → <Menu inverted fixed="top">
//step9: <Menu.Menu position="right"> içindeki Dropdown menuyu kestik.
//step10: CartSummary.jsx'e paste et!
// step11: Navi.jsx'de Dropdown 'ı taşıdığımız için, importunu da silmemiz gerekmektedir.
//deleted  Dropdown import: import { Button, Container, Dropdown, Menu } from "semantic-ui-react";  //for failed to compile error...
// code son hali: import { Button, Container, Menu } from "semantic-ui-react";  //for failed to compile error...
//step12. Kullanmadığın import warning olarak çıkar. Kullanılmayan importu sil!
===================================================================


##### STEP2: CartSummary.jsx-->Menu.Menu--> Dropdown kısmını CartSummary.jsx adlı Component'imizee taşıyacağız.
1. rfc snippet code
2. import ekle! : import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...

- CartSummary.jsx Son Hali
```
import React from "react";
import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Language">
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
```
			
			

==========================================================================
#### Create Semantic-ui Categories - Try it → Categories on the Left

1. Sol tarafta categoriler gelecek! categoriler için de menüler
https://react.semantic-ui.com/collections/menu/
- search= menu
- Vertical Menu 'yü sepette kullanabiliriz.
[semantic-ui- for category menu](https://react.semantic-ui.com/collections/menu/#types-vertical-pointing)

CODE-2: Semantic-ui - Categories on the Left
1. Sol tarafta categoriler gelecek! categoriler için de menüler
https://react.semantic-ui.com/collections/menu/
- search= menu
- Vertical Menu 'yü sepette kullanabiliriz.
[semantic-ui- for category menu](https://react.semantic-ui.com/collections/menu/#types-vertical-pointing)
2. Page>Right Click>Format Document
3. importları yap.
import { Menu } from 'semantic-ui-react' //added semantic-ui import
4. state ve event code'larını silelim. Çünkü Failed to Compiled hatası için.
...................................................................
```
//PASTE CODE
//rfc snippet code
import React from 'react'
import { Menu } from 'semantic-ui-react' //added semantic-ui import

export default function Categories() {
    return (
        <div>
                  <Menu pointing vertical>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
        </div>
    )
}
```
...................................................................
5. state ve event code'larını silelim. Çünkü Failed to Compiled hatası için.
```
deleted code
active={activeItem === "friends"}
onClick={this.handleItemClick}
```
6. CODE SON HALİ:
```
//rfc snippet code
import React from "react";
import { Menu, Container } from "semantic-ui-react"; //added semantic-ui import

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
```
==========================================================================
#### Create Semantic-ui Table - Try it → Table - Bringing Categories and Product List together
AMAÇ: CSS - Categories ile ProductList i yanyana getirmek
1. Table Eklemek
[Semantic ui- table](https://react.semantic-ui.com/collections/table/#types-pagination)


1.  div içine table (semantic-ui) code unu copy - paste edelim.
..................................................................................
export default function ProductList() {
    return (
        <div>
        ....
        .... Buraya eklenecek table code
        </div>
    )
}
...............................................................................  
2. import eklemek → failed to compiled hatası için
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
3. Page-->Right Click-->Format Document
4. Code son Hali
```
//rfc snippet code
import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default function ProductList() {
    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table> 
        </div>
    )
}
```

===============================================================================
#### Categories And ProductList yanyana getirmek...(GIRID SISTEMİ)
##### Sorun: Burada bir sorunumuz var. Categories ve ürünler alt alta geliyor. Oysa biz yanyana getirmek istiyoruz.
1. Boostrapp bir satırı; 12 eşit parçaya bölüyor mantıken. Biz categoires 3br Products için 9br deriz. Ancak SemanticUI 16 eşit parçala bölüyor. biz 4br + 12br verirsek. Bu kısacası grid sistemidir. 

###### İLK SORU? Semantic-ui Grid Sistemi kaç Parçaya Böler?
İlk bu sorunun cevabını bulmamız gerekiyor.
cvp: 16br

###### GIRID SİSTEMİ 
4b + 12br = 16br bunu da bir grid içine alsak. Olay çözülecektir.
Buna GIRID SİSTEMİ denilmektedir.

###### USING GIRID 
- [semantic-ui using grid](https://react.semantic-ui.com/collections/grid/)

searc=grid

###### DOCUMANTATION
- [Semantic-ui documantation](https://semantic-ui.com/collections/grid.html)

========================================================================
#### Create Folder = services  
1. src --> Right Click > New Folder> FolderName= services 


#### Create SERVICES FILE = productService.js
4. services--> Right Click > New File> FileName= productService.js
path: src\services\productService.js
YILDIZLI NOT: Visual Studioa Code'da Standart javascript code u olduğu için productService şeklinde p küçük yazdık. Aynı zamanda .js uzantısını da eklemeyi unutmadık.
JavaScript, code dosya isimlendirmelerinde; küçük yazıyoruz.

=========================================================================
#### Restfull Service Request Atmak - Ürünleri getiren adresi servis etmek
CODE 1: Restfull Service Request Atmak - Ürünleri getiren adresi servis etmek
ANALİZ :
1. export class yazarak default keywordu ekledik. → export default class ProductService{}
2. axios import ekle → import axios from "axios";
3. getProducts(){ } methodu yaz.
4. return edeceğiz.
5. axios.get("") → tırnak içinde servis adresini yazacağız.
Api mizin adresini yazacağız. Ürünleri getiren servis adresini yazacağız. 
6. Eclipse projeni başlat. Eclipse-->NorthwindApplication--> Run as Java Application diyelim.
7. SWAGGER: http://localhost:8080/swagger-ui.html açalım.
8. CALLING: api/products/getall ı çağıacağız.  
9. Try Out dediğimizde EndPoint gelir.
10. COPY Swagger Products getAll ADRES→ http://localhost:8080/api/products/getAll
11. PASTE return axios.get("X") Swagger Products getAll ADRES→ http://localhost:8080/api/products/getAll
12. Amaç; Restfull Service Request Atmak, Bu adrese bir istekde bulunacağız.
13. Product List Component imizin içinde kullanacağız.
14. Biz react'de arayüzü sadece tsarlıyoruz. 
15. Şimdi hooklara başlayacağız.
16. Backend i olmayanlar JsonPlaceHolder kullanabilir. İsimlendirmeleri ona göre 
yapılandırmak gerekmektedir.
17. Bize döndürülen → obje + success + message + data bilgisi dönüyor.
Bizim ilgi alanımız şuan data.
18. ProductList'e gidelim.  
....................................................................... 
```
Code Son Hali:
import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getAll")
    }
}
```
.......................................................................
========================================================================
#### ProductList.jxs Settings
1. ProductList.jsx bu sayfamız bir data tutacak. O data nedir? Örneğin ürünler.
2. Bu bizim için state datası olur. O sayfadaki data diyebiliriz. Bunun için modern React'da kullanılan Hook tekniğini kullanabiliriz.
   
========================================================================
##### CODE: ANALİZ Data Tutmak(Code-4-5-6)
1. Bu sayfa bir data tutacak. ex. ürünler → bu sayfanın state datası anlamındadır.
2. Modern React Hook tekniğini kullanacağız.
3. useState yaz snippet ile otomatik gelsin. → const [state, setstate] = useState(initialState)
4. import React, { useState } from "react"; //useState snippet with has been added
5. initialState→ bunlar bizim ürünlerimiz olacak!
6. useState ekleyelim. → const [state, setstate] = useState(initialState)
7. import eklenmiş mi kontrol et → import React, { useState } from "react"; //useState snippet with has been added
8. state → state denilen products tır.
9.  const [products, setProducts] = useState(initialState) → bu iki köşeli parantez ve parantez içini biz vereceğiz.
10. Changed Code 
state → products
setstate → setProducts
initialState → [] //boş array gönder- default değer
11. YILDIZLI NOT: BU KONUYU ÇOK İYİ ANLAYACAKSIN!
useState([]) → bu bir fonskiyondur. içinde bomboş bir array var. FOnksiyon- Default değeri boş bir arraydir.
olduğunu nerden anlıyorum parantez içinde olduğu için.
Demekki useState bize bir nesne döndürüyor. Onu da destructure edeceğiz.
Döndürdüğün yapıda bir data döndürüyor. Bir de fonksiyon dönüyor. 
Data olduğunu products diye bir data yazmımında anlıyorum. 

ANLAMI: "Benim products diye bir datam var. Onu kullanıcam ve defaul değeri boş bir arraydir.""
setProducts'ı değiştirmek için de products'ı kullanıyorum.

Example. Bu sayaç uygulaması olsa counter, setCounter(buda fonksiyonudur)
const [conuter, setCounter] = useState([])

12. BUNLAR NE İŞE YARIYOR BİLGİSİ?
React Hooktur. Hook nerden geliyor. Lifecycle hook. 
Yani react ın yaşam döngüsüne müdahale etmemize yarıyor bu yapı.

13. EVRAKA!
useState(initialState) → initial başlangıç demektir. Başlangıç değeri boş array verdik!
Başlangıç durumu yani elimizdeki datanın başlangıç durumu boş arraydir.

14. Biz şuan fonksiyonun içindeyiz destructure edince table içinde kullanıırm.
Bu noktada React bize nasıl avantajlar sağlıyor ona bakıyoruz.

15. REACT'IN SAĞLADIĞI AVANTAJLAR:
Biz örneğin hepsiburada.com' uz. Kaçtane ürün geldiğini nereden bileceğiz. 
Kimi zaman 100 tane kimi zaman 1000 tane gelecektir.
Dolayısıyla bana gelen ürünler kadar row oluşturmam lazımdır.
Bizim örneğimizde ise örnek olsun diye alt alta 3 adet row eklemiş.

16. STEP: <Table.Body> içindeki ilk  <Table.Row> u silelim. Nedeni de
 <Label ribbon>First</Label> içinde ribon kullanmış ona gerek yok.
İkinciyi de sil şuan tabloda bir adet  <Table.Row> kalsın. 

========================================================================
#####  CODE: EXAMPLE :ProductList Header lari SwagerUI ProductsGetAll Columlara Göre Değiştirmek...
1.ProductList Header lari SwagerUI ProductsGetAll Columlara Göre Değiştirmek...
SwaggerUI- ResponseBody açalım. Hangi headerlar var bakalım. Not alalım ve değiştirelim.
<Table.HeaderCell>Header</Table.HeaderCell>
s1. Response Body Header Group→ id |productName | unitPrice | unitsInStock | quantityPerUnit | categoryName

2. SwaggerUI - http://localhost:8080/swagger-ui.html adresinden bir adet ürün örneği alalım ve bunu columlarına göre headerlarımızı ayarlayalım.
{
  "success": true,
  "message": "Data listelendi",
  "data": [
    {
      "id": 1,
      "productName": "Chai",
      "unitPrice": 18,
      "unitsInStock": 39,
      "quantityPerUnit": "10 boxes x 30 bags",
      "category": {
        "categoryId": 1,
        "categoryNameString": "Beverages"
      }
    },
    }
  ]
} 

3. 5 satır 5 Sütün ekleyelim. products'dan data gelecek!
4. YILDIZLI NOT: Table.Row gelen ürün sayısı kadar tekrar eder. Rowları tekrar edeceğiz.
Bu table.row kaç kez tekrar etmem gerekiyor? Gelen ürün sayısı kadar tekrar etmem gerekiyor.
5. ROW TEKRAR EDECEK: YILDIZLI NOT: Table.Row gelen ürün sayısı kadar tekrar eder. Rowları tekrar edeceğiz.
<Table.Body> içindeki <Table.Row> tekrar edecektir.
6. JAVASCRIPT CODU YAZ <Table.Row> dan önce...
javaScript Code yazmak için Süslü Parantez yaz {} 
Biz burada ne kullandık? Arrayi tekrar edip Row üretmek istiyoruz.
Elimizde products var. Destruct ettiğimiz için ona ulaşabiliyoruz.
7. SIFIR ELEMANLI TABLE-ROW OLUŞTURMAK İÇİN JAVASCRIPT CODU YAZ <Table.Row> dan önce...
    s1: table-row tekrarı için javaScript Code Yaz→ {}
    s2: TODO: productları map et ve jsx üret...
    s3: Table-Row tekrar edeceği için buraya taşı!
    s4: Code Son hali.
    s5. http://localhost:3000/ → içinde hiç elemanı olmayan bir listemiz gelecektir.

========================================================================
........................................................................
##### CODE: destructure  ve import yaz

//rfc snippet code
import React, { useState } from "react"; //useState snippet with has been added
import { Icon, Label, Menu, Table } from "semantic-ui-react";

export default function ProductList() {
  //destructure...
  const [products, setProducts] = useState([]);

...............................................................................
========================================================================

#####  CODE: Table Celled Header settings: SwaggerUI - http://localhost:8080/swagger-ui.html adresinden bir adet ürün örneği alalım 
//ve celled-headerlara göre column bilgisi alalım.  
return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

...............................................................................
=========================================================================

#####  CODE: Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {}
sıfır elemanlı table-row javaScript code
        <Table.Body>
          {
            //Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {}
            products.map((product) => (
              //step2: TODO: productları map et ve jsx üret...
              //step3: Table-Row tekrar edeceği için buraya taşı!
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
........................................................................
##### SUMMARY - componentDidMount Event
1. React, Angular, Vue'da da böyle. Aslında burada ilk önce HTML sayfaya yerleşiyor. React'da ClassComponent'leri biliyorsan componentDidMount isimli bir event var. 
#### MANTIK- YILDIZLI NOT: - React'da ClassComponent-componentDidMount
1. Hook kullandığımız için ve şuanda fonksiyon Component içinde olduğumuz için `ClassComponent componentDidMount` u kullanamıyoruz. 

Sayfa yerleşti. Şimdi satate değiştir. Mantık budur. Sen bu state i değiştirdiğin anda, bu sayfaya müdahale ettiğin anda bu sayfa yeniden render edilecektir. 

##### COMPONENTİ RENDER ETMEK
1. Sayfayı render ettiğimiz anda ProductList.jsx içindeki return>div> <Tablecelled> yeniden çalışacaktır. Ex. Angular'da Sepete Eklediğimizde Sepet değişiyordu. Çünkü datayı değiştirdik. 

2. Aynı şekilde buradada sen setProducts'ı değiştirdiğin anda syfa yeniden render ediliyor bu component için.  

3. Bunun için ReactHook'larla bunu çok basitleştirdi.   

##### USEEFFECT METHODU - SOLUTIONS 
AMAÇ: useEffect function Yazmak
1. useEffect function...
useEffect()
2. İçeriye bir fonksiyon geçelim.
 useEffect(()=>)
3. Kısacası Component yüklendiğinde yapılmasını istediğin code u, 
bu blok içine yazıyoruz. 
Sayfa yüklendiğinde yapılacakları yaz...
useEffect(()=>{
  ...
  ... Component yüklendiğinde yapılmasını istediğin code yazılır...
 }) 
 
4.   destructure içindeki products ı set etmemiz gerekiyor. Dolayısıyla setProducts'ı çağırmamız lazım.

  useEffect(() => {
    //...component yüklendiğinde yapılacakları yaz...(same=angular.load)
    let productService = new ProductService()
    //destructure içindeki products ı set etmemiz gerekiyor. Dolayısıyla setProducts'ı çağırmamız lazım.

  })
  

5. component yüklendiğinde yapılacakları yaz...(same=angular.load)
6. let productService new leyelim.
7. destructure içindeki products ı set etmemiz gerekiyor. Dolayısıyla setProducts'ı çağırmamız lazım.
8. productService'deki getProducts()'ı çalıştır. 
9. Promise diye bir yapı döndürüyor. 
- s1. then()→ Başarılı olursa
- s2. catch()→ başarısız olursa
- catch() eklemedik→ exception farklı bir şekilde çözeceğimiz için bu şekilde kalsın!
10. productService getProducts başarılı olursa...
11. gelecek sonuç için, setProducts çağırarak set edebiliyoruz.
12. parametre olarak aldığını destructure içindeki→ products 'a eşitliyor.
13. axios data döndürdüğü için çift data yazdık. 
14. axios result'da data dışında başka şeyler de döndürür.axios onu data diye veriyor. Dolayısıyla result.data→ dediğimiz http://localhost:8080/swagger-ui.html deki Response Body'nin tamamı oluyor. 
15. Swagger Data Tamamı...

```
{
   "success": true,
   "message": "Data listelendi",
   "data": [
bunları da içeriyor. Biz de o yüzden onun datasını yazıyoruz.
``` 
16. Clean Code Son Hali
........................................................................
``` Code Son Hali
  useEffect(() => {
    //...component yüklendiğinde yapılacakları yaz...(same=angular.load)
    let productService = new ProductService()
	
    //productService getProducts başarılı olursa...
    productService.getProducts().then( result => setProducts(result.data.data))

  })
  
```
........................................................................ 
17. Step By Step Code Son Hali
```Step By Step Code Son Hali
  //useEffect function...
  useEffect(() => {
    //...component yüklendiğinde yapılacakları yaz...(same=angular.load)
    let productService = new ProductService()
    //productService getProducts başarılı olursa...
    //gelecek sonuç için, setProducts çağırarak set edebiliyoruz.
    //parametre olarak aldığını destructure içindeki→ products 'a eşitliyor.
    //axios data döndürdüğü için çift data yazdık.  
    // axios result'da data dışında başka şeyler de döndürür.axios onu data diye veriyor.
    //Dolayısıyla result.data dediğimiz http://localhost:8080/swagger-ui.html
    // deki Response Body'nin tamamı oluyor. 
    // {
    //   "success": true,
    //   "message": "Data listelendi",
    //   "data": [
    // bunları da içeriyor. Biz de o yüzden onun datasını yazıyoruz. 


    productService.getProducts().then( result => setProducts(result.data.data))

  })
```
.........................................................................
18. code tüm liyfecyle çözülüyor bu code ile...
``` 
//useEffect snippet method - karışıklık olmasın diye manuel yazacağız.
  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
```
.........................................................................
19.MANUEL WRITING FUNCTION:

```
//useEffect function...
  useEffect()
```
........................................................................
#### SUMMARY: 
1. Soru? neden destructure'daki products ı set etmedik?
###### Immutability in React
1. Immutability in React diye bir olay var. referansın değişmesi ve ona göre sayfanın yeniden render edilmesi olayı var.
###### Artık datamızın gelmesi gerekir...
3. React kolay bir şekilde methodun içine verilince gerçekleştiriyor. Dolayısıyla bu noktada basit. Artık datamız geldi.
```
 productService.getProducts().then( result => setProducts(result.data.data))
 
 ```
##### backend Error: Failed to load resource: net::ERR_FAILED...Ve backend kızar...

##### Access-Control-Allow-Origin - Hata Mesajı : No 'Access-Control-Allow-Origin' Gönderilmemiş...
Access to XMLHttpRequest at 'http://localhost:8080/api/products/getAll' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

##### CORS Hata Mesajı:
Aslında bizim backendimizin ve tarayıcımızın ` Handshake` dediğimiz el sıkışma.
Birbirine güvenmesi üzerine kurulu sistemdir.

YILDIZLI NOT: Backend zaten default olarak tanımadığı kaynaklara destek vermiyor. 

##### BACKEND - CORS Hata Mesajı ile İlgili İzinler:
1. Eclipse --> BACKEND--> Controller'ı Aç--> ProductsController-->en tepeye--> @CrossOrigin eklersek bu dışa açılmasına izin verir.

2. importunu da yapalım.
import org.springframework.web.bind.annotation.CrossOrigin;

###### Frondend'de artık datalarımız gelecektir...
1. Ürün Sayımız kadar Cell hücre ekledi.
 
=========================================================================
#### Table Body - table.Cell Hücrelere Otomatik Data Getirilmesi
1. Hücrelere gelmesini istediğimiz alanları {} içinde yazacağız.
AMAÇ: celled-headerlara göre column bilgisi alalım
Cell Group → productName | unitPrice | unitsInStock | quantityPerUnit | category
Code son hali
```
        <Table.Body>
          {
            //Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {}
            products.map((product) => (
              //step2: TODO: productları map et ve jsx üret...
              //step3: Table-Row tekrar edeceği için buraya taşı!
              <Table.Row>
                {/* celled-headerlara göre column bilgisi alalım */}
                <Table.Cell>{product.productName}</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
```		

2. Birinci hücreye productName bilgisinin çekilmesi
```Birinci hücreye productName bilgisinin çekilmesi
 ver.1.0.→ <Table.Cell>Cell</Table.Cell>
 ver2.0. → <Table.Cell>{product.productName}</Table.Cell>
 
 Özetle: Cell group'da hangi column çekilecek ise {} süslü parantez içine product(tekil).something yazılır. 
 Cell Group → productName | unitPrice | unitsInStock | quantityPerUnit | category
 ```
 
3. Tüm dataların çekilmesi
``` Code Son Hali
 <Table.Body>
          {
            //Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {}
            products.map((product) => (
              //step2: TODO: productları map et ve jsx üret...
              //step3: Table-Row tekrar edeceği için buraya taşı!
              <Table.Row>
                {/* celled-headerlara göre column bilgisi alalım - UYARI: category dikkat→ product.category.categoryName şeklinde...*/}
                {<Table.Cell>{ product.productName }</Table.Cell> }
                <Table.Cell>{ product.unitPrice }</Table.Cell>
                <Table.Cell>{ product.unitsInStock }</Table.Cell>
                <Table.Cell>{ product.quantityPerUnit }</Table.Cell>
                <Table.Cell>{ product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
```

4. Product 'ın Category alanının CategoryName'inin çekilmesi
``` Code Son Hali
 <Table.Body>
          {
   
            products.map((product) => (
              <Table.Row>
                {/* celled-headerlara göre column bilgisi alalım - UYARI: category dikkat→ product.category.categoryName şeklinde...*/}
                <Table.Cell>{ product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
```
=========================================================================
#### ERROR AND SOLUTION: Warning: Each child in a list should have a unique "key" prop. 
1. React, mapping yaparken, bir adet key değer ister.
2. Mapping Yaparken Key değeri vermek
3. <Table.Body> →  products.map((product) => ( →  <Table.Row> içinde key değeri verelim.
4. Bir id ister hepsi UNIQUE olsun istiyor.
5. Code Son Hali
........................................................................
```
        <Table.Body>
          {
            //Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {} → products.map((product) => ()
            products.map((product) => (
              //step2: TODO: productları map et ve jsx üret...
              //step3: Table-Row tekrar edeceği için buraya taşı!
              <Table.Row key={ product.id } >  
                {/* celled-headerlara göre column bilgisi alalım - UYARI: category dikkat→ product.category.categoryName şeklinde...*/}
                {<Table.Cell>{ product.productName }</Table.Cell> }
                <Table.Cell>{ product.unitPrice }</Table.Cell>
                <Table.Cell>{ product.unitsInStock }</Table.Cell>
                <Table.Cell>{ product.quantityPerUnit }</Table.Cell>
                <Table.Cell>{ product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
``` 
.........................................................................
=========================================================================
=========================================================================
##### Documantation
- [Build beautiful, usable products using Material Components for the web](https://material.io/develop/web)
- [React Redux (with Hooks) Crash Course - 2021](https://www.youtube.com/watch?v=9jULHSe41ls)
- [UML Diagram Online](https://lucid.app/)
- [Projeyi Canlı yayına Almak](https://www.netlify.com/)
- [Stackabuse JavaScript, Java](https://stackabuse.com/)
- [Stackabuse Github](https://github.com/StackAbuse)
- [ReactJS - Quick Guide](https://www.tutorialspoint.com/reactjs/reactjs_quick_guide.htm)
- [Semantic-ui documantation](https://semantic-ui.com/collections/grid.html)
- [react axios web request](https://medium.com/devopsturkiye/react-axios-ile-web-request-47c61815a494)
- [github axios](https://github.com/axios/axios)
- [react tutorial](https://reactjs.org/tutorial/tutorial.html)
- [react doc](https://reactjs.org/docs/getting-started.html)
- [react router guides best...](https://reactrouter.com/web/guides/quick-start)
- [react hook](https://tr.reactjs.org/docs/hooks-effect.html)
- [tailwindcss responsive design](https://tailwindcss.com/)
- [tailwindcss github responsive design](https://github.com/tailwindlabs/tailwindcss)
- [best design](https://tailwindui.com/components/marketing/sections/heroes)
- [illustration](https://www.behance.net/galleries/illustration)
- [react hook effect](https://tr.reactjs.org/docs/hooks-effect.html)
- [react türkçe kaynak](https://omergulcicek.github.io/react/gelismis-kilavuzlar/lifecycle-fonksiyonlari.html)
- [OmerGulcicek-react türkçe kaynak github](https://github.com/omergulcicek)
- []()
- []()
- []()
=========================================================================

jsconfig.json oluşturusanız ctrl+. dan önerileri görebilirsiniz import vs için


- THE END....



=============================================================================================================================
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
