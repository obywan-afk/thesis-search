<!-- layouts/fullscreen-mermaid.vue -->
<template>
    <div class="slidev-layout fullscreen-mermaid">
      <div class="mermaid-container" ref="container">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  
  const container = ref(null)
  
  const resizeMermaid = () => {
    if (!container.value) return
    const svg = container.value.querySelector('svg')
    if (svg) {
      const containerWidth = container.value.clientWidth
      const containerHeight = container.value.clientHeight
      const svgWidth = parseFloat(svg.getAttribute('width') || svg.getBoundingClientRect().width)
      const svgHeight = parseFloat(svg.getAttribute('height') || svg.getBoundingClientRect().height)
      
      // Increase this value to make the chart larger
      const scaleFactor = 10
      
      const scale = Math.min(containerWidth / svgWidth, containerHeight / svgHeight) * scaleFactor
      
      svg.style.transform = `scale(${scale})`
      svg.style.transformOrigin = 'center'
      svg.style.position = 'absolute'
      svg.style.left = '50%'
      svg.style.top = '50%'
      svg.style.translate = '-50% -50%'
    }
  }
  
  onMounted(() => {
    // Increase this delay if the chart is not rendering immediately
    setTimeout(resizeMermaid, 500)
    window.addEventListener('resize', resizeMermaid)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', resizeMermaid)
  })
  </script>
  
  <style scoped>
  .fullscreen-mermaid {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  .mermaid-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  :deep(svg) {
    max-width: none !important;
    max-height: none !important;
  }
  </style>