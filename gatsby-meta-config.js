module.exports = {
  siteUrl: `https://www.dblepart99.github.io`,
  title: `삽질이 곧 경험치`,
  description: `삽질이 곧 경험치`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English

  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `dblepart99/dblepart99.github.io`, // `dblepart99/dblepart99.github.io`,
    },
  },
  ga: 'G-QM4M39F63E', // Google Analytics Tracking ID
  author: {
    name: `김현수`,
    bio: {
      role: `개발자`,
      description: ['매사에 열정적인', '세상을 바꾸고 싶은', '더 나아가고 싶은'],
      thumbnail: 'profilegif-unscreen.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/dblepart99`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/hyunsoo-kim-92690a220/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
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
        date: '2019.01.14 ~ 2020.01.17',
        activity: 'ROK Army',
      },
      {
        date: '2020.06.01 ~ 2021.01.22',
        activity: 'Social Agent',
      },
      {
        date: '2020.03 ~ 2020.12',
        activity: 'ProEdu(코딩 교육 봉사단)',
      },
      {
        date: '2021.04 ~ 2021.06',
        activity: '팀 "코딩이나 해" (학업 상상 튜터링)',
      },
      {
        date: '2021.06.01 ~',
        activity: 'Check-Git-Out: GitHub API를 활용한 이력서 서비스',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/dblepart99/Check_Git_Out',
          demo: 'https://www.youtube.com/watch?v=_vczlV2JfGU&ab_channel=HyunsooKim',
        },
      },
      {
        date: '2021.06.01 ~ 2021.12.31',
        activity: 'CNU Data Network Lab Research Student',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
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
        thumbnailUrl: '', // 'blog.png',
        links: {
          post: '/Check-Git-Out',
          github: 'https://github.com/dblepart99/Check_Git_Out',
          demo: 'http://www.checkgitout.com',
        },
      },
    ],
  },
};
