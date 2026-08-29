export const WORLD_ASSETS = {
  chirashi: "/assets/world/dachi_info.png",
  dachita: "/assets/world/dachita.png",
  gallery: "/assets/world/gallery.png",
  insta: "/assets/world/insta.png",
  ysboard: "/assets/world/ysboard.png",
  ysnet: "/assets/world/ysnet.png",
  catSchedule: "/assets/world/world-cat-schedule.png",
  catMoney: "/assets/world/world-cat-money.png",
  catTest: "/assets/world/world-cat-test.png",
  catCommute: "/assets/world/world-cat-commute.png",
  catBoard: "/assets/world/world-cat-board.png",
} as const;

export const WORLD_TIMETABLE = [
  { time: "07:50", label: "학교", note: "조회 전 개찰" },
  { time: "16:10", label: "하교", note: "편의점 봉투 획득" },
  { time: "17:00", label: "일반학원 / 자습", note: "수학이든 공간이든" },
  { time: "19:00", label: "유성", note: "QR 출결" },
  { time: "22:00", label: "수업 종료", note: "22시 이후 없음" },
  { time: "23:XX", label: "귀가", note: "막차 계산" },
] as const;

export const WORLD_RECEIPT = [
  { item: "수강료", value: "정규 4과목" },
  { item: "특강", value: "모의던전 주말" },
  { item: "교통", value: "하교→대치→집" },
  { item: "장비", value: "보호대 렌탈/구매" },
  { item: "검사", value: "감각·마력반응" },
  { item: "보강", value: "내신 겹치면 추가" },
] as const;

export const WORLD_CAREERS = {
  awakened: ["현장", "구조", "탐색", "전략"],
  either: ["연구", "행정", "보험", "장비", "미디어"],
  unawakened: ["상담", "통계", "교육", "물류"],
} as const;

export const WORLD_COMMUNITY = [
  { board: "학생익명", text: "잔향 뜬 1학년 있다며", meta: "익명 · 좋아요 214" },
  { board: "학부모카페", text: "유성 반 이름 보고 등급 가나요?", meta: "댓글 89" },
  { board: "팬덤", text: "오늘 별관 실기 클립", meta: "조회 1.2만" },
  { board: "검색", text: "각성률 5% 실화냐", meta: "연관 질문" },
  { board: "단톡", text: "본인도 모르는데 예상등급 올림", meta: "읽음 28" },
] as const;
