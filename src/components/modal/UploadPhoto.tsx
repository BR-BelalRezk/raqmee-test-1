import Image from "next/image";
import { useRef } from "react";

type props = {
  photo: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadPhoto({ handleChange, photo }: props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-start gap-2.5 flex-col justify-start w-full">
      <label htmlFor="photo">Upload photo</label>
      <div className=" h-44 w-full border-border border rounded-radius cursor-pointer">
        <input
          type="file"
          name="photo"
          accept="image/*"
          id="photo"
          className="hidden"
          ref={ref}
          onChange={handleChange}
        />
        <div
          onClick={() => ref.current?.click()}
          className="size-full flex items-center justify-center"
        >
          {photo ? (
            <figure className="flex items-center justify-center size-32 border-main border rounded-full">
              <Image
                src={photo}
                alt="img"
                width={50}
                height={50}
                className="size-full object-cover"
              />
            </figure>
          ) : (
            <span className="flex items-center justify-center border border-main rounded-radius w-36 h-11">
              Upload photo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
