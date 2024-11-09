const newDiv = document.createElement('div');
newDiv.id = 'myNewDiv'; // Add an ID if needed
newDiv.textContent = `satu akun extension`; // Add content if needed
newDiv.onclick = init
// newDiv.textContent = `satu akun extension: ${document.cookie}`; // Add content if needed

document.body.insertBefore(newDiv, document.body.firstChild);

function setSimpleCookie(keyValueString) {
  if (keyValueString.includes('=')) { // Check if the input string contains an "="
    console.log("REGISTERING", keyValueString)
    document.cookie = keyValueString;
  } else {
    console.error("Invalid cookie string format.  Must be 'key=value'.");
  }
}

function setSecureCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${encodeURIComponent(value || "")}${expires}; path=/; Secure; SameSite=Strict`;
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "cookies": [
    {
      "name": "hello",
      "value": "goodbye",
      "path": "/",
      "domain": "https://animapu.verecel.app",
      "secure": true
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
  credentials: 'include',
};

function init() {
  // console.log("DEBUG0", requestOptions)
  
  // fetch("https://api.shadow-animapu-2.site/dummy-cookie?origin=https://animapu.vercel.app", requestOptions)
  //   .then((response) => {
  //     console.log("DEBUG1.1", response.headers)
  //     console.log("DEBUG1.2", response.headers.getSetCookie())

  //     // if (response.headers.has('Set-Cookie')) {
  //     //   console.log("DEBUG2")

  //     //   // Extract the cookie value from the 'Set-Cookie' header
  //     //   const cookieHeader = response.headers.get('Set-Cookie');
  //     //   const cookieValue = cookieHeader.split(';')[0];
  
  //     //   // Set the cookie in the browser's cookie jar
  //     //   document.cookie = cookieValue;
  //     // }
  //   })
  //   // .then((result) => console.log(result))
  //   .catch((error) => console.error(error));
  
  // alert("DONE!")

  var cks = [
    "__Host-next-auth.csrf-token=ec154653962e60a43376d09f53b2448cef7ba52e48743d792d78bd2c335c7b28%7Cae1f476d80b1b483afd498487114ac46d1989c11df108ac5ae02c85417f7786c",
    "oai-did=1503d7ff-020d-4dca-90d7-2e27101dc196",
    "oai-nav-state=1",
    "oai-hlib=true",
    "__Secure-next-auth.callback-url=https%3A%2F%2Fchat-identity-edge-onramp.unified-9.api.openai.com",
    "_cfuvid=7IsmgQoY03UGwI7BQ4ixXCjzkp2zSQCu.3.GgrDliAk-1731120145936-0.0.1.1-604800000",
    "__cf_bm=_THHkzaumBIRUC2wV95VRhAQw8brmc8mG6csUvHX7_0-1731129237-1.0.1.1-9PBlbIH9FPjO4KwaMFnaTPLccMpZ90e68X9t0NDtLlXDgbJ1.JJsB8T0UxsC8dMm01O0iHT.9wuoZ9YDbxeRdw",
    "__cflb=0H28vzvP5FJafnkHxih2kue5BJChBHjDy1PMZUurM33",
    "__Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..NjTOhzChxlYMvQnp.cZ9Qd9fXNGizEERYZ1xz92XRv3scCVXXFW1lysfnE3yec2TZnFuqlFu7gRfQysSXub7SoImCbVCYQW0Q21_FvYAtTEdOCQJdXc3TW1ei3iSM08vui8kZVSAp-KtOWXqsZRUvO7wnrkaQFVCwcEWsFiuQQYT3xZCPRwqU00hM_SbGURbjaws7nwbAB_NJiXXZ4yCuVTes5LTNm2aTXu6wONSPI4BnNK7iKOmcgjFgH5F6jJ86WN_UW9xWdhLg63D6LxBqvBstUrZVZphI_cxeeVDzoXWabICH8f0SIe9kQdLRh3EpKM-nINEWB_5ARb3Hzm1O6jmPNWhkEQC_QkGLUYR9T_EkUT0mPWIxFhwiOv91bzeyKmQVdL_B61SRwTRG-1sgFTz1XUOTf-x0kSI_1O1aUFRYKVnGF6O057ul8-E1mfhoNL1Y-t-GV_ju5Wat5eWO9QlNiXOVMjUFcLeNRDP6qrG1f2ls_IzhjyvQhFgynNL2Ht5AyCHM5TU9A5ub7R9T7orh4CIlUgs1SoKnO1CXdDbPzbdFv3bcBNzYsDYGxNIs8PzjcAa-WvFaI8TZKd3KjyhYtXIhOzX-CqCHVsoFusN25S9ks91P4c8bKj-nNhFgzaTk2wi-mEZf6TE0ueLKJDb37tWJid4RrTSO8UwmMW_K4Z6pJ0v37xC3NVh9_C0_tBuP2K0LYdxWaRVikc0lo0larcIS5gWUE4MpiquvuUSOgudPY1zY6jJkNy3KwdkE3w6nkzwAmLiqv7RflSKTBJjpq8Pjb2zsLd5kTmdYBgmaC21YcGDixHoejANv5dDUyAr-mqH1zV3gpZTwv0Ggsavc5EsUczUVttu6_g3rEhOb9XisfQZYJdl-G35kCbqDUB4tqcoLy5LChDEVRBV7qH2wqClORrExKAgYYxB6PcRdU03QyZ-yV10Ms_BB4YfR9LMuzJ5hlia_lnNY4TNT_qublnukFFDIHhgehCLnPufAZvGPfvW8vbzP2mAODHhkMCK4XNGJJ4G197tBsaOUO8Seaw5E1gkhTxTCamUdIc1iJ80Jt5i5oQCEzYaAOKHy125nV1NCPLffufyeBjPaDQD8vo5fHaQET8H27Vi1QsTMDE622az9T2lhPcPtbhF4rOkg4bmu3rflX51QTteefZKop94Tl1zPeueH8esBrDbAuR97sfscATesivUCP5rUaLLvBZes8zBDR267zdXuwAcpl7xAOxC66jxCzrKGFoxrq1wB9G_Bt5HFX-oKwgEhHIjYwLS-8nMSlL_Etg1NrCF6iTeyxc7A7sGqOxy6kfwv56lFD8ox_2x3YylFsKIpauXOlar6rcV9LA_wD-ecbxq8aKnxFrVJJ-KIqb9NKlGVgX9rtlliprvcDB72wN6UB143vcKGDf1wtrdrJG_HKTG7AiOhrGE7TxDI9ZH-dPGB0GLPLcBIpyA_5inAzakxOoFEazGWzYhQtKm5dDA1SidisrX0MISovQuf_MPL99nGS7paFGoryieOfVl1AowcZfnBEOxbkiPb6n0vnW-slPGVA5i6LmxkugcXpHFPqsw_tfn4uNpoDxpKIubY0oOztM-M5u7OrJNnPC3EkxDnBJFyw_-ymUOZ6x0dysyaplSQi6qDfEzkc098e58TI4yjRttr9sqhhNdgdaa6_w-8lug0mVMq9J8vHt4HBnX4jNH9284b15kxmGcAXnrmsrnk_qMvrU3czucoDjiw2_UPD2gLovIIKRnl-lxWhOu86GqZv-U0aEbhVzH9rA6V0nKqL0uKwEE-NBlCQLgjckSG9XrLtbadAe8DEWz5eVeJLYcZjabuND6MnlTzOe3tirKie8RNXWWcvDTXnTnK6SA0AC3E3E-VFdopZJNMAC7EywB6mKL7eD_nDXIdJuKgP1S4X_RWAieuQAaYWYldIet9z-QDfuH5zDxLrM3x4wwj_v13sIADzABe9t2X8jqKd-zYVKR92naWnOIH9NUdXbOOJazywUQ6_lMHSru9Mw8jP4ysT5wjAxpfQ4dQV4hNYGq3J0-ZW8dmk3cjtzeVdPuad0DE2z_-ji7IKt2hVmyL_lsngxgO7TT98ec5nclc-PmGVhX9IFXZ7LiRrjit4IRI2Z3udabeZu7hYzpfWgRx8ie0Vk1sbA2iSsynGfVlk2svAjsBC2CYvyubtYhMSe7GXQWHNuWgMxsJJ0v-3dKsNroIbnw3ClFxtUxBE9L0ZtrC82qA62XX10Y4vvKdl2Kn0xtiaZx8N2HkAMEKprkVpbUAhg1hJ56gpZG6J-xIs2t6hqNXz8NiJj6hU3bevld7eFI7TW3xSQIua9-5sQTinff4Z3yWlxo_DVS4VVm_atw6B_a4ZqG2rzaAbN9x4ry5HHKRa_Cs6lO9oOWE5yZ-IWVBOdSVyFCvsztG5z8Gf5eF9qTwitgFEQzQ2XrBcPrIBTuMPstiPoh9g-SVbF8E7LFOHVUIX0GdprFg3PA5SHMGbF5a9vz1EZo_DMGR7ImdV916vfKQg8x4d4_1wm1SAfY2J65OJg98Tk1Ay318Ql4sn6Ap82jzACRhBA8J9v1fPLj7ysUe740hX6gvY9Ih4viSf8Dxu3L0Xix3Wv27Hb3LcCUv7uxZA3Ac42XnkmlZedsar0HajJAYJ1x3V04BGHj9jHgvG1AH0amye_vaP3k2PWeS5u2WtYs-ukJ6jteoIB3XcVVBvGlDl8-PaiEm3bbMsxx4Iw0nX7qFaQZZmZQul3RLfN37mMNf8KSBahq9zx8qZ_ynYwOgzKKh8LsjgflGoo5upDDx07f0AhsZCfVky_sYpU12cU314oELXKgJcKeCL6MmAE60hdhCm8EEWoHKNPIos6MGKKd0xIGCOw6DPYEhvsjvUO5sCb71R9EEArGQZ6JwkescD0EwpYZUhLx4Ld4DaiRG5KgB535ldZsCVUmBeJjqdQX5e-PeTsrL246JPv-VBR6nvPba.ytllju2mzHsgyXJa4r58ew",
    "oai-sc=0gAAAAABnLvATa3qcT4A0APB-DP31JcvKH-iRcHEWU6SUI_q8nheiiO92PqBVUD7smaSYbVn9JrPV_3-Jxw9oQwvLO4Ry6JtrO20fuufuoo6hSG1cuZxzhI8nrL0qIeEYIR7R5OM0rrf4LJg7VwZGqI8sF7_3F12pVF4X2HQMGqzELK52ZhAcF8BYW4qGMXMJFY79GiaRCe9i-7SZJjRlbDvCcKwu1BN0JA",
    "__Secure-satu-akun.hello=goodbye",
    "_dd_s=rum=0&expire=1731130350591&logs=1&id=aba0ddb5-e69c-43fa-bf12-98bd9086701d&created=1731129362832",
  ]

  cks.forEach((ck) => {
    const [name, value] = splitByFirstEquals(ck);
    
    setSecureCookie(name, value, 7)
  })

}

function splitByFirstEquals(str) {
  const firstEqualsIndex = str.indexOf('=');

  if (firstEqualsIndex === -1) {
    return [str]; // Return the original string if no '=' is found
  }

  const beforeEquals = str.substring(0, firstEqualsIndex);
  const afterEquals = str.substring(firstEqualsIndex + 1);

  return [beforeEquals, afterEquals];
}
