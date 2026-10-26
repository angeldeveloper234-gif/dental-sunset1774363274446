import { Services } from "../../src/site-pages/Services";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Tratamientos dentales",
  "Explora ocho áreas: prevención, estética, ortodoncia, implantes, endodoncia, encías y atención infantil.",
  "/services",
);
export default function Page() {
  return <Services />;
}
