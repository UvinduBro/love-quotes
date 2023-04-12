const quotes = [
    "අපිට බෑ මිනිස්සු බොරු කරන එක නවත්තන්න. \n ඒත්, අපිට පුළුවන් මිනිස්සු විශ්වාස කරන එක නවත්තන්න...💛🌻 - Thrimaz", // 1
    "පරිස්සම් වන්න ! ‍‍\n ඇතැමින් ඔබට රිදවා, \n පසුව ඔබ ඔවුනට රිදවූවා සේ රඟපානු ඇත... ❤️‍🩹 - Thrimaz", // 2
    "එය කුමක්දැයි තේරුම් කල නොහැකි නමුත්, \n එය බොහෝ සේ ඔබට රිදවනු ඇත...💛🌻 - Thrimaz", // 3
    "ප්‍රේමය නම්, ‍\n සියල්ල වැරදෙමින් යනවිටත් \n එය ඉතා දරුණු ලෙස ඔබට රිදවන විටත්, \n ඔබට එකම පුද්ගලයෙක් යලි යලිත් අවැසි වීමයි... 💛🌻 - Thrimaz", // 4
    "ඔබට තනිකමක් දැනුනු විට නොව, \n ඔබ ආදරයකට සූදානම් බව තේරුම් ගත් විට පමණක්, \n පෙම් සබඳතාවක් අරඹන්න... ❤️‍🩹 - Thrimaz", // 5
    "සමහර මල් ලස්සන පරවුණාම. පරවුණු මල් වලින් එන අමුතු සුවඳ සමහරුන්ව ජීවත් කරවනවා. ඉතිං ඔයත් පරවුනු මලක් කියලා හිතනවා නම්, අමතක කරන්න එපා. ඔයා ගාව තාමත් ඒ සුවඳ තියනවා. ඒකත් එක්ක ආයෙත් ජීවත් වෙන්න පටන් ගන්න... 💛🌻 - Thrimaz", // 6
    "හඳට ආදරේ කරන මිනිස්සුන්ට \n හදකට ආදරේ කරන්න ලැබුනම \n එයාලා හඳ අල්ලන එක පැත්තක තියලා, \n හද අල්ලන්න පටන් ගන්නවා...💛🌻 - Thrimaz", // 7
    "ඇතුලාන්තයෙන් දරුණු ලෙස බීඳී ගොස් සිටියදීත් \n තවමත් ඔබට අන් අය කෙරෙහි මෘදු හදවතක් තිබේ නම්, \n ඔබගේ වටිනාකමට ප්‍රතිඵල නිසැකවම ලැබෙනු ඇත... 💛🌻  - Thrimaz", // 8
    "හදවත් බිඳීම්, සිත් පෑරීම්, අත්හැරීම් සියල්ලකටම පසු, \n මම හොදින් යැයි කීමට හැකි ලෙස ශක්තිමත් වන්න... 💛🌻 - Thrimaz", // 9
    "සියල්ල තේරුම් ගත් පාර්ශ්වය, \n අවසානයේ නිහඬවම සමුගත්හ 💛🌻 - Thrimaz", // 10
    "මේ ලෝකෙ තියෙන ලස්සනම හැගීම් වලින් එකක් තමයි, ‍\n ඔයා නිසා තවත් කෙනෙක් සතුටින් ඉන්නවා කියලා \n ඔයාට දැනෙන එක... 💛🌻 - Thrimaz", // 12
    "දුරස්ථභාවයට, මිත්‍රත්වයක් හෝ සම්බන්ධතාවක් නැති කළ නොහැක. \n නමුත්, ප්‍රමාද වී පැමිණෙන පණිවිඩ හා අවම සංවාද නිසා එය නැති වී යා හැකිය ❤️‍🩹 - Thrimaz", // 13
    "ආදරය අමුතුවෙන් පෙන්විය යුතු නැත, ආදරය ලබන්නාට දැනිය යුතුය...💛🌻 - Thrimaz", // 14
    "ඔබගේ ආදරණීයයන් ඔබගෙන් නික්ම යාමට පෙර, ඔවුනට ලැබිය යුතු ඔබගේ ආදරය ලබා දෙන්න ❤️‍🩹 ඉතිං යම් දිනක මාද නිහඩ වී ඇත්නම්, නොකියාම නික්ම ගොස් ඇති බව වටහා ගන්න...💛🌻 - Thrimaz", // 15
    "දරා ගත නොහැකි වේදනාවලින් පස්සේ උපදින්නේ, ඔළුවේ පණ තියෙන හදවත මැරුණ මිනිස්සු 💔 ඒවගේ හිතකට පන දෙන්න පුලුවන් වෙන්නෙත් අවංක ආදරනීය හිතකට විතරයි...💛🌻 - Thrimaz", // 16
    "නුඹ මගේ සිහින වල නිදයි, ඉතිං මට නින්ද නොයයි...🌻 - Thrimaz", // 17
    "පසුදා උදෑසනට ඔබ අවදිවනවාද කියාවත් නොදන්නා අයෙකු ගැන සිතමින් ඔබේ රාත්‍රිය නිදිවර්ජිතව ගත නොකරන්න...💛🌻 - Thrimaz", // 18
    "ඔබගේ ජීවිතයේ සතුට නැතිවූ තැනින්ම නැවතත් ඔබ සතුට සෙවීමට නොයන්න... 💛🌻 - Thrimaz", // 19
    "මා අවදි වන බව ඈ නොදන්නා නමුත් මා අවදි වන්නේ ඈ වෙනුවෙන්ම පමණක් බව මා දනිමි. ❤️‍🩹🥀 - Mohomad Naflan", // 20

  ];


// 
  
  const quoteText = document.querySelector(".quote");
  const quoteContainer = document.getElementById('quote-area');
  const quote = document.getElementById('quote');
  const generateButton = document.getElementById('generateButton');
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter"),
  fbBtn = document.querySelector(".speech"),

  generateButton.addEventListener('click', generateQuote);
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
  }
  
  copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}%20%20%20Quote%20from%20uvindubro.me/love-quotes`;
    window.open(tweetUrl, "_blank");
});

fbBtn.addEventListener("click", ()=>{
  let fbUrl = `whatsapp://send?text=${quoteText.innerText}%20%20|%20%20Quote%20from%20uvindubro.me/love-quotes`;
  window.open(fbUrl, "_blank");
});
