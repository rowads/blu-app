import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private apollo: Apollo) { }

  // Fetch the current cart details
  getCart() {
    const GET_CART = gql`
      query {
        activeOrder {
          lines {
            productVariant {
              id
              name
              price
            }
            quantity
          }
          total
        }
      }
    `;

    return this.apollo.watchQuery({ query: GET_CART }).valueChanges;
  }

  // Add a product to the cart
  addToCart(productId: string, quantity: number) {
    const ADD_TO_CART = gql`
      mutation AddToCart($productId: ID!, $quantity: Int!) {
        addItemToOrder(productVariantId: $productId, quantity: $quantity) {
          id
        }
      }
    `;

    return this.apollo.mutate({
      mutation: ADD_TO_CART,
      variables: {
        productId,
        quantity
      }
    });
  }

  // Update product quantity in the cart
  updateQuantity(lineId: string, quantity: number) {
    const UPDATE_QUANTITY = gql`
      mutation UpdateQuantity($lineId: ID!, $quantity: Int!) {
        adjustOrderLine(orderLineId: $lineId, quantity: $quantity) {
          id
        }
      }
    `;

    return this.apollo.mutate({
      mutation: UPDATE_QUANTITY,
      variables: {
        lineId,
        quantity
      }
    });
  }

  // Remove a product from the cart
  removeFromCart(lineId: string) {
    const REMOVE_FROM_CART = gql`
      mutation RemoveFromCart($lineId: ID!) {
        removeOrderLine(orderLineId: $lineId) {
          id
        }
      }
    `;

    return this.apollo.mutate({
      mutation: REMOVE_FROM_CART,
      variables: {
        lineId
      }
    });
  }
}
