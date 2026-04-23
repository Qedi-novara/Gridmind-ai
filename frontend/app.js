async function load() {
  const res = await fetch("/api/grid");
  const data = await res.json();

  document.getElementById("harare").innerText = data.harare;
  document.getElementById("bulawayo").innerText = data.bulawayo;
}

setInterval(load, 2000);
load();
