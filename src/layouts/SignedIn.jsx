import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react"; //intelicense

// SECTION12 : Dropdown.Item onClick={}
export default function SignedIn({ signOut }) { //SECTION 12- props(-), destructure obje(+)
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/77123580?s=400&u=b8eccdb61d901b320fec71878787f37ed0fca9ac&v=4"
        />

        <Dropdown pointing="top left" text="Nazan">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

/* SECTION12:Steps - SignedIn.jsx NOTE
step1: rfc ile componentimizi oluşturalım.
step2: Menü şeklinde açılır kutu yapacağız. 
step3:Metu Item içinde avatar ekleyelim, sağa dayalı olsun.
ÖZETLE: Bir div içinde Menu Item > 
s1. bir Image,
s2. Bir tane dropdown, onu menu formatında gösterecek. İçerisinde de elemanlar olacak.
9. UYARI: Swmantic-ui bug ı var. 
step4: <Dropdown.Item> içine text geçmek
Step5: SignInjsx'de Dropdown içine pointing özelliği eklemek ve kullanıcı ismini eklemek
<Dropdown pointing="top left" text="Nazan">

step6: Props Kullanmak
1. Biz bu değerleri orada nasıl kullanacağız. SignIn 'e git.
2. Biz Navi.jsx'de bu hareketi yaptığımızda; 
SignIn.jsx içindeki return fonksiyonu çağrılıyor. 
Demekki onlarda onun parametreleri biz de props diye geçebiliriz.
3. SignIn.jsx'de function içinde props parametresi geçmek
export default function SignedIn() {x}
s1. props geçmek
export default function SignedIn(props) { }

step7. Dropdown.Item'a  onClick eventi vermek- (for Çıkış)
1. OnClick event vermek Çıkış buttonu için
<Dropdown.Item text="Çıkış" icon="sign-out" />
2. Navi.jsx'de singOut={handleSignOut} çalışacaktır.
3. Alt Componentte kullanacağımız isim signOut'dur.
4. SignOut'a tıkladığımızda çalışmasını istiyoruz.
5. YILIDIZLI NOT: Ne yapıyor. default true, handleSignOut dediğimizde false yapıyor.
6. SignIn.jsx'de <Dropdown.Item> içine OnClick event vermek        
<Dropdown.Item onClick={props.signOut} text="Çıkış" icon="sign-out" />


step8: propsları kaldıralım. obje destructer edelim.
1. changed code:
changed code → export default function SignedIn(props) { //SECTION 12- props
changed code → <Dropdown.Item onClick={props.signOut} text="Çıkış" icon="sign-out" />
22. New destructure obje code

==================================================================================================
EXAMPLE: rfc ile componentimizi oluşturalım.
==================================================================================================
EXAMPLE: Menü şeklinde açılır kutu yapacağız. 
1. <Menu.Item> ekle
    <div>
      <Menu.Item>

      </Menu.Item>
    </div>
2. import { Menu } from "semantic-ui-react"; 
==================================================================================================
EXAMPLE:Metu Item içinde avatar ekleyelim, sağa dayalı olsun.
1. avatar ekle
<Image avatar/>
2. sağa dayalı
<Image avatar spaced="right"/>
3. src="" → kendi resmini ekle!.
4. son hali
  <Image avatar spaced="right" src=""/>
5. github nazanbahar-avatar
src="https://avatars.githubusercontent.com/u/77123580?s=400&u=b8eccdb61d901b320fec71878787f37ed0fca9ac&v=4"  

6.  </Menu.Item> içinde   <Dropdown> oluşturalım
<Menu.Item>
    <Dropdown></Dropdown>
</Menu.Item>
7. <Dropdown> içinde <Dropdown.Menu>  oluşturalım.
<Dropdown>
     <Dropdown.Menu></Dropdown.Menu>
</Dropdown>

7. <Dropdown.Menu> İçerisinde 
 <Dropdown.Item></Dropdown.Item> oluşturalım.

8. Özetle:
SECTION12: ÖZETLE: Bir div içinde Menu Item > 
s1. bir Image,
s2. Bir tane dropdown, onu menu formatında gösterecek. İçerisinde de elemanlar olacak.
9. UYARI: Swmantic-ui bug ı var. 
</Dropdown.Item> yazarsa sil sondakini.

9. BUGFIX: 'Image' is not defined uyarı mesajı için importunun yapılmış
olması gerekiyor.
import { Menu, Image, Dropdown } from "semantic-ui-react"; //intelicense
........................................................................
9. Code Son Hali.
import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react"; //intelicense

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/77123580?s=400&u=b8eccdb61d901b320fec71878787f37ed0fca9ac&v=4"
        />

        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Menu.Item>
    </div>
  );
}
............................................................................
==================================================================================================
EXAMPLE: <Dropdown.Item> içine text geçmek
 <Dropdown.Menu>
     <Dropdown.Item text="Bilgilerim" icon="info"/>
        <Dropdown.Item text="Çıkış" icon="sign-out"/>            
     </Dropdown.Menu>                

=======================================================================
EXAMPLE: SignInjsx'de Dropdown içine pointing özelliği eklemek ve kullanıcı ismini eklemek
<Dropdown pointing="top left" text="Nazan">
==================================================================================================
EXAMPLE: Dropdown.Item'a onClick eventi vermek (for Çıkış)
1. OnClick event vermek Çıkış buttonu için
<Dropdown.Item text="Çıkış" icon="sign-out" />
2. Navi.jsx'de singOut={handleSignOut} çalışacaktır.
3. Alt Componentte kullanacağımız isim signOut'dur.
4. SignOut'a tıkladığımızda çalışmasını istiyoruz.
5. YILIDIZLI NOT: Ne yapıyor. default true, handleSignOut dediğimizde false yapıyor.
6. SignIn.jsx'de <Dropdown.Item> içine OnClick event vermek        
<Dropdown.Item onClick={props.signOut} text="Çıkış" icon="sign-out" />
..............................................................................................
7. Code Son hali
import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react"; //intelicense

// SECTION12 : Dropdown.Item onClick={}
export default function SignedIn(props) { //SECTION 12- props
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/77123580?s=400&u=b8eccdb61d901b320fec71878787f37ed0fca9ac&v=4"
        />

        <Dropdown pointing="top left" text="Nazan">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Çıkış" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
..............................................................................................
==================================================================================================

==================================================================================================
*/
