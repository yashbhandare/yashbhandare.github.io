import randomizeOrder from "../constants/randomizeOrder";

export default function Gallery() {
  const importAll = (r) => {
    return r.keys().map((key) => ({
      src: r(key),
      name: key.replace("./", ""),
    }));
  };

  const images = importAll(require.context("../public/images/gallery", false, /\.(png|jpe?g|svg)$/));

  const photos = randomizeOrder(images).map(it => ({
    src: it.src.default.src,
  }))

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "16px",
        alignItems: "center",
        backgroundImage: "url('/images/music-bg-image.webp')",
        backgroundSize: "cover",
        padding: "10% 10%",
      }}
    >
      {photos.map((image, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "8px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(3)";
            e.currentTarget.style.zIndex = "10";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.zIndex = "1";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          <img
            src={image.src}
            alt={image.name}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      ))}
    </div>
  );

}
