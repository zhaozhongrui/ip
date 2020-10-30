function docsifyMiniValine(hook, vm) {
    hook.mounted(function () {
        var a = Docsify.dom;
        var n = a.create("div");
        n.id = "minivcomments";
        var i = a.getNode("#main");
        n.style = "max-width: 80% !important; margin: 0 auto 20px;", a.appendTo(a.find(".content"), n);
    })
    hook.doneEach(function () {
        vm.config.MiniValine = vm.config.MiniValine || {}
        var options = Object.assign({
            el: '#minivcomments',
            pathname: vm.config.MiniValine.docPath === 'full' ? location.pathname + location.hash.replace(/\?.+/, "") : location.hash.replace(/\?.+/, ""),
        }, vm.config.MiniValine)
        new MiniValine(options)
    })
}
window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyMiniValine].concat(window.$docsify.plugins || []);