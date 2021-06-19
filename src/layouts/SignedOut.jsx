import React from "react";

import { Button, MenuItem } from "semantic-ui-react"; //intelisence

export default function SignedOut() {
  return (
    <div>
      <MenuItem>
        <Button primary>Giriş yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
      </MenuItem>
    </div>
  );
}

/*SECTION12:Steps - SignedOut.jsx NOTE
step1: rfc ile componentimizi oluşturalım.
step2: div içine iki adet Button ekle.
step3: Buttonları container içine al.
Intelisence ile importların eklenmiş olduğunu gör.
step4: Buttonlara primary özelliği ver.
<Button primary >Giriş yap</Button>
<Button primary>Kayıt ol</Button>
step5: Style Vermek - Buttonlar arasındaki bitişikliği ayır. → style={{}}
Neden style={{}} veriyoruz. Çünkü obje veriyoruz. Margin-top gibi değerler veriyoruz.
Bunları virgülle verebiliriz.
 <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
==================================================================================================
step1: rfc ile componentimizi oluşturalım.
==================================================================================================
step2: div içine iki adet Button ekle.
1. semantic-ui'daki intelicense'den seçmeyi unutma!.  
2. Giriş yap ve Kayıt ol buttonları oluştur.
    <div>
      <Button>Giriş yap</Button>
      <Button>Kayıt ol</Button>
    </div>
3.import ekle 
import { Button } from "semantic-ui-react"; //intelisence
==================================================================================================
step3: Buttonları container içine al.
    <MenuItem>
        <Button>Giriş yap</Button>
        <Button>Kayıt ol</Button>
    </MenuItem>
==================================================================================================
step4: Buttonlara primary özelliği ver- mavi renk atanır.
    <Button primary>Giriş yap</Button>
    <Button primary>Kayıt ol</Button>
==================================================================================================
step5: Style Vermek - Buttonlar arasındaki bitişikliği ayır.
1. Buttonlar arasındaki bitişikliği ayır. → style={{}}
2. Neden style={{}} veriyoruz. Çünkü obje veriyoruz. Margin-top gibi değerler veriyoruz.
Bunları virgülle verebiliriz.
3. Code
<Button primary style={{}}>Kayıt ol</Button>
4. marginLeft soldakine değer veriyoruz.
 <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
==================================================================================================
*/
