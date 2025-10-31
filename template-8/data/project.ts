export const project = [
    {
        flexrow: "flex-row",
        title: "ChillBoard: AI-Based Digital Wellness Dashboard",
        cover: "/chill-1.png", // Keep this for backward compatibility
        covers: [
            "/chill-1.png",
            "/chill-2.png",
            "/chill-3.png",
            "/chill-4.png"

        ],
        github: "https://github.com/manikanta201104/ChillBoard-AI-Based-Digital-Wellness-Dashboard.git",
        external: "https://www.chillboard.in",
        descriptionHtml:
            "Privacy-first wellness dashboard adopted by 200+ users to track screen time, analyze mood locally, and deliver Spotify-based recommendations. On-device mood detection via face-api.js (TensorFlow.js) with ~90% validation accuracy; signals auto-curate playlists and nudge breaks. Challenge/leaderboards with scheduled jobs and analytics boosted engagement by ~25%. Secured stack with JWT auth, bcrypt, role-based routes, CORS hardening, HTTPS, and Winston logging. Backend containerized and deployed on Render with GitHub Actions CI/CD; frontend on Vercel. Added email via AWS SES/Resend with SMTP fallback.",
        techs: ["React.js", "Node.js/Express", "MongoDB", "TensorFlow.js", "face-api.js", "Spotify API", "Docker", "Vercel", "Render"],
    },
    {
        flexrow: "flex-row-reverse",
        title: "ChillBoard Chrome Extension",
        cover: "/chillboard.png",
        covers: [
            "/chillboard.png",
            "/chillboard-2.png",
            "/chillboard-3.png",
        ],
        github: "https://github.com/manikanta201104/Final-extension.git",
        external: "https://chromewebstore.google.com/detail/chillboard-extension/feaegaofmcfblfmegpkliepealjhongd",
        descriptionHtml:
            "MV3 extension with 100+ installs to monitor tab usage and aggregate multi-session screen time. Accurate tracking across tab activate/update/remove and idle states; resilient offline queue with batched HTTPS sync to web dashboard every 5 minutes. JWT-based auth handshake with secure CORS flow and minimal-scope permissions; privacy-by-design (hostname-only, no full URLs). Polished popup UI (login, stats, settings) with error/telemetry hooks.",
        techs: ["HTML", "CSS", "JavaScript", "MV3", "Chrome APIs (tabs, alarms, storage, idle)", "Node.js"],
    },
    {
        flexrow: "flex-row",
        title: "File Sharing Application",
        cover: "/file-1.png",
        covers: [
            "/file-1.png",
            "/file-2.png",
            "/file-3.png",
        ],
        github: "https://github.com/manikanta201104/Filesharing_frontend.git",
        external: "https://filesharing-frontend-gg0t.onrender.com/",
        descriptionHtml:
            "Deployed secure file-sharing app serving 50+ users weekly. Enhanced file upload/download pipeline, reducing latency by 20%.",
        techs: ["MongoDB", "Node.js", "Express.js", "HTML/CSS"],
    },
];