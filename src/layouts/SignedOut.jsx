import React from "react";

import { Button } from "semantic-ui-react"; //intelisence

export default function SignedOut() {
  return (
    <div>
      <Button>Giriş yap</Button>
      <Button>Kayıt ol</Button>
    </div>
  );
}

/*SECTION12:Steps - SignedOut.jsx NOTE
step1: rfc snippet ile componentimizi oluşturalım.
step2: div içine iki adet Button ekle.
1. semantic-ui'daki intelicense'den seçmeyi unutma!.  
2. Giriş yap ve Kayıt ol buttonları oluştur.
    <div>
      <Button>Giriş yap</Button>
      <Button>Kayıt ol</Button>
    </div>
3.import ekle 
import { Button } from "semantic-ui-react"; //intelisence

*/
