export function ImageWithCaption({
  src,
  caption,
  alt,
}: {
  src: string;
  caption: string;
  alt: string;
}) {
  return (
    <figure className="flex flex-col gap-3 items-center border border-dotted border-border rounded-3xl p-3 pb-4">
      <img
        src={src}
        alt={alt || caption}
        className="w-full rounded-[14px] object-cover"
      />
      <figcaption className="text-border-foreground">{caption}</figcaption>
    </figure>
  );
}
