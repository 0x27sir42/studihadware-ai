# STUDIHARDWARE - AI & Mathematical IT Ecosystem Website

## Design Guidelines

### Design References (Primary Inspiration)
- **Apple.com**: Premium feel, smooth animations, clean layouts
- **Stripe.com**: Modern tech aesthetic, subtle 3D effects
- **Vercel.com**: Dark mode excellence, futuristic design
- **Style**: Futuristic Dark Mode + 3D Elements + Tech Premium

### Color Palette
- Primary: #000000 (Pure Black - background)
- Secondary: #1A1A1A (Dark Gray - sections)
- Accent Purple: #8B5CF6 (Vibrant Purple - highlights)
- Accent Blue: #00D9FF (Neon Blue - accents and glow)
- Text Primary: #FFFFFF (White)
- Text Secondary: #A0A0A0 (Light Gray)

### Typography
- Heading1 (Hero): Inter font-weight 800 (64px) - Bold, futuristic
- Heading2 (Sections): Inter font-weight 700 (42px)
- Heading3 (Subsections): Inter font-weight 600 (28px)
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasis: Inter font-weight 600 (16px)
- Navigation: Inter font-weight 600 (18px)

### Key Component Styles
- **3D Cards/Blocks**: Dark background (#1A1A1A), purple/blue gradient borders, 12px rounded, floating shadow, hover: lift + glow
- **Buttons/Links**: Purple gradient background, white text, 8px rounded, hover: brighten + scale
- **Menu**: Glass morphism effect, backdrop blur, subtle border
- **Mathematical Symbols**: Large, semi-transparent, floating with slow rotation

### Layout & Spacing
- Hero section: Full viewport height with 3D parallax background
- Section padding: 100px vertical, 80px horizontal
- Card gaps: 32px between floating blocks
- Smooth scroll behavior with offset for fixed navigation

### 3D & Animation Effects
- Floating animation: translateY oscillation (0-20px), 3-5s duration
- Glow effects: box-shadow with purple/blue colors, blur 20-40px
- Parallax: Different scroll speeds for background layers
- Hover transitions: 300ms ease-out, scale 1.05, brightness 1.2
- Mathematical symbols: rotate 360deg over 20s, opacity 0.1-0.3

### Images to Generate
1. **hero-background-3d-tech.jpg** - Abstract 3D futuristic tech background with floating geometric shapes, neural network patterns, dark purple and blue glow, depth of field effect (Style: 3d, dark, futuristic)
2. **ecosystem-ai-research.jpg** - AI research visualization with neural networks, data nodes, glowing connections, purple and blue color scheme (Style: 3d, tech, modern)
3. **ecosystem-blockchain-tech.jpg** - Blockchain and distributed systems visualization with connected blocks, cryptographic patterns, neon blue accents (Style: 3d, tech, modern)
4. **ecosystem-data-computation.jpg** - Mathematical computation visualization with matrices, algorithms, data flow, purple glow effects (Style: 3d, tech, modern)
5. **ecosystem-automation.jpg** - Intelligent automation systems with robotic elements, AI processing, interconnected systems, futuristic design (Style: 3d, tech, modern)
6. **tokenomics-infographic-bg.jpg** - Abstract background for tokenomics section with geometric patterns, subtle grid, purple and blue gradients (Style: 3d, minimalist, tech)

---

## Development Tasks

### 1. Project Setup & Structure
- Initialize HTML template
- Set up file structure (index.html, style.css, script.js)
- Link all assets and dependencies

### 2. Generate Images
- Create all 6 images using ImageCreator.generate_images
- Save to appropriate paths
- Verify image generation success

### 3. HTML Structure (index.html)
- Meta tags and title
- Navigation menu (three-dot trigger)
- Hero section with title and subtitle
- About Studihardware section
- Mathematical AI Structure section
- Ecosystem section with image slider
- Tokenomics section
- Blog section
- Footer with social links

### 4. CSS Styling (style.css)
- Reset and base styles
- Dark mode color scheme
- 3D background effects
- Floating mathematical symbols
- Navigation menu styles (glass morphism)
- Hero section with parallax
- Floating 3D blocks for mathematical structure
- Ecosystem slider styles
- Tokenomics infographic layout
- Footer styling
- Responsive design (mobile, tablet, desktop)

### 5. JavaScript Functionality (script.js)
- Smooth scroll navigation
- Three-dot menu toggle
- Floating animation for 3D elements
- Parallax scroll effects
- Mathematical symbols animation
- Ecosystem image slider (swipeable/draggable)
- Hover glow effects
- Intersection Observer for scroll animations

### 6. Animations & Interactions
- CSS keyframes for floating elements
- Hover transitions and effects
- Scroll-triggered animations
- 3D transform effects
- Glow and shadow animations

### 7. Testing & Optimization
- Cross-browser compatibility
- Responsive behavior on all devices
- Performance optimization
- Smooth animations at 60fps
- Image loading optimization

### 8. Final Check
- Run lint check
- Verify all sections work correctly
- Test navigation and scrolling
- Check all links and interactions
- Ensure premium, futuristic feel
