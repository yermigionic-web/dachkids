export type ClassId = "ZENITH" | "VECTOR" | "AXIS" | "ORBIT" | "NOVA";

export type AcademyClass = {
  id: ClassId;
  ko: string;
  tagline: string;
  summary: string;
  recommended: string[];
  caution: string;
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
    tagline: "여러 목표를 한 시간표 안에 넣는 반.",
    summary:
      "참여 가능 시간이 비교적 안정적이고, 학업·실기·진로를 동시에 관리하려는 학생에게 맞습니다. 종합 관리가 우선입니다.",
    recommended: ["공간인지 정규", "위기판단", "진로설계 상담", "주 2회 실기"],
    caution: "S급을 보장하지 않습니다. 출결이 곧 커리큘럼입니다.",
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
    tagline: "몸이 먼저 답을 내는 반.",
    summary:
      "동적 공간인지와 현장 대응을 우선하는 과정입니다. 이유 있는 반복은 남기고, 무의미한 드릴은 줄입니다.",
    recommended: ["동적 공간인지", "기초체력", "모의던전 기초", "테이핑/보호대 실습"],
    caution: "고득점보다 중단 판단. 관절은 재시험이 안 됩니다.",
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
    tagline: "내신을 버리지 않는 헌터교육.",
    summary:
      "학업 병행이 핵심입니다. 헌터 과정은 단과와 상담 중심으로 짜고, 학교 일정을 축으로 둡니다.",
    recommended: ["주말 실기", "공간분석 단과", "진로 통계 상담", "야간 자습 연계"],
    caution: "각성 가능성을 높이려고 내신을 비우지 않습니다.",
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
    tagline: "필요한 건 더 많은 가능성이 아니라 시간표다.",
    summary:
      "학교와 다른 일정, 장거리 통학, 야간 위주 수강이 겹칠 때 효율적인 단과 조합입니다. 고정 수업을 억지로 맞추지 않습니다.",
    recommended: ["공간인지 단과", "위기판단", "주말 실기"],
    caution: "22:00 이후 수업 없음. 막차와 숙제를 같이 계산합니다.",
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
    tagline: "이미 시작된 능력을 과장하지 않는 반.",
    summary:
      "조기각성자 전용 과정입니다. 능력 안정화와 학교 생활의 공존이 목표이며, 등급 신화를 수업 자료로 쓰지 않습니다.",
    recommended: ["능력 안정화", "감각 과부하 관리", "진로 면담", "소규모 실기"],
    caution: "각성 = 합격이 아닙니다. 공개 범위는 본인이 정합니다.",
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
