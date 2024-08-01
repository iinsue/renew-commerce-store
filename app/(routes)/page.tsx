import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { BillboardComponent } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("788a984b-9c24-4973-836f-c1af3d377bf4");

  return (
    <Container>
      <BillboardComponent data={billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
