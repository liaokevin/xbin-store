/*!Name: detail.js
 * Date: 2017-2-14 17:14:16 */
define("MOD_ROOT/js/detail",function(require,exports,module){function a(a){var t=$(".J-addcart-mini");t.EDropdown({onOpen:function(){$(".J-buy-num").html(v.getNum())}}),p.addListener("onStockReady",function(){a.havestock?t.removeAttr("data-disable"):t.attr("data-disable","true")})}function t(a){var t=$("#placeholder-floatnav-stop"),i=$("#club"),o=$("#consult"),e=$("#footmark"),n=null;o.length&&(n=o),i.length&&(n=i),e.length&&(n=e),t.length&&(n=t),a.scroller({delay:0,end:n,onStart:function(){this.$el.find("[data-fixed]").addClass("pro-detail-hd-fixed")},onEnd:function(){this.$el.find("[data-fixed]").removeClass("pro-detail-hd-fixed")}}),$(".detail").elevator({floorClass:"detail-elevator-floor",elevatorClass:"detail-elevator",handlerClass:"detail-elevator-handler",selectClass:"current"})}function i(a){a.ELazyload({type:"module",onAppear:function(){v.wideVersion&&new m({$el:$("#J-detail-nav")})}})}function o(a){return/debug=disable_detail/.test(location.href)?!1:void $.ajax({url:a.desc,dataType:"jsonp",cache:!0,jsonpCallback:"showdesc",success:function(t){var o=$("#J-detail-content");a.isEBook?(o.html(h.process({list:t})),$("#illustration img").load(function(){r($("#illustration"))}),r(o.find(".formwork_bt"))):o.html(t.content.replace(/data-lazyload="done"/g,"")),o.ELazyload({source:"data-lazyload"}),i($("#detail"))}})}function e(a){if(a.price){var t=$(".J-addcart-mini"),i=parseFloat(a.price.p),o=".J-p-",e=a.price.id.replace("J_","");i&&(i>0?t.find(o+e).html("\uffe5"+a.price.p):t.find(o+e).html("\u6682\u65e0\u62a5\u4ef7"))}}function n(){return $("#parameter-brand").length&&pageConfig.product.brand?void require.async("MOD_ROOT/detail/follow.brand",function(a){a.init($("#parameter-brand .follow-brand"),pageConfig.product.brand)}):!1}function s(a){var t=a.parents(".formwork_bt").eq(0).offset().top;$("body").scrollTop()?$("body").scrollTop(t):$("html").scrollTop(t)}function r(a){a.each(function(a){var t=$(this).find(".more"),i=$(this).find(".con");if(0!=t.length&&0!=i.length){var o;i.height()>440&&(o=440,i.css({height:o,overflow:"hidden"}),t.show().toggle(function(){$(this).html('<a href="javascript:void(0)">\u6536\u8d77\u5168\u90e8\u2191</a>'),i.css({height:"auto",overflow:"hidden"}),s($(this))},function(){$(this).html('<a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a>'),i.css({height:o,overflow:"hidden"}),s($(this))}))}})}function d(a){function t(a){$.ajax({url:"//c.3.cn/quality",data:{skuId:v.sku,cat:v.cat.join(","),brand:pageConfig.product.brand,venderId:pageConfig.product.venderId||-1},dataType:"jsonp",success:function(t){t&&t.success&&t.url&&a(t.url)}})}function i(){var a=$(".J-ql-iframe"),i=a.attr("data-title");return a.length<1?!1:(t(function(){c.show(),a.show()}),void a.bind("click",function(){t(function(t){a.dialog({width:300,height:300,title:i,type:"iframe",autoIframe:!1,source:t})})}))}function o(){$.ajax({url:pageConfig.product.qualityLife,dataType:"jsonp",success:function(a){n(a)}})}function e(a){var t=$("#detail").data("ETab");t.triggers.eq(2).show(),t.items.eq(2).html('<div style="padding: 10px 0" class="ac"><img src="'+a+'" /></div>')}function n(a){var t=c.find("li");if(a&&a.objs&&a.objs.length)for(var i=0;i<a.objs.length;i++){var o=a.objs[i];o.images&&o.images.length&&(l[o.type]=o.images,t.filter(".ql-ico-"+o.type).show(),t.filter(".ql-ico-"+o.type).length&&c.show(),6===o.type&&e(o.images[0]))}}function s(a,t){var i=l[a],o='<p style="padding: 10px 0" class="ac">\u5356\u5bb6\u627f\u8bfa\uff1a\u4ee5\u4e0b\u4e3a\u5b9e\u7269\u62cd\u6444\uff0c\u8d2d\u4e70\u65f6\u4ec5\u4f9b\u53c2\u8003</p>                    <div style="width: 520px;height:720px;margin: 0 auto;overflow:hidden;overflow-y:auto;">';if(!i||!i.length)return!1;for(var e=0;e<i.length;e++){var n=i[e],s=/^http:|https:|\/\//.test(n)?n:"//img20.360buyimg.com/cms/s500x2000_"+n;o+='<img style="display:block" width="500" src="'+s+'" />'}o+="</div>",$("body").dialog({title:t,width:600,height:750,type:"html",source:o})}function r(){c.delegate("li","click",function(){var a=$(this).data("type"),t=$(this).data("text");1!==a&&s(a,t)})}function d(){var a=c.find(".ql-ico-yuan");a.length&&c.show()}var c=$("#quality-life"),l={10:["//img30.360buyimg.com/popshop/jfs/t2629/66/1341832506/243792/5e7d3e33/573c1169Nf355ce80.jpg","//img30.360buyimg.com/popshop/jfs/t2875/2/1360087619/1270729/ff0fec44/573c1155N841cd68e.jpg","//img30.360buyimg.com/popshop/jfs/t2617/247/1362535868/81405/51362531/573c0ffaNda15a3a1.jpg"]};v.isJd&&(l[10]=["//img30.360buyimg.com/poprx/s800x562_jfs/t2782/356/3137767914/5139488/a206435a/578317b1Na33c0ca9.jpg","//img30.360buyimg.com/poprx/s800x562_jfs/t2797/286/3196750150/3418108/b81920dc/578317ccN045f8ee6.jpg","//img30.360buyimg.com/poprx/s800x1100_jfs/t2977/314/1467566065/1044633/a5a43571/578317e2N2cc82a8e.jpg"]),i(),r(),d(),pageConfig.product.qualityLife&&(o(),pageConfig.product.shangjiazizhi&&(c.show(),c.find(".ql-ico-10").show()))}function c(a){function t(){var a=readCookie("ipLocation");return a?a:"%u5317%u4EAC"}function i(){return"//c.3.cn/store/template?"+$.param({storeGroupId:a.storeGroupId||"",venderId:a.venderId,pName:t(),isNarrow:!(pageConfig.wideVersion&&pageConfig.compatible),provinceId:u.getAreaId().areaIds[0]})}var o=$("#loc-map");if(!o.length)return!1;var e='<iframe id="loc-map-iframe" src="{0}" style="width:{1}px;height:{2}px" marginheight="0" frameborder="0" scrolling="no"></iframe>',n=e.format(i(),pageConfig.wideVersion&&pageConfig.compatible?990:750,526);o.html(n),p.addListener("onAreaChange",function(){$("#loc-map-iframe").attr("src",i())})}function l(a,t){737===a.cat[0]&&$.ajax({url:"//dx.3.cn/afterSaleDesc/"+(a.mainSkuId||a.skuid),jsonpCallback:"showAfterSaleDesc",dataType:"jsonp",cache:!0,success:function(a){a&&a.content&&t.html(a.content).ELazyload({source:"data-lazyload"})}})}function f(i){function s(a){var t=$("#consult,#comment,#guarantee,#club,#try-report,#askAnswer");t.show(),a.is('[data-anchor="#comment"]')?$("#guarantee").hide():a.is('[data-anchor="#club"]')?($("#consult,#comment,#guarantee,#try-report").hide(),$("#consult,#comment,#guarantee").hide()):a.is('[data-anchor="#shop-similar-promotion"]')?$("#consult,#comment,#guarantee,#askAnswer").hide():t.show()}function r(a){function t(){setTimeout(function(){$("html,body").scrollTop(o.offset().top)},10)}var i=a.attr("data-anchor"),o=$(i),e=$("#detail .tab-main").hasClass("pro-detail-hd-fixed");return o.length?void(e&&t()):!1}p.addListener("onPriceReady",e);var f=$("#detail");f.ETab({onBeforeSwitch:function(a){s(this.triggers.eq(a))},onSwitch:function(a){var t=this.triggers.eq(a),o=this.items.eq(a);if(r(t),t.is('[data-anchor="#comment"]')){var e=$("#comment").data("ELazyload");$.each(e,function(a,t){t.check(t.$targets)})}if(t.is('[data-anchor="#shop-similar-promotion"]')){var e=$("#shop-similar-promotion").data("ELazyload");$.each(e,function(a,t){t.check(t.$targets)})}if(t.is('[data-anchor="#club"]')){var e=$("#club").data("ELazyload");$.each(e,function(a,t){t.check(t.$targets)})}"\u552e\u540e\u4fdd\u969c"==t.text()&&l(i,o)}}),$(".J-more-param").bind("click",function(){f.data("ETab").go(1)}),f.ELazyload({source:"data-lazyload"}),a(i),o(i),t(f),n(),d(i),c(i)}var p=require("MOD_ROOT/js/event").Event,m=require("MOD_ROOT/js/nav"),v=require("MOD_ROOT/js/core"),u=require("MOD_ROOT/js/tools");require("MOD_ROOT/js/ETab"),require("MOD_ROOT/js/EDropdown"),require("MOD_ROOT/js/ELazyload"),require("PLG_ROOT/js/jQuery.scroller"),require("JDF_UI/js/elevator");var h='    {if list.editorPick}    <div class="formwork_bt" id="editorPick" name="detail-tag-id-0" text="\u7f16\u8f91\u63a8\u8350">        <div class="formwork_bt_it" ><span>\u7f16\u8f91\u63a8\u8350</span></div>        <div class="con">${list.editorPick}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.contentInfo}    <div class="formwork_bt" id="contentInfo" name="detail-tag-id-1" text="\u5185\u5bb9\u7b80\u4ecb">        <div class="formwork_bt_it"><span>\u5185\u5bb9\u7b80\u4ecb</span></div>        <div class="con">${list.contentInfo}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.authorInfo}    <div class="formwork_bt" id="authorInfo" name="detail-tag-id-2" text="\u4f5c\u8005\u7b80\u4ecb">        <div class="formwork_bt_it"><span>\u4f5c\u8005\u7b80\u4ecb</span></div>        <div class="con">${list.authorInfo}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.catalog}    <div class="formwork_bt" id="catalog" name="detail-tag-id-3" text="\u76ee\u5f55">        <div class="formwork_bt_it"><span>\u76ee\u5f55</span></div>        <div class="con">${list.catalog}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.mediaComments}    <div class="formwork_bt" id="mediaComments" name="detail-tag-id-4" text="\u5a92\u4f53\u8bc4\u8bba">        <div class="formwork_bt_it"><span>\u5a92\u4f53\u8bc4\u8bba</span></div>        <div class="con">${list.mediaComments}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.preface}    <div class="formwork_bt" id="preface" name="detail-tag-id-5" text="\u524d\u8a00">        <div class="formwork_bt_it"><span>\u524d\u8a00</span></div>        <div class="con">${list.preface}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.digest}    <div class="formwork_bt" id="digest" name="detail-tag-id-6" text="\u7cbe\u5f69\u4e66\u6458">        <div class="formwork_bt_it"><span>\u7cbe\u5f69\u4e66\u6458</span></div>        <div class="con">${list.digest}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}    {if list.illustration}    <div class="formwork_bt" id="illustration" name="detail-tag-id-7" text="\u7cbe\u5f69\u63d2\u56fe">        <div class="formwork_bt_it"><span>\u7cbe\u5f69\u63d2\u56fe</span></div>        <div class="con">${list.illustration}</div>        <div class="more"><a href="javascript:void(0)">\u67e5\u770b\u5168\u90e8\u2193</a></div>    </div>    {/if}';module.exports.__id="detail",module.exports.init=f});