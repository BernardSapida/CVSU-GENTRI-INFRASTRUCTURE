"use client";

import {
  BsFillTelephoneFill,
  BsYoutube,
  BsFacebook,
  BsInstagram,
  BsGlobe,
} from "react-icons/bs";

import Link from "next/link";

export default function TopNavigation() {
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
          <Link
            href="https://www.generaltrias.gov.ph/"
            target="_blank"
            className="mx-1 fs-6"
          >
            <BsGlobe />
          </Link>
          <Link
            href="https://www.facebook.com/CvSUgeneraltrias2012"
            target="_blank"
            className="mx-1 fs-6"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://www.youtube.com/@cavitestateuniversitymainc7893"
            target="_blank"
            className="mx-1 fs-6"
          >
            <BsYoutube />
          </Link>
          <Link
            href="https://www.instagram.com/explore/locations/447983188575520/cavite-state-university-indang-cavite/"
            target="_blank"
            className="mx-1 fs-6"
          >
            <BsInstagram />
          </Link>
        </li>
      </ul>
    </header>
  );
}
