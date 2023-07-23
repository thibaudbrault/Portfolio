type Props = {
  images: {
    src: string;
    alt: string;
  }[];
};

export const Slider = ({ images }: Props) => {
  return (
    <>
      {images.map((image, i) => (
        <img
          className="rounded-md border border-stone-200"
          src={image.src}
          alt={image.alt}
          key={i}
        />
      ))}
    </>
  );
};
