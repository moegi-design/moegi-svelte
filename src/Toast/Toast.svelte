<div class="toast-container {_position}">
  <div class="toast {type}">{msg}</div>
</div>

<script>
  export let msg = ''
  export let type = ''
  export let position = 'bottom-center'
  $: _position = position.split('-').join(' ')
</script>

<style lang="scss">
  @import '../style/variables';

  .toast-container {
    position: fixed;
    z-index: 999;
  }
  .top {
    top: 15px;
  }
  .bottom {
    bottom: 65px;
  }
  .left {
    left: 15px;
  }
  .right {
    right: 15px;
  }
  .center {
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
  }
  .toast {
    height: 38px;
    line-height: 38px;
    padding: 0 20px;
    color: #FFF;
    border-radius: 6px;
    -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;
    transition: opacity 0.2s, transform 0.2s, -webkit-transform 0.2s;
    -webkit-transform: translateY(35px);
    transform: translateY(35px);
    opacity: 0;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info {
    background-color: #0091EA;
  }
  .success {
    color: $--color-success;
    background-color: $--color-success-light;
  }
  .error {
    color: $--color-danger;
    background-color: $--color-danger-light;
  }
  .default {
    color: $--color-info;
    background-color: $--color-info-light;
  }
  .anim {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
</style>