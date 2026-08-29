import type { Character } from "./characters";

export type PhoneTheme = "slate" | "rose" | "ink" | "lilac" | "mint" | "gold";

export type PhoneFlavor = {
  theme: PhoneTheme;
  threadName: string;
  messages: { me: boolean; text: string; time: string }[];
  notes: string[];
  transitLine: string;
  transitEta: string;
};

const THEME_BY_CLASS: Record<string, PhoneTheme> = {
  ZENITH: "slate",
  VECTOR: "mint",
  AXIS: "lilac",
  ORBIT: "gold",
  NOVA: "ink",
};

export const PHONE_FLAVOR: Record<string, PhoneFlavor> = {
  serena: {
    theme: "slate",
    threadName: "2-A 수행",
    messages: [
      { me: false, text: "루브릭 사진 보내줄게 채점표랑 같이 봐", time: "16:21" },
      { me: true, text: "항목 4 이상함 배점 안 맞음", time: "16:24" },
      { me: false, text: "쌤도 다시 올린대 일단 기준만 적어둬", time: "16:26" },
    ],
    notes: ["수행 루브릭 재작성", "유성 상담 9/18 19:10", "원하는 것 ≠ 잘하는 것"],
    transitLine: "3호선 대치",
    transitEta: "도보 12분",
  },
  jihyun: {
    theme: "rose",
    threadName: "VECTOR 실기",
    messages: [
      { me: false, text: "오늘 실기 보호대 꼭 챙겨 벽 맞기 전에", time: "17:02" },
      { me: true, text: "또 의미없는 반복임? 목적부터 물어볼게", time: "17:04" },
      { me: false, text: "조교님이랑 토론회 열렸대 ㄷㄷ", time: "17:05" },
    ],
    notes: ["손목 테이핑 교체", "모의던전 A 비상정지 1", "젤리 사기"],
    transitLine: "분당선 개포동",
    transitEta: "버스 25분",
  },
  sunhyung: {
    theme: "gold",
    threadName: "대명 2-C",
    messages: [
      { me: true, text: "오늘 파스 있음 보충 끝나면 별관으로", time: "16:40" },
      { me: false, text: "정규 빼는 거 괜찮아? 단과로 바꿨다며", time: "16:41" },
      { me: true, text: "이번 주만 몸이 먼저 한계 알려줌", time: "16:43" },
    ],
    notes: ["야간 단과 재조합", "단백질바 2", "속도 보류, 정확도 유지"],
    transitLine: "3호선 대치",
    transitEta: "도보 14분",
  },
  yuri: {
    theme: "ink",
    threadName: "유리",
    messages: [
      { me: false, text: "잔향 얘기 단톡에서 하지 마 만나서", time: "15:12" },
      { me: true, text: "이미 본 사람 있는 듯 모른 척 했어", time: "15:18" },
      { me: false, text: "공개 범위 그대로 학교엔 최소만", time: "15:20" },
    ],
    notes: ["접촉 5회 / 잔상 12초", "과부하 휴식 17:20", "경로 빛나면 모른척 연습"],
    transitLine: "분당선 개포동",
    transitEta: "버스 25분",
  },
  hanbyeol: {
    theme: "mint",
    threadName: "현장 설명회",
    messages: [
      { me: true, text: "설명회 자리 있으면 같이 가자", time: "21:08" },
      { me: false, text: "아직 신청 안 함? 고민중이랬잖아", time: "21:11" },
      { me: true, text: "영웅 말고 직업으로 듣는 자리면 됨", time: "21:13" },
    ],
    notes: ["방어 대열 시야 유지", "착지 각 수정", "엄마 전 길드 설명회 고민중"],
    transitLine: "9호선 신논현",
    transitEta: "28분",
  },
  yeonseo: {
    theme: "lilac",
    threadName: "연화 2-1",
    messages: [
      { me: true, text: "이번 컷 나오면 단과 유지할지 같이 계산하자", time: "18:44" },
      { me: false, text: "사주 보는 애들 확률 숭배 최종 형태 아님?", time: "18:46" },
      { me: true, text: "그건 좀 맞음 숫자는 숫자로만", time: "18:47" },
    ],
    notes: ["모의고사 후 단과 조정", "사주=확률숭배?", "현장직 비율만 보지 않기"],
    transitLine: "9호선 신논현",
    transitEta: "28분",
  },
  songa: {
    theme: "gold",
    threadName: "북부→대치",
    messages: [
      { me: true, text: "오늘 7호선 지연 19:10 입실 아슬아슬", time: "16:28" },
      { me: false, text: "막차 기준으로 짜 자습 1타임 접어", time: "16:30" },
      { me: true, text: "왕복이 수업임 알고 있음", time: "16:31" },
    ],
    notes: ["막차 22:47 후보", "왕복 분 단위 재작성", "주말 실기 격주"],
    transitLine: "7호선 → 3호선",
    transitEta: "약 78분",
  },
  eunyoung: {
    theme: "slate",
    threadName: "스테이지H",
    messages: [
      { me: false, text: "그 영상 원본 없음 공유하지 마", time: "20:16" },
      { me: true, text: "딥페이크 안내문 학원 찌라시로 돌리는 중 초상권 범위 축소", time: "20:18" },
      { me: false, text: "유명해지고 싶은 거랑 유출은 다른 문제야", time: "20:19" },
    ],
    notes: ["공개 범위 점검", "2차 이용 동의 축소", "카메라 동선/시야각"],
    transitLine: "2호선 성수",
    transitEta: "42분",
  },
  hyunjung: {
    theme: "ink",
    threadName: "진로설계실",
    messages: [
      { me: true, text: "등급 보장 문구 자료에서 빼 주세요", time: "11:02" },
      { me: false, text: "가능성/확률 혼용된 문장 12개 표시해 둠", time: "11:08" },
      { me: true, text: "보호자 슬롯은 사실만 희망은 따로", time: "11:10" },
    ],
    notes: ["설명회 문장 교정", "보호자 상담 주간", "과잉광고 차단"],
    transitLine: "본원 5F",
    transitEta: "내부",
  },
  myeongjin: {
    theme: "mint",
    threadName: "별관 조교",
    messages: [
      { me: true, text: "벽 맞았으면 점수 말고 관절부터", time: "21:22" },
      { me: false, text: "비상정지 2 리포트 제출함", time: "21:24" },
      { me: true, text: "1학년 보호대 사이즈 부족분 신청", time: "21:26" },
    ],
    notes: ["매트 교체 확인", "아이스팩 재고", "안전교육 8회차 진행중"],
    transitLine: "별관 도보",
    transitEta: "6분",
  },
};

export function phoneFlavorOf(character: Character): PhoneFlavor {
  const saved = PHONE_FLAVOR[character.id];
  if (saved) return saved;
  const theme = THEME_BY_CLASS[character.classIds[0] ?? "ZENITH"] ?? "slate";
  return {
    theme,
    threadName: character.name,
    messages: [
      { me: false, text: character.phone?.lastMessage ?? "확인했어", time: "18:00" },
      { me: true, text: "ㅇㅇ", time: "18:01" },
    ],
    notes: [character.lately],
    transitLine: "서울",
    transitEta: character.commuteMinutes ? `${character.commuteMinutes}분` : "-",
  };
}
