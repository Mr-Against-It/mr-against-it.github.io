# Mr Against It — Universal Client-Side Engineering & 3D Artist Workstations (`v0.805 beta`)

> **Live Web App:** [https://mr-against-it.github.io/](https://mr-against-it.github.io/)  
> **Direct Launch — Mr. Convert It:** [https://mr-against-it.github.io/tools/mr_convert_it/](https://mr-against-it.github.io/tools/mr_convert_it/)  
> **Support Development:** [Donate on Patreon](https://www.patreon.com/c/MrAgainstIt)

**Mr Against It** is a 100% browser-based engineering workstation suite and **Toolset for 3D Artists**, CAD/BIM engineers, game & VFX creators, and makers powered by **OpenCASCADE WebAssembly (`occt-import-js`)**, **Three.js WebGL**, **JSZip**, and **`fflate`**. For 3D artists it handles `.FBX`/`.GLB`/`.GLTF`/`.USDZ`/`.OBJ`/`.DAE`/`.PLY` format exchange, isotropic & curvature-adaptive retopology/remeshing, polygon LOD decimation & subdivision with hard-edge crease preservation, mesh healing, and point-cloud-to-mesh surfacing. Every geometry kernel, repair pipeline, remesher, cross-section engine, and exporter runs locally in client RAM and GPU: **zero files are uploaded to any server, zero cookies are created, and every page refresh starts cleanly**.

---

## Applications & Release Channel Status (`v0.805 beta`)

| Application | Version | Status | Description |
| :--- | :--- | :--- | :--- |
| **Mr. Convert It** | `0.805 beta` | **Live** | Universal Toolset for 3D Artists, CAD/BIM Engineers & Makers — Converter + Repair, Remeshing, Point-Cloud Reconstruction & Section Studio |
| **Mr. Nest It** | `0.202 alpha` | **In Development** | True-Shape 2D Sheet & 1D Profile Nesting Engine (specs visible in Mr Against It — Workstation Hub; not yet deployed) |
| **Mr. Solar-power It** | `0.501 alpha` | **In Development** | 3D Photovoltaic Roof Array CAD & Yield Engine (specs visible in Mr Against It — Workstation Hub; not yet deployed) |
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

## Mr. Convert It (`0.805 beta`) — Complete Feature Reference

### 1. Universal CAD, Mesh & Scan Upload (`43` Accepted Extensions + `32` Sample Generators)

Open files via the header **Open CAD / Scan** button, drag-and-drop onto `#drop-zone`, load any of the **32 built-in test samples** from the auto-collapsing header **Sample CAD & Scans** dropdown, or generate/download sample files from **Test Sample by Format** (**Load Sample** / **Save File**):

| Category | Accepted Input Extensions | Built-In Sample Models |
| :--- | :--- | :--- |
| **CAD, B-Rep & BIM** | `.STEP`, `.STP`, `.IGES`, `.IGS`, `.BREP`, `.FCSTD`, `.3DXML`, `.SAT`, `.SAB`, `.X_T`, `.3DM`, `.IFC` | CNC Bolted Flange (`.STEP`), Machined Valve Housing (`.IGES`), OpenCascade Gear Blank (`.BREP`), FreeCAD Gear Housing (`.FCStd`), SolidWorks/CATIA Actuator (`.3DXML`), ACIS Pillow Block (`.SAT`), Parasolid Coupling (`.X_T`), Rhino3D Enclosure (`.3DM`), BIM Steel Portal Frame (`.IFC`) |
| **FEA & Simulation Meshes** | `.INP`, `.MSH`, `.BDF`, `.NAS`, `.OFF` | Abaqus Cantilever I-Beam (`.INP`), Gmsh CFD Venturi Nozzle (`.MSH`), Nastran Wing Rib (`.BDF`), CGAL Toroidal Manifold (`.OFF`) |
| **3D Printing & Polygons** | `.STL`, `.OBJ`, `.3MF`, `.AMF`, `.PLY` | LiquidJet Micro-Coldplate (`.STL`), Wavefront Planetary Carrier (`.OBJ`), Aerospace Twin-Rib Bracket (`.3MF`), Additive Finned Hub (`.AMF`), Stanford Polygon Torus (`.PLY`) |
| **AR, VR & Visualization** | `.GLB`, `.GLTF`, `.FBX`, `.DAE`, `.WRL`, `.VRML`, `.X3D`, `.3DS` | Robotic Wrist Joint (`.GLB`), FBX Bevel Flange Hub (`.FBX`), Collada ROS Link (`.DAE`), VRML97 PolyJet Gear (`.WRL`), Web3D Hexagonal Manifold (`.X3D`), 3ds Max Turret (`.3DS`) |
| **LiDAR & Point Clouds** | `.LAS`, `.PCD`, `.PTX`, `.ASC`, `.PTS`, `.XYZ` | ASPRS Binary LiDAR Dome (`.LAS`), ROS PCL Cloud Scan (`.PCD`), Leica Intensity Grid Scan (`.PTX`), Turbine Impeller 12k Scan (`.XYZ`) |
| **2D/3D CNC, Plotter & Project** | `.DXF`, `.NC`, `.GCODE`, `.TAP`, `.PLT`, `.HPGL`, `.MRPROJ`, `.JSON` | AutoCAD Laser Mounting Plate (`.DXF`), 3-Axis CNC Helical Pocket (`.NC`), HPGL Gasket Cutter Plot (`.PLT`), Workspace Multi-Body Snapshot (`.MRPROJ`) |

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

## Recent Bug Fixes & Improvements

### `v0.805 beta` — Stability, Performance & Optimized-Model Export Fixes
- **100% Browser-Local Background Thread (Web Worker) + Instant Cancel:** Offloaded heavy Geometry Repair, Mesh Quality / QEM Decimation, Surface Remeshing, and Point-Cloud-to-Mesh Reconstruction to a local browser Web Worker with zero-copy memory transfer and an instant **Cancel Background Job** button—everything still stays 100% inside your browser.
- **Full-Fidelity Exports After Model Optimization:** Removed low triangle truncation caps on `.STEP`, `.IGES`, `.BREP`/`.FCStd`, `.SAT`, `.X_T`, and 2D vector fallbacks (`.DXF`/`.NC`/`.SVG`/`.PLT`), deduplicated `.STEP` vertices, and added watertight QEM simplification for ultra-dense meshes (`>15,000` tris) so B-Rep exports never drop faces or leave holes.
- **`.3DS` Large-Mesh Chunk Splitting:** Automatically splits meshes exceeding `65,535` vertices or triangles into multiple valid 16-bit sub-mesh chunks so upsampled or reconstructed models never corrupt indices.
- **Scale-Adaptive Export Precision:** Replaced fixed weld/area tolerances with bounding-box-relative tolerances so exporting at `0.001x` (Meters) or after fine remeshing preserves all triangles and 2D segments.
- **Faster Workload & Exporting:** Replaced string edge keys with numeric integer keys, eliminated `O(N²)` BFS queue shifts and inner-loop allocations (**24–41% faster** repair/remesh/decimation), switched `.DAE` to indexed geometry (**~3× smaller**), and upgraded `.3MF`/`.FCStd` ZIP packaging to `fflate` (**>6× faster**).
- **Stability & Memory Management:** Added full GPU/RAM disposal on model clear, restore, and export; added a global concurrency lock to prevent overlapping jobs; added automatic WebGL context-loss recovery (`webglcontextlost`/`webglcontextrestored`); added WASM initialization awaiting for early `.STEP`/`.IGES`/`.3DM` drops; and added large-file OOM guardrails.
- **Exporter & Importer Fixes:** Fixed `.PLY` exporter argument order and point-cloud preservation (including clouds whose point count is divisible by 3), added automatic UV fallback for `.USDZ`, fixed `.XYZ` negative normal import, `.OFF` per-face RGBA import, `.IFC` `#id` point-list matching, `.DXF` classic `POLYLINE`/`VERTEX`/`SEQEND` import, `.FBX` ASCII brace-depth parsing, and `.LAS` dynamic offset/scale encoding.

### `v0.804 beta` — Strict CAD/BIM/3D Specification Compliance
- **OpenCASCADE & Rhino OpenNURBS Verified Exporters:** Rebuilt `.STEP` (AP214), `.IGES` (5.3 bounded planar surfaces), `.BREP` / `.FCStd` (native `TShapes` + `Triangulations`), `.3DM` (binary OpenNURBS via `rhino3dm` WASM), `.IFC` (IFC4 spatial hierarchy), and `.FBX` (7.4 ASCII scene graph with normals and materials).
- **Cross-Format & MIME Hardening:** Added AutoCAD R12 `HEADER`/`TABLES` to `.DXF`, 10-line Leica Cyclone header to `.PTX`, automatic point-cloud/line-drawing surfacing when exporting to 3D mesh/CAD formats, and `application/octet-stream` MIME enforcement across CAD/mesh downloads.
