// redirect.js
if (window.location.protocol === "https:") {
    const httpUrl = "http://" + window.location.hostname + window.location.pathname + window.location.search;
    window.location.replace(httpUrl);
  }
  