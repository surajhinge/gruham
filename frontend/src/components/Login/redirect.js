// redirect.js
if (window.location.protocol === "https://backend.vastyam.com:8000") {
    const httpUrl = "http://backend.vastyam.com:8000" + window.location.pathname + window.location.search;
    window.location.replace(httpUrl);
  }
  