import { useEffect } from "react";
import { ServiceSplitBlock } from "@/components/dbp/ServiceSplitBlock";

import hrImage from "@/assets/service-human-resources.jpg";
import irImage from "@/assets/service-industrial-relations.jpg";
import transformationImage from "@/assets/service-transformation.jpg";
import trainingImage from "@/assets/service-training.jpg";

const Services = () => {
  useEffect(() => {
    document.title = "Services | DB Partners";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h1 className="font-heading text-3xl font-semibold tracking-tightish md:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Comprehensive consulting across HR, Industrial Relations, Transformation, and Training.
        </p>
      </div>

      <div className="mt-4">
        <ServiceSplitBlock
          title="HUMAN RESOURCES"
          bullets={[
            "Auditing & Development of HR Best Practices",
            "HR Legislative Compliance",
            "HR Optimisation",
            "HR Policy Auditing & Development",
            "Recruitment Management & Selection",
            "Change Management",
            "Payroll",
          ]}
          imageSrc={hrImage}
          imageAlt="Human resources consulting session"
        />
        <ServiceSplitBlock
          reverse
          title="INDUSTRIAL & LABOUR RELATIONS"
          bullets={[
            "Legal compliance in Industrial & Labour legislation",
            "Employment contract review and drafting",
            "Discipline & Performance Management",
            "Incapacity Management",
            "Restructuring (S189)",
          ]}
          imageSrc={irImage}
          imageAlt="Industrial relations consultation and handshake"
        />
        <ServiceSplitBlock
          title="TRANSFORMATION"
          bullets={[
            "Employment Equity Plan development & implementation",
            "EEA compliance audits",
            "Assistance with Department of Labour inspections",
            "HR reporting and submissions",
            "Transformation strategy support",
          ]}
          imageSrc={transformationImage}
          imageAlt="Transformation strategy workshop"
        />
        <ServiceSplitBlock
          reverse
          title="TRAINING & DEVELOPMENT"
          bullets={[
            "Workplace Skills Plan development",
            "Skills Development compliance support",
            "Training facilitation and management",
            "SETA submissions support",
          ]}
          imageSrc={trainingImage}
          imageAlt="Training and development session"
        />
      </div>
    </main>
  );
};

export default Services;
