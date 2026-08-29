export type LocationKind = "school" | "academy" | "training";

export type MapLocation = {
  id: string;
  name: string;
  kind: LocationKind;
  district: string;
  blurb: string;
  detail: string;
  x: number;
  y: number;
  studentIds: string[];
  commuteToHqMin?: number;
  routeVia?: string[];
  floorNotes?: { floor: string; title: string; note: string }[];
};

export const LOCATIONS: MapLocation[] = [
  {
    id: "daemyeong",
    name: "서울대명고등학교",
    kind: "school",
    district: "강남 · 대치 생활권",
    blurb: "일반계 고등학교. 헌터 특성화고가 아니다.",
    detail:
      "대치 학원가와 가깝다는 이유로 유성 통학이 짧다. 각성 여부와 관계없이 내신과 수행평가가 먼저다.",
    x: 56,
    y: 61,
    studentIds: ["serena", "sunhyung"],
    commuteToHqMin: 12,
    routeVia: ["daemyeong", "yuseong-hq"],
  },
  {
    id: "gaepo",
    name: "개포여자고등학교",
    kind: "school",
    district: "강남 · 개포 생활권",
    blurb: "일반계 여자고등학교.",
    detail:
      "각성사회 3세대가 다니는 평범한 일반고. 헌터 특성화고가 아니다. 하교 후 대치 이동은 버스가 기본이다.",
    x: 52,
    y: 75,
    studentIds: ["jihyun", "yuri"],
    commuteToHqMin: 25,
    routeVia: ["gaepo", "yuseong-hq"],
  },
  {
    id: "yeonhwa",
    name: "연화여자고등학교",
    kind: "school",
    district: "서초 생활권",
    blurb: "일반계 여자고등학교.",
    detail:
      "한강을 끼고 대치로 넘어오는 동선. 같은 반 친구도 유성 반은 갈린다.",
    x: 45,
    y: 56,
    studentIds: ["hanbyeol", "yeonseo"],
    commuteToHqMin: 28,
    routeVia: ["yeonhwa", "yuseong-hq"],
  },
  {
    id: "bukbu",
    name: "서울북부고등학교",
    kind: "school",
    district: "노원 생활권",
    blurb: "강북 일반고. 대치까지가 수업이다.",
    detail:
      "박송아의 학교. 하교 후 대치행은 지하철 환승이 기본이며, 정시 입실보다 막차 계산이 먼저다.",
    x: 71,
    y: 16,
    studentIds: ["songa"],
    commuteToHqMin: 78,
    routeVia: ["bukbu", "seongdong", "yuseong-hq"],
  },
  {
    id: "seongdong",
    name: "성동제일고등학교",
    kind: "school",
    district: "성동 생활권",
    blurb: "일반계 고등학교.",
    detail:
      "성수·왕십리 생활권. 대치까지는 한강을 건너는 시간이 통학의 절반이다.",
    x: 63,
    y: 41,
    studentIds: ["eunyoung"],
    commuteToHqMin: 42,
    routeVia: ["seongdong", "yuseong-hq"],
  },
  {
    id: "yuseong-hq",
    name: "유성헌터교육원 대치본원",
    kind: "academy",
    district: "대치동",
    blurb: "수학학원 사이에 있는 헌터학원.",
    detail:
      "본원. 상담·이론·출결의 중심. S급을 보장하지 않으며, 22:00에 수업이 끝난다.",
    x: 58.5,
    y: 64,
    studentIds: [],
    commuteToHqMin: 0,
    routeVia: ["yuseong-hq"],
    floorNotes: [
      { floor: "8F", title: "강사실 / 교무 / 행정", note: "민원과 출결 정정이 모이는 층." },
      { floor: "7F", title: "소규모 실기 / VR·AR", note: "벽은 생각보다 자주 맞는다." },
      { floor: "6F", title: "마력반응 · 감각검사", note: "그래프가 나와도 미래는 아니다." },
      { floor: "5F", title: "진로설계 / 상담", note: "학생보다 보호자가 더 긴장하는 층." },
      { floor: "2–4F", title: "강의실", note: "칠판과 QR 출결. 학원 맞다." },
      { floor: "1F", title: "안내 / 출결 / 학생라운지", note: "편의점 봉투가 가장 많이 보이는 층." },
      { floor: "B1", title: "탈의 / 장비 / 기초체력", note: "보호대 냄새가 먼저 난다." },
    ],
  },
  {
    id: "yuseong-annex",
    name: "유성 실기별관",
    kind: "training",
    district: "대치 · 도보권",
    blurb: "본원에서 골목 하나.",
    detail: "매트와 보호대, 비상정지. 점수판보다 아이스팩이 먼저 보인다.",
    x: 61.5,
    y: 66,
    studentIds: ["myeongjin"],
    commuteToHqMin: 6,
    routeVia: ["yuseong-annex", "yuseong-hq"],
  },
  {
    id: "yuseong-suseo",
    name: "유성 수서훈련센터",
    kind: "training",
    district: "수서",
    blurb: "주말 모의던전 · 확장 실기.",
    detail: "본원 정규가 끝난 뒤, 공간이 필요할 때 쓰는 훈련장. 평일 야간 정규는 없다.",
    x: 67,
    y: 73,
    studentIds: [],
    commuteToHqMin: 18,
    routeVia: ["yuseong-hq", "yuseong-suseo"],
  },
];

export function getLocation(id: string) {
  return LOCATIONS.find((l) => l.id === id);
}

export const SEOUL_MAP_IMAGE = "/assets/map/seoul-map-base.png";
