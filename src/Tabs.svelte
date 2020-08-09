<script>
  export let data = []
  export let activeItem
</script>

<style lang="scss">
  @import 'style/variables';

  .mg-tabs {
    display: flex;
    font-size: 14px;
    overflow-x: auto;
    .item {
      flex: 1;
      height: 40px;
      line-height: 40px;
      color: $--color-text-regular;
      border-bottom: 2px solid $--color-border-light;
      text-align: center;
      min-width: 110px;
      &.active {
        color: $--color-primary;
        border-color: $--color-primary;
      }
      &:hover {
        color: $--color-primary;
        cursor: pointer;
      }
    }
  }
</style>

<!-- <nav class:tabs={1} class:is-full={full} use:events {...$$restProps}>
  <slot />
</nav> -->

<div class="mg-tabs">
  {#each data as item}
    <span class="item" class:active={activeItem === item.id} on:click={() => {activeItem = item.id}}>{item.name}</span>
  {/each}
</div>
