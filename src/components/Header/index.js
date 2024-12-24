import React from "react";
import { Link } from "react-router-dom";
// import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <Link to="/" className="text-[#FFD700] font-bold text-xl">
        FFK TRAFFIC
      </Link>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">John Doe</span>
        {/* <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar> */}
      </div>
    </header>
  );
}
