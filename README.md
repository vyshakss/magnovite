# Cosmic Reveal

## Runtime Requirements

- Node.js `>=20.19.0` (recommended: Node 20 LTS or newer)

If you use `nvm`, run:

```bash
nvm install
nvm use
```

Redesign the MAGNOVITE 2026 website as a cinematic, scroll-driven cosmic experience.

The existing project is a Vite + TypeScript website. Keep the existing content, pages, images, navigation, countdown, event information, Shan Rahman section, competitions, about section, etc., but completely rethink the visual experience and transitions.

CORE CONCEPT

The website begins with a full-screen cinematic pulsar/neutron-star explosion inspired by the opening seconds of this reference:

YouTube reference — pulsar explosion

Do NOT simply embed the YouTube video as the background.

Recreate the visual effect using WebGL / Three.js / shaders / particles where practical, so that the explosion can be synchronized with the website animation and scroll.

The experience should feel like:

PULSAR → EXPLOSION → MAGNOVITE LOGO → SECOND EXPLOSION → MILLIONS OF MAGNOVITE BUTTERFLIES → DUST CLOUD → WEBSITE

1. FIRST SCREEN — THE PULSAR

The very first page must be a completely immersive full-screen scene.

There should initially be:

Almost completely black space

A small, extremely bright pulsar/star in the center

Subtle atmospheric glow

Very faint particles around it

No conventional website hero content initially

Header/navigation should either be hidden initially or extremely subtle

The pulsar should feel dense, energetic and physical, not like a simple glowing CSS circle.

Slowly build tension.

The pulsar should begin to pulse.

The glow should intensify.

Then:

FIRST EXPLOSION

The pulsar suddenly erupts outward.

Create:

Radial energy

Thousands of particles

Shockwave

Dust

Gas

Bright central flash

Expanding debris

Volumetric-looking particles

Motion blur

Depth

The explosion should feel similar in energy and cinematic timing to the reference video.

Do not make it look like fireworks.

It should look like an astronomical stellar explosion.

2. MAGNOVITE 2026 APPEARS

At the peak of the first explosion, the screen should briefly become extremely bright.

As the brightness settles, reveal:

MAGNOVITE

followed by:

2026

The existing new MAGNOVITE butterfly logo must be used.

VERY IMPORTANT

Use the NEW butterfly logo from the existing website/assets.

The butterfly must be the exact same shape/design as the butterfly currently positioned above the MAGNOVITE wordmark in the supplied screenshots.

Do NOT:

generate generic butterfly silhouettes

use old MAGNOVITE butterfly versions

substitute another butterfly icon

use random SVG butterflies

Extract/use the actual existing logo asset or a clean vector version of that exact logo.

The butterfly above the wordmark and every butterfly used in the particle animation must visually originate from the same logo shape.

3. SECOND EXPLOSION — BUTTERFLY TRANSFORMATION

After MAGNOVITE 2026 has appeared and held on screen for a moment, trigger a second major explosion.

This is the signature moment of the website.

The MAGNOVITE logo/particles should explode outward.

Then the expanding dust should begin transforming into millions of tiny MAGNOVITE butterfly particles.

Think of the entire screen becoming a gigantic swarm of butterflies.

Butterfly particle behaviour

Each particle should use the actual new MAGNOVITE butterfly shape.

The butterflies should:

Start inside / around the explosion

Expand outward

Have different scales

Have different depths

Move at different velocities

Have subtle rotation

Have slight natural fluttering/orientation changes

Produce a dense volumetric swarm

Move in 3D space rather than simply across a 2D plane

The animation should contain hundreds of thousands / millions of visual butterfly particles where performance permits.

Do not literally create millions of independent DOM elements.

Use:

Three.js

Instanced rendering

GPU particles

shaders

sprite textures

WebGL

or another GPU-efficient approach.

The visual result matters more than the implementation.

4. BUTTERFLIES BECOME THE DUST CLOUD

This is extremely important.

The butterflies should not disappear suddenly.

Their movement should gradually slow down.

They should begin dispersing and merging into a massive cosmic dust field.

Eventually:

BUTTERFLIES → PARTICLES → DUST CLOUD

The dust cloud then becomes the permanent visual environment of the website.

The transition should feel like the butterflies have physically transformed into cosmic matter.

5. THE DUST CLOUD BECOMES THE WEBSITE BACKGROUND

Once the opening animation finishes, keep the resulting dust cloud alive permanently.

This is NOT a transition to another static background.

The same dust cloud must remain behind every subsequent page.

The user should feel like they are continuously travelling through the same cosmic environment.

The dust cloud should:

Slowly move

Have depth

Have subtle parallax

Have extremely slow particle drift

Maintain its original color palette

Maintain its density

Never suddenly change into another color

Never reset between sections

COLOR CONSISTENCY

Preserve the exact visual character established during the butterfly/dust transformation.

The cloud should remain predominantly:

white

silver

soft grey

subtle warm highlights where naturally present

black surrounding space

Do not introduce random blue/purple/green nebula colors.

The dust cloud should feel like the physical remains of the opening explosion.

6. SCROLL = CAMERA TRAVEL

This is one of the most important requirements.

Scrolling through the website should NOT feel like:

section 1 → section 2 → section 3

Instead, it should feel like:

the camera is continuously travelling deeper into the same cosmic dust cloud.

As the user scrolls:

Camera slowly moves forward

Dust particles pass around the viewer

Depth increases

Particle parallax becomes visible

Some particles move toward the camera

Others remain far away

