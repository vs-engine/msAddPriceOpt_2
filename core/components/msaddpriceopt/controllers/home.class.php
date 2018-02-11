<?php

/**
 * The home manager controller for msAddPriceOpt.
 *
 */
class msAddPriceOptHomeManagerController extends modExtraManagerController
{
    /** @var msAddPriceOpt $msAddPriceOpt */
    public $msAddPriceOpt;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('msaddpriceopt_core_path', null,
                $this->modx->getOption('core_path') . 'components/msaddpriceopt/') . 'model/msaddpriceopt/';
        $this->msAddPriceOpt = $this->modx->getService('msaddpriceopt', 'msAddPriceOpt', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('msaddpriceopt:default');
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('msaddpriceopt');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->msAddPriceOpt->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->msAddPriceOpt->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/msaddpriceopt.js');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->msAddPriceOpt->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        msAddPriceOpt.config = ' . json_encode($this->msAddPriceOpt->config) . ';
        msAddPriceOpt.config.connector_url = "' . $this->msAddPriceOpt->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "msaddpriceopt-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->msAddPriceOpt->config['templatesPath'] . 'home.tpl';
    }
}