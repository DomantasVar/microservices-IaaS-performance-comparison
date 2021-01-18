import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultActiveKey="products" transition={false} id="noanim-tab">
          <Tab eventKey="products" title="Products">
            <Products />
          </Tab>
          <Tab eventKey="users" title="Users">

          </Tab>
          <Tab eventKey="cart" title="Cart">

          </Tab>
        </Tabs>

      </header>

    </div>
  );
}

export default App;
