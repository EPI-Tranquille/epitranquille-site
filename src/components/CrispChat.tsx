"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("628213c4-c299-4bcd-ba40-39bad5f3ddd6");
  }, []);

  return null;
}
