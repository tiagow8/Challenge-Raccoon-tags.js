var new_products_list = [
    {
      "id": "35",
      "name": "Miniatura Homem de Ferro",
      "price": 50.25
      
    },
    {
      "id": "30",
      "name": "Miniatura Magneto",
      "price": 57.99
    },{
      "id": "25",
      "name": "Miniatura Super Homem",
      "price": 37.51
    },{
      "id": "71",
      "name": "Miniatura Bernard",
      "price": 71.1
    },{
      "id": "56",
      "name": "Miniatura Batman",
      "price": 23
    },
    {
      "id": "56",
      "name": "Miniatura Darth Vader",
      "price": 89
    },
    {
     "id": "102",
     "name": "Miniatura Mestre Miyagi",
     "price": 1234.56
  }];
   
  
//AQUI EU IRIA CONSEGUIR PERCORRER TODO O ARRAY DE OBJETOS E FAZER A ALTERAÇÃO DE PRICE PARA ITEM-PRICE UTILIZANDO O MÉTODO MAP

  new_products_list.map(function(obj) {
      obj['item_price'] = obj['price']; 
                      delete obj['price']; 
                      return obj
    
  });
  
  console.log(new_products_list);
  


//SAÍDA:
  [ { id: '35', name: 'Miniatura Homem de Ferro', item_price: 50.25 },
  { id: '30', name: 'Miniatura Magneto', item_price: 57.99 },
  { id: '25', name: 'Miniatura Super Homem', item_price: 37.51 },
  { id: '71', name: 'Miniatura Bernard', item_price: 71.1 },
  { id: '56', name: 'Miniatura Batman', item_price: 23 },
  { id: '56', name: 'Miniatura Darth Vader', item_price: 89 },
  { id: '102', name: 'Miniatura Mestre Miyagi', item_price: 1234.56 } ]