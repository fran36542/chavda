"use client";

import { useEffect, useState } from 'react';

const softSkills = [
  "UX Research Master", "Creativity", "Problem Solving", "Leadership", 
  "Communication", "Team Work", "Curiosity", "Techy Boy", 
  "Quick Learner", "Friendly Boy", "Emotionally Intelligent", 
  "Love to connect"
];

const SkillCircle = ({ skills, radius, startAngle, textClass }: { skills: string[], radius: number, startAngle: number, textClass: string }) => {
  return (
    <>
      {skills.map((skill, index) => {
        const angle = startAngle + (index / skills.length) * 2 * Math.PI;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        return (
          <div
            key={skill}
            className={`absolute bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-center ${textClass}`}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              minWidth: '6rem',
            }}
          >
            {skill}
          </div>
        );
      })}
    </>
  );
};

const SoftSkills = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const skills1 = softSkills.slice(0, 6);
  const skills2 = softSkills.slice(6, 12);

  return (
    <div className="absolute inset-0">
      <SkillCircle skills={skills1} radius={35} startAngle={-Math.PI / 2} textClass="text-xs" />
      <SkillCircle skills={skills2} radius={50} startAngle={-Math.PI / 3} textClass="text-sm" />
    </div>
  );
};

export default SoftSkills;
