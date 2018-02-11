Ext.onReady(function () {
    msAddPriceOpt.config.connector_url = OfficeConfig.actionUrl;

    var grid = new msAddPriceOpt.panel.Home();
    grid.render('office-msaddpriceopt-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});