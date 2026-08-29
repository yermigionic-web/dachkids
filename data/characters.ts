import { ACADEMY_CLASSES, type ClassId } from "./classes";

export type CharacterRole = "student" | "staff";

export type Character = {
  id: string;
  name: string;
  nameEn: string;
  role: CharacterRole;
  age: number;
  school: string;
  grade?: string;
  classIds: ClassId[];
  extraClassLabel?: string;
  keywords: string[];
  status: string;
  lately: string;
  strengths: string[];
  dislikedLine: string;
  bag: string[];
  schedule: { time: string; label: string }[];
  education: string;
  look: string;
  notes: string;
  commuteMinutes?: number;
  schoolLocationId?: string;
  image: string;
  phone?: {
    wallpaper: string;
    apps: string[];
    lastMessage: string;
  };
  trainingLog?: { date: string; title: string; note: string }[];
  staffTitle?: string;
};

export const CHARACTERS: Character[] = [
  {
    id: "serena",
    name: "김세레나",
    nameEn: "Kim Serena",
    role: "student",
    age: 17,
    school: "서울대명고등학교",
    grade: "2-A",
    classIds: ["ZENITH"],
    keywords: ["계획", "루브릭", "키링"],
    status: "수행평가 기준표 재확인 중",
    lately: "이번 수행 루브릭이 이상해서, 채점 기준부터 다시 적고 있다.",
    strengths: ["평가 기준 분해", "일정 역산", "필기 구조화", "모의고사 분석"],
    dislikedLine: "너는 뭐든 잘하잖아.",
    bag: [
      "주간 플래너",
      "검정 젤펜 3색",
      "메탈 키링",
      "무채색 립밤",
      "C타입 케이블",
      "수학 기출 파일",
      "투명 클리어파일",
      "손소독제",
    ],
    schedule: [
      { time: "08:10", label: "대명고 조회" },
      { time: "16:20", label: "하교 · 편의점" },
      { time: "17:10", label: "자습" },
      { time: "19:00", label: "유성 ZENITH" },
      { time: "22:00", label: "종료 · 귀가" },
    ],
    education: "ZENITH 정규 · 진로설계 상담 격주",
    look: "베이지 탈색 장발, 검은 뿌리, 검은 네일, 작은 키링.",
    notes: "차분하고 계획적이다. 준비는 잘하는데, 원하는 것의 순서를 정하는 일은 숙제다.",
    commuteMinutes: 12,
    schoolLocationId: "daemyeong",
    image: "/assets/characters/serena.png",
    phone: {
      wallpaper: "빈 달력 위젯",
      apps: ["캘린더", "유성출결", "메모", "교통"],
      lastMessage: "루브릭 사진 보내줄게. 채점표랑 같이 봐.",
    },
    trainingLog: [
      { date: "09.12", title: "공간인지 2회차", note: "제한시간 안 기록. 실수 2." },
      { date: "09.15", title: "위기판단 구술", note: "중단 기준을 먼저 말함." },
    ],
  },
  {
    id: "jihyun",
    name: "박지현",
    nameEn: "Park Jihyun",
    role: "student",
    age: 17,
    school: "개포여자고등학교",
    grade: "2-4",
    classIds: ["VECTOR"],
    keywords: ["공간인지", "테이핑", "소품"],
    status: "손목 테이핑 교체일",
    lately: "의미 없는 반복 드릴이 늘어서, 오늘 조교에게 목적을 먼저 물어봤다.",
    strengths: ["동적 공간인지", "순간 반응", "몸 조절", "이유 있는 규칙 준수"],
    dislikedLine: "그냥 몸으로 때워.",
    bag: [
      "핑크 미니 파우치",
      "손가락 테이핑",
      "무릎 보호대",
      "물병",
      "스티커 메모",
      "간식 젤리",
      "이어폰",
      "학생증",
    ],
    schedule: [
      { time: "08:00", label: "개포여고" },
      { time: "16:10", label: "하교" },
      { time: "17:00", label: "이동" },
      { time: "18:40", label: "유성 VECTOR 실기" },
      { time: "21:40", label: "귀가" },
    ],
    education: "VECTOR 실기 중심 · 모의던전 기초",
    look: "흑발 장발, 손목·손가락 훈련 테이핑, 작은 귀여운 소품.",
    notes: "규칙은 지키되, 왜인지 설명되지 않는 반복은 거절한다.",
    commuteMinutes: 25,
    schoolLocationId: "gaepo",
    image: "/assets/characters/jihyun.png",
    phone: {
      wallpaper: "고양이 키링 사진",
      apps: ["타이머", "유성출결", "카메라", "플레이리스트"],
      lastMessage: "오늘 실기 보호대 꼭 챙겨. 벽 맞기 전에.",
    },
    trainingLog: [
      { date: "09.11", title: "이동경로 드릴", note: "코너 진입 0.4초 단축." },
      { date: "09.16", title: "모의던전 A", note: "비상정지 1회. 감점보다 안전." },
    ],
  },
  {
    id: "sunhyung",
    name: "이선형",
    nameEn: "Lee Sunhyung",
    role: "student",
    age: 17,
    school: "서울대명고등학교",
    grade: "2-C",
    classIds: ["ORBIT"],
    keywords: ["회복", "반복", "직설"],
    status: "야간 단과 재조합 상담",
    lately: "이번 주는 학교 보충이 겹쳐서, 유성 정규 대신 단과로 바꿨다.",
    strengths: ["회복 루틴", "반복 학습", "기초 안정성", "현실적인 일정 컷"],
    dislikedLine: "潜力은 있는데 시간이 아깝다.",
    bag: [
      "단백질바 2개",
      "파스",
      "운동 테이프",
      "물티슈",
      "이어폰",
      "수학 오답노트",
      "충전 배터리",
      "밴드",
    ],
    schedule: [
      { time: "08:10", label: "대명고" },
      { time: "16:20", label: "하교" },
      { time: "17:30", label: "학교 자습" },
      { time: "19:40", label: "유성 ORBIT 단과" },
      { time: "21:50", label: "귀가" },
    ],
    education: "ORBIT 야간 단과 · 주말 실기",
    look: "단정한 단발에 가까운 중단발, 실용적인 가방, 테이프가 겉으로 보임.",
    notes: "전반적으로 중상. 과장 없이 말하고, 몸이 먼저 한계를 알려주면 바로 줄인다.",
    commuteMinutes: 14,
    schoolLocationId: "daemyeong",
    image: "/assets/characters/sunhyung.png",
    phone: {
      wallpaper: "회색 배경",
      apps: ["타이머", "가계부", "유성출결", "교통"],
      lastMessage: "오늘 파스 있음. 보충 끝나면 별관으로.",
    },
    trainingLog: [
      { date: "09.10", title: "기초체력", note: "세트 사이 심박수 기록." },
      { date: "09.14", title: "공간인지 단과", note: "정확도 유지, 속도는 보류." },
    ],
  },
  {
    id: "yuri",
    name: "최유리",
    nameEn: "Choi Yuri",
    role: "student",
    age: 16,
    school: "개포여자고등학교",
    grade: "1-8",
    classIds: ["NOVA"],
    keywords: ["잔향", "조기각성", "1학년"],
    status: "능력 공개 범위 재설정",
    lately: "잔향이 교실 복도에서 잠깐 겹쳤다. 보고도 모른 척하는 연습을 했다.",
    strengths: ["잔향 판독", "짧은 동선 기억", "과잉반응 억제", "질문의 각 조절"],
    dislikedLine: "너 이제 인생 핀 거 아니야?",
    bag: [
      "검정 노트",
      "피젯링",
      "물병",
      "이어폰",
      "가디건",
      "검사 예약 문자 캡처",
      "립밤",
      "학생증",
    ],
    schedule: [
      { time: "08:00", label: "개포여고 1학년" },
      { time: "16:10", label: "하교" },
      { time: "17:20", label: "감각 과부하 휴식" },
      { time: "19:00", label: "유성 NOVA" },
      { time: "21:30", label: "귀가" },
    ],
    education: "NOVA 능력 안정화 · 소규모 실기",
    look: "또래보다 조금 어린 인상, 단정한 교복, 눈에 띄지 않으려는 가방.",
    notes: "능력 <잔향>: 접촉 대상의 최근 이동 방향과 흔적을 일정 시간 시각화한다. 축복도 비극도 아닌 상태값으로 다룬다.",
    commuteMinutes: 25,
    schoolLocationId: "gaepo",
    image: "/assets/characters/yuri.png",
    phone: {
      wallpaper: "단색",
      apps: ["메모", "녹음", "유성출결", "메시지"],
      lastMessage: "잔향 얘기는 단톡에서 하지 마. 만나서.",
    },
    trainingLog: [
      { date: "09.09", title: "감각 안정", note: "접촉 5회. 잔상 지속 12초." },
      { date: "09.13", title: "공개범위 면담", note: "학교 측 최소 고지 유지." },
    ],
  },
  {
    id: "hanbyeol",
    name: "윤한별",
    nameEn: "Yoon Hanbyeol",
    role: "student",
    age: 17,
    school: "연화여자고등학교",
    grade: "2-1",
    classIds: ["VECTOR"],
    keywords: ["방어", "현장직", "구조"],
    status: "보호대 사이즈 재측정",
    lately: "어머니 전 소속 센터 소식을 듣고, 현장직 설명회 신청만 해 두었다.",
    strengths: ["방어 포지션", "신체 강화 적성", "팀 간격 유지", "부상 보고"],
    dislikedLine: "네 엄마 후광이잖아.",
    bag: [
      "무릎 보호대",
      "저항 밴드",
      "단백질 쉐이크",
      "수건",
      "테이프",
      "교통카드",
      "물병",
      "구급 밴드",
    ],
    schedule: [
      { time: "08:20", label: "연화여고" },
      { time: "16:30", label: "하교" },
      { time: "17:40", label: "유성 이동" },
      { time: "19:00", label: "VECTOR 실기" },
      { time: "22:00", label: "종료" },
    ],
    education: "VECTOR 방어/신체강화 트랙",
    look: "운동 체형, 짧게 묶은 머리, 보호대 자국이 남는 교복 바지.",
    notes: "헌터를 영웅이 아니라 직업인으로 본다. 어머니는 퇴역 A급 구조헌터.",
    commuteMinutes: 28,
    schoolLocationId: "yeonhwa",
    image: "/assets/characters/hanbyeol.png",
    phone: {
      wallpaper: "한강 새벽",
      apps: ["헬스", "유성출결", "뉴스", "교통"],
      lastMessage: "현장 설명회 자리 있으면 같이 가자.",
    },
    trainingLog: [
      { date: "09.08", title: "방어 대열", note: "시야 밖으로 나가지 않음." },
      { date: "09.15", title: "낙하 충격", note: "착지 각 수정. 무릎 아이싱." },
    ],
  },
  {
    id: "yeonseo",
    name: "이연서",
    nameEn: "Lee Yeonseo",
    role: "student",
    age: 17,
    school: "연화여자고등학교",
    grade: "2-1",
    classIds: ["AXIS"],
    keywords: ["통계", "공간분석", "네일"],
    status: "모의고사 후 단과 조정",
    lately: "각성 확률표를 다시 그렸다. 숫자를 운세처럼 읽는 해설은 접었다.",
    strengths: ["공간 분석", "데이터 정리", "학업 유지", "확률과 운명의 분리"],
    dislikedLine: "너는 각성 안 해도 되겠다.",
    bag: [
      "타블렛",
      "통계 프린트",
      "네일 리페어",
      "카드 지갑",
      "립 팔레트",
      "형광펜",
      "이어폰",
      "쇼핑 영수증",
    ],
    schedule: [
      { time: "08:20", label: "연화여고" },
      { time: "16:30", label: "하교" },
      { time: "18:00", label: "내신 보강" },
      { time: "20:10", label: "AXIS 공간분석" },
      { time: "21:40", label: "귀가" },
    ],
    education: "AXIS 학업병행 · 공간분석 단과",
    look: "애쉬퍼플 장발, 정돈된 네일, 쇼핑백이 종종 가방에 접혀 들어간다.",
    notes: "각성 가능성은 낮은 편. 통계를 좋아하지만 확률을 운명으로 보지 않는다.",
    commuteMinutes: 28,
    schoolLocationId: "yeonhwa",
    image: "/assets/characters/yeonseo.png",
    phone: {
      wallpaper: "단색 퍼플",
      apps: ["그래프", "쇼핑몰", "유성출결", "캘린더"],
      lastMessage: "이번 컷 나오면 단과 유지할지 같이 계산하자.",
    },
    trainingLog: [
      { date: "09.07", title: "공간분석", note: "도면 기호 오류 3개 발견." },
      { date: "09.16", title: "진로 통계", note: "현장직 비율만 보지 않기로." },
    ],
  },
  {
    id: "songa",
    name: "박송아",
    nameEn: "Park Songa",
    role: "student",
    age: 17,
    school: "서울북부고등학교",
    grade: "2-7",
    classIds: ["ORBIT"],
    keywords: ["통학", "노원", "시간"],
    status: "막차 기준 시간표 재작성",
    lately: "대치 왕복 시간을 분 단위로 다시 적었다. 자습 1타임을 통학이 먹었다.",
    strengths: ["교통 계산", "시간 손실 감지", "국가헌터 제도 이해", "야간 집중"],
    dislikedLine: "의지가 있으면 통학은 문제가 아니지.",
    bag: [
      "교통카드 2장",
      "목베개 대신 얇은 후드",
      "도시락 용기",
      "보조배터리",
      "이어폰",
      "시간표 인쇄본",
      "상비약",
      "우산",
    ],
    schedule: [
      { time: "06:50", label: "노원 출발" },
      { time: "08:20", label: "서울북부고" },
      { time: "16:20", label: "하교 · 대치행" },
      { time: "19:10", label: "유성 ORBIT" },
      { time: "22:10", label: "막차 계산 귀가" },
    ],
    education: "ORBIT 야간 단과 · 주말 실기 격주",
    look: "통학에 최적화된 신발과 가벼운 가방, 항상 시간표를 겉주머니에 둔다.",
    notes: "노원구 거주. 대치 통학이 매우 길다. 국가헌터 진로에 관심이 있고, 낭만보다 이동시간을 먼저 본다.",
    commuteMinutes: 78,
    schoolLocationId: "bukbu",
    image: "/assets/characters/songa.png",
    phone: {
      wallpaper: "지하철 노선",
      apps: ["실시간 도착", "유성출결", "타이머", "가계부"],
      lastMessage: "오늘 7호선 지연. 19:10 입실 아슬아슬.",
    },
    trainingLog: [
      { date: "09.06", title: "야간 단과", note: "입실 8분 전. 지각 아님." },
      { date: "09.13", title: "주말 실기", note: "왕복 3시간. 효과는 있음." },
    ],
  },
  {
    id: "eunyoung",
    name: "한은영",
    nameEn: "Han Eunyoung",
    role: "student",
    age: 17,
    school: "성동제일고등학교",
    grade: "2-H",
    classIds: ["AXIS"],
    extraClassLabel: "스테이지H",
    keywords: ["미디어", "브랜딩", "공개"],
    status: "프로필 공개 범위 점검",
    lately: "딥페이크 탐지 안내문을 프린트해서 가방에 넣어 다닌다.",
    strengths: ["미디어 감각", "자기 브랜딩", "목표 명료화", "사생활 경계 설정"],
    dislikedLine: "요즘 애들은 다 유명해지고 싶어하지.",
    bag: [
      "미니 삼각대",
      "렌즈 클리너",
      "계약/초상권 메모",
      "립 팔레트",
      "보조배터리",
      "카드 명세서 접본",
      "스테이지H 출입증",
      "이어폰",
    ],
    schedule: [
      { time: "08:30", label: "성동제일고" },
      { time: "16:40", label: "하교" },
      { time: "18:20", label: "AXIS 이론" },
      { time: "20:00", label: "스테이지H 미디어" },
      { time: "21:50", label: "귀가" },
    ],
    education: "AXIS 학업병행 + 스테이지H 미디어/브랜딩",
    look: "카메라 앞을 의식한 헤어, 정돈된 교복, 출입증을 목에서 잘 숨긴다.",
    notes: "유명해지고 돈을 벌고 싶다는 목표를 숨기지 않는다. 미디어를 부업이 아니라 전문 역량으로 본다.",
    commuteMinutes: 42,
    schoolLocationId: "seongdong",
    image: "/assets/characters/eunyoung.png",
    phone: {
      wallpaper: "본인 로고 스케치",
      apps: ["편집", "알림 끄기", "유성출결", "뱅킹"],
      lastMessage: "그 영상 원본 없음. 공유하지 마.",
    },
    trainingLog: [
      { date: "09.05", title: "초상권 워크숍", note: "2차 이용 동의 범위 축소." },
      { date: "09.14", title: "AXIS 공간분석", note: "카메라 동선과 시야각 겹침." },
    ],
  },
  {
    id: "hyunjung",
    name: "최현정",
    nameEn: "Choi Hyunjung",
    role: "staff",
    age: 35,
    school: "유성헌터교육원 대치본원",
    classIds: ["ZENITH", "AXIS", "ORBIT", "NOVA"],
    keywords: ["진로설계", "통계", "비각성"],
    status: "보호자 상담 주간",
    lately: "설명회에서 ‘가능성’과 ‘확률’을 같은 말로 쓰는 문장을 전부 고쳤다.",
    strengths: ["사실/확률/희망 분리", "교육통계", "보호자 통역", "과잉약속 차단"],
    dislikedLine: "선생님은 각성을 안 해 봐서 모르시죠.",
    bag: [
      "상담 태블릿",
      "통계 리포트",
      "볼펜",
      "티백",
      "명함 대신 안내문",
      "안경닦이",
    ],
    schedule: [
      { time: "10:00", label: "진로설계실 오픈" },
      { time: "13:00", label: "1:1 상담" },
      { time: "16:30", label: "보호자 슬롯" },
      { time: "19:30", label: "야간 면담" },
      { time: "21:30", label: "기록 정리" },
    ],
    education: "진로설계 총괄 · 각성예측 연구 자문",
    look: "낮은 채도의 블라우스, 이름표, 과하지 않은 단정함.",
    notes: "비각성자. 사실과 확률과 희망을 한 문장에 섞지 않는다. 교육통계·각성예측 연구 경력.",
    schoolLocationId: "yuseong-hq",
    image: "/assets/characters/hyunjung.png",
    staffTitle: "진로설계실장",
    phone: {
      wallpaper: "일정만",
      apps: ["상담기록", "통계", "사내메신저", "캘린더"],
      lastMessage: "등급 보장 문구는 자료에서 빼 주세요.",
    },
  },
  {
    id: "myeongjin",
    name: "서명진",
    nameEn: "Seo Myeongjin",
    role: "staff",
    age: 27,
    school: "유성헌터교육원 대치본원",
    classIds: ["VECTOR", "ORBIT", "NOVA"],
    keywords: ["마찰", "실기", "안전"],
    status: "별관 매트 교체 확인",
    lately: "모의던전 고득점 리플레이보다 중단 버튼을 누른 기록을 먼저 봤다.",
    strengths: ["현장 경험", "마찰 제어", "부상 예방", "시험점수와 안전의 분리"],
    dislikedLine: "실전에서는 그냥 버티는 거죠.",
    bag: [
      "조교 호루라기",
      "여분 테이프",
      "아이스팩",
      "무전기",
      "무릎 슬리브",
      "에너지젤",
    ],
    schedule: [
      { time: "14:00", label: "별관 세팅" },
      { time: "16:00", label: "기초체력" },
      { time: "19:00", label: "VECTOR 실기" },
      { time: "21:00", label: "모의던전 감독" },
      { time: "22:10", label: "장비 점검" },
    ],
    education: "실기조교 · B급 개인헌터",
    look: "훈련복 위에 조교 조끼, 손등에 남은 마찰 자국.",
    notes: "능력 <마찰>. 현장 경험 풍부. 점수도 중요하지만 부상과 안전을 더 현실적으로 다룬다.",
    schoolLocationId: "yuseong-annex",
    image: "/assets/characters/myeongjin.png",
    staffTitle: "실기조교 · B급 개인헌터",
    phone: {
      wallpaper: "도면",
      apps: ["출결", "부상일지", "무전", "타이머"],
      lastMessage: "벽 맞았으면 점수 말고 관절부터.",
    },
    trainingLog: [
      { date: "09.12", title: "별관 감독", note: "비상정지 2. 리포트 제출." },
      { date: "09.16", title: "보호대 점검", note: "1학년 사이즈 부족분 신청." },
    ],
  },
];

export function getCharacter(id: string) {
  return CHARACTERS.find((c) => c.id === id);
}

export function getStudents() {
  return CHARACTERS.filter((c) => c.role === "student");
}

export function getStaff() {
  return CHARACTERS.filter((c) => c.role === "staff");
}

export function classmatesOf(classId: ClassId, exceptId?: string) {
  return CHARACTERS.filter(
    (c) => c.role === "student" && c.classIds.includes(classId) && c.id !== exceptId,
  );
}

export function classLabel(character: Character) {
  const names = character.classIds.map((id) => ACADEMY_CLASSES[id].id).join(" · ");
  return character.extraClassLabel ? `${names} + ${character.extraClassLabel}` : names;
}
