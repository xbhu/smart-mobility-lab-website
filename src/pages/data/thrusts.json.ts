// https://lab.mobilitypsu.com/data/thrusts.json: the research thrusts in display order.
import { exportMeta, exportThrusts } from "../../lib/export";

export async function GET() {
  return new Response(JSON.stringify({ ...exportMeta(), thrusts: await exportThrusts() }, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
