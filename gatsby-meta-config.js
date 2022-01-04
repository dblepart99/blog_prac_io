module.exports = {
  title: `삽질이 곧 경험치`,
  description: `냄뚜의 삽질일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.dblepart99.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `dblepart99/dblepart99.github.io`, // `dblepart99/dblepart99.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김현수`,
    bio: {
      role: `개발자`,
      description: ['매사에 열정적인', '세상을 바꾸고 싶은', '더 나아가고 싶은'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.06 ~',
        activity: 'Check-Git-Out: GitHub API를 활용한 이력서 서비스',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.youtube.com/watch?v=_vczlV2JfGU&ab_channel=HyunsooKim',
        },
      },
      {
        date: '2021.06 ~',
        activity: 'CNU Data Network Lab Undergraduate Research Student',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Check-Git-Out: GitHub API를 활용한 이력서 서비스',
        description: 'Web Resume Service using GitHub API',
        techStack: ['nginx', 'react', 'mysql', 'Express'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/Check-Git-Out',
          github: 'https://github.com/dblepart99/Check_Git_Out',
          demo: 'http://www.checkgitout.com',
        },
      },
    ],
  },
};
