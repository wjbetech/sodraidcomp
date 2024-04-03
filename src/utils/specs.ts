export type ClassName = "druid" | "mage" | "hunter" | "paladin" | "priest" | "rogue" | "shaman" | "warlock" | "warrior";

export type SpecName =
  | "druid_balance"
  | "druid_feral_bear"
  | "druid_feral_cat"
  | "druid_resto"
  | "mage_arcane"
  | "mage_healer"
  | "mage_fire"
  | "mage_frost"
  | "hunter_bm"
  | "hunter_mm"
  | "hunter_surv"
  | "paladin_holy"
  | "paladin_prot"
  | "paladin_retri"
  | "priest_disc"
  | "priest_holy"
  | "priest_shadow"
  | "rogue_assass"
  | "rogue_combat"
  | "rogue_tank"
  | "rogue_subtlety"
  | "shaman_ele"
  | "shaman_enhance"
  | "shaman_tank"
  | "shaman_resto"
  | "warlock_affli"
  | "warlock_demo"
  | "warlock_tank"
  | "warlock_destro"
  | "warrior_arms"
  | "warrior_fury"
  | "warrior_prot"
  | "warrior_glad";

export interface ClassesAndSpecs {
  [className: string]: SpecName[];
}

export const classesAndSpecs: ClassesAndSpecs = {
  druid: ["druid_balance", "druid_feral_bear", "druid_feral_cat", "druid_resto"],
  mage: ["mage_arcane", "mage_healer", "mage_fire", "mage_frost"],
  hunter: ["hunter_bm", "hunter_mm", "hunter_surv"],
  paladin: ["paladin_holy", "paladin_prot", "paladin_retri"],
  priest: ["priest_disc", "priest_holy", "priest_shadow"],
  rogue: ["rogue_assass", "rogue_combat", "rogue_tank", "rogue_subtlety"],
  shaman: ["shaman_ele", "shaman_enhance", "shaman_tank", "shaman_resto"],
  warlock: ["warlock_affli", "warlock_demo", "warlock_tank", "warlock_destro"],
  warrior: ["warrior_arms", "warrior_fury", "warrior_prot", "warrior_glad"],
};
