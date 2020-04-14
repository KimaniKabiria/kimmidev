module.exports = {
    siteMetadata: {
        title: 'Kimmi Devs',
        author: 'Alvin Kimani',
        imageUrl: 'https://i.imgur.com/Vz81GEl.png',
        description: 'This is a portfolio website for Alvin Kimani',
        keywords: `Alvin Kimani, kimmidev, Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
        twitter: '',
        github: '',
        medium: '',
        gatsby: '',
        bulma: '',
        siteUrl: `https://www.example.com`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                    resolve: 'gatsby-remark-external-links',
                        options: {
                            target: '_blank',
                            rel: 'nofollow noopener noreferrer',
                        },
                    },
                ],
            },
        },
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Makefolio',
                short_name: 'Makefolio',
                start_url: '/',
                background_color: '#2980b9',
                theme_color: '#2980b9',
                display: 'standalone',
                icon: 'src/images/logo.png',
                orientation: 'portrait'
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-XXXXXXXX-X',
                // Setting this parameter is optional (requried for some countries such as Germany)
                anonymize: true
            }
        },
        `gatsby-plugin-sitemap`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ]
};