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
    district: "서울특별시 강남구 대치동",
    blurb: "서울대명고등학교 모집요강",
    detail:
      "서울대명고등학교는 서울특별시 강남구 대치동, 학원가가 밀집한 교육 중심지에 자리한 일반계 고등학교입니다. 헌터 특성화고가 아닌 정규 교육과정 중심의 학교로서 내신과 수행평가의 내실을 최우선으로 다져 왔으며, 대치 일대의 교육 인프라를 일상처럼 활용할 수 있는 입지를 자랑합니다. 하교 후 도보로 유성헌터교육원 대치본원에 닿을 만큼 통학 동선이 짧아, 학업과 방과 후 과정을 병행하기에 더없이 유리한 위치에 있습니다.",
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
    district: "서울특별시 강남구 개포동",
    blurb: "개포여자고등학교 모집요강",
    detail:
      "개포여자고등학교는 서울특별시 강남구 개포동에 자리한 일반계 여자고등학교입니다. 강남 남부 주거권의 중심에 위치하여 통학이 안정적이며, 면학 분위기와 생활 지도의 꼼꼼함으로 학부모님들의 신뢰를 쌓아 온 학교입니다. 헌터 특성화 과정은 운영하지 않으나, 각성 사회를 살아가는 학생들이 학교 생활을 흔들림 없이 이어 갈 수 있도록 일반고로서의 내실을 지켜 왔습니다. 하교 후 대치동 학원가로는 버스를 기본 동선으로 안내드리고 있습니다.",
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
    district: "서울특별시 서초구 반포 생활권",
    blurb: "연화여자고등학교 모집요강",
    detail:
      "연화여자고등학교는 서울특별시 서초구, 한강 남단 반포 생활권에 자리한 일반계 여자고등학교입니다. 강남과 서초를 잇는 교통 요지에 위치하여 학업과 방과 후 활동을 함께 소화하기 좋은 환경을 갖추고 있으며, 면학 분위기와 진로 지도의 균형으로 서초권에서도 손꼽히는 학교라는 평가를 받고 있습니다. 한강을 끼고 대치동으로 넘어오는 동선이 분명하여, 하교 후 유성헌터교육원으로의 이동 또한 무리 없이 이루어집니다.",
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
    district: "서울특별시 노원구 중계동",
    blurb: "서울북부고등학교 모집요강",
    detail:
      "서울북부고등학교는 서울특별시 노원구 중계동 일대에 자리한 강북권 일반계 고등학교입니다. 동북부 교육의 중심지로서 면학 분위기와 진로 지도의 내실을 쌓아 왔으며, 수도권 전철 7호선 등 광역 교통망을 통해 강남·대치 학원가로의 접근이 가능합니다. 헌터 특성화고는 아니나, 원거리 통학을 감수하고도 대치동의 전문 교육을 병행하는 학생들이 적지 않을 만큼 학구열이 높은 학교입니다. 하교 후 대치행은 지하철 환승을 기본으로 안내드립니다.",
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
    district: "서울특별시 성동구 성수·왕십리",
    blurb: "성동제일고등학교 모집요강",
    detail:
      "성동제일고등학교는 서울특별시 성동구, 성수·왕십리 생활권에 위치한 일반계 고등학교입니다. 한강 북단의 교통 결절점에 자리하여 도심 전역으로의 이동이 편리하며, 성수동 일대의 변화하는 도시 환경 속에서도 면학 분위기를 굳건히 지켜 온 학교입니다. 2호선 등 주요 노선을 활용하면 방과 후 대치동 학원가와의 병행이 가능하며, 대치동까지는 한강을 건너는 시간이 통학의 상당 부분을 차지합니다.",
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
    district: "서울특별시 강남구 대치동",
    blurb: "유성헌터교육원 - 대치본원 방문",
    detail:
      "유성헌터교육원 대치본원은 서울특별시 강남구 대치동, 수학학원이 늘어선 학원가 한가운데에 자리한 헌터 전문 교육기관입니다. 상담·이론·출결이 한곳에서 이루어지는 본원으로서, 등급을 약속하지 않는 대신 출결과 안전, 진로 설계의 내실로 원생과 보호자분의 신뢰를 쌓아 왔습니다. 정규 수업은 22:00에 종료되며, 안내부터 진로설계실, 소규모 실기까지 층별로 시설을 갖추고 있어 방문 시 동선을 미리 확인하시면 편리합니다.",
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
    district: "서울특별시 강남구 대치동 · 본원 도보권",
    blurb: "유성헌터교육원 - 실기별관 방문",
    detail:
      "유성헌터교육원 실기별관은 대치본원에서 골목 하나 떨어진 도보권에 위치한 실기 전용 시설입니다. 매트와 보호대, 비상정지 체계를 중심으로 현장과 가까운 훈련을 제공하며, 점수보다 부상 예방과 안전 규범을 우선하는 유성의 실기 철학이 가장 분명하게 드러나는 공간입니다. 본원 정규와 연계하여 기초체력과 모의던전 기초를 소화하실 수 있도록, 방문 시에는 별관 출입 안내를 먼저 확인해 주시기 바랍니다.",
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
    district: "서울특별시 강남구 수서동",
    blurb: "유성헌터교육원 - 수서훈련센터 방문",
    detail:
      "유성헌터교육원 수서훈련센터는 서울특별시 강남구 수서동에 자리한 확장 실기·모의던전 시설입니다. 본원 정규가 끝난 뒤 더 넓은 공간이 필요할 때 활용하는 주말 중심 훈련장으로, 평일 야간 정규 과정은 운영하지 않습니다. 수서역 일대의 교통 편의와 대치본원에서의 연계 이동을 고려하여 설치되었으며, 안전한 모의던전 환경을 자랑합니다.",
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
