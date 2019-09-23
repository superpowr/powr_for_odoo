odoo.define('odoo-powr-paypal-button.snippet_menu', function (require) {
    var options = require('web_editor.snippets.options');
    var ajax = require('web.ajax');
    var core = require('web.core');
    var qweb = core.qweb;
    var _t = core._t;
    options.registry.snippets_powr_plugins_paypal_button_menu_options = options.Class.extend({
        start: function () {
            var self = this;
            var id = self.$target.find('.powr-paypal-button').attr('id');
            if(id){
            var href = "https://www.powr.io/plugins/paypal-button/standalone?unique_label="+id;
            self.$el.find('.paypal_button_menu.edit_paypalbutton').attr('href',href);
            }
            return this._super.apply(this, arguments);
        },
        onBuilt: function () {
            var self = this;
            this._super();
            var unique_label =
            'xxxxxxxx_'.replace(/[x]/g, function(c) {
              var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
              return v.toString(16);
            }) + new Date().getTime();
            var element_id = '#'+unique_label
            var html = '<div class="powr-paypal-button" id="'+unique_label+'"></div><script>$(document).find("'+element_id+'").html("").removeClass("powrLoaded");if(window.loadPowr){window.loadPowr();}</script>'
            self.$target.find('div.container').html('').html(html)
            var href = "https://www.powr.io/plugins/paypal-button/standalone?unique_label="+unique_label
            self.$el.find('.paypal_button_menu.edit_paypalbutton').attr('href',href)
        },
    });

});
