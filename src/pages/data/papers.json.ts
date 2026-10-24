// https://lab.mobilitypsu.com/data/papers.json: every paper with its authors and resource links.
import { exportMeta, exportPapers } from "../../lib/export";

export async function GET() {
  return new Response(JSON.stringify({ ...exportMeta(), papers: await exportPapers() }, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
