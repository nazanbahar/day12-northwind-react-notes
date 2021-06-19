import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {/* ANCHOR {} süslü prantez içinde buraya Ternay Operatörü Ekleyelim STATE Bilgisi için} */}
            {isAuthenticated ? <SignedIn /> : <SignedOut />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

/* ================================================================
Navi.jsx NOTES SECTION -12 - STEPS
step1:  cancelled manu.Item and button
<Menu.Item>
   <Button primary>Sign Up</Button>
</Menu.Item>
step2: import içinde { useState } tanımla.
import React, { useState } from "react"; 

step3: destructor işlemi gerçekleştir Navi() exportunun içinde
const [state, setstate] = useState(initialState)

step4: state bilgi ekleyelim.
isAuthenticated → state bilgisi
setIsAuthenticated → state i değiştirecek method
initialState → default state
example. initialState, ProductList'de ürünler olduğu için initialState boş bir arraydir.
Burada ise ya true yada false dır. Ya Authenticated yada Non-Authenticated dir.
step5: Default initialState'i boş olarak geç
useState(false)

step6. KARAR VER.
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

===============================================================================

EXAMPLE : CODE SON HALİ : STATE BILGISı TUTMAK
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

================================================================================
EXAMPLE : CODE SON HALİ : STATE OPTIONS
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
 

================================================================================




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
