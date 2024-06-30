"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./redux/store";
import { increment } from "./redux/features/counterSlise";

export default function StoreProvider({ count, chidren }) {
  const storeRef = useRef()

  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(increment(count))
  }

  return <Provider store={storeRef.current}>{chidren}</Provider>
}