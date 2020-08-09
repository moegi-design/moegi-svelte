<script>
  export let label = undefined
  export let placeholder = null
  export let type = 'text'
  export let value = undefined
  export let group = undefined
  export let min = undefined
  export let max = undefined
  export let id = undefined
</script>

<style lang="scss">
  @import 'style/variables';

  .mg-input {
    display: inline-block;
    label {
      color: $--color-text-regular;
    }
    input {
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: $--color-text-regular;
      outline: none;
      padding: 0 15px;
      background-color: $--color-white;
      border-radius: $--border-radius;
      font-size: 14px;
      border: 1px solid $--color-border;
      transition: border-color 0.2s ease;
      box-sizing: border-box;
      &::placeholder {
        color: $--color-text-placeholder;
      }
      &:hover {
        outline: none;
        border-color: $--color-border-dark;
      }
      &:focus {
        outline: none;
        border-color: $--color-primary;
      }
    }
    label > input {
      cursor: pointer;
    }
  }
</style>

<div class="mg-input" {...$$props}>
  {#if type === 'number'}
    {#if label}
      <label>{label}</label>
    {/if}
    <input type="number" {placeholder} bind:value {min} {max} />
  {:else if type === 'text'}
    {#if label}
      <label>{label}</label>
    {/if}
    <input type="text" {placeholder} bind:value />
  {:else if type === 'file'}
    {#if label}
      <label>{label}</label>
    {/if}
    <input type="file" bind:value />
  {:else if type === 'radio'}
    <input type="radio" bind:group {value} {id} />
  {:else if type === 'checkbox'}
    <input type="checkbox" bind:group {value} />
  {/if}
</div>
