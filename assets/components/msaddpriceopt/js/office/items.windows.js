msAddPriceOpt.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'msaddpriceopt-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('msaddpriceopt_item_create'),
        width: 550,
        autoHeight: true,
        url: msAddPriceOpt.config.connector_url,
        baseParams: {
            action: 'msaddpriceopt/processor',
            method: 'item/create',
        },
        fields: this.getFields(config),
        keys: this.getKeys(config),
    });
    msAddPriceOpt.window.CreateItem.superclass.constructor.call(this, config);
    this.on('hide', function () {
        var w = this;
        window.setTimeout(function () {
            w.close();
        }, 200);
    });
};
Ext.extend(msAddPriceOpt.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('msaddpriceopt_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('msaddpriceopt_item_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('msaddpriceopt_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    getKeys: function (config) {
        return [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }];
    },

});
Ext.reg('msaddpriceopt-item-window-create', msAddPriceOpt.window.CreateItem);


msAddPriceOpt.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'msaddpriceopt-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('msaddpriceopt_item_update'),
        width: 550,
        autoHeight: true,
        url: msAddPriceOpt.config.connector_url,
        baseParams: {
            action: 'msaddpriceopt/processor',
            method: 'item/update',
        },
        fields: this.getFields(config),
        keys: this.getKeys(config),
    });
    msAddPriceOpt.window.UpdateItem.superclass.constructor.call(this, config);
    this.on('hide', function () {
        var w = this;
        window.setTimeout(function () {
            w.close();
        }, 200);
    });
};
Ext.extend(msAddPriceOpt.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('msaddpriceopt_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('msaddpriceopt_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('msaddpriceopt_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    getKeys: function () {
        return [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }];
    },

});
Ext.reg('msaddpriceopt-item-window-update', msAddPriceOpt.window.UpdateItem);