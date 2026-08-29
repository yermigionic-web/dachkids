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
    lately: "이번 수행 루브릭이 이상해서 채점 기준을 의심 중",
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
    notes: "차분하고 계획적인 학생입니다. 준비력과 숙제 처리의 퀄리티가 매우 뛰어납니다. 다만 아직 장래희망이 뚜렷하지 않은 것 같습니다.",
    commuteMinutes: 12,
    schoolLocationId: "daemyeong",
    image: "/assets/characters/serena.png",
    phone: {
      wallpaper: "빈 달력 위젯",
      apps: ["캘린더", "유성출결", "메모", "교통"],
      lastMessage: "루브릭 사진 보내줄게 채점표랑 같이 봐",
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
    lately: "의미 없는 반복 드릴 탓에 조교와 토론회를 벌이는 중",
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
    look: "흑발 장발, 손목·손가락 훈련 테이핑, 작고 귀여운 소품.",
    notes: "요즘 학생들과 달리 원리원칙적인 성격이 돋보입니다. 다만 반복 학습에 큰 불만을 가지고 있는 것 같으니 가정 내의 안내가 필요합니다.",
    commuteMinutes: 25,
    schoolLocationId: "gaepo",
    image: "/assets/characters/jihyun.png",
    phone: {
      wallpaper: "고양이 키링 사진",
      apps: ["타이머", "유성출결", "카메라", "플레이리스트"],
      lastMessage: "오늘 실기 보호대 꼭 챙겨 벽 맞기 전에",
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
    lately: "이번 주에 학교 보충이 겹쳐서 유성 정규 수업을 놓치는 중",
    strengths: ["회복 루틴", "반복 학습", "기초 안정성", "현실적인 일정 컷"],
    dislikedLine: "잠재력이 다가 아니잖아.",
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
    look: "단정한 단발에 가까운 중단발, 실용적인 가방.",
    notes: "전반적으로 중상위권을 차지하는 안정적인 생활 습관을 가진 학생입니다. 한계를 인정하고 쉴 때는 쉬는 모습이 보기 좋습니다.",
    commuteMinutes: 14,
    schoolLocationId: "daemyeong",
    image: "/assets/characters/sunhyung.png",
    phone: {
      wallpaper: "회색 배경",
      apps: ["타이머", "가계부", "유성출결", "교통"],
      lastMessage: "오늘 파스 있음 보충 끝나면 별관으로",
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
    lately: "능력의 발동 탓에 학생들의 경로가 빛날 때마다 무시하는 법을 배우는 중",
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
    notes: "유성의 자랑스러운 조기각성자입니다. 그와 별개로 강의 중에는 조금 더 집중하는 모습을 보였으면 합니다.",
    commuteMinutes: 25,
    schoolLocationId: "gaepo",
    image: "/assets/characters/yuri.png",
    phone: {
      wallpaper: "단색",
      apps: ["메모", "녹음", "유성출결", "메시지"],
      lastMessage: "잔향 얘기 단톡에서 하지 마 만나서",
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
    lately: "어머니가 전에 계시던 길드의 설명회를 들어 볼까 고민 중",
    strengths: ["방어 포지션", "신체 강화 적성", "팀 간격 유지", "부상 보고"],
    dislikedLine: "뭘 해도 부모 빨 아니야?",
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
    notes: "헌터를 영웅 대신 명백한 직업 공무원으로 바라보는 객관적인 학생입니다. 어머님께서 은퇴하신 A급 구조 헌터이신 덕분에 가정 내 노하우 전수를 기대합니다.",
    commuteMinutes: 28,
    schoolLocationId: "yeonhwa",
    image: "/assets/characters/hanbyeol.png",
    phone: {
      wallpaper: "한강 새벽",
      apps: ["헬스", "유성출결", "뉴스", "교통"],
      lastMessage: "설명회 자리 있으면 같이 가자",
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
    lately: "사주를 보는 친구들이 확률 숭배의 최종 형태일까? 고민하는 중",
    strengths: ["공간 분석", "데이터 정리", "학업 유지", "확률과 운명의 분리"],
    dislikedLine: "네 집안에 굳이 헌터 될 필요가 있어?",
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
    notes: "안타깝지만 아직 각성 잠재력이 낮은 학생입니다. 더 많은 학습과 훈련을 통해 증진이 필요합니다. 통계학을 좋아하면서도 숙명처럼 취급하지 않는 객관성이 돋보입니다.",
    commuteMinutes: 28,
    schoolLocationId: "yeonhwa",
    image: "/assets/characters/yeonseo.png",
    phone: {
      wallpaper: "단색 퍼플",
      apps: ["그래프", "쇼핑몰", "유성출결", "캘린더"],
      lastMessage: "이번 컷 나오면 단과 유지할지 같이 계산하자",
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
    lately: "왕복 등원 시간을 계산해 본 결과 자습 1타임이 날아가서 고민 중",
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
    notes: "유성아카데미까지 통학하는 데에 시간이 오래 걸리는 학생이므로 기특하게 여기고 있습니다. 국가헌터 진로에 관심을 보이는 모습은 바람직하지만, 긴 이동시간 탓에 자주 피로해합니다.",
    commuteMinutes: 78,
    schoolLocationId: "bukbu",
    image: "/assets/characters/songa.png",
    phone: {
      wallpaper: "지하철 노선",
      apps: ["실시간 도착", "유성출결", "타이머", "가계부"],
      lastMessage: "오늘 7호선 지연 19:10 입실 아슬아슬",
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
    lately: "딥페이크 탐지 안내문을 프린트해서 학원 내 찌라시로 돌리는 중",
    strengths: ["미디어 감각", "자기 브랜딩", "목표 명료화", "사생활 경계 설정"],
    dislikedLine: "요즘 애들은 유명한 게 다인 줄 알지.",
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
    look: "간단하게 정리한 헤어스타일, 정돈된 교복, 출입증을 목에서 잘 숨긴다.",
    notes: "학생의 목표가 뚜렷한 점은 좋으나, 유명세와 재물을 향한 열망을 표출하는 모습은 타 원생들에게 나쁜 영향을 끼칠 수 있습니다. 미디어에 대해 열려 있는 마음가짐이 귀감을 줍니다.",
    commuteMinutes: 42,
    schoolLocationId: "seongdong",
    image: "/assets/characters/eunyoung.png",
    phone: {
      wallpaper: "본인 로고 스케치",
      apps: ["편집", "알림 끄기", "유성출결", "뱅킹"],
      lastMessage: "그 영상 원본 없음 공유하지 마",
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
    lately: "설명회에서 '가능성'과 '확률'을 구분해 이해시키느라 고생 중",
    strengths: ["사실/확률/희망 분리", "교육통계", "보호자 통역", "과잉광고 차단"],
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
    notes: "비각성자 상담 선생님. 사실, 확률, 희망 등을 구분해서 말해 주는 친절함을 가지고 있다. 교육통계·각성예측 연구 경력자.",
    schoolLocationId: "yuseong-hq",
    image: "/assets/characters/hyunjung.png",
    staffTitle: "진로설계실장",
    phone: {
      wallpaper: "일정만",
      apps: ["상담기록", "통계", "사내메신저", "캘린더"],
      lastMessage: "등급 보장 문구 자료에서 빼 주세요",
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
    lately: "모의던전 고득점 리플레이를 무시하고 안전 교육 8회차 진행 중",
    strengths: ["현장 경험", "마찰 제어", "부상 예방", "시험점수와 안전의 분리"],
    dislikedLine: "게이트 열리면 실전이지, 누가 안전모 쓰고 뛰어듭니까?",
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
    notes: "<마찰>이라는 능력을 보유한 실기 조교님. 현장 경험이 동나이대 헌터들 중에서도 더 많은 편이시다. 점수도 중요하지만, 그녀 앞에서 안전 규범 준수는 필수!",
    schoolLocationId: "yuseong-annex",
    image: "/assets/characters/myeongjin.png",
    staffTitle: "실기조교 · B급 개인헌터",
    phone: {
      wallpaper: "도면",
      apps: ["출결", "부상일지", "무전", "타이머"],
      lastMessage: "벽 맞았으면 점수 말고 관절부터",
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
