import { LoaderFunction } from "remix";

export let loader: LoaderFunction = async () =>
  fetch("https://developer.mozilla.org/en-US/docs/Web/API/Request/index.json");
