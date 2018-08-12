<template>
  <div>
    <p style="color: white; font-weight: 700; font-size: 1.5rem; margin-bottom: 16px;">
      Explore the Rocket 🚀
    </p>
    <p style="color: white; font-size: 18px; margin-bottom: 16px;">
      Month
    </p>
    <MonthButton v-for="month in months" v-bind:key="month.name" v-bind:label="month.name[0].toUpperCase()" v-bind:isSelected="selectedMonth === month.name" v-on:select="selectMonth(month.name);$emit('monthSelect', month.name)" />
  </div>
</template>

<script>
import MonthButton from './MonthButton';

export default {
  components: {
    MonthButton
  },
  data: function() {
    return {
      selectedMonth: 'may',
      months: [
        {
          name: 'january'
        },
        {
          name: 'february'
        },
        {
          name: 'march'
        },
        {
          name: 'april'
        },
        {
          name: 'may'
        },
        {
          name: 'june'
        },
        {
          name: 'july'
        },
        {
          name: 'august'
        },
        {
          name: 'september'
        },
        {
          name: 'october'
        },
        {
          name: 'november'
        },
        {
          name: 'december'
        }
      ]
    };
  },
  name: 'ControlPane',
  props: [],
  mounted: function() {
    this.$emit('monthSelect', 'may');
  },
  methods: {
    selectMonth: function(monthName) {
      this.selectedMonth = monthName;
    }
  }
};
</script>

<style>
</style>
