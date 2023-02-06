type SampleProps = { title: string; brand: string };
export function Sample({ title, brand }: SampleProps) {
  const cssClass = "sample";

  return (
    <div className={cssClass}>
      <p>
        <strong>{title.toUpperCase()}</strong>
      </p>
      <address>{brand}</address>
    </div>
  );
}
