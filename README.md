## 원티드 프리온보딩 2주차

여행 상품 리스트를 보고 장바구니에 저장할 수 있는 SPA 구현

### [✔ 배포 링크](https://pre-onboarding-w2-likealocal.vercel.app)

**기술 스택**
* <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/>

* <img src="https://img.shields.io/badge/-Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white"/>  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/-React_Query-ff2660?style=flat-square&logo=react&logoColor=white"/>
 
* <img src="https://img.shields.io/badge/-Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white"/> <img src="https://img.shields.io/badge/-Emotion-DB7093?style=flat-square&logo=emotion&logoColor=white"/>


<br/>

## 프로젝트 실행 방법

**react app**

```bash
npm i
npm run dev
```

**json-server**

```bash
npx json-server ./data.json --w
```
<br/>

## 요구사항

>

1. 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
   - main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
   - 리스트에서 노출해야 하는 정보: `idx`, `name`, `mainImage`, `price`, `spaceCategory`
   - 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터를 저장해주세요.
   - 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
   - 모달에서 노출해야 하는 정보: `idx`, `name`, `mainImage`, `description`, `spaceCategory`, `price`, `maximumPurchases`, `registrationDate`

1. 여행 상품 리스트의 가격(`price`), 공간(`spaceCategory`) 필터 기능을 만들어주세요.
   - 예시) 0 - 1000, 1500 - 3000 가격
   - 예시) 서울, 부산 공간
   - 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요

1. 여행 상품 장바구니 (/reservations)를 만들어주세요.
   - 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
   - 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
   - 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요
