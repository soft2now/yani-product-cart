import { useState, useEffect, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || 0);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if ((isMounted.current = true)) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    reset,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
  };
};

export default useProduct;
