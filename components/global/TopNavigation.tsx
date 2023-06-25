"use client";

import {
  BsFillTelephoneFill,
  BsTwitter,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { MdSchool } from "react-icons/Md";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  const router = useRouter();

  return (
    <header className="d-flex justify-content-between">
      <ul>
        <li>
          <Link href="#">
            <BsFillTelephoneFill className="mb-1 d-inline-block text_yellow" />
            Contact Us
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="#" className="mx-1 fs-6">
            <MdSchool />
          </Link>
          <Link href="#" className="mx-1 fs-6">
            <BsFacebook />
          </Link>
          <Link href="#" className="mx-1 fs-6">
            <BsTwitter />
          </Link>
          <Link href="#" className="mx-1 fs-6">
            <BsInstagram />
          </Link>
        </li>
      </ul>
    </header>
  );
}
