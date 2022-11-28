import { ComponentChildren } from "preact";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
type Props = {
    children: ComponentChildren;
};

export default function Footer() {
    const menus = [
        {
            title: "Documentation",
            children: [
                { name: "Getting Started", href: "#" },
                { name: "Guide", href: "#" },
                { name: "API", href: "#" },
                { name: "Showcase", href: "#" },
                { name: "Pricing", href: "#" },
            ],
        },
        {
            title: "Community",
            children: [
                { name: "Forum", href: "#" },
                { name: "Discord", href: "#" },
            ],
        },
        {
            title: "Solutions",
            children : [
                { name: "Marketing", href: "#" },
                { name: "Analystics", href: "#" },
                { name: "Commerce", href: "#" },
                { name: "Insights", href: "#" },
            ]
        },
        {
            title: "Support",
            children : [
                { name: "Pricing", href: "#" },
                { name: "Documentation", href: "#" },
                { name: "Guides", href: "#" },
                { name: "Api Status", href: "#" },
            ]
        },
        {
            title: "Company",
            children : [
                { name: "About", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Jobs", href: "#" },
                { name: "Press", href: "#" },
                { name: "Partners", href: "#" },
            ]
        },
        {
            title: "Legal",
            children : [
                { name: "Claim", href: "#" },
                { name: "Privacy", href: "#" },
                { name: "Terms", href: "#" },
            ]
        },
    ];

    return (
        <footer>
            <div className="container justify-center mx-auto">
                {/* <div className="grid grid-cols-5">
                    <div>
                        <h3>Solutions</h3>
                        <ul>
                            <li>Marketing</li>
                            <li>Analystics</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>Api Status</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Legal</h3>
                        <ul>
                            <li>Claim</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Language & Currency</h3>
                        <div className="flex flex-col w-full">
                            <select name="language" id="">
                                <option value="en">English</option>
                                <option value="id">Bahasa</option>
                            </select>
                            <select name="currency" id="">
                                <option value="usd">USD</option>
                                <option value="idr">IDR</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div>
                        <h3>Subscribe to our newsletter</h3>
                        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    </div>
                    <div className="flex">
                        <input type="text" placeholder="Enter your email"/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div>
                        <p>2022 Workflow, inc. All rihts reserved.</p>
                    </div>
                    <div className="flex">
                        <input type="text" placeholder="Enter your email"/>
                        <button>Subscribe</button>
                    </div>
                </div> */}

                <div class="bg-white flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
                    <div class="flex-1">
                        <div class="flex items-center gap-1">
                            <LemonIcon class="inline-block" />
                            <div class="font-bold text-2xl">
                                Fresh
                            </div>
                        </div>
                        <div class="text-gray-500">
                            Full Stack Framework
                        </div>
                    </div>

                    {menus.map((item) => (
                        <div class="mb-4" key={item.title}>
                            <div class="font-bold">{item.title}</div>
                            <ul class="mt-2">
                                {item.children.map((child) => (
                                    <li class="mt-2" key={child.name}>
                                        <a
                                            class="text-gray-500 hover:text-gray-700"
                                            href={child.href}
                                        >
                                            {child.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div class="text-gray-500 space-y-2">
                        <div>
                            <h3>Language & Currency</h3>
                            <div className="flex flex-col w-full">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option>English</option>
                                    <option>Bahasa</option>
                                </select>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="usd">USD</option>
                                <option value="idr">IDR</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <h3>Newsletter</h3>
                            <div className="flex space-x-1 w-full">
                                <input
                                    type="text"
                                    name="email-address"
                                    id="email-address"
                                    autoComplete="email"
                                    placeholder="your email address"
                                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm transition ease-in-out"
                                />
                                <button className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Subscribe</button>
                            </div>
                        </div>

                        <div class="text-xs">
                            Copyright © 2020 DenoLand<br />
                            All right reserved.
                        </div>

                        <a
                            href="https://github.com/denoland/fresh"
                            class="inline-block hover:text-black"
                        >
                            <BrandGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}