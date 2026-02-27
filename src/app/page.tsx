import Home from "@/components/page";
import "./page.css";


export const metadata = {
  title: "Building in Public",
  description:
    "A personal one-page site about learning web development in public.",
};

export default function RootLayout() {
  return (
      <html>
        <body>
          <Home />
        </body>
      </html>
  );
}
