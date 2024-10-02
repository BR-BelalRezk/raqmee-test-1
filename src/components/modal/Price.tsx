type props = {
  price: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Price({ price, handleChange }: props) {
  return (
    <div className="flex items-start justify-start flex-col gap-2.5 w-full">
      <label htmlFor="price">Price</label>
      <input
        value={price}
        onChange={handleChange}
        type="number"
        name="price"
        placeholder="00.00"
        id="price"
        className="border-border border h-11 relative px-3  rounded-radius focus:outline-border w-full placeholder:absolute placeholder:right-3"
      />
    </div>
  );
}
