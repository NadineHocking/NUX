"use client";

import { useState } from "react";
import {
  FiGrid,
  FiCode,
  FiLayout,
  FiPenTool,
  FiMousePointer,
  FiSearch,
  FiDatabase,
  FiLock,
  FiServer,
  FiActivity,
  FiBarChart2,
  FiUserCheck,
  FiTarget,
  FiStar,
  FiType,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiSass,
  SiWordpress,
  SiPython,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

import SkillCard from "./SkillCard";

const FILTER_ICONS = {
  all: FiGrid,
  development: FiCode,
  "product-design": FiLayout,
  branding: FiPenTool,
  interaction: FiMousePointer,
  research: FiSearch,
};

const CATEGORY_LABELS = {
  all: "All",
  development: "Development",
  "product-design": "Product & UI/UX",
  branding: "Branding & Visual",
  interaction: "Interaction",
  research: "UX Research",
};

const ICONS = {
  // Simple Icons
  SiHtml5,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiSass,
  SiWordpress,
  SiPython,
  SiBootstrap,
  SiFigma,

  // Feather Icons
  FiCode,
  FiDatabase,
  FiLock,
  FiServer,
  FiLayout,
  FiGrid,
  FiUserCheck,
  FiTarget,
  FiPenTool,
  FiStar,
  FiType,
  FiMousePointer,
  FiLayers,
  FiZap,
  FiSearch,
  FiActivity,
  FiBarChart2,
};

export default function SkillsGrid({ skills }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(skills.map((skill) => skill.category)),
  ];

  const visibleSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div>
    <div
        className="filter-row"
        role="group"
        aria-label="Filter skills by category"
        >
        {categories.map((category) => {
            const Icon = FILTER_ICONS[category];
            const active = activeCategory === category;

            return (
            <button
                key={category}
                className={`filter-chip ${active ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
            >
                {Icon && <Icon className="filter-icon" aria-hidden="true" />}
                <span>{CATEGORY_LABELS[category] || category}</span>
            </button>
            );
        })}
    </div>

      <div className="skills-grid">
        {visibleSkills.map((skill) => {
          const Icon = ICONS[skill.icon];

          return (
           <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            icon={Icon}
            />
          );
        })}
      </div>
    </div>
  );
}       
