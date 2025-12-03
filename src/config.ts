import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "布吉岛",
	keywords: "布吉岛,网站优化技术,服务器配置教程,网站源码教程,Cloudflare使用 ",
	description: "个人小破站，纯纯记录垃圾思维",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/top.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon.ico", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "友情链接",
			url: "/friends/",
			external: false,
		}
	],
};

export const profileConfig: ProfileConfig = {
	title: "布吉岛",
	avatar: "assets/images/aaa.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "小森",
	bio: "心存敬畏 行有所止\n珍惜当下 不负时光",
	links: [
		{
			name: "Home",
			icon: "fa6-brands:chrome",
			url: "https://mtab.987119.xyz",
		},
		
		{
			name: "BiliBili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/353774279",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/onexru",
		},
	],
	icp: "桂ICP备2021008816号-2"
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const friends = [
	{
		name: "sun-panel",
		url: "https://mtab.987119.xyz/",
		avatar: "assets/ico/sun-panel.png",
		description: "个人标签页"
	}
]
