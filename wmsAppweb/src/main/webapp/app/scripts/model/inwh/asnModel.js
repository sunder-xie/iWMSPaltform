define(['kendo'],
    function (kendo) {
        'use strict';
        return {
            asnHeader:{
                id:"id",
                fields:{
                    id:{type: "number",editable:false,nullable:false},
                    tenantId:{type: "number"},
                    warehouseId:{type: "number"},
                    cargoOwnerId:{type: "number"},
                    datasourceCode:{type: "string"},
                    statusCode:{type: "string"},
                    expectedDate:{type: "string"},
                    fromTypeCode:{type: "string"},
                    fromOrderNo:{type: "string"},
                    fromAddress:{type: "string"},
                    warehouseReferNo:{type: "string"},
                    supplierId:{type: "number"},
                    supplierName:{type: "string"},
                    supplierContact:{type: "string"},
                    supplierTelephone:{type: "string"},
                    supplierAddress:{type: "string"},
                    supplierReferNo:{type: "string"},
                    carrierId:{type: "number"},
                    carrierName:{type: "string"},
                    carrierContact:{type: "string"},
                    carrierTelephone:{type: "string"},
                    carrierAddress:{type: "string"},
                    carrierReferNo:{type: "string"},
                    transportModeCode:{type: "string"},
                    vehicleNo:{type: "string"},
                    totalQty:{type: "number"},
                    totalCartonQty:{type: "number"},
                    totalAmount:{type: "number"},
                    totalNetWeight:{type: "number"},
                    totalGrossWeight:{type: "number"},
                    totalCube:{type: "number"},
                    totalPalletQty:{type: "number"},
                    description:{type: "string"},
                    createUser:{type: "string"},
                    createTime:{type: "number"},
                    updateUser:{type: "string"},
                    updateTime:{type: "number"},
                    receiptTypeCode:{type: "string"},
                    isDel:{type: "boolean"},
                    isNeedQc:{type: "boolean"},
                    qcTimes:{type: "number"},
                    qcStatusCode:{type: "string"},
                    qcFtp:{type: "number"},
                    totalQtyReal:{type: "number"},
                    totalCategoryQty:{type: "number"},
                    fromOmsNo:{type: "string"},
                }
            },
            asnDetail:{
                id:"id",
                fields: {
                    id:{type: "number",editable:false,nullable:false},
                    tenantId:{type: "number"},
                    asnId:{type: "number"},
                    skuId:{type: "number"},
                    sku:{type: "string"},
                    skuName:{type: "string"},
                    skuBarcode:{type: "string"},
                    fromOrderNo:{type: "string"},
                    invoiceNo:{type: "string"},
                    expectedQty:{type: "number",defaultValue:1},
                    adjustQty:{type: "number"},
                    containerNo:{type: "string"},
                    containerQty:{type: "number"},
                    receivedQty:{type: "number"},
                    price:{type: "number"},
                    lastReceiptTime:{type: "number"},
                    statusCode:{type: "string"},
                    isNeedQc:{type: "boolean"},
                    qcReferNo:{type: "string"},
                    netWeight:{type: "number"},
                    grossWeight:{type: "number"},
                    volume:{type: "number"},
                    description:{type: "string"},
                    createUser:{type: "string"},
                    createTime:{type: "number"},
                    updateUser:{type: "string"},
                    updateTime:{type: "number"},
                    rejectReason:{type: "string"},
                    isReject:{type: "number"},
                    isDel:{type: "number"},
                    qcQualifiedRate:{type: "number"},
                    qualifiedQty:{type: "number"},
                    unqualifiedQty:{type: "number"},
                    spec:{type:"string"},
                    unitType:{type:"string"}
                }
            }
        };
    });
