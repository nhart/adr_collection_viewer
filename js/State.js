/*
 * File: State.js
 * Date: Fri May 13 2011 17:45:36 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

State = Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        State.superclass.constructor.call(this, Ext.apply({
            storeId: 'State',
            autoLoad: true,
            data: [
                [
                    "Active",
                    "A"
                ],
                [
                    "Inactive",
                    "I"
                ],
                [
                    "Deleted",
                    "D"
                ]
            ],
            fields: [
                {
                    name: 'type'
                },
                {
                    name: 'value'
                }
            ]
        }, cfg));
    }
});
Ext.reg('state', State);new State();