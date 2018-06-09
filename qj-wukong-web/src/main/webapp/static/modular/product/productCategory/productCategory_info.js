/**
 * 初始化产品类别详情对话框
 */
var ProductCategoryInfoDlg = {
    productCategoryInfoData : {}
};

/**
 * 清除数据
 */
ProductCategoryInfoDlg.clearData = function() {
    this.productCategoryInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ProductCategoryInfoDlg.set = function(key, val) {
    this.productCategoryInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
ProductCategoryInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
ProductCategoryInfoDlg.close = function() {
    parent.layer.close(window.parent.ProductCategory.layerIndex);
}

/**
 * 收集数据
 */
ProductCategoryInfoDlg.collectData = function() {
    this
    .set('id')
    .set('categoryId')
    .set('parentId')
    .set('categoryName')
    .set('status')
    .set('sort')
    .set('createdBy')
    .set('createdDate')
    .set('lastUpdatedBy')
    .set('lastUpdatedDate')
    ;
}

/**
 * 提交添加
 */
ProductCategoryInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/productCategory/add", function(data){
        Feng.success("添加成功!");
        window.parent.ProductCategory.table.refresh();
        ProductCategoryInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.productCategoryInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
ProductCategoryInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/productCategory/update", function(data){
        Feng.success("修改成功!");
        window.parent.ProductCategory.table.refresh();
        ProductCategoryInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.productCategoryInfoData);
    ajax.start();
}

$(function() {

});
