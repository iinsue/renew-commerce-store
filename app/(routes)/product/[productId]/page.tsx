import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import { Gallery } from "@/components/gallery";
import { ProductInfo } from "@/components/info";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetailPage: React.FC<Props> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category.id,
  });

  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Gallery */}
          <Gallery images={product?.images ?? []} />
          {/* Info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo data={product} />
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <ProductList title="Related Products" items={suggestedProducts} />
    </Container>
  );
};

export default ProductDetailPage;
