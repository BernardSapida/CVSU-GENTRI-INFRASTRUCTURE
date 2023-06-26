"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="px-3 d-flex align-items-center shadow-sm">
      <ul className="me-auto m-0 p-0">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logo/cvsu_gentri.png"
            alt="Logo"
            width="200"
            height="30"
            priority={true}
          />
        </Link>
      </ul>
      <ul className="m-0 p-0">
        <li>
          <Link href="/infrastructures">Infrastructures</Link>
        </li>
      </ul>
    </nav>
  );
}
