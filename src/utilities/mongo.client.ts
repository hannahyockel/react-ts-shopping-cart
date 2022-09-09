import * as Realm from 'realm-web';
// require("dotenv").config();

const REALM_APP_ID = 'react-ts-shopping-cart-owars';
export const app: Realm.App = new Realm.App({ id: 'react-ts-shopping-cart-owars'! });
export const credentials = Realm.Credentials.anonymous();