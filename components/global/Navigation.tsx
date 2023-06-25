"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="px-5 d-flex align-items-center shadow-sm">
      <ul className="me-auto m-0 p-0">
        <a className="navbar-brand" href="#">
          <Image
            src="/images/logo/cvsu_gentri.png"
            alt="Logo"
            width="200"
            height="30"
            priority={true}
          />
        </a>
      </ul>
      <ul className="m-0 p-0">
        <li>
          <Link href="#">Infrastructures</Link>
        </li>
      </ul>
    </nav>
  );
}
