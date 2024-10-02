type props = {
  category: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Category({ category, handleChange }: props) {
  return (
    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
      <label htmlFor="category">Category</label>
      <select
        value={category}
        onChange={handleChange}
        name="category"
        id="category"
        className="w-full border border-border focus:outline-border rounded-radius h-11"
      >
        <option value="">Select</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
    </div>
  );
}
