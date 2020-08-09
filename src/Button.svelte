<script>
  export let title = undefined
  export let type = 'default'
  export let disabled = false
</script>

<style lang="scss">
  @import 'style/variables';

  .mg-button {
    display: inline-block;
    width: 100%;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
    padding: 12px 20px;
    border-radius: $--border-radius;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: 0.1s;
    &.disabled {
      &,
      &:hover,
      &:focus {
        fill: $--color-text-disabled !important;
        color: $--color-text-disabled !important;
        cursor: not-allowed;
        background-image: none;
        background-color: $--color-white !important;
        border-color: $--color-border-light !important;
      }
    }
    &.default {
      color: $--color-text-primary;
      background-color: $--color-white;
      border: 1px solid $--color-border;
      &:hover,
      &:focus {
        color: $--color-primary;
        background-color: $--color-primary-light-9;
        border-color: $--color-primary-light-7;
      }
      &:active {
        color: $--color-primary;
        background-color: $--color-white;
        border-color: $--color-primary-dark-1;
      }
    }
    &.primary {
      color: $--color-white;
      background-color: $--color-primary;
      border: 1px solid $--color-primary;
      &:hover,
      &:focus {
        color: $--color-white;
        background-color: $--color-primary-light-1;
        border-color: $--color-primary-light-1;
      }
      &:active {
        color: $--color-white;
        background-color: $--color-primary-dark-1;
        border-color: $--color-primary-dark-1;
      }
    }
  }
</style>

<button class="mg-button {type}" {...$$props} class:disabled on:click>
  <slot></slot>
</button>
