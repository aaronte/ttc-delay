<template>
  <div id="app" style="width: 95vw; margin: 0 auto; max-width: 1200px;padding-right: 400px;">
    <div style="margin-bottom: 16px;">
      <b style="font-size: 48px;">Toronto Subway Delays</b>
    </div>
    <div style="margin-bottom: 16px;">
      There have been {{totalDelays}} delays reported in
      <span style="text-transform: capitalize;">{{monthSelected}}</span> 2018.
    </div>
    <MapView v-bind:monthSelected="monthSelected" />
    <div style="position: fixed; width: 300px; top: 56px; right: 24px; padding: 16px 24px; border: 1px solid white;">
      <ControlPane v-on:monthSelect="selectMonth" />
    </div>
  </div>
</template>

<script>
import { delays } from './data/delays';

import ControlPane from './components/ControlPane';
import MapView from './components/MapView.vue';

export default {
  name: 'app',
  components: {
    ControlPane,
    MapView
  },
  data: function() {
    return {
      monthSelected: 'may',
      totalDelays: 0
    };
  },
  methods: {
    selectMonth: function(monthName) {
      this.monthSelected = monthName;
    },
    calculateTotals(monthName) {
      const monthDelays = delays[monthName];
      if (!monthDelays) {
        return;
      }
      this.totalDelays = monthDelays.reduce((acc, item) => {
        return acc + item.delaysCount;
      }, 0);
    }
  },
  mounted: function() {
    this.calculateTotals(this.monthSelected);
  },
  watch: {
    monthSelected: function(currentValue) {
      this.calculateTotals(currentValue);
    }
  }
};
</script>

<style>
</style>
