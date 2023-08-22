import './App.css';
import ResourceDataMap from './ResourceDataMap';
import ProductListItem from './components/ProductListItem';

function App() {
  const products = [
    { id: 1, title: 'Fewnu 1', description: 'I help you to control your business', price: 800 },
    { id: 2, title: 'Fewnu 2', description: 'I help you to control your business', price: 900 },
    { id: 2, title: 'Fewnu 3', description: 'I help you to control your business', price: 500 },
    { id: 3, title: 'Fewnu 4', description: 'I help you to control your business', price: 840 },
    { id: 4, title: 'Fewnu 5', description: 'I help you to control your business', price: 200 }
  ]

  return (
    <div className="App">
      <h1>Lists & list items</h1>

      <ResourceDataMap
        resourceData={products}
        resourceListItem={ProductListItem}
        resourceName="product"
      />
    </div>
  );
}

export default App;
