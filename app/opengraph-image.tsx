import { ImageResponse } from "next/og";

export const alt = "ClearPath Technologies — We engineer operational excellence.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0B1220",
          color: "#F8FAFC",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040, width: "100%" }}>
          <div style={{ color: "#14B8A6", display: "flex", fontSize: 24, letterSpacing: 3, textTransform: "uppercase" }}>
            ClearPath Technologies
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 650, letterSpacing: -3, lineHeight: 1.05, marginTop: 46 }}>
            We engineer operational excellence.
          </div>
          <div style={{ color: "#CBD5E1", display: "flex", fontSize: 28, marginTop: 42 }}>
            Technology is our tool. Business outcomes are our product.
          </div>
        </div>
      </div>
    ),
    size,
  );
}


