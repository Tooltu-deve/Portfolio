export default function TextureOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        backgroundImage: "url(/texture.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "lighten",
        opacity: 0.6,
      }}
    />
  );
}
