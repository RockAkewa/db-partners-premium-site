import { useEffect } from "react";
import { DbPartnersOnePager } from "@/components/dbp/DbPartnersOnePager";

const Index = () => {
  useEffect(() => {
    document.title = "DB Partners | HR, Transformation & IR Consulting";

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta(
      "description",
      "DB Partners is a South African consulting company providing HR, Transformation and Industrial Relations support with practical operational solutions and legislative compliance.",
    );
  }, []);

  return (
    <main>
      <h1 className="sr-only">DB Partners</h1>
      <DbPartnersOnePager />
    </main>
  );
};

export default Index;
