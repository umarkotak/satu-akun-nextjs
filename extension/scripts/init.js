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

  setSecureCookie("__Secure-satu-akun.hello", "goodbye", 7)
}
