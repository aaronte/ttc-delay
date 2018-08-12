<template>
  <div>
    <div style="max-width: 900px;">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 982.67 601.43">
        <path id="line1" d="M557.78,136.25V557.61a5.64,5.64,0,0,1-5.65,5.64H485.8a5.64,5.64,0,0,1-5.65-5.64V403.25a5.65,5.65,0,0,0-5.65-5.65H420.55a5.63,5.63,0,0,1-5.64-5.64V365.28a5.66,5.66,0,0,0-1.66-4l-18.79-18.79a13.34,13.34,0,0,1-3.91-9.43V183.4a13.13,13.13,0,0,0-3.83-9.26L287.93,75.35a5.54,5.54,0,0,1-1.63-3.94V31.89" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10" />
        <polyline id="line2" points="33.59 403.92 795.73 403.92 913.59 286.06" style="fill:none;stroke:#fff;stroke-miterlimit:10" />
        <line id="line3" x1="557.78" y1="191.28" x2="716.86" y2="191.28" style="fill:none;stroke:#fff;stroke-miterlimit:10" />
        <circle id="finch" title="finch" cx="557.84" cy="138.05" r="0.5" style="fill:#606060" />
        <circle id="north-york-center" cx="557.78" cy="164.67" r="0.5" style="fill:#606060" />
        <circle id="sheppard-yonge" cx="557.78" cy="191.28" r="0.5" style="fill:#606060" />
        <circle id="sheppard-west" cx="390.55" cy="191.28" r="0.5" style="fill:#606060" />
        <circle id="york-mills" cx="557.78" cy="217.85" r="0.5" style="fill:#606060" />
        <circle id="lawrence" cx="557.78" cy="244.43" r="0.5" style="fill:#606060" />
        <circle id="eglinton" cx="557.78" cy="271" r="0.5" style="fill:#606060" />
        <circle id="wilson" cx="390.55" cy="218.27" r="0.5" style="fill:#606060" />
        <circle id="yorkdale" cx="390.55" cy="244.43" r="0.5" style="fill:#606060" />
        <circle id="lawrence-west" cx="390.55" cy="271" r="0.5" style="fill:#606060" />
        <circle id="davisville" cx="557.78" cy="297.57" r="0.5" style="fill:#606060" />
        <circle id="glencairn" cx="390.55" cy="297.63" r="0.5" style="fill:#606060" />
        <circle id="st-clair" cx="557.78" cy="324.15" r="0.5" style="fill:#606060" />
        <circle id="vaughan-metropolitan-center" cx="286.3" cy="31.89" r="0.5" style="fill:#343434" />
        <circle id="highway-407" cx="286.3" cy="58.44" r="0.5" style="fill:#141414" />
        <circle id="pioneer-village" cx="297.62" cy="85.05" r="0.5" style="fill:#606060" />
        <circle id="york-university" cx="324.17" cy="111.59" r="0.5" style="fill:#606060" />
        <circle id="finch-west" cx="350.9" cy="138.32" r="0.5" style="fill:#606060" />
        <circle id="downsview-park" cx="377.54" cy="164.96" r="0.5" style="fill:#606060" />
        <circle id="eglinton-west" cx="390.55" cy="324.13" r="0.5" style="fill:#606060" />
        <circle id="summerhill" cx="557.78" cy="350.72" r="0.5" style="fill:#606060" />
        <circle id="st-clair-west" cx="402.71" cy="350.74" r="0.5" style="fill:#606060" />
        <circle id="rosedale" cx="557.78" cy="377.3" r="0.5" style="fill:#606060" />
        <circle id="spadina" cx="414.91" cy="377.24" r="0.5" style="fill:#606060" />
        <circle id="bloor-yonge" cx="557.78" cy="403.92" r="0.5" style="fill:#606060" />
        <circle id="wellesley" cx="557.78" cy="430.44" r="0.5" style="fill:#606060" />
        <circle id="college" cx="557.78" cy="457.02" r="0.5" style="fill:#606060" />
        <circle id="dundas" cx="557.78" cy="483.59" r="0.5" style="fill:#606060" />
        <circle id="queen" cx="557.78" cy="510.17" r="0.5" style="fill:#606060" />
        <circle id="king" cx="557.78" cy="536.74" r="0.5" style="fill:#606060" />
        <circle id="museum" cx="480.15" cy="430.44" r="0.5" style="fill:#606060" />
        <circle id="st-george" cx="480.16" cy="403.92" r="0.5" style="fill:#606060" />
        <circle id="queen-s-park" cx="480.15" cy="457.02" r="0.5" style="fill:#606060" />
        <circle id="st-patrick" cx="480.16" cy="483.59" r="0.5" style="fill:#606060" />
        <circle id="osgoode" cx="480.15" cy="510.17" r="0.5" style="fill:#606060" />
        <circle id="st-andrew" cx="480.15" cy="536.74" r="0.5" style="fill:#606060" />
        <circle id="union" cx="519.71" cy="563.25" r="0.5" style="fill:#606060" />
        <rect x="429.95" y="397.1" width="1" height="7.34" rx="0.5" ry="0.5" style="fill:#606060" />
      </svg>
    </div>
  </div>
</template>

<script>
import { delays } from '../data/delays.js';
import { delayColors } from '../data/delay-colors';

import MonthButton from './MonthButton';

import * as tinycolor from 'tinycolor2';

export default {
  name: 'MapView',
  props: ['monthSelected'],
  components: {
    MonthButton
  },
  methods: {
    buildCircles: function(month) {
      const monthSelected = month;
      const maxRadius = 30;
      const maxDelayCount = delays[monthSelected][0].delaysCount;

      delays[monthSelected].forEach(it => {
        const element = document.querySelector(`#${it.station}`);
        if (!element) {
          return;
        }

        const colorsLength = delayColors.length;
        const currentToMaxRatio = it.delaysCount / maxDelayCount;
        const colorIndex = Math.min(
          Math.floor(currentToMaxRatio * colorsLength),
          colorsLength - 1
        );
        const desiredColor = delayColors[colorIndex];
        const colorObject = tinycolor(desiredColor);
        colorObject.setAlpha(0.75);

        element.style.fill = colorObject.toRgbString();

        const targetSize = currentToMaxRatio * maxRadius;
        let currentSize = parseInt(element.getAttribute('r'));
        const isIncreasing = targetSize >= currentSize;

        const intervalId = setInterval(() => {
          if (isIncreasing) {
            if (currentSize >= targetSize) {
              clearInterval(intervalId);
              return;
            }
            element.setAttribute('r', ++currentSize);
            return;
          }

          if (currentSize <= targetSize) {
            clearInterval(intervalId);
            return;
          }
          element.setAttribute('r', --currentSize);
        }, 20);
      });
    }
  },
  mounted: function() {
    this.buildCircles(this.monthSelected);
  },
  watch: {
    monthSelected: function(changed) {
      this.buildCircles(changed);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
