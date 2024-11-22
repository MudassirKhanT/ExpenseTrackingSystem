//import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import React from "react";
import { Button } from "../../@/components/ui/button";
function Header() {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src={"./logo.svg"} alt="Logo.svg" width={80} height={100} />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
