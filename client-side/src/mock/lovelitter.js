import Mock from 'mockjs';
import qs from 'querystring';

// Mock.mock(/^\/api\/lovelitter\/[^/]+$/, 'get', {
//   code: 0,
//   mag: '',
//   data: [
//     {
//       id: '1',
//       contentup: '晚上和你聊天，10点钟不到，你就说“',
//       mark: '困了，去睡觉了',
//       contentdown: '”。现在凌晨1点钟，看到你给他的朋友圈点赞评论，约他明天去吃火锅，一定是你微信被盗了吧。',
//       type: 'type1',
//     },
//     {
//       id: '2',
//       contentup: '一生这么长，我需要一个人作伴“',
//       mark: '说说废话',
//       contentdown: '”。凑一桌吃饭，把余下的一生都过完，而那个人只能是你。',
//       type: 'type2',
//     },
//     {
//       id: '3',
//       contentup: '你最可爱了。我说的时候来不及思索，我仔细想过之后，还是会这么说“',
//       mark: '想送你很多很多口红，让你每天还我一点点',
//       contentdown: '”。你问我多喜欢你，我说不出来。但是我心里明白，我宁愿和你吵架，也不愿意去爱别人。',
//       type: 'type3',
//     },
//   ],
// });
Mock.mock(/^\/api\/lovelitter(\?.+)?$/, 'get', (options) => {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      'total|2000-3000': 0,
      [`rows|${query.limit || 1}`]: [
        {
          'id|1-3000': 1,
          contentup: '@cparagraph(1, 3)',
          mark: '@ctitle(4, 9)',
          contentdown: '@cparagraph(1, 3)',
          'num|1-5': 1,
          type: 'type@num',
        },
      ],
    },
  });
});
