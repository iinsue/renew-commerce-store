import getBillboard from "@/actions/get-billboard";
import { BillboardComponent } from "@/components/billboard";
import { Container } from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("788a984b-9c24-4973-836f-c1af3d377bf4");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <BillboardComponent data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
