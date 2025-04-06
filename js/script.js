
function setTab(tabId) {
  document.querySelectorAll('.content').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}
