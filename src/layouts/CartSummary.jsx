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

/*==============================================================================
CartSummary.jsx NOTES...
===============================================================================
// SECTION -11 - STEPS
//step1: rfc snippet code
//step2: import ekle! : import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...
===============================================================================

==============================================================================
==============================================================================
*/
