var mathjax = function () {
  document.querySelector('.mathjax');

  // Yihui
  (function() {
    var i, text, code, codes = document.getElementsByTagName('code');
    for (i = 0; i < codes.length;) {
      code = codes[i];
      if (code.parentNode.tagName !== 'PRE' && code.childElementCount === 0) {
        text = code.textContent;
        if (/^\$[^$]/.test(text) && /[^$]\$$/.test(text)) {
          text = text.replace(/^\$/, '\\(').replace(/\$$/, '\\)');
          code.textContent = text;
        }
        if (/^\\\((.|\s)+\\\)$/.test(text) || /^\\\[(.|\s)+\\\]$/.test(text) ||
            /^\$(.|\s)+\$$/.test(text) ||
            /^\\begin\{([^}]+)\}(.|\s)+\\end\{[^}]+\}$/.test(text)) {
          code.outerHTML = code.innerHTML;  // remove <code></code>
          continue;
        }
      }
      i++;
    }
  })();

  var script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML";
  document.head.appendChild(script);

}
