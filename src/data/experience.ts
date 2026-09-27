export interface ExperienceItem {
  id: string;
  company: string;
  period: string;
  roleKey: string;
  highlightKeys: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "neco",
    company: "Neco Industry Management Company",
    period: "2020 – Present",
    roleKey: "neco",
    highlightKeys: ["neco.1", "neco.2", "neco.3", "neco.4"],
  },
  {
    id: "risloo",
    company: "Risloo",
    period: "2023 – 2024",
    roleKey: "risloo",
    highlightKeys: ["risloo.1", "risloo.2", "risloo.3", "risloo.4"],
  },
  {
    id: "orchid",
    company: "Orchid Pharmed / Bornafit Dr. Kaviani",
    period: "2019 – 2020",
    roleKey: "orchid",
    highlightKeys: ["orchid.1", "orchid.2", "orchid.3"],
  },
  {
    id: "majazeh",
    company: "Majazeh Company",
    period: "2018 – 2019",
    roleKey: "majazeh",
    highlightKeys: ["majazeh.1", "majazeh.2", "majazeh.3"],
  },
  {
    id: "ermile",
    company: "Ermile Company",
    period: "2016 – 2018",
    roleKey: "ermile",
    highlightKeys: ["ermile.1", "ermile.2"],
  },
];
