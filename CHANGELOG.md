# Changelog - Immersive Depth Experience

## New Features
- **Depth-Based Navigation**: Replaced traditional vertical scrolling with a 3D tunnel effect. Users now travel "deeper" into the biblical narrative.
- **New Stages**:
  - Added **Prophets** (Isaiah, Jeremiah, Daniel) between Poetry and Gospels.
  - Added **Apocalyptic** (Revelation) at the end of the journey.
- **Visual Enhancements**:
  - **Starfield Background**: Dynamic particles moving towards the camera.
  - **Atmospheric Layers**: Each stage has depth-dependent scaling, opacity, and blur.
  - **Cinematic Typography**: Large, bold titles with gradient fills.

## Technical Changes
- Created `components/depth/depth-timeline.tsx`: Main container for the 3D scroll logic.
- Created `components/depth/stage-layer.tsx`: Individual stage component with depth animations.
- Updated `app/page.tsx`: Now renders the `DepthTimeline`.
- Updated `lib/bible-data.ts`: Added new stages and books.
- Updated `app/globals.css`: Added utility classes for 3D perspective.

## How to Test
1. Run `npm run dev`.
2. Open `http://localhost:3000`.
3. Scroll down to experience the journey from the Pentateuch to the Apocalypse.
