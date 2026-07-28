/* TikTok Pixel (提交表单-sanpima) — base code + event tracking.
   Loaded from home.html / contact-us.html <head>. Isolated: no edits to page logic. */
(function () {
  var PIXEL_ID = "D9K6A9RC77U820AROL50";

  /* ---- TikTok Pixel base code ---- */
  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    (ttq.methods = [
      "page", "track", "identify", "instances", "debug", "on", "off", "once", "ready",
      "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent",
      "grantConsent",
    ]),
      (ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      });
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    (ttq.instance = function (t) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
        ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    }),
      (ttq.load = function (e, n) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
          o = n && n.partner;
        (ttq._i = ttq._i || {}),
          (ttq._i[e] = []),
          (ttq._i[e]._u = r),
          (ttq._t = ttq._t || {}),
          (ttq._t[e] = +new Date()),
          (ttq._o = ttq._o || {}),
          (ttq._o[e] = n || {});
        n = document.createElement("script");
        (n.type = "text/javascript"), (n.async = !0), (n.src = r + "?sdkid=" + e + "&lib=" + t);
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e);
      });
    ttq.load(PIXEL_ID);
    ttq.page();
  })(window, document, "ttq");

  /* ---- helpers ---- */
  function uid() {
    return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }
  function track(event, name, extra) {
    try {
      var params = {
        content_type: "product",
        content_name: name,
        url: location.href,
        timestamp: new Date().toISOString(),
      };
      if (extra) for (var k in extra) params[k] = extra[k];
      window.ttq.track(event, params, { event_id: uid() });
    } catch (e) {}
  }

  /* ViewContent on page load (page identified by path) */
  track("ViewContent", location.pathname === "/" ? "home" : location.pathname.replace(/^\//, ""));

  /* ---- click tracking (delegated; covers WhatsApp / Telegram / email / tel / send button) ---- */
  document.addEventListener(
    "click",
    function (ev) {
      var el = ev.target && ev.target.closest ? ev.target : null;
      if (!el) return;
      var hit = el.closest(
        '.rf-whatsapp,.dz-wa-send,a[href*="wa.me"],a[href*="t.me"],a[href^="mailto:"],a[href^="tel:"],#mngtm01,.search-submit'
      );
      if (!hit) return;
      if (hit.classList && hit.classList.contains("search-submit")) {
        var box = hit.closest(".content-bg-search");
        var input = box && box.querySelector(".search-text");
        track("Search", "site-search", { query: (input && input.value) || "" });
        return;
      }
      if (hit.id === "mngtm01") {
        track("ClickButton", "contact-form-send");
        return;
      }
      var name = hit.classList.contains("rf-whatsapp")
        ? "whatsapp-float"
        : hit.classList.contains("dz-wa-send")
          ? "whatsapp-chat-send"
          : (hit.getAttribute("href") || "").indexOf("mailto:") === 0
            ? "email"
            : (hit.getAttribute("href") || "").indexOf("tel:") === 0
              ? "tel"
              : (hit.getAttribute("href") || "").indexOf("t.me") !== -1
                ? "telegram"
                : "whatsapp-link";
      track("ClickButton", name);
      track("Contact", name);
    },
    true
  );

  /* ---- SubmitForm on successful contact form send (wrap fetch to /api/contact) ---- */
  var origFetch = window.fetch;
  if (origFetch) {
    window.fetch = function (input, init) {
      var url = typeof input === "string" ? input : (input && input.url) || "";
      var isContact = url.indexOf("/api/contact") !== -1;
      var payload = null;
      if (isContact && init && typeof init.body === "string") {
        try {
          payload = JSON.parse(init.body);
        } catch (e) {}
      }
      var p = origFetch.apply(this, arguments);
      if (isContact) {
        p.then(function (res) {
          if (res && res.ok) {
            try {
              if (payload && (payload.email || payload.phone)) {
                window.ttq.identify({
                  email: payload.email || undefined,
                  phone_number: payload.phone || undefined,
                });
              }
            } catch (e) {}
            track("SubmitForm", "contact-form", { content_id: "contact-form" });
            track("Lead", "contact-form", { content_id: "contact-form" });
          }
        }).catch(function () {});
      }
      return p;
    };
  }
})();
