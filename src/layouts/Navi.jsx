import React, { useState } from "react"; //intelicense SECTION -12
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom"; //useHistory: Çıkış Yap Tıkladığımızda Anasayfaya Gitsin

export default function Navi() {

   //DESTRUCTURE 
  const [isAuthenticated, setIsAuthenticated] = useState(true); //SECTION -12

  //HISTORY history değişkenine atayalım. SECTION -12: useHistory()
  const history = useHistory();

  //function with snippet handleSignOut()→ FALSE SECTION -12
  function handleSignOut() {
    //SECTION -12 -params
    //çıkış yapmayı handle edelim
    setIsAuthenticated(false); //true yu false çekiyoruz. Bunu da oraya göndereğiz.
    
    //NAVIGATION HISTORY→ ANASAYFAYA GİT
    history.push("/")
  }

  //function with snippet handleSignIn()→ TRUE SECTION -12
  function handleSignIn() {
    //SECTION -12 -params
    //giriş yapmayı handle edelim
    setIsAuthenticated(true); //false yu true çekiyoruz. Bunu da oraya göndereğiz.
  }

  //SECTION -12 Ternay  - isAuthenticated
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {/* ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için}     -- //SECTION -12*/}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} /> //SECTION -12 : added code
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

/* ====================================================================
Navi.jsx NOTES SECTION -12 - STEPS
step1: cancelled menu.Item and button
step2: import içinde { useState } tanımla.
step3: destructor işlemi gerçekleştir Navi() exportunun içinde
step4: state bilgi ekleyelim.
step5: Default initialState'i false ver.
step6. State Options - Karar Ver 
1 seçenek: <SignedOut /> mu göster 
2. seçenek: <SignedIn /> mu gösterelim.
step7: State i Değiştiren Fonksiyon(setIsAuthenticated) ile State Değiştirmek - Navi.jsx
 function with snippet
  function name(params) { }
step7: Sisteme Giriş Yapılması Senaryosunda hangi butonun görülmesine karar verilmesi
step8: State i Değiştiren Fonksiyon(setIsAuthenticated) ile State Değiştirmek - Navi.jsx
  //function with snippet handleSignOut() SECTION -12
  function handleSignOut(params) {  
    //çıkış yapmayı handle edelim
    setIsAuthenticated(false)  //true yu false çekiyoruz. Bunu da oraya göndereğiz.

  }

step9: Alt Component'e Data Geçmek
{isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut />} 

step10: Props  Atamak- Fonksiyona değer atamak
1.bisey={} burada istediğin değeri geçebilirsin
{isAuthenticated ? <SignedIn signOut={handleSignOut} bisey={}/> : <SignedOut />} 
2. bisey="1" değerini atamak
 {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> : <SignedOut />} 
3. Props Atamak
s1. signOut{} ve bisey="1" bunlar bir props'dir.
s2. Code son Hali:
 {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> : <SignedOut />} 
4. Props Kullanmak
s1. Biz bu değerleri orada nasıl kullanacağız. SignIn 'e git.
s2. Biz Navi.jsx'de bu hareketi yaptığımızda; fonksiyon render olur. 
SignIn.jsx içindeki return fonksiyonu çağrılıyor. 
Demekki onlarda onun parametreleri biz de props diye geçebiliriz.

step11: function handleSignIn() eklemek → TRUE
1. Uyarı. her ikisinde de paramsa ihtiyacımız yok o yüzden sildik.
Kayıt ol ve Giriş yap Buttonları için OnClick event vermek 
2. Giri yap butonuna basınca avartar gelsin. Giriş yap true ya çeksin.
3.  <SignedOut signIn={handleSignIn} /> ekledik.
4. ÇOK BASİT: handleSignIn fonksiyonunu SignOut'a geçtik.
5. Bu diğer tarafa prop diye geçiyor.

=======================================================================
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
=======================================================================
EXAMPLE:  cancelled menu.Item and button
<Menu.Item>
   <Button primary>Sign Up</Button>
</Menu.Item>
=======================================================================
EXAMPLE: import içinde { useState } tanımla.
import React, { useState } from "react"; 
=======================================================================
EXAMPLE: destructor işlemi gerçekleştir Navi() exportunun içinde
const [state, setstate] = useState(initialState)
=======================================================================
EXAMPLE : State Bilgisi Tutmak
1. isAuthenticated → state bilgisi
2. setIsAuthenticated → state i değiştirecek method
3. initialState → default state
4. example. initialState, ProductList'de ürünler olduğu için initialState boş bir arraydir.
5. Burada ise ya true yada false dır. Ya Authenticated yada Non-Authenticated dir.
............................................................................
6. Code Son Hali
import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            <SignedOut />
            <SignedIn />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
..................................................................................
================================================================================

=======================================================================
EXAMPLE: Default initialState'i false ver
1. useState(false)
=======================================================================
EXAMPLE : State Options - Karar Ver 
1 seçenek: <SignedOut /> mu göster 
2. seçenek: <SignedIn /> mu gösterelim.
3. YILDIZLI NOT: Dolayısıyla bizim şartlı bir yapı kurmamız gerekiyor.
Angular'da biz bunu *ngIf ile yapıyorduk. React tarafında ise building bir direktif yok.
Biz burada javaScript nimetlerinden yararlanıyoruz. Burada ufak bir code yazacağız. 
4. Bizim burada kullandığımız;  isAuthenticated ve setIsAuthenticated
Destructure yapıyoruz burada. Dolayısıyla return de isAuthenticated da gelir.
setIsAuthenticated da gelir. Burda destructure et. O konuyu unutma!
5. useState bize [isAuthenticated, setIsAuthenticated]  veriyor. Biz de ayrı ayrı geçiyoruz.
6. Ternay operatör JavaScript'de de kullanılır.
OPTIONS1: Authenticate ise SignIn i göster. 
OPTIONS1: Authenticate DEĞİL ise SignOut u göster. 
7.          <Menu.Menu position="right">
            <CartSummary />

            {//buraya Ternay Operatörü Ekleyelim STATE Bilgisi için}

            <SignedOut />
            <SignedIn />
          </Menu.Menu>
        </Container>

8.           <Menu.Menu position="right">
            <CartSummary />
             // {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için} 
             {isAuthenticated? }

             <SignedOut />
             <SignedIn />
           </Menu.Menu>
9.  Ternay Operatörü ile State bilgisi tutalım. 
  {isAuthenticated ? <SignedIn /> : <SignedOut />}
10. Uyarı: default değerim false  
const [isAuthenticated, setIsAuthenticated] = useState(false);

.........................................................................................
11. CODE SON HALİ : STATE OPTIONS
import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
              {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için} 
             {isAuthenticated? }

             <SignedOut />
             <SignedIn />
           </Menu.Menu>
         </Container>
       </Menu>
     </div>
   );
 }
..................................................................................
================================================================================
EXAMPLE: Sisteme Giriş Yapılması Senaryosunda hangi butonun görülmesine karar verilmesi
.................................................................................
import React, { useState } from "react"; //intelicense
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  //destructure
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            // ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için} *
            {isAuthenticated ? <SignedIn /> : <SignedOut />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
...............................................................................
================================================================================
EXAMPLE: State i Değiştiren Fonksiyon(setIsAuthenticated) ile State Değiştirmek - Navi.jsx
1. function with snippet
  function name(params) { }

2. Çıkış yapmayı handle edelim.

3. name → handleSignOut

4. State i değiştirmek çok kolay. 
5. Fonksiyonumuz → setIsAuthenticated
6.  setIsAuthenticated() → bizden boolean bir değer isteyecektir.

7. Biz handleSignOut fonksiyonunu buraya yazmak zorundayız. 
Çünkü; state i Navi'de değiştirmemiz gerekiyor. 
Ama bunu çağıracak olan kim alt component.
Biz Navi'deyiz>Avatar var>Çıkış Yap butonu var. SingOut buttonuna bastığımızda
handle SignOut fonksiyonunun çalışması lazım.

8. ÖZETLE: bizim alt component'e bir fonksiyon yollamamız lazım.

9. Code Son Hali.

  //function with snippet
  function handleSignOut(params) {
    //çıkış yapmayı handle edelim
    setIsAuthenticated(false)  //true yu false çekiyoruz.

  }
...............................................................................
================================================================================
EXAMPLE: Alt Component'e Data Geçmek
1.  Alt component'e fonksiyon yollanacak yer.(X:point here)
{isAuthenticated ? <SignedIn (X:point here) /> : <SignedOut />}

2. SignedIn Componentinde signOut={handleSignOut} 
{isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut />}

3. YILDIZLI NOT: ANLAMI: 
s1. Sanki SignedIn içinde signOut()  diye bir fonksiyon var da o da aslında
handleSignOut u tetikliyor. 
s2. Yani Navi.jsx'i tetikliyor. Çıkış yap butonuna abstığımız zaman
setIsAuthenticated(false) çalışacaktır.
s3. Çalışması için de sen onu alt component'e data olarak geçiyorsun.
...............................................................................
================================================================================
EXAMPLE: Props Atamak- Fonksiyona değer atamak
1. Props Atamak- Fonksiyona değer atamak
         <Menu.Menu position="right">
            <CartSummary />
            // ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için}     -- //SECTION -12
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> : <SignedOut />} 
          </Menu.Menu>

...............................................................................
code son hali:
import React, { useState } from "react"; //intelicense SECTION -12
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {

  //destructure
  const [isAuthenticated, setIsAuthenticated] = useState(true); //SECTION -12

  //function with snippet handleSignOut() SECTION -12
  function handleSignOut(params) {  
    //çıkış yapmayı handle edelim
    setIsAuthenticated(false)  //true yu false çekiyoruz. Bunu da oraya göndereğiz.

  }

 //SECTION -12 Ternay  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            // ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için}     -- //SECTION -12
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"/> : <SignedOut />} 
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

...............................................................................

================================================================================
EXAMPLE: SignIn 
 function handleSignIn() eklemek → TRUE
1. Uyarı. her ikisinde de paramsa ihtiyacımız yok o yüzden sildik.
Kayıt ol ve Giriş yap Buttonları için OnClick event vermek 
2. Giri yap butonuna basınca avartar gelsin. Giriş yap true ya çeksin.
3.  <SignedOut signIn={handleSignIn} /> ekledik.
4. ÇOK BASİT: handleSignIn fonksiyonunu SignOut'a geçtik.
5. Bu diğer tarafa prop diye geçiyor. Yani SignOut'a...
6. SingOut.jsx'de props olarak geçmek.
export default function SignedOut() {}
yerine props yazıyoruz.
export default function SignedOut(props) {}

...............................................................................
1. Code Son Hali
  //function with snippet handleSignIn()→ TRUE SECTION -12
  function handleSignIn() {
    //SECTION -12 -params
    //giriş yapmayı handle edelim
    setIsAuthenticated(true); //false yu true çekiyoruz. Bunu da oraya göndereğiz.
  }
...............................................................................
2. Code Son Hali
  //SECTION -12 Ternay  - isAuthenticated
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            // ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için}     -- //SECTION -12
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} /> -- // added code SECTION -12
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
...............................................................................

================================================================================
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


===============================================================================
// SECTION -11 - STEPS
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
//step13: <Menu inverted fixed="top"> ekleyelim.
===================================================================
Code Son Hali- SECTION -11
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
===================================================================*/
