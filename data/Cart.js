export const cart = [
  {
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2
  },
  {
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1
  }
    
]


           /**** addtoCart func *****/

     export function addToCart(productId){
            let matchingItem;
             //  looping through the Cart
             cart.forEach((cartItem) =>{
              if(cartItem.productId === productId){
                matchingItem = cartItem;
              }
          });
          
          console.log(matchingItem)
          //   checking if matchingItem to increment the quantity
          if(matchingItem){
            matchingItem.quantity +=1;
          }else{
            // push the objects  to the cart array
              cart.push({
               productId:productId,
               quantity:1
              })
          }
          
          }