(() => {
  var i = window.tz || {};
  i.init = function () {
    this.accountCode && (this.i(), this.t())
  }, i.t = function () {
    var i;
    for (i of document.querySelectorAll("a[href]")) if (!i.getAttribute("href").startsWith("#")) {
      var d, c, t = new URL(i.href), _ = document.cookie.split("; ").reduce((i, d) => {
        var [d, c] = d.split("=");
        return d.startsWith("tz_") && (i[d = d.replace("tz_", "")] = c), i
      }, {});
      for ([d, c] of Object.entries(_)) t.searchParams.has(d) || t.searchParams.append(d, c);
      i.href = t.toString()
    }
  }, i.i = function () {
    var i,
      d = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "campaignid", "adsetid", "fbclid", "tintim_fbid", "adset", "adid", "gclid", "utm_term", "adgroupid", "targetid", "adcampaign", "groupid", "gad_source", "utm_id", "__hsfp", "__hssc", "__hstc", "__s", "_hsenc", "_openstat", "dclid", "fbclid", "gclid", "hsCtaTracking", "mc_eid", "mkt_tok", "ml_subscriber", "ml_subscriber_hash", "msclkid", "oly_anon_id", "oly_enc_id", "rb_clickid", "s_cid", "vero_conv", "vero_id", "wickedid", "yclid", "src"];
    for (i of new URLSearchParams(window.location.search).entries()) d.includes(i[0]) && (document.cookie = `tz_${i[0]}=${i[1]};`)
  }, i.init()
})();
