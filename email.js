function copyToClipboard(elementId) {
    var emailElement = document.getElementById(elementId);
    var range = document.createRange();
    range.selectNode(emailElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('邮箱地址已复制到剪贴板');
}