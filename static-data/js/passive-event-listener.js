jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
    this.addEventListener("touchstart", handle, { passive: true });
  }
};