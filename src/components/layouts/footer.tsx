import Header from "./header";

export default function Footer() {
  return (
    <>
      <Header as="footer" />
      <p style={{ margin: 0, padding: "16px 20px 24px", textAlign: "center", background: "#ffffff", color: "#191919", fontFamily: "var(--font-manrope), sans-serif", fontSize: 13 }}>
        &copy; {new Date().getFullYear()} Muhammad Omair. All rights reserved.
      </p>
    </>
  );
}
