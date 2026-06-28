"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once. registerPlugin is idempotent, so importing this
// module from any client component is safe.
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export { gsap, useGSAP, ScrollTrigger };
