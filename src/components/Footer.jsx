import React from 'react';
import Link from '@docusaurus/Link';

import DyteLogo from './DyteLogo';
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos';
import { BlogIcon } from '../assets/icons';

export default function Footer() {
  return (
    <footer className="bg-background-100 py-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start p-4 md:px-12">
        <div className="flex flex-col items-start space-y-4">
          <Link href="https://dyte.io">
            <DyteLogo className="h-10" />
          </Link>
          <p className="text-sm leading-relaxed text-text-100">
            Dyte provides developer friendly live video SDKs that allows you to
            easily add 1:1 calls, group calls and webinars right within your
            platform. Our low code approach and user friendly documentation
            means you are ready to go live with less lines of code. We support
            use cases such as live classes, telehealth, online fitness, remote
            work, social meetups, dating and B2B sales.
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col lg:flex-row">
          <div className="flex flex-1 flex-col items-start">
            <div className="flex w-full flex-col items-start space-y-2">
              <p className="m-0 text-sm">
                Signup to get 10,000 minutes free every month!
              </p>
              <Link
                href="https://dev.dyte.in/signup"
                className="cursor-pointer rounded-md bg-primary px-8 py-1 text-left text-sm text-white hover:text-gray-300 hover:no-underline"
              >
                Sign Up
              </Link>
              {/* <form
                method="GET"
                action="https://dev.dyte.in/signup"
                target="_blank"
                className="flex items-center w-full md:max-w-sm"
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 h-10 px-3 pr-[106px] bg-background-100 text-text text-sm border border-border rounded-md focus:outline-none focus:ring-0 focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-24 h-8 ml-[-100px] bg-primary text-white rounded-md cursor-pointer"
                >
                  Sign Up
                </button>
              </form> */}
            </div>

            <div className="mt-8 flex items-center space-x-3 text-text-100">
              <Link
                href="https://twitter.com/dyte_io"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Twitter className="h-8" />
              </Link>
              <Link
                href="https://blog.dyte.io"
                className="inline-flex text-current transition hover:text-primary"
              >
                <BlogIcon className="h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/dyteio"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Linkedin className="h-8" />
              </Link>
              <Link
                href="https://github.com/dyte-in"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Github className="h-8" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid flex-1 grid-cols-2 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Product</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link
                    href="https://app.dyte.in"
                    className="text-current hover:no-underline"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dev.dyte.in"
                    className="text-current hover:no-underline"
                  >
                    Developer Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dyte.io/#pricing"
                    className="text-current hover:no-underline"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Company</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link
                    href="https://dyte.io"
                    className="text-current hover:no-underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dyte.freshteam.com/jobs"
                    className="dot-after text-current hover:no-underline"
                  >
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dyte.io/privacy-policy.html"
                    className="text-current hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:support@dyte.in"
                    className="text-current hover:no-underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Resources</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link to="/" className="text-current hover:no-underline">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.dyte.io"
                    className="text-current hover:no-underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://community.dyte.io"
                    className="dot-after text-current hover:no-underline"
                  >
                    Community
                  </Link>
                </li>
                {/* <li>
                  <a href="#" className="text-current hover:no-underline">
                    API Status
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full text-center text-sm text-text-100">
          Copyright © Dyte since 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
