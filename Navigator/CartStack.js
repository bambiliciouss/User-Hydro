import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cart from "../Screens/cart/Cart";
import CheckoutNavigator from "./CheckoutNavigator";

import OrderSummary from "../Screens/cart/checkout/OrderSummary";
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="My Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Checkout"
        component={CheckoutNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Order Summary"
        component={OrderSummary}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
