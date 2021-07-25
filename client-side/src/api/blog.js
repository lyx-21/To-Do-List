import request from './request';

// 分页获取blog列表
async function getBlogs(page = 1, limit = 8, id = 1) {
  const result = await request.get('/api/blog', {
    params: {
      page,
      limit,
      id,
    },
  });
  return result.rows;
}

export default {
  getBlogs,
};
