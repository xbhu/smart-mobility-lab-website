"""Draw the System Modeling thrust illustration: a road network with link flows,
a highlighted route, and a queue discharging at a signalized node.

Usage:
  python3 tools/network_svg.py public/media/thrusts/system-modeling.svg
  python3 tools/network_svg.py public/media/thrusts/system-modeling-wide.svg 2400 800
"""
import math, random, sys
random.seed(7)
W, H = (int(sys.argv[2]), int(sys.argv[3])) if len(sys.argv) > 3 else (1600, 900)
NAVY, BLUE, LANE, WHITE = "#001e44", "#1e407c", "#f5b700", "#ffffff"
cols, rows = (9, 3) if W / H > 2.2 else (6, 4)
nodes = {}
for i in range(cols):
    for j in range(rows):
        x = 170 + i * (W - 340) / (cols - 1) + random.uniform(-40, 40)
        y = 150 + j * (H - 300) / (rows - 1) + random.uniform(-35, 35)
        nodes[(i, j)] = (x, y)
links = []
for (i, j) in nodes:
    for di, dj in [(1, 0), (0, 1)]:
        k = (i + di, j + dj)
        if k in nodes and random.random() > 0.12:
            links.append(((i, j), k))
    if (i + 1, j + 1) in nodes and random.random() < 0.18:
        links.append(((i, j), (i + 1, j + 1)))
route = [(0, 2), (1, 2), (2, 2), (2, 1), (3, 1), (4, 1), (5, 1)] if cols == 6 else [(0, 2), (1, 2), (2, 1), (3, 1), (4, 1), (5, 1), (6, 0), (7, 0), (8, 0)]
route_links = {frozenset(p) for p in zip(route, route[1:])}
for p in zip(route, route[1:]):
    if p not in links and (p[1], p[0]) not in links:
        links.append(p)

out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="Illustration of a road network with traffic flows, a highlighted route, and a queue at a signalized intersection">',
       f'<rect width="{W}" height="{H}" fill="{NAVY}"/>',
       '<defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern></defs>',
       f'<rect width="{W}" height="{H}" fill="url(#g)"/>']
# links: width ~ flow
for a, b in links:
    (x1, y1), (x2, y2) = nodes[a], nodes[b]
    if frozenset((a, b)) in route_links:
        continue
    w = random.choice([4, 6, 8, 12, 16])
    op = 0.35 + w / 40
    out.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="#4f7ac0" stroke-opacity="{op:.2f}" stroke-width="{w}" stroke-linecap="round"/>')
# route
pts = " ".join(f"{nodes[n][0]:.0f},{nodes[n][1]:.0f}" for n in route)
out.append(f'<polyline points="{pts}" fill="none" stroke="{LANE}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>')
out.append(f'<polyline points="{pts}" fill="none" stroke="{NAVY}" stroke-width="3" stroke-dasharray="18 16" stroke-linecap="round" stroke-linejoin="round"/>')
# queue of vehicles on link (3,1)->(4,1) approaching node (4,1)
(qx1, qy1), (qx2, qy2) = nodes[(3, 1)], nodes[(4, 1)]
ang = math.atan2(qy2 - qy1, qx2 - qx1)
L = math.hypot(qx2 - qx1, qy2 - qy1)
for n in range(7):
    d = L - 46 - n * 30
    cx, cy = qx1 + math.cos(ang) * d, qy1 + math.sin(ang) * d
    out.append(f'<rect x="{cx-11:.1f}" y="{cy-7:.1f}" width="22" height="14" rx="3" fill="{WHITE}" transform="rotate({math.degrees(ang):.1f} {cx:.1f} {cy:.1f})"/>')
# nodes
for k, (x, y) in nodes.items():
    on = k in route
    r = 11 if on else 8
    out.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{r}" fill="{NAVY}" stroke="{LANE if on else "#8fb0e3"}" stroke-width="4"/>')
# signal at queue node
sx, sy = nodes[(4, 1)]
out.append(f'<g transform="translate({sx+26:.0f} {sy-64:.0f})"><rect width="22" height="54" rx="5" fill="#0b2a55" stroke="#8fb0e3" stroke-width="2"/><circle cx="11" cy="14" r="6" fill="#e04b3c"/><circle cx="11" cy="38" r="6" fill="#2c4b78"/></g>')
# inset: flow-density (fundamental diagram)
ix, iy, iw, ih = W - 420, H - 250, 330, 190
out.append(f'<g transform="translate({ix} {iy})"><rect width="{iw}" height="{ih}" rx="10" fill="#0b2a55" stroke="#ffffff" stroke-opacity="0.15"/>')
out.append(f'<path d="M30 {ih-30}H{iw-20}M30 {ih-30}V20" stroke="#8fb0e3" stroke-width="2" fill="none"/>')
peak = 0.45
pts = []
for t in range(0, 101):
    k = t / 100
    q = k / peak if k < peak else (1 - k) / (1 - peak)
    pts.append(f"{30 + k*(iw-60):.1f},{ih-30 - q*(ih-70):.1f}")
out.append(f'<polyline points="{" ".join(pts)}" fill="none" stroke="{LANE}" stroke-width="4" stroke-linejoin="round"/>')
out.append(f'<text x="{iw-24}" y="{ih-10}" fill="#8fb0e3" font-family="Overpass, sans-serif" font-size="16" text-anchor="end">density</text>')
out.append(f'<text x="36" y="34" fill="#8fb0e3" font-family="Overpass, sans-serif" font-size="16">flow</text></g>')
out.append('</svg>')
open(sys.argv[1], "w").write("\n".join(out))
