<?php

class msAddPriceOptOfficeItemDisableProcessor extends modObjectProcessor
{
    public $objectType = 'msAddPriceOptItem';
    public $classKey = 'msAddPriceOptItem';
    public $languageTopics = array('msaddpriceopt');
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('msaddpriceopt_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var msAddPriceOptItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('msaddpriceopt_item_err_nf'));
            }

            $object->set('active', false);
            $object->save();
        }

        return $this->success();
    }

}

return 'msAddPriceOptOfficeItemDisableProcessor';
