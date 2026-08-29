export type ClassId = "ZENITH" | "VECTOR" | "AXIS" | "ORBIT" | "NOVA";

export type AcademyClass = {
  id: ClassId;
  ko: string;
  tagline: string;
  summary: string;
  recommended: string[];
  caution: string[];
  tone: {
    ink: string;
    paper: string;
    accent: string;
    muted: string;
  };
  sort: {
    from: string;
    to: string;
    glow: string;
    gold: string;
  };
};

export const ACADEMY_CLASSES: Record<ClassId, AcademyClass> = {
  ZENITH: {
    id: "ZENITH",
    ko: "제니스",
    tagline: "종합반에 가까운 당신의 반",
    summary:
      "참여 가능 시간이 비교적 안정적이고, 학업·실기·진로를 동시에 관리하려는 학생에게 맞습니다. 종합 관리가 우선입니다.",
    recommended: ["공간인지 정규", "위기판단", "진로설계 상담", "주 2회 실기"],
    caution: ["S급 등 등급 보장 없음", "출결 미달 시 커리큘럼 재조정", "학업·실기·진로 동시 관리가 전제"],
    tone: {
      ink: "#132238",
      paper: "#f4f1ea",
      accent: "#1d4e89",
      muted: "#6b7280",
    },
    sort: { from: "#0b1a33", to: "#1d4e89", glow: "#7cb0ff", gold: "#e8c872" },
  },
  VECTOR: {
    id: "VECTOR",
    ko: "벡터",
    tagline: "체육계에 가까운 당신의 반",
    summary:
      "동적 공간인지와 현장 대응을 우선하는 과정입니다. 이유 있는 반복은 남기고, 무의미한 드릴은 줄입니다.",
    recommended: ["동적 공간인지", "기초체력", "모의던전 기초", "테이핑/보호대 실습"],
    caution: ["고득점보다 안전 중단 우선", "관절 부상 시 재시험 불가", "보호대·테이핑 미착용 실기 금지"],
    tone: {
      ink: "#1a2330",
      paper: "#eef3f1",
      accent: "#0f766e",
      muted: "#5b6770",
    },
    sort: { from: "#06241f", to: "#0f766e", glow: "#5eead4", gold: "#d4b483" },
  },
  AXIS: {
    id: "AXIS",
    ko: "액시스",
    tagline: "내신파에 가까운 당신의 반",
    summary:
      "학업 병행이 핵심입니다. 헌터 과정은 단과와 상담 중심으로 짜고, 학교 일정을 축으로 둡니다.",
    recommended: ["주말 실기", "공간분석 단과", "진로 통계 상담", "야간 자습 연계"],
    caution: ["각성 준비 목적의 내신 포기 불가", "학교 시험 기간에는 학업 일정 우선", "병행 불가 시 반 재상담"],
    tone: {
      ink: "#1b2430",
      paper: "#f3f0f7",
      accent: "#4c1d95",
      muted: "#6b6375",
    },
    sort: { from: "#1a0b33", to: "#5b21b6", glow: "#c4b5fd", gold: "#e7d5a3" },
  },
  ORBIT: {
    id: "ORBIT",
    ko: "오르빗",
    tagline: "야간 단과에 가까운 당신의 반",
    summary:
      "학교와 다른 일정, 장거리 통학, 야간 위주 수강이 겹칠 때 효율적인 단과 조합입니다. 고정 수업을 억지로 맞추지 않습니다.",
    recommended: ["공간인지 단과", "위기판단", "주말 실기"],
    caution: ["22:00 이후 수업 없음", "막차·숙제는 본인 계산", "고정 정규 강제 배정 없음"],
    tone: {
      ink: "#1e2933",
      paper: "#f2efe6",
      accent: "#9a3412",
      muted: "#6f675c",
    },
    sort: { from: "#2a1408", to: "#9a3412", glow: "#fdba74", gold: "#f0d48a" },
  },
  NOVA: {
    id: "NOVA",
    ko: "노바",
    tagline: "조기각성 트랙에 가까운 당신의 반",
    summary:
      "조기각성자 전용 과정입니다. 능력 안정화와 학교 생활의 공존이 목표이며, 등급 신화를 수업 자료로 쓰지 않습니다.",
    recommended: ["능력 안정화", "감각 과부하 관리", "진로 면담", "소규모 실기"],
    caution: ["각성 ≠ 합격·등급", "능력 공개 범위는 본인 결정", "등급 신화 수업 자료 사용 금지"],
    tone: {
      ink: "#1a1f2b",
      paper: "#eef2f7",
      accent: "#1e3a5f",
      muted: "#5c6570",
    },
    sort: { from: "#0b1220", to: "#1e3a5f", glow: "#93c5fd", gold: "#f8f1d4" },
  },
};

export const CLASS_ORDER: ClassId[] = ["ZENITH", "VECTOR", "AXIS", "ORBIT", "NOVA"];
