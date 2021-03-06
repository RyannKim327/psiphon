// Generated by CoffeeScript 1.9.1
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  module.exports = function(BasePlugin) {
    var FatTrimmer;
    return FatTrimmer = (function(superClass) {
      extend(FatTrimmer, superClass);

      function FatTrimmer() {
        return FatTrimmer.__super__.constructor.apply(this, arguments);
      }

      FatTrimmer.prototype.name = 'fattrimmer';

      FatTrimmer.prototype.config = {
        fat: []
      };

      FatTrimmer.prototype.writeBefore = function(opts, next) {
        var config, docpad;
        docpad = this.docpad;
        docpad.log('debug', 'Trimming the fat');
        config = this.config;
        if (!Array.isArray(config.fat)) {
          config.fat = config.fat ? [config.fat] : [];
        }
        opts.collection.forEach(function(document) {
          var fatCheck, i, len, ref;
          if (!document.get('write')) {
            return;
          }
          ref = config.fat;
          for (i = 0, len = ref.length; i < len; i++) {
            fatCheck = ref[i];
            if (document.get('url').match(fatCheck)) {
              document.set('write', false);
              return;
            }
          }
        });
        return next();
      };

      return FatTrimmer;

    })(BasePlugin);
  };

}).call(this);
