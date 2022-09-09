import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { SetStateAction, useEffect, useState } from 'react';
import { IItem } from './models/item.interface';
import { app, credentials } from './utilities/mongo.client';
import { BSON } from 'realm-web';
import "./main.css"

function App() {
  //states goes here
  const [items, setItems] = useState<IItem[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    async function getItems() {
      let item: Realm.Item = await app.logIn(credentials);
      const listOfItem: Promise<IItem[]> = item.functions.getAllItems();
      listOfItem.then((resp) => {
        setItems(resp);
      });
    }
    getItems();
    return () => {};
  }, []);

  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {items &&
            items.map((item) => (
              <li
                key={item._id}
                className='border-2 p-6 mb-3 rounded-lg flex items-center'
              >
                <p>{item.name}</p>
              </li>
            ))}
      </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
