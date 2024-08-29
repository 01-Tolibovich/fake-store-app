"use client"

import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const useItemPositions = () => {
  const dispatch = useDispatch();
  const elementRef = useRef(null);

  console.log(5555, elementRef.current);
  

  const updatePosition = useCallback((setDispatch) => {
    // const element = document.getElementById(idElement);

      // const timer = setTimeout(() => {
      const rect = elementRef.current.getBoundingClientRect();
        dispatch(
          setDispatch({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
          })
        );
      // }, 500);
  
      // return () => clearTimeout(timer);
  }, [dispatch])

  return { elementRef, updatePosition };
};

export default useItemPositions;
