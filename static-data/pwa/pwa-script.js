    <script src="js/addtohomescreen.js"></script>
    <script>
        addToHomescreen( {
            appID: "com.powergamesenlinea.www",
            appName: "Power Games En Línea",
            lifespan: 15,
            autostart: true,
            skipFirstVisit: true,
            minSessions: 1,
            displayPace: 0,
            customPrompt: {
                title: "Install Power Games En Línea?",
                src: "meta/favicon-96x96.png",
                cancelMsg: "Cancel",
                installMsg: "Install"
            }
        } );
    </script>