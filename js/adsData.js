// adsData.js
let adsData = [
    {
        id: 1,
        title: "Ad 1",
        description: "This is the first ad.",
        href: "http://example.com",
        image: "ad1.jpg",
        targetPage: "index",
        visibility: 30,
        expirationDate: new Date().setDate(new Date().getDate() + 30), // Expires in 30 days
        status: "active",
        clicks: 0,
        reach: 100,
        createdAt: new Date()
    },
    {
        id: 2,
        title: "Ad 2",
        description: "This is the second ad.",
        href: "http://example2.com",
        image: "ad2.jpg",
        targetPage: "about",
        visibility: 15,
        expirationDate: new Date().setDate(new Date().getDate() + 15), // Expires in 15 days
        status: "hold",
        clicks: 0,
        reach: 200,
        createdAt: new Date()
    }
];
