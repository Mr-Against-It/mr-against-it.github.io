# Mr Against It — Universal Client-Side Engineering & 3D Artist Workstations (`v0.806 beta`)

> **Live Web App:** [https://mr-against-it.github.io/](https://mr-against-it.github.io/)  
> **Direct Launch — Mr. Convert It:** [https://mr-against-it.github.io/tools/mr_convert_it/](https://mr-against-it.github.io/tools/mr_convert_it/)  
> **Support Development:** [Donate on Patreon](https://www.patreon.com/c/MrAgainstIt)

**Mr Against It** is a 100% browser-based engineering workstation suite and **Toolset for 3D Artists**, CAD/BIM engineers, game & VFX creators, and makers powered by **OpenCASCADE WebAssembly (`occt-import-js`)**, **Three.js WebGL**, **JSZip**, and **`fflate`**. For 3D artists it handles `.FBX`/`.GLB`/`.GLTF`/`.USDZ`/`.OBJ`/`.DAE`/`.PLY` format exchange, isotropic & curvature-adaptive retopology/remeshing, polygon LOD decimation & subdivision with hard-edge crease preservation, mesh healing, and point-cloud-to-mesh surfacing. Every geometry kernel, repair pipeline, remesher, cross-section engine, and exporter runs locally in client RAM and GPU: **zero files are uploaded to any server, zero cookies are created, and every page refresh starts cleanly**.

---

## Applications & Release Channel Status (`v0.806 beta`)

| Application | Version | Status | Description |
| :--- | :--- | :--- | :--- |
| **Mr. Convert It** | `0.806 beta` | **Live** | Universal Toolset for 3D Artists, CAD/BIM Engineers & Makers — Converter + Repair, Remeshing, Point-Cloud Reconstruction & Section Studio |
| **Mr. Nest It** | `0.202 alpha` | **In Development** | True-Shape 2D Sheet & 1D Profile Nesting Engine (specs visible in Mr Against It — Workstation Hub; not yet deployed) |
| **Mr. Solar-power It** | `0.502 alpha` | **In Development** | 3D Photovoltaic Roof Array CAD & Yield Engine (specs visible in Mr Against It — Workstation Hub; not yet deployed) |
| **Mr. Fasten It** | `0.100 alpha` | **In Development** | 3D Standard Fastener Library (ISO/DIN/ANSI), Parametric Part Generator & N·m Torque Lookup |

---

## Toolset for 3D Artists, Game/VFX Creators & Digital Sculptors

In addition to precision CAD/CAM engineering, **Mr Against It** (`Mr. Convert It`) functions as an all-in-one browser workstation for **3D Artists, Game/VFX creators, AR/VR developers, and digital sculptors** — with zero desktop installs or cloud uploads:

- **3D Artist & DCC/Game Format Exchange:** Direct import and symmetric export across **`.FBX`**, **`.GLB`/`.GLTF`**, **`.USDZ`** (Apple AR / NVIDIA Omniverse), **`.OBJ`**, **`.DAE`** (Collada), **`.3DS`**, **`.PLY`**, **`.STL`**, **`.3MF`**, **`.WRL`**, and **`.X3D`** — plus instant CAD-to-DCC conversion directly from `.STEP`/`.IGES`/`.BREP`/`.3DM`/`.FCStd`/`.3DXML`/`.SAT`/`.X_T`/`.IFC` models.
- **Surface Retopology & Remeshing:** Four topology engines — **Botsch-Kobbelt Isotropic**, **Curvature-Adaptive Grading**, **Voxel SDF Surface Reconstruction**, and **Delaunay Edge-Flip Regularizer** — with live mean edge length ($L_{\text{avg}}$) and equilateral triangle quality ($Q$) metrics.
- **Polygon LOD Decimation & Subdivision:** Continuous `15%–400%` density slider, instant `-50%` / `+100%` quick-step LOD scaling, hard-edge crease locking (`>25°`), and **5 resampling algorithms** (`QEM Adaptive`, `Loop Smooth Subdivision`, `Planar Midpoint`, `Spatial Voxel Clustering`, `Isotropic Equal-Edge`).
- **Automated Mesh Healing & Cleanup:** Live defect audit (`Open Edges`, `Non-Manifold`, `Degenerate`, `Unwelded Verts`), spatial vertex welding, concave Ear-Clip hole sealing, BFS outward normal/winding unification, non-manifold/debris filtering, and volume-preserving Taubin $\lambda/\mu$ smoothing.
- **3D Scan & Photogrammetry Point-Cloud Meshing:** Convert raw laser/photogrammetry scans into clean meshes via **Ball-Pivoting (k-NN BPA)**, **Screened Voxel Implicit SDF**, **2.5D Relief Delaunay**, or **3D Alpha-Shape Shrink-Wrap**, or sample any mesh back to a dense cloud with **To Cloud**.
- **Real-Time Viewport Shaders & Per-Body Targeting:** Switch between **`Machined`**, **`Matte`**, **`X-Ray`**, and **`Normals`** inspection shaders with `CAD Edges`, `Wireframe`, `Points`, capped cross-sections, and selective per-object / per-submesh targeting.

---

## Privacy, Stateless Architecture & Mr Against It Hub Controls

- **Zero Server Uploads:** B-Rep faceting, mesh healing, remeshing, point-cloud reconstruction, slicing, and exporting execute strictly inside your local browser runtime.
- **Zero Cookies & Tracking:** `document.cookie` is never written, and no analytics scripts or user accounts exist.
- **Manual Local Persistence:** Because every browser reload starts from clean memory, use **Save `.MRPROJ`** (or export any format) to store work on your own drive and reopen `.MRPROJ`/`.JSON` snapshots anytime.
- **Mr Against It — Workstation Hub Controls & Shortcuts:**
  - `M` / `T` — Toggle **Tools** catalog drawer (search by name, format, or kernel; filter by `All`, `Live`, `CAD`, `CNC`, `Structural`, `Additive`)
  - `H` / `0` — Return to **Mr Against It — Workstation Hub & Privacy Hub**
  - `I` — Open the **About** modal displaying all **9 core functional capability modules**, complete format tag list, and direct **Donate on Patreon** support CTAs (both inside the modal body banner and the sticky `#modal-patreon-donate-btn` footer button)
  - `1` / `2` / `3` — Quick-launch / inspect tool specs (`Mr. Convert It`, `Mr. Nest It`, `Mr. Solar-power It`)
  - **Reload**, **Full Tab** launch, and clickable **Beta Update Channel** status badge (`version.json` check with cache-busting)
  - Direct **Donate on Patreon** CTAs inside all two-row long-operation progress overlays (`Loading`, `Surface Remesh`, `Point-Cloud Mesher`) and under the right-sidebar **Export File Types** panel.

---

## Mr. Convert It (`0.806 beta`) — Complete Feature Reference

### 1. Universal CAD, Mesh & Scan Upload (`46` Accepted Extensions + `32` Sample Generators)

Open files via the header **Open CAD / Scan** button, drag-and-drop onto `#drop-zone`, load any of the **32 built-in test samples** from the auto-collapsing header **Sample CAD & Scans** dropdown, or generate/download sample files from **Test Sample by Format** (**Load Sample** / **Save File**):

| Category | Accepted Input Extensions | Built-In Sample Models |
| :--- | :--- | :--- |
| **CAD, B-Rep & BIM** | `.STEP`, `.STP`, `.IGES`, `.IGS`, `.BREP`, `.BRP`, `.FCSTD`, `.3DXML`, `.SAT`, `.SAB`, `.X_T`, `.3DM`, `.IFC` | CNC Bolted Flange (`.STEP`), Machined Valve Housing & Spool (`.IGES`), OpenCascade Spur Gear & Hub (`.BREP`), FreeCAD Bearing Housing (`.FCStd`), SolidWorks/CATIA Actuator (`.3DXML`), ACIS Arched Pillow Block (`.SAT`), Parasolid Hollow Shaft Coupling (`.X_T`), Rhino3D Octagonal Enclosure (`.3DM`), BIM 3-Member Steel Portal Frame (`.IFC`) |
| **FEA & Simulation Meshes** | `.INP`, `.MSH`, `.BDF`, `.NAS`, `.OFF` | Abaqus Cantilever I-Beam (`.INP`), Gmsh Hollow CFD Venturi Nozzle (`.MSH`), Nastran NACA-2415 Wing Rib (`.BDF`), CGAL Toroidal Manifold (`.OFF`) |
| **3D Printing & Polygons** | `.STL`, `.OBJ`, `.3MF`, `.AMF`, `.PLY` | LiquidJet Micro-Coldplate (`.STL`), Wavefront Planetary Gear Carrier (`.OBJ`), Aerospace Twin-Rib Bracket (`.3MF`), Additive Finned Hub (`.AMF`), Stanford Polygon Torus (`.PLY`) |
| **AR, VR & Visualization** | `.GLB`, `.GLTF`, `.FBX`, `.DAE`, `.WRL`, `.VRML`, `.X3D`, `.3DS` | Robotic Wrist Joint (`.GLB`), FBX Hollow Bevel Hub & Spindle (`.FBX`), Collada ROS Robot Link (`.DAE`), VRML97 16-Tooth PolyJet Gear (`.WRL`), Web3D Hollow Hexagonal Manifold (`.X3D`), 3ds Max Sculpted Turret (`.3DS`) |
| **LiDAR & Point Clouds** | `.LAS`, `.PCD`, `.PTX`, `.ASC`, `.PTS`, `.XYZ` | ASPRS Binary LiDAR Dome (`.LAS`), ROS PCL Cloud Scan (`.PCD`), Leica Intensity Grid Scan (`.PTX`), Turbine Impeller 12k Scan (`.XYZ`) |
| **2D/3D CNC, Plotter & Project** | `.DXF`, `.SVG`, `.NC`, `.GCODE`, `.TAP`, `.PLT`, `.HPGL`, `.MRPROJ`, `.JSON` | AutoCAD Laser Mounting Plate (`.DXF`), 3-Axis CNC Helical Pocket (`.NC`), HPGL Gasket Cutter Plot (`.PLT`), Workspace Multi-Body Snapshot (`.MRPROJ`) |

> Note: OpenCASCADE WebAssembly (`occt-import-js`) handles native B-Rep tessellation for `.STEP`/`.STP`, `.IGES`/`.IGS`, and `.BREP` assemblies directly in the browser.

---

### 2. Metrology & Dimensional Telemetry

- Displays active **Source Format** badge (`NO MODEL` until loaded)
- Axis-aligned bounding-box dimensions: **`ΔX (Width)`**, **`ΔY (Height)`**, **`ΔZ (Depth)`** (`mm`)
- Computed **`Area` (`cm²`)** and signed closed solid **`Vol` (`cm³`)** via tetrahedral integration
- Live scene totals: **`Objects`**, **`Vertices`**, and **`Elements`**

---

### 3. Geometry Repair & Automated Mesh Healing

- **Live Geometry Health Diagnostics:** Reports **`Open Edges`**, **`Non-Manifold`**, **`Degenerate`**, and **`Unwelded Verts`** with a live health badge (`HEALTHY` / defect status).
- **Per-Body Target Selection:** Apply repairs only to checked bodies (**All** / **None** synced with **8. Assembly Hierarchy**).
- **5 Selectable Repair Algorithms:**
  1. **`Full Auto-Heal Pipeline (All-in-One)`** — Spatial vertex welding, degenerate sliver/duplicate cleanup, floating debris island filtering, ear-clip boundary hole sealing, and outward winding unification.
  2. **`Vertex Welding & Sliver/Duplicate Purge`** — Welds coincident vertices within tolerance and removes NaN/zero-area/duplicate triangles.
  3. **`Watertight Boundary Hole Filling (Ear-Clip)`** — Extracts open boundary edge loops (including concave openings) and seals holes with ear-clip triangulation.
  4. **`Normal Unification & Winding Orientation`** — Propagates consistent triangle winding across connected components and orients closed solids outward.
  5. **`Non-Manifold Split, Island Filter & Taubin Smooth`** — Resolves non-manifold edges, removes disconnected floating debris islands, and applies volume-preserving Taubin smoothing.
- **Stitch Tolerance Presets:** `0.0001 mm` (Ultra-Fine CAD), `0.001 mm` (Standard B-Rep/Mesh), `0.01 mm` (Coarse STL), `0.05 mm` (Aggressive Stitch).
- **Utilities:** **Auto-Fix Broken Geometry** (also mirrored on the viewport toolbar as **Auto-Fix**), **Simulate Defects** (injects test holes, flipped faces, slivers, and non-manifold fins), and **Restore Original** (also on the viewport toolbar as **Restore**).

---

### 4. Mesh Quality & Vertex Density Resampling

- Live **`Current (V/T)`** vs. **`Target (V/T)`** comparison cards
- Continuous **`Target Vertex Density`** slider (`15%–400%`) + preset pills (`0.25x`, `0.5x`, `1.0x`, `2.0x`, `4.0x`) and instant **Decrease (-50%)** / **Increase (+100%)** actions
- **5 Quality / Remesh Algorithms:**
  1. **`Quadric Error (QEM) & Curvature Adaptive`** — Decimates flat planar regions first and subdivides high-curvature fillets on upsampling.
  2. **`Loop Smooth Subdivision (Curved Surface)`** — Smoothly subdivides curved organic or sculpted surfaces.
  3. **`Planar Midpoint / Coplanar CAD Preserving`** — Preserves sharp machined faces without rounding off coplanar flats.
  4. **`Spatial Voxel Grid Clustering (Uniform)`** — Quantizes/clusters vertices uniformly across spatial cells.
  5. **`Isotropic Equal-Edge Remesher`** — Normalizes triangle edge lengths uniformly across the target body.
- Supports **Preserve sharp CAD feature creases (`>25°`)**, point-cloud density resampling, line-drawing segment resampling, **Auto-Calibrate**, and **Restore Original**.

---

### 5. Surface Remeshing & Retopology Engine

- Live edge & shape metrics: **`Mean Edge` (`Lavg` in `mm`)** and **`Equilateral Q` (`0–100%`)**
- **4 Algorithms with Dedicated Parameter Panels:**
  1. **`Isotropic Uniform Edge Remesher (Botsch-Kobbelt)`** — Configures Target Edge (`mm`), Crease Lock (`°`), Remesh Iterations (`1–10 passes`), and Tangential Smoothing (`0–100%`).
  2. **`Curvature-Adaptive CAD/FEA Grading`** — Configures Min Fine Edge (`mm`), Max Flat Edge (`mm`), Curvature Sensitivity (`Low`, `Medium`, `High`, `Ultra`), and sharp crease preservation.
  3. **`Voxel-Grid Spatial Surface Reconstruction`** — Configures Voxel Grid Resolution (`12–200 cells`), Taubin Smooth Passes (`0–6`), and feature-weighted dual edge snapping.
  4. **`Delaunay Edge-Flip & Sliver Regularizer`** — Configures Delaunay Flip Passes (`1–12`), Max Flip Angle (`°`), and mode (`Flip Only`, `Split + Flip`, `Full Regularize`).
- **Two-Row Live Progress Feedback:** Displays the active body/stage + `%` on Row 1 and active pass/iteration details on Row 2, along with a direct Patreon support CTA.
- Includes **Auto-Calibrate** (computes optimal parameters from model scale and triangle quality) and **Restore Original**.

---

### 6. Point Cloud to Mesh Surface Reconstruction

- Displays loaded **`Cloud Points`** and **`Mean Spacing` (`mm`)**, plus a **To Cloud** button to sample a dense surface point cloud from any loaded solid mesh.
- **4 Surface Reconstruction Algorithms:**
  1. **`Ball-Pivoting / Advancing-Front (k-NN BPA)`** — Search Radius (`mm`), k-NN Neighbors (`6–30 pts`), Hole Fill Bridging (`0–5 passes`), Surface Smoothing (`0–100%`).
  2. **`Screened Voxel Iso-Surface (Implicit SDF)`** — SDF Grid Resolution (`20–128 cells`), Splat Kernel (`vox`), Taubin Smooth (`0–6 passes`), and Seal Open Boundaries (Watertight Solid).
  3. **`2.5D LiDAR / Relief Delaunay Grid`** — Projection Axis (`Auto-Detect`, `Y`, `Z`, `X`), Output Topology (`Watertight Solid Base` / `Open Surface Sheet`), 2D Grid Density (`24x24–160x160`), Elevation Smoothing (`0–6 passes`).
  4. **`3D Alpha-Shape / Watertight Shrink-Wrap`** — Alpha Radius (`mm`), Tightness (`25–100%`), Cage Subdivision Depth (`Level 2–5`, up to `20,480 tris`).
- Includes two-row progress feedback, **Auto-Calibrate**, and **Restore** (reverts meshes back to the original point cloud when needed).

---

### 7. Capped Solid Cross-Section & 2D Laser Slice

- Toggle section cut **`ON` / `OFF`** along **`X`**, **`Y`**, or **`Z`** (`0%–100%` offset slider).
- Generates **watertight solid cross-section caps** with **even-odd hole preservation** (nested internal bores/channels remain open) and **45° CAD hatch lines** instead of hollow shell interiors.
- One-click **Save Active 2D Cross-Section (`.DXF`)** directly from the live section plane.
- Interactive **`Point Size`** slider (`0.5px–8.0px`) for point clouds and vertex overlays.

---

### 8. Assembly Hierarchy & Per-Body Target Selection

- Lists every loaded solid body, point cloud, or 2D profile with a selected counter badge (`X/Y sel`).
- Toggle visibility per body or across all objects (**Toggle All**).
- Check/uncheck target bodies (**Select All** / **Deselect All**) so **Repair**, **Mesh Quality**, **Surface Remeshing**, **Point Cloud to Mesh**, and **Restore Original** modify only the selected bodies (all selected by default).

---

### 9. 3D Viewport, Shaders & Desktop / Mobile UI

- **Camera & Navigation:** Orbit/pan/zoom via Three.js `OrbitControls`, view presets (**ISO**, **FRONT**, **TOP**, **RIGHT**), and **Fit to Screen** (shortcut `F`).
- **Viewport Overlays & Quick Tools:** **CAD Edges**, **Wireframe**, **Points**, **Grid**, **Auto-Rotate**, **Auto-Fix**, and **Restore**.
- **Material Shaders:** Switch live between **Machined** (satin metallic CAD shading), **Matte**, **X-Ray**, and **Normals**.
- **Adaptive Desktop (2) / Mobile (3) Switcher:** Switch manually or automatically (`< 1024px` / touch) between dual sidebars on desktop and full-screen responsive tabs (**`3D Viewport`**, **`Inspect & Slice`**, **`Export (35+)`**) + dynamic `visualViewport` fitting and responsive wrapped top toolbars on mobile browsers.
- **Sidebar Controls:** **Jump to Submenu...**, **Jump to Exporter...**, and **Expand** / **Collapse** all sections.

---

### 10. Universal Exporter Suite (`35+` Output Formats)

All right-sidebar exporter dropdown headers show the full list of formats contained inside, paired with global **Output Filename**, **Unit Scale** (`1.0x mm`, `0.1x cm`, `0.001x m`, `0.03937x inches`), and **Up Axis** (`Y-Up WebGL` / `Z-Up CAD/Slicer`):

| Exporter Group | Export Formats |
| :--- | :--- |
| **Output Job & Scale** | `.MRPROJ` (Local Workspace Snapshot), `.PNG` (Viewport Render) |
| **CAD, B-Rep & 2D CNC (`13`)** | `.STEP` (AP214), `.IGS` (IGES 5.3), `.BREP` (OpenCascade), `.SAT` (ACIS), `.X_T` (Parasolid), `.3DM` (Rhino/OpenNURBS), `.IFC` (IFC4 BIM), `.FCStd` (FreeCAD Native B-Rep ZIP), `.3DXML` (Dassault SW/CATIA), `.DXF` (AutoCAD 2D Laser Profile / Active Slice), `.NC` (2D CNC G-Code), `.SVG` (1:1 2D Vector), `.PLT` (HPGL Plotter Cut) |
| **FEA & Simulation (`4`)** | `.INP` (Abaqus / CalculiX), `.MSH` (Gmsh CFD), `.BDF` (Nastran Bulk), `.OFF` (CGAL / MeshLab) |
| **3D Printing Slicers (`4`)** | `.3MF` (Prusa / Bambu), `.AMF` (ISO/ASTM XML), `.STL` (**Binary & ASCII**), `.OBJ` (Wavefront Multi-Mesh) |
| **AR, VR & Visualization (`8`)** | `.USDZ` (Apple AR / NVIDIA Omniverse), `.GLB` (glTF 2.0 Binary), `.GLTF` (JSON), `.WRL` (VRML97 PolyJet), `.X3D` (Web3D ISO XML), `.FBX` (Autodesk 7.4 ASCII), `.3DS` (3ds Max Chunk Mesh), `.DAE` (Collada ROS/Gazebo) |
| **LiDAR & Point Clouds (`7`)** | `.LAS` (ASPRS Binary RGB), `.PCD` (ROS PCL), `.PTX` (Leica Intensity+RGB), `.PLY` (Stanford Polygon/Scan), `.ASC` (ASCII RGB), `.PTS` (Leica Tracker), `.XYZ` (`X Y Z Nx Ny Nz`) |

---

## Bugs & Fixes Changelog

### `v0.806 beta` — Workstation Tools, Precision Settings, Format Expansion & Hardening

| Area | Bug / Improvement | Fix / Addition Implemented |
| :--- | :--- | :--- |
| **Multi-Step Undo / Redo (`Ctrl+Z` / `Ctrl+Y`)** | Destructive transforms, repairs, remeshes, and body edits could only revert to the initial file state | Added an 8-snapshot local RAM Undo/Redo history stack (`workstation_tools.js`) with GPU buffer disposal and atomic rollback when cancelling background Web Worker jobs |
| **Interactive 3D Measurement** | Metrology only showed global bounding-box dimensions without point-to-point inspection | Added raycast click-to-measure **2-Point Distance** (`mm` + `ΔX / ΔY / ΔZ`) and **3-Point Angle** (`°`) with 3D viewport markers, inline HUD switcher, and dynamic non-overlapping toolbar positioning |
| **3D Visual Analysis Overlays** | Defect counts were numeric-only without spatial highlighting on the 3D model | Added viewport overlays for **Open & Non-Manifold Edges** (cyan/red), **3D Print Overhangs (`>45°`)**, and **Inverted Normals (Red Backfaces)** synced live with tolerance and visibility toggles |
| **Transform, Scale & Multi-Body Suite** | Models imported in inches/cm or tilted orientations required external CAD tools to re-orient or split | Added `Rot X/Y/Z 90°`, `Mirror X/Y/Z` (with automatic winding flip), `×0.1` / `×10` / `in→mm` / `mm→in` + custom scale, `Ground Y=0`, live **Crease Angle (`5°–85°`)**, **Split Shells**, **Merge Selected**, and inline **Rename / Delete** per body |
| **100% Local Batch Converter (`.ZIP`)** | Converting multiple CAD/mesh files required opening and exporting them one by one | Added client-side multi-file **Batch Convert to `.ZIP`** (`fflate.zipSync`) in Submenu 1 and multi-file drag-and-drop prompt while preserving the active open workspace and Undo history |
| **World Origin, Z-Up & Export Controls** | Auto-centering shifted CAD/BIM world coordinates to `(0,0,0)`; native Z-up formats (`.IFC`/`.3DM`/`.3DS`/`.LAS`) double-rotated when `Z-Up` was selected | Added **Original Origin** coordinate restoration, **Selected Only** export filtering, configurable **B-Rep Face Budget (`5k` / `15k` / `30k` / `Unlimited`)**, **Binary `.PLY`** export, and a native Z-up double-rotation guard |
| **`.USDZ` & Full `.SVG` Importers + CAD Detail** | `.USDZ` had export-only support and `.SVG` only parsed `<polyline>`/`<polygon>` | Added `.USDZ` archive importer (`fflate`/`JSZip` `.usda` extraction), full `.SVG` `<path>` (`M/L/H/V/C/Q/Z`), `<circle>`, `<ellipse>`, `<rect>`, and `<line>` parsing, **CAD Import Detail (`Draft`/`Standard`/`Fine`)**, **Auto-Center** toggle, and scale-adaptive **`Auto`** repair tolerance |
| **Mesh Repair & Sample Cleanliness** | Built-in `.STEP` flange sample showed 24 seam degenerates on load; complex scattered hole fills could leave residual non-manifold edges | Cleaned `ExtrudeGeometry` arc seams on load (`WATERTIGHT`), added a post-hole-fill non-manifold cleanup pass, switched crease normal welding to scale-adaptive precision, and made `.MRPROJ` lossless across `selected`/`visible`/`originOffset` |

### `v0.805 beta` — Sample Library, UI/UX, Stability & Export Fixes

| Area | Bug / Issue Reported | Fix Implemented |
| :--- | :--- | :--- |
| **Sample Models (All 32 Formats)** | Multi-body sample models had overlapping/interpenetrating solids and basic placeholder primitives | Rebuilt all 32 built-in samples with high-detail, watertight procedural CAD geometry (toothed spur gears, hollow Venturi nozzle, NACA-2415 airfoil wing rib, concentric valve housing & spool, twin-rib bracket, 3-member steel portal frame, planetary gear carrier, hollow shaft coupling, robotic wrist joint) — mathematically verified across all `52` bodies and `72` pairs with **0 overlaps** |
| **Body Selection & Visibility** | Clicking body names in **8. Assembly Hierarchy** did not deselect them, and **Toggle All** did not refresh telemetry/health or prevent `<details>` collapse | Converted Assembly Hierarchy row labels to clickable `<label>` elements, enlarged the eye button hit target, added `event.preventDefault(); event.stopPropagation()` to **Toggle All**, and synced `refreshModelMetricsOnly()` + `analyzeModelHealth()` on visibility toggles |
| **Desktop Viewport Toolbar** | Top-right viewport buttons (`Points`, `Grid`, `Auto-Fix`, `Restore`) clipped behind the right sidebar on `1024px–1500px` desktop screens | Changed `#viewport-top-toolbar` to `flex-wrap 2xl:flex-nowrap` with wrapped inner action buttons so all controls stay visible |
| **File Picker & Loader** | `.PLY`, `.SVG`, and `.BRP` (FreeCAD B-Rep) files were hidden in the OS file dialog | Added `.ply`, `.svg`, and `.brp` to `#file-input` `accept` and routed `.brp` through `parseOCCTFile`; moved `.3DM` text-block check ahead of WASM wait for instant sample loading |
| **Keyboard & UI Polish** | Pressing `Ctrl+F` (browser Find) or typing `f` in dropdowns triggered `Fit to Screen`; CAD dropzone pill overflowed; About modal title truncated; layout toast showed internal `(2)`/`(3)` suffixes | Guarded the `F` shortcut against modifier keys (`Ctrl`/`Meta`/`Alt`) and form fields, added `max-w-full break-all` to the dropzone pill, enabled wrapping on the Suite Hub About modal header, and cleaned up layout switch toasts (silent on initial load) |
| **Optimized-Model Exports** | Dense or remeshed models truncated faces in `.STEP`/`.IGES`/`.BREP`/`.SAT`/`.X_T`, corrupted 16-bit `.3DS` indices (`>65,535`), or dropped tiny triangles at meter scale (`0.001x`) | Removed low triangle caps, deduplicated `.STEP` vertices, added watertight QEM simplification for ultra-dense B-Rep exports (`>15k` tris), added automatic `.3DS` sub-mesh chunk splitting, and switched weld/area tolerances to bounding-box-relative precision |
| **Importer & Exporter Edge Cases** | `.PLY` could download `"null"` on empty geometry or treat point clouds divisible by 3 as meshes; `.USDZ` failed without UVs; `.XYZ` negative normals, `.OFF` per-face RGBA, `.IFC` `#id` lists, `.DXF` classic `POLYLINE`, `.FBX` nested braces, and `.LAS` scaling failed on certain files | Added null-guard and point-cloud preservation to `.PLY`, automatic UV generation for `.USDZ`, and hardened `.XYZ`, `.OFF`, `.IFC`, `.DXF`, `.FBX`, and `.LAS` parsers/encoders |
| **Performance & Memory** | Heavy mesh repair/remesh/point-cloud jobs could freeze the UI thread, leak GPU buffers, or conflict if clicked concurrently | Offloaded heavy geometry pipelines to a **100% browser-local Web Worker** (`geometry_worker.js`) with instant **Cancel**, numeric edge keys (**24–41% faster**), `fflate` `.3MF`/`.FCStd` packaging (**>6× faster**), indexed `.DAE` (**~3× smaller**), full GPU/RAM disposal, concurrency job lock, and `webglcontextlost`/`webglcontextrestored` recovery |

### `v0.804 beta` — Strict CAD/BIM/3D Specification & Download MIME Fixes

| Area | Bug / Issue Reported | Fix Implemented |
| :--- | :--- | :--- |
| **Download Extensions (`.3MF` / `.txt`)** | `.3MF` and `.FCStd` downloaded as `.zip` archives; ASCII CAD/mesh files (`.STEP`, `.IGS`, `.OBJ`, `.FBX`, etc.) downloaded as `.txt` documents | Enforced `application/octet-stream` MIME type across `JSZip`/`fflate` package generation and all exporter `Blob` downloads |
| **CAD / BIM / 3D Format Validity** | Exported `.STEP`, `.IGES`, `.BREP`, `.FCStd`, `.3DM`, `.FBX`, `.IFC`, `.DXF`, `.DAE`, `.AMF`, and `.PTX` files failed to open in external CAD/3D software | Rebuilt `.STEP` (ISO 10303-214 `ADVANCED_FACE` + `PLANE` + `SHELL_BASED_SURFACE_MODEL`), `.IGES` (5.3 dynamic Hollerith + bounded planar Entity `108`/`106`), `.BREP`/`.FCStd` (valid `CASCADE Topology V1` `TShapes` + `Triangulations`), `.3DM` (native binary OpenNURBS via `rhino3dm` WASM), `.FBX` (complete 7.4 ASCII scene graph with normals, materials & `Connections`), `.IFC` (full IFC4 spatial hierarchy), `.DXF` (AutoCAD R12 `HEADER`/`TABLES`), `.DAE` (vertex normals + sanitized XML IDs), `.AMF` (1-based IDs + metadata), and `.PTX` (10-line Leica Cyclone header) — verified directly against **OpenCASCADE C++ WASM** and **Rhino OpenNURBS WASM** |
| **Point-Cloud / 2D Cross-Format Export** | Exporting a loaded point cloud or 2D line drawing to a 3D mesh/CAD format produced empty files or random triangles | Added automatic surface reconstruction / ribbon meshing inside `buildExportSceneClone()` when exporting clouds/lines to 3D solid/mesh formats |
