"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the React hook plugin once. registerPlugin is idempotent, so
// importing this module from any client component is safe.
gsap.registerPlugin(useGSAP);

export { gsap, useGSAP };
