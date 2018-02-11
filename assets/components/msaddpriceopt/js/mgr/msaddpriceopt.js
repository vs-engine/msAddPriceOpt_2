var msAddPriceOpt = function (config) {
    config = config || {};
    msAddPriceOpt.superclass.constructor.call(this, config);
};
Ext.extend(msAddPriceOpt, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('msaddpriceopt', msAddPriceOpt);

msAddPriceOpt = new msAddPriceOpt();