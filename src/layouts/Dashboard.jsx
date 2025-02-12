//rfc snippet code - rfc = reactFunctionalComponent| Dashboard:  Ana sayfa
import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react"; //for table grid import

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

/*NOTES...
===============================================================================
// SECTION -11 - STEPS
*/