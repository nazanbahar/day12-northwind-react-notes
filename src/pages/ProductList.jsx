//rfc snippet code
import React, { useState, useEffect } from "react"; //useState snippet with has been added, useEffect manuel added
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductList() {
  //destructure...
  const [products, setProducts] = useState([]);


  //useEffect function...
  useEffect(() => {
    //...component yüklendiğinde yapılacakları yaz...(same=angular.load)
    let productService = new ProductService()

    //productService getProducts başarılı olursa...
    productService.getProducts().then( result => setProducts(result.data.data))

  }, []);  //SECTION 12 ,[] - Boş bir array atmak gerekiyor! Aksi takdirde çalışır fakat sürekli istekte bulunur.


//Table Celled Header settings: SwaggerUI - http://localhost:8080/swagger-ui.html adresinden bir adet ürün örneği alalım 
//ve celled-headerlara göre column bilgisi alalım.  
return (
    <div>
      <Table celled>
        <Table.Header>  
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {/* {
      "id": 1,
      "productName": "Chai",
      "unitPrice": 18,
      "unitsInStock": 39,
      "quantityPerUnit": "10 boxes x 30 bags",
      "category": {
        "categoryId": 1,
        "categoryName": "Beverages"
      }
       */}

        <Table.Body>
          {
            //Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {} → products.map((product) => ()
            products.map((product) => (
              //step2: TODO: productları map et ve jsx üret...
              //step3: Table-Row tekrar edeceği için buraya taşı!
              <Table.Row key={ product.id } >  
                {/* celled-headerlara göre column bilgisi alalım - UYARI: category dikkat→ product.category.categoryName şeklinde...*/}
                {<Table.Cell>{ product.productName }</Table.Cell> }
                <Table.Cell>{ product.unitPrice }</Table.Cell>
                <Table.Cell>{ product.unitsInStock }</Table.Cell>
                <Table.Cell>{ product.quantityPerUnit }</Table.Cell>
                <Table.Cell>{ product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

/*==============================================================================
ProductsList.jsx NOTES... 
//SECTION -12 -STEPS Day12 Northwind React Lesson
step1:useEffect function a Boş bir array atmak gerekiyor! Aksi takdirde çalışır fakat networke bakarsak sürekli istekte bulunur.
===============================================================================
//SECTION -12 -STEPS
step1: ANCHOR: BUGFIX: ProductList..jsx - empty array at the end of useEffect function
1. SECTION 12 ,[] - Boş bir array atmak gerekiyor! Aksi takdirde çalışır fakat sürekli istekte bulunur.
BUGFIX: ProductList..jsx - empty array at the end of useEffect function
2. Code Son Hali:
....................................................................
 //useEffect function...
  useEffect(() => {
    //...component yüklendiğinde yapılacakları yaz...(same=angular.load)
    let productService = new ProductService()

    //productService getProducts başarılı olursa...
    productService.getProducts().then( result => setProducts(result.data.data))

  }, []);
.....................................................................
3. NEDENİ:
React Class Componentleri biliyorsan, React-LiyfeCyle için React'ın yaşam döngüsü için farklı
ComponentDidMount(), ComponentDidUpdate gibi evetleri kullanıyorduk. Ama burada herşeyi useEffect ile halledebiliyoruz.
2. Bu noktada biz eğer bir tane nesnenin her değişikliğe uğradığında sayfanın 
yeniden render edilmesini istersek, o arrayi boş array içine yazarak state bilgisinin takibini yapabiliyoruz.
Aksi takdirde elemanlar değiştiğinde sürekli istek atar. Bunu eklemediğimiz zaman ürünler
listeleniyor. State değiştiği için tekrardan çalışıyor. State değiştikçe tekrardan 
çalışacaktır. Kısacası sonsuz bir şekilde API'miz uygulamamıza istekte bulunuyor.
3. Hooklarla çalışırken ,[] eklemeyi unutma! 
4. Sürekli değişimi takip etmek istediğimiz stateleri bunun içine ekliyor olacağız.
DidUpdate() leri yakalamak için.
===============================================================================

***************************ANCHOR**************************************

===============================================================================
// SECTION -11 - STEPS
step1: rfc snippet code
step2: ADDED TABLE: return div içi de table ekle!

step3: IMPORT: import ekle! : import {  Dropdown } from "semantic-ui-react"; //for failed to compile error...

step4: BU SAYFA DATA TUTAR: Bu sayfa bir data tutacak. ex. ürünler → bu sayfanın state datası anlamındadır.

step5: DESTRUCTING İŞLEMİ → useState ekleyelim. → const [state, setstate] = useState(initialState)

step6: IMPORT: import eklenmiş mi kontrol et → import React, { useState } from "react"; //useState snippet with has been added

step7: <Table.Body> içindeki ilk  <Table.Row> u silelim. Nedeni de
 <Label ribbon>First</Label> içinde ribon kullanmış ona gerek yok.
İkinciyi de sil şuan tabloda bir adet  <Table.Row> kalsın.

step8: ProductList Header lari SwagerUI ProductsGetAll Columlara Göre Değiştirmek...
SwaggerUI- ResponseBody açalım. Hangi headerlar var bakalım. Not alalım ve değiştirelim.
<Table.HeaderCell>Header</Table.HeaderCell>
s1. Response Body Header Group→ id |productName | unitPrice | unitsInStock | quantityPerUnit | categoryName

step9: SwaggerUI - http://localhost:8080/swagger-ui.html adresinden bir adet ürün örneği alalım ve bunu columlarına göre headerlarımızı ayarlayalım.

step10: 5 satır 5 Sütün ekleyelim. products'dan data gelecek!
step11: ROW TEKRAR EDECEK: YILDIZLI NOT: Tablo gelen ürün sayısı kadar tekrar eder. Rowları tekrar edeceğiz.
<Table.Body> içindeki <Table.Row> tekrar edecektir.
step12: SIFIR ELEMANLI TABLE-ROW OLUŞTURMAK İÇİN JAVASCRIPT CODU YAZ <Table.Row> dan önce...
    s1: table-row tekrarı için javaScript Code Yaz→ {}
    s2: TODO: productları map et ve jsx üret...
    s3: Table-Row tekrar edeceği için buraya taşı!

step13: USE EFFECT : RENDER ETMEK- Sayfa yüklendiğinde yapılacakları yaz...
s1. import React, { useState, useEffect } from "react"; //useState snippet with has been added, useEffect manuel added
s2.  useEffect(()=>{
    //...component yüklendiğinde yapılacakları yaz...

  }) 

step14: Table Celled Header settings: SwaggerUI - http://localhost:8080/swagger-ui.html adresinden bir adet ürün örneği alalım 
ve celled-headerlara göre column bilgisi alalım.  

step15: Table.Row settings: step1: table-row tekrarı için javaScript Code Yaz→ {} → products.map((product) => ()

step16:  celled-headerlara göre column bilgisi alalım →   {<Table.Cell>{ product.productName }</Table.Cell> }
step17: Bir ürüne ait category bilgisi çekerken → product.category.categoryName şeklinde çekmeliyiz...
UYARI: category dikkat→ product.category.categoryName şeklinde...
<Table.Cell>{ product.category.categoryName}</Table.Cell>

step15: 4. Product 'ın Category alanının CategoryName'inin çekilmesi
 <Table.Body>
          {
   
            products.map((product) => (
              <Table.Row>
                // celled-headerlara göre column bilgisi alalım - UYARI: category dikkat→ product.category.categoryName şeklinde...
                <Table.Cell>{ product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

step16: Key değeri vermek - Bir id ister hepsi UNIQUE olsun diye...
<Table.Body> →  products.map((product) => ( →  <Table.Row> içinde key değeri verelim.
===================================================================

===============================================================================*/
