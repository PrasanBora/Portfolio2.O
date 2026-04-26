import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMongodb,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiNestjs,
  SiAmazonaws,
  SiVercel,
  SiFigma,
  SiOpenai,
  SiPrisma,
  SiExpress,
  SiExpo,
  SiSocketdotio,
  SiStrapi,
  SiGithubactions,
  SiJest,
  SiPostman,
  SiSentry,
  SiAndroidstudio,
  SiXcode,
  SiTerraform,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiBarChart2 } from "react-icons/fi";

const STACK = [
  // Frontend
  { Icon: DiJavascript1, name: "JavaScript" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: DiReact, name: "React.js" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: TbBrandReactNative, name: "React Native" },
  { Icon: SiExpo, name: "Expo" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  // Backend
  { Icon: CgCPlusPlus, name: "C++" },
  { Icon: DiNodejs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiNestjs, name: "NestJS" },
  { Icon: SiSocketdotio, name: "Socket.io" },
  { Icon: SiPrisma, name: "Prisma" },
  { Icon: SiStrapi, name: "Strapi" },
  // Databases
  { Icon: DiMongodb, name: "MongoDB" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiRedis, name: "Redis" },
  // Tools & Infra
  { Icon: DiGit, name: "Git" },
  { Icon: SiGithubactions, name: "GH Actions" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiJest, name: "Jest" },
  { Icon: SiPostman, name: "Postman" },
  { Icon: SiSentry, name: "Sentry" },
  { Icon: FiBarChart2, name: "PostHog" },
  { Icon: SiAndroidstudio, name: "Android Studio" },
  { Icon: SiXcode, name: "Xcode" },
  { Icon: SiOpenai, name: "OpenAI" },
  { Icon: SiFigma, name: "Figma" },
  { Icon: SiAmazonaws, name: "AWS" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiTerraform, name: "Terraform" },
];

export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {STACK.map(({ Icon, name }) => (
        <Col xs={4} md={2} className="tech-icons" title={name} key={name}>
          <Icon aria-hidden />
          <span className="tech-icon-name">{name}</span>
        </Col>
      ))}
    </Row>
  );
}
