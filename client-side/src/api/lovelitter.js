import request from './request';

// 获取情书信息
async function getLoveLitter(page = 1, limit = 1, id = 1) {
  const result = await request.get('/api/lovelitter', {
    params: {
      page,
      limit,
      id,
    },
  });
  return result.rows;
}

export default {
  getLoveLitter,
};
