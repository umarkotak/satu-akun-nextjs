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

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "cookies": [
    {
      "name": "dummy-next-auth.session-token",
      "value": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..6Th4gZp46jPYpnE5.NLuv29V2avN4p3bNKlTpV2bMhtEy4uUBIwzdGv6J7HqbKwwnwl9a-_2kxQRUIYhY4M7Oh0XqiVC-HueRWO8fbc1hDdd4zGYS2gdAA_ka1dMlSoUJKNJbQgmNo1LVvJHZEPY3fVw-0GEmSjmVd9dOSO-ADsSTUWAs6Yjg12i5BtLBI5J9GHZYLsk6k_aaMALqhtnZRJM0fycJKOZB4UL6UB33iZduh28uTIJo4jcP1gb_-f35ZHoC4tJUWN1d-nKkiXxJYy3CdcFiHc0kshVVRcKMcNwgnPMeLXdRdW2fgJHBW2PjoQKlosbI8P-qFzkuprFeSXkCOrHTY2ujoBgLEApwIRA64ij9UjslIEu1dOLnsCfE6WBkuyJbsP4N9uPDV3ZG4wKLd0QbLJqO3oSiCZ9KzuhPc6TxX1jKO9QkeQ1nCjx4m3jbG92xuY1EIRBaGfWUSvJn9CdU-Fa7cdjMfMg81wR81-ZXCYRN3c405qevQ4duPuhRF3v8azcAlnW1Z_ma9mEvum_u5y-mztwe0CyvQ_lJoU3rZ75yiopyrRA8eW0cK8IfqO-t7TWpK3WetHMPxfk7T8IMGu8kVFGGnQ73Pg7MGgoR7bOhVsBDjwZUwcqNZT3abDEcBOeqv7akU-YDMM1_WHLc4870OWR7KFWYkmxmvc16lObeahxrv0sseaAOUZBVmVrMbaVmfqyq_M_3Kll_cvydk0njGbza_XX5EsbM8qxiqJ6SjMmKTF8rg2kFN6JndXpBE_6-Crn4FcbcqYlLVGu-VZAteF7Trl_AvhpgT1OR7kQpudpaF3Bp0qqrP76V90Rcq52o9ntupiQa77IeJ7ekuhtaCvS81Fd5jLhyXJ49EbjKGRcKts-AXGr_LE5Ocxver_lYbhItx6EOiIWWmTkJrjMHv8IbOzjjHITlUGqZJ5W8ZjW9-wp9WDJEXDxzrp8Ua9qivzWWCigFOV97Tlee3XjLE-BUjn01ILsqlsT6pHJ-q81JOhXpQ78cjozizwEFUsHqE2wHIrQZaqc5YY4htktWCcYz7HdeYRJbtNTMHvcUgCVBTXGrbxhhTDjvlsNBPlPG-08x19stnDhcdB9aZQbPJgn-rLz4N5OpL0vhOSm109QAg-M-oOKf_kSwtUTdv2FNEqIWxlnGD7euL7NVaxpUdjNrKuTrZBxXJb9pKsCm4lH5WFDMNJHYguOcn8PCUzcy5DEuvOgUyZ4GAWAoLlhyhMyX2K52UF5ujqhTT7X-ie_OAIsI8tiVP6d7EgoXtZmzebtDAobog_3jFeiZE197XFvdKEymbDsYL03sFbY8IOdE2xVOPT3aqi1fNlb2JkR99Je7CTVSWvretHIziNTL8MmBzNYwrtw86OIoWgZn9K9lqKnkj5WbdQWRTGLLh7E64az3zUQqlYVyDUeHuVsC3j_lqqokkeSYIgC01VNU3Cxf8MS8g214aCQ0ntgt3R3lknRkISJBdJWVeEXPys9sIPzzxQx_DzOXWeDD2t8SvG69ja_7L_wZCTepm8vFu2nF7kXCnvzKbVcrxzx3ZGqbjdwcV8aYG-Vg0X3klNmLNhpUaZU4rTkHhDZZ5APbhbzcLyf-YoPPntF9BUIieZ_VTzsjKH46K_9rwDJp8BZSkSSEA7uDsT26VvXmLLPffHsNVXvihaIv5cJmT3zlqfzc4BRt8AD88eSXEQ86qN-uggE5Ms9s8Cds8YikCS-3bhocCuRb63oDqqJ4lwXVPi5NVoJuOZ5V70_-i7nxOlQ4GO0YZNDldr6DS1kd_NsRA6TAl-jhEybwsGz1jhBFglZUZozVl8Db8b3bgkGoXhQd2taL0kMs25iGdU-PKelJTDp2Vj1MtQRShxBY6rbca229Qybld7guoh3ZOnAb063Q8Byta9zqQjHDMEGChFSpwdKVeC9p3xC_Mbg_CGXTBjZBfyLP3rNvxBPwQbyNwE0SmlFZdo2PUINW98qPTFPyVF-cDH58__hnaZKKbn4IC4XQPtKXpUmkIrfY9GaTzXz40vpol_PqZ1gft19aGHPMgynejz18ZOT2Yg2IJms_GMzxqL3y-ZOMxzgILMlSEwnTOxAAC4XCXxJ4iiFnaenrjrDgsDKOXi2p04ArccZl87AGf_7U50Eb4jAgs3sg4IjwxbBRvdNgTlKIrqbi0sIKA4zc-kTeDUfHYtdV2f7yksc3rJeys4irw_MbnQeoczhkAHWVETaK_J1Tx3inNpZlBaK4SHgmbqMPYMJy7B-4jfsy6YKLg47Jcj5zRVzx0yDMS1SvZTiFuzgGtRrpsuuk0wrMkSQbupqkniaVzBCXC0O9gOJOveNR-1gBVhTP-Nio3XbfSia5izWF1IyZWtRxOebQ7BSG44aW4c0vRV3CrWSEV72yJ3x3pQuKhbnkqUw9piQVFCPHg4tW7ItLBqA_9EtwrFSYJmUcTiqHC_1YJoYPhCr9ofq4-GwwSqkt7oBpg3g7Nh7WeD6z1HohLtT6RBmXRC9BfRVOARu206Gzb_P1v3uRDOhnQuz7KGfmjQ47IR1bkcKPb45vZqu4fVHRk_F1mBVwqTCPCaADpeIKrKi4XEdDpre0vmfYl3v5Whv1WikBAZ9jw3fI1DQfht-029hIfw6KL3VSF5sAd5E9oI2ZYhJrcGGv71WZFDIaeDfN_5te8KSZTLgWCFnSLyl6sng2BA4TRD_Oyx7Uk2Ddpk7_II8oC1V8ncpyFiQm9h0duTQEzHiTcLwq4btpyr7XnZXDQ8n9yFHt2JWXXAA4n7Nk3eLRVISenYVb1sbooC24YqIwyhzc00Sd9Dqhj48Lbo-mdyfM72xKDwhvrBDeLxAO9RzWyCAem1gJxPzVfkvrKYjzJY1Q8QUfgxPIxNtZLtPQlov4r-wFrSkDGi-LjATPaZuumqiGmPxSzfw.4rFw31DVi5EtQmlmiNvZSQ",
      "path": "/",
      "domain": ".chatgpt.com",
      "secure": true
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

function init() {
  fetch("https://api.shadow-animapu-2.site/dummy-cookie", requestOptions)
    .then((response) => {
      if (response.headers.has('Set-Cookie')) {
        // Extract the cookie value from the 'Set-Cookie' header
        const cookieHeader = response.headers.get('Set-Cookie');
        const cookieValue = cookieHeader.split(';')[0];
  
        // Set the cookie in the browser's cookie jar
        document.cookie = cookieValue;
      }
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  
  alert("DONE!")
}
