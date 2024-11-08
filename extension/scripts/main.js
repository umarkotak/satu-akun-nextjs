console.log("SATU AKUN EXTENSION LOADED")

async function getCookiesForCurrentTab() {
  try {
    // Get the current tab
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Get the cookies for the current tab
    const cookies = await chrome.cookies.getAll({ url: currentTab.url });

    // Format the cookies as a string
    const cookieString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('\n');

    // Set the cookie string in the textarea
    document.getElementById('satuakun_displayTextArea').value = cookieString;
  } catch (error) {
    console.error('Error getting cookies:', error);
  }
}

async function setCookies() {
  var breakingCookie = {}
  
  try {
    // Get the current tab
    const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Get the cookie string from the textarea
    const cookieString = document.getElementById('satuakun_inputTextArea').value;

    // Split the cookie string into individual cookies
    const cookies = cookieString.split('\n').map(cookie => {
      const [name, value] = splitByFirstEquals(cookie);
      return { name, value, url: currentTab.url };
    });

    // Set the cookies using the chrome.cookies.set() API
    for (const cookie of cookies) {
      if (cookie.name === "" || cookieString.value === "") { continue }

      breakingCookie = cookie
      await chrome.cookies.set(cookie);
    }

    alert('Cookies set successfully!');

  } catch (error) {
    console.error('Error setting cookies:', error, JSON.stringify(breakingCookie));
    alert('Error setting cookies. Please check the console for more information.');
  }
}

document.getElementById('satuakun_copyCookiesButton').addEventListener('click', () => {
  getCookiesForCurrentTab();
  navigator.clipboard.writeText(document.getElementById('satuakun_displayTextArea').value);
  alert('Cookies copied to clipboard!');
});
document.getElementById('satuakun_setCookiesButton').addEventListener('click', setCookies);

function splitByFirstEquals(str) {
  const firstEqualsIndex = str.indexOf('=');

  if (firstEqualsIndex === -1) {
    return [str]; // Return the original string if no '=' is found
  }

  const beforeEquals = str.substring(0, firstEqualsIndex);
  const afterEquals = str.substring(firstEqualsIndex + 1);

  return [beforeEquals, afterEquals];
}
