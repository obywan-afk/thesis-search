import React, { useEffect, useRef } from 'react';

import mermaid from 'mermaid';

const FullscreenMermaidChart = () => {

 const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.render("mermaid-chart", `
      gantt
        dateFormat  YYYY-MM-DD
        todayMarker stroke-width:2px,stroke:#ff0000,opacity:0.5
        axisFormat %b ' %y
        tickInterval 1month

        section Ideal Timeline
        Research Opportunities   :done, a1, 2024-08-28, 60d
        Network & Apply          :active, a2, 2024-10-01, 47d
        Secure Thesis            : a3, 2024-11-01, 30d
        Hiring Process           :a4, 2024-11-15, 30d
        Enjoy Christmas          :a4, 2024-12-17, 14d
        section Thesis Start
        Dream Internship         :milestone, b2, 2025-01-01, 0d
        section Avoid Last Minute
        Stressful Search        :crit, b1, 2024-11-15, 47d
        section Thesis Work
    `).then((svgCode) => {
      if (ref.current) {
        ref.current.innerHTML = svgCode;
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-white">
      <div ref={ref} className="w-full h-full" />
    </div>
  );
};

export default FullscreenMermaidChart;