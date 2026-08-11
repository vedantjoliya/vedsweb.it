import React from 'react';

export const ProjectPreviewFrame = ({ imageUrl, title }) => {
  return (
    <div className="w-full h-full bg-[#FAF8F5] relative overflow-hidden">
      <img
        src={imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'}
        alt={title}
        className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </div>
  );
};
