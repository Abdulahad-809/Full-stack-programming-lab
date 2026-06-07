export default function SectionTitle({ children, eyebrow }) {
  return (
    <div className="mb-8 text-center">
      {eyebrow ? <p className="text-xs font-semibold uppercase text-plank-orange">{eyebrow}</p> : null}
      <h2 className="serif-title text-3xl text-plank-ink">{children}</h2>
    </div>
  );
}
