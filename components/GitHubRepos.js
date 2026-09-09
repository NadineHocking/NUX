"use client";

import { useEffect, useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
} from "react-icons/fi";

import githubProjects from "../data/githubProjects";

const GITHUB_USERNAME = "NadineHocking"; // Replace with your GitHub username

export default function GitHubRepos({
  username = GITHUB_USERNAME,
  limit = 6,
}) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      setStatus("loading");

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );

        if (!response.ok) {
          throw new Error(
            `GitHub API responded with ${response.status}`
          );
        }

        const data = await response.json();

        /*
         * Match GitHub repositories against the curated
         * projects in data/githubProjects.js.
         *
         * The order is controlled by githubProjects.js,
         * not by GitHub's updated date.
         */
        // const featuredRepos = githubProjects
        //   .map((project) => {
        //     const repo = data.find(
        //       (githubRepo) => githubRepo.name === project.name
        //     );

        //     if (!repo) {
        //       return null;
        //     }

        //     return {
        //       ...repo,

        //       // Portfolio content
        //       portfolioTitle: project.title,
        //       portfolioDescription: project.description,
        //       technologies: project.technologies,
        //       category: project.category,
        //     };
        //   })
        //   .filter(Boolean)
        //   .slice(0, limit);

        const featuredRepos = githubProjects
        .map((project) => {
            const repo = data.find(
            (githubRepo) => githubRepo.name === project.name
            );

            // External/group project
            if (!repo && project.githubUrl) {
            return {
                id: project.name,
                name: project.name,
                portfolioTitle: project.title,
                portfolioDescription: project.description,
                technologies: project.technologies,
                category: project.category,
                githubUrl: project.githubUrl,
                contribution: project.contribution,
                language: null,
                stargazers_count: 0,
            };
            }

            // Your own repository
            if (!repo) {
            return null;
            }

            return {
            ...repo,
            portfolioTitle: project.title,
            portfolioDescription: project.description,
            technologies: project.technologies,
            category: project.category,
            contribution: project.contribution,
            githubUrl: repo.html_url,
            };
        })
        .filter(Boolean)
        .slice(0, limit);

        if (!cancelled) {
          setRepos(featuredRepos);
          setStatus("success");
        }
      } catch (error) {
        console.error("GitHub API error:", error);

        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    fetchRepos();

    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  // -------------------------
  // Loading state
  // -------------------------

  if (status === "idle" || status === "loading") {
    return (
      <p className="state-msg">
        Fetching featured projects from GitHub…
      </p>
    );
  }

  // -------------------------
  // Error state
  // -------------------------

  if (status === "error") {
    return (
      <p className="state-msg">
        Couldn't reach the GitHub API right now. Please try again later.
      </p>
    );
  }

  // -------------------------
  // Empty state
  // -------------------------

  if (repos.length === 0) {
    return (
      <p className="state-msg">
        No featured repositories found.
      </p>
    );
  }

  // -------------------------
  // Repository cards
  // -------------------------

  return (
    <div className="github-repos">
      <div className="repo-grid">
        {repos.map((repo) => (
          <article className="repo-card" key={repo.id}>

            {/* Card header */}
            <div className="repo-card-header">
              <FiGithub
                className="repo-icon"
                aria-hidden="true"
              />

              <a
                href={repo.githubUrl}                
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${repo.portfolioTitle} on GitHub`}
              >
                <FiExternalLink
                  className="repo-link-icon"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Category */}
            <div className="repo-category">
              {repo.category}
            </div>

            {/* Project title */}
            <h3>{repo.portfolioTitle}</h3>

            {/* Project description */}
            <p>{repo.portfolioDescription}</p>

             {repo.contribution && (
            <p className="repo-contribution">
                {repo.contribution}
            </p>
            )}

            {/* Technologies */}
            <div className="repo-technologies">
              {repo.technologies?.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

           

            {/* GitHub metadata */}
            <div className="repo-meta">
              <span>
                {repo.language || "Code"}
              </span>

              <span>
                <FiStar aria-hidden="true" />
                {repo.stargazers_count}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* GitHub profile CTA */}
      <div className="github-cta">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-secondary"
        >
          <FiGithub aria-hidden="true" />

          <span>
            View all GitHub projects
          </span>

          <FiExternalLink aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
