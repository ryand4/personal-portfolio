import { useState, useEffect } from "react";

const parseExperience = (mdContent) => {
  const experience = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const company = line.substr(3).trim();
      const positionLine = lines[++i]
        .substr(2)
        .split("|")
        .map((s) => s.trim());
      const position = positionLine[0].slice(1, -1);
      const duration = positionLine[1].trim();
      const imageLine = lines[++i];
      const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
      const tags = lines[++i].split(":")[1].trim().split(",");  // Ensure tags are parsed as an array
      const badges = [];
      const listItems = [];

      while (lines[++i] && !lines[i].startsWith("- Badges:")) {}
      while (lines[++i] && lines[i].startsWith("  - ")) {
        const badgeLine = lines[i].substr(4).split("[");
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1].split("]")[0].trim();
        badges.push({ name: badgeName, colorScheme: badgeColor });
      }

      while (lines[++i] && lines[i].startsWith("  - ")) {
        listItems.push(lines[i].substr(4));
      }

      experience.push({
        image,
        company,
        position,
        duration,
        badges,
        listItems,
        tags,
      });
    }
  }

  console.log("Parsed Experience:", experience);  // Add this for debugging

  return experience;
};

const ExperienceArray = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/content/Experience.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        console.log("Markdown Content:", mdContent);  // Add this for debugging
        setExperience(parseExperience(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return experience;
};

export default ExperienceArray;
