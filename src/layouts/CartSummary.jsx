import React from "react";
import { NavLink } from "react-router-dom"; //for Sepete Ekle Navlink import
import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <Dropdown.Divider/>
         <Dropdown.Item as={ NavLink } to="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
     </div>
  );
}

/*==============================================================================
CartSummary.jsx NOTES...
// SECTION -12 - STEPS
step1: Sepete göre design etmek
1. Araya çizgi çekmek
<Dropdown.Divider/>
step2.  YILDIZLI NOT: AMAÇ: Sepete git e tıkladığımızda roote u çalıştırmak istiyoruz.
<Dropdown.Item>Sepete git</Dropdown.Item> 
................................................................................
EXAMPLE: Sepete göre design etmek
Code son hali 
import React from "react";
import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Acer Laptop</Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <Dropdown.Divider/>
         <Dropdown.Item>Sepete git</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
     </div>
  );
}

................................................................................
===============================================================================
// SECTION -11 - STEPS
//step1: rfc snippet code
//step2: import ekle! : import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...
===============================================================================

==============================================================================
==============================================================================
*/
