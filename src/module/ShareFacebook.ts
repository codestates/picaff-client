export default function shareFacebook() {
  const sendUrl: string = 'https://picaff.ga/test/' // 전달할 URL
  const link: string = 'http://www.facebook.com/sharer/sharer.php?u=' + sendUrl
  window.open(link, 'share', 'width=500, height=500')
}
