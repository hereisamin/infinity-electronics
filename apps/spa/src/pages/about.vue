<script setup lang="ts">
const companyValues = [
  {
    icon: 'mdi:lightbulb',
    title: 'Innovation',
    description: 'We constantly push boundaries to bring you the latest technological advancements.'
  },
  {
    icon: 'mdi:heart',
    title: 'Customer Focus',
    description: 'Your satisfaction is our top priority, and we go above and beyond to exceed expectations.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Quality',
    description: 'We maintain the highest standards in everything we do, from product selection to service delivery.'
  }
]

const storyParagraphs = [
  'Founded in 2020, Infinity Electronics emerged from a vision to revolutionize the electronics retail industry. Our journey began with a simple idea: to create a shopping experience that combines cutting-edge technology with exceptional customer service.',
  'What started as a small local store has grown into a nationwide presence, serving customers across the country. Our success is built on the trust and loyalty of our customers, who have been with us every step of the way.',
  'Today, we continue to innovate and expand, always staying true to our core values and commitment to excellence.'
]
</script>

<template>
  <div>
    <AboutHero
      title="About Infinity Electronics"
      subtitle="Your Trusted Partner in Electronics" />

    <AboutCompanyOverview />

    <AboutMissionValues
      title="Our Mission & Values"
      subtitle="We're committed to providing the best electronics shopping experience while maintaining the highest standards of quality and service."
      :values="companyValues" />

    <AboutCompanyStory
      title="Our Story"
      :paragraphs="storyParagraphs"
      image-src="/images/about/story.jpg"
      image-alt="Our Journey" />
  </div>
</template>
