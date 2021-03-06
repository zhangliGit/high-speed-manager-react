import apiList from '../../assets/js/config';
import $ajax from '../../assets/js/ajax.js';

export const NEWS_INFO = 'news_info';

/**
 * @Func ticketList
 * @Des 查询火车票列表
 */
const newsInfoActions = (data) => ({
  type: NEWS_INFO,
  list: data
});
export const newsInfoList = () => {
  return async (dispatch) => {
    const params = {
      url: apiList.newsInfoList
    }
    let data = await $ajax.get(params);
    dispatch(newsInfoActions(data.data));
  }
}