The camera gently shifts horizontally/vertically

The cloud remains the same physical environment

The movement must be smooth and cinematic.

Use scroll progress to control the camera.

Prefer:

requestAnimationFrame

interpolation / lerping

scroll velocity

smooth damping

Three.js camera movement

rather than abrupt CSS section transitions.

7. EXISTING WEBSITE CONTENT SHOULD LIVE INSIDE THIS WORLD

Keep the existing pages/content shown in the supplied screenshots.

The sections include:

Section 1

Cinematic opening

Section 2

MAGNOVITE 2026 identity / countdown

Section 3

Introduction / MAGNOVITE description

Use the supplied existing content and imagery.

Section 4

Main-stage / Shaan Rahman showcase

Keep the existing Shaan Rahman image and information.

Section 5

34+ National Battlegrounds

Keep the existing categories:

Coding & AI

Robotics & Tech

Management & Pitch

Music & Vocal

Dance & Theater

Gaming & Design

Keep the existing statistics and event information.

Section 6+

Continue with the existing pages/content such as:

About

Events

Gallery

Other existing website sections

Do not remove existing content merely to implement the animation.

8. CONTENT CARDS SHOULD FEEL LIKE THEY ARE INSIDE THE CLOUD

The existing black cards are good, but make them feel more integrated into the environment.

Use:

translucent dark glass

subtle blur

extremely thin borders

soft white highlights

subtle shadows

very restrained gradients

Do NOT make them excessively glossy or colorful.

The cosmic environment remains the dominant visual.

The UI should feel premium and cinematic.

9. SHAN RAHMAN SECTION

When the user reaches the Shaan Rahman section, the camera should already have travelled noticeably deeper into the dust cloud.

The dust should now appear closer and more immersive.

Some particles should pass in front of the content card.

The card itself should remain readable.

Do not replace the existing Shaan Rahman content.

Instead, make the content feel like it is floating inside the same universe.

10. EVENT SECTION

When reaching the 34+ National Battlegrounds section, continue the same camera journey.

The dust cloud must remain the same color and visual identity.

Do not restart the particle system.

Do not fade to a new background.

Do not change to a different star field.

The user should be able to scroll from:

Shaan Rahman → Events → About → Gallery

and feel that they are travelling through one continuous cosmic scene.

11. HEADER

Keep the existing header:

New MAGNOVITE butterfly logo

CHRIST University logo

hamburger menu

However, during the opening cinematic:

hide or minimize the header initially.

Let the pulsar/explosion have the entire screen.

After the butterfly transformation begins settling into the dust cloud, elegantly reveal the navigation.

12. OPENING ANIMATION MUST BE SCROLL-AWARE

Ideally the opening sequence should be connected to scroll progress.

For example:

0% — black space / pulsar

10% — pulsar begins pulsing

20% — energy builds

30% — first explosion

40% — MAGNOVITE 2026 appears

50% — second explosion

60% — butterfly swarm

70% — butterflies become dust

80% — camera enters dust cloud

100% — first content section

These percentages are conceptual. Adjust them to make the animation cinematic.

The user should also be able to experience the opening naturally without requiring extremely fast scrolling.

13. PERFORMANCE

This animation is expected to contain a huge number of particles.

Do NOT implement it using thousands/millions of HTML elements.

Use GPU rendering.

Prefer:

Three.js

WebGL

InstancedMesh

custom shaders

particle buffers

texture atlases

GPU interpolation

Add adaptive quality based on device performance.

For powerful desktop GPUs:

maximum particle density

For weaker machines:

progressively reduce particle count while preserving the visual illusion.

The website must remain responsive.

14. IMPORTANT: DO NOT BREAK THE EXISTING WEBSITE

Before modifying anything:

Inspect the entire existing project.

Identify all existing pages.

Identify all existing assets.

Identify the exact new MAGNOVITE butterfly logo asset.

Identify the existing particle implementation.

Identify the existing countdown.

Identify the existing page navigation.

Identify the existing images used in each section.

Then integrate the cinematic system rather than blindly replacing everything.

Preserve the existing content and functionality.

15. MOST IMPORTANT VISUAL RULE

The website must tell one continuous visual story:

A STAR EXPLODES

↓

MAGNOVITE 2026 IS REVEALED

↓

THE UNIVERSE EXPLODES AGAIN

↓

THE EXPLOSION BECOMES MILLIONS OF THE NEW MAGNOVITE BUTTERFLIES

↓

THE BUTTERFLIES BECOME COSMIC DUST

↓

THE DUST BECOMES THE PERMANENT WEBSITE ENVIRONMENT

↓

THE USER TRAVELS DEEPER INTO THAT SAME CLOUD WHILE SCROLLING

↓

ALL WEBSITE CONTENT EXISTS INSIDE THAT SAME UNIVERSE

This continuity is more important than adding extra visual effects.

Do not make every section look like a separate webpage.

It must feel like one enormous cinematic experience.

FINAL QUALITY BAR

The result should feel closer to a cinematic interactive experience / award-winning event website than a conventional college fest website.

Think:

NASA-scale cosmic visuals + premium festival branding + Apple-style restraint + WebGL interactive storytelling.

Avoid:

generic star backgrounds

random glowing gradients

generic butterfly icons

excessive neon

excessive animations on cards

abrupt section transitions

different backgrounds for different sections

cheap particle effects

2D-looking explosions

The pulsar → explosion → butterfly → dust → camera travel sequence should be the defining feature of the entire website.

these images are the original website, i want you to change them

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
