export default function shareTwitter() {
  const sendText: string = '당신의 홈카페 취향을 확인하세요!' // 전달할 텍스트
  const sendUrl: string = 'https://picaff.ga/test/' // 전달할 URL
  const link: string = 'https://twitter.com/intent/tweet?text=' + sendText + '&url=' + sendUrl
  window.open(link, 'share', 'width=500, height=500')
}
