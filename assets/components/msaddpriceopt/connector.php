<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
}
else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var msAddPriceOpt $msAddPriceOpt */
$msAddPriceOpt = $modx->getService('msaddpriceopt', 'msAddPriceOpt', $modx->getOption('msaddpriceopt_core_path', null,
        $modx->getOption('core_path') . 'components/msaddpriceopt/') . 'model/msaddpriceopt/'
);
$modx->lexicon->load('msaddpriceopt:default');

// handle request
$corePath = $modx->getOption('msaddpriceopt_core_path', null, $modx->getOption('core_path') . 'components/msaddpriceopt/');
$path = $modx->getOption('processorsPath', $msAddPriceOpt->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest(array(
    'processors_path' => $path,
    'location' => '',
));