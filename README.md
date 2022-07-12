# yani-product-cart

Este es un paquete de pruebas de despliegue en NPM


### Ángel De La Cruz


## Ejemplo:

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'yani-product-cart'
```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 6,
        maxCount: 10,
    }}
    >
    {({ reset, isMaxCountReached, maxCount, increaseBy, count }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```
