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

/* ================================================================
Navi.jsx NOTES...
===============================================================================

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

===================================================================*/
