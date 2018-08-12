<template>
  <button v-on:click="$emit('select')" class="c-monthButton" style="margin-right: 8px;" v-bind:class="{ 'is-selected': isSelected }" v-bind:disabled="isDisabled">
    <b>{{label}}</b>
  </button>
</template>

<script>
export default {
  name: 'MonthButton',
  props: ['label', 'is-selected', 'is-disabled'],
};
</script>

<style>
.c-monthButton:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
}

.c-monthButton {
    color: white;
    font-size: 13px;
    height: 41px;
    width: 41px;
    background-color: transparent;
    border-radius: 50%;
    border-color: transparent;
}

.c-monthButton:disabled {
    opacity: 0.3;
}

.c-monthButton.is-selected {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255,1);
}
</style>
