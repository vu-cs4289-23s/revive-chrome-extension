import React from "react";

import { TopBar } from "./topbar.js";
import { NavBar } from "./navbar.js";

export const Privacy = () => {
  return (
    <div class="bg-slate-50 rounded-xl">
        <TopBar/>
        <div class="ml-3">
        <div class="text-3xl font-mono text-cyan-500 text-center mb-3">Privacy Policy</div>
        <div class="text-l font-mono text-stone-600 mb-3">
            Thank you for using Revive, the Chrome extension that helps you find second-hand clothing! We take your privacy very seriously, and this Privacy Policy outlines the information we collect, how we use it, and how we keep it secure.
        </div>
        <div class="text-l font-mono text-cyan-600">
            Information We Collect:
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
            When you use Revive, we may collect the following information:
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
                The URLs of the webpages you visit while using the extension
                The information of the item you're looking at on the webpage, such as the brand, type, and size
                Information about the second-hand clothing we suggest, such as the brand, price, and location
                Information related to your Google account that you use to log in, such as your name and email address.
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
            We do not collect any other personally identifiable information, such as your payment information.
        </div>
        <div class="text-l font-mono text-cyan-600">
            How We Use Your Information:
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
            We use the information we collect to provide you with relevant suggestions for second-hand clothing. We may also use this information to improve our services, such as by analyzing which types of clothing are most frequently searched for.
            We use your Google account information to authenticate your login, so you do not need to create a separate account for our service. We do not share your information with any third parties, except as required by law or to provide you with the services you have requested.
        </div>
        <div class="text-l font-mono text-cyan-600">
            Data Security:
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
            We take data security very seriously and use industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </div>
        <div class="text-l font-mono text-cyan-600">
            Changes to this Privacy Policy:
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
            We may update this Privacy Policy from time to time, and we will notify you of any material changes by posting a notice on our website or within the extension itself.
        </div>

        <div class="text-l font-mono text-cyan-600">
            Contact Us:
        </div>
        <div class="text-l font-mono text-stone-600 mb-3">
            If you have any questions or concerns about our Privacy Policy, please contact us at fc.revive.extension@gmail.com.
        </div>
        </div>
        <NavBar/>
    </div>
  );
}