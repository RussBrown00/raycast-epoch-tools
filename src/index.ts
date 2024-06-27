import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const ts = Math.floor(Date.now() / 1000).toString();
  await Clipboard.copy(ts);
  await showHUD(`Copied ${ts} to clipboard`);
}
