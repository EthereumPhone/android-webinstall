export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    PRIMARY_COLOR: "#5550f2",
    SECONDARY_COLOR: "#f1f1f1",
    ACCENT_COLOR: "#5550f2",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 3",
            model: "blueline",
        },
        {
            name: "Pixel 3XL",
            model: "crosshatch",
        },
        {
            name: "Pixel 5a",
            model: "barbet",
        },
        {
            name: "Pixel 7",
            model: "panther",
        }
    ],
    RELEASE_VARIANTS: {
        beta: {
            description: "ethOS with MicroG installed.",
            suffix: "",
        },
    },
    DONATION_LINKS: [
        {
            title: "ethOS website",
            description:
                "For more information regarding ethOS visit our website!",
            highlight: false,
            url: "https://www.ethosmobile.org/",
            icon: "ethOS",
        },
        {
            title: "ethOS Discord",
            description:
                "Join our discord for early access to updates, community calls, questions and much more.",
            highlight: false,
            url: "https://discord.com/invite/FtVvK7B2KT",
            icon: "discord",
        },
        {
            title: "ethOS Twitter",
            description:
                "Follow us on twitter for the latest news regarding the ethOS",
            highlight: false,
            url: "https://twitter.com/EthereumPhone",
            icon: "twitter",
        },
    ],
};
