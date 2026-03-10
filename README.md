# Rock, Paper, Scissors

An advanced take on the classic web-based game **Rock, Paper, Scissors**. This project was built utilizing standard front-end technologies to deliver a fully responsive, state-persistent gaming experience, fulfilling a prominent Frontend Mentor challenge.

---

## Features

- **Responsive Layout:** The structural hexagon grid automatically formats to optimal dimensions across mobile, tablet, and desktop resolutions.
- **Dynamic Scoring mechanism:** Play the computer in real-time, receiving instant interactive feedback on wins, losses, or ties.
- **Persisted State:** Leveraging JavaScript's Local Storage API, the user's score natively persists even if the browser session handles refreshes or navigating away.
- **Pristine Animations:** Utilizes beautiful scalable vector shapes via SCSS/CSS micro-animations on interaction.
- **Rule Verification:** A modal popup details the complete complex ruleset natively utilizing Bootstrap.

---

## Technologies Used

- **HTML5:** Semantic architecture
- **CSS3:** Custom Layout positioning, Media Queries, Scalable background vectors, and Advanced Flexbox alignments.
- **JavaScript (ES6+):** Vanilla DOM Manipulation, State handling, Interval logic, and Web Storage API integration.
- **jQuery / Bootstrap 5:** To power modal utility mapping and rapid UI scaffolding.

---

## Design System Guide

The project scales according to the following strict layout and color constraints provided by the specification.

### Layout Dimensions
- **Mobile Minimum Form Factor:** 375px
- **Desktop Ideal Scaling:** 1366px

### Primary Colors (Gradients)
- **Scissors:** `hsl(39, 89%, 49%)` to `hsl(40, 84%, 53%)`
- **Paper:** `hsl(230, 89%, 62%)` to `hsl(230, 89%, 65%)`
- **Rock:** `hsl(349, 71%, 52%)` to `hsl(349, 70%, 56%)`
- **Lizard:** `hsl(261, 73%, 60%)` to `hsl(261, 72%, 63%)`
- **Cyan (Spock):** `hsl(189, 59%, 53%)` to `hsl(189, 58%, 57%)`

### Neutral Palettes
- **Dark Text:** `hsl(229, 25%, 31%)`
- **Score Text:** `hsl(229, 64%, 46%)`
- **Header Outline:** `hsl(217, 16%, 45%)`

### Background Configuration
- **Radial Ambient Gradient:** `hsl(214, 47%, 23%)` to `hsl(237, 49%, 15%)`

### Typography configuration
- **Typeface Families:** Barlow Semi Condensed
- **Valid Font Weights:** 600, 700

---

## Game Rules

If the player wins, they gain 1 point. If the computer wins, the player loses one point.

*   **Scissors** beats Paper
*   **Paper** beats Rock
*   **Rock** beats Scissors

---

## Installation & Usage

1. **Clone the repository.**
   ```bash
   git clone https://github.com/ZynzTehr/advanced-rock-paper-scissors.git
   ```

2. **Open the game!**
   Since this relies on purely Vanilla web architecture, no build systems are needed.
   Simply double-click on `index.html` inside root, or launch a live server instance from your preferred IDE.

3. **Play:** Pick a symbol and watch the points multiply (automatically caching state across refresh triggers).

4. **Resetting your Score:** Because the score persists in your browser's Local Storage, it won't reset on a normal refresh. To reset your score back to 0:
   - **Option A:** Open your browser's Developer Tools (F12 or Right Click -> Inspect), go to the **Console** tab, type `localStorage.removeItem('rpslsScore')`, and press Enter. Refresh the page.
   - **Option B:** Alternatively, you can clear your browser's local site data/cache.

---
*Created per FrontEnd Mentor design guidelines.*
