type props = {
  description: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Description({ description, handleChange }: props) {
  return (
    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={description}
        onChange={handleChange}
        className="border-border border p-3 rounded-radius min-h-36 max-h-36 w-full focus:outline-border"
      />
    </div>
  );
}
