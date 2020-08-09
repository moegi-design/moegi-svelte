<script>
  export let label = undefined
  export let type = 'text'
  export let multiple = false
  export let value
</script>

<style lang="scss">
  @import 'style/variables';

  .mg-select {
    position: relative;
    display: inline-block;
    select {
      width: 100%;
      color: $--color-text-regular;
      padding: 0 15px;
      background-color: $--color-white;
      font-size: 14px;
      height: 40px;
      line-height: 1;
      cursor: pointer;
      border: 1px solid $--color-border;
      transition: border-color 0.2s ease;
      box-sizing: border-box;
      border-radius: $--border-radius;
      appearance: none;
      outline: none;
      &:hover {
        outline: none;
        border-color: $--color-border-dark;
      }
      &:focus {
        outline: none;
        border-color: $--color-primary;
      }
    }
    svg {
      position: absolute;
      top: 0;
      right: 1rem;
      height: 100%;
      pointer-events: none;
      fill: $--color-border;
    }
  }
</style>

<div class="mg-select" {...$$props}>
  <select {type} bind:value>
    <slot></slot>
  </select>
  <svg
    viewBox="0 0 16 16"
    data-carbon-icon="ChevronDown16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="16"
    height="16"
    class="bx--select__arrow"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    focusable="false">
    <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z" />
  </svg>
</div>
