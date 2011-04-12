/*
 * File: Overview.ui.js
 * Date: Mon Apr 11 2011 07:35:03 GMT-0300 (ADT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

OverviewUi = Ext.extend(Ext.Panel, {
    title: 'Overview',
    layout: 'fit',
    id: 'adr-collection-overview-tab',
    initComponent: function() {
        this.items = [
            {
                xtype: 'panel',
                title: 'Description',
                autoLoad: {
                    url: "/adrcollection/ajax/getdescription",
                    params: {
                        pid: (window.location.pathname.split('/')[
                            3
                        ])
                    }
                }
            }
        ];
        OverviewUi.superclass.initComponent.call(this);
    }
});
