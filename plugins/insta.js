import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `You need to give the URL of any Instagram video, post, reel, image`;
  m.reply('Please wait...');

  let res;
  try {
    res = await fetch(`${impu}/igdlv1?url=${encodeURIComponent(text)}`);
  } catch (error) {
    throw `An error occurred: ${error.message}`;
  }

  if (!res.ok) {
    throw `Error: ${res.status} ${res.statusText}`;
  }

  let api_response;
  try {
    api_response = await res.json();
  } catch (error) {
    throw `Error parsing API response: ${error.message}`;
  }

  if (!api_response || !api_response.data) {
    throw `No video or image found or invalid response from API.`;
  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type;
    const mediaURL = mediaData.url_download;

    let cap = `Here is the ${mediaType.toUpperCase()} >,<`;

    if (mediaType === 'video') {
      conn.sendFile(m.chat, mediaURL, 'instagram.mp4', cap, m);
    } else if (mediaType === 'image') {
      conn.sendFile(m.chat, mediaURL, 'instagram.jpg', cap, m);
    }
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^(instagram|igdl|ig|insta)$/i;

export default handler;
