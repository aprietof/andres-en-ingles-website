export default function appendYoutubeButtonScript() {
  const node = document.createElement('script');
  node.src = 'https://apis.google.com/js/platform.js';
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
}
