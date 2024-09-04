<template>
  <div class="thesis-myths" :style="containerStyle">
    <div 
      v-for="(item, index) in myths" 
      :key="index" 
      class="myth-card" 
      :style="cardStyle" 
      @click="toggleExpand(index)"
    >
      <div class="myth" :style="mythStyle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="iconStyle">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <span>Myth: {{ item.myth }}</span>
      </div>
      <div class="reality" :style="realityStyle(index)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38A169" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="iconStyle">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <span>Reality: {{ item.reality }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedItems: [],
      myths: [
        { myth: "All good thesis opportunities are posted online", reality: "Many opportunities are found through networking" },
        { myth: "No response means no interest", reality: "Be patient and follow up appropriately" },
        { myth: "You need to meet all requirements to apply", reality: "Apply if you meet most requirements; show potential" },
        { myth: "Apply to as many projects as possible", reality: "Focus on quality and fit over quantity" }
      ]
    }
  },
  computed: {
    containerStyle() {
      return {
        padding: '1rem',
        fontFamily: 'Arial, sans-serif'
      }
    },
    headingStyle() {
      return {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: '#2D3748'
      }
    },
    cardStyle() {
      return {
        marginBottom: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }
    },
    mythStyle() {
      return {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
        color: 'black',
      }
    },
    iconStyle() {
      return {
        marginRight: '0.5rem',
        flexShrink: 0,
      }
    }
  },
  methods: {
    toggleExpand(index) {
      if (this.expandedItems.includes(index)) {
        this.expandedItems = this.expandedItems.filter(item => item !== index);
      } else {
        this.expandedItems.push(index);
      }
    },
    realityStyle(index) {
      return {
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        opacity: this.expandedItems.includes(index) ? 1 : 0,
        maxHeight: this.expandedItems.includes(index) ? '100px' : '0',
        overflow: 'hidden',
        transition: 'all 0.5s ease',
      }
    }
  }
};
</script>