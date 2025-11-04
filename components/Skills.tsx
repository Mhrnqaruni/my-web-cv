import React from 'react';

const skillsData = {
  programming: [
    'Python', 'C#', 'C++', 'JavaScript', 'Java', 'R', 'SQL', 'MATLAB', 'Assembly'
  ],
  dataScience: [
    'SQL Server', 'PostgreSQL', 'NoSQL', 'Database Management', 'Data Warehouse', 'Data Analytics', 'Statistical Modeling', 'Hadoop', 'Big Data Analysis'
  ],
  artificialIntelligence: [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Data Mining', 'Digital Twin Technology', 'AI Fundamentals', 'Neural Networks'
  ],
};

const SkillCategory: React.FC<{ title: string; skills: string[]; }> = ({ title, skills }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <span key={skill} className="bg-primary/10 text-primary dark:bg-blue-500/20 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Technical Skills
          </h2>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <SkillCategory title="Programming" skills={skillsData.programming} />
          <SkillCategory title="Data Science" skills={skillsData.dataScience} />
          <SkillCategory title="Artificial Intelligence" skills={skillsData.artificialIntelligence} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
