(function ($) {
    "use strict"

    $.fn.trace = function (o) {
        const p = "trace.js";
        const v = "1.0.1";

        $.fn.trace.info = {
            version: v,
            author: "Amit",
            license: "MIT"
        };

        if (!o || typeof o !== "object") {
            console.error(`[${p}] Error: Invalid parameters.`);
            return this;
        }

        if (!o.match || /<[^>]*>/g.test(o.match)) {
            console.error(`[${p}] Error: 'match' must be a non-empty string HTML tags.`);
            return this;
        }

        if (o.traceType && o.traceType != "partial" && o.traceType != "full") {
            console.error(`[${p}] Error: 'traceType' must be 'partial' or 'full'.`);
            return this;
        }

        const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        var m = escapeRegExp(o.match),
            c = o.color || "yellow",
            t = o.traceType || "partial",
            cs = o.caseSensitive || false,
            cl = `trace-${c.replace("#", "")}`;


        var r = new RegExp((t === "full" ? `\\b${m}\\b` : `(${m})`), cs ? "g" : "gi");

        if (!$(`#trace-highlight-style`).length) {
            $("head").append(`<style id="trace-highlight-style">.${cl} { background: ${c}; }</style>`);
        }
        
        const styleElement = $("#trace-highlight-style");
        if (!styleElement.html().includes(`.${cl} {`)) {
            styleElement.append(`.${cl} { background: ${c}; }\n`);
        }

        return this.each(function () {
            $(this).html($(this).html().replace(r, `<span class="${cl}">$1</span>`));
        });
    };

    $.fn.untrace = function () {
        return this.each(function () {
            $(this).find("span[class^='trace-']").each(function () {
                $(this).replaceWith($(this).text());
            });
        });
    };
})(jQuery);
