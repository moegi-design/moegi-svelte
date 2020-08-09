<script>
  // import { getEventsAction } from './utils'
  // import { getContext } from 'svelte'
  // import { current_component } from 'svelte/internal'

  // export let tabid = false

  // const events = getEventsAction(current_component)

  // const active_tab = getContext('tabs:active')
  // const id = getContext('tabs:getid')()

  // $: active = $active_tab === tabid || $active_tab === id
</script>

<style lang="scss">
  @import 'style/variables';

  .mg-tab {
    flex: 1;
    height: 40px;
    line-height: 40px;
    color: $--color-text-regular;
    border-bottom: 2px solid $--color-border-light;
    text-align: center;
    &.active {
      color: $--color-primary;
      border-color: $--color-primary;
    }
    &:hover {
      color: $--color-primary;
      cursor: pointer;
    }
  }
</style>

<!--TODO: write issue to chota to replace a by span-->
<!-- <a
  href="/"
  class:active
  use:events
  {...$$restProps}
  on:click|preventDefault={() => active_tab.set(tabid === false ? id : tabid)}>
  <slot />
</a> -->
<span
  class="mg-tab"
  class:active={$selectedTab === tab}
  on:click={() => selectTab(tab)}>
  <slot />
</span>
