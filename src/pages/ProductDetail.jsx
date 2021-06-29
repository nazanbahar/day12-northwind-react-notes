import React from "react";
import { useParams } from "react-router-dom"; //SECTION 12: useParams
import { Button, Card, Image } from "semantic-ui-react"; // semantic ui webpage must imported.

export default function ProductDetail() {
  //SECTION 12: destructure yapalım useParams() için → aslında let {id:id} demektir.
  //YILDIZLI NOT: uyarı bu notasyonda iki tarafta aynıysa birini yazman yeterlidir.
  let { id } = useParams();
  //let { id, categoryId } = useParams(); -example: birden fazla parametre okumak istersek.

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

/* SECTION 12: ProductDetail.jsx NOTE
step 1. rfc snipped
step2. Detay Sayfasında Değeri Yakalamak → useParams() Bana Parametreleri veriyor(Obje Olarak)
1. destructure yapalım useParams() için → aslında let {id:id} demektir.
2. YILDIZLI NOT: uyarı bu notasyonda iki tarafta aynıysa birini yazman yeterlidir.
    let {id} = useParams()
3. import
import { useParams } from 'react-router-dom' //SECTION 12: useParams 
4. Detay Sayfası yerine ekle.
    return (
        <div>
            Ürün : { id }
        </div>
    )

 step3: USING: CARD :Sepete Ekle ve Favoriler Card Kullanımı 
1. ProductDetail.jsx'de return <div>Ürün : {id}</div>;  
2. Card Grup `https://react.semantic-ui.com/views/card/#types-groups`
3. COPY - CODE: ` <Card.Group> </Card.Group>` içeriğini kopyalayalım. 
4. PASTE CODE POINT → ProductDetail.jsx 'de   return <div> içindeki Ürün : {id} yerine PASTE Edelim.
5. semantic-ui card must imported
import { Button, Card, Image } from 'semantic-ui-react'

............................................................................
EXAMPLE: CODE SON HALİ : Detay Sayfasında Değeri Yakalamak → useParams() Bana Parametreleri veriyor(Obje Olarak)
import React from 'react'
import { useParams } from 'react-router-dom' //SECTION 12: useParams

export default function ProductDetail() {
    
    //SECTION 12: destructure yapalım useParams() için → aslında let {id:id} demektir.
    //YILDIZLI NOT: uyarı bu notasyonda iki tarafta aynıysa birini yazman yeterlidir.
    let { id } = useParams()

    return (
        <div>
            Ürün : { id }
        </div>
    )
}
............................................................................
*/
