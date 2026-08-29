import type { ClassId } from "./classes";

export type PlacementOption = {
  id: string;
  label: string;
  scores: Partial<Record<ClassId, number>>;
  novaEligible?: boolean;
};

export type PlacementQuestion = {
  id: string;
  text: string;
  hint?: string;
  options: PlacementOption[];
};

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: "end-time",
    text: "평일 학교가 끝나는 시간은?",
    options: [
      { id: "a", label: "15:30 이전", scores: { ZENITH: 2, VECTOR: 2 } },
      { id: "b", label: "16:00 전후", scores: { ZENITH: 1, AXIS: 1, VECTOR: 1 } },
      { id: "c", label: "17:00 이후", scores: { ORBIT: 3, AXIS: 1 } },
      { id: "d", label: "매일 다름", scores: { ORBIT: 2, AXIS: 1 } },
    ],
  },
  {
    id: "priority",
    text: "현재 가장 중요한 것은?",
    options: [
      { id: "a", label: "내신 / 수능", scores: { AXIS: 3 } },
      { id: "b", label: "실기 능력", scores: { VECTOR: 3 } },
      { id: "c", label: "각성 준비", scores: { ZENITH: 2 } },
      { id: "d", label: "진로 탐색", scores: { ZENITH: 2, AXIS: 1 } },
      { id: "e", label: "이미 조기각성함", scores: { NOVA: 4, ZENITH: 1 }, novaEligible: true },
    ],
  },
  {
    id: "daechi-freq",
    text: "주 4회 이상 대치동에 올 수 있나요?",
    options: [
      { id: "a", label: "가능", scores: { ZENITH: 2, VECTOR: 2 } },
      { id: "b", label: "조건부", scores: { AXIS: 1, ORBIT: 1 } },
      { id: "c", label: "거의 불가능", scores: { ORBIT: 4 } },
    ],
  },
  {
    id: "burden",
    text: "현재 가장 부담되는 것은?",
    options: [
      { id: "a", label: "시간", scores: { ORBIT: 3 } },
      { id: "b", label: "학비", scores: { ORBIT: 1, AXIS: 1 } },
      { id: "c", label: "실기 성적", scores: { VECTOR: 2 } },
      { id: "d", label: "검사 결과", scores: { ZENITH: 1 } },
      { id: "e", label: "진로 결정", scores: { ZENITH: 2, AXIS: 1 } },
      { id: "f", label: "딱히 없음", scores: { ZENITH: 2 } },
    ],
  },
  {
    id: "train-focus",
    text: "훈련에서 가장 우선하고 싶은 것은?",
    options: [
      { id: "a", label: "동적 공간인지", scores: { VECTOR: 3 } },
      { id: "b", label: "위기판단", scores: { VECTOR: 2, ZENITH: 1 } },
      { id: "c", label: "기초체력", scores: { VECTOR: 1, ORBIT: 1 } },
      { id: "d", label: "종합관리", scores: { ZENITH: 3 } },
      { id: "e", label: "학업 병행", scores: { AXIS: 3 } },
      { id: "f", label: "능력 안정화", scores: { NOVA: 2, ZENITH: 1 } },
    ],
  },
  {
    id: "train-time",
    text: "실기 훈련 가능 시간은?",
    options: [
      { id: "a", label: "평일 가능", scores: { ZENITH: 2, VECTOR: 2 } },
      { id: "b", label: "주말 위주", scores: { ORBIT: 2, AXIS: 1 } },
      { id: "c", label: "야간만", scores: { ORBIT: 3 } },
      { id: "d", label: "불규칙", scores: { ORBIT: 2 } },
    ],
  },
  {
    id: "safety",
    text: "모의던전에서 안전절차 때문에 고득점을 포기해야 한다면?",
    hint: "정답 없음. 중단 판단도 평가다.",
    options: [
      { id: "a", label: "안전정지를 누른다", scores: { ZENITH: 2, VECTOR: 1 } },
      { id: "b", label: "팀 상황을 더 확인한다", scores: { VECTOR: 2 } },
      { id: "c", label: "규정/조건을 먼저 확인한다", scores: { AXIS: 2, ZENITH: 1 } },
      { id: "d", label: "잘 모르겠다", scores: { ORBIT: 1, ZENITH: 1 } },
    ],
  },
  {
    id: "awaken",
    text: "현재 각성 상태는?",
    options: [
      { id: "a", label: "미각성", scores: { AXIS: 1 } },
      { id: "b", label: "검사 중", scores: { ZENITH: 1 } },
      { id: "c", label: "조기각성", scores: { NOVA: 5 }, novaEligible: true },
      { id: "d", label: "공개하고 싶지 않음", scores: { ZENITH: 1, AXIS: 1 } },
    ],
  },
  {
    id: "distance",
    text: "집 또는 학교에서 대치동까지는?",
    options: [
      { id: "a", label: "도보 · 20분 안쪽", scores: { ZENITH: 2, VECTOR: 1 } },
      { id: "b", label: "지하철 한 번", scores: { AXIS: 1, VECTOR: 1 } },
      { id: "c", label: "환승 포함 40분+", scores: { AXIS: 1, ORBIT: 2 } },
      { id: "d", label: "한강 너머, 한 시간 이상", scores: { ORBIT: 4 } },
    ],
  },
  {
    id: "goal",
    text: "지금은 무엇을 확정하고 싶나요?",
    options: [
      { id: "a", label: "이번 학기 시간표", scores: { ORBIT: 2, ZENITH: 1 } },
      { id: "b", label: "실기 기준점", scores: { VECTOR: 2 } },
      { id: "c", label: "학업과 수강의 균형", scores: { AXIS: 3 } },
      { id: "d", label: "능력의 사용 범위", scores: { NOVA: 2, ZENITH: 1 } },
      { id: "e", label: "아직 모름. 과잉 확정 싫음", scores: { ZENITH: 2, AXIS: 1 } },
    ],
  },
];

export type ScoreMap = Record<ClassId, number>;

export const EMPTY_SCORES: ScoreMap = {
  ZENITH: 0,
  VECTOR: 0,
  AXIS: 0,
  ORBIT: 0,
  NOVA: 0,
};

const TIE_BREAK: ClassId[] = ["ZENITH", "AXIS", "VECTOR", "ORBIT", "NOVA"];

export function tallyPlacement(
  answers: Record<string, string>,
): { scores: ScoreMap; novaEligible: boolean; result: ClassId } {
  const scores: ScoreMap = { ...EMPTY_SCORES };
  let novaEligible = false;

  for (const question of PLACEMENT_QUESTIONS) {
    const optionId = answers[question.id];
    const option = question.options.find((o) => o.id === optionId);
    if (!option) continue;
    if (option.novaEligible) novaEligible = true;
    for (const [key, value] of Object.entries(option.scores)) {
      const classId = key as ClassId;
      scores[classId] += value ?? 0;
    }
  }

  const candidates: ClassId[] = novaEligible
    ? ["ZENITH", "VECTOR", "AXIS", "ORBIT", "NOVA"]
    : ["ZENITH", "VECTOR", "AXIS", "ORBIT"];

  let result = candidates[0];
  let best = -1;
  for (const id of candidates) {
    const value = scores[id];
    if (value > best) {
      best = value;
      result = id;
      continue;
    }
    if (value === best && TIE_BREAK.indexOf(id) < TIE_BREAK.indexOf(result)) {
      result = id;
    }
  }

  if (!novaEligible && result === "NOVA") {
    result = "ZENITH";
  }

  return { scores, novaEligible, result };
}

export const PLACEMENT_STORAGE_KEY = "dk-placement-last";
