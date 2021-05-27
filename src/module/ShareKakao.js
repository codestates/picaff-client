export default function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  if (window.Kakao) {
    const kakao = window.Kakao
    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      // 두번째 step에서 가져온 javascript key 를 이용하여 initialize
      kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
    }

    // 카카오링크 버튼 생성
    kakao.Link.createDefaultButton({
      container: '#btnKakao', // 카카오공유버튼ID
      objectType: 'feed',
      content: {
        title: 'PICAFF', // 보여질 제목
        description: '당신의 홈카페 취향을 확인하세요!', // 보여질 설명
        imageUrl: 'https://picaff.ga/test/', // 콘텐츠 URL
        link: {
          mobileWebUrl: 'https://picaff.ga/test/',
          webUrl: 'https://picaff.ga/test/',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    })
  }
}
