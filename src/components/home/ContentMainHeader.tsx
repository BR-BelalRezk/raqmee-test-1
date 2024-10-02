import Modal from "../modal/Modal";
import ProductsList from "../ui/ProductsList";

export default function ContentMainHeader() {
  return (
    <section className=" mt-10 lg:mt-0">
      <div className="container mx-auto px-3 md:px-5">
        <Modal />
        <ProductsList />
      </div>
    </section>
  );
}
