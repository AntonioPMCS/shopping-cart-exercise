import { useState, useEffect, useCallback } from "react";
import { API_URL } from '../constants.ts'

import { Product } from "../types/Product.ts";

export function useProducts() {
  const[products, setProducts] = useState<Product[]>([]);
  const[loading, setLoading] = useState<boolean>(false);
  const[error, setError] = useState<string | null>(null); 

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL+'products');
      if (!response.ok) throw new Error("Failed to fetch products");
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}