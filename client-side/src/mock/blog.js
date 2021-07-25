import Mock from 'mockjs';
import qs from 'querystring';

// 分页获取blog列表
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', (options) => {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      'total|50-120': 0,
      [`rows|${query.limit || 8}`]: [
        {
          id: '@guid', // 唯一id
          title: '@ctitle(5, 10)', // 生成标题
          description: '@cparagraph(1, 10)', // 生成中文段落 1到10句话
          category: { // blog所属分类
            'id|1-10': 0, // 随机分类id 1-10
            'name|1': ['科技', '随笔'], // 分类名
            display: 'none',
            isStrck: '',
          },
          'scanNumber|0-3000': 0, // 浏览量 随机生成一个数字 1-3000
          'commentNumber|0-300': 30, // 随机生成 评论数量
          'like|0-100': 21, // 点赞
          'image|1': [ // 缩略图地址
            {
              src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@8745542720266bd510bb490c5cab8c1135733bc7/2021/05/13/37c1a7623d4e16acc347790f47eb9eef.webp',
              placeholder:
                        'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@8745542720266bd510bb490c5cab8c1135733bc7/2021/05/13/37c1a7623d4e16acc347790f47eb9eef.webp',
            },
            {
              src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@e7a07ba19907478887f2dd75dd711a16a8ee3ec7/2021/07/01/97899761361a645cf8bc5711fc44c39a.webp',
              placeholder:
                          'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@e7a07ba19907478887f2dd75dd711a16a8ee3ec7/2021/07/01/97899761361a645cf8bc5711fc44c39a.webp',
            },
            {
              src: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@d0d5e4e5b7a595ac4bdbe3a339e350b37984d31f/2021/05/24/debce45e87fbb961107575097dbf75bd.webp',
              placeholder: 'https://cdn.jsdelivr.net/gh/s-Ruthless/moeor_img@d0d5e4e5b7a595ac4bdbe3a339e350b37984d31f/2021/05/24/debce45e87fbb961107575097dbf75bd.webp',
            },
          ],
          createDate: '@date("yyyy-MM-dd")', // blog发布时间 使用时间戳
        },
      ],
    },
  });
});
