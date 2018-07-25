(function($) {
  var	elems = $([]),
      timeout_id;
  $.event.special.resize = {
      setup: function() {
          var elem = $(this);
          elems = elems.add(elem);
          elem.data('resize', {w: elem.width(), h: elem.width()});
          if(elems.length === 1)
              poll();
      },
      teardown: function() {
          var elem = $(this);
          elems = elems.not(elem);
          elem.removeData('resize');
          if(elems.length === 0)
              clearTimeout(timeout_id);
      }
  };
  function poll() {
      elems.each(function() {
          var elem = $(this), width = elem.width(), height = elem.height(), data = elem.data('resize');
          if(width !== data.w || height !== data.h) {
              data.w = width;
              data.h = height;
              elem.triggerHandler('resize');
          }
      });
      timeout_id = setTimeout(poll, 250);
  };
})(jQuery);
