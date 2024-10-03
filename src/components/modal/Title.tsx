type props = {
  title: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Title({ title, handleChange }: props) {
  return (
    <div className="flex items-start gap-2.5 flex-col justify-start w-full">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleChange}
        className=" border-border border h-11 pl-3 focus:outline-border rounded-radius w-full"
      />
    </div>
  );
}
