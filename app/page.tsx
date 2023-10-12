"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check if user is signed in (Run Once)
  useEffect(() => {
    // Check server and update state
    const checkServer = async () => {};

    // Call function
    checkServer();

    // Example:
    setIsSignedIn(false);
  }, []);

  // Redirect based on sign in status
  useEffect(() => {
    // if the user is signed in, redirect to data-util
    if (isSignedIn) {
      router.push("/data-util");
    }
    // if the user is not signed in, redirect to welcome
    else {
      router.push("/welcome");
    }
  }, [isSignedIn, router]);

  // TODO: Add loading screen (should not be needed as this should be instant)
  return <main></main>;
}
