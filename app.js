document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("/api/grid");
  const data = await res.json();

  document.getElementById("output").innerText =
    JSON.stringify(data, null, 2);
});
