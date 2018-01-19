!function() {
    if (!document.querySelector('#yetone-dom2img')) {
        var s = document.createElement('script');
        s.id = 'yetone-dom2img';
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js';
        s.onload = download;
        document.head.appendChild(s);
    } else {
        download();
    }
    function download() {
        module.exports.toSvg(container).then(function(dataUrl) {
            dataUrl = dataUrl.substr(dataUrl.indexOf('<svg'));
            dataUrl = dataUrl.replace(/user-select:\s?none;/g, '');
            var xml = atob('PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+') + dataUrl;
            var url = window.URL.createObjectURL(new Blob([xml], { type : 'text\/xml' }));
            var link = document.createElement('a');
            link.download = 'carbon.svg';
            link.href = url;
            link.click();
            setTimeout(function() {
                window.URL.revokeObjectURL(url);
            }, 10);
        })
    }
}();
