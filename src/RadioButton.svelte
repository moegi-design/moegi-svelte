<script>
  export let label = undefined
  export let placeholder = null
  export let type = 'text'
  export let value = undefined
  export let group = undefined
  export let name = undefined
</script>

<style lang="scss">
  @import 'style/variables';

  .mg-radio-button {
    position: relative;
    display: inline-block;
    outline: none;
    &:hover .inner {
      color: $--color-primary;
    }
    .origin-radio {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
    }
    .inner {
      position: relative;
      display: inline-block;
      outline: none;
      line-height: 1;
      white-space: nowrap;
      vertical-align: middle;
      background: $--color-white;
      border: 1px solid $--color-border;
      border-left: 0;
      color: $--color-text-regular;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      margin: 0;
      cursor: pointer;
      transition: all .3s ease;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 0;
    }
    &:first-child {
      .inner {
        border-left: 1px solid $--color-border;
        border-radius: $--border-radius 0 0 $--border-radius;
      }
    }
    &:last-child {
      .inner {
        border-radius: 0 $--border-radius $--border-radius 0;
      }
    }
  }
</style>

<label class="mg-radio-button" role="radio">
  <input class="origin-radio" type="radio" bind:group value={label} />
  <span class="inner">{label}</span>
</label>
