import Image from "next/image";

interface Character {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default function MavelCaractor({ name, thumbnail }: Character) {
  // console.log(thumbnail.path + "." + thumbnail.extension);
  return (
    <>
      <div>
        <Image
          src={thumbnail.path + "." + thumbnail.extension}
          width={500}
          height={1500}
          alt={name}
        />
        <h1>{name}</h1>
      </div>
    </>
  );
}
