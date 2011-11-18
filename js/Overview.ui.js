/*
 * File: Overview.ui.js
 * Date: Fri Nov 18 2011 13:39:59 GMT-0400 (AST)
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
    autoHeight: true,
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
                },
                autoHeight: true,
                frame: true
            }
        ];
        OverviewUi.superclass.initComponent.call(this);
    }
});
