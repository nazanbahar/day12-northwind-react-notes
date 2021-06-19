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
### ``
### ``
======================================================================
## CREATE FILE - COMPONENT
### CREATE LAYOUT FILE = SignedIn.jsx
1. layouts--> Right Click > New File> FileName= SignedIn.jsx
path: src\layouts\SignedIn.jsx

### CREATE LAYOUT FILE = SignedOut.jsx
2. layouts--> Right Click > New File> FileName= SignedOut.jsx
path: src\layouts\SignedOut.jsx





### ``
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
============================================================================

****************************************************************************
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
2. Ternay Operatörü ile State bilgisi tutalım.
###  {isAuthenticated ? <SignedIn /> : <SignedOut />}









======================================================================



======================================================================
======================================================================

======================================================================

======================================================================

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
