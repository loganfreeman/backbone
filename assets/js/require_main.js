requirejs.config({
  baseUrl: "assets/js",
  paths: {
    backbone: "vendor/backbone",
    "backbone.picky": "vendor/backbone.picky",
    "backbone.syphon": "vendor/backbone.syphon",
    jquery: "vendor/jquery",
    "jquery-ui": "vendor/jquery-ui",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage",
    marionette: "vendor/backbone.marionette",
    spin: "vendor/spin",
    "spin.jquery": "vendor/spin.jquery",
    tpl: "vendor/tpl",
    underscore: "vendor/underscore",
    bootstrap: "vendor/bootstrap"
  },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    "backbone.picky": ["backbone"],
    "backbone.syphon": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"],
    "spin.jquery": ["spin", "jquery"],
    'bootstrap/bootstrap-slider': { deps: ['jquery'], exports: '$.fn.slider' }, 
    'bootstrap/bootstrap-affix': { deps: ['jquery'], exports: '$.fn.affix' },
    'bootstrap/bootstrap-alert': { deps: ['jquery'], exports: '$.fn.alert' },
    'bootstrap/bootstrap-button': { deps: ['jquery'], exports: '$.fn.button' },
    'bootstrap/bootstrap-carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
    'bootstrap/bootstrap-collapse': { deps: ['jquery'], exports: '$.fn.collapse' },
    'bootstrap/bootstrap-dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
    'bootstrap/bootstrap-modal': { deps: ['jquery'], exports: '$.fn.modal' },
    'bootstrap/bootstrap-popover': { deps: ['jquery'], exports: '$.fn.popover' },
    'bootstrap/bootstrap-scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'        },
    'bootstrap/bootstrap-tab': { deps: ['jquery'], exports: '$.fn.tab' },
    'bootstrap/bootstrap-tooltip': { deps: ['jquery'], exports: '$.fn.tooltip' },
    'bootstrap/bootstrap-transition': { deps: ['jquery'], exports: '$.support.transition' },
    'bootstrap/bootstrap-typeahead': { deps: ['jquery'], exports: '$.fn.typeahead'  },
  }
});

require(["app", "apps/header/header_app"], function(ContactManager){
  ContactManager.start();
});
