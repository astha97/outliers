import React from 'react';
import Layout from '../components/Layout';
import NewsData from '../components/NewsData';

function News() {
  return (
    <Layout heroText="언론속의 에이네." isCompact>
      <NewsData
        sourceURL="http://news.wowtv.co.kr/NewsCenter/News/Read?articleId=A201908010444&amp;t=NN"
        publisher="한국 경제 TV"
        releaseDate="2019.08.01"
        newsTitle="인공지능 기반 소셜 플랫폼 ‘에이네’, 1.5억 규모 시드 투자 유치"
      />
    </Layout>
  );
}

export default News;
