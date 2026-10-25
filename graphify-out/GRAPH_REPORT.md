# Graph Report - bitbridge pay  (2026-10-25)

## Corpus Check
- 14 files · ~182,096 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .css 1, .tsbuildinfo 1)

## Summary
- 68 nodes · 69 edges · 11 communities (6 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Core Application & Layout
- UI Components
- Configuration & Metadata
- Documentation & Specification
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 5 edges
3. `next` - 4 edges
4. `Home()` - 3 edges
5. `Header()` - 3 edges
6. `Hero()` - 3 edges
7. `lucide-react` - 2 edges
8. `tailwindcss` - 2 edges
9. `metadata` - 1 edges
10. `NOTE: This file should not be edited` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `Header()`  [EXTRACTED]
  app/page.tsx → components/Header.tsx
- `Home()` --calls--> `Hero()`  [EXTRACTED]
  app/page.tsx → components/Hero.tsx

## Import Cycles
- None detected.

## Communities (11 total, 5 thin omitted)

### Community 0 - "Core Application & Layout"
Cohesion: 0.12
Nodes (16): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+8 more)

### Community 1 - "UI Components"
Cohesion: 0.14
Nodes (12): name, private, version, postcss, react, react-dom, tailwindcss, @types/node (+4 more)

### Community 2 - "Configuration & Metadata"
Cohesion: 0.43
Nodes (5): Home(), Header(), Hero(), lucide-react, next

### Community 3 - "Documentation & Specification"
Cohesion: 0.29
Nodes (7): devDependencies, postcss, tailwindcss, @types/node, @types/react, @types/react-dom, typescript

### Community 4 - "Community 4"
Cohesion: 0.40
Nodes (5): dependencies, lucide-react, next, react, react-dom

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Knowledge Gaps
- **7 isolated node(s):** `react`, `react-dom`, `@types/node`, `@types/react`, `@types/react-dom` (+2 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 50 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Configuration & Metadata` to `UI Components`, `Community 6`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **What connects `react`, `react-dom`, `@types/node` to the rest of the system?**
  _7 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core Application & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Documentation & Specification` to `UI Components`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Why does `scripts` connect `Community 5` to `UI Components`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._