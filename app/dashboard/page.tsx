"use client";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";

import React from "react";

const page = () => {
  const { signOut } = useClerk();

  const handleLogout = () => {
    try {
      signOut({ redirectUrl: "/sign-in" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-full p-4 bg-white flex justify-between items-center">
        <h4>Logo</h4>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default page;
