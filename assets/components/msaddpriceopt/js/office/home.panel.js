msAddPriceOpt.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'msaddpriceopt-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('msaddpriceopt_items'),
                layout: 'anchor',
                items: [{
                    html: _('msaddpriceopt_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'msaddpriceopt-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    msAddPriceOpt.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(msAddPriceOpt.panel.Home, MODx.Panel);
Ext.reg('msaddpriceopt-panel-home', msAddPriceOpt.panel.Home);
