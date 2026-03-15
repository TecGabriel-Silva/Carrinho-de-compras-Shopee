import * as cartServices from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = []; 
const myWishList = [];

console.log("Seja bem vindo ao seu cerrinho de compras da Shopee 🤗😁");

//Criando itens
const item1 = await createItem("Capa de celular - Samsung A38", 15.00, 5); 
const item2 = await createItem("Capa de celular - Samsung A52", 22.00, 2);

//Adicionando os itens na minha lista de compras
await cartServices.addItem(myCart,item1);
await cartServices.addItem(myCart,item2);

await cartServices.removeItem(myCart,1);

await cartServices.displayToCart(myCart);

//Deletando itens do carrinho
// await cartServices.deleteItem(myCart,item2.name);
// await cartServices.deleteItem(myCart,item1.name);



//Teste no console.log
//console.log(`TESTE 🟢: Verificando o subtotal do Item1: ${item1.subtotal()} --- Total do carrinho: ${cartServices.calculateTotal(myCart)}`);
await cartServices.calculateTotal(myCart);

