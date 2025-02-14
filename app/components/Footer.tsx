import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-10 px-5 text-center">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h5 className="text-sm">preps.dev</h5>
                    <p className="text-sm">Building the web, one pixel at a time.</p>
                </div>

                <div className="flex space-x-4">
                    <Link href="https://github.com" target="_blank" className="hover:text-white transition">
                        <GithubIcon className="w-5 h-5" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
                        <TwitterIcon className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
                        <LinkedinIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="mt-6 text-xs text-gray-600">
                © {new Date().getFullYear()} preps.dev. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
