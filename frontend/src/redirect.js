// redirect.js
if (window.location.protocol === "https:") {
    const httpUrl = "http://backend.vastyam.com:8000" + window.location.pathname + window.location.search;
    window.location.replace(httpUrl);
  }
  