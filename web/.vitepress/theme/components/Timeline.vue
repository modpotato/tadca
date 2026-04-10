<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})

const activeEvent = ref(null)

const sortedEvents = computed(() => {
  return [...props.events].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateA - dateB
  })
})

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const toggleEvent = (index) => {
  activeEvent.value = activeEvent.value === index ? null : index
}
</script>

<template>
  <div class="timeline">
    <div class="timeline-line"></div>
    
    <div 
      v-for="(event, index) in sortedEvents" 
      :key="index"
      class="timeline-event"
      :class="{ 'active': activeEvent === index, 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
      @click="toggleEvent(index)"
    >
      <div class="timeline-dot" :class="event.type || 'default'"></div>
      
      <div class="timeline-content">
        <div class="timeline-date">{{ formatDate(event.date) }}</div>
        <h3 class="timeline-title">{{ event.title }}</h3>
        <p v-if="event.description" class="timeline-description">
          {{ event.description }}
        </p>
        <div v-if="event.details && activeEvent === index" class="timeline-details">
          <ul v-if="Array.isArray(event.details)">
            <li v-for="(detail, i) in event.details" :key="i">{{ detail }}</li>
          </ul>
          <p v-else>{{ event.details }}</p>
        </div>
        <span v-if="event.details" class="timeline-expand">
          {{ activeEvent === index ? '▲ Hide' : '▼ Details' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  padding: 2rem 0;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #333;
  transform: translateX(-50%);
}

.timeline-event {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  cursor: pointer;
}

.timeline-event.left {
  left: 0;
  text-align: right;
  padding-right: 2.5rem;
}

.timeline-event.right {
  left: 50%;
  text-align: left;
  padding-left: 2.5rem;
}

.timeline-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #555;
  border: 2px solid #222;
  top: 1.5rem;
  z-index: 2;
}

.timeline-event.left .timeline-dot {
  right: -6px;
}

.timeline-event.right .timeline-dot {
  left: -6px;
}

.timeline-dot.lore {
  background: #dc2626;
}

.timeline-dot.website {
  background: #2563eb;
}

.timeline-dot.episode {
  background: #dc2626;
}

.timeline-dot.milestone {
  background: #2563eb;
}

.timeline-content {
  background: #1a1a1a;
  border: 1px solid #222;
  border-radius: 6px;
  padding: 1rem 1.25rem;
}

.timeline-content:hover {
  border-color: #333;
}

.timeline-date {
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-title {
  font-size: 1rem;
  color: #e5e5e5;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.timeline-description {
  font-size: 0.9rem;
  color: #999;
  margin: 0;
  line-height: 1.5;
}

.timeline-details {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #222;
}

.timeline-details ul {
  margin: 0;
  padding-left: 1.2rem;
}

.timeline-details li {
  color: #888;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
}

.timeline-details p {
  color: #888;
  font-size: 0.85rem;
  margin: 0;
}

.timeline-expand {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #555;
}

@media (max-width: 768px) {
  .timeline-line {
    left: 16px;
  }
  
  .timeline-event {
    width: 100%;
    left: 0 !important;
    text-align: left !important;
    padding-left: 2.5rem !important;
    padding-right: 1rem !important;
  }
  
  .timeline-dot {
    left: 10px !important;
    right: auto !important;
  }
}
</style>
