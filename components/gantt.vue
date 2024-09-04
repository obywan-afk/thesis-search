<template>
    <div>
      <div v-html="mermaidSvg" @click="handleClick"></div>
    </div>
  </template>
  
  <script>
  import mermaid from 'mermaid';
  
  export default {
    data() {
      return {
        mermaidSvg: '',
      };
    },
    mounted() {
      this.renderMermaid();
    },
    methods: {
      renderMermaid() {
        mermaid.render('mermaid', `
          gantt
          title Master Thesis Search Timeline
          dateFormat  YYYY-MM-DD
          todayMarker stroke-width:2px,stroke:#ff0000,opacity:0.5
          axisFormat %b ' %y
          tickInterval 1month
  
          section Ideal Timeline
          Research Opportunities   :done, a1, 2024-08-28, 60d
          Network & Apply          :active, a2, 2024-10-01, 47d
          Secure Thesis            : a3, 2024-11-01, 30d
          Hiring Process            :a4, 2024-11-15, 30d
          section Scheduled Start
          Thesis Start            :milestone, b2, 2025-01-01, 0d
          section Avoid Last Minute
          Stressful Search        :crit, b1, 2024-11-15, 47d
          section Thesis Work
        `).then(({ svg }) => {
          this.mermaidSvg = svg;
        });
      },
      handleClick(event) {
        const clickedElement = event.target.closest('g.section');
        if (clickedElement) {
          const sectionTitle = clickedElement.querySelector('text.sectionTitle').textContent.trim();
          switch(sectionTitle) {
            case 'Ideal Timeline':
              window.open('https://example.com/ideal-timeline', '_blank');
              break;
            case 'Scheduled Start':
              window.open('https://example.com/scheduled-start', '_blank');
              break;
            case 'Avoid Last Minute':
              window.open('https://example.com/avoid-last-minute', '_blank');
              break;
            case 'Thesis Work':
              window.open('https://example.com/thesis-work', '_blank');
              break;
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .section:hover {
    cursor: pointer;
  }
  </style>