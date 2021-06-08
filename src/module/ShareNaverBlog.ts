export default function shareNaverBlog() {
  const sendText: string = '당신의 홈카페 취향을 확인하세요!'
  const sendUrl: string = 'https://picaff.ga/test/'
  const link: string =
    'https://share.naver.com/web/shareView.nhn?url=' + sendUrl + '&title=' + sendText
  window.open(link, 'share', 'width=500, height=500')
}
