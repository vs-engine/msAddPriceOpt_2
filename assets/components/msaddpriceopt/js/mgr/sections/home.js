msAddPriceOpt.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'msaddpriceopt-panel-home',
            renderTo: 'msaddpriceopt-panel-home-div'
        }]
    });
    msAddPriceOpt.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(msAddPriceOpt.page.Home, MODx.Component);
Ext.reg('msaddpriceopt-page-home', msAddPriceOpt.page.Home);