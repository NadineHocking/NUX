"use client";

import { useState } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiSass,
  SiFigma,
} from "react-icons/si";

import SkillCard from "./SkillCard";

const CATEGORY_LABELS = {
  all: "All",
  development: "Development",
  design: "UI/UX Design",
};

const ICONS = {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiSass,
  SiFigma,
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
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {CATEGORY_LABELS[category] || category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {visibleSkills.map((skill) => {
          const Icon = ICONS[skill.icon];

          return (
            <SkillCard
              key={skill.name}
              name={skill.name}
              category={skill.category}
              icon={Icon}
            />
          );
        })}
      </div>
    </div>
  );
}