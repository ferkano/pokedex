export async function ajax(prop) {
  let { url, cbSuccess } = prop;

  try {
    const res = await fetch(url),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    cbSuccess(json);
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ocurrio un error";
    document.getElementById(
      "main"
    ).innerHTML = `<p>error ${error.status}: ${message}</p>`;
  }
}
