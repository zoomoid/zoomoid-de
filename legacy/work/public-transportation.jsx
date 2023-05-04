import Layout from "components/layout/Layout";
import PublicTransportation from "components/work-sections/PublicTransportation";

export default function PublicTransportationPage() {
  return (
    <Layout theme={{ text: "text-white", bg: "bg-black" }}>
      <PublicTransportation />
    </Layout>
  );
}
