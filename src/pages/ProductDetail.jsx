import React from "react";
import { useParams } from "react-router-dom"; //SECTION 12: useParams

export default function ProductDetail() {
  //SECTION 12: destructure yapalım useParams() için → aslında let {id:id} demektir.
  //YILDIZLI NOT: uyarı bu notasyonda iki tarafta aynıysa birini yazman yeterlidir.
  let { id } = useParams();
  //let { id, categoryId } = useParams(); -example: birden fazla parametre okumak istersek.

  return <div>Ürün : {id}</div>;
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
