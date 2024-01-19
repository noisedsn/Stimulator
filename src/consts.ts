import { t } from "./i18n.ts";

export const EN_UI_LABELS = {
  AppName: "Stimulator",
  SuspendTitle: "Disable Automatic Suspending",
  IdleTitle: "Disable Screen Blanking",
  Indefinitely: "Current state: Indefinitely",
  SystemDefault: "Current state: System default",
  About: "About Stimulator",
  SimulatorActive: "Stimulator is active",
  Comments: "Keep desktop awake",
  Keywords: "caffeine;nosleep;awake;keepawake;keepon;",
};

export const UI_LABELS = {
  AppName: t(EN_UI_LABELS.AppName),
  SuspendTitle: t(EN_UI_LABELS.SuspendTitle),
  IdleTitle: t(EN_UI_LABELS.IdleTitle),
  Indefinitely: t(EN_UI_LABELS.Indefinitely),
  SystemDefault: t(EN_UI_LABELS.SystemDefault),
  About: t(EN_UI_LABELS.About),
  SimulatorActive: t(EN_UI_LABELS.SimulatorActive),
  Comments: t(EN_UI_LABELS.Comments),
  Keywords: t(EN_UI_LABELS.Keywords),
};

export const APP_ID = "io.github.sigmasd.stimulator";
export const APP_NAME = UI_LABELS.AppName;
export const VERSION = "0.8.0";
