
import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from './Table'

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoaded: false, items: ''}
    }
      

    getProducts = () => {
        fetch('http://localhost:8000/products').then(res => res.json() ).then(json => {
           console.log(json);
           this.setState ({
              isLoaded: true,
              items: json,
           })
        });
     }
    
    render() {
      return(<div>
                <Button variant="outline-primary" className="productsButton" onClick={this.getProducts}>Get products</Button>
                { this.state.isLoaded && <Table id="productsTable" data={this.state.items}/> }
            </div>
            );
    }
}

export default Products